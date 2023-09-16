import Hero from '@/components/Hero';
import LandingItem from '@/components/LandingItem';

export default async function Home() {
  const res = await fetch('http://localhost:3000/blogs.json');
  const blogs: Array<any> = await res.json();

  const hero = blogs[0];

  return (
    <main className="px-[8%] pt-[25px]">
      <section className="mb-[30px]">
        <Hero
          title={hero.title}
          imagePath={`/images/${hero.id}.png`}
          tag={hero.tag}
          description={hero.description}
          datePublished={hero.datePublished}
        />
      </section>

      <section>
        <h2 className="mb-[22px] text-[18px]">Latest</h2>

        <div className="flex flex-col gap-[21px]">
          {blogs.slice(1, 5).map(blog => (
            <LandingItem
              key={blog.id}
              imagePath={`/images/${blog.id}.png`}
              tag={blog.tag}
              datePublished={blog.datePublished}
              title={blog.title}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
