import Link from "next/link";
import LikeButton from "./LikeButton";

const fetchPosts = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 1800 },
  }).then((res) => res.json());
};

export default async function ListOfPosts() {
  const posts = await fetchPosts();

  return posts.slice(0, 5).map((post) => (
    <article key={post.id} className="mb-2">
      <Link href={`/posts/${post.id}`}>
        <h2 className="text-xl underline first-letter:uppercase">
          {post.title}
        </h2>
      </Link>
      <p className="text-md first-letter:uppercase text-gray-500">
        {post.body}
      </p>
      <LikeButton id={post.id} />
    </article>
  ));
}
