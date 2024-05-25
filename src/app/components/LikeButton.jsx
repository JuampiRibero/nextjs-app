"use client";

import { useState } from "react";

export default function LikeButton({ id }) {
  const [liked, setLiked] = useState(false);

  return (
    <button
      onClick={() => setLiked(!liked)}
      className="border-2 border-solid border-gray-500 rounded-md p-1"
    >
      {liked? "Me gusta ❤️" : "Me gusta"}
    </button>
  );
}
