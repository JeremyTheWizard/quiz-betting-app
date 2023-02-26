const baseImgSrc = '/images/friends/';

export const friends: {
  imgSrc: string;
  name: string;
  phone: string;
  invited?: boolean;
}[] = [
  {
    imgSrc: baseImgSrc + '0.png',
    name: 'Lauralee Quintero',
    phone: '+1-300-555-0135',
  },
  {
    imgSrc: baseImgSrc + '1.png',
    name: 'Annabel Rohan',
    phone: '+1-202-555-0136',
    invited: true,
  },
  {
    imgSrc: baseImgSrc + '2.png',
    name: 'Alfonzo Schuessler',
    phone: '+1-300-555-0119',
  },

  {
    imgSrc: baseImgSrc + '3.png',
    name: 'Augustina Midgett',
    phone: '+1-300-555-0161',
  },
  {
    imgSrc: baseImgSrc + '4.png',
    name: 'Freida Varnes',
    phone: '+1-300-555-0136',
    invited: true,
  },
  {
    imgSrc: baseImgSrc + '5.png',
    name: 'Francene Vandyne',
    phone: '+1-202-555-0167',
  },
  {
    imgSrc: baseImgSrc + '6.png',
    name: 'Geoffrey Mott',
    phone: '+1-202-555-0119',
  },
  {
    imgSrc: baseImgSrc + '7.png',
    name: 'Rayford Chenail',
    phone: '+1-202-555-0171',
    invited: true,
  },
  {
    imgSrc: baseImgSrc + '8.png',
    name: 'Florencio Dorrance',
    phone: '+1-300-555-0171',
  },
];
