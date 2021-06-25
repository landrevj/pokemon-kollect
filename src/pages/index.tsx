import Head from 'next/head';

import { Counter } from '../components/counter';

export default function Home()
{
  return (
    <>
      <Head>
        <title>Pokemon Kollect</title>
      </Head>
      <div>
        <Counter/>
      </div>
    </>
  );
}
