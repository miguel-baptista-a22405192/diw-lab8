import { Product } from "@/app/models/interfaces";

export function getFavoritos(): Product[] {
  const saved = localStorage.getItem("favoritos");
  return saved ? JSON.parse(saved) : [];
}

export function toggleFavorito(produto: Product): Product[] {
  const favoritos = getFavoritos();
  const exists = favoritos.find((p) => p.id === produto.id);

  const updated = exists
    ? favoritos.filter((p) => p.id !== produto.id)
    : [...favoritos, produto];

  localStorage.setItem("favoritos", JSON.stringify(updated));
  return updated;
}

export function isFavorito(id: number): boolean {
  const favoritos = getFavoritos();
  return favoritos.some((p) => p.id === id);
}