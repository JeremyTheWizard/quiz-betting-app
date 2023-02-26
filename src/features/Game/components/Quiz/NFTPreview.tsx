import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import Button from '@/components/buttons/Button';
import SlideUp from '@/components/modals/SlideUp';
import NextImage from '@/components/NextImage';
import PercentageBar from '@/components/percentages/PercentageBar';

import { NFTMedia } from '@/features/Game/constants/NFTs';
import { useQuizContext } from '@/features/Game/contexts/QuizContext';

type Props = {
  setShowNFTPreview: React.Dispatch<React.SetStateAction<boolean>>;
};

const NFTPreview = ({ setShowNFTPreview }: Props) => {
  const { preQuestions, setActiveStep } = useQuizContext();
  const [showInfo, setShowInfo] = useState(false);

  const handleBetClick = () => {
    setActiveStep('questions');
    setShowNFTPreview(false);
  };

  return (
    <>
      <div className='absolute left-2/4 top-0 h-full max-h-screen w-full -translate-x-2/4 overflow-hidden'>
        <video
          onClick={() => setShowInfo(true)}
          className='h-full w-full scale-110 object-cover'
          src={NFTMedia(preQuestions.NFTInfo.NFTId, 'video-tall')}
          autoPlay
          loop
          muted
        />
      </div>
      <PercentageBar percentage={80} />
      <div className='z-40 mt-6 flex w-full items-center justify-between'>
        <div className='flex w-full items-center gap-2'>
          <div className='rounded-full bg-gradient-primary'>
            <NextImage
              src='/images/image-placeholder.png'
              alt=''
              fill
              className='relative h-8 w-8 rounded-full'
              imgClassName='object-cover object-center rounded-full'
            />
          </div>
          <span className='text-se block text-base'>
            {preQuestions.NFTInfo.NFTName}
          </span>
        </div>
        <span className='text-2xl' onClick={() => setShowNFTPreview(false)}>
          <AiOutlineClose />
        </span>
      </div>
      {showInfo && (
        <SlideUp open={showInfo} setOpen={setShowInfo}>
          <div className='space-y-4 text-black'>
            <div className='flex w-full items-center justify-between'>
              <div className='flex items-center gap-1'>
                <span className='text-3xl font-bold'>
                  {preQuestions.NFTInfo.NFTTotalPrice}
                </span>
                <div className='text-[10px]'>
                  <span className='block'>FLOW</span>
                  <span>Avg. Sale</span>
                </div>
              </div>
              <div className='flex h-10 w-24 flex-col items-center justify-center rounded-full bg-black px-3 py-1 text-2xs text-white'>
                <span className='block text-center'>SOLD BY</span>
                <span>39 collectors</span>
              </div>
            </div>
            <div className='flex justify-between gap-1'>
              <span className='w-min text-3xl font-bold'>
                {preQuestions.NFTInfo.NFTName}
              </span>
              <div className='my-auto flex h-10 w-24 flex-col items-center justify-center rounded-full bg-black px-3 py-1 text-2xs text-white'>
                <span className='block text-center'>42 FOR SALE</span>
              </div>
            </div>
            <div className='flex items-center justify-between gap-4'>
              <p className='text-2xs'>{preQuestions.NFTInfo.NFTDescription}</p>
              <div className='flex w-full items-center rounded-full bg-gradient-primary py-1.5 px-2.5 text-black'>
                <div className='flex justify-center gap-1'>
                  <span className='h3 whitespace-nowrap'>
                    MIN BET ${preQuestions.requiredBet}
                  </span>
                  <span className='text-2xs'>FLOW</span>
                </div>
              </div>
            </div>
            <Button
              variant='dark'
              size='lg'
              onClick={() => handleBetClick()}
              className='!mt-8'
            >
              Enter to Pool Bet
            </Button>
          </div>
        </SlideUp>
      )}
    </>
  );
};

export default NFTPreview;
