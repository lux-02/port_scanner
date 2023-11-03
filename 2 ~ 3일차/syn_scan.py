from scapy.all import IP, TCP, sr1, RandShort
import multiprocessing
import logging

logging.getLogger("scapy.runtime").setLevel(logging.ERROR)

def syn_scan(args):
    target_ip, port = args

    source_port = RandShort()
    packet = IP(dst=target_ip) / TCP(sport=source_port, dport=port, flags="S")

    response = sr1(packet, timeout=0.1, verbose=0)

    if response:
        if response[TCP].flags == "SA":
            return f"Port {port} is open."
    return None

def main():
    target_ip = "43.200.177.222"
    ports = range(1, 5000)
    
    pool = multiprocessing.Pool(processes=multiprocessing.cpu_count()) 
    for result in pool.imap(syn_scan, [(target_ip, port) for port in ports]):
        if result:
            print(result)

if __name__ == "__main__":
    main()