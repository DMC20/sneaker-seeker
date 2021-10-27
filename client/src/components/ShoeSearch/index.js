import React, { useEffect, useState } from "react";

class SearchShoes extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            shoes: ''
        };

        this.create = this.shoeSearch.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    shoeSearch() {
        fetch("https://the-sneaker-database.p.rapidapi.com/search?limit=20&query=vans", {
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
        this.setState(changeObject)
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <h1 className="display-4 text-center">Shoe search</h1>
                        <form className="d-flex flex-column">
                            <button className="btn btn-primary" type='button' onClick={(e) => this.shoeSearch(e)}>
                                Search
                            </button>
                                {this.state.shoes && this.state.shoes.results.map(shoe => {
                                    return <div>
                                    <div>
                                        <img src={shoe.image.thumbnail} />
                                        <h3 className="card-title">Brand: {shoe.brand}</h3>
                                        <h4 className="card-title">Name: {shoe.name}</h4>
                                        <h5 className="card-title">Estimated cost: ${shoe.estimatedMarketValue}</h5>
                                        <h5 className="card-title">Color: {shoe.colorway}</h5>
                                        <h5 className="card-title">Release date: {shoe.releaseDate}</h5>
                                        <p className="card-title">Description: {shoe.story}</p>
                                        <p className="card-title">Gender: {shoe.gender}</p>
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
}

export default SearchShoes;