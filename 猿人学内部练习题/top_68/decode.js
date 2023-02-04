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
decodeStringLiteral = {
    "StringLiteral|NumericLiteral"(path){
        if(path.node.extra){
            delete path.node.extra
        }
    }
}; // 编写插件代码

// 运行遍历插件
traverse(ast, decodeStringLiteral, opts= {});
// 插件2(...)
//常量折叠插件更新

const constantFold = {
    "BinaryExpression|UnaryExpression"(path) {
        if(path.isUnaryExpression({operator:"-"}) ||
    	   path.isUnaryExpression({operator:"void"}))
    	{
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


console.timeEnd('AST解析处理完成, 耗时');

// ------4.导出保存处理完成的代码------
//生成新的JavaScript代码, 并保存到文件中输出
let {code} = generator(ast);
decode_file = './decode_result.js'
fs.writeFile(decode_file, code, (err)=>{});

