import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';

import './ListaTema.css';
import Tema from '../../../models/Tema';

import { busca } from '../../../services/Services';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';

function ListaTema() {

  const [temas, setTemas] = useState<Tema[]>([]);

  //substituiu o useLocalStorage
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );


  let navigate = useNavigate();

//
  useEffect(() => {
    if(token === ''){
      alert('Você precisa estar logado')
      navigate('/login')
    }
  }, [token]);


  async function getTema() {
    await busca("/temas", setTemas, {
      headers: {
        'Authorization': token
      }
    } )
  }

  
  
  useEffect(() => {
    getTema();
  }, [temas.length])


  return (
    <>
    {
      temas.map( tema => (
      <Box m={2} key={tema.id}>
        <Card variant="outlined">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Tema
            </Typography>
            <Typography variant="h5" component="h5">
              {tema.descricao}
            </Typography>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="center" mb={1.5} >

              <Link to={`/formularioTema/${tema.id}`} className="text-decorator-none">
                <Box mx={1}>
                  <Button variant="contained" className="marginLeft" size='small' color="primary" >
                    atualizar
                  </Button>
                </Box>
              </Link>
              <Link to={`/deletarTema/${tema.id}`} className="text-decorator-none">
                <Box mx={1}>
                  <Button variant="contained" size='small' color="secondary">
                    deletar
                  </Button>
                </Box>
              </Link>
            </Box>
          </CardActions>
        </Card>
      </Box>
      ))
    }
    </>
  );
}


export default ListaTema;