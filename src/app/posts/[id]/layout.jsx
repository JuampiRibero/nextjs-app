import Link from "next/link";

const fetchSinglePost = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: { revalidate: 1800 },
  }).then((res) => res.json());
};

export default async function PostLayout({ children, params }) {
  const { id } = params;
  const post = await fetchSinglePost(id);

  return (
    <article key={post.id} className="mt-4 mb-2">
      <h2 className="text-xl underline first-letter:uppercase">{post.title}</h2>
      <p className="text-md first-letter:uppercase text-gray-500">{post.body}</p>
      <Link href={`/posts/${id}/comments`} className="text-sm">Ver comentarios</Link>
      {children}
    </article>
  );
}
