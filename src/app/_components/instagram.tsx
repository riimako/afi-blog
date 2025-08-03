"use client";
import { Carousel } from "flowbite-react";

export interface InstagramPost {
  id: string;
  caption?: string;
  media_url: string;
  permalink: string;
}

interface InstagramCarouselProps {
  posts: InstagramPost[];
}

const InstagramCarousel: React.FC<InstagramCarouselProps> = ({ posts }) => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-4">Últimos Posts</h2>
      <Carousel>
        {posts.map((post) => (
          <a
            key={post.id}
            href={post.permalink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={post.media_url}
              alt={post.caption || "Instagram Post"}
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          </a>
        ))}
      </Carousel>
    </div>
  );
};

export default InstagramCarousel;
