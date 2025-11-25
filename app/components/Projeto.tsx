type ProjetoProps = {
  nome: string;
  url: string;
};

export default function Projeto({ nome, url }: ProjetoProps) {
  return (
    <div>
      <p>
        O projeto <strong>{nome}</strong> pode ser visto aqui:{" "}
        <a href={url} target="_blank">{url}</a>
      </p>
    </div>
  );
}
