import Image from 'next/image';
import maintenance from '@/public/images/maintenance.png';
import Link from 'next/link';

export function Maintenance() {
  return (
    <div className="w-full max-w-[480px]">
      <div className="min-h-[90vh] flex flex-col justify-center items-center">
        <Image
          width={300}
          height={300}
          src={maintenance}
          alt="Maintenance"
        />
        <div className="mt-4">
          <h1 className="text-2xl font-bold">Under Maintenance</h1>
          <div className="text-center mt-2">
            {'Go back '}
            <Link className="text-blue-600" href="/">here</Link>
          </div>
        </div>
      </div>
    </div>
  );
}