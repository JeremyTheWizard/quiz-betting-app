import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { CiMedal } from 'react-icons/ci';

import Button from '@/components/buttons/Button';
import Profile from '@/components/profiles/Profile';

import LeaderBoardTable from '@/features/Game/components/Quiz/leader-board-table/LeaderBoardTable';
import NFTThumbnail from '@/features/Game/components/Quiz/NFTThumbnail';
import { useQuizContext } from '@/features/Game/contexts/QuizContext';

const PostQuestions = () => {
  const { reset } = useQuizContext();

  const handleQuizDone = () => {
    reset();
  };

  return (
    <div className='relative flex flex-col'>
      <span
        className='absolute top-0 right-0 text-3xl'
        onClick={() => handleQuizDone()}
      >
        <AiOutlineClose />
      </span>
      <div className='text-gradient-primary flex w-full flex-col items-center gap-1'>
        <span className='h2 block font-secondary'>Good Job!</span>
        <span className='font-secondary'>You Get +2019 Quiz Points</span>
      </div>

      <NFTThumbnail className='mt-6' />
      <div className='relative -top-9 mx-auto flex w-3/5 items-center justify-center'>
        <div className='text-gradient-primary mb-4 flex items-center gap-1'>
          <span className='text-3xl text-primary-500'>
            <CiMedal />
          </span>
          <span className='font-primary text-lg'>REWARD</span>
        </div>
      </div>

      <>
        <Profile />
        <LeaderBoardTable className='mt-6' />
      </>

      <Button
        onClick={() => handleQuizDone()}
        variant='outline'
        className='mt-8 py-5'
      >
        Done
      </Button>
    </div>
  );
};

export default PostQuestions;
