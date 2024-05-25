import Image from "next/image";

const fetchComments = async (id) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // throw new Error("Error al cargar los comentarios")

  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: { revalidate: 1800 },
  }).then((res) => res.json());
};

const imageLoader = ({ src, width, quality }) => {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
};

export default async function Post({ params }) {
  const { id } = params;
  const comments = await fetchComments(id);

  return (
    <ul className="bg-gray-200 mt-1">
      {comments.map((comment) => (
        <li key={comment.id} className="flex mb-2">
          <div className="flex align-center me-4">
            <Image
              src={`https://api.dicebear.com/8.x/pixel-art/svg?seed=${comment.name}
            `}
              width={100}
              height={100}
              alt={comment.name}
            />
          </div>
          <div>
            <h2 className="text-md first-letter:uppercase">{comment.name}</h2>
            <p className="text-sm first-letter:uppercase text-gray-500">
              {comment.body}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
