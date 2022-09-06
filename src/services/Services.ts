//regras de negocios
//onde iremos fazer as requisições no back end

import { ApiRounded } from "@mui/icons-material";
import axios from "axios";
import { url } from "inspector";

export const api = axios.create({
    baseURL: 'https://blog2-indy.herokuapp.com' //base(unica) url, url do meu backend do blog
})



export const cadastroUsuario = async(url: any, dados: any, setDados: any) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
}

//url seria o /usuario/login
//dados os dados do usuario na interface (post = cadastrar)
export const login = async(url: any, dados: any, setDados: any) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data.token)
}

//Ao acionar o busca, irá fazer uma listagem de postagens ou temas
//url ( a rota de quem quero listar(postagem ou temas) e header(token) para saber que o usuario que está solicitando a listagem é um usuario autenticado )
export const busca = async(url: any, setDados: any, header: any) => {
    const resposta = await api.get(url, header)
    setDados(resposta.data)
}


//Busca por id
export const buscaId = async(url: any, setDados: any, header: any) => {
    const resposta = await api.get(url, header)
    setDados(resposta.data)
}


//Cadastrar tema ou postagem (post)
export const post = async(url: any, dados: any, setDados: any, header: any) => {
    const resposta = await api.post(url, dados, header)
    setDados(resposta.data)
}

//atualizar os dados, passar o token para verifcar se o usuario está logado
export const put = async(url: any, dados: any, setDados: any, header: any) => {
    const resposta = await api.put(url, dados, header)
    setDados(resposta.data.token)
}

//para deletar o tema ou a postagem
export const deleteId = async(url: any, header: any) => { 
    await api.delete(url,header);
    //não precisa armazenar em uma variavel já que queremos excluir
}