import Image from 'next/image';
import { DateTagProps } from '@/types';

export default function DateTag({
  tag,
  datePublished,
  isDarkTheme,
}: DateTagProps) {
  // change the color of borders and text when dark themed
  const tagStyle = isDarkTheme
    ? 'text-white border-white'
    : 'border-[#3B4046] text-[#3B4046]';

  const separatorPath = isDarkTheme
    ? '/assets/dot-white.svg'
    : '/assets/dot.svg';

  const textStyle = isDarkTheme ? 'text-white' : 'text-[#3B4046]';

  return (
    <div className="flex items-center gap-[6px]">
      <div
        className={`rounded-[5px] border px-[10px] py-[5px] text-[8px] font-semibold md:text-[12px] ${tagStyle}`}
      >
        {tag}
      </div>
      <Image
        src={separatorPath}
        alt="."
        width={2}
        height={2}
        className="md:w-[4px]"
      />
      <p className={`text-[8px] md:text-[12px] ${textStyle}`}>
        {datePublished}
      </p>
    </div>
  );
}
