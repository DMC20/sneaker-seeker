import React, { useEffect, useState } from "react";
// import $ from 'jquery';
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
import CardHeader from '@mui/material/CardHeader';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';



class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shoes: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    shoeSearchVans() {
        fetch(`https://the-sneaker-database.p.rapidapi.com/search?limit=20&query=Vans`, {
            "method": "GET",
            "headers": {
            "x-rapidapi-host": "the-sneaker-database.p.rapidapi.com",
            "x-rapidapi-key": "d2ed8dea59msh9a4992883c5f9e0p194de4jsn78aad5a8e251"
            }
        })
        .then(response => response.json())
        .then(response => {
            this.setState({
                shoes: response
            })
            console.log(response)
            console.log(response.results)
            console.log(this.state);
        })
        .catch(err => {
            console.log(err);
        });
    }
    shoeSearchJordans() {
        fetch(`https://the-sneaker-database.p.rapidapi.com/search?limit=20&query=Jordans`, {
            "method": "GET",
            "headers": {
            "x-rapidapi-host": "the-sneaker-database.p.rapidapi.com",
            "x-rapidapi-key": "d2ed8dea59msh9a4992883c5f9e0p194de4jsn78aad5a8e251"
            }
        })
        .then(response => response.json())
        .then(response => {
            this.setState({
                shoes: response
            })
            console.log(response)
            console.log(response.results)
            console.log(this.state);
        })
        .catch(err => {
            console.log(err);
        });
    }
    shoeSearchYeezy() {
        fetch(`https://the-sneaker-database.p.rapidapi.com/search?limit=20&query=Yeezy`, {
            "method": "GET",
            "headers": {
            "x-rapidapi-host": "the-sneaker-database.p.rapidapi.com",
            "x-rapidapi-key": "d2ed8dea59msh9a4992883c5f9e0p194de4jsn78aad5a8e251"
            }
        })
        .then(response => response.json())
        .then(response => {
            this.setState({
                shoes: response
            })
            console.log(response)
            console.log(response.results)
            console.log(this.state);
        })
        .catch(err => {
            console.log(err);
        });
    }
    shoeSearchNike() {
        fetch(`https://the-sneaker-database.p.rapidapi.com/search?limit=20&query=Nike`, {
            "method": "GET",
            "headers": {
            "x-rapidapi-host": "the-sneaker-database.p.rapidapi.com",
            "x-rapidapi-key": "d2ed8dea59msh9a4992883c5f9e0p194de4jsn78aad5a8e251"
            }
        })
        .then(response => response.json())
        .then(response => {
            this.setState({
                shoes: response
            })
            console.log(response)
            console.log(response.results)
            console.log(this.state);
        })
        .catch(err => {
            console.log(err);
        });
    }

    handleChange(changeObject) {
        console.log(changeObject.target.value);
        this.setState(changeObject);
    }

    render() {
        return (

            <Box sx={{ flexGrow: 1 }} marginTop={2} >
                <h1>Popular Shoes</h1>

                {/* Initial box for popular search */}
                <Grid container spacing = 'center' spacing={8} >
                    {/* Nike Air Jordan */}
                    <Grid item xs={4}>
                        <Card xs={{ maxWidth: 400 }} elevation={3}>
                            <CardMedia
                                class="air-jordan"
                                component="img"
                                alt="Air Jordan 1 OG Chicago"
                                height="300"
                                width="440"
                                image={AirJordan}
                            />

                            <CardActions>
                                <Button variant='contained' size="large" type='button' onClick={(e) => this.shoeSearchJordans(e)}>Search All Jordans</Button>
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
                                <Button variant = 'contained' size="large" type='button' onClick={(e) => this.shoeSearchYeezy(e)}> Search All Yeezys</Button>
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
                                <Button variant ='contained' size='large' type='button' onClick={(e) => this.shoeSearchNike(e)}> Search All Nike</Button>
                            </CardActions>
                        </Card>
                    </Grid>

                </Grid>


                <Grid container spacing={2}>
                    <Grid item  xs={4}>
                        <h1 headerAlign="center">Search Result</h1>
                        <button className="btn btn-primary" type='button' onClick={(e) => this.shoeSearchVans(e)}>
                                Vans
                            </button>
                            
                    
                                {this.state.shoes && this.state.shoes.results.map(shoe => {
                                    return <Grid item xs={8} 
                                    sx={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        p: 1,
                                        m: 1,
                                        bgcolor: 'background.paper',
                                        flexDirection: 'row',
                                        maxWidth: 900}}
                                            >
                                        {/* <Box sx={{ maxWidth: 600 }}>
                                            <img src={shoe.image.thumbnail} />
                                            <h3>Brand: {shoe.brand}</h3>
                                            <h4>Name: {shoe.name}</h4>
                                            <h5>Estimated cost: ${shoe.estimatedMarketValue}</h5>
                                            <h5>Color: {shoe.colorway}</h5>
                                            <h5>Release date: {shoe.releaseDate}</h5>
                                            <p>Description: {shoe.story}</p>
                                            <p>Gender: {shoe.gender}</p>
                                        </Box> */}
                                            <Card sx={{ maxWidth: 900 }}>
                                                <CardMedia
                                                    component="img"
                                                    height="300"
                                                    image={shoe.image.thumbnail}
                                                    alt={shoe.name}
                                                />
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="div">
                                                        <h2>{shoe.name}</h2>
                                                    </Typography>
                                                    <Typography>
                                                        <h3>Brand: </h3>{shoe.brand}
                                                    </Typography>
                                                    <Typography>
                                                        <h3> Estimated Cost: </h3>${shoe.estimatedMarketValue}
                                                    </Typography>
                                                    <Typography>
                                                        <h3>Colorway: </h3>{shoe.colorway}
                                                    </Typography>
                                                    <Typography>
                                                        <h3>Release date: </h3>{shoe.releaseDate}
                                                    </Typography>
                                                    <Typography>
                                                        <h3>Description: </h3>{shoe.story}
                                                    </Typography>
                                                    <Typography>
                                                        <h3>Gender: </h3>{shoe.gender}
                                                    </Typography>            
                                                </CardContent>
                                            </Card>
                                </Grid>
                                    // <tr>
                                    //     <td>{shoe.name}</td>
                                    //     <td>{shoe.estimatedMarketValue}</td>
                                    //     <td>{shoe.story}</td>
                                    // </tr>
                                    
                                })}
                    </Grid>
                </Grid>
            </Box>

        );


    }
};


export default Home;