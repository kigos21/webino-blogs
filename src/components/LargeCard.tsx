import Image from 'next/image';
import { LargeCardProps } from '@/types';
import DateTag from '@/components/DateTag';

export default function LargeCard({
  imagePath,
  tag,
  datePublished,
  title,
  description,
}: LargeCardProps) {
  return (
    <div className="flex cursor-pointer flex-col gap-[10px] rounded-[15px] p-[10px] hover:bg-[#212426]">
      <Image
        src={imagePath}
        alt="Article image"
        width={720}
        height={0}
        className="h-auto w-full rounded-[5px]"
      />
      <DateTag datePublished={datePublished} tag={tag} isDarkTheme={true} />
      <div>
        <h6 className="line-clamp-2">{title}</h6>
        <p className="line-clamp-2 text-[8px]">{description}</p>
      </div>
    </div>
  );
}
