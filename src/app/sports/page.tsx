import LargeCard from '@/components/LargeCard';
import PageHeader from '@/components/PageHeader';

export default async function SportsPage() {
  const res = await fetch('http://localhost:3000/blogs.json');
  const data = await res.json();

  const sports = data.filter(
    (article: { tag: string }) => article.tag === 'SPORTS',
  );

  return (
    <>
      <PageHeader
        title="Sports"
        description="From game-changing plays to inspiring athlete profiles, we've got your front-row seat to the exciting realm of sports."
        bgColor="bb7082"
      />

      <section className="flex flex-col gap-[35px] px-[calc(8%-10px)] py-[41px]">
        {sports.map((sport: any) => (
          <LargeCard
            id={sport.id}
            key={sport.id}
            imagePath={`/images/${sport.id}.png`}
            tag={sport.tag}
            datePublished={sport.datePublished}
            title={sport.title}
            description={sport.description}
            isDarkTheme={false}
          />
        ))}
      </section>
    </>
  );
}
