import * as React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return (
    <div
      id='layout'
      className='min-w-screen min-h-screen overflow-x-hidden mobile-l:min-w-full'
    >
      {children}
    </div>
  );
}
