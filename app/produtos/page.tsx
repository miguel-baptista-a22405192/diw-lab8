"use client";

import useSWR from "swr";
import { useState, useEffect } from "react";
import ProductCard from "@/app/components/ProductCard";
import { Product } from "@/app/models/interfaces";
import { Spinner } from "@/components/ui/spinner";

const fetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) throw new Error("Erro ao carregar produtos");
  return res.json();
};

export default function ProdutosPage() {
  const { data, error, isLoading } = useSWR<Product[]>(
    "https://deisishop.pythonanywhere.com/products",
    fetcher
  );

  const [search, setSearch] = useState("");
  const [order, setOrder] = useState("none");

  const [cart, setCart] = useState<Product[]>([]);
  const [student, setStudent] = useState(false);
  const [coupon, setCoupon] = useState("");
  const [response, setResponse] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("cart");
    if (saved) setCart(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (p: Product) => {
    setCart((prev) => [...prev, p]);
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
  };

  const buy = async () => {
    const res = await fetch("https://deisishop.pythonanywhere.com/buy", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        products: cart.map((p) => p.id),
        student,
        coupon
      }),
    });

    const data = await res.json();
    setResponse(data.message || "Compra realizada!");
    setCart([]);
    localStorage.setItem("cart", JSON.stringify([]));
  };

  const filtered = (() => {
    if (!data) return [];

    let lista = [...data];

    if (search.trim() !== "") {
      lista = lista.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    switch (order) {
      case "name-asc":
        lista.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "name-desc":
        lista.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "price-asc":
        lista.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        lista.sort((a, b) => b.price - a.price);
        break;
    }

    return lista;
  })();

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-40">
        <Spinner className="h-10 w-10" />
      </div>
    );

  if (error)
    return (
      <p className="p-6 text-red-400 text-center">Erro ao carregar produtos.</p>
    );

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Produtos</h1>

      <div className="flex flex-col md:flex-row gap-4 mb-6 justify-between">
        <input
          type="text"
          placeholder="Pesquisar produtos..."
          className="w-full p-2 rounded text-black"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="p-2 rounded text-black"
          value={order}
          onChange={(e) => setOrder(e.target.value)}
        >
          <option value="none">Sem ordenação</option>
          <option value="name-asc">Nome ↑</option>
          <option value="name-desc">Nome ↓</option>
          <option value="price-asc">Preço ↑</option>
          <option value="price-desc">Preço ↓</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filtered.map((p) => (
          <div key={p.id} className="flex flex-col items-center">
            <ProductCard product={p} />

            <button
              className="mt-3 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
              onClick={() => addToCart(p)}
            >
              Adicionar ao carrinho
            </button>
          </div>
        ))}
      </div>

      <div className="bg-white/20 p-4 rounded-xl mt-8">
        <h2 className="text-2xl font-bold mb-3">Carrinho</h2>

        {cart.length === 0 ? (
          <p className="opacity-70">Carrinho vazio</p>
        ) : (
          cart.map((p, index) => (
            <div
              key={`${p.id}-${index}`}
              className="flex justify-between py-1 border-b border-white/10"
            >
              <p>
                {p.title} – {p.price}€
              </p>
              <button
                className="text-red-400"
                onClick={() => removeFromCart(p.id)}
              >
                remover
              </button>
            </div>
          ))
        )}

        <p className="font-bold mt-4">
          Total: {cart.reduce((acc, p) => acc + Number(p.price), 0).toFixed(2)}€
        </p>

        <div className="mt-4 flex items-center gap-3">
          <input
            type="checkbox"
            checked={student}
            onChange={(e) => setStudent(e.target.checked)}
          />
          <label>Estudante DEISI</label>
        </div>

        <input
          type="text"
          placeholder="Cupão de desconto"
          className="w-full p-2 rounded text-black mt-3"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
        />

        <button
          className="mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded w-full"
          onClick={buy}
        >
          Comprar
        </button>

        {response && (
          <p className="text-center mt-4 font-bold text-green-300">
            {response}
          </p>
        )}
      </div>
    </div>
  );
}
