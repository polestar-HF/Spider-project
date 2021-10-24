# -*- coding: utf-8 -*-
# @Time    : 2021/10/24 12:33
# @Author  : Ram.zhang
# @File    : password.py
# @Software: PyCharm
import hashlib


# 登录加密字段password --> 是常规的MD5加密

def pwd(password: str) -> str:
    return hashlib.md5(password.encode()).hexdigest()


if __name__ == '__main__':
    print(pwd('123456'))
