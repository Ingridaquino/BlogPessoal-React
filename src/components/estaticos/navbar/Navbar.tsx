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
        <Toolbar variant="dense"  >
          <Box className="cursor" paddingX={2} paddingY={4}>
            <Typography variant="h5" color="inherit" className="logo" >
            &lt; Ingrid Aquino /&gt;
            </Typography>
          </Box>

          <Box  display="flex" justifyContent="space-between" className="nav-bar">
            <Link to="/home" className="text-decorator-none">
              <Box mx={1}  className="cursor">
                <Typography variant="h6" color="inherit">
                  Home
                </Typography>
              </Box>
            </Link>

            <Link to="/posts" className="text-decorator-none">
              <Box mx={1} className="cursor">
                <Typography variant="h6" color="inherit">
                  Postagens
                </Typography>
              </Box>         
            </Link>

            <Link to="/temas" className="text-decorator-none">
              <Box mx={1} className="cursor">
                <Typography variant="h6" color="inherit">
                  Temas
                </Typography>
              </Box>
            </Link>

            <Link to="/formularioTema" className="text-decorator-none">
              <Box mx={1} className="cursor">
                <Typography variant="h6" color="inherit">
                  Cadastrar Tema
                </Typography>
              </Box>           
            </Link>

              <Box mx={1}  className="login cursor" onClick={goLogout} paddingX={3}>
                <Typography variant="h6" color="inherit">
                  Logout
                </Typography>
              </Box>
        
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
