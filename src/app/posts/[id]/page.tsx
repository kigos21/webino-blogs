import Link from 'next/link';
import Image from 'next/image';
import SmallCard from '@/components/SmallCard';

export default async function Post({ params }: { params: { id: number } }) {
  const res = await fetch('http://localhost:3000/blogs.json');
  const data = await res.json();
  const post = data.find((post: { id: number }) => post.id === params.id);
  const related = data.filter(
    (related: { tag: string; id: number }) =>
      related.tag === post.tag && related.id !== post.id,
  );

  if (!post) {
    return (
      <div className="h-[calc(100vh-68px-79px)] py-[5rem] text-center">
        <h4 className="text-center">Invalid request!</h4>
        <Link href="/" className="text-[12px] text-blue-600 underline">
          Return Home
        </Link>
      </div>
    );
  }

  let headerStyles;
  if (post.tag === 'REPORTS') {
    headerStyles = 'bg-[#dd8e54]';
  } else if (post.tag === 'BLOGS') {
    headerStyles = 'bg-[#ad8ebf]';
  } else if (post.tag === 'SPORTS') {
    headerStyles = 'bg-[#bb7082]';
  } else {
    headerStyles = '';
  }

  return (
    <>
      <div
        className={`absolute left-0 right-0 z-[-5] h-[200px] ${headerStyles}`}
      ></div>
      <div className="px-[8%] py-[57px]">
        <Image
          src={`/images/${post.id}.png`}
          width={720}
          height={0}
          alt="Post headline image"
          className="mb-[25px] aspect-[4/3] h-auto w-full rounded-[10px] object-cover"
        />
        <div className="flex flex-col gap-[15px]">
          <h4 className="text-center">{post.title}</h4>
          <p className="mx-[20px] text-center text-[12px]">
            {post.description}
          </p>

          <div className="flex justify-center gap-[20px]">
            <div className="flex gap-[8px]">
              <Image
                src={post.author.authorImagePath}
                alt="Author"
                width={15}
                height={15}
                className="aspect-square rounded-full object-cover"
              />
              <p className="text-[8px] font-[600]">{post.author.name}</p>
            </div>

            <div className="flex gap-[8px]">
              <Image
                src={'/assets/calendar-dark.svg'}
                alt="Calendar icon"
                width={15}
                height={15}
              />
              <p className="text-[8px]">{post.datePublished}</p>
            </div>
          </div>
        </div>

        <section className="flex flex-col gap-[1rem] py-[35px]">
          {post.content.map((paragraph: string) => (
            <p
              key={paragraph.substring(0, 10)}
              className="text-justify text-[12px]"
            >
              {paragraph}
            </p>
          ))}
        </section>

        <hr className="border-[#d9d9d9]" />

        <section>
          <h4 className="mb-[17px] mt-[28px]">Related Articles</h4>

          <div className="flex flex-col gap-[21px]">
            {related.map((post: any) => (
              <SmallCard
                id={post.id}
                key={post.id}
                imagePath={`/images/${post.id}.png`}
                tag={post.tag}
                datePublished={post.datePublished}
                title={post.title}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
