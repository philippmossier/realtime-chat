import { AppProps } from 'next/dist/shared/lib/router/router';
import SocketsProvider from '../context/socket.context';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SocketsProvider>
      <Component {...pageProps} />
    </SocketsProvider>
  );
}

export default MyApp;
