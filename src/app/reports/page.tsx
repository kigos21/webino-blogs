import LargeCard from '@/components/LargeCard';
import PageHeader from '@/components/PageHeader';

export default async function ReportsPage() {
  const res = await fetch('http://localhost:3000/blogs.json');
  const data = await res.json();

  const reports = data.filter(
    (article: { tag: string }) => article.tag === 'REPORTS',
  );

  return (
    <>
      <PageHeader
        title="Reports"
        description="Delve into in-depth analysis and comprehensive reports on trending topics, industry trends, and insightful research findings."
        bgColor="DD8E54"
      />

      <section className="flex flex-col gap-[35px] px-[calc(8%-10px)] py-[41px] md:gap-[60px] md:py-[74px]">
        {reports.map((report: any) => (
          <LargeCard
            id={report.id}
            key={report.id}
            imagePath={`/images/${report.id}.png`}
            tag={report.tag}
            datePublished={report.datePublished}
            title={report.title}
            description={report.description}
            isDarkTheme={false}
            isInLandingPage={false}
          />
        ))}
      </section>
    </>
  );
}
