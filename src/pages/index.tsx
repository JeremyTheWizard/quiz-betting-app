import { useEffect, useState } from 'react';

import 'react-circular-progressbar/dist/styles.css';

import Button from '@/components/buttons/Button';
import Carousel from '@/components/carousel/Carousel';
import CircularProgress from '@/components/circular-progress/CircularProgress';
import OnDarkLogo from '@/components/logos/OnDarkLogo';
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
  const [loginReady, setLoginReady] = useState(false);

  useEffect(() => {
    /* Due to bad browser performance preloading images, a timeout is used instead to still show the loading screen.
    Check https://github.com/vercel/next.js/pull/19118 */
    setTimeout(() => {
      setLoginReady(true);
    }, 2500);
  }, []);

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
          src='/images/image-placeholder.png'
          alt='Placeholder Image'
          width={359}
          height={359}
          className='mx-auto'
        />
      ),
      description: '🤑 Bet against friends with NBA Top Shots and earn Flow',
    },
  ];

  const renderPage = () => {
    if (loginReady) {
      return login();
    } else {
      return loading();
    }
  };

  const login = () => {
    return (
      <>
        {/* <Seo templateTitle='Home' /> */}
        <Seo />

        <section className='flex flex-col items-center '>
          <OnDarkLogo />
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
      </>
    );
  };

  const loading = () => {
    return (
      <>
        <OnDarkLogo />
        <NextImage
          src='/images/loading-app.png'
          alt='loading app'
          fill
          className='relative left-2/4 mt-2 h-full w-screen -translate-x-1/2'
          imgClassName='object-cover object-top '
        />
        <div className='absolute bottom-20 left-2/4 h-48 w-48 -translate-x-2/4'>
          <CircularProgress duration={2000} intervalDuration={200} value={0} />
        </div>
      </>
    );
  };

  return (
    <main className='mx-auto flex h-screen max-w-[95vw] flex-col p-16 pb-0'>
      {renderPage()}
    </main>
  );
}
