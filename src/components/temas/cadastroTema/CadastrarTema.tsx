import React, {useState, useEffect, ChangeEvent} from 'react'
import { Container, Typography, TextField, Button } from "@material-ui/core"; 

import Tema from '../../../models/Tema';
import { buscaId, post, put } from '../../../services/Services';

import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';

import { toast } from 'react-toastify';

function CadastroTema() {

  let navigate = useNavigate();

  //captura o id na ba
  //serve para capturar parametros enviados por uma url
  const { id } = useParams<{id: string}>();

//substituiu o useLocalStorage
const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
    );
  

  //para cadastrar os temas
  const [tema, setTema] = useState<Tema>({
    id: 0,
    descricao: ''
  });
  
  //Verificar se o usuario está logado
  useEffect(() => {
    if(token === "") {
        toast.error('Você precisa estar logado !', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
      navigate("/login")
    }
  }, [token])

  // monitorando o id(useparams), se há um id ou não. 
  useEffect(() =>{
    if(id !== undefined){
        findById(id)
    }
}, [id])

//faz a comunicação com backend, verificando se há o tema cadastrado
  async function findById(id: string) {
      buscaId(`/temas/${id}`, setTema, {
          headers: {
            'Authorization': token
          }
        })
      }

      //responsavél por capturar os valores no formulario, e atribuir ao setTema. 
      //E por sua vez, faz a alteração no tema(criando um novo tema)
    function updatedTema(e: ChangeEvent<HTMLInputElement>) {

        setTema({
            ...tema,
            [e.target.name]: e.target.value,
        })

    }
    
    //responsavél por enviar os dados para api processar
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault() //pro botao não atualizar a tela

        // cadastrar e atualizar um tema, 
        if (id !== undefined) {      
            //Try: tenta executar a atualição
            try {
               await put(`/temas`, tema, setTema, {
                    headers: {
                        'Authorization': token
                    }
                })

                toast.success('🦄 Tema atualizado com sucesso!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,// pausar após passar o mouse
                    draggable: true,//mover a notificacao de local 
                    progress: undefined,
                    theme: "dark",
                    });
        // CATCH: Caso tenha algum erro, pegue esse erro e mande uma msg para o usuário
            } catch(error) {
                // console.log(`Error: ${error}`)

                toast.error('Erro, por favor verifique a quantidade minima de caracteres !', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    });
            }
            
        // Se o ID for indefinido, tente Cadastrar
        } else {
             // TRY: Tenta executar o cadastro
            try{
                await post(`/temas`, tema, setTema, {
                    headers: {
                        'Authorization': token
                    }
                })
                toast.success('🦄 Tema cadastrado com sucesso!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,// pausar após passar o mouse
                    draggable: true,//mover a notificacao de local 
                    progress: undefined,
                    theme: "dark",
                    });
            }// CATCH: Caso tenha algum erro, pegue esse erro e mande uma msg para o usuário
              catch (error) {
                console.log(`Error: ${error}`)
                toast.error('Erro, por favor verifique a quantidade minima de caracteres !', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    });
            }
        }
        back()
    }

    function back() {
        navigate('/temas') //após o cadastro ou atualizar volta para o inicio do temas
    }



    return (
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center" >Formulário de cadastro tema</Typography>
                <TextField value={tema.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)} id="descricao" label="descricao" variant="outlined" name="descricao" margin="normal" fullWidth />
                <Button type="submit" variant="contained" color="primary">
                    Finalizar
                </Button>
            </form>
        </Container>
    )
}

export default CadastroTema;