const fs = require('fs');
//babel库相关: 解析, 转换, 构建, 生产
const parser = require('@babel/parser'); // 解析JavaScript源码为AST
const traverse = require('@babel/traverse').default; // 遍历源码
const types = require('@babel/types'); // 构建节点和类型判断
const generator = require('@babel/generator').default; // AST结构转为JS代码
const template = require('@babel/template').default; // 代码模板

// ------2.引入源码并解析为AST结构------

// 导入混淆代码

encode_file = './encode.js'
let jscode = fs.readFileSync(encode_file, {encoding: 'utf-8'});
// 将JavaScript代码解析为AST结构
let ast = parser.parse(jscode);

// ------3.编写插件并运行------
console.time('AST解析处理完成, 耗时');

// 插件1(插件描述)
parserNumericLiteral = {
    NumericLiteral(path){
        if (path.node.extra){
            delete path.node.extra
        }
    }
}; // 编写插件代码
// 运行遍历插件
traverse(ast, parserNumericLiteral, opts= {});
const {decodeStr} = require('./decryptStr');
funcList = ['_0x41322e', '_0x2b6f48', '_0x305b05', '_0x43944f', '_0x24aa1e', '_0x3d3480', '_0x583002', '_0x37691e',
    '_0x4601fc', '_0x2b73ee', '_0x28f6', '_0x103bbe', '_0x3489ff', '_0xf91f10', '_0x2334e5', '_0x12458d',
    '_0x36f023', '_0x30f702', '_0x1ca3b5', '_0x584ae8', '_0x5d316a', '_0x56a79d', '_0x29e497', '_0x3fde92',
    '_0x430ddf', '_0xea1a43', '_0x474517', '_0x5d22f8', '_0x35539f', '_0x40e918', '_0x5bc669', '_0x40e918',
    '_0x5bc669', '_0x5d24ad', '_0x50006c', '_0x2aa75a', '_0x75a544', '_0x31bf53', '_0x3c311d', '_0x3aac0d',
    '_0x29a936', '_0x59b23c', '_0x4825d3', '_0x3e58a9', '_0x51e26c', '_0x370532', '_0x4b8764', '_0x271a4c', '_0xed0b02'];
parseCallExpression = {
    CallExpression(path){
        let {callee, arguments} = path.node;
        if (!types.isIdentifier(callee) || arguments.length != 2){
            return
        }
        if (!funcList.includes(callee.name) || !arguments.every((val) => types.isPureish(val))){
            return;
        }
        // console.log(arguments[0].value, arguments[1].value)
        let value = decodeStr(arguments[0].value, arguments[1].value);
        console.log(path.toString(), '-->', value)
        path.replaceWith(types.valueToNode(value))

    }
}
traverse(ast, parseCallExpression, opts= {});

// 插件2(...)

console.timeEnd('AST解析处理完成, 耗时');

// ------4.导出保存处理完成的代码------
//生成新的JavaScript代码, 并保存到文件中输出
let {code} = generator(ast);
decode_file = './decode_result.js'
fs.writeFile(decode_file, code, (err)=>{});