import { useEffect, useState, useRef } from 'react';
import io from 'socket.io-client';
import styles from '@/styles/Home.module.css';
import wellKnownPorts from '@/public/data/wellKnownPorts';

export default function Home() {
  const [ip, setIp] = useState('');
  const [results, setResults] = useState([]);
  const [detail, setDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const socketRef = useRef(null);

  useEffect(() => {
    const socket = io("ws://3.38.154.124:5001");
    socketRef.current = socket;

    socket.on("scanResult", (data) => {
      const result = data;
      console.log(data);
      if (result) {
        setResults((prevResults) => [
          ...prevResults,
          {
            port: result.port,
            banner: result.banner
          }
        ]);
      }
    });

    socket.on('connect', () => {
      console.log('Socket Connected');
    });

    socket.on('disconnect', () => {
      console.log('Socket Disconnected');
    });

    return () => {
      socket.close();
    };
  }, []);

  const handleScan = () => {
    if (socketRef.current && socketRef.current.connected) {
      setIsLoading(true);
      socketRef.current.emit("startScan", {
        target_ip: ip
      });
    } else {
      console.error('Socket not connected.');
    }
  };

  function showDetail(port, banner) {
    setDetail({ port, banner });
  }

  return (
    <div className={`${styles.wrap}`}>
      <h1 className={`${styles.title}`}>SHARKS SCANNER</h1>
      <div className={`${styles.inputWrap}`}>
        <input
          type="text"
          value={ip}
          onChange={(e) => setIp(e.target.value)}
          placeholder="43.200.177.222"
        />
        <button onClick={handleScan}>{isLoading ? 'Loading...' : 'START'}</button>
      </div>
      <div className={styles.results}>
        {results.map((result, index) => (
          <div key={index} className={styles["result-item"]} onClick={() => showDetail(result.port, result.banner)}>
            <strong>{result.port}</strong>
            {result.banner ? <span> : {parseBanner(result.port, result.banner)}</span> : ''}
          </div>
        ))}
      </div>
      {
        detail && (
          <div className={styles.detail}>
            <div className={styles.detailBox}>
              <h3>Port: {detail.port}</h3>
              <p>{detail.banner || 'Open port without banner.'}</p>
            </div>
          </div>
        )
      }
    </div >
  );
}

function parseBanner(port, banner) {
  if (wellKnownPorts[port]) {
    return wellKnownPorts[port];
  }
  return banner;
}
