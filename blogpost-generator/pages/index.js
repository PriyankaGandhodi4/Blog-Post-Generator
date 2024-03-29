import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0/client';
import Image from 'next/image';
import HeroImaage from '../public/hero.webp';
import { Logo } from '../components/Logo';

export default function Home() {

  return <div>
    <div className='w-screen h-screen overflow-hidden flex justify-center items-center relative'>
      <Image src={HeroImaage} alt='Hero' fill className='absolute'/> 
      <div className='relative z-10 text-white px-10 py-5  text-center max-w-screen-sm bg-slate-900/90 rounded-md backdrop-blur-sm'>
        <Logo/>
        <Link href="/post/new" className='btn'>Begin</Link>
      </div>

    </div>
  </div>;
}
