import { PageHeaderProps } from '@/types';

export default function PageHeader({
  title,
  description,
  bgColor,
}: PageHeaderProps) {
  // just for tailwind to include these custom colors
  const tailwind = 'bg-[#DD8E54] bg-[#ad8ebf] bg-[#bb7082]';

  return (
    <header className={`h-[200px] py-[54px] pl-[8%] pr-[12%] bg-[#${bgColor}]`}>
      <h3 className="mb-[12px]">{title}</h3>
      <p className="text-[12px]">{description}</p>
    </header>
  );
}
