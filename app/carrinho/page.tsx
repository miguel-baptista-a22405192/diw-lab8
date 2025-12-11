"use client";

import { useEffect, useState } from "react";
import { Product } from "@/app/models/interfaces";

export default function CarrinhoPage() {
  const [cart, setCart] = useState<Product[]>([]);
  const [student, setStudent] = useState(false);
  const [coupon, setCoupon] = useState("");
  const [result, setResult] = useState<any>(null);

  useEffect(() => {
    const saved = localStorage.getItem("cart");
    if (saved) setCart(JSON.parse(saved));
  }, []);

  const remove = (id: number) => {
    const updated = cart.filter((p) => p.id !== id);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const total = cart.reduce((s, p) => s + p.price, 0).toFixed(2);

  const buy = async () => {
    try {
      const res = await fetch("https://deisishop.pythonanywhere.com/buy", {
        method: "POST",
        body: JSON.stringify({
          products: cart.map((p) => p.id),
          student,
          coupon,
          name: "",
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) throw new Error("Erro no pedido");

      const data = await res.json();
      setResult(data);
      setCart([]);
      localStorage.setItem("cart", "[]");
    } catch (e) {
      setResult({ error: "Erro ao comprar" });
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Carrinho</h1>

      {cart.length === 0 && <p>Carrinho vazio.</p>}

      {cart.map((p) => (
        <div
          key={p.id}
          className="bg-white/10 p-3 rounded mb-2 flex justify-between"
        >
          <p>{p.title}</p>
          <button
            className="bg-red-500 px-3 rounded"
            onClick={() => remove(p.id)}
          >
            Remover
          </button>
        </div>
      ))}

      <p className="mt-4 text-green-400 text-lg font-bold">
        Total: {total} €
      </p>

      <label className="block mt-4">
        <input
          type="checkbox"
          checked={student}
          onChange={(e) => setStudent(e.target.checked)}
        />
        <span className="ml-2">Sou estudante DEISI</span>
      </label>

      <input
        type="text"
        placeholder="Cupão de desconto"
        className="p-2 mt-3 text-black rounded"
        value={coupon}
        onChange={(e) => setCoupon(e.target.value)}
      />

      <button
        className="bg-blue-500 px-4 py-2 rounded text-white mt-4"
        onClick={buy}
      >
        Comprar
      </button>

      {result && (
        <pre className="mt-4 bg-black/30 p-4 rounded">
          {JSON.stringify(result, null, 2)}
        </pre>
      )}
    </div>
  );
}
