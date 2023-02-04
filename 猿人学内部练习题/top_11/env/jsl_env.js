function cookie(js_code) {
    document = {
        cookie: "",
        attachEvent: function () {
        },
        createElement: function (val) {
            return {
                innerHTML: "",
                firstChild: {
                    href: 'https://www.python-spider.com/'
                }
            }
        },
        addEventListener: function (a, b, c) {
            b()
        },
    }
    location = {
        pathname: '/challenge/11',
        search: ''
    }
    window = {
        addEventListener: function () {
        }
    }
    setTimeout = function () {
    }
    eval(js_code)
    return document.cookie
}