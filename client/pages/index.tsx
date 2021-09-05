import { useSockets } from '../context/socket.context';

const Home = () => {
  const { socket } = useSockets();

  return (
    <div>
      <h1>Here is the id:</h1>
      <p>{socket.id}</p>
    </div>
  );
};
export default Home;
