import { createContext, useContext, useState } from 'react';
import io from 'socket.io-client';
import { SOCKET_URL } from '../config/default';
import EVENTS from '../config/events';

const socket = io(SOCKET_URL);

const SocketContext = createContext({ socket });

function SocketsProvider(props: any) {
  // use only as long as we do not have events to trigger
  const [_, setConnected] = useState('');
  socket.on(EVENTS.connection, (value) => {
    setConnected(value);
  });

  return <SocketContext.Provider value={{ socket }} {...props} />;
}

export const useSockets = () => useContext(SocketContext);

export default SocketsProvider;
