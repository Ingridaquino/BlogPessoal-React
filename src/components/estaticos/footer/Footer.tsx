import { Box, Grid,  Typography } from "@mui/material";
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import './Footer.css'
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";

export function Footer() {

 //substituiu o useLocalStorage
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
    	
    let footerComponent;


    // o footer so irá aparecer se o usuario estiver logado
    if(token !== ""){
        footerComponent = <Grid container direction="row" justifyContent="center" alignItems="center">
        <Grid alignItems="center" item xs={12}>
            <Box className="color box-pai" paddingY={4} >
                <Box  display="flex" alignItems="center" justifyContent="center">
                    <Typography variant="h5" align="center" gutterBottom className="color" >Siga-nos nas redes sociais </Typography>
                </Box>
                <Box display="flex" alignItems="center" justifyContent="center">
                    <a href="https://www.facebook.com/generationbrasil" target="_blank" rel="noopener noreferrer">
                        <FacebookIcon className="icon-social" />
                    </a>
                    <a href="https://www.instagram.com/generationbrasil/" target="_blank" rel="noopener noreferrer">
                        <InstagramIcon className="icon-social"/>
                    </a>
                    <a href="https://www.linkedin.com/school/generationbrasil/" target="_blank" rel="noopener noreferrer">
                        <LinkedInIcon className="icon-social"/>
                    </a>
                </Box>
            </Box>
            <Box paddingY={2} style={{ backgroundColor: "#115586", height: "70px" }}>
                <Box>
                    <Typography variant="subtitle2" align="center" gutterBottom className="color" >© 2020 Copyright:</Typography>
                </Box>
                <Box >
                    <a target="_blank" href="https://brasil.generation.org" rel="noopener noreferrer">
                        <Typography variant="subtitle2" gutterBottom className="color" align="center">brasil.generation.org</Typography>
                    </a>
                </Box>
            </Box>
        </Grid>
    </Grid>
    }




  return(
    <>
        {footerComponent}
            
    </>
  )
}