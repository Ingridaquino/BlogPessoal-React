//modelo para fazer o cadastro do usuario

interface User {
  id: number;
  nome: string;
  usuario: string;
  foto?: string | null,
  senha: string;
}

export default User;