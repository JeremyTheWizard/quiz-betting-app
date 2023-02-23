import Button from '@/components/buttons/Button';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import { useWeb3Context } from '@/contexts/Web3';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * They type was override in additional.d.ts
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

export default function HomePage() {
  const { connect, user, logout } = useWeb3Context();

  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className='flex min-h-screen flex-col items-center justify-center gap-8 bg-white'>
          <h1 className='text-black'>Quiz Betting App</h1>
          <Button onClick={user.loggedIn ? logout : connect}>
            {user.loggedIn ? 'logout' : 'login'}
          </Button>
        </section>
      </main>
    </Layout>
  );
}
