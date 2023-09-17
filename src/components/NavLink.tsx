import Link from 'next/link';

import { NavLinkProps } from '@/types';

export default function NavLink({
  showNav,
  href,
  title,
  handleClick,
}: NavLinkProps) {
  return (
    <li
      className={`underline-offset- text-[16px] font-[600] uppercase transition-opacity duration-700 hover:underline ${
        showNav ? '' : 'opacity-0'
      }`}
    >
      <Link href={href} onClick={handleClick}>
        {title}
      </Link>
    </li>
  );
}
