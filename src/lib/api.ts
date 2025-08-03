import { Post } from "@/interfaces/post";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import { InstagramPost } from "../app/_components/instagram";

const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Post;
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

export async function getAllInstagramPosts(): Promise<InstagramPost[]> {
  const res = await fetch(
    `https://graph.instagram.com/${1752120062021719}/media?fields=id,caption,media_type,media_url,permalink,timestamp&access_token=${"918452b691765d761cfb02933457f45d"}`,
  );
  console.log({ res });
  const data = await res.json();

  return data.data;
}
