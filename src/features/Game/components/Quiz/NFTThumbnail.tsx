import React from 'react';

import clsxm from '@/lib/clsxm';

import NextImage from '@/components/NextImage';

import { useQuizContext } from '@/features/Game/contexts/QuizContext';

type Props = {
  className?: string;
};

const NFTThumbnail = ({ className }: Props) => {
  const { preQuestions } = useQuizContext();

  return (
    <>
      <div
        className={clsxm([
          'relative w-full rounded-3xl border-2 border-primary-500 p-3 pb-20',
          className,
        ])}
      >
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
    </>
  );
};

export default NFTThumbnail;
