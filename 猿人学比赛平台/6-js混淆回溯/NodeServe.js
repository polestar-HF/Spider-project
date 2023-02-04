// npm需安装express和body-parser

var express = require('express')
var app = express()
var encode = require('./top6')  // 导入decode_text模块，并命名为decode
var bodyParser = require('body-parser');  // 导入请求体解析器
// 调整参数大小限制，否则会提示参数过大。
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

// 开启decode_text路由
app.post('/param_m', function (req, res) {
    // 获取请求的真实IP
    var ip = req.headers['x-real-ip'] ? req.headers['x-real-ip'] : req.ip.replace(/::ffff:/, '');
    // 获取请求时间
    var time = new Date().toString().replace(/\+0800.*/, '');
    // 打印请求时间、IP、方法、路由
    console.log('INFO:', time, ip, req.method, req.originalUrl, '200 OK!');
    // 获取POST请求的formdata
    let result = req.body;
    let content = JSON.parse(result.content); // 接收 python 传的参数
    console.log(content.pwd, content.times)
    let seed = result.seed;
    let ts = result.ts;

    // 调用decode模块中的parseText方法，该方法需要提前module.exports导出
    var text = encode.param(content.pwd, content.times);
    // 设置响应头，如果不设置，通过asyncio_requests请求的res.json()会报错，因为它是根据响应头解析json数据
    // 而requests可以直接使用res.json()解析，因为它是根据响应信息解析
    res.set('Content-Type', 'application/json')
    // 将JSON后的数据返回客户端
    res.send(JSON.stringify(text));
});

app.listen(8919, () => {
    console.log("开启服务，端口8919", new Date().toString().replace(/\+0800.*/, ''))
})