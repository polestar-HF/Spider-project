# -*- coding: utf-8 -*-
# @Time    : 2021/10/24 10:59
# @Author  : Ram.zhang
# @File    : pwd.py
# @Software: PyCharm
import hashlib
# 微信公众号 login -> pwd参数（MD5加密）


def pwd(password: str):
    return hashlib.md5(password.encode()).hexdigest()


if __name__ == '__main__':
    print(pwd('99439943'))
