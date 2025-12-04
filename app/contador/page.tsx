import Contador from "@/app/components/Contador";

export default function ContadorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Contador Interativo
      </h1>
      <Contador />
    </div>
  );
}