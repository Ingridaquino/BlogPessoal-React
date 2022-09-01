import { Button, Grid, TextField, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import './CadastroUsuario.css';

function CadastroUsuario() {
  return(

    <Grid container direction='row' justifyContent='center' alignItems='center' className='grid-image2' >
      <Grid alignItems='center' className='grid-form' xs={6} >
        <form>
          <Typography variant="h3" gutterBottom component="h3" className="text-cadastrar"> Cadastrar </Typography>
          <TextField  id="nome" label="nome" variant="outlined" name="nome" margin="normal" fullWidth/>
          <TextField  id="usuario" label="usuario" variant="outlined" name="usuario" margin="normal" fullWidth/>
          <TextField  id="senha" label="senha" variant="outlined" name="senha" margin="normal" type='password' fullWidth/>
          <TextField  id="confirmarSenha" label="confirmarSenha" variant="outlined" name="confirmarSenha" margin="normal"  type='password' fullWidth/>
          <Box marginTop={2} textAlign='center'>
          <Link to='/' className="text-decorator-name">
            <Button variant="contained" className="button-canc color-text"> 
                Cancelar
            </Button>
          </Link>
            <Button type="submit" variant="contained" className="button-cadastrar color-text"> 
              Cadastrar
            </Button>
          </Box>
        <span className="line-before"></span>
        </form>
      </Grid>
    </Grid>

  );
}

export default CadastroUsuario;