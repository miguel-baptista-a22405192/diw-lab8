"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/app/models/interfaces";

export default function ProdutoDetalhe({ produto }: { produto: Product }) {
  return (
    <div className="p-6 max-w-xl mx-auto text-center">

      <h1 className="text-3xl font-bold mb-4">{produto.title}</h1>

      // ===== ALTERAÇÃO POSSÍVEL =====
      // Normalizar o tamanho da imagem para evitar distorções
      //
      // PASSOS:
      // 1. APAGAR o componente Image atual
      // 2. SUBSTITUIR pelo bloco abaixo
      //
      // CÓDIGO:
      /*
      <div className="w-full flex justify-center mb-6">
        <div className="w-72 h-72 bg-white/10 p-4 rounded-xl flex items-center justify-center overflow-hidden">
          <Image
            src={produto.image}
            width={300}
            height={300}
            alt={produto.title}
            className="object-contain"
          />
        </div>
      </div>
      */

      <Image
        src={produto.image}
        width={300}
        height={300}
        alt={produto.title}
        className="mx-auto rounded-xl mb-6 bg-white/10 p-4"
      />

      <p className="opacity-80 mb-4">{produto.description}</p>

      <p className="text-green-400 text-xl font-bold mb-2">{produto.price} €</p>

      <p className="text-yellow-400 mb-6">⭐ {produto.rating.rate}</p>

      // ===== ALTERAÇÃO POSSÍVEL =====
      // Mostrar a categoria do produto
      //
      // PASSOS:
      // 1. CONFIRMAR que produto.category existe
      // 2. ADICIONAR o parágrafo abaixo antes do botão Voltar
      //
      // CÓDIGO:
      /*
      <p className="opacity-70 mb-4">
        Categoria: {produto.category}
      </p>
      */

      // ===== ALTERAÇÃO POSSÍVEL =====
      // Substituir o Link por um botão com navegação imperativa
      //
      // PASSOS:
      // 1. IMPORTAR useRouter
      // 2. CRIAR const router = useRouter()
      // 3. APAGAR o Link abaixo
      // 4. ADICIONAR o botão
      //
      // CÓDIGO:
      {/*
      <button
        onClick={() => router.push("/produtos")}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
      >
        Voltar
      </button>
      */}

      <Link
        href="/produtos"
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
      >
        Voltar
      </Link>

      // ===== ALTERAÇÃO POSSÍVEL =====
      // Adicionar botão "Adicionar ao carrinho" no detalhe
      //
      // PASSOS:
      // 1. ALTERAR props para receber onAdd
      // 2. ADICIONAR o botão abaixo do Voltar
      //
      // CÓDIGO:
      {/*
      <button
        className="block mx-auto mt-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
        onClick={onAdd}
      >
        Adicionar ao carrinho
      </button>
      */}
    </div>

    // ===== RESUMO DE ALTERAÇÕES POSSÍVEIS =====
    // - Normalizar imagem com wrapper fixo
    // - Mostrar categoria do produto
    // - Alterar navegação (Link vs botão)
    // - Adicionar ação de carrinho no detalhe
    // - Ajustar layout sem mexer na lógica
  );
}
