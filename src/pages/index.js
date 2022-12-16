import Head from 'next/head';

export default function Home() {
  return (
    <div className='container mx-auto'>
      <Head>
        <title>Pagu - Main Page</title>
        <meta name='description' content='Main page' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <h1 className='text-3xl font-bold underline bg-red-400 font-sans'>Hello world!</h1>
    </div>
  );
}
