import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Nav = () => {

    return(
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='static'>
                <Toolbar>
                    <Typography variant='h4' sx={{ flexGrow: 4 }}>
                        Hi whatcha looking at ???
                    </Typography>
                    <Button color='inherit' component={Link} to='/'>Home</Button>
                    <Button color='inherit' component={Link} to='/'>About</Button>
                    <Button color='inherit' component={Link} to='/'>Shop All</Button>
                    <Button color='inherit' component={Link} to='/'>Shop All</Button>
                    <Button color='inherit' component={Link} to='/SignIn'>Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Nav;