const md5 = require("md5")

function param(title) {
    let lts = "" + (new Date).getTime()
    let salt = lts + parseInt(10 * Math.random(), 10)
    let sign = md5("fanyideskweb" + title + salt + "Y2FYu%TNSbMCxc3t2u^XT")
    return [salt, sign, lts]
}

console.log(param())