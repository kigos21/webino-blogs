import Image from 'next/image';

import { SmallCardProps } from '@/types';
import DateTag from '@/components/DateTag';

export default function SmallCard({
  imagePath,
  tag,
  datePublished,
  title,
}: SmallCardProps) {
  return (
    <div className="flex cursor-pointer items-center gap-[0.8rem] rounded-[8px] p-[5px] transition-all hover:bg-neutral-100">
      <Image
        src={imagePath}
        alt="Article image"
        width={480}
        height={0}
        className="aspect-[4/3] h-auto w-full basis-1/3 self-start rounded-[5px] object-cover object-center"
      />
      <div className="flex flex-shrink basis-2/3 flex-col gap-[8px]">
        <DateTag datePublished={datePublished} tag={tag} isDarkTheme={false} />
        <h4 className="line-clamp-2 text-[10px]">{title}</h4>
      </div>
    </div>
  );
}
