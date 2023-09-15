import Hero from '@/components/Hero';

export default function Home() {
  return (
    <main className="px-[7%] py-[3rem]">
      <Hero
        title={'Tiger Spikers Jolt Blue Eagles for V-League Top Seat'}
        tag={'SPORTS'}
        description={`The Tiger Spikers
          now hold a 5-1 win-loss card while the Blue eagles dropped to 4-1 as
          the V-league semi-finals near.`}
        authorAvatarPath={'/images/tiger-author.jpg'}
        datePublished={'September 10, 2023'}
      />
    </main>
  );
}
