import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "../lib/api";

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
        <div className="w-4/5">añadir twitter o instagram</div>
      </section>
    </>
  );
}
