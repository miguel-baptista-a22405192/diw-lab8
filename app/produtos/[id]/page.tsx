"use client";

import useSWR from "swr";
import { useParams } from "next/navigation";
import ProdutoDetalhe from "./ProdutoDetalhe";
import { Product } from "@/app/models/interfaces";

const API = "https://deisishop.pythonanywhere.com";
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function ProdutoPage() {
  const { id } = useParams();

  const { data: produto, error, isLoading } = useSWR<Product>(
    `${API}/products/${id}`,
    fetcher
  );

  if (isLoading) return <p className="p-6 text-center">A carregar...</p>;
  if (error) return <p className="p-6 text-center text-red-400">Erro ao carregar produto.</p>;
  if (!produto) return <p className="p-6 text-center">Produto não encontrado.</p>;

  return <ProdutoDetalhe produto={produto} />;
}
