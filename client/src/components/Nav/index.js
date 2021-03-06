import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Auth from '../../utils/auth';

import logo from '../../assets/logo.jpg';
import Grid from '@mui/material/Grid';


const Nav = () => {
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
      }));
      
      const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }));
      
      const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
          padding: theme.spacing(1, 1, 1, 0),
          // vertical padding + font size from searchIcon
          paddingLeft: `calc(1em + ${theme.spacing(4)})`,
          transition: theme.transitions.create('width'),
          width: '100%',
          [theme.breakpoints.up('md')]: {
            width: '20ch',
          },
        },
      }));

    return(
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='static' sx={{ bgcolor: 'text.primary' }}>
                <Toolbar justifyContent='right'>
                  <img src={logo} />
                    <Grid container direction='row-reverse' >

              
                    <Search>
                          <SearchIconWrapper>
                            <SearchIcon />
                          </SearchIconWrapper>
                          <StyledInputBase
                          placeholder="Search Shoes"
                          inputProps={{ 'aria-label': 'search' }}
                          />
                      </Search>
                    


                      
                      <Button color='inherit' startIcon={<ShoppingCartIcon />} />    



                      <Button color='inherit' component={Link} to='/SignUp'>Sign Up</Button>
                      {Auth.loggedIn() ? (
                      <Button color='inherit' href='/' onClick={() => Auth.logout()}>Logout</Button>
                      ):  
                      (
                      <Button color='inherit' component={Link} to='/Signin'>Sign In</Button>
                      )}
                         
                      <Button color='inherit' component={Link} to='/'>Home</Button>
                      <Button color='inherit' component={Link} to='/About'>About</Button>
                      
                      
                    </Grid>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Nav;