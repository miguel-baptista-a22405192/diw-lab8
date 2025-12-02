"use client";

import { useState } from "react";

export default function InputPage() {
  const [texto, setTexto] = useState("");
  const [categoria, setCategoria] = useState("React");
  const [tarefa, setTarefa] = useState("");
  const [lista, setLista] = useState<
    { id: number; nome: string; categoria: string; editar: boolean; temp: string }[]
  >([]);

  const categorias = ["React", "Next.js", "Tailwind", "TypeScript"];

  function adicionar() {
    if (!tarefa.trim()) return;

    setLista([
      ...lista,
      {
        id: Date.now(),
        nome: tarefa,
        categoria,
        editar: false,
        temp: tarefa,
      },
    ]);

    setTarefa("");
  }

  function apagar(id: number) {
    setLista(lista.filter((t) => t.id !== id));
  }

  function ativarEdicao(id: number) {
    setLista(
      lista.map((t) =>
        t.id === id ? { ...t, editar: true, temp: t.nome } : t
      )
    );
  }

  function guardar(id: number) {
    setLista(
      lista.map((t) =>
        t.id === id ? { ...t, nome: t.temp, editar: false } : t
      )
    );
  }

  function atualizarTemp(id: number, valor: string) {
    setLista(
      lista.map((t) =>
        t.id === id ? { ...t, temp: valor } : t
      )
    );
  }

  return (
    <div
      className="p-6 rounded-2xl mx-auto text-black"
      style={{ background: "#c4ddff", width: "70%" }}
    >
      <h1 className="text-3xl font-bold mb-6 text-black">Input</h1>

      <input
        className="w-full p-3 border rounded text-black mb-3"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Digite algo..."
      />

      <p className="mb-6 text-black">{texto}</p>

      <div className="flex items-center gap-3 mb-6">
        <input
          className="flex-1 p-2 border rounded text-black"
          value={tarefa}
          onChange={(e) => setTarefa(e.target.value)}
          placeholder="Nova tarefa..."
        />

        <select
          className="border p-2 rounded text-black"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        >
          {categorias.map((c, i) => (
            <option key={i} value={c}>
              {c}
            </option>
          ))}
        </select>

        <button
          type="button"
          onClick={adicionar}
          className="bg-gray-200 px-4 py-2 rounded text-black"
        >
          Adicionar tarefa
        </button>
      </div>

      <div className="space-y-4">
        {lista.map((t) => (
          <div
            key={t.id}
            className="border p-4 rounded-lg text-black"
            style={{ background: "#dbe8ff" }}
          >
            <h2 className="font-bold mb-2 text-black">{t.categoria}</h2>

            {t.editar ? (
              <div className="flex items-center gap-4">
                <input
                  className="border p-2 rounded text-black w-1/2"
                  value={t.temp}
                  onChange={(e) => atualizarTemp(t.id, e.target.value)}
                />

                <button
                  className="bg-green-300 px-4 py-2 rounded"
                  onClick={() => guardar(t.id)}
                >
                  Guardar
                </button>
              </div>
            ) : (
              <>
                <p className="mb-3 text-black">{t.nome}</p>

                <div className="flex gap-3">
                  <button
                    className="bg-yellow-300 px-3 py-1 rounded"
                    onClick={() => ativarEdicao(t.id)}
                  >
                    Editar
                  </button>

                  <button
                    className="bg-red-300 px-3 py-1 rounded"
                    onClick={() => apagar(t.id)}
                  >
                    Apagar
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
