import { LandingItemProps } from '@/types';
import Image from 'next/image';

export default function LandingItem({
  imagePath,
  tag,
  date,
  title,
}: LandingItemProps) {
  return (
    <div className="flex flex-col gap-[2rem]">
      <div className="flex items-center gap-[0.8rem]">
        <Image
          src="/images/ang-liga.webp"
          alt="UST vs UP football"
          width={720}
          height={0}
          className="h-auto w-full basis-1/3 rounded-lg"
        />
        <div className="flex flex-shrink basis-2/3 flex-col">
          <div className="mb-[0.75rem] flex gap-[0.5rem]">
            <div className="rounded-lg border-2 border-black px-[1.25rem] py-[0.25rem] text-sm">
              SPORTS
            </div>
            <Image src="/assets/dot.svg" alt="." width={4} height={4} />
            <p className="text-xs">September 10, 2023</p>
          </div>
          <h2>Ang Liga: UST settles for another draw versus UP</h2>
        </div>
      </div>
    </div>
  );
}
