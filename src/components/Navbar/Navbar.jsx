import Link from 'next/link';

export const Navbar = () => {
  return (
    <div className='flex justify-center space-x-6 mx-auto my-8'>
      <Link href={''}>
        <p className='uppercase font-bold tracking-tighter'>About</p>
      </Link>
      <Link href={''}>
        <p className='uppercase font-bold tracking-thick'>Start a campaign</p>
      </Link>
      <Link href={''}>
        <p className='uppercase font-bold tracking-thick'>River Dao</p>
      </Link>
      <Link href={''}>
        <p className='uppercase font-bold tracking-thick'>Contact</p>
      </Link>
    </div>
  );
};
