import React, { useState } from "react";
import { useMutation } from '@apollo/react-hooks';
import { Link } from "react-router-dom";
import Auth from "../utils/auth";

function SearchShoes(props) {
    const handleFormSubmit = async event => {
        event.preventDefault();
        const shoe = document.querySelector('input[name="shoeSearch"]').value;
        console.log(shoe + " is the brand you searched for!");
    
        fetch(`https://the-sneaker-database.p.rapidapi.com/sneakers?limit=100&brand=${shoe}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "the-sneaker-database.p.rapidapi.com",
                "x-rapidapi-key": "90010f48fcmsh67c1ef52e0aacbep1ab420jsn8d9992b34041"
            }
        })
        .then(
            function(response) {
               // Examine the text in the response
                response.json().then(function(data) {
                    console.log(data);
                    let shoeSection = document.querySelector('#shoe-section');

                    $("#shoe-section").stop();
                    $("#shoe-section").empty();

                    let shoeCount = shoes.results.length;

                    for(i=0; i < shoeCount; i++) {
                        
                        shoeSection.innerHTML += `
                            <div class="col-4">
                                <div class="card scroll" style="width: 18rem;">
                                    <div class="card-body drink-img-${i}">
                                        <style>
                                        .drink-img-${i} {
                                            height: 18rem;
                                            background-image: url(${shoes.results[i].image.thumbnail});
                                            background-size: cover;
                                            background-position: center;
                                        }
                                        </style>
                                    </div>
                                    <div class="card-body">
                                        <h3 class="card-title">Brand: ${shoes.results[i].brand}</h3>
                                        <h4 class="card-title">Name: ${shoes.results[i].name}</h4>
                                        <h5 class="card-title">Estimated cost: $${shoes.results[i].estimatedMarketValue}</h5>
                                        <h5 class="card-title">Color: ${shoes.results[i].colorway}</h5>
                                        <h5 class="card-title">Release date: ${shoes.results[i].releaseDate}</h5>
                                    </div>
                                    <ul id="ingredient-section-${i}" class="list-group list-group-flush">
                                    </ul>
                                </div>
                            </div>
                        `;
                    }
                });
            }
        )
        .catch(err => {
            console.error(err);
        });
    };

    return (
        <div className="container my-1">
            <h2>Shoe Search</h2>
            <form onSubmit={handleFormSubmit}>
                <div className="flex-row space-between my-2">
                    <label htmlFor="email">Shoe brand:</label>
                    <input
                        placeholder="Nike"
                        name="shoeSearch"
                        type="shoeSearch"
                        id="shoeSearch"
                        onChange={handleChange}
                    />
                </div>
                {
                error ? <div>
                    <p className="error-text" >The provided credentials are incorrect</p>
                </div> : null
                }
                <div className="flex-row flex-end">
                    <button type="submit">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}


export default SearchShoes;