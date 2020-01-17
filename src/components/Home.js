import * as React from 'react';
import { useUserContext } from '../contexts/user';

const Home = () => {
  const user = useUserContext();
  return (
    <main>
      <h1>Welcome {user.name}</h1>
    </main>
  );
};

export default Home;
