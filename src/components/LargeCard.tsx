import Image from 'next/image';
import { LargeCardProps } from '@/types';
import DateTag from '@/components/DateTag';

export default function LargeCard({
  imagePath,
  tag,
  datePublished,
  title,
  description,
  isDarkTheme,
}: LargeCardProps) {
  // tailwind compile these classes
  const tailwind = 'hover:bg-[#212426] hover:bg-neutral-100';

  return (
    <div
      className={`flex cursor-pointer flex-col gap-[10px] rounded-[12px] p-[10px] transition-all hover:${
        isDarkTheme ? 'bg-[#212426]' : 'bg-neutral-100'
      }`}
    >
      <Image
        src={imagePath}
        alt="Article image"
        width={720}
        height={0}
        className="aspect-video h-auto w-full rounded-[5px] object-cover object-center"
      />
      <DateTag
        datePublished={datePublished}
        tag={tag}
        isDarkTheme={isDarkTheme}
      />
      <div className={`${isDarkTheme ? 'text-white' : ''}`}>
        <h6 className="line-clamp-2">{title}</h6>
        <p className="line-clamp-2 text-[8px]">{description}</p>
      </div>
    </div>
  );
}
