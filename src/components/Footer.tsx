import Image from 'next/image';

export default function Footer() {
  const platforms = ['facebook', 'instagram', 'x-twitter'];

  return (
    <footer className="flex flex-col items-center gap-[10px] bg-[#181a1c] py-[18px] text-white">
      <p className="text-[12px]">&copy; Webino Blogs 2023</p>
      <div className="flex gap-[15px]">
        {platforms.map(platform => (
          <Image
            key={platform}
            src={`/assets/${platform}.svg`}
            alt={platform}
            width={15}
            height={15}
            className="cursor-pointer"
          />
        ))}
      </div>
    </footer>
  );
}
