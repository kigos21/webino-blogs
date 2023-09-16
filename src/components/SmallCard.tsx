import { SmallCardProps } from '@/types';
import DateTag from '@/components/DateTag';
import Image from 'next/image';

export default function SmallCard({
  imagePath,
  tag,
  datePublished,
  title,
}: SmallCardProps) {
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
        <DateTag datePublished={datePublished} tag={tag} isDarkTheme={false} />
        <h4 className="text-[10px]">{title}</h4>
      </div>
    </div>
  );
}
