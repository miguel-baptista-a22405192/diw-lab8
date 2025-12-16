"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ProductDetailProps {
  title: string;
  image: string;
  price: number;
  category: string;
  description: string;
  rating: { rate: number; count: number };
}

export default function ProductDetail({
  title,
  image,
  price,
  category,
  description,
  rating,
}: ProductDetailProps) {
  return (
    <Card className="bg-white/10 rounded-xl shadow max-w-xl mx-auto">
      <CardContent className="p-6 flex flex-col items-center gap-4">

        {/* ===== ALTERAÇÃO POSSÍVEL =====
           Normalizar o tamanho da imagem para evitar distorções

           PASSOS:
           1. APAGAR o componente Image abaixo
           2. SUBSTITUIR pelo bloco comentado
        */}
        {/*
        <div className="w-72 h-72 bg-white/10 p-4 rounded-xl flex items-center justify-center overflow-hidden">
          <Image
            src={image}
            alt={title}
            width={300}
            height={300}
            className="object-contain"
          />
        </div>
        */}

        <Image
          src={image}
          alt={title}
          width={250}
          height={250}
          className="rounded-lg"
        />

        <h1 className="text-2xl font-bold text-center">{title}</h1>

        {/* ===== ALTERAÇÃO POSSÍVEL =====
           Ocultar categoria se não existir

           PASSOS:
           1. SUBSTITUIR o parágrafo abaixo por render condicional
        */}
        {/*
        {category && (
          <p className="text-gray-300 text-sm">{category}</p>
        )}
        */}

        <p className="text-gray-300 text-sm">{category}</p>

        {/* ===== ALTERAÇÃO POSSÍVEL =====
           Mostrar rating com estrelas dinâmicas

           PASSOS:
           1. APAGAR o parágrafo atual
           2. SUBSTITUIR pelo bloco comentado
        */}
        {/*
        <div className="flex gap-1">
          {Array.from({ length: Math.round(rating.rate) }).map((_, i) => (
            <span key={i}>⭐</span>
          ))}
          <span className="ml-2 text-sm">({rating.count})</span>
        </div>
        */}

        <p className="text-yellow-400 text-lg">
          ⭐ {rating.rate} ({rating.count} reviews)
        </p>

        {/* ===== ALTERAÇÃO POSSÍVEL =====
           Mostrar preço com desconto fixo (ex: 10%)

           PASSOS:
           1. CRIAR variável discountedPrice
           2. SUBSTITUIR o preço atual
        */}
        {/*
        const discountedPrice = (price * 0.9).toFixed(2);

        <p className="text-green-400 text-2xl font-semibold">
          {discountedPrice} €
        </p>
        */}

        <p className="text-green-400 text-2xl font-semibold">{price} €</p>

        <p className="text-sm text-gray-200 text-center mt-2">
          {description}
        </p>

        {/* ===== ALTERAÇÃO POSSÍVEL =====
           Adicionar botão "Adicionar ao carrinho"

           PASSOS:
           1. RECEBER onAdd por props
           2. ADICIONAR botão abaixo
        */}
        {/*
        <Button
          className="mt-4 bg-green-500 hover:bg-green-600"
          onClick={onAdd}
        >
          Adicionar ao carrinho
        </Button>
        */}

        <Link href="/produtos">
          <Button className="mt-4" variant="secondary">
            Voltar
          </Button>
        </Link>

        {/*
        ===== RESUMO DE ALTERAÇÕES POSSÍVEIS =====
        - Normalizar imagem com wrapper fixo
        - Render condicional da categoria
        - Rating com estrelas dinâmicas
        - Preço com desconto
        - Botão de adicionar ao carrinho
        - Pequenas alterações de layout sem mexer na lógica
        */}
      </CardContent>
    </Card>
  );
}
