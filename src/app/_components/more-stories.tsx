import { Post } from "@/interfaces/post";
import { PostPreview } from "./post-preview";
import { Button } from "flowbite-react";

type Props = {
  posts: Post[];
};

export function MoreStories({ posts }: Readonly<Props>) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32">
      {posts.slice(0, 2).map((post) => (
        <PostPreview
          key={post.slug}
          title={post.title}
          date={post.date}
          slug={post.slug}
          excerpt={post.excerpt}
          coverImage={post.coverImage}
        />
      ))}
      {/* <Button color="blue" className="font-bold">
        Llegir més
        <svg
          className="-mr-1 ml-2 h-4 w-4"
          fill="white"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </Button> */}
    </div>
  );
}
