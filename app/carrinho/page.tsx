"use client";

import { useEffect, useState } from "react";
import { Product } from "@/app/models/interfaces";

export default function CarrinhoPage() {
  const [cart, setCart] = useState<Product[]>([]);
  const [student, setStudent] = useState(false);
  const [coupon, setCoupon] = useState("");
  const [result, setResult] = useState<any>(null);

  // ===== ALTERAÇÃO POSSÍVEL =====
  // Persistir carrinho com validação extra
  /*
  useEffect(() => {
    const saved = localStorage.getItem("cart");
    if (saved && saved !== "[]") setCart(JSON.parse(saved));
  }, []);
  */

  useEffect(() => {
    const saved = localStorage.getItem("cart");
    if (saved) setCart(JSON.parse(saved));
  }, []);

  const remove = (id: number) => {
    /*
    if (!confirm("Remover produto do carrinho?")) return;
    */
    const updated = cart.filter((p) => p.id !== id);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const total = cart.reduce((s, p) => s + p.price, 0).toFixed(2);

  /*
  const total = cart
    .reduce((s, p) => s + p.price * 1.23, 0)
    .toFixed(2);
  */

  const buy = async () => {
    /*
    if (cart.length === 0) {
      alert("Carrinho vazio");
      return;
    }
    */

    try {
      const res = await fetch("https://deisishop.pythonanywhere.com/buy", {
        method: "POST",
        body: JSON.stringify({
          products: cart.map((p) => p.id),
          student,
          coupon,
          name: "",
          /*
          name
          */
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

      /*
      router.push("/produtos");
      */
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

          {/*
          <p className="text-green-400">{p.price}€</p>
          */}

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

      {/*
      const totalComDesconto = student
        ? (Number(total) * 0.9).toFixed(2)
        : total;
      */}

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

      {/*
      {result && <p className="mt-4 text-green-400">{result.message}</p>}
      */}

      {result && (
        <pre className="mt-4 bg-black/30 p-4 rounded">
          {JSON.stringify(result, null, 2)}
        </pre>
      )}  

      {/*
      ===== RESUMO DE ALTERAÇÕES POSSÍVEIS =====
      - Validação do localStorage
      - Confirmação ao remover produto
      - Total com IVA
      - Total com desconto estudante
      - Nome do utilizador no POST
      - Redirecionamento após compra
      - Mensagem de sucesso em vez de JSON
      */}
    </div>
  );
}
