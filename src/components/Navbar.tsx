import Image from 'next/image';

export default function Navbar() {
  return (
    <>
      <nav className="bg-slate-800 px-[7%] py-[1rem] text-white">
        <button className="absolute">
          <Image
            src="/assets/bars-solid.svg"
            alt="Menu"
            width={29}
            height={29}
          />
        </button>
        <h1 className="text-center text-2xl font-bold">tigerio</h1>
      </nav>
    </>
  );
}
