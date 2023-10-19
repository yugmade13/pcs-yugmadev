import Image from 'next/image';

export default function Hero() {
  return (
    <div className="w-full px-4 mt-2">
      <h2 className="text-sm font-semibold text-gray-800">
        Hi, Good Morning!
      </h2>
      <div className="p-4 mt-2 gradient-red rounded-xl">
        <div className="flex flex-col space-y-4">
          <div className="flex justify-between items-start">
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-2">
                <Image
                  className="rounded-full object-cover"
                  width={65}
                  height={65}
                  src="/images/yugmadev.jpg"
                  alt="hero-image"
                />
              </div>
              <div className="text-white">
                <h3 className="font-bold text-sm 3xs:text-lg">Yugma</h3>
                <p className="italic text-xs 3xs:text-base">Web Developer</p>
              </div>
            </div>
            <div className="text-white flex items-end flex-col">
              <div className="text-xs 3xs:text-base">Member since</div>
              <div className="font-bold text-sm 3xs:text-lg">18 Oktober 2023</div>
            </div>
          </div>
          <div className="flex justify-between items-end">
            <div className="text-white">
              <p className="text-xs 3xs:text-base">Locations</p>
              <p className="font-bold text-sm 3xs:text-lg">Kantor Sahid</p>
            </div>
            <p className="text-white text-xs italic 3xs:text-base">ICO</p>
          </div>
        </div>
      </div>
    </div>
  );
}