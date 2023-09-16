import Image from 'next/image';
import { HeroProps } from '@/types';

export default function Hero({
  title,
  imagePath,
  tag,
  description,
  authorAvatarPath,
  datePublished,
}: HeroProps) {
  const heroStyle = {
    backgroundImage: `linear-gradient(rgba(30, 41, 59, 0.9),rgba(30, 41, 59, 0.9)),url('${imagePath}')`,
  };

  return (
    <div className="box-border overflow-hidden rounded-2xl bg-slate-200">
      <div
        className="hero-image flex flex-col gap-[1rem] px-[2rem] pb-[2rem] pt-[10rem] text-white"
        style={heroStyle}
      >
        <h2 className="ibm-serif text-[2.25rem]">{title}</h2>
        <p>
          <span className="font-bold">{tag}</span> &mdash; {description}
        </p>
        <div className="flex gap-[0.75rem]">
          <Image
            src={authorAvatarPath}
            alt="Author image"
            width={30}
            height={30}
            className="aspect-square overflow-hidden rounded-full"
          />
          <p className="flex items-center text-[0.8rem]">{datePublished}</p>
        </div>
      </div>
    </div>
  );
}
