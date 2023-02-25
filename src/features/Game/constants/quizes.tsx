import NextImage from '@/components/NextImage';

export const trendingQuizzes: {
  title: string;
  players: number;
  entryPrice: number;
  image: JSX.Element;
}[] = [
  {
    title: 'Lebron James',
    players: 20,
    entryPrice: 2.25,
    image: (
      <NextImage
        src='/images/lebron-james.png'
        alt=''
        width={245}
        height={194}
        className='!top-2'
      />
    ),
  },
  {
    title: 'Giannis Antetokounmpo',
    players: 5,
    entryPrice: 5.3,
    image: (
      <NextImage
        src='/images/giannis-antetokounmpo.png'
        alt=''
        width={170}
        height={210}
      />
    ),
  },
];

export const tierQuizzes: {
  title: string;
  type: 'legendary' | 'epic' | 'rare' | 'common';
  players: number;
  entryPrice: number;
  image: JSX.Element;
}[] = [
  {
    title: 'Magic',
    type: 'legendary',
    players: 20,
    entryPrice: 20.05,
    image: (
      <NextImage
        src='/images/magic.png'
        alt=''
        width={250}
        height={192}
        className='!top-3'
      />
    ),
  },

  {
    title: 'Kevin Duran',
    type: 'rare',
    players: 5,
    entryPrice: 35.3,
    image: (
      <NextImage
        src='/images/kevin-duran.png'
        alt=''
        width={165}
        height={195}
        className='!top-2'
      />
    ),
  },
];
