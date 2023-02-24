import React from 'react';

import NextImage from '@/components/NextImage';

const OnDarkLogo = () => {
  return (
    <div className='z-50 flex flex-col items-center gap-2'>
      <NextImage
        src='/images/topshot-logo.png'
        alt='Top Shot Logo'
        width={253}
        height={45}
      />
      <h1 className='text-gradient-primary text-center tracking-[0.4em]'>
        FANBET
      </h1>
    </div>
  );
};

export default OnDarkLogo;
