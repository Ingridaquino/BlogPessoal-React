import { Typography } from "@material-ui/core";
import { Box, Button, Grid } from "@mui/material";


// Importacao diferente do video
import React, { useEffect } from "react";

import "./Home.css";
import TabPostagem from "../../components/postagens/tabPostagens/TabPostagem";
import ModalPostagem from "../../components/postagens/modalPostagem/ModalPostagem";
import { Link, useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { TokenState } from "../../store/tokens/tokensReducer";

import { toast } from 'react-toastify';
function Home() {

  let navigate = useNavigate();

  //substituiu o useLocalStorage
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  useEffect(() => {
      if (token === "") {
        toast.error('Você precisa estar logado !', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
          navigate("/login")
      }
  }, [token])


  return (
    <>
      <Grid
        container
        flexWrap="wrap"
        direction="row"
        justifyContent="center"
        alignItems="center"
        className="box-grid"
      >
      <Grid alignItems="center" item xs={6}>
        <Box className="boxHome" >
          <Typography
            variant="h4"
            gutterBottom
            component="h4"
            align="center"
            className="typography"
          >
              Seja bem vindo(a)!
        </Typography>
        <Typography
          variant="h6"
          gutterBottom
          component="h6"
          align="center"
          className="typography"
        >
          expresse aqui os seus pensamentos e opiniões!
        </Typography>
      </Box>

      <Box display="flex" justifyContent="center">
        <Box marginRight={2} className="modalPost">
          <ModalPostagem />
        </Box>

        <Link to="/posts" className="text-decorator-none">
          <Button variant="outlined" className="button-box">
            Ver Postagens
          </Button>
        </Link>
      </Box>
      </Grid>
      
      
      <Grid xs={12} style={{ backgroundColor: "white" }}>
          <TabPostagem />
        </Grid>
      </Grid>
      

    </>
  );
}

export default Home;
