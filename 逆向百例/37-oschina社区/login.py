# -*- coding: utf-8 -*-
# @Time    : 2022/6/27 22:35
# @Author  : Ram.zhang
# @File    : login.py
# @Software: PyCharm
import hashlib
import requests

password = hashlib.sha1('weqweqweqwe'.encode()).hexdigest()
print(password)



headers = {
    "Accept": "*/*",
    "Accept-Language": "zh-CN,zh;q=0.9",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    "Origin": "https://www.oschina.net",
    "Pragma": "no-cache",
    "Referer": "https://www.oschina.net/home/login",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36",
    "X-Requested-With": "XMLHttpRequest",
    "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"102\", \"Google Chrome\";v=\"102\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\""
}
cookies = {
    "_user_behavior_": "74f2674b-d2c9-4c46-8cbb-c1f4a0aa1548",
    "_reg_key_": "zVphBs0skf7jrBS6jpKK",
    "yp_riddler_id": "661d7056-4591-4118-b576-fe3031aee607",
    "Hm_lvt_a411c4d1664dd70048ee98afe7b28f0b": "1656339882",
    "Hm_lpvt_a411c4d1664dd70048ee98afe7b28f0b": "1656339984"
}
url = "https://www.oschina.net/action/user/hash_login"
params = {
    "from": ""
}
data = {
    "email": "1111111111",
    "pwd": "11bcf2a7c79f46b46bf3f2a175ac0b376b1f3a00",
    "verifyCode": "dmhn",
    "save_login": 1,
    "google_code": "03AGdBq26AHoz7VdkkKa0dWGRWgsIi33xZH0V8oaUK9X_9U6-I9s0C_tPeBCvThJmp6DKwPhl7973BrheGyWijJEkKsvhrKe3B-yJyrmTKRY24hNm5GKa4L5gt3BJQOttzEeMryTTLPprtjHqnXdAjrs7hUStDNkzAGSjwuvubaxauAs59hGFCyesLpRBvnlxn2BtdGPZHPTQgTRjtPtqoIMl2HZrWeA8iZ33kysM-2ZizVA9B127GkLuJ9o27DiQSJDGOGCF20t6HfX64G_oOOJcdVNk_x-lFZtxBtlaETfo64dC5kxMuYODHky8dSzaxanoq7PanY73Vigd4Pgutcd9crwBtCklkP11RGMJ_0wPiB7px7wqxyvWHe6MXjJ3ZVFbnqana25fxP-uAvE4hhojoz3gNfzpLc59akmcIzTI7x1H-4bcGr7NF-hdDC80jaX1P6OyclenBX6C-XzEiLoZObOV1uGRklw"
}
response = requests.post(url, headers=headers, cookies=cookies, params=params, data=data)

print(response.text)