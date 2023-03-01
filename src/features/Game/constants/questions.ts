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
      question: 'What team does LeBron James currently play for?',
      options: [
        'Philadelphia 76ers',
        'Boston Celtics',
        'Los Angeles Lakers',
        'Miami Heat',
      ],
      answer: 'Los Angeles Lakers',
    },

    {
      question: 'What year did LeBron James win his first NBA championship?',
      options: ['2002', '2007', '2012', '2015'],
      answer: '2012',
    },

    {
      question: 'In what year was LeBron James drafted into the NBA?',
      options: ['2000', '2002', '2004', '2006'],
      answer: '2003',
    },

    {
      question: 'Which of the following awards has LeBron James not won?',
      options: [
        'MVP',
        'Finals MVP',
        'Defensive Player of the Year',
        'Rookie of the Year',
      ],
      answer: 'Rookie of the Year',
    },

    {
      question: 'What high school did LeBron James attend?',
      options: [
        'Oak Hill Academy',
        'St. Vincent–St. Mary High School',
        'Rice High School',
        'Upper Room Christian Academy',
      ],
      answer: 'St. Vincent–St. Mary High School',
    },

    {
      question: 'What number does LeBron James currently wear?',
      options: ['6', '7', '8', '23'],
      answer: '23',
    },

    {
      question: 'What award did LeBron James win for the 2008-2009 season?',
      options: [
        'Most Improved Player',
        'MVP',
        'Finals MVP',
        'Defensive Player of the Year',
      ],
      answer: 'MVP',
    },

    {
      question: 'Which of the following teams has LeBron James not played for?',
      options: [
        'Los Angeles Lakers',
        'Miami Heat',
        'Cleveland Cavaliers',
        'Golden State Warriors',
      ],
      answer: 'Golden State Warriors',
    },

    {
      question: 'What position does LeBron James play?',
      options: [
        'Point Guard',
        'Shooting Guard',
        'Small Forward',
        'Power Forward',
      ],
      answer: 'Small Forward',
    },

    {
      question: 'What year did LeBron James win his first NBA MVP award?',
      options: ['2007', '2010', '2012', '2013'],
      answer: '2009',
    },

    {
      question: 'How many NBA championships has LeBron James won?',
      options: ['1', '2', '3', '4'],
      answer: '3',
    },

    {
      question:
        'What year did LeBron James win his first NBA Finals MVP award?',
      options: ['2007', '2011', '2013', '2015'],
      answer: '2012',
    },

    {
      question:
        'What team did LeBron James win his first NBA championship with?',
      options: [
        'Cleveland Cavaliers',
        'Boston Celtics',
        'Los Angeles Lakers',
        'Miami Heat',
      ],
      answer: 'Miami Heat',
    },

    {
      question:
        'In what year did LeBron James return to the Cleveland Cavaliers?',
      options: ['2011', '2012', '2014', '2016'],
      answer: '2014',
    },

    {
      question: 'What year did LeBron James win his first Olympic gold medal?',
      options: ['2008', '2012', '2016', '2020'],
      answer: '2008',
    },

    {
      question:
        'What year did LeBron James win his first NBA All-Star MVP award?',
      options: ['2006', '2008', '2011', '2013'],
      answer: '2006',
    },

    {
      question:
        'Which of the following teams has LeBron James not led to an NBA Finals appearance?',
      options: [
        'Miami Heat',
        'Los Angeles Lakers',
        'Cleveland Cavaliers',
        'Golden State Warriors',
      ],
      answer: 'Golden State Warriors',
    },
  ],
};
