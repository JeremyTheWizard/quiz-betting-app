import Button from '@/components/buttons/Button';
import Carousel from '@/components/carousel/Carousel';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';

import { useWeb3Context } from '@/contexts/Web3';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * They type was override in additional.d.ts
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

export default function HomePage() {
  const { connect, user, logout } = useWeb3Context();

  const slides = [
    {
      image: (
        <NextImage
          src='/images/fanbet-logo.png'
          alt='Fanbet Logo'
          width={359}
          height={359}
          className='mx-auto'
        />
      ),
      description: '🤑 Bet against friends with NBA Top Shots and earn Flow',
    },
    {
      image: (
        <NextImage
          src='/images/placeholder-image.png'
          alt='Placeholder Image'
          width={359}
          height={359}
          className='mx-auto'
        />
      ),
      description: '🤑 Bet against friends with NBA Top Shots and earn Flow',
    },
  ];

  return (
    <>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main className='mx-auto max-w-[95vw] pt-16'>
        <section className='flex min-h-screen flex-col items-center '>
          <div className='space-y-2'>
            <NextImage
              src='/images/topshot-logo.png'
              alt='Top Shot Logo'
              width={253}
              height={45.54}
            />
            <h1 className='text-gradient-primary text-center tracking-[0.4em]'>
              FANBET
            </h1>
          </div>
          <Carousel className='w-screen' slide={false}>
            {slides.map((slide, index) => (
              <div key={index}>
                {slide.image}
                <p className='mx-auto max-w-[95vw] text-center text-lg'>
                  {slide.description}
                </p>
              </div>
            ))}
          </Carousel>
          <div className='mt-20 w-full space-y-4'>
            <Button
              onClick={user.loggedIn ? logout : connect}
              variant='outline'
              className='w-full'
              size='lg'
            >
              {user.loggedIn ? 'Logout' : 'Login'}
            </Button>
            <Button
              onClick={user.loggedIn ? logout : connect}
              variant='outline'
              className='w-full'
              size='lg'
            >
              Create Account
            </Button>
          </div>
        </section>
      </main>
    </>
  );
}
