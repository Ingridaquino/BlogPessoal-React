import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { Box } from "@mui/material";

import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";


import UserLogin from "../../models/UserLogin";
import { login } from "../../services/Services";
import { addToken } from "../../store/tokens/actions";
import "./Login.css";

import { toast } from 'react-toastify';

function Login() {

     // redireciona o usuário para determinada pagina
     // se o login estiver ok
     let navigate = useNavigate()

     const [token, setToken] = useState('')
     //irá substituir o useLocalStorage

    const dispath = useDispatch();

  // irá armazenar os usuarios logado
// useState define como uma determinada variavel será inicializada quando o Comp. for renderizado
    const [userLogin, setUserLogin] = useState<UserLogin>({
        id: 0,
        usuario: '',
        senha: '',
        token: ''
    })

    //  function que ficará de olho se houve alguma mudança, e irar capturar o novo valor inserido. Sendo assim atualizando o login
    // função que junto com a setUserLogin irá atualizar o valor inicial da userLogin 
    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUserLogin({
            ...userLogin,  //spread operator ... -> "espalha" os atributos
            [e.target.name] : e.target.value
        })
      }


      useEffect(() => {
          if(token !== '') {
            dispath(addToken(token))
            navigate('/home')
          }
      },[token])


      async function onSubmit( e: ChangeEvent<HTMLFormElement>) {
          e.preventDefault();

          try{ // tentativa
              await login(`/usuarios/logar`, userLogin, setToken)
              toast.success('🦄 Usuário logado com sucesso!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,// pausar após passar o mouse
                draggable: true,//mover a notificacao de local 
                progress: undefined,
                theme: "dark",
                });
          } catch(error){ // caso de erro, tente esse
            toast.error('🦄 Usuário não existe. Erro ao logar!!', {
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




  return (
     <Grid container direction="row" justifyContent="center" alignItems="center" className="grid-image" > 
       <Grid alignItems="center"  md={6} sm={9} xs={12} >
          <Box className="box-form">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" gutterBottom component="h3" className="text-enter enter"> Entrar </Typography>
                      {/* VALUE={userLogin.usuario} (como se estivesse vinculando o model com o input) e no onchange  */}
                <TextField  value={userLogin.usuario} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="usuario" label="usuário" variant="outlined" name="usuario" margin="normal" fullWidth/>
                <TextField  value={userLogin.senha} onChange={(e:ChangeEvent<HTMLInputElement>)=> updatedModel(e)} id="senha" label="senha" variant="outlined" name="senha" margin="normal" type='password' fullWidth/>
                <Box marginTop={2} textAlign='center'>
                    <Button type="submit" variant="contained" className="button-login color-text"> 
                      Logar
                    </Button>
                </Box>
            </form>

            <Box display='flex' flexWrap='wrap' justifyContent='center' marginTop={2}>
              <Box marginRight={1}>
                <Typography variant="subtitle1" gutterBottom align="center" className="color-text conta">Não tem uma conta?</Typography>
              </Box>

              <Link to='/cadastrousuario' className="text-decorator-none">
                <Typography variant="subtitle1" gutterBottom align="center"  className="color-text text-enter" >Cadastre-se</Typography>
              </Link>
            </Box>
          </Box>
        </Grid>
      
     </Grid>
  )
}

export default Login;