import Image from 'next/image';

export default function Navbar() {
  return (
    <>
      <nav className="bg-[#191a1c] px-[8%] py-[1rem] text-white">
        <button className="absolute top-[1.5rem]">
          <Image
            src="/assets/bars-solid.svg"
            alt="Menu"
            width={19}
            height={22}
          />
        </button>
        <h3 className="text-center">WB</h3>
      </nav>
    </>
  );
}
