from flask import Flask
import socket
import ssl
from flask_socketio import SocketIO
from scapy.all import IP, TCP, sr1, RandShort

app = Flask(__name__)
socketio = SocketIO(app, async_mode="threading", cors_allowed_origins="*")

timeout = 0.3

def banner_grabbing(ip, port):
    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    s.settimeout(timeout)

    if port == 443:
        ctx = ssl.create_default_context()
        ctx.check_hostname = False
        ctx.verify_mode = ssl.CERT_NONE

        try:
            s = ctx.wrap_socket(s, server_hostname=ip)
        except ssl.SSLError as e:
            return f"[-] SSL error on port {port}: {e}"

    try:
        s.connect((ip, port))

        if port in [80, 443]:
            s.send(b"GET / HTTP/1.1\r\nHost: %s\r\n\r\n" % ip.encode())

        banner = s.recv(1024).decode(errors='ignore')
        return (port, banner.strip()) if banner else None

    except socket.error as e:
        return None
    finally:
        s.close()

def scan_port(target_ip, port):
    source_port = RandShort()
    packet = IP(dst=target_ip) / TCP(sport=source_port, dport=port, flags="S")
    response = sr1(packet, timeout=0.3, verbose=0)

    if response:
        if response[TCP].flags == "SA":
            result = banner_grabbing(target_ip, port)
            if result:
                port, banner = result
                socketio.emit('scanResult', {'result': (port, banner)})
                print(f"[+] Port {port} is open: {banner}")
    else:
        print(f"[-] Scanning port {port}...")

@socketio.on('startScan')
def handle_start_scan(json):
    target_ip = json['target_ip']
    ports = list(range(1, 4000))
    print(f"[+] Starting scan on {target_ip}")
    for port in ports:
        socketio.start_background_task(scan_port, target_ip, port)
    print("[+] Scan completed!")

if __name__ == '__main__':
    socketio.run(app, host='0.0.0.0', port=5001)
