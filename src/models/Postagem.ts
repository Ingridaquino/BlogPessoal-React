import Tema from "./Tema";

interface Postagem {
  id: number;
  titulo: string;
  texto: string;
  tema?: Tema | null; // fazendo a relacao das tabelas 

}

export default Postagem;