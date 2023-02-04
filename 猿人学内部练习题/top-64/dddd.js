const fs = require('fs');
//babel库相关: 解析, 转换, 构建, 生产
const parser = require('@babel/parser'); // 解析JavaScript源码为AST
const traverse = require('@babel/traverse').default; // 遍历源码
const types = require('@babel/types'); // 构建节点和类型判断
const generator = require('@babel/generator').default; // AST结构转为JS代码
const template = require('@babel/template').default; // 代码模板

// ------2.引入源码并解析为AST结构------

// 导入混淆代码

encode_file = './code.js'
let jscode = fs.readFileSync(encode_file, {encoding: 'utf-8'});
// 将JavaScript代码解析为AST结构
let ast = parser.parse(jscode);

// ------3.编写插件并运行------
console.time('AST解析处理完成, 耗时');

traverse(ast, {
    "Literal"(path) {
        delete path.node.extra
    }
})
traverse(ast, {
    "BinaryExpression": {
        exit: function (path) {
            if (types.isUnaryExpression(path.node.left)) {
                lef = path.node.left.operator + path.node.left.argument.value
            } else if (types.isLiteral(path.node.left)) {
                lef = path.node.left.value
            } else {
                return
            }
            if (types.isUnaryExpression(path.node.right)) {
                ri = path.node.right.operator + path.node.right.argument.value
            } else if (types.isLiteral(path.node.right)) {
                ri = path.node.right.value
            } else {
                return
            }
            op = path.node.operator
            if (Number(lef).toString() === "NaN") return;
            if (Number(ri).toString() === "NaN") return;
            zz = eval(Number(lef) + op + Number(ri))
            path.replaceWith(types.valueToNode(zz))
        }
    }
})

console.timeEnd('AST解析处理完成, 耗时');

// ------4.导出保存处理完成的代码------
//生成新的JavaScript代码, 并保存到文件中输出
let {code} = generator(ast);
decode_file = './decode_result.js'
fs.writeFile(decode_file, code, (err)=>{});

