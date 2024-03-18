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
    <section className="flex mt-5 mb-5">
      <div className="mx-auto">
        <Suspense fallback={<TweetSkeleton />}>
          <TweetPage id={"1768612496481366120"} />
        </Suspense>
      </div>
    </section>
  );
};
export default Twitter;
