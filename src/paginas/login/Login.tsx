import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { Box } from "@mui/material";

import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";

import UserLogin from "../../models/UserLogin";
import "./Login.css";

function Login() {

  // irá armazenar os usuarios logado
    const [userLogin, setUserLogin] = useState<UserLogin>({
        id: 0,
        usuario: '',
        senha: '',
        token: ''
    })

    //  function que ficará de olho se houve alguma mudança, e irar capturar o novo valor inserido. Sendo assim atualizando o login
      function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUserLogin({
            ...userLogin,
            [e.target.name] : e.target.value
        })
      }




  return (
     <Grid container direction="row" justifyContent="center" alignItems="center"> 
        <Grid xs={6} className='grid-image'></Grid>

        <Grid alignItems="center" xs={6}>
          <Box paddingX={20}>
            <form>
                <Typography variant="h3" gutterBottom component="h3" className="text-enter"> Entrar </Typography>
                      {/* VALUE={userLogin.usuario} (como se estivesse vinculando o model com o input) e no onchange  */}
                <TextField  value={userLogin.usuario} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="usuario" label="usuário" variant="outlined" name="usuario" margin="normal" fullWidth/>
                <TextField  value={userLogin.senha} onChange={(e:ChangeEvent<HTMLInputElement>)=> updatedModel(e)} id="senha" label="senha" variant="outlined" name="senha" margin="normal" type='password'                                                                 fullWidth/>
                <Box marginTop={2} textAlign='center'>
                  <Link to='/home' className="text-decorator-name">
                    <Button type="submit" variant="contained" className="button-login color-text"> 
                      Logar
                    </Button>
                  </Link>
                </Box>
                    <span className="line-before"></span>
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