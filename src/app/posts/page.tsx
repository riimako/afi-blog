import { getAllPosts } from "../../lib/api";
import { PostPreview } from "../_components/post-preview";

export default function Page() {
  const allPosts = getAllPosts();
  return (
    <>
      <h1 className="mb-1 text-lg md:text-xl md:m-2">
        Totes les notícies en un sol lloc
      </h1>
      <p className="mb-1 text-md text-gray-700 md:text-lg dark:text-gray-400 m-2">
        Benvinguts a l’arxiu de notícies! Aquí pots trobar totes les
        publicacions que hem compartit fins ara, amb informació actualitzada i
        rellevant sobre els temes que més t’interessen. Estigues al dia amb un
        cop d’ull ràpid o reviu els moments més destacats que hem cobert.
        Endavant, explora i mantén-te informat!
      </p>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-4 md:gap-x-4 lg:gap-x-16 gap-y-4 md:gap-y-16 mb-2">
        {allPosts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            date={post.date}
            slug={post.slug}
            excerpt={post.excerpt}
            coverImage={post.coverImage}
          />
        ))}
      </div>
    </>
  );
}
