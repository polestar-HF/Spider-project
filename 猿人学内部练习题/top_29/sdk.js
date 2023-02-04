const initCycleTLS = require('cycletls');
// Typescript: import initCycleTLS from 'cycletls';

let result = 0

function request(page) {
    (async () => {
    // Initiate CycleTLS
    const cycleTLS = await initCycleTLS();

    // Send request
    const response = await cycleTLS('http://spider.wangluozhe.com/challenge/api/9', {
        body: `page=${page}&count=10&_signature=MTY2NjQ0NzM5MDU0MQ==`,
        ja3: '771,4865-4866-4867-49195-49199-49196-49200-52393-52392-49171-49172-156-157-47-53,0-23-65281-10-11-35-16-5-13-18-51-45-43-27-17513,29-23-24,0',
        userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36",
        headers:  {
            "Accept": "application/json, text/javascript, */*; q=0.01",
            "Accept-Language": "zh-CN,zh;q=0.9",
            "Cache-Control": "no-cache",
            "Connection": "keep-alive",
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            "Origin": "http://spider.wangluozhe.com",
            "Pragma": "no-cache",
            "Referer": "http://spider.wangluozhe.com/challenge/9?page=2&limit=10",
            "X-Requested-With": "XMLHttpRequest"},
        cookies: [{
            name: "session",
            value: "9258e523-eb7a-43c3-9021-d7a8727e2c74.AVsqcG0ocn06nwmvrMnGIUEbGZU"
        }]
        // proxy: 'http://username:password@hostname.com:443'
    }, 'post');

        for (const data of response.body.data) {
            result += data.value
        }
        console.log(`${page} => ${result}`)
    // Cleanly exit CycleTLS
    cycleTLS.exit();

})();
}

for (let page = 0; page < 101; page++) {
    request(page)
}
console.log(`总和: ${result}`)