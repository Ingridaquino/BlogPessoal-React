import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core'
import { Box } from '@mui/material'
import { Link } from 'react-router-dom'
import Postagem from '../../../models/Postagem';
import TabPostagem from '../tabPostagens/TabPostagem';

import './CardPost.css';

interface CardProps{
  objetoPost: Postagem
}

const novaData = new Intl.DateTimeFormat('pt-BR')

function  CardPost({ objetoPost }: CardProps) {
  return (
    <Box m={2} key={objetoPost.id}>
          <Card variant="outlined" className='cardOutlined'>
            <CardContent className='cardContent'>
              <Typography  gutterBottom className='post'>
                Postagens
              <Typography variant="body2" component="p" className='data'> 
                  {novaData.format(new Date(objetoPost.data))}
              </Typography>
              </Typography>
              <Typography variant="body2" component="p" className='tema'>
                {objetoPost.tema?.descricao}
              </Typography>
              <Typography variant="h5" component="h5" className='titlePost'>
                {objetoPost.titulo}
              </Typography>
              <Typography variant="body2" component="p" className='text'>
               {objetoPost.texto}
              </Typography>
            </CardContent>
            <CardActions className='cardActions'>
              <Box display="flex" justifyContent="center" mb={1.5}>
                <Link to={`/formularioPostagem/${objetoPost.id}`} className="text-decorator-none">
                  <Box mx={1}>
                    <Button
                      className="btnAtualizar"
                      variant="contained"
                      size="small"
                    >
                      atualizar
                    </Button>
                  </Box>
                </Link>
                <Link to={`/deletarPostagem/${objetoPost.id}`} className="text-decorator-none">
                  <Box mx={1}>
                    <Button variant="contained" size="small" className='btnDelete'>
                      deletar
                    </Button>
                  </Box>
                </Link>
              </Box>
            </CardActions>
          </Card>
        </Box>
  );
}

export default CardPost;
