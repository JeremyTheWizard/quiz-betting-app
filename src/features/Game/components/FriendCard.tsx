import React from 'react';

import NextImage from '@/components/NextImage';

type Props = {
  profileImage: string;
  handle: string;
  points: number;
  countryImage: string;
};

const FriendCard = ({ profileImage, handle, points, countryImage }: Props) => {
  return (
    <div className='flex h-[100px] items-center bg-transparent'>
      <div className='flex h-[63px] w-[135px] flex-col justify-between space-y-1.5 rounded-lg bg-white p-1.5'>
        <div className='flex gap-2'>
          <NextImage
            src={profileImage}
            width={32}
            height={32}
            className='absolute -top-[0.05rem] aspect-square'
            imgClassName='rounded-full'
            alt={`${handle} profile image`}
          />
          <span className='ml-auto text-ellipsis text-[10px] text-black'>
            {handle}
          </span>
        </div>
        <div className='mt-auto flex items-end justify-between gap-2'>
          <NextImage
            src={countryImage}
            className='relative aspect-square h-6 w-6 rounded-full'
            fill
            imgClassName='rounded-full'
            alt={`${handle} profile image`}
          />
          <div className='rounded-full bg-dark p-1.5 text-[10px]'>
            {points} POINTS
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendCard;
