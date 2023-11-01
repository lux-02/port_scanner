# server.py
import socket
import datetime

# 서버 정보
HOST = 'localhost'
PORT = 12345

# 소켓 생성
server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

# 서버 소켓을 지정된 호스트와 포트에 바인딩
server_socket.bind((HOST, PORT))

# 클라이언트의 접속을 기다림
server_socket.listen(1)

print('서버가 시작되었습니다.')

while True:
# 클라이언트의 연결을 수락
	client_socket, addr = server_socket.accept()
	print('클라이언트가 접속했습니다:', addr)
	
	# 현재 시간을 가져와서 클라이언트에 보냄
	now = datetime.datetime.now()
	current_time = now.strftime("%Y-%m-%d %H:%M:%S")
	client_socket.sendall(current_time.encode())
	
	# 클라이언트 소켓 종료
	client_socket.close()