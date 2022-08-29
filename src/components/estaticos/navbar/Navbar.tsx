import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@material-ui/core";

import './Navbar.css'

export function Navbar() {
  return (
    <>
      <AppBar position="static" className="header-container">
        <Toolbar variant="dense" >
          <Box style={{ cursor: "pointer"}}>
            <Typography variant="h5" color="inherit" className="logo">
              BlogPessoal
            </Typography>
          </Box>

          <Box  display="flex" justifyContent="space-between" className="nav-bar">
            <Box mx={1} style={{ cursor: "pointer" }}>
              <Typography variant="h6" color="inherit">
                Home
              </Typography>
            </Box>
            <Box mx={1} style={{ cursor: "pointer" }}>
              <Typography variant="h6" color="inherit">
                Postagens
              </Typography>
            </Box>
            <Box mx={1} style={{ cursor: "pointer" }}>
              <Typography variant="h6" color="inherit">
                Temas
              </Typography>
            </Box>
            <Box mx={1} style={{ cursor: "pointer" }}>
              <Typography variant="h6" color="inherit">
                Cadastrar Tema
              </Typography>
            </Box>
            <Box mx={1} style={{ cursor: "pointer" }} className="login ">
              <Typography variant="h6" color="inherit">
                Login
              </Typography>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
