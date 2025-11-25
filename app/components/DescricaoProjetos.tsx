import Projeto from "./Projeto";

export default function DescricaoProjetos() {
  return (
    <section>
      <h2>Lista de Projetos</h2>

      <p>
        Veja também todos os meus projetos no GitHub Pages:{" "}
        <a href="https://github.com/miguel-baptista-a22405192/LP2-22405192-22408651.github.io" target="_blank">GitHub Pages</a>
      </p>

      <Projeto
        nome="Projeto do Site"
        url="https://github.com/miguel-baptista-a22405192/miguelbaptista1.github.io"
      />

       <Projeto
        nome="Projeto da Loja"
        url="https://github.com/miguel-baptista-a22405192/miguelbaptista1.github.io/tree/main/Lab7"
      />

    </section>
  );
}
