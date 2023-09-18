import React, { useState, useEffect } from 'react'
import { useParams, Link } from "react-router-dom";
import { api } from "./services/api";

const Beer = () => {
    const [beer, setBeer] = useState([]);
const { id } = useParams();

const getBeer = async () => {
    const { data } = await api.get(`/beers/${id}/`);    
    setBeer(data[0]);
    console.log(data)
};

useEffect(() => {
    getBeer();
});

return (
    <div>
        <h2>Cerveja número: ?</h2>
        <div className='card'>
            <img src={beer.image_url} alt="beer-detail" />
            <p>{beer.tagline}</p>
            <p>{beer.description}</p>
            <p>{beer.brewers_tips} </p>
        </div>
        <button>Voltar</button>
    </div>

    )
}

export default Beer