import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@material-ui/core";

import './Navbar.css'
import { Link, useNavigate } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";

export function Navbar() {

  let navigate = useNavigate();

  const[token, setToken] = useLocalStorage('token');


  //function que irá deslogar o usuário através da excluisão do token
  function goLogout() {
    setToken('');

    alert("Usuário deslogado")
    navigate('/login')
  }


  return (
    <>
      <AppBar position="static" className="header-container" >
        <Toolbar variant="dense" className="header-container" >
          <Box className="cursor">
            <Typography variant="h5" color="inherit" className="logo" >
            &lt;Ingrid Aquino/&gt;
            </Typography>
          </Box>

          <Box  display="flex" flexWrap="wrap"  className="nav-bar">
            <Link to="/home" className="text-decorator-none">
              <Box mx={1}  className="cursor">
                <Typography variant="h6" color="inherit" className="tituloNav">
                  Home
                </Typography>
              </Box>
            </Link>

            <Link to="/posts" className="text-decorator-none">
              <Box mx={1} className="cursor">
                <Typography variant="h6" color="inherit" className="tituloNav">
                  Postagens
                </Typography>
              </Box>         
            </Link>

            <Link to="/temas" className="text-decorator-none">
              <Box mx={1} className="cursor">
                <Typography variant="h6" color="inherit" className="tituloNav">
                  Temas
                </Typography>
              </Box>
            </Link>

            <Link to="/formularioTema" className="text-decorator-none">
              <Box mx={1} className="cursor">
                <Typography variant="h6" color="inherit" className="tituloNav">
                  Cadastrar Tema
                </Typography>
              </Box>           
            </Link>

              <Box mx={1}  className="login cursor" onClick={goLogout} paddingX={10}>
                <Typography variant="h6" color="inherit" className="tituloNav">
                  Logout
                </Typography>
              </Box>
        
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
