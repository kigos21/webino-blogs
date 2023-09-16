'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [showNav, setShowNav] = useState(true);

  function handleMenuClick(): void {
    setShowNav(state => !state);
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
        <h3 className="text-center">WB</h3>
      </div>

      <nav
        className={`nav absolute left-0 right-0 z-50 flex flex-col items-center bg-[#191a1c] py-[33px] text-white transition-transform ${
          showNav ? '' : '-translate-y-[150%]'
        }`}
      >
        <ul className="flex flex-col items-center gap-[15px]">
          <li className="underline-offset- text-[16px] font-[600] uppercase hover:underline">
            <Link href="">Reports</Link>
          </li>
          <li className="text-[16px] font-[600] uppercase underline-offset-2 hover:underline">
            <Link href="">Blogs</Link>
          </li>
          <li className="text-[16px] font-[600] uppercase underline-offset-2 hover:underline">
            <Link href="">Sports</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
