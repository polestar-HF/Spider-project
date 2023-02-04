const fs = require('fs');
//babel库相关: 解析, 转换, 构建, 生产
const parser = require('@babel/parser'); // 解析JavaScript源码为AST
const traverse = require('@babel/traverse').default; // 遍历源码
const types = require('@babel/types'); // 构建节点和类型判断
const generator = require('@babel/generator').default; // AST结构转为JS代码
const template = require('@babel/template').default; // 代码模板

// 导入解密函数
const {l} = require('./decryotStr')

// ------2.引入源码并解析为AST结构------

// 导入混淆代码
encode_file = './code.js'
let jscode = fs.readFileSync(encode_file, {encoding: 'utf-8'});
// 将JavaScript代码解析为AST结构
let ast = parser.parse(jscode);

// ------3.编写插件并运行------
console.time('AST解析处理完成, 耗时');
funcName = ['w', 'X', 'V', 'W', 'j', 'i'];
// 插件1(插件描述)
parserString = {
    "NumericLiteral|StringLiteral"(path) {
        path.node.extra && delete path.node.extra
    },
    VariableDeclarator(path) {
        let {id, init} = path.node;
        if (!types.isIdentifier(id) || !types.isIdentifier(init)) {
            return;
        }
        if (!funcName.includes(id.name)) {
            return;
        }
        // 加载环境
        console.log(path.toString())
        try {
            eval(path.toString());
        } catch {
            eval(`${id.name} = l`)
        }
        path.remove();

    }
}; // 编写插件代码

// 运行遍历插件
traverse(ast, parserString, opts = {});
// 插件2(...)
const constantFold = {
    "BinaryExpression|UnaryExpression"(path) {
        if (path.isUnaryExpression({operator: "-"}) ||
            path.isUnaryExpression({operator: "void"})) {
            return;
        }
        const {confident, value} = path.evaluate();
        if (!confident)
            return;
        if (typeof value == 'number' && (!Number.isFinite(value))) {
            return;
        }
        path.replaceWith(types.valueToNode(value));
    },
}

traverse(ast, constantFold);

function isBaseLiteral(node) {
    if (types.isLiteral(node)) {
        return true;
    }
    if (types.isUnaryExpression(node, {operator: "-"}) ||
        types.isUnaryExpression(node, {operator: "+"})) {
        return isBaseLiteral(node.argument);
    }

    return false;
}


const decodeObject =
    {
        VariableDeclarator(path) {
            let {node, scope} = path;
            const {id, init} = node;
            if (!types.isObjectExpression(init)) return;

            let properties = init.properties;
            if (properties.length == 0 || !properties.every(property => isBaseLiteral(property.value)))
                return;
            console.log(id.name)
            let binding = scope.getBinding(id.name);
            console.log(binding)
            let {constant, referencePaths} = binding;
            if (!constant) return;

            let newMap = new Map();
            for (const property of properties) {
                let {key, value} = property;
                newMap.set(key.value, value);
            }

            let canBeRemoved = true;
            for (const referPath of referencePaths) {
                let {parentPath} = referPath;
                if (!parentPath.isMemberExpression()) {
                    canBeRemoved = false;
                    return;
                }

                let AncestorPath = parentPath.parentPath;

                if (AncestorPath.isAssignmentExpression({"left": parentPath.node})) {
                    canBeRemoved = false;
                    return;
                }
                if (AncestorPath.isUpdateExpression() && ['++', '--'].includes(AncestorPath.node.operator)) {
                    canBeRemoved = false;
                    return;
                }

                let curKey = parentPath.node.property.value;
                if (!newMap.has(curKey)) {
                    canBeRemoved = false;
                    break;
                }
                parentPath.replaceWith(newMap.get(curKey));
            }
            canBeRemoved && path.remove();
            newMap.clear();
        },
    }


traverse(ast, decodeObject);


const parseCallExpression = {
    CallExpression(path) {
        let {callee, arguments} = path.node;
        if (!types.isIdentifier(callee) || arguments.length != 1) {
            return;
        }
        if (!types.isNumericLiteral(arguments[0]) || !funcName.includes(callee.name)) {
            return;
        }
        let value = eval(path.toString())
        console.log(`${path.toString()} => ${value}`)
        path.replaceWith(types.valueToNode(value))
    }
}

traverse(ast, parseCallExpression)
traverse(ast, constantFold);
console.timeEnd('AST解析处理完成, 耗时');

// ------4.导出保存处理完成的代码------
//生成新的JavaScript代码, 并保存到文件中输出
let {code} = generator(ast, opts = {jsescOption: {"minimal": true}});
decode_file = './decode_result.js'
fs.writeFile(decode_file, code, (err) => {
});

