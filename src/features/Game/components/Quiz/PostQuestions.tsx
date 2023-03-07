import { Capacitor } from '@capacitor/core';
import clsx from 'clsx';
import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { CiMedal } from 'react-icons/ci';

import Account from '@/components/account/Account';
import Button from '@/components/buttons/Button';

import LeaderBoardTable from '@/features/Game/components/Quiz/leader-board-table/LeaderBoardTable';
import NFTThumbnail from '@/features/Game/components/Quiz/NFTThumbnail';
import { useQuizContext } from '@/features/Game/contexts/QuizContext';

const PostQuestions = () => {
  const { preQuestions, reset } = useQuizContext();

  const handleQuizDone = () => {
    reset();
  };

  return (
    <div
      className={clsx(
        Capacitor.getPlatform() === 'ios' &&
          'mt-8 pt-[calc(env(safe-area-inset-bottom))]',
        'relative flex flex-col'
      )}
    >
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

      <NFTThumbnail className='mt-6' NFTFlowId={preQuestions.NFTFlowId} />
      <div className='relative -top-9 mx-auto flex w-3/5 items-center justify-center'>
        <div className='text-gradient-primary mb-4 flex items-center gap-1'>
          <span className='text-3xl text-primary-500'>
            <CiMedal />
          </span>
          <span className='font-primary text-lg'>REWARD</span>
        </div>
      </div>

      <>
        <Account />
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
