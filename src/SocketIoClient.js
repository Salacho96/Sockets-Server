import React, { useEffect } from 'react';
const socket = require('socket.io-client')('http://localhost:3000');

function SocketIoClient() {
  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connected to server');
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from server');
    });

    // Listen for any event
    socket.on('any', (data) => {
      console.log('Received data:', data);
    });
  }, []);

  return <div>Socket.io client</div>
}

export default SocketIoClient;