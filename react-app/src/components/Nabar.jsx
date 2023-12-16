
import * as React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function Nabar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
    OPTION
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}><Link to ="/">Home</Link></MenuItem>
        <MenuItem onClick={handleClose}> <Link to ="/register">Register</Link></MenuItem>
        <MenuItem onClick={handleClose}> <Link to ="/login">Login</Link></MenuItem>
        <MenuItem onClick={handleClose}> <Link to ="/Pix">MyPix</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to ="/FirstComp">FirstComp</Link></MenuItem>
        <MenuItem onClick={handleClose}> <Link to ="/SecondComp">SecondComp</Link></MenuItem>
      </Menu>
    </div>
  );
}

