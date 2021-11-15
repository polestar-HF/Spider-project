let cookie = document.cookie
document = Object.defineProperties(document, {
    'cookie':{
        get: function () {
            console.log('getter: ' + cookie)
            return cookie;
        },
        set: function (value) {
            if (value.includes("spvrscode")){
                debugger;
            }
            console.log('setter: ' + value)
            cookie = value
        }
    }
});
