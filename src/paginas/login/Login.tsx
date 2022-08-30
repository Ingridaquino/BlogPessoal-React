import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { Box } from "@mui/material";

import { Link } from "react-router-dom";

import "./Login.css";

function Login() {
  return (
     <Grid container direction="row" justifyContent="center" alignItems="center"> 
        <Grid alignItems="center" xs={6}>
          <Box paddingX={20}>
            <form>
                <Typography variant="h3" gutterBottom component="h3" > Entrar </Typography>
                <TextField  id="usuario" label="usuário" variant="outlined" name="usuario" margin="normal" fullWidth/>
                <TextField  id="senha" label="senha" variant="outlined" name="senha" margin="normal" fullWidth/>
                <Box marginTop={2} textAlign='center'>
                  <Link to='/home' className="text-decorator-name">
                    <Button type="submit" variant="contained"> 
                      Logar
                    </Button>
                  </Link>
                </Box>
            </form>

            <Box display='flex' justifyContent='center' marginTop={2}>
              <Box marginRight={1}>
                <Typography variant="subtitle1" gutterBottom align="center" >Não tem uma conta?</Typography>
              </Box>

              <Typography variant="subtitle1" gutterBottom align="center" style={{fontWeight: "bold"}}>Cadastre-se</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid xs={6} className='grid-image'>

        </Grid>
     </Grid>
  )
}

export default Login;