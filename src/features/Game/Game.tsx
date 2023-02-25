import React from 'react';

import Button from '@/components/buttons/Button';

import { useWeb3Context } from '@/contexts/Web3';

const Game = () => {
  const { user, magicLogout } = useWeb3Context();

  return (
    <div>
      <h1>Game</h1>
      <h2>User: {user.magic.addr}</h2>
      <Button onClick={magicLogout}>Logout</Button>
    </div>
  );
};

export default Game;
