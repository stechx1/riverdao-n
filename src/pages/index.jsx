import Head from 'next/head';
import { HeroSection, SearchSection } from '../collections';

export default function Home() {
  return (
    <div className=' font-sans'>
      <Head>
        <title>Pagu - Main Page</title>
        <meta name='description' content='Main page' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <section className='mt-[90px]'>
        <HeroSection />
      </section>

      <section className='container mx-auto text-center'>
        <SearchSection />
      </section>
    </div>
  );
}
