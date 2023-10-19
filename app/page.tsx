import Header from '@/components/header';
import Hero from '@/components/hero';
import Activity from '@/components/activity';
import CardNews from '@/components/card-news';
import Online from '@/components/online';
import Link from 'next/link';
import Icon from '@/components/icon';
import { IoMdNotificationsOutline } from 'react-icons/io';

export default function Home() {
  return (
    <section>
      <Header props="w-full pt-6 pb-2 bg-white">
        <h1 className="font-black text-2xl text-red1 ml-4">
          Kerja Yuk!
        </h1>
        <Link href="/notifications" className="rounded-full mr-2 p-2 hover:bg-gray-100 transition duration-200">
          <Icon style="text-gray-800 relative">
            <IoMdNotificationsOutline className="w-7 h-7" />
            <span className="absolute top-1.5 right-1 w-2 h-2 rounded-full bg-red1"></span>
          </Icon>
        </Link>
      </Header>
      <Hero />
      <Activity />
      <CardNews />
      <Online />
      <footer className="w-full max-w-[480px] h-[115px]"></footer>
    </section>
  )
}
