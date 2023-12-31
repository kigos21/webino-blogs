import Image from 'next/image';

export default function Footer() {
  const platforms = ['facebook', 'instagram', 'x-twitter'];

  return (
    <footer className="flex flex-col items-center gap-[10px] bg-[#181a1c] px-[8%] py-[18px] text-white md:flex-row md:justify-between">
      <p className="text-[12px]">&copy; Webino Blogs 2023</p>
      <div className="flex gap-[15px] md:gap-[27px]">
        {platforms.map(platform => (
          <Image
            key={platform}
            src={`/assets/${platform}.svg`}
            alt={platform}
            width={15}
            height={15}
            className="cursor-pointer md:w-[20px]"
          />
        ))}
      </div>
    </footer>
  );
}
