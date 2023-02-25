import React from 'react';

import clsxm from '@/lib/clsxm';

import PlayerCard from '@/components/Player/PlayerCard';

import { Player } from '@/types/types';

type Props = {
  players: Player[];
  className?: string;
};

const PlayersInfiniteScroll = ({ players, className }: Props) => {
  return (
    <div
      className={clsxm([
        'hover:pause relative flex animate-auto-friends-slider gap-2.5',
        className,
      ])}
    >
      {[...players, ...players].map((friend, index) => {
        return (
          <PlayerCard
            key={index}
            profileImage={friend.profileImage}
            handle={friend.handle}
            points={friend.points}
            countryImage={friend.countryImage}
          />
        );
      })}
    </div>
  );
};

export default PlayersInfiniteScroll;
