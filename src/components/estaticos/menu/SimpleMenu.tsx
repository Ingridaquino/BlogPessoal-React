import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button         
        style={{color:"#115586"}}
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MenuIcon />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem    style={{color:"#002642"}} onClick={handleClose}>Home</MenuItem>
        <MenuItem    style={{color:"#002642"}}  onClick={handleClose}>Postagens</MenuItem>
        <MenuItem    style={{color:"#002642"}}  onClick={handleClose}>Temas</MenuItem>
        <MenuItem    style={{color:"#002642"}}  onClick={handleClose}>Cadastrar Tema</MenuItem>
      </Menu>
    </div>
  );
}
