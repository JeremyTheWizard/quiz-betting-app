import { Capacitor } from '@capacitor/core';
import { Tab } from '@headlessui/react';
import React, { useState } from 'react';
import { createPortal } from 'react-dom';

import Carousel from '@/components/carousel/Carousel';
import Menu from '@/components/menu/Menu';
import Profile from '@/components/profiles/Profile';
import TabGroup from '@/components/tabs/TabGroup';
import TabPanel from '@/components/tabs/TabPanel';

import LeaderBoard from '@/features/Game/components/leader-board/LeaderBoard';
import Payment from '@/features/Game/components/payment/Payment';
import InviteFriends from '@/features/Game/components/Quiz/InviteFriends';
import PlayersInfiniteScroll from '@/features/Game/components/Quiz/PlayersInfiniteScroll';
import Quiz from '@/features/Game/components/Quiz/Quiz';
import QuizCard from '@/features/Game/components/Quiz/QuizCard';
import { categories } from '@/features/Game/constants/categories';
import { NFTs } from '@/features/Game/constants/NFTs';
import { players } from '@/features/Game/constants/players';
import { questions } from '@/features/Game/constants/questions';
import { trendingQuizzes } from '@/features/Game/constants/quizzes';
import { useQuizContext } from '@/features/Game/contexts/QuizContext';
import { useTabsContext } from '@/features/Game/contexts/TabsContext';

import { tierQuizzes } from './constants/quizzes';
import TextField from '../../components/inputs/TextField';

const Game = () => {
  const {
    setActiveStep: setActiveQuizStep,
    setPreQuestions,
    setQuestions,
    setActiveQuiz,
    activeQuiz,
  } = useQuizContext();
  const [showInviteFriends, setShowInviteFriends] = useState(false);
  const { selectedTab } = useTabsContext();

  const handleTrendingQuizClick = (quizIdentifier: string) => {
    setActiveQuiz(true);
    setActiveQuizStep('pre-questions');

    const category = trendingQuizzes[quizIdentifier].category;
    const NFTInfo =
      NFTs[category.player?.name || category.team?.name || 'Lebron James'];

    setPreQuestions({
      NFTFlowId: NFTInfo[Math.floor(Math.random() * NFTInfo?.length ?? 0)],
      players: players,
      requiredBet: trendingQuizzes[quizIdentifier].entryPrice,
      categoryImage: trendingQuizzes[quizIdentifier].image,
    });

    setQuestions(
      questions[category.player?.name || category.team?.name || 'Lebron James']
    );
  };

  const handleTierQuizClick = (quizIdentifier: string) => {
    setActiveQuiz(true);
    setActiveQuizStep('pre-questions');

    const category = tierQuizzes[quizIdentifier].category;
    const NFTInfo =
      NFTs[category.player?.name || category.team?.name || 'Lebron James'];

    setPreQuestions({
      NFTFlowId: NFTInfo[Math.floor(Math.random() * NFTInfo?.length ?? 0)],
      players: players,
      requiredBet: tierQuizzes[quizIdentifier].entryPrice,
      categoryImage: tierQuizzes[quizIdentifier].image,
    });

    setQuestions(
      questions[category.player?.name || category.team?.name || 'Lebron James']
    );
  };

  const home = () => {
    return (
      <>
        <section className='mb-3 max-w-[95vw] space-y-9 mobile-demo:w-[450px]'>
          {Capacitor.isNativePlatform() ? (
            <div
              className='sticky top-0 z-[999] flex bg-dark pb-4'
              style={{
                paddingTop: 'calc(2px + env(safe-area-inset-top))',
              }}
            >
              <div className='mx-auto w-[85vw] mobile-demo:w-[450px]'>
                <TextField
                  startAdornment='search'
                  placeHolder='Search by player or team'
                />
              </div>
            </div>
          ) : (
            <div className='flex gap-4'>
              <TextField
                startAdornment='search'
                placeHolder='Search by player or team'
              />
            </div>
          )}
          {Capacitor.getPlatform() === 'ios' ? (
            <Tab.List className='!mt-5 flex flex-col items-center gap-4 mobile-m:flex-row'>
              {categories.map((category, index) => {
                return (
                  <Tab
                    key={index}
                    className='flex w-full justify-center rounded-full border-2 border-primary-500 p-2 hover:bg-green-600 active:bg-green-500'
                  >
                    {category.image}
                  </Tab>
                );
              })}
            </Tab.List>
          ) : (
            <Tab.List className='flex flex-col items-center gap-4 mobile-m:flex-row'>
              {categories.map((category, index) => {
                return (
                  <Tab
                    key={index}
                    className='flex w-full justify-center rounded-full border-2 border-primary-500 p-2 hover:bg-green-600 active:bg-green-500'
                  >
                    {category.image}
                  </Tab>
                );
              })}
            </Tab.List>
          )}
          <TabPanel className='space-y-9'>
            <div>
              <h2>Trending Quiz Bets</h2>
              <Carousel
                indicators={false}
                className='left-2/4 w-screen -translate-x-2/4 items-center justify-center child:gap-2 mobile-demo:w-[500px]'
              >
                {Object.keys(trendingQuizzes).map((quizIdentifier, index) => {
                  return (
                    <QuizCard
                      key={index}
                      players={trendingQuizzes[quizIdentifier].players}
                      // entryPrice={trendingQuizzes[quizIdentifier].entryPrice}
                      title={trendingQuizzes[quizIdentifier].title}
                      image={trendingQuizzes[quizIdentifier].image}
                      onClick={() => handleTrendingQuizClick(quizIdentifier)}
                    />
                  );
                })}
              </Carousel>
            </div>
            <div>
              <h2>By Tier Quiz Bets</h2>
              <Carousel
                indicators={false}
                className='left-2/4 w-screen -translate-x-2/4 items-center justify-center child:gap-2 mobile-demo:w-[500px]'
              >
                {Object.keys(tierQuizzes).map((quizIdentifier, index) => {
                  return (
                    <QuizCard
                      key={index}
                      players={tierQuizzes[quizIdentifier].players}
                      // entryPrice={tierQuizzes[quizIdentifier].entryPrice}
                      title={tierQuizzes[quizIdentifier].title}
                      type={tierQuizzes[quizIdentifier].type}
                      image={tierQuizzes[quizIdentifier].image}
                      onClick={() => handleTierQuizClick(quizIdentifier)}
                    />
                  );
                })}
              </Carousel>
            </div>

            <div>
              <div className='flex items-center justify-between gap-3'>
                <h2>Friends</h2>
                <span
                  onClick={() => setShowInviteFriends(true)}
                  className='text-gradient-primary text-sm font-bold'
                >
                  + Invite Friends
                </span>
              </div>
              <PlayersInfiniteScroll players={players} className='mt-6' />
            </div>
          </TabPanel>
          <TabPanel className='mt-6 flex justify-center'>
            <span className='h2'>Coming Soon</span>
          </TabPanel>
          <TabPanel className='mt-6 flex justify-center'>
            <span className='h2'>Coming Soon</span>
          </TabPanel>
          <TabPanel className='justly-center mt-6 flex'>
            <span className='h2'>Coming Soon</span>
          </TabPanel>
        </section>

        {createPortal(<Menu />, document.body)}
      </>
    );
  };

  const renderGame = () => {
    if (activeQuiz) {
      return <Quiz />;
    }
    if (showInviteFriends) {
      return <InviteFriends setOpen={setShowInviteFriends} />;
    }
    if (selectedTab === 'home') {
      return home();
    }
    if (selectedTab === 'leader-board') {
      return <LeaderBoard />;
    }
    if (selectedTab === 'payment') {
      return <Payment />;
    }
    if (selectedTab === 'profile') {
      return <Profile />;
    }

    return <></>;
  };

  return <TabGroup>{renderGame()}</TabGroup>;
};

export default Game;
