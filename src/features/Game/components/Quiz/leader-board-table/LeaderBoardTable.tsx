import React from 'react';

import clsxm from '@/lib/clsxm';

import NextImage from '@/components/NextImage';

type Props = {
  className?: string;
  figureClassName?: string;
};

const LeaderBoardTable = ({ className, figureClassName }: Props) => {
  return (
    <div className={clsxm(['space-y-8', className])}>
      {Array.from({ length: 10 }).map((_, index) => {
        return (
          <div
            key={index}
            className='flex w-full items-center justify-between gap-1'
          >
            <div className='flex items-center gap-4'>
              <span>{index + 1}</span>
              <NextImage
                src='/images/image-placeholder.png'
                alt='Image placeholder'
                className={clsxm([
                  'relative h-12 w-12 rounded-full border-4 border-primary-500',
                  figureClassName,
                ])}
                imgClassName='object-cover rounded-full'
                fill
              />
              <span className='text-ellipsis'>Name</span>
            </div>
            <span>2019 pts</span>
          </div>
        );
      })}
    </div>
  );
};

export default LeaderBoardTable;
