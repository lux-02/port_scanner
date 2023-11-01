# client.py
import socket

# 서버 정보
HOST = 'localhost'
PORT = 12345

# 소켓 생성 및 서버에 연결
client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
client_socket.connect((HOST, PORT))

# 서버로부터 데이터 수신
received_data = client_socket.recv(1024)

# 수신된 데이터를 문자열로 변환하여 출력
print('서버로부터 받은 시간:', received_data.decode())

# 클라이언트 소켓 종료
client_socket.close()