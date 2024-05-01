import { Suspense } from "react";
import { getTweet as _getTweet } from "react-tweet/api";
import { unstable_cache } from "next/cache";
import { TweetSkeleton, EmbeddedTweet, TweetNotFound } from "react-tweet";

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
const Twitter = () => {
  return (
    <section className="flex mt-5 mb-5 flex-col lg:flex-row">
      <Suspense fallback={<TweetSkeleton />}>
        <TweetPage id={"1785222132030447641"} />
        <TweetPage id={"1785221776303079712"} />
        <TweetPage id={"1785072111461011967"} />
        <TweetPage id={"1768612496481366120"} />
      </Suspense>
    </section>
  );
};
export default Twitter;
