"use client";

import { useState, useEffect } from "react";

export default function Contador() {
  const STORAGE_KEY = "contador_valor";
  const [contador, setContador] = useState(0);
  const [historico, setHistorico] = useState<number[]>([]);

  useEffect(() => {
    const valorSalvo = localStorage.getItem(STORAGE_KEY);
    if (valorSalvo) {
      const valor = Number(valorSalvo);
      setContador(valor);
      setHistorico([valor]);
    }
  }, []);

  useEffect(() => {
    if (historico.length > 0) {
      localStorage.setItem(STORAGE_KEY, String(contador));
    }
  }, [contador, historico.length]);

  const incrementar = () => {
    if (contador < 10) {
      const novoValor = contador + 1;
      setContador(novoValor);
      setHistorico([...historico, novoValor]);
    }
  };

  const decrementar = () => {
    if (contador > 0) {
      const novoValor = contador - 1;
      setContador(novoValor);
      setHistorico([...historico, novoValor]);
    }
  };

  const reset = () => {
    setContador(0);
    setHistorico([0]);
  };

  const getColor = () => {
    if (contador >= 0 && contador <= 3) return "text-red-500";
    if (contador >= 4 && contador <= 7) return "text-yellow-500";
    if (contador >= 8 && contador <= 10) return "text-green-500";
    return "text-gray-800";
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
        <div className="text-center mb-8">
          <p className="text-gray-600 mb-4">Valor atual:</p>
          <p className={`text-8xl font-bold ${getColor()} transition-colors duration-300`}>
            {contador}
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Intervalo: [0 - 10]
          </p>
        </div>

        <div className="flex gap-4 justify-center mb-6">
          <button
            onClick={decrementar}
            disabled={contador === 0}
            className="bg-red-500 hover:bg-red-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
          >
            - Decrementar
          </button>
          
          <button
            onClick={reset}
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
          >
            ↻ Reset
          </button>
          
          <button
            onClick={incrementar}
            disabled={contador === 10}
            className="bg-green-500 hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
          >
            + Incrementar
          </button>
        </div>

        <div className="flex gap-4 text-center text-sm text-gray-600 border-t pt-4">
          <div className="flex-1">
            <span className="font-semibold text-red-500">Vermelho:</span> 0-3
          </div>
          <div className="flex-1">
            <span className="font-semibold text-yellow-500">Amarelo:</span> 4-7
          </div>
          <div className="flex-1">
            <span className="font-semibold text-green-500">Verde:</span> 8-10
          </div>
        </div>
      </div>

      {historico.length > 0 && (
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4 text-gray-800">
            Histórico de Valores
          </h2>
          <ul className="flex flex-wrap gap-2">
            {historico.map((valor, index) => (
              <li
                key={index}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
              >
                {valor}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}