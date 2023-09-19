import Hero from '@/components/Hero';
import SmallCard from '@/components/SmallCard';
import LargeCard from '@/components/LargeCard';

export default async function Home() {
  const res = await fetch('http://localhost:3000/blogs.json');
  const blogs: Array<any> = await res.json();

  const hero = blogs[0];

  return (
    <main className="pt-[25px] md:pt-[60px]">
      <section className="mb-[30px] px-[8%]">
        <Hero
          id={hero.id}
          title={hero.title}
          imagePath={`/images/${hero.id}.png`}
          tag={hero.tag}
          description={hero.description}
          datePublished={hero.datePublished}
        />
      </section>

      <section className="mb-[32px] px-[calc(8%-5px)]">
        <h2 className="mb-[17px] px-[5px] text-[18px]">Latest</h2>

        <div className="flex flex-col gap-[11px]">
          {blogs.slice(1, 5).map(blog => (
            <SmallCard
              id={blog.id}
              key={blog.id}
              imagePath={`/images/${blog.id}.png`}
              tag={blog.tag}
              datePublished={blog.datePublished}
              title={blog.title}
            />
          ))}
        </div>
      </section>

      <section className="mb-[39px] bg-[#181a1c] px-[calc(8%-10px)] py-[35px]">
        <div className="flex flex-col gap-[24px]">
          {blogs.slice(5, 7).map(blog => (
            <LargeCard
              id={blog.id}
              key={blog.id}
              imagePath={`/images/${blog.id}.png`}
              tag={blog.tag}
              datePublished={blog.datePublished}
              title={blog.title}
              description={blog.description}
              isDarkTheme={true}
            />
          ))}
        </div>
      </section>

      <section className="mb-[32px] px-[calc(8%-5px)]">
        <h2 className="mb-[17px] px-[5px] text-[18px]">More Articles</h2>

        <div className="flex flex-col gap-[11px]">
          {blogs.slice(7, 11).map(blog => (
            <SmallCard
              id={blog.id}
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
