import Hero from '@/components/Hero';
import SmallCard from '@/components/SmallCard';
import LargeCard from '@/components/LargeCard';

export default async function Home() {
  const res = await fetch('http://localhost:3000/blogs.json');
  const blogs: Array<any> = await res.json();

  const hero = blogs[0];

  return (
    <main className="pt-[25px]">
      <section className="mb-[30px] px-[8%]">
        <Hero
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
              key={blog.id}
              imagePath={`/images/${blog.id}.png`}
              tag={blog.tag}
              datePublished={blog.datePublished}
              title={blog.title}
            />
          ))}
        </div>
      </section>

      <section className="bg-[#181a1c] px-[calc(8%-10px)] py-[35px] text-white ">
        <div className="flex flex-col gap-[24px]">
          {blogs.slice(5, 7).map(blog => (
            <LargeCard
              key={blog.id}
              imagePath={`/images/${blog.id}.png`}
              tag={blog.tag}
              datePublished={blog.datePublished}
              title={blog.title}
              description={blog.description}
            />
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-[22px] text-[18px]">Latest</h2>
      </section>
    </main>
  );
}
