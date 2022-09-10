import { Button, Grid, TextField, Typography } from '@material-ui/core';
import { Box } from '@mui/material';

import { Link, useNavigate } from 'react-router-dom';
import { ChangeEvent, useEffect, useState } from "react";


import './CadastroUsuario.css';
import User from '../../models/User';
import { cadastroUsuario } from '../../services/Services';

function CadastroUsuario() {

  //depois de cadastrar, o usuario será direcionado a uma pag(home)
  let navigate = useNavigate();

  const [confirmarSenha, setConfirmarSenha] = useState<String>("");


  //hook que irá armazenar as informaçao e enviar ao back-end
  const [user, setUser] = useState<User>({
      id: 0,
      nome: '',
      usuario: '',
      senha: ''
  })

  //back-end irá mandar as informação salvas q ele contém do usuario
  const [userResult, setUserResult] = useState<User>({
      id: 0,
      nome: '',
      usuario: '',
      senha: ''
  })

  // verificar se o usuario existe através do id, caso exista ir para o login
  useEffect(() => {
    if(userResult.id !== 0) {
      navigate('/login')
    }
  }, [userResult])


  //quando o usuario digitar a senha no confirmar senha, ele será armazenado aqui nesse setConfirmarSenha
  function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
    setConfirmarSenha(e.target.value)
  }


  function updatedModel(e:ChangeEvent<HTMLInputElement>){
    setUser ({
      ...user,
      [e.target.name] : e.target.value
    })
  }



  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
      e.preventDefault()
      //verificando se as senhas são iguais
      if(confirmarSenha === user.senha) {
        cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
        alert('Usuário cadastrado com sucesso')
      } else {
        alert('Dados inconsistentes. Favor verificar as informações de cadastro.')
      }
  }


  return(

    <Grid container direction='row' justifyContent='center' alignItems='center' className='grid-image2' xs={12} >
      <Grid alignItems='center' className='grid-form' xs={11} sm={7} >
        <form onSubmit={onSubmit}>
          <Typography variant="h3" gutterBottom component="h3" className="text-cadastrar"> Cadastrar </Typography>
          <TextField  value={user.nome} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="nome" label="nome" variant="outlined"  type='name' name="nome" margin="normal" fullWidth/>
          <TextField  value={user.usuario} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="usuario" label="usuario" variant="outlined" type='usuario'  name="usuario" margin="normal" fullWidth/>
          <TextField  value={user.senha} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="senha" label="senha" variant="outlined"  name="senha" margin="normal" type='password' fullWidth/>
          <TextField  value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e) } id="confirmarSenha" label="confirmarSenha" variant="outlined"  name="confirmarSenha" margin="normal"  type='password' fullWidth/>
          <Box marginTop={2} textAlign='center' className='boxBnt'>
              <Link to='/login' className="text-decorator-none">
                <Button variant="contained" className="button-canc"> 
                    Cancelar
                </Button>
              </Link>
              <Button type="submit" variant="contained" className="button-cadastrar"> 
                Cadastrar
              </Button>
          </Box>
        </form>
      </Grid>
    </Grid>

  );
}

export default CadastroUsuario;