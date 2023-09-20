import Image from 'next/image';
import Link from 'next/link';
import { HeroProps } from '@/types';

export default function Hero({
  id,
  title,
  imagePath,
  tag,
  description,
  datePublished,
}: HeroProps) {
  return (
    <Link href={`/posts/${id}`}>
      <div className="mx-auto cursor-pointer overflow-hidden rounded-[10px] transition-all hover:shadow-lg hover:shadow-neutral-500 max-md:max-w-[460px]">
        <div
          className="hero-image flex flex-col gap-[10px] pb-[20px] pl-[7%] pr-[17%] pt-[35%] text-white md:gap-[15px] md:pb-[66px] xl:pt-[25%]"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(13, 14, 16, 0.00) 0%, rgba(13, 14, 16, 0.52) 36.46%, #0D0E10 100%), url('${imagePath}')`,
          }}
        >
          <h4 className="line-clamp-3 font-bold underline-offset-4 md:line-clamp-2 md:max-w-[90%] md:text-[40px]">
            {title}
          </h4>

          <p className="line-clamp-2 text-[8px] md:line-clamp-3 md:max-w-[90%] md:text-[16px]">
            <span className="font-[600]">{tag} &mdash;</span> {description}
          </p>

          <div className="flex gap-[0.75rem] md:max-w-[90%]">
            <Image
              src={'/assets/calendar.svg'}
              alt="calendar icon"
              width={12}
              height={12}
              className="md:h-auto md:w-[17px]"
            />
            <p className="flex items-center text-[8px] md:text-[12px]">
              {datePublished}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
