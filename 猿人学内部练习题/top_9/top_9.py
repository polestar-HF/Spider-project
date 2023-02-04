import requests

# 本题难点是寻找js加密代码, 这题与top2的区别在于，本题不会提前请求一次而返回js代码，只有不带cookie中的sign请求才会返回js混淆代码
# js混淆代码推荐使用猿人学提供的在线解ob混淆网页（http://tool.yuanrenxue.com/decode_obfuscator）再将解密后的代码(任有混淆)再用夜幕在线解ob混淆解密（https://ob.nightteam.cn/）
headers = {
    "Proxy-Connection": "keep-alive",
    "Pragma": "no-cache",
    "Cache-Control": "no-cache",
    "Upgrade-Insecure-Requests": "1",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "Accept-Language": "zh-CN,zh;q=0.9"
}
cookies = {
    "Hm_lvt_337e99a01a907a08d00bed4a1a52e35d": "1646658797",
    "no-alert": "true",
    "sessionid": "9wvgk1my7yjs82ikwjmld0lmulk5cyny",
    # 重点
    # "sign": "1646658823355~fa282e2a16bee4a724d9669bc42a8eaa",
    "Hm_lpvt_337e99a01a907a08d00bed4a1a52e35d": "1646664070"
}
url = "http://www.python-spider.com/challenge/9"
response = requests.get(url, headers=headers, cookies=cookies)

print(response.text)
print(response)
