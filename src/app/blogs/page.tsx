import LargeCard from '@/components/LargeCard';
import PageHeader from '@/components/PageHeader';

export default async function BlogsPage() {
  const res = await fetch('http://localhost:3000/blogs.json');
  const data = await res.json();

  const blogs = data.filter(
    (article: { tag: string }) => article.tag === 'BLOGS',
  );

  return (
    <>
      <PageHeader
        title="Blogs"
        description="Discover a world of knowledge and inspiration in our blog section, featuring insightful articles on a variety of topics."
        bgColor="ad8ebf"
      />

      <section className="flex flex-col gap-[35px] px-[calc(8%-10px)] py-[41px] md:gap-[60px] md:py-[74px]">
        {blogs.map((blog: any) => (
          <LargeCard
            id={blog.id}
            key={blog.id}
            imagePath={`/images/${blog.id}.png`}
            tag={blog.tag}
            datePublished={blog.datePublished}
            title={blog.title}
            description={blog.description}
            isDarkTheme={false}
            isInLandingPage={false}
          />
        ))}
      </section>
    </>
  );
}
