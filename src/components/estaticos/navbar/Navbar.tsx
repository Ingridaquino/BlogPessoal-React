import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@material-ui/core";

import './Navbar.css'
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <>
      <AppBar position="static" className="header-container">
        <Toolbar variant="dense" >
          <Box className="cursor">
            <Typography variant="h5" color="inherit" className="logo">
              BlogPessoal
            </Typography>
          </Box>

          <Box  display="flex" justifyContent="space-between" className="nav-bar">
            <Box mx={1}  className="cursor">
              <Typography variant="h6" color="inherit">
                Home
              </Typography>
            </Box>
            <Box mx={1} className="cursor">
              <Typography variant="h6" color="inherit">
                Postagens
              </Typography>
            </Box>
            <Box mx={1} className="cursor">
              <Typography variant="h6" color="inherit">
                Temas
              </Typography>
            </Box>
            <Box mx={1} className="cursor">
              <Typography variant="h6" color="inherit">
                Cadastrar Tema
              </Typography>
            </Box>

            <Link to='/login' className="text-decorator-none">
              <Box mx={1}  className="login cursor">
                <Typography variant="h6" color="inherit">
                  Login
                </Typography>
              </Box>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
