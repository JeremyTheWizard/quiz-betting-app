import React, { ReactNode, useContext, useState } from 'react';

import { PreQuestions, Questions, Quiz } from '@/features/Game/types/Types';

import { PostQuestions } from '../types/Types';

type QuizContext = {
  activeQuiz: boolean;
  setActiveQuiz: React.Dispatch<React.SetStateAction<boolean>>;
  activeStep: 'pre-questions' | 'questions' | 'post-questions';
  setActiveStep: React.Dispatch<
    React.SetStateAction<'pre-questions' | 'questions' | 'post-questions'>
  >;
  preQuestions: PreQuestions;
  setPreQuestions: React.Dispatch<React.SetStateAction<PreQuestions>>;
  questions: Questions;
  setQuestions: React.Dispatch<React.SetStateAction<Questions>>;
  postQuestions: PostQuestions;
  setPostQuestions: React.Dispatch<React.SetStateAction<PostQuestions>>;
};

export const QuizContext = React.createContext<QuizContext>({} as QuizContext);

export const useQuizContext = () => {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error('useQuizContext must be used within a QuizContextProvider');
  }
  return context;
};

const QuizContextProvider = ({ children }: { children: ReactNode }) => {
  const [activeQuiz, setActiveQuiz] = useState(false);
  const [activeStep, setActiveStep] =
    useState<Quiz['activeStep']>('pre-questions');
  const [preQuestions, setPreQuestions] = useState<PreQuestions>({
    NFTInfo: {
      NFTPreview: '',
      NFTThumbnail: '',
      NFTId: '',
      NFTName: '',
      NFTDescription: '',
      NFTTotalPrice: '',
    },
    players: [{ profileImage: '', handle: '', points: 0, countryImage: '' }],
    categoryImage: '',
    requiredBet: '',
  });
  const [questions, setQuestions] = useState<Questions>({} as Questions);
  const [postQuestions, setPostQuestions] = useState<PostQuestions>(
    {} as PostQuestions
  );

  return (
    <QuizContext.Provider
      value={{
        activeQuiz,
        setActiveQuiz,
        activeStep,
        setActiveStep,
        preQuestions,
        setPreQuestions,
        questions,
        setQuestions,
        postQuestions,
        setPostQuestions,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export default QuizContextProvider;
