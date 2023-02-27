import React from 'react';
import { createPortal } from 'react-dom';
import { AiOutlineSetting } from 'react-icons/ai';

import Menu from '@/components/menu/Menu';
import MoneyBag from '@/components/SVGs/MoneyBag';
import Tab from '@/components/tabs/Tab';
import TabGroup from '@/components/tabs/TabGroup';
import TabPanel from '@/components/tabs/TabPanel';
import TabPanels from '@/components/tabs/TabPanels';
import Tabs from '@/components/tabs/Tabs';

import Currency from '@/features/Game/components/currency/Currency';
import InputSvg from '@/features/Game/components/payment/InputSVG';
import OutputSVG from '@/features/Game/components/payment/OutputSVG';
import PaymentTypes from '@/features/Game/components/payment/PaymentTypes';

const Payment = () => {
  return (
    <div>
      <div className='flex items-center justify-between'>
        <span className='text-2xl text-primary-500'>
          <AiOutlineSetting></AiOutlineSetting>
        </span>
        <div className='flex items-center gap-2'>
          <span className='text-primary-500'>
            <MoneyBag color='#17FF16' />
          </span>
          <span className='text-lg text-primary-500'>Balance</span>
        </div>
        <Currency />
      </div>
      {createPortal(<Menu />, document.body)}
      <div className='text-gradient-primary mt-10 flex items-center justify-center gap-2'>
        <h2 className='!h1'>$12,58</h2>
        <span>FLOW</span>
      </div>
      <TabGroup>
        <Tabs className='m-10 mx-auto w-full'>
          <Tab>
            <div className='flex items-center justify-center gap-2'>
              <span className='text-xl'>
                <InputSvg />
              </span>
              <span className='font-bold'>Input</span>
            </div>
          </Tab>
          <Tab>
            <div className='flex items-center justify-center gap-2'>
              <span className='text-3xl'>
                <OutputSVG />
              </span>
              <span className='font-bold'>Output</span>
            </div>
          </Tab>
        </Tabs>
        <TabPanels>
          <TabPanel>
            <PaymentTypes />
          </TabPanel>
          <TabPanel>
            <></>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  );
};

export default Payment;
