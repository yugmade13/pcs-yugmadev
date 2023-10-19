'use client';

import { useContext } from 'react';
import { LuClock9, LuClock5, LuTimerReset } from 'react-icons/lu';
import Icon from '@/components/icon';
import { ClockContext } from '@/app/clock-provider';

export default function Activity() {
  const { checkIn, checkOut, workingHours }: any = useContext(ClockContext);

  return (
    <div className="w-full mt-4 px-4">
      <h2 className="text-sm font-semibold">
        {"Today's Activity"}
      </h2>
      <div className="mt-3">
        <div className="grid grid-cols-3 justify-center items-center">
          <div>
            <div className="flex flex-col justify-center items-center">
              <Icon style="text-red1">
                <LuClock9 className="w-8 h-8"/>
              </Icon>
              <div className="mt-3 text-center text-gray-800">
                <p className="text-base font-semibold">{checkIn}</p>
                <p className="text-xs">Check in</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col justify-center items-center">
              <Icon style="text-red1 relative">
                <LuTimerReset className="w-8 h-8"/>
              </Icon>
              <div className="mt-3 text-center text-gray-800">
                <p className="text-base font-semibold">
                  {workingHours === '' ? '00:00' : workingHours}
                </p>
                <p className="text-xs">Working hours</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col justify-center items-center">
              <Icon style="text-red1">
                <LuClock5 className="w-8 h-8"/>
              </Icon>
              <div className="mt-3 text-center text-gray-800">
                <p className="text-base font-semibold ">
                  {checkOut === '' ? '--:--' : checkOut}
                </p>
                <p className="text-xs">Check out</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}