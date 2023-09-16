import Hero from '@/components/Hero';
import LandingItem from '@/components/LandingItem';

export default async function Home() {
  const res = await fetch('http://localhost:3000/blogs.json');
  const blogs = await res.json();

  const hero = blogs[0];
  console.log(hero);

  return (
    <main className="px-[7%] py-[2.5rem]">
      <section className="mb-[2rem]">
        <Hero
          title={hero.title}
          imagePath={hero.imagePath}
          tag={hero.tag}
          description={hero.description}
          authorAvatarPath={hero.author.authorImagePath}
          datePublished={hero.datePublished}
        />
      </section>

      <section>
        <h2 className="mb-[1.25rem] text-[2.25rem]">Latest</h2>

        {/* <LandingItem image={'/images/ang-liga.webp'} /> */}
      </section>
    </main>
  );
}
