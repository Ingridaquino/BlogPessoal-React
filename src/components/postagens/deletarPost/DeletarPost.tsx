import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';


import {Typography, Button, Box, Card, CardActions, CardContent } from "@material-ui/core"

import './DeletarPost.css';
import Postagem from '../../../models/Postagem';
import { buscaId, deleteId } from '../../../services/Services';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';

import { toast } from 'react-toastify';

import './DeletarPost.css';

function DeletarPost() {

  let navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
 
    //substituiu o useLocalStorage
    const token = useSelector<TokenState, TokenState["tokens"]>(
      (state) => state.tokens
    );


  const [postagem, setPostagem] = useState<Postagem>()

  useEffect(() => {
    if (token === "") {
      toast.error('Você precisa estar logado !', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,// pausar após passar o mouse
        draggable: true,//mover a notificacao de local 
        progress: undefined,
        theme: "dark",
        });
      navigate("/login")

    }
  }, [token])

  useEffect(() => {
    if (id !== undefined) {
      findById(id)
    }
  }, [id])

  async function findById(id: string) {
    await buscaId(`/postagens/${id}`, setPostagem, {
      headers: {
        'Authorization': token
      }
    })
  }

  function sim() {
    navigate('/posts') // rota do front
    deleteId(`/postagens/${id}`, { // rota do backend
      headers: {
        'Authorization': token
      }
    });

    toast.success('🦄 Postagem deletada com sucesso!', {
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

  function nao() {
    navigate('/posts')
  }
   
  return (
    <>
      <Box m={2}>
        <Card variant="outlined" >
          <CardContent>
            <Box justifyContent="center">
              <Typography gutterBottom>
                Deseja deletar a Postagem:
              </Typography>
              <Typography>
                {postagem?.titulo}
              </Typography>
            </Box>

          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
              <Box mx={2}>
              <Button onClick={sim} variant="contained" className="marginLeft btnSim" size='large'>
                Sim
              </Button>
              </Box>
              <Box>
              <Button onClick={nao}  variant="contained" size='large' className="btnNao">
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
export default DeletarPost;