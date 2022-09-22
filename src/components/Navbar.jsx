import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import MailIcon from '@mui/icons-material/Mail';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import styled from '@emotion/styled';
import {
  AppBar,
  Avatar,
  Badge,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
} from '@mui/material';
import { Typography } from '@mui/material';
import React, { useState } from 'react';
import { theme } from '../Theme';
const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});
const Searchbar = styled('div')(({ theme }) => ({
  backgroundColor: 'white',
  padding: '0 10px',
  borderRadius: '10px',
  width: '40%',
}));
const IconsContainer = styled('div')(({ theme }) => ({
  //   backgroundColor: 'white',
  display: 'none',
  alignItems: 'center',
  gap: '10px',
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
  },
}));
const User = styled('div')(({ theme }) => ({
  //   backgroundColor: 'white',
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}));
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography variant='h6 ' sx={{ display: { xs: 'none', sm: 'block' } }}>
          Aslaph shopping centre
        </Typography>
        <AddShoppingCartIcon sx={{ display: { xs: 'block', sm: 'none' } }} />
        <Searchbar>
          <InputBase placeholder='search....' />
        </Searchbar>
        <IconsContainer>
          <Badge badgeContent={4} color='error'>
            <MailIcon />
          </Badge>
          <Badge badgeContent={2} color='error'>
            <CircleNotificationsIcon />
          </Badge>
          <Avatar
            onClick={(e) => setOpen(true)}
            sx={{ width: '30px', height: '30px' }}
            alt='Remy Sharp'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCArnMCabLLtl7bY_9EtWfouPRHorO4MoWrw&usqp=CAU'
          />
        </IconsContainer>
        <User onClick={(e) => setOpen(true)}>
          <Avatar
            sx={{ width: '30px', height: '30px' }}
            alt='Remy Sharp'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCArnMCabLLtl7bY_9EtWfouPRHorO4MoWrw&usqp=CAU'
          />
          <Typography variant='h6'> Aslaph</Typography>
        </User>
        <Menu
          id='demo-positioned-menu'
          aria-labelledby='demo-positioned-button'
          open={open}
          onClose={(e) => setOpen(false)}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
