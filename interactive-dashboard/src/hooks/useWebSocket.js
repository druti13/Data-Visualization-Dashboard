import { useEffect } from 'react';

const useWebSocket = (setData) => {
  useEffect(() => {
    const socket = new WebSocket('wss://example.com/socket');

    socket.onmessage = (event) => {
      const newData = JSON.parse(event.data);
      setData((prevData) => [...prevData, newData]);
    };

    return () => {
      socket.close();
    };
  }, [setData]);
};

export default useWebSocket;
