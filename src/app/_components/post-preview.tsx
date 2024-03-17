import Link from "next/link";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage?: string;
  date: string;
  excerpt: string;
  slug: string;
};

export function PostPreview({ title, coverImage, date, excerpt, slug }: Props) {
  return (
    <div className="border-2 border-yellow rounded-xl p-2">
      {coverImage ? (
        <div className="mb-5">
          <CoverImage slug={slug} title={title} src={coverImage} />
        </div>
      ) : null}
      <h3 className="text-xl mb-2 leading-snug">
        <Link
          as={`/posts/${slug}`}
          href="/posts/[slug]"
          className="hover:underline"
        >
          {title}
        </Link>
      </h3>
      <div className="text-sm mb-2">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-md leading-relaxed mb-2">{excerpt}</p>
    </div>
  );
}
