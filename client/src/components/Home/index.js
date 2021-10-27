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
import CardHeader from '@mui/material/CardHeader';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Vans from '../../assets/vans.jpg';
// import { DataGridPro } from '@mui/x-data-grid-pro'; 


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
                    <Grid item xs={12} sm={6} md={3}>
                        <Card elevation={3}>
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

                    <Grid item xs={12} sm={6} md={3}>
                        <Card elevation={3}>
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

                    <Grid item xs={12} sm={6} md={3}>
                        <Card elevation={3}>
                            <CardMedia
                                component="img"
                                alt="nike dunk"
                                height="100%"
                                width="100%"
                                image={NikeDunk}
                            />

                            <CardActions>
                                <Button variant='contained' size='large' type='button' onClick={(e) => this.shoeSearchNike(e)}> Search All Nike</Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <Card elevation={3}>
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

                {/* <Grid container spacing='center' spacing={9} xs={12} sm={6} md={3}> */}
                    {/* <Grid item> */}
                        <h1>Search Result</h1>
                        {/* <form className="d-flex flex-column"> */}
                            {shoes && shoes.results.map(shoe => {
                                console.log(shoes)
                                console.log(shoe.id)
                                return( 
                                <Card elevation={5} xs={12} sm={6} md={3} 
                                sx={{ 
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justify: 'flex-start',
                                    alignItems: 'flex-start'
                                }}>
                                    <CardMedia
                                        component="img"
                                        height= "100%"
                                        // width="50px"
                                        src={shoe.image.thumbnail}
                                    />
                                    {/* <img src={shoe.image.thumbnail} /> */}
                                    <CardContent>
                                    <h1>{shoe.brand}</h1>
                                    <h2>Name:</h2>{shoe.name}
                                    <h2>Estimated cost:$</h2>{shoe.estimatedMarketValue}
                                    <h2>Color:</h2>{shoe.colorway}
                                    <h2>Release date:</h2>{shoe.releaseDate}
                                    <h2>Description:</h2><p>{shoe.story}</p>
                                    <h2>Gender:</h2>{shoe.gender}
                                    </CardContent>

                                    <CardActions sx={{ justifyContent: "center" }}>
                                        <Button variant='contained' size='large' type='button' onClick={(e) => this.cart(shoe)}> Add to cart</Button>
                                    </CardActions>
                                    </Card>
                               
                                // return <Box>
                                // <img src={shoe.image.thumbnail} />
                                // <h3>Brand: {shoe.brand}</h3>
                                // <h4>Name: {shoe.name}</h4>
                                // <h5>Estimated cost: ${shoe.estimatedMarketValue}</h5>
                                // <h5>Color: {shoe.colorway}</h5>
                                // <h5>Release date: {shoe.releaseDate}</h5>
                                // <p>Description: {shoe.story}</p>
                                // <p>Gender: {shoe.gender}</p>
                                // </Box>

                            )})}

                            {/* Original */}
                            {/* {this.state.shoes && this.state.shoes.results.map(shoe => {
                                    return <Box>
                                    <Box>
                                        <img src={shoe.image.thumbnail} />
                                        <h3>Brand: {shoe.brand}</h3>
                                        <h4>Name: {shoe.name}</h4>
                                        <h5>Estimated cost: ${shoe.estimatedMarketValue}</h5>
                                        <h5>Color: {shoe.colorway}</h5>
                                        <h5>Release date: {shoe.releaseDate}</h5>
                                        <p>Description: {shoe.story}</p>
                                        <p>Gender: {shoe.gender}</p>
                                    </Box>
                                </Box>
                                    // <tr>
                                    //     <td>{shoe.name}</td>
                                    //     <td>{shoe.estimatedMarketValue}</td>
                                    //     <td>{shoe.story}</td>
                                    // </tr>
                                    
                                })} */}
                        {/* </form> */}
                    {/* </Grid> */}
                {/* </Grid> */}
            </Box>

        );

    }
};

export default Home;