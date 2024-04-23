
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Sidebar from './Sidebar';
import LoginDialog from '../login/LoginDialog';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from 'react-router-dom';
const Header = styled(AppBar)({
  background: '#232f3e',
});

const Logo = styled(Link)({
  fontFamily: 'Arial, sans-serif',
  fontWeight: 'bold',
  fontSize: '1.5rem',
  color: '#fff',
  fontStyle: 'italic',
  textDecoration: 'underline',
});

const SearchWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#fff',
  borderRadius: '4px',
  padding: '5px 10px',
  marginLeft: '20px',
  flexGrow: 1,
});

const SearchInput = styled('input')({
  border: 'none',
  outline: 'none',
  background: 'none',
  width: '100%',
  marginLeft: '10px',
  fontSize: '1rem',
});

const IconWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginLeft: '20px',
});

const LoginButton = styled(Button)({
  paddingRight: '20px',
  background: '#f0c14b',
  color: '#111',
  fontWeight: 'bold',
  '&:hover': {
    backgroundColor: '#ddb347',
  },
});

const HeaderMenu = () => {
  const [open, setOpen] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);
  const [openLoginDialog, setOpenLoginDialog] = useState(false);

  const handleOpenLoginDialog = () => {
    setOpenLoginDialog(true);
  };

  const handleOpenSidebar = () => {
    setOpenSidebar(true);
  };

  return (
    <>
      <Header position="static">
        <Toolbar>
          <IconButton onClick={handleOpenSidebar} color="inherit">
            <MenuIcon />
          </IconButton>
          <Logo variant="h1" component="div" to=''>
            ShopiFy
          </Logo>
          <SearchWrapper>
            <IconButton>
              <SearchIcon />
            </IconButton>
            <SearchInput type="text" placeholder="Search..." />
          </SearchWrapper>
          <IconWrapper>
            <IconButton color="inherit">
              <ShoppingCartIcon />
            </IconButton>
          </IconWrapper>
          <IconWrapper>
            <IconButton color="inherit" style={{ marginRight: '20px' }}>
              <AccountCircleIcon />
            </IconButton>
          </IconWrapper>
          <LoginButton onClick={handleOpenLoginDialog}>
            Login
          </LoginButton>
        </Toolbar>
      </Header>
      <Sidebar open={openSidebar} setOpen={setOpenSidebar} />
      <LoginDialog open={openLoginDialog} setOpen={setOpenLoginDialog} />
    </>
  );
};

export default HeaderMenu;
