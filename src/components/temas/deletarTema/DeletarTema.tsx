import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';

import {Box, Card, CardActions, CardContent, Button, Typography} from '@material-ui/core';

import './DeletarTema.css';
import { buscaId, deleteId } from '../../../services/Services';
import Tema from '../../../models/Tema';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';

import { toast } from 'react-toastify';

function DeletarTema() {

  let navigate = useNavigate();

  //captura o id na ba
  //serve para capturar parametros enviados por uma url
  const { id } = useParams<{id: string}>();

    //substituiu o useLocalStorage
    const token = useSelector<TokenState, TokenState["tokens"]>(
      (state) => state.tokens
    );


  //para cadastrar os temas
  const [tema, setTema] = useState<Tema>();
  
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
     await buscaId(`/temas/${id}`, setTema, {
          headers: {
            'Authorization': token
          }
        })
      }

  //funcao sim, serve para deletar o tema
  async function sim() {
    navigate('/temas')

    try {
     await deleteId(`/temas/${id}`, {
        headers: {
          'Authorization': token
        }
      })
      toast.success('🦄 Tema deletado com sucesso!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,// pausar após passar o mouse
        draggable: true,//mover a notificacao de local 
        progress: undefined,
        theme: "dark",
        });

    } catch (error) {
      toast.error('Erro ao deletar!', {
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
  

    function nao() {
      navigate('/temas')
    }

          
  return (
    <>
      <Box m={2}>
        <Card variant="outlined">
          <CardContent>
            <Box justifyContent="center">
              <Typography gutterBottom>
                Deseja deletar o Tema:
              </Typography>
              <Typography>
                {tema?.descricao}
              </Typography>
            </Box>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
              <Box mx={2}>
                <Button onClick={sim} variant="contained" className="marginLeft btnSim" size='large' >
                  Sim
                </Button>
              </Box>
              <Box mx={2}>
                <Button onClick={nao} variant="contained" size='large' className='btnNao'>
                  Não
                </Button>
              </Box>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}
export default DeletarTema;