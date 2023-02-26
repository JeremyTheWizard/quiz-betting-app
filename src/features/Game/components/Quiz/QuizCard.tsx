import React from 'react';
import { IoPersonOutline } from 'react-icons/io5';
import { RiArrowRightSLine } from 'react-icons/ri';
import { RiTimerFlashLine } from 'react-icons/ri';

import clsxm from '@/lib/clsxm';

type Props = {
  title: string;
  type?: string;
  players?: string;
  entryPrice?: string;
  image: JSX.Element;
  time?: string;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

const QuizCard = ({
  players,
  entryPrice,
  title,
  type,
  image,
  time,
  className,
  ...rest
}: Props) => {
  return (
    <div
      {...rest}
      className={clsxm(
        'relative left-2/4 mx-auto flex h-[200px] w-screen -translate-x-2/4 items-end overflow-hidden bg-transparent mobile-m:h-[230px]',
        className
      )}
    >
      <div className='mx-auto flex h-[172px] w-full max-w-[85vw] rounded-xl bg-gradient-primary p-4 mobile-m:h-[200px]'>
        <div className='z-40 flex h-full w-1/3 flex-col'>
          {time && !entryPrice ? (
            <>
              <div className='flex gap-2'>
                <div className='rounded-lg bg-white'>
                  <RiArrowRightSLine size='28' color='#000' />
                </div>
                <div className='flex items-center gap-2'>
                  <IoPersonOutline size='28' color='#fff' />
                  <span className='text-sm text-white'>{players}</span>
                </div>
              </div>
              <div className='mt-2 font-primary text-xs font-bold text-black'>
                <span className='block whitespace-nowrap'>MIN. POOL BET</span>
                <div className='flex gap-1'>
                  <span>${entryPrice}</span>
                  <span className='self-top text-[6px]'>FLOW</span>
                </div>
              </div>
            </>
          ) : time ? (
            <div className='flex items-center justify-center gap-2'>
              <span className='text-3xl'>
                <RiTimerFlashLine />
              </span>
              <span className='text-xl font-semibold'>{time}</span>
            </div>
          ) : (
            <></>
          )}
          {type ? (
            <div className='mt-auto'>
              <h2 className='whitespace-nowrap uppercase text-black'>{type}</h2>
              <h2 className='whitespace-nowrap uppercase'>{title}</h2>
            </div>
          ) : (
            <h2 className='mt-auto uppercase'>{title}</h2>
          )}
        </div>
        <div className='absolute top-0 right-0 h-full w-full child:absolute child:right-0 child:top-0'>
          {image}
        </div>
      </div>
    </div>
  );
};

export default QuizCard;
