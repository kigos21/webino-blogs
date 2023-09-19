import { PageHeaderProps } from '@/types';

export default function PageHeader({
  title,
  description,
  bgColor,
}: PageHeaderProps) {
  // just for tailwind to include these custom colors
  const tailwind = 'bg-[#DD8E54] bg-[#ad8ebf] bg-[#bb7082]';

  return (
    <header
      className={`py-[54px] pl-[8%] pr-[12%] md:py-[90px] md:pr-[45%] bg-[#${bgColor}]`}
    >
      <h3 className="mb-[12px] md:text-[40px]">{title}</h3>
      <p className="text-[12px] md:text-[16px]">{description}</p>
    </header>
  );
}
