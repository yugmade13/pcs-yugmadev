import Card from '@/components/card';
import news from '@/app/constant/news';
import { News } from '@/type';
import Image from 'next/image';

export default function CardNews() {
  return (
    <div className="w-full mt-4 px-4">
      <h2 className="text-sm font-semibold">
        PCS News
      </h2>
      <div className="text-xs mt-2">
        <div className="carousel carousel-center max-w-[360px] 2xs:max-w-[385px] 3xs:max-w-[405px] 4xs:max-w-[435px] p-4 space-x-4 rounded-box">
          {news.map((post: News) => (
            <Card key={post.title} props="carousel-item">
              <div className="max-w-[250px]">
                <div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <Image className="rounded-full object-cover" width={45} height={45} src={post.avatar} alt={post.user} />
                      <p className="ml-2 text-red1 text-sm font-semibold">{post.user}</p>
                    </div>
                    <div className="text-gray-800 flex flex-col items-end justify-end">
                      <p className="text-[10px]">Senin</p>
                      <p className="text-[10px]">18 Oktober 2023</p>
                    </div>
                  </div>
                  <div className="mt-4 text-gray-600">
                    {post.body}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}