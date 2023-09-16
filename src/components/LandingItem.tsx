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
        width={360}
        height={0}
        className="h-auto w-full basis-1/3 rounded-lg"
      />
      <div className="flex flex-shrink basis-2/3 flex-col">
        <div className="mb-[0.75rem] flex items-center gap-[0.5rem]">
          <div className="rounded-lg border-2 border-black px-[1.25rem] py-[0.25rem] text-[10px] font-[600]">
            {tag}
          </div>
          <Image src="/assets/dot.svg" alt="." width={4} height={4} />
          <p className="text-[10px]">{datePublished}</p>
        </div>
        <h4>{title}</h4>
      </div>
    </div>
  );
}
