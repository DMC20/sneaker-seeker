import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';




const About = () => {

    return (
        <Box sx={{ flexGrow: 2 }} marginTop={3} marginBottom={3}>
        <Grid container spacing = 'center' spacing={8} >
            <Grid item xs={3}>
                {/* Daniel's Profile */}
                <Card xs={{ maxWidth: 400 }} elevation={3}>
                    <CardMedia
                        component="img"
                        alt="Daniel Carazo"
                        height="350"
                        image="../../static/daniel.jpg"
                    />
                    <CardContent>
                        <Typography>
                            Daniel Carazo
                        </Typography>
                        <Typography variant="body2" gutterBottom variant='h6' color="text.secondary">
                            -Group Leader
                        </Typography>
                        <Typography variant="body2" gutterBottom variant='h6' color="text.secondary">
                            -Back End
                        </Typography>
                        <Typography variant="body2" gutterBottom variant='h6' color="text.secondary">
                            -Front End
                        </Typography>
                        <Typography variant="body2" gutterBottom variant='h6' color="text.secondary">
                            -Sign up/Sign In 
                        </Typography>   
                    </CardContent>
                    <CardMedia>
                        <Stack direction="row" spacing={2} justifyContent='center'>
                            <IconButton aria-label="github" href="https://github.com/DMC20" target="_blank" rel="noreferrer">
                                {<GitHubIcon />}    
                            </IconButton>
                            <IconButton aria-label="linkedn" href="https://www.linkedin.com/in/danielcarazo20/" target="_blank" rel="noreferrer">
                                {<LinkedInIcon />}
                            </IconButton>                    
                            <IconButton aria-label="portfolio" href="https://secure-temple-00041.herokuapp.com/" target="_blank" rel="noreferrer">
                                {<AccountCircleIcon/>}
                            </IconButton>
                            <IconButton aria-label="email" href="mailto: danielcarazo20@gmail.com">
                                {<EmailIcon/>}  
                            </IconButton>
                        </Stack>
                    </CardMedia>
                </Card>
            </Grid>

            {/* Karla's Profile */}
            <Grid item xs={3}>
                <Card xs={{ maxWidth: 500 }} elevation={3}>
                    <CardMedia
                        component="img"
                        alt="Karla Romero"
                        height="350"
                        image="../../static/karla.jpg"
                    />
                    <CardContent>
                        <Typography justifyContent='center'>
                            Karla Romero
                        </Typography>
                        <Typography variant="body2" gutterBottom variant='h6' color="text.secondary">
                            -Front End
                        </Typography>
                        <Typography variant="body2" gutterBottom variant='h6' color="text.secondary">
                            -Back End
                        </Typography>
                        <Typography variant="body2" gutterBottom variant='h6' color="text.secondary">
                            -Shopping Cart
                        </Typography>
                        <Typography variant="body2" gutterBottom variant='h6' color="text.secondary">
                            -Search Capability
                        </Typography>   
                    </CardContent>
                    <CardMedia>
                        <Stack direction="row" spacing={2} justifyContent='center'>
                            <IconButton aria-label="github" href="https://github.com/kmre" target="_blank" rel="noreferrer">
                                {<GitHubIcon />}    
                            </IconButton>
                            <IconButton aria-label="linkedn" href="https://www.linkedin.com/in/romerokarla" target="_blank" rel="noreferrer">
                                {<LinkedInIcon />}
                            </IconButton>                    
                            <IconButton aria-label="portfolio" href="https://kmre.github.io/react-portfolio/" target="_blank" rel="noreferrer">
                                {<AccountCircleIcon/>}
                            </IconButton>
                            <IconButton aria-label="email" href="mailto: Karla.Romero7@gmail.com">
                                {<EmailIcon/>}  
                            </IconButton>
                        </Stack>
                    </CardMedia>
                </Card>
            </Grid>

            {/* Shane's Profile */}
            <Grid item xs={3}>
                <Card xs={{ maxWidth: 500 }} elevation={3}>
                    <CardMedia
                        component="img"
                        alt="Shane Crisostomo"
                        height="350"
                        image="../../static/shane.jpg"
                    />
                    <CardContent>
                        <Typography>
                            Shane Crisostomo
                        </Typography>
                        <Typography variant="body2" gutterBottom variant='h6' color="text.secondary">
                            -Front End
                        </Typography>
                        <Typography variant="body2" gutterBottom variant='h6' color="text.secondary">
                            -React
                        </Typography>
                        <Typography variant="body2" gutterBottom variant='h6' color="text.secondary">
                            -Shoe Search
                        </Typography>
                        <Typography variant="body2" gutterBottom variant='h6' color="text.secondary">
                            -Style
                        </Typography>   
                    </CardContent>
                    <CardMedia>
                        <Stack direction="row" spacing={2} justifyContent='center'>
                            <IconButton aria-label="github" href="https://github.com/shaner3423" target="_blank" rel="noreferrer">
                                {<GitHubIcon />}    
                            </IconButton>
                            <IconButton aria-label="linkedn" href="https://www.linkedin.com/in/shane-crisostomo/" target="_blank" rel="noreferrer">
                                {<LinkedInIcon />}
                            </IconButton>                    
                            <IconButton aria-label="portfolio" href="https://shaner3423.github.io/react-portfolio/" target="_blank" rel="noreferrer">
                                {<AccountCircleIcon/>}
                            </IconButton>
                            <IconButton aria-label="email" href="mailto: scrisostomo17@gmail.com">
                                {<EmailIcon/>}  
                            </IconButton>
                        </Stack>
                    </CardMedia>
                </Card>
            </Grid>

            {/* Spencer's Profile */}
            <Grid item xs={3}>
                <Card xs={{ maxWidth: 500 }} elevation={3}>
                    <CardMedia
                        component="img"
                        alt="Karla Romero"
                        height="350"
                        image="../../static/spencer.jpg"
                    />
                    <CardContent>
                        <Typography>
                            Spencer Berkebile
                        </Typography>
                        <Typography variant="body2" gutterBottom variant='h6' color="text.secondary">
                            -Back End
                        </Typography>
                        <Typography variant="body2" gutterBottom variant='h6' color="text.secondary">
                            -Front End
                        </Typography>
                        <Typography variant="body2" gutterBottom variant='h6' color="text.secondary">
                            -Search Capability
                        </Typography>
                        <Typography variant="body2" gutterBottom variant='h6' color="text.secondary">
                            -API
                        </Typography>   
                    </CardContent>
                    <CardMedia>
                        <Stack direction="row" spacing={2} justifyContent='center'>
                            <IconButton aria-label="github" href="https://github.com/SBerkebile7" target="_blank" rel="noreferrer">
                                {<GitHubIcon />}    
                            </IconButton>
                            <IconButton aria-label="linkedn" href="https://www.linkedin.com/in/spencer-berkebile/" target="_blank" rel="noreferrer">
                                {<LinkedInIcon />}
                            </IconButton>                    
                            <IconButton aria-label="portfolio" href="https://sberkebile7.github.io/C20-React-Portfolio/#/" target="_blank" rel="noreferrer">
                                {<AccountCircleIcon/>}
                            </IconButton>
                            <IconButton aria-label="email" href="mailto: sberkebile@live.com">
                                {<EmailIcon/>}  
                            </IconButton>
                        </Stack>
                    </CardMedia>
                </Card>
            </Grid>

            

       
        
        </Grid>
      </Box>
    
    )
}

export default About;