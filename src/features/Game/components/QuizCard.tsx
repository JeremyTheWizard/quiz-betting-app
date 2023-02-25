import React from 'react';
import { IoPersonOutline } from 'react-icons/io5';
import { RiArrowRightSLine } from 'react-icons/ri';

type Props = {
  title: string;
  type?: string;
  players: number;
  entryPrice: number;
  image: JSX.Element;
};

const QuizCard = ({ players, entryPrice, title, type, image }: Props) => {
  return (
    <div className='relative left-[15px] mx-auto flex h-[200px] w-[320px] items-end overflow-hidden bg-transparent'>
      <div className='flex h-[172px] w-[300px] rounded-xl bg-gradient-primary p-4'>
        <div className='z-40 flex h-full w-1/3 flex-col'>
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
          {type ? (
            <div className='mt-auto'>
              <h2 className='whitespace-nowrap uppercase text-black'>{type}</h2>
              <h2 className='whitespace-nowrap uppercase'>{title}</h2>
            </div>
          ) : (
            <h2 className='mt-auto uppercase'>{title}</h2>
          )}
        </div>
        <div className='child:absolute child:right-0 child:top-0'>{image}</div>
      </div>
    </div>
  );
};

export default QuizCard;
