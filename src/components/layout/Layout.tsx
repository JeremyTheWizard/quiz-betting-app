import * as React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return <div className='min-w-screen min-h-screen bg-dark'>{children}</div>;
}
