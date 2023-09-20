import Image from 'next/image';
import Link from 'next/link';

import { LargeCardProps } from '@/types';
import DateTag from '@/components/DateTag';

export default function LargeCard({
  id,
  imagePath,
  tag,
  datePublished,
  title,
  description,
  isInLandingPage,
  isDarkTheme,
}: LargeCardProps) {
  // tailwind compile these classes
  const tailwind = 'hover:bg-[#212426] hover:bg-neutral-100';

  return (
    <Link
      href={`/posts/${id}`}
      className="mx-auto rounded-[12px] max-md:max-w-[460px]"
    >
      <div
        className={`flex cursor-pointer flex-col gap-[10px] rounded-[12px] p-[10px] transition-all md:min-h-[186px] md:items-center md:gap-[30px] ${
          isInLandingPage ? '' : 'md:flex-row'
        } hover:${isDarkTheme ? 'bg-[#212426]' : 'bg-neutral-100'}`}
      >
        <Image
          src={imagePath}
          alt="Article image"
          width={720}
          height={0}
          className="aspect-video h-auto w-full flex-grow basis-1/3 rounded-[5px] object-cover object-center"
        />
        <div className="flex flex-col gap-[7px] md:flex md:basis-3/5 md:flex-col md:gap-[15px]">
          <DateTag
            datePublished={datePublished}
            tag={tag}
            isDarkTheme={isDarkTheme}
          />
          <div className={`${isDarkTheme ? 'text-white' : ''}`}>
            <h6 className="large_card_title mb-[4px] line-clamp-2 md:mb-[15px] md:text-[24px]">
              {title}
            </h6>
            <p className="line-clamp-2 text-[8px] md:text-[16px]">
              {description}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
