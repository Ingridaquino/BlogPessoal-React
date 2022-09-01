//regras de negocios
//onde iremos fazer as requisições no back end

import axios from "axios";

export const api = axios.create({
    baseURL: 'https://blog2-indy.herokuapp.com/' //base(unica) url, url do meu backend do blog
})


//url seria o /usuario/login
//dados os dados do usuario na interface

export const login = async(url: any, dados: any, setDados: any) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data.token)
}