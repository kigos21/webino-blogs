import LargeCard from '@/components/LargeCard';
import PageHeader from '@/components/PageHeader';

export default async function BlogsPage() {
  const res = await fetch('http://localhost:3000/blogs.json');
  const data = await res.json();

  const reports = data.filter(
    (article: { tag: string }) => article.tag === 'BLOGS',
  );

  return (
    <>
      <PageHeader
        title="Blogs"
        description="Discover a world of knowledge and inspiration in our blog section, featuring insightful articles on a variety of topics."
        bgColor="ad8ebf"
      />

      <section className="flex flex-col gap-[35px] px-[calc(8%-10px)] py-[41px]">
        {reports.map((report: any) => (
          <LargeCard
            key={report.id}
            imagePath={`/images/${report.id}.png`}
            tag={report.tag}
            datePublished={report.datePublished}
            title={report.title}
            description={report.description}
            isDarkTheme={false}
          />
        ))}
      </section>
    </>
  );
}
