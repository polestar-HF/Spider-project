const WebSocket = require('ws')


var ws = new WebSocket("wss://www.python-spider.com/api/challenge64");
ws.binaryType = 'arraybuffer'

call = function (num) {
    ws.send(num)
    // $("#page").paging({
    //     nowPage: num,
    //     pageNum: 100,
    //     buttonNum: 7,
    //     canJump: 1,
    //     showOne: 1,
    //     callback: function (num) {
    //         call(num)
    //     },
    // })
}
;
ws.onopen = function () {
    call(1)
}

ws.onmessage = function (data) {
    var s = '<tr class="odd">';
    datas = JSON.parse(lop(String.fromCharCode.apply(this, new Uint8Array(data.data)))).data;
}
