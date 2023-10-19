'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import navigations from '@/app/constant/navitagions';
import { Navigation } from '@/type';
import { MdOutlineExitToApp } from 'react-icons/md';
import { useContext } from 'react';
import { ClockContext } from '@/app/clock-provider';
import calculateTime from '@/app/utils/calculateTime';

export default function Navigations() {
  const pathname = usePathname();
  const { setCheckOut, setWorkingHours, checkIn }: any = useContext(ClockContext);

  function setTime() {
    const time = calculateTime(new Date(), checkIn);
    setCheckOut(time.checkOut);
    setWorkingHours(time.workingHours);
  }

  if (pathname === '/notifications') {
    return;
  }

  return (
    <nav className="mx-auto max-w-[480px] fixed bottom-0 left-0 right-0 z-50">
      <div className="w-full px-6 bg-white shadow-2xl">
        <div className="flex justify-between items-center">
          {navigations.map((nav: Navigation, index: number) => {
            const { title, path} = nav;
            const BaseIcon: any = nav.icon;

            if (nav.title === 'Null') {
              return (
                <button
                  onClick={() => setTime()}
                  type="button"
                  key={index}
                  className="relative -top-8 w-[62px] h-[62px] gradient-red rounded-full hover:text-black"
                >
                  <div className="flex justify-center items-center h-full text-white">
                    <MdOutlineExitToApp className="w-7 h-7 hover:w-8 hover:h-8 transition-all duration-400" />
                  </div>
                  <span className="absolute left-0 -bottom-[23px] text-xs text-gray-400">
                    Check out
                  </span>
                </button>
              );
            }

            return (
              <Link
                key={title}
                href={path}
                className={`text-gray-400 hover:text-red1 ${pathname === path ? 'text-red1' : ''}`}
              >
                <div className="flex flex-col items-center">
                  <BaseIcon className="w-7 h-7" />
                  <span className="text-xs">
                    {title}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}