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
    <div className="flex flex-col md:flex-row md:justify-around mt-8 items-center">
      <Suspense fallback={<TweetSkeleton />}>
        <TweetPage id={"1786484602380415329"} />
        <TweetPage id={"1785221776303079712"} />
        <TweetPage id={"1785072111461011967"} />
      </Suspense>
    </div>
  );
};
export default Twitter;
