import LargeCard from '@/components/LargeCard';
import PageHeader from '@/components/PageHeader';

export default async function SportsPage() {
  const res = await fetch('http://localhost:3000/blogs.json');
  const data = await res.json();

  const reports = data.filter(
    (article: { tag: string }) => article.tag === 'SPORTS',
  );

  return (
    <>
      <PageHeader
        title="Sports"
        description="From game-changing plays to inspiring athlete profiles, we've got your front-row seat to the exciting realm of sports."
        bgColor="bb7082"
      />

      <section className="flex flex-col gap-[35px] px-[21px] py-[41px]">
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
