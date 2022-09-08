import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';

import {Box, Card, CardActions, CardContent, Button, Typography} from '@material-ui/core';

import './DeletarTema.css';
import { buscaId, deleteId } from '../../../services/Services';
import Tema from '../../../models/Tema';


function DeletarTema() {

  let navigate = useNavigate();

  //captura o id na ba
  //serve para capturar parametros enviados por uma url
  const { id } = useParams<{id: string}>();

  const [token, setToken] = useLocalStorage('token');

  //para cadastrar os temas
  const [tema, setTema] = useState<Tema>();
  
  //Verificar se o usuario está logado
  useEffect(() => {
    if(token === "") {
      alert("Você precisa estar logado")
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
      alert('Tema deletado com sucesso')
    } catch (error) {
      alert('Erro ao deletar')
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
              <Typography color="textSecondary" gutterBottom>
                Deseja deletar o Tema:
              </Typography>
              <Typography color="textSecondary">
                {tema?.descricao}
              </Typography>
            </Box>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
              <Box mx={2}>
                <Button onClick={sim} variant="contained" className="marginLeft" size='large' color="primary">
                  Sim
                </Button>
              </Box>
              <Box mx={2}>
                <Button onClick={nao} variant="contained" size='large' color="secondary">
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