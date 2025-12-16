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

  // ===== ALTERAÇÃO POSSÍVEL =====
  // Mostrar um spinner em vez de texto simples no loading
  //
  // PASSOS:
  // 1. APAGAR este return
  // 2. SUBSTITUIR pelo código abaixo
  //
  // CÓDIGO:
  /*
  if (isLoading)
    return (
      <div className="flex justify-center items-center h-40">
        <Spinner className="h-8 w-8" />
      </div>
    );
  */

  if (isLoading) return <p className="p-6 text-center">A carregar...</p>;

  // ===== ALTERAÇÃO POSSÍVEL =====
  // Criar uma página de erro mais explícita
  //
  // PASSOS:
  // 1. APAGAR este return
  // 2. SUBSTITUIR pelo código abaixo
  //
  // CÓDIGO:
  /*
  if (error)
    return (
      <div className="p-6 text-center text-red-400">
        Ocorreu um erro ao carregar o produto.
      </div>
    );
  */

  if (error)
    return <p className="p-6 text-center text-red-400">Erro ao carregar produto.</p>;

  // ===== ALTERAÇÃO POSSÍVEL =====
  // Redirecionar automaticamente se o produto não existir
  //
  // PASSOS:
  // 1. IMPORTAR useRouter
  // 2. CRIAR const router = useRouter()
  // 3. SUBSTITUIR este return por router.push("/produtos")
  //
  // CÓDIGO:
  /*
  if (!produto) {
    router.push("/produtos");
    return null;
  }
  */

  if (!produto)
    return <p className="p-6 text-center">Produto não encontrado.</p>;

  // ===== ALTERAÇÃO POSSÍVEL =====
  // Adicionar botão de "Adicionar ao carrinho" no detalhe
  //
  // PASSOS:
  // 1. RECEBER addToCart por props
  // 2. PASSAR addToCart ao ProdutoDetalhe
  //
  // CÓDIGO:
  /*
  return (
    <ProdutoDetalhe
      produto={produto}
      onAdd={() => addToCart(produto)}
    />
  );
  */

  return <ProdutoDetalhe produto={produto} />;

  // ===== RESUMO DE ALTERAÇÕES POSSÍVEIS =====
  // - Substituir texto de loading por spinner
  // - Melhorar mensagem de erro
  // - Redirecionar quando produto não existe
  // - Adicionar ação de carrinho no detalhe
  // - Transformar lógica em Server Component
}
