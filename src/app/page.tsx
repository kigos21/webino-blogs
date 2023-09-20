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

      <section className="mb-[32px] px-[calc(8%-10px)] md:my-[60px]">
        <h2 className="mx-auto mb-[17px] px-[5px] text-[18px] max-md:max-w-[460px] md:mb-[29px] md:text-[24px]">
          Latest
        </h2>

        <div className="grid grid-cols-1 gap-[11px] md:grid-cols-2 md:gap-[5%] md:max-lg:pb-[40px] lg:grid-cols-4">
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

      <section className="bg-[#181a1c] px-[calc(8%-10px)] py-[35px] md:py-[50px]">
        <div className="flex flex-col gap-[24px] md:flex-row md:gap-[4%]">
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

      <section className="px-[calc(8%-10px)] py-[32px] md:py-[60px]">
        <h2 className="mx-auto mb-[17px] px-[5px] text-[18px] max-md:max-w-[460px] md:mb-[24px] md:text-[24px]">
          More Articles
        </h2>

        <div className="grid grid-cols-1 gap-[11px] md:grid-cols-2 md:gap-[5%] md:max-lg:pb-[40px] lg:grid-cols-4">
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
