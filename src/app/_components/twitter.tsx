"use client";
import { Suspense, useEffect, useState } from "react";
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
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=gerbertstc&count=1",
      {
        headers: {
          oauth_consumer_key: "yRO286UmThFDy5rRTJQxQekNg",
          oauth_consumer_secret:
            "DHZBry7MBw4Lj7nTMgRBxaPzgioOonOB2WcUkI73BdMmPXk3Ij",
          oauth_token: "Vzg2bGRRSFpadTd0LXBwWFhhNFg6MTpjaQ",
          oauth_token_secret:
            "oS6GKKlCsweyVN6YA9RXHvGOsy6pd1L8DVb_JJyNT5m6ZJ77xl",
        },
      },
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;
  return (
    <section className="flex mt-5 mb-5">
      <div className="w-4/5">
        <Suspense fallback={<TweetSkeleton />}>
          <TweetPage id={"1768612496481366120"} />
        </Suspense>
      </div>
    </section>
  );
};
export default Twitter;
