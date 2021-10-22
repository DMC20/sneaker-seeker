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

import React, { useEffect, useState } from "react";
import $ from 'jquery';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shoes: ''
        };

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
                    width="440"
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
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <h1 className="display-4 text-center">Shoe search</h1>
                        <form className="d-flex flex-column">
                        <button className="btn btn-primary" type='button' onClick={(e) => this.shoeSearchVans(e)}>
                                Vans
                            </button>
                            <button className="btn btn-primary" type='button' onClick={(e) => this.shoeSearchJordans(e)}>
                                Jordans
                            </button>
                            <button className="btn btn-primary" type='button' onClick={(e) => this.shoeSearchYeezy(e)}>
                                Yeezy
                            </button>
                            <button className="btn btn-primary" type='button' onClick={(e) => this.shoeSearchNike(e)}>
                                Nike
                            </button>
                                {this.state.shoes && this.state.shoes.results.map(shoe => {
                                    return <div>
                                    <div>
                                        <img src={shoe.image.thumbnail} />
                                        <h3 class="card-title">Brand: {shoe.brand}</h3>
                                        <h4 class="card-title">Name: {shoe.name}</h4>
                                        <h5 class="card-title">Estimated cost: ${shoe.estimatedMarketValue}</h5>
                                        <h5 class="card-title">Color: {shoe.colorway}</h5>
                                        <h5 class="card-title">Release date: {shoe.releaseDate}</h5>
                                        <p class="card-title">Description: {shoe.story}</p>
                                        <p class="card-title">Gender: {shoe.gender}</p>
                                    </div>
                                </div>
                                    // <tr>
                                    //     <td>{shoe.name}</td>
                                    //     <td>{shoe.estimatedMarketValue}</td>
                                    //     <td>{shoe.story}</td>
                                    // </tr>
                                    
                                })}
                        </form>
                    </div>
                </div>
            </div>
        );
    }
};


export default Home;