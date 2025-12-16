"use client";

import { useState, useEffect } from "react";

export default function ContadorPersonalizado({ title }: { title: string }) {
  const key = `likes_${title.replace(/\s+/g, "_")}`;
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    const salvo = localStorage.getItem(key);
    if (salvo) setLikes(Number(salvo));
  }, []);

  function adicionarLike() {
    const novo = likes + 1;
    setLikes(novo);
    localStorage.setItem(key, String(novo));
  }

  return (
    <button
      onClick={adicionarLike}
      className="bg-pink-300 px-3 py-1 rounded hover:bg-pink-400"
    >
      ❤️ <div className="inline-block w-4 h-4" /> {likes}
    </button>
  );
}
