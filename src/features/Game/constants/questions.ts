import { Question } from '@/features/Game/types/Types';

// TODO: Move the questions to a DB

export const questions: {
  [key: string]: Question[];
} = {
  'Lebron James': [
    {
      question:
        'What Year was Lebron James Drafted #1 Overall To The Cleveland Cavaliers?',
      options: ['2020', '2003', '2004', '2005'],
      answer: '2003',
    },
    {
      question:
        'What Year was Lebron James Drafted #1 Overall To The Cleveland Cavaliers?',
      options: ['2020', '2003', '2004', '2005'],
      answer: '2003',
    },
  ],
};
