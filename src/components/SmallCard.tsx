import Image from 'next/image';
import Link from 'next/link';

import { SmallCardProps } from '@/types';
import DateTag from '@/components/DateTag';

export default function SmallCard({
  id,
  imagePath,
  tag,
  datePublished,
  title,
}: SmallCardProps) {
  return (
    <Link href={`/posts/${id}`}>
      <div className="flex cursor-pointer items-center gap-[0.8rem] rounded-[8px] p-[5px] transition-all hover:bg-neutral-100 md:flex-col md:gap-[15px]">
        <Image
          src={imagePath}
          alt="Article image"
          width={480}
          height={0}
          className="aspect-[4/3] h-auto w-full basis-1/3 self-start rounded-[5px] object-cover object-center md:aspect-video"
        />
        <div className="flex flex-shrink basis-2/3 flex-col gap-[8px] md:w-full">
          <DateTag
            datePublished={datePublished}
            tag={tag}
            isDarkTheme={false}
          />
          <h4 className="line-clamp-2 text-[10px] md:text-[16px]">{title}</h4>
        </div>
      </div>
    </Link>
  );
}
