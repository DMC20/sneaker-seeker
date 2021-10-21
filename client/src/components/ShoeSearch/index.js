import React, { useEffect, useState } from "react";

class SearchShoes extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            shoes: []
        };

        this.create = this.create.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        // creates entity
        fetch("https://the-sneaker-database.p.rapidapi.com/search?limit=20&query=vans", {
            "method": "GET",
            "headers": {
            "x-rapidapi-host": "the-sneaker-database.p.rapidapi.com",
            "x-rapidapi-key": "90010f48fcmsh67c1ef52e0aacbep1ab420jsn8d9992b34041"
        }
    })
    .then(response => response.json())
    .then(response => {
        this.setState({
            shoes: response
        })
        console.log(response)
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
            <div>{this.state.results}</div>
        );
    }
}

export default SearchShoes;