import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { Box } from "@mui/material";

import { ChangeEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";

import UserLogin from "../../models/UserLogin";
import { login } from "../../services/Services";
import "./Login.css";

function Login() {

     // redireciona o usuário para determinada pagina
     // se o login estiver ok
     let navigate = useNavigate()

     // hooks que vão manipular o nosso Local Storage para gravar o Token
     const [token, setToken] = useLocalStorage('token')

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
            navigate('/home')
          }
      },[token])


      async function onSubmit( e: ChangeEvent<HTMLFormElement>) {
          e.preventDefault();

          try{ // tentativa
              await login(`/usuarios/logar`, userLogin, setToken)
              alert('Usuário logado com sucesso! ');
          } catch(error){ // caso de erro, tente esse
              alert('Usuário não existe. Erro ao logar!!');
          }

      }




  return (
     <Grid container direction="row" justifyContent="center" alignItems="center" className="grid-image" sm={12} xs={12}> 
       <Grid alignItems="center"  md={9} sm={9} xs={12} >
          <Box paddingX={20} className="box-form">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" gutterBottom component="h3" className="text-enter"> Entrar </Typography>
                      {/* VALUE={userLogin.usuario} (como se estivesse vinculando o model com o input) e no onchange  */}
                <TextField  value={userLogin.usuario} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="usuario" label="usuário" variant="outlined" name="usuario" margin="normal" fullWidth/>
                <TextField  value={userLogin.senha} onChange={(e:ChangeEvent<HTMLInputElement>)=> updatedModel(e)} id="senha" label="senha" variant="outlined" name="senha" margin="normal" type='password' fullWidth/>
                <Box marginTop={2} textAlign='center'>
                    <Button type="submit" variant="contained" className="button-login color-text"> 
                      Logar
                    </Button>
                </Box>
            </form>

            <Box display='flex' justifyContent='center' marginTop={2}>
              <Box marginRight={1}>
                <Typography variant="subtitle1" gutterBottom align="center" className="color-text">Não tem uma conta?</Typography>
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