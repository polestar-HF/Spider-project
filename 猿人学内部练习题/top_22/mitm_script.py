# -*- coding: utf-8 -*-
# @Time    : 2022/5/14 22:05
# @Author  : Ram.zhang
# @File    : mitm_script.py
# @Software: PyCharm
import mitmproxy
from mitmproxy import ctx
from mitmproxy.exceptions import TlsException


def tcp_start(self, flow: mitmproxy.tcp.TCPFlow):
    """
    A TCP connection has started.
    """
    ctx.log(f"tcp_start: {flow}")