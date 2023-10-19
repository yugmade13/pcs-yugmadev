import users from '@/app/constant/users';
import Card from '@/components/card';
import Image from 'next/image';
import Link from 'next/link';
import { User } from '@/type';

export default function Online() {
  return (
    <div className="w-full mt-4 px-4">
      <h2 className="text-sm font-semibold">
        Online
      </h2>
      <div className="text-xs mt-2">
        <Card>
          <div className="flex justify-start items-center -space-x-4 2xs:-space-x-2 relative">
            {users.slice(0, 10).map((user: User, index: number) => {
              const max = 9;

              if (index === max) {
                return (
                  <Link
                    key={index}
                    href="/"
                    className="relative flex-shrink-0 -top-3.5 right-0 w-[44px] h-[44px] 3xs:w-[50px] 3xs:h-[50px] rounded-full gradient-red">
                    <span className="absolute right-3 top-4 text-right text-white font-semibold">
                      {`${users.length - max}+`}
                    </span>
                  </Link>
                );
              }

              return (
                <div key={user.username} className="flex flex-col relative z-10">
                  <div className="flex-shrink-0">
                    <Image
                      className="rounded-full object-cover ring-2 ring-white"
                      width={50}
                      height={50}
                      src={user.avatar}
                      alt={user.name}
                    />
                  </div>
                  <div className="text-center mt-2">
                    <p className="text-[10px] font-semibold leading-3">{user.name}</p>
                    <p className="text-[9px] leading-3 font-light">{user.username}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
      </div>
    </div>
  );
}