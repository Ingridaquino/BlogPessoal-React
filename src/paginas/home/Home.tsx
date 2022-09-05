import { Typography } from "@material-ui/core";
import { Box, Button, Grid } from "@mui/material";
import People from "../../assets/people1.svg";

// Importacao diferente do video
import React from "react";

import "./Home.css";
import TabPostagem from "../../components/postagens/tabPostagens/TabPostagem";

function Home() {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className="box-grid"
      >
        <Grid alignItems="center" item xs={6}>
          <Box paddingX={20}>
            <Typography
              variant="h3"
              gutterBottom
              component="h3"
              align="center"
              className="typography"
            >
              Seja bem vindo(a)!
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              component="h5"
              align="center"
              className="typography"
            >
              expresse aqui os seus pensamentos e opiniões!
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <Box marginRight={1}></Box>
            <Button variant="outlined" className="button-box">
              Ver Postagens
            </Button>
          </Box>
 
        </Grid>
        
        <Grid item xs={6}>
          <img src={People} alt="" width="500px" height="500px" />
        </Grid>
        

      </Grid>
        <Grid xs={12} style={{ backgroundColor: "white" }}>
          <TabPostagem />
        </Grid>

    </>
  );
}

export default Home;
