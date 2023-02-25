import { useRouter } from 'next/router';
import React from 'react';

import clsxm from '@/lib/clsxm';

import { menuItems } from '@/components/menu/constants';

const Menu = () => {
  const route = useRouter();

  return (
    <div className='sticky bottom-3 z-[999] flex w-full items-center justify-around rounded-full border-2 border-primary-500 bg-white p-4'>
      {menuItems.map((item) => {
        return (
          <span
            className={clsxm([
              'aspect-square text-2xl text-black',
              route.pathname === item.path && 'text-primary-500',
            ])}
            key={item.name}
          >
            {item.icon}
          </span>
        );
      })}
    </div>
  );
};

export default Menu;
