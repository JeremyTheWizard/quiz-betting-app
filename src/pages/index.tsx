import { Capacitor } from '@capacitor/core';
import { useEffect, useState } from 'react';

import 'react-circular-progressbar/dist/styles.css';

import CircularProgress from '@/components/circular-progress/CircularProgress';
import OnDarkLogo from '@/components/logos/OnDarkLogo';
import NextImage from '@/components/NextImage';

import { useWeb3Context } from '@/contexts/Web3';
import Authentication from '@/features/auth/Authentication';
import QuizContextProvider from '@/features/Game/contexts/QuizContext';
import TabsContextProvider from '@/features/Game/contexts/TabsContext';
import Game from '@/features/Game/Game';

import { Platform } from '../constants/types';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * They type was override in additional.d.ts
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

export default function HomePage() {
  const { user } = useWeb3Context();
  const [loginReady, setLoginReady] = useState(false);
  // used to avoid hydration failed due to server side rendering
  const [platform, setPlatform] = useState<Platform | undefined>(undefined);

  useEffect(() => {
    setPlatform(Capacitor.getPlatform() as Platform);
  }, []);

  useEffect(() => {
    if (!Capacitor.isNativePlatform()) {
      /* Due to bad browser performance preloading images, a timeout is used instead to still show the loading screen.
      Check https://github.com/vercel/next.js/pull/19118 */
      setTimeout(() => {
        setLoginReady(true);
      }, 2800);
    }
  }, []);

  const renderPage = () => {
    if (platform === undefined) {
      return;
    }
    // Native platforms can't have gifs as loading screens
    if (loginReady || ['ios', 'android'].includes(platform ?? '')) {
      if (user.magic.loggedIn || user.fcl.loggedIn) {
        return (
          <QuizContextProvider>
            <TabsContextProvider>
              <Game />
            </TabsContextProvider>
          </QuizContextProvider>
        );
      }
      return <Authentication />;
    } else {
      return loading();
    }
  };

  const loading = () => {
    return (
      <>
        {platform === 'ios' ? (
          <div style={{ paddingTop: 'calc(2px + env(safe-area-inset-top))' }}>
            <OnDarkLogo />
            <NextImage
              src='/images/loading-app.gif'
              alt='loading app'
              fill
              className='absolute left-2/4 top-0 min-h-screen w-screen -translate-x-2/4 mobile-demo:w-[500px]'
              imgClassName='object-cover object-top'
            />
            <div className='absolute bottom-20 left-2/4 h-48 w-48 -translate-x-2/4'>
              <CircularProgress
                duration={2400}
                intervalDuration={200}
                value={0}
              />
            </div>
          </div>
        ) : (
          <>
            <OnDarkLogo />
            <NextImage
              src='/images/loading-app.gif'
              alt='loading app'
              fill
              className='absolute left-2/4 top-0 min-h-screen w-screen -translate-x-2/4 mobile-demo:w-[500px]'
              imgClassName='object-cover object-top'
            />
            <div className='absolute bottom-20 left-2/4 h-48 w-48 -translate-x-2/4'>
              <CircularProgress
                duration={2400}
                intervalDuration={200}
                value={0}
              />
            </div>
          </>
        )}
      </>
    );
  };

  return (
    <>
      {platform === undefined ? (
        <></>
      ) : platform === 'ios' ? (
        <main className='mx-auto flex h-full max-w-[90vw] flex-col mobile-demo:max-w-[450px]'>
          {renderPage()}
        </main>
      ) : (
        <main className='mx-auto flex h-full max-w-[90vw] flex-col pt-8 pb-10 mobile-demo:max-w-[450px]'>
          {renderPage()}
        </main>
      )}
    </>
  );
}
