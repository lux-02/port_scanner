import socket
import random
import itertools
import multiprocessing

def syn_scan(target_ip, port):
    try:
        # TCP raw 소켓 생성
        raw_socket = socket.socket(socket.AF_INET, socket.SOCK_RAW, socket.IPPROTO_RAW)
        raw_socket.setsockopt(socket.IPPROTO_IP, socket.IP_HDRINCL, 1)
        raw_socket.settimeout(0.2)
        
        # 소스 포트 번호 랜덤 선택
        source_port = random.randint(1024, 65535)
        
        # SYN 패킷 구성
        ip_header = b"\x45\x00\x00\x28" # IP 헤더 (Version, IHL, TOS, Total Length)
        ip_header += b"\x00\x00\x40\x00" # IP 헤더 (Identification, Flags, Fragment Offset)
        ip_header += b"\x40\x06\x00\x00" # IP 헤더 (TTL, Protocol, Header Checksum)

        # IP 문자열을 이진형태로 반환하여 헤더에 추가
        ip_my_addr = socket.gethostbyname(socket.gethostname())
        ip_header += socket.inet_aton(ip_my_addr)
        ip_header += socket.inet_aton(target_ip)

        tcp_header = b"\x00\x00" # TCP 헤더 (Source Port)
        tcp_header += port.to_bytes(2, "big") # TCP 헤더 (Destination Port)
        tcp_header += b"\x00\x00\x00\x00" # TCP 헤더 (Sequence Number)
        tcp_header += b"\x00\x00\x00\x00" # TCP 헤더 (Acknowledgment Number)
        tcp_header += b"\x50\x02\x00\x00" # TCP 헤더 (Data Offset, Flags, Window Size)
        tcp_header += b"\x00\x00\x00\x00" # TCP 헤더 (Checksum, Urgent Pointer)
        tcp_header += b"\x00\x00\x00\x00"

        # 패킷 전송
        raw_socket.sendto(ip_header + tcp_header, (target_ip, port))
        
        # 응답 처리
        response, _ = raw_socket.recvfrom(4096)
        if response:
            tcp_flags = int.from_bytes(response[33:34], "big")
            if tcp_flags == 18: # SYN-ACK 응답 확인
                return f"{target_ip} : Port {port} is open."
            elif tcp_flags == 20: # RST 응답 확인
                return f"{target_ip} : Port {port} is closed."
        return f"{target_ip} : Port {port} is filtered"
    
    except socket.timeout:
        return f"{target_ip} : Port {port} is filtered. Timeout"

    except Exception as e:
        return f"Port {port} state is unknown. Error: {str(e)}"
    finally:
        raw_socket.close()

def main():
    target_ip = "43.200.177.222"
    numbers = range(1, 100)
    num_process = 5

    with multiprocessing.Pool(processes=num_process) as pool:
        results = pool.starmap(syn_scan, zip(itertools.repeat(target_ip), numbers))

    for result in results:
        print(result)

if __name__ == "__main__":
    main()