import { Server, Socket } from 'socket.io';
import logger from './utils/logger';

const EVENTS = {
  connection: 'connection',
};

function socket({ io }: { io: Server }) {
  logger.info('Sockets enabled');

  // use only as long as we do not have events to trigger
  io.on(EVENTS.connection, (socket: Socket) => {
    logger.info(`User connected ${socket.id}`);
    socket.emit(EVENTS.connection, {});
  });
}

export default socket;
