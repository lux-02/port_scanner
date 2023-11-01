from scapy.all import IP, TCP, sr1, RandShort
import multiprocessing

def syn_scan(args):

    target_ip, port = args
    # SYN 패킷 생성
    src_port = RandShort()  # 랜덤한 소스 포트
    pkt = IP(dst=target_ip) / TCP(sport=src_port, dport=port, flags="S")

    # 패킷 전송 및 응답 수신
    response = sr1(pkt, timeout=0.2, verbose=0)

    if response:
        if response[TCP].flags == "SA":  # SYN-ACK 플래그
            return f"{target_ip} : Port {port} is open."
    return None

def main():
    target_ip = "43.200.177.222"
    ports = range(1, 100)
    
    # 병렬 처리를 위한 Pool 생성
    pool = multiprocessing.Pool(processes=multiprocessing.cpu_count()) 
    for result in pool.imap(syn_scan, [(target_ip, port) for port in ports]):
        if result:  # 열린 포트 결과만 출력
            print(result)

if __name__ == "__main__":
    main()