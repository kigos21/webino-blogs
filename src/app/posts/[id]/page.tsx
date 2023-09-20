import Link from 'next/link';
import Image from 'next/image';
import SmallCard from '@/components/SmallCard';

export default async function Post({ params }: { params: { id: number } }) {
  const res = await fetch('http://localhost:3000/blogs.json');
  const data = await res.json();
  const post = data.find((post: { id: number }) => post.id === params.id);

  if (!post) {
    return (
      <div className="h-[calc(100vh-147px)] py-[5rem] text-center md:h-[calc(100vh-124px)]">
        <h4 className="text-center">Invalid request!</h4>
        <Link href="/" className="text-[12px] text-blue-600 underline">
          Return Home
        </Link>
      </div>
    );
  }

  const related = data.filter(
    (related: { tag: string; id: number }) =>
      related.tag === post.tag && related.id !== post.id,
  );

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
        className={`absolute left-0 right-0 z-[-5] h-[200px] md:h-[403px] ${headerStyles}`}
      ></div>
      <div className="px-[8%] py-[57px] md:pb-[62px] md:pt-[135px]">
        <Image
          src={`/images/${post.id}.png`}
          width={720}
          height={0}
          alt="Post headline image"
          className="mx-auto mb-[25px] aspect-[4/3] h-auto w-full rounded-[10px] object-cover max-md:max-w-[460px] md:mb-[40px] md:aspect-video md:max-w-[830px]"
        />
        <div className="mx-auto flex flex-col gap-[15px] max-md:max-w-[460px] md:max-w-[680px] md:gap-[20px]">
          <h4 className="text-center md:text-[40px]">{post.title}</h4>
          <p className="mx-[10%] text-center text-[12px] md:mx-[20%] md:text-[16px]">
            {post.description}
          </p>

          <div className="flex justify-center gap-[20px]">
            <div className="flex gap-[8px]">
              <Image
                src={post.author.authorImagePath}
                alt="Author"
                width={15}
                height={15}
                className="aspect-square h-auto rounded-full object-cover md:w-[20px]"
              />
              <p className="text-[8px] font-[600] md:text-[12px]">
                {post.author.name}
              </p>
            </div>

            <div className="flex gap-[8px]">
              <Image
                src={'/assets/calendar-dark.svg'}
                alt="Calendar icon"
                width={15}
                height={15}
              />
              <p className="text-[8px] md:text-[12px]">{post.datePublished}</p>
            </div>
          </div>
        </div>

        <section className="mx-auto flex flex-col gap-[1rem] py-[35px] max-md:max-w-[460px] md:max-w-[680px] md:gap-[1.5rem] md:py-[60px]">
          {post.content.map((paragraph: string) => (
            <p
              key={paragraph.substring(0, 10)}
              className="text-justify text-[12px] md:text-[16px]"
            >
              {paragraph}
            </p>
          ))}
        </section>

        <hr className="border-[#d9d9d9]" />

        <section>
          <h4 className="mx-auto mb-[17px] mt-[28px] max-md:max-w-[460px] md:mb-[30px] md:mt-[50px] md:text-[24px]">
            Related Articles
          </h4>

          <div className="grid grid-cols-1 gap-[21px] md:grid-cols-2 md:gap-[5%] lg:grid-cols-4">
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
