import Container from "@/app/_components/container";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "../lib/api";
import SideMenu from "./_components/sideMenu";

export default function Index() {
  const allPosts = getAllPosts();

  return (
    <main className="min-h-screen flex">
      <Container>
        <Intro />
        <section className="flex mt-5 mb-5">
          
          <div className="w-4/5">aqui va lo otro</div>
      <SideMenu/>
        </section>
        {allPosts.length > 0 && <MoreStories posts={allPosts} />}
      </Container>
    </main>
  );
}
