import React from 'react';

import NextImage from '@/components/NextImage';

import { useQuizContext } from '@/features/Game/contexts/QuizContext';

const NFTThumbnail = () => {
  const { preQuestions } = useQuizContext();

  return (
    <>
      <div className='relative w-full rounded-3xl border-2 border-primary-500 p-3 pb-20'>
        <div className='absolute -bottom-1 left-2/4 h-2 w-8/12 -translate-x-2/4 bg-dark'></div>
        <div className='absolute -bottom-0 left-2/4 h-16 w-[calc(66.66666%+4px)] -translate-x-2/4 rounded-t-3xl border-2 border-b-0  border-primary-500'></div>
        <div className='flex w-full flex-col items-center self-start'>
          <span className='h2'>{preQuestions.NFTInfo.NFTName}</span>
          <p className='text-[10px]'>{preQuestions.NFTInfo.NFTDescription}</p>
          <NextImage
            src={preQuestions.NFTInfo.NFTThumbnail}
            alt={`NFT ${preQuestions.NFTInfo.NFTDescription}`}
            className='relative my-2 h-[350px] w-full'
            imgClassName='object-contain'
            fill
          />
        </div>
      </div>
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
    </>
  );
};

export default NFTThumbnail;
