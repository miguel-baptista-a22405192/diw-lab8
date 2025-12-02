const API = "https://deisishop.pythonanywhere.com";

export default async function ProdutoPage({ params }: any) {
  console.log("TESTE PARAMS:", params);

  const { id } = params;

  const res = await fetch(`${API}/products/${id}`, {
    cache: "no-store"
  });

  if (!res.ok) {
    return <p className="p-6">Produto não encontrado.</p>;
  }

  const produto = await res.json();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{produto.title}</h1>

      <img
        src={produto.image}
        className="w-64 h-64 object-contain mb-4"
        alt={produto.title}
      />

      <p className="text-sm text-gray-300">{produto.description}</p>
      <p className="text-green-400 text-xl mt-4">{produto.price} €</p>
      <p className="text-yellow-400">⭐ {produto.rating.rate}</p>
    </div>
  );
}
