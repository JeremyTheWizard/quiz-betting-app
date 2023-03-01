import React from 'react';
import { createPortal } from 'react-dom';

import Menu from '@/components/menu/Menu';
import NextImage from '@/components/NextImage';

const Profile = () => {
  return (
    <>
      <div className='absolute mt-6 flex flex-col items-center gap-3 mobile-l:inset-center'>
        <NextImage
          src='/images/demo-profile.png'
          alt='Image placeholder'
          className='relative h-32 w-32 rounded-full border-4 border-primary-500'
          imgClassName='object-cover rounded-full'
          fill
        />
        <span className='block'>IamjackRider</span>
        <span className='text-gradient-primary block'>3950 pts.</span>
        <span className='h1 text-gradient-primary mt-20 text-center'>
          Under Construction
        </span>
      </div>
      {createPortal(<Menu />, document.body)}
    </>
  );
};

export default Profile;
