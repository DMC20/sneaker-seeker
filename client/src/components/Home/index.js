import React from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { positions } from '@mui/system';
import AirJordan from '../../assets/air-jordan.jpg';
import Yeezy from '../../assets/yeezy.jpg';
import NikeDunk from '../../assets/nike-sb-dunk.jpeg';


const Home = () => {

    return(
        <Box sx={{ flexGrow: 1 }} marginTop={ 10 }>
        <Grid container spacing = 'center' spacing={8} >
            <Grid item xs={4}>
                <Card xs={{ maxWidth: 400 }} elevation={3}>
                <CardMedia
                    class="air-jordan"
                    component="img"
                    alt="Air Jordan 1 OG Chicago"
                    height="300"
                    image={AirJordan}
                />

                <CardActions>
                    <Button variant='contained' size="large" target='_blank' a href='https://dmc20.github.io/run-buddy/'>Search All Air Jordan </Button>
                </CardActions>
                </Card>
            </Grid>


            <Grid item xs={4}>
                <Card xs={{ maxWidth: 400 }} elevation={3}>
                    <CardMedia
                        component="img"
                        alt="Adidas Yeezy"
                        height="300"
                        image={Yeezy}
                    />
                    
                    <CardActions>
                        <Button variant = 'contained' size="large" target='_blank' a href='https://dmc20.github.io/Nightcap-Events/'>Search All Yeezy</Button>
                    </CardActions>
                </Card>
            </Grid>

            <Grid item xs={4}>
                <Card xs={{ maxWidth: 150 }} elevation={3}>
                    <CardMedia
                        component="img"
                        alt="note pad"
                        height="300"
                        image={NikeDunk}
                    />
                   
                    <CardActions>
                        <Button variant ='contained' a href='https://damp-ridge-43976.herokuapp.com/' target='_blank' size="large">Search All Nike Dunk</Button>
                    </CardActions>
                </Card>
            </Grid>

        </Grid>
      </Box>
    )
};


export default Home;