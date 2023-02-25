import React from 'react';
import { createPortal } from 'react-dom';

import Button from '@/components/buttons/Button';
import Carousel from '@/components/carousel/Carousel';
import Menu from '@/components/menu/Menu';

import FriendCard from '@/features/Game/components/FriendCard';
import QuizCard from '@/features/Game/components/QuizCard';
import { categories } from '@/features/Game/constants/categories';
import { trendingQuizzes } from '@/features/Game/constants/quizes';

import { tierQuizzes } from './constants/quizes';
import TextField from '../../components/inputs/TextField';

const Game = () => {
  const friends = [
    {
      profileImage: 'https://i.pravatar.cc/150?img=1',
      handle: '@johndoe',
      points: 100,
      countryImage: '/images/image-placeholder.png',
    },
    {
      profileImage: 'https://i.pravatar.cc/150?img=2',
      handle: '@johndoe',
      points: 100,
      countryImage: '/images/image-placeholder.png',
    },
    {
      profileImage: 'https://i.pravatar.cc/150?img=3',
      handle: '@johndoe',
      points: 100,
      countryImage: '/images/image-placeholder.png',
    },
  ];

  return (
    <>
      <section className='mb-3 max-w-[95vw] space-y-9'>
        <div className='flex gap-4'>
          <TextField
            startAdornment='search'
            placeHolder='Search by player or team'
          />
        </div>

        <div className='flex flex-col gap-4 mobile-m:flex-row'>
          {categories.map((category, index) => {
            return (
              <Button
                variant='outline'
                size='base'
                key={index}
                className='flex items-center justify-center'
              >
                <div>{category.image}</div>
              </Button>
            );
          })}
        </div>

        <div>
          <h2>Trending Quiz Bets</h2>
          <Carousel
            indicators={false}
            className='left-2/4 w-screen -translate-x-2/4 items-center justify-center px-[5vw] child:gap-2'
          >
            {trendingQuizzes.map((quiz, index) => {
              return (
                <QuizCard
                  key={index}
                  players={quiz.players}
                  entryPrice={quiz.entryPrice}
                  title={quiz.title}
                  image={quiz.image}
                />
              );
            })}
          </Carousel>
        </div>
        <div>
          <h2>By Tier Quiz Bets</h2>
          <Carousel
            indicators={false}
            className='left-2/4 w-screen -translate-x-2/4 items-center justify-center px-[5vw] child:gap-2'
          >
            {tierQuizzes.map((quiz, index) => {
              return (
                <QuizCard
                  key={index}
                  players={quiz.players}
                  entryPrice={quiz.entryPrice}
                  title={quiz.title}
                  type={quiz.type}
                  image={quiz.image}
                />
              );
            })}
          </Carousel>
        </div>

        <div>
          <div className='flex items-center justify-between gap-3'>
            <h2>Friends</h2>
            <span className='text-gradient-primary text-sm font-bold'>
              + Invite Friends
            </span>
          </div>
          <div className='hover:pause relative top-6 flex animate-auto-friends-slider gap-2.5 overflow-visible'>
            {[...friends, ...friends].map((friend, index) => {
              return (
                <FriendCard
                  key={index}
                  profileImage={friend.profileImage}
                  handle={friend.handle}
                  points={friend.points}
                  countryImage={friend.countryImage}
                />
              );
            })}
          </div>
        </div>
      </section>
      {createPortal(<Menu />, document.body)}
    </>
  );
};

export default Game;
