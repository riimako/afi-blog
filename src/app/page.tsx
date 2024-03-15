import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "../lib/api";

export default function Index() {
  const allPosts = getAllPosts();

  return (
    <>
      <Intro />
      <section className="flex mt-5 mb-5">
        <div className="w-4/5">aqui va lo otro</div>
      </section>
      {allPosts.length > 0 && <MoreStories posts={allPosts} />}
    </>
  );
}
