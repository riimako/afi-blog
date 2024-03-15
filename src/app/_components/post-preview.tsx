import Link from "next/link";
import Avatar from "./avatar";
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
    <div className="border-4">
      {coverImage ? (
        <div className="mb-5">
          <CoverImage slug={slug} title={title} src={coverImage} />
        </div>
      ) : null}
      <h3 className="text-2xl mb-3 leading-snug">
        <Link
          as={`/posts/${slug}`}
          href="/posts/[slug]"
          className="hover:underline"
        >
          {title}
        </Link>
      </h3>
      <div className="text-sm mb-4">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-md leading-relaxed mb-4">{excerpt}</p>
    </div>
  );
}
