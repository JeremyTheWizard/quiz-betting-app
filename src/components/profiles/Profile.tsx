import React from 'react';

import NextImage from '@/components/NextImage';

const profile = () => {
  return (
    <div className='flex flex-col items-center gap-3'>
      <NextImage
        src='/images/image-placeholder.png'
        alt='Image placeholder'
        className='relative h-32 w-32 rounded-full border-4 border-primary-500'
        imgClassName='object-cover rounded-full'
        fill
      />
      <span className='block'>IamjackRider</span>
      <span className='text-gradient-primary block'>3950 pts.</span>
    </div>
  );
};

export default profile;