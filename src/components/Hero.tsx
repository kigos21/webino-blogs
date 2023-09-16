import Image from 'next/image';
import { HeroProps } from '@/types';

export default function Hero({
  title,
  imagePath,
  tag,
  description,
  datePublished,
}: HeroProps) {
  return (
    <div className="cursor-pointer overflow-hidden rounded-[10px] transition-all hover:shadow-lg hover:shadow-neutral-500">
      <div
        className="hero-image flex flex-col gap-[10px] px-[20px] pb-[20px] pt-[50%] text-white"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(13, 14, 16, 0.00) 0%, rgba(13, 14, 16, 0.52) 36.46%, #0D0E10 100%), url('${imagePath}')`,
        }}
      >
        <h4 className="font-bold underline-offset-4">{title}</h4>
        <p className="text-[8px]">
          <span className="font-[600]">{tag} &mdash;</span> {description}
        </p>
        <div className="flex gap-[0.75rem]">
          <Image
            src={'/assets/calendar.svg'}
            alt="calendar icon"
            width={12}
            height={12}
          />
          <p className="flex items-center text-[8px]">{datePublished}</p>
        </div>
      </div>
    </div>
  );
}
