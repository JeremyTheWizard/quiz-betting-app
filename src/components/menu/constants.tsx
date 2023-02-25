import { CiMedal } from 'react-icons/ci';
import { IoPersonOutline } from 'react-icons/io5';
import { TiHomeOutline } from 'react-icons/ti';

import MoneyBag from '@/components/SVGs/MoneyBag';

export const menuItems = [
  {
    name: 'Home',
    path: '/',
    icon: <TiHomeOutline />,
  },
  {
    name: 'Leader board',
    path: '/leader-board',
    icon: <CiMedal />,
  },
  {
    name: 'Money',
    path: '/money',
    icon: <MoneyBag />,
  },
  {
    name: 'Profile',
    path: '/profile',
    icon: <IoPersonOutline />,
  },
];
