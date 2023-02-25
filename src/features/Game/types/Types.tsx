import PostQuestions from '@/features/Game/components/Quiz/PostQuestions';

import { Player } from '@/types/types';

export type PreQuestionsNFTInfo = {
  NFTPreview: string;
  NFTThumbnail: string;
  NFTName: string;
  NFTDescription: string;
  NFTTotalPrice: string;
  NFTId: string;
};

export type PreQuestions = {
  NFTInfo: PreQuestionsNFTInfo;
  categoryImage: JSX.Element;
  requiredBet: string;
  players: Player[];
};

export type Quiz = {
  activeStep: 'pre-questions' | 'questions' | 'post-questions';
  preQuestions: PreQuestions;
  // TODO: Move the questions to a DB
  questions: Questions;

  PostQuestions?: PostQuestions;
};

export type Questions = [
  {
    question: string;
    options: string[];
    answer: string;
  }
];

export type PostQuestions = {
  placeholder: undefined;
};
