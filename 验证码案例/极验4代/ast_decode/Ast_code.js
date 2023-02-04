const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const t = require("@babel/types");
const generator = require("@babel/generator").default;
const fs = require("fs");

// #######################################
// 还原需要用到的js源码
// #######################################
khCTZ.$_AY = function() {
    // 从gcaptcha4.js源码中抠出来
}();
khCTZ.$_BS = function() {
    // 从gcaptcha4.js源码中抠出来
}();
khCTZ.$_Cl = function() {
    // 从gcaptcha4.js源码中抠出来
};
khCTZ.$_DX = function() {
    // 从gcaptcha4.js源码中抠出来
};
function khCTZ() {}

// #######################################


// #######################################
// AST解析函数
// #######################################
// 删除节点中的extra属性（二进制、Unicode等编码 -> utf-8）
function replace_unicode(path) {
    let node = path.node;
    if (node.extra === undefined)
        return;
    delete node.extra;
}

// 定义一个全局变量，存放待替换变量名
let name_array = [];

function get_name_array(path) {
    let {kind, declarations} = path.node
    if (kind !== 'var'
        || declarations.length !== 3
        || declarations[0].init === null
        || declarations[0].init.property === undefined)
        return;
    if (declarations[0].init.property.name !== "$_Cl")
        return;
    // 获取待替换节点变量名
    let name1 = declarations[0].id.name
    // 获取待输出变量名
    let name2 = declarations[2].id.name
    // 将变量名存入数组
    name_array.push(name1, name2)

    // 删除下一个节点
    path.getNextSibling().remove()
    // 删除下一个节点
    path.getNextSibling().remove()
    // 删除path节点
    path.remove()
}

function replace_name_array(path) {
    let {callee, arguments} = path.node
    if (callee === undefined || callee.name === undefined)
        return;
    // 不在name_array中的节点不做替换操作
    if (name_array.indexOf(callee.name) === -1)
        return;
    // 调用khCTZ.$_Cl函数获取结果
    let value = khCTZ.$_Cl(arguments[0].value);
    // 创建节点并替换结果
    let string_node = t.stringLiteral(value)
    path.replaceWith(string_node)
}

function replace_$_Cl(path) {
    let {arguments, callee} = path.node
    // 解析arguments参数
    if (arguments.length !== 1) return;
    if (arguments[0].type !== 'NumericLiteral') return;

    // 解析callee
    if (callee.type !== 'MemberExpression') return;
    let {object, property} = callee;
    if (object.type !== 'Identifier' || property.type !== 'Identifier') return;

    if (property.name === '$_Cl') {
        // 计算值
        let value = khCTZ.$_Cl(arguments[0].value);
        // 创建节点并替换
        let string_node = t.stringLiteral(value)
        path.replaceWith(string_node)
    }
}

// 控制流平坦化
function replace_ForStatement(path) {
    var node = path.node;

    // 获取上一个节点，也就是VariableDeclaration
    var PrevSibling = path.getPrevSibling();
    // 判断上个节点的各个属性，防止报错
    if (PrevSibling.type === undefined
        || PrevSibling.container === undefined
        || PrevSibling.container[0].declarations === undefined
        || PrevSibling.container[0].declarations[0].init === null
        || PrevSibling.container[0].declarations[0].init.object === undefined
        || PrevSibling.container[0].declarations[0].init.object.object === undefined)
        return;
    if (PrevSibling.container[0].declarations[0].init.object.object.callee.property.name !== '$_DX')
        return;

    // SwitchStatement节点
    var body = node.body.body;
    // 判断当前节点的body[0]属性和body[0].discriminant是否存在
    if (!t.isSwitchStatement(body[0]))
        return;
    if (!t.isIdentifier(body[0].discriminant))
        return;

    // 获取控制流的初始值
    var argNode = PrevSibling.container[0].declarations[0].init;
    var init_arg_f = argNode.object.property.value;
    var init_arg_s = argNode.property.value;
    var init_arg = khCTZ.$_DX()[init_arg_f][init_arg_s];

    // 提取for节点中的if判断参数的value作为判断参数
    var break_arg_f = node.test.right.object.property.value;
    var break_arg_s = node.test.right.property.value;
    var break_arg = khCTZ.$_DX()[break_arg_f][break_arg_s];

    // 提取switch下所有的case
    var case_list = body[0].cases;
    var resultBody = [];

    // 遍历全部的case
    for (var i = 0; i < case_list.length; i++) {
        for (; init_arg != break_arg;) {

            // 提取并计算case后的条件判断的值
            var case_arg_f = case_list[i].test.object.property.value;
            var case_arg_s = case_list[i].test.property.value;
            var case_init = khCTZ.$_DX()[case_arg_f][case_arg_s];

            if (init_arg == case_init) {
                //当前case下的所有节点
                var targetBody = case_list[i].consequent;

                // 删除break节点，和break节点的上一个节点的一些无用代码
                if (t.isBreakStatement(targetBody[targetBody.length - 1])
                    && t.isExpressionStatement(targetBody[targetBody.length - 2])
                    && targetBody[targetBody.length - 2].expression.right.object.object.callee.object.name == "khCTZ") {

                    // 提取break节点的上一个节点AJgjJ.EMf()后面的两个索引值
                    var change_arg_f = targetBody[targetBody.length - 2].expression.right.object.property.value;
                    var change_arg_s = targetBody[targetBody.length - 2].expression.right.property.value;

                    // 修改控制流的初始值
                    init_arg = khCTZ.$_DX()[change_arg_f][change_arg_s];

                    targetBody.pop(); // 删除break
                    targetBody.pop(); // 删除break节点的上一个节点
                }
                //删除break
                else if (t.isBreakStatement(targetBody[targetBody.length - 1])) {
                    targetBody.pop();
                }
                resultBody = resultBody.concat(targetBody);
                break;
            } else {
                break;
            }
        }
    }
    //替换for节点，多个节点替换一个节点用replaceWithMultiple
    path.replaceWithMultiple(resultBody);

    //删除上一个节点
    PrevSibling.remove();
}

// 删除无关函数
function delete_func(path) {
    let {expression} = path.node
    if (expression === undefined
        || expression.left === undefined
        || expression.left.property === undefined)
        return;
    if (expression.left.property.name === '$_AY'
        || expression.left.property.name === '$_Cl'
        || expression.left.property.name === '$_BS'
        || expression.left.property.name === '$_DX'
    ) {
        path.remove()
    }
}

// #######################################


// #######################################
// AST还原流程
// #######################################
// 需要解码的文件位置
let encode_file = "gcaptcha4.js"
// 解码后的文件位置
let decode_file = "gcaptcha4_decode.js"

// 读取需要解码的js文件, 注意文件编码为utf-8格式
let jscode = fs.readFileSync(encode_file, {encoding: "utf-8"});

// 将js代码修转成AST语法树
let ast = parser.parse(jscode);
// AST结构修改逻辑
const visitor = {
    StringLiteral: {
        enter: [replace_unicode]
    },
    VariableDeclaration: {
        enter: [get_name_array]
    },
    CallExpression: {
        enter: [replace_name_array, replace_$_Cl]
    },
    ForStatement: {
        enter: [replace_ForStatement]
    },
    ExpressionStatement: {
        enter: [delete_func]
    },
}

// 遍历语法树节点，调用修改函数
traverse(ast, visitor);

// 将ast转成js代码，{jsescOption: {"minimal": true}} unicode -> 中文
let {code} = generator(ast, opts = {jsescOption: {"minimal": true}});
// 将js代码保存到文件
fs.writeFile(decode_file, code, (err) => {
});
