'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import NavLink from '@/components/NavLink';

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);

  function handleMenuClick(): void {
    setShowNav(state => !state);
  }

  function handleLinkClick(): void {
    setShowNav(false);
  }

  return (
    <>
      <div className="bg-[#191a1c] px-[8%] py-[1rem] text-white">
        <button className="absolute top-[1.5rem]" onClick={handleMenuClick}>
          <Image
            src="/assets/bars-solid.svg"
            alt="Menu"
            width={19}
            height={22}
          />
        </button>
        <h3 className="text-center">
          <Link href="/" onClick={handleLinkClick} className="nav-brand">
            WB
          </Link>
        </h3>
      </div>

      <nav
        className={`nav absolute left-0 right-0 z-50 flex flex-col items-center bg-[#191a1c] py-[33px] text-white transition-transform ${
          showNav ? '' : '-translate-y-[150%]'
        }`}
      >
        <ul className="flex flex-col items-center gap-[15px]">
          <NavLink
            showNav={showNav}
            handleClick={handleLinkClick}
            href="/reports"
            title="Reports"
          />
          <NavLink
            showNav={showNav}
            handleClick={handleLinkClick}
            href="/blogs"
            title="Blogs"
          />
          <NavLink
            showNav={showNav}
            handleClick={handleLinkClick}
            href="/sports"
            title="Sports"
          />
        </ul>
      </nav>
    </>
  );
}
