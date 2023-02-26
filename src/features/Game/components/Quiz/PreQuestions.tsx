import React, { useState } from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { CiMedal } from 'react-icons/ci';
import { HiOutlineUserGroup } from 'react-icons/hi';

import Button from '@/components/buttons/Button';

import InviteFriends from '@/features/Game/components/Quiz/InviteFriends';
import NFTPreview from '@/features/Game/components/Quiz/NFTPreview';
import NFTThumbnail from '@/features/Game/components/Quiz/NFTThumbnail';
import PlayersInfiniteScroll from '@/features/Game/components/Quiz/PlayersInfiniteScroll';
import { useQuizContext } from '@/features/Game/contexts/QuizContext';

const PreQuestions = () => {
  const { setActiveQuiz, preQuestions, setActiveStep } = useQuizContext();
  const [showNFTPreview, setShowNFTPreview] = useState(false);
  const [showInviteFriends, setShowInviteFriends] = useState(false);

  const summary = () => {
    return (
      <div>
        <div className='flex justify-between gap-2'>
          <div className='flex items-center gap-4'>
            <span
              onClick={() => setActiveQuiz(false)}
              className='cursor-pointer text-2xl text-white'
            >
              <BsArrowLeft />
            </span>
            <span className='h2'>POOL BET</span>
          </div>
        </div>
        <div className='mt-6 flex w-full flex-col items-center'>
          <div className='text-gradient-primary mb-4 flex items-center gap-1'>
            <span className='text-2xl text-primary-500'>
              <CiMedal />
            </span>
            <span className='font-secondary text-lg'>REWARD</span>
          </div>
          <NFTThumbnail onClick={() => setShowNFTPreview(true)} />
          <div className='relative -top-14 flex w-3/5 items-center justify-center rounded-3xl bg-white py-5'>
            <div className='flex gap-1 text-black'>
              <span className='h1 my-auto w-full text-center'>
                ${preQuestions.NFTInfo.NFTTotalPrice}
              </span>
              <div className='my-auto w-full text-[10px]'>
                <span className='block'>FLOW</span>
                <span>Avg Sale</span>
              </div>
            </div>
          </div>
          <div className='relative -top-8 w-full'>
            <div className='h3 rounded-full bg-gradient-primary p-2.5 text-black'>
              <div className='flex justify-center gap-1'>
                <span>MIN BET ${preQuestions.requiredBet}</span>
                <span className='text-[10px]'>FLOW</span>
              </div>
            </div>

            <div className='mt-10 flex w-full items-center justify-between gap-2'>
              <div className='flex items-center gap-2 text-xl'>
                <span className='text-2xl'>
                  <HiOutlineUserGroup />
                </span>
                <span>Players</span>
                <span>{preQuestions.players.length}</span>
              </div>
              <span
                onClick={() => setShowInviteFriends(true)}
                className='text-gradient-primary text-sm font-bold'
              >
                + Invite Friends
              </span>
            </div>

            <PlayersInfiniteScroll
              players={preQuestions.players}
              className='mt-8'
            />
            <Button
              onClick={() => setActiveStep('questions')}
              variant='outline'
              size='lg'
              className='mt-2 py-4'
            >
              Place Bet
            </Button>
          </div>
        </div>
      </div>
    );
  };

  const renderPreQuestions = () => {
    if (showNFTPreview) {
      return <NFTPreview setShowNFTPreview={setShowNFTPreview} />;
    }
    if (showInviteFriends) {
      return <InviteFriends setOpen={setShowInviteFriends} />;
    }
    return summary();
  };

  return renderPreQuestions();
};

export default PreQuestions;
