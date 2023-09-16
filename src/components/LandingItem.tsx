import { LandingItemProps } from '@/types';
import Image from 'next/image';

export default function LandingItem({
  imagePath,
  tag,
  datePublished,
  title,
}: LandingItemProps) {
  return (
    <div className="flex items-center gap-[0.8rem]">
      <Image
        src={imagePath}
        alt="Article image"
        width={480}
        height={0}
        className="aspect-[4/3] h-auto w-full basis-1/3 self-start rounded-[5px]"
      />
      <div className="flex flex-shrink basis-2/3 flex-col gap-[8px]">
        <div className="flex items-center gap-[6px]">
          <div className="rounded-[5px] border border-[#3B4046] px-[10px] py-[5px] text-[8px] font-semibold text-[#3B4046]">
            {tag}
          </div>
          <Image src="/assets/dot.svg" alt="." width={3} height={3} />
          <p className="text-[8px] text-[#3B4046]">{datePublished}</p>
        </div>
        <h4 className="text-[10px]">{title}</h4>
      </div>
    </div>
  );
}
