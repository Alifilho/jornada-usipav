from socket import socket, AF_INET, SOCK_STREAM
import os


def connect():
    client = socket(AF_INET, SOCK_STREAM)
    client.connect(os.environ.get("SOCKET_ADDRESS"))

    response = client.recv(1024).decode()
    print('Server response:', response)
