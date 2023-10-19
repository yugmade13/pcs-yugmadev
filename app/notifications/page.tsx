import Header from '@/components/header';
import { BiArrowBack } from 'react-icons/bi';
import Link from 'next/link';
import notifications from '@/app/constant/notificaitons';
import Image from 'next/image';
import selectedIcon from '@/app/utils/selectedIcon';

export default function Notifications() {
  return (
    <section>
      <Header props="w-full max-w-[480px] top-0 p-2 bg-white border shadow fixed z-20">
        <div className="flex justify-start items-center">
          <Link
            className="p-2 rounded-full hover:bg-gray-100 transition duration-200"
            href="/"
          >
            <BiArrowBack className="w-5 h-5" />
          </Link>
          <h1 className="font-semibold text-lg text-red1 ml-2">
            Notifications
          </h1>
        </div>
      </Header>
      <div className="flex flex-col mt-[54px]">
        {notifications.map((notif, index: number) => {
          const {
            status,
            title,
            hasBeenRead,
            image
          } = notif;

          const imageIcon = selectedIcon(status);

          return (
            <div
              key={index}
              className={`py-2 px-4 ${hasBeenRead ? '' : 'bg-blue-100'}`}>
              <Link
                href="#"
                className="flex justify-start items-start"
              >
                <div className="flex-shrink-0 relative w-[75px] h-[75px] rounded-xl gradient-red flex justify-center items-center">
                  <Image
                    width={40}
                    height={40}
                    src={`/images/${image}`}
                    alt={title}
                  />
                  <Image
                    className="absolute -bottom-1 -right-1"
                    width={20}
                    height={20}
                    src={`/images/${imageIcon}`}
                    alt={title}
                  />
                </div>
                <div className="ml-3">
                  <div className="flex justify-between items-center">
                    <p className="text-sm font-semibold 3xs:text-base">
                      {title}
                    </p>
                    <p className="text-[10px] font-light text-gray-600">
                      Today
                    </p>
                  </div>
                  <div
                    className="text-xs 3xs:text-sm text-gray-600 mt-1 3xs:mt-1.5"
                    dangerouslySetInnerHTML={{ __html: notif.body() }}
                  />
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}