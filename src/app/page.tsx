import { Suspense } from "react";
import { unstable_cache } from "next/cache";
import { TweetSkeleton, EmbeddedTweet, TweetNotFound } from "react-tweet";
import { getTweet as _getTweet } from "react-tweet/api";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "../lib/api";

const getTweet = unstable_cache(
  async (id: string) => _getTweet(id),
  ["tweet"],
  { revalidate: 3600 * 24 },
);

const TweetPage = async ({ id }: { id: string }) => {
  try {
    const tweet = await getTweet(id);
    return tweet ? <EmbeddedTweet tweet={tweet} /> : <TweetNotFound />;
  } catch (error) {
    console.error(error);
    return <TweetNotFound error={error} />;
  }
};
export default function Index() {
  const allPosts = getAllPosts();

  return (
    <>
      <Intro />
      <section className="flex mt-5 mb-5">
        <div className="w-4/5">una imagen potente del cole</div>
        <div className="w-4/5">avantatges de ser socio</div>
        <div className="w-4/5">resumen con iconos del ampa</div>
        <div className="w-4/5">como participar</div>
      </section>
      {allPosts.length > 0 && <MoreStories posts={allPosts} />}
      <section className="flex mt-5 mb-5">
        <div className="w-4/5">
          <Suspense fallback={<TweetSkeleton />}>
            <TweetPage id={"1768612496481366120"} />
          </Suspense>
        </div>
      </section>
    </>
  );
}
