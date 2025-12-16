"use client";

import { useState, useEffect } from "react";

export default function TestesPage() {
  const [counter, setCounter] = useState(0);
  const [text, setText] = useState("");
  const [mounted, setMounted] = useState(false);

  {/* 
    POSSÍVEL ALTERAÇÃO NA DEFESA:
    Executar código apenas após o componente montar.

    PASSOS:
    1. Usar useEffect com array vazio []
    2. Atualizar estado mounted
  */}
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="p-6 max-w-xl mx-auto bg-white/10 rounded-xl space-y-6">

      <h1 className="text-3xl font-bold text-center">
        Página de Testes
      </h1>

      {/* 
        POSSÍVEL ALTERAÇÃO NA DEFESA:
        Mostrar conteúdo apenas depois do mount (SSR vs CSR).

        PASSOS:
        1. Verificar mounted
        2. Retornar null ou loading antes
      */}
      {!mounted && <p className="text-center">A carregar...</p>}

      {mounted && (
        <>
          {/* 
            POSSÍVEL ALTERAÇÃO NA DEFESA:
            Criar contador simples com useState.

            PASSOS:
            1. Usar setCounter
            2. Incrementar valor anterior
          */}
          <div className="text-center">
            <p className="text-lg">Contador: {counter}</p>
            <button
              className="bg-blue-500 px-4 py-2 rounded text-white mt-2"
              onClick={() => setCounter(counter + 1)}
            >
              Incrementar
            </button>
          </div>

          {/* 
            POSSÍVEL ALTERAÇÃO NA DEFESA:
            Controlar input com estado (controlled component).

            PASSOS:
            1. Criar estado
            2. Usar value + onChange
          */}
          <div>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Escreve algo..."
              className="w-full p-2 rounded text-black"
            />
            <p className="mt-2 text-center opacity-80">
              Texto: {text}
            </p>
          </div>
        </>
      )}

      {/* 
        POSSÍVEL ALTERAÇÃO NA DEFESA:
        Navegar para outra página.

        PASSOS:
        1. Importar Link de next/link
        2. Usar <Link href="/produtos">
      */}
    </div>
  );
}
{
/*
RESUMO REACT (O QUE SABER):
- useState → estado reativo, força re-render
- useEffect → efeitos colaterais (fetch, localStorage, mount)
- Componentes re-renderizam quando state ou props mudam
- Inputs controlados usam value + onChange
- JSX permite lógica com && e ternários

RESUMO NEXT.JS (O QUE SABER):
- app/ usa App Router
- page.tsx cria uma rota automaticamente
- pastas = URLs
- [id] cria rotas dinâmicas
- "use client" é obrigatório para hooks
- next/link faz navegação sem reload
- next/image otimiza imagens
- SSR vs CSR: componentes client-side usam hooks

ESTRUTURA IMPORTANTE:
- app/testes/page.tsx → /testes
- app/produtos/page.tsx → /produtos
- app/produtos/[id]/page.tsx → /produtos/1

DEFESA:
- O professor pede alteração → vais ao comentário certo
- Copias o código indicado
- Explicas o passo (estado, efeito, render)
*/
}
