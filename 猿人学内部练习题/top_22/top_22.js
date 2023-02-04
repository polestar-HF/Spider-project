const tls = require('tls');
const https = require('https');

const defaultCiphers = tls.DEFAULT_CIPHERS.split(':');
const shuffledCiphers = [
    defaultCiphers[0],
    // Swap the 2nd & 3rd ciphers:
    defaultCiphers[2],
    defaultCiphers[1],
    ...defaultCiphers.slice(3)
].join(':');

request = require('https').get('https://www.python-spider.com/api/challenge22', {
    ciphers: shuffledCiphers
}).on('response', (res) => {
    console.log(res.statusCode); // Prints 200
});