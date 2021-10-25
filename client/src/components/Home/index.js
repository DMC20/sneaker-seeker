import React, { useEffect, useState } from "react";
import reducers from "../../utils/reducers"
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
import Vans from '../../assets/vans.jpg';

const kkey = "c9dbe94c4bmsh0b9ffd19221424ep103c31jsne8f63707ae88"

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
                // "x-rapidapi-key": "d2ed8dea59msh9a4992883c5f9e0p194de4jsn78aad5a8e251"
                "x-rapidapi-key": kkey
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
                console.log(this.state.shoes);
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
                // "x-rapidapi-key": "d2ed8dea59msh9a4992883c5f9e0p194de4jsn78aad5a8e251"
                "x-rapidapi-key": kkey
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
                console.log(this.state.shoes);
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
                // "x-rapidapi-key": "d2ed8dea59msh9a4992883c5f9e0p194de4jsn78aad5a8e251"
                "x-rapidapi-key": kkey
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
                console.log(this.state.shoes);
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
                // "x-rapidapi-key": "d2ed8dea59msh9a4992883c5f9e0p194de4jsn78aad5a8e251"
                "x-rapidapi-key": kkey
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
                console.log(this.state.shoes);
            })
            .catch(err => {
                console.log(err);
            });
    }

    handleChange(changeObject) {
        console.log(changeObject.target.value);
        this.setState(changeObject);
    }
    cart(shoe) {
        console.log(shoe)
        console.log(shoe.id)
    }

    render() {
        const { shoes } = this.state;
        console.log(shoes)
        return (
            <Box sx={{ flexGrow: 1 }} marginTop={2} >
                <h1>Popular Shoes</h1>

                {/* Initial box for popular search */}
                <Grid container spacing='center' spacing={5} >
                    {/* Nike Air Jordan */}
                    <Grid item xs={4}>
                        <Card xs={{ maxWidth: 400 }} elevation={3}>
                            <CardMedia
                                class="air-jordan"
                                component="img"
                                alt="Air Jordan 1 OG Chicago"
                                height="100%"
                                width="100%"
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
                                height="100%"
                                width="100%"
                                image={Yeezy}
                            />

                            <CardActions>
                                <Button variant='contained' size="large" type='button' onClick={(e) => this.shoeSearchYeezy(e)}> Search All Yeezys</Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={4}>
                        <Card xs={{ maxWidth: 150 }} elevation={3}>
                            <CardMedia
                                component="img"
                                alt="note pad"
                                height="100%"
                                width="100%"
                                image={NikeDunk}
                            />

                            <CardActions>
                                <Button variant='contained' size='large' type='button' onClick={(e) => this.shoeSearchNike(e)}> Search All Nike</Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={4}>
                        <Card xs={{ maxWidth: 150 }} elevation={3}>
                            <CardMedia
                                component="img"
                                alt="vans"
                                height="100%"
                                width="100%"
                                image={Vans}
                            />

                            <CardActions>
                                <Button variant='contained' size='large' type='button' onClick={(e) => this.shoeSearchVans(e)}> Search All Vans</Button>
                            </CardActions>
                        </Card>
                    </Grid>

                </Grid>

                <Grid container spacing='center' spacing={3}>
                    <Grid item xs={4}>
                        <h1 headerAlign="center">Search Result</h1>
                        <form className="d-flex flex-column">
                            {shoes && shoes.results.map(shoe => {
                                console.log(shoes)
                                console.log(shoe.id)
                                return <Card elevation={3} spacing={3}>
                                    <CardMedia
                                        component="img"
                                        height="100%"
                                        width="150%"
                                        src={shoe.image.thumbnail}
                                    />
                                    {/* <img src={shoe.image.thumbnail} /> */}
                                    <h3 class="card-title">Brand: {shoe.brand}</h3>
                                    <h4 class="card-title">Name: {shoe.name}</h4>
                                    <h5 class="card-title">Estimated cost: ${shoe.estimatedMarketValue}</h5>
                                    <h5 class="card-title">Color: {shoe.colorway}</h5>
                                    <h5 class="card-title">Release date: {shoe.releaseDate}</h5>
                                    <p class="card-title">Description: {shoe.story}</p>
                                    <p class="card-title">Gender: {shoe.gender}</p>

                                    <CardActions>
                                        <Button variant='contained' size='large' type='button' onClick={(e) => this.cart(shoe)}> Add to cart</Button>
                                    </CardActions>
                                </Card>

                                // return <Box>
                                // <img src={shoe.image.thumbnail} />
                                // <h3 class="card-title">Brand: {shoe.brand}</h3>
                                // <h4 class="card-title">Name: {shoe.name}</h4>
                                // <h5 class="card-title">Estimated cost: ${shoe.estimatedMarketValue}</h5>
                                // <h5 class="card-title">Color: {shoe.colorway}</h5>
                                // <h5 class="card-title">Release date: {shoe.releaseDate}</h5>
                                // <p class="card-title">Description: {shoe.story}</p>
                                // <p class="card-title">Gender: {shoe.gender}</p>
                                // </Box>

                            })}

                            {/* Original */}
                            {/* {this.state.shoes && this.state.shoes.results.map(shoe => {
                                    return <Box>
                                    <Box>
                                        <img src={shoe.image.thumbnail} />
                                        <h3 class="card-title">Brand: {shoe.brand}</h3>
                                        <h4 class="card-title">Name: {shoe.name}</h4>
                                        <h5 class="card-title">Estimated cost: ${shoe.estimatedMarketValue}</h5>
                                        <h5 class="card-title">Color: {shoe.colorway}</h5>
                                        <h5 class="card-title">Release date: {shoe.releaseDate}</h5>
                                        <p class="card-title">Description: {shoe.story}</p>
                                        <p class="card-title">Gender: {shoe.gender}</p>
                                    </Box>
                                </Box>
                                    // <tr>
                                    //     <td>{shoe.name}</td>
                                    //     <td>{shoe.estimatedMarketValue}</td>
                                    //     <td>{shoe.story}</td>
                                    // </tr>
                                    
                                })} */}
                        </form>
                    </Grid>
                </Grid>
            </Box>

        );

    }
};

export default Home;