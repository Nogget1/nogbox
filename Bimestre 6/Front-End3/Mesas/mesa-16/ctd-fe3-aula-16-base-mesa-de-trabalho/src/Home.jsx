import React, { useEffect, useState } from 'react'
import Card from "./components/Card"
import { api } from './services/api'

const Home = () => {
  const [beers, setBeers] = useState([]);

  const getBeers = async () => {
    const { data } = await api.get('/beers');
    setBeers(data);
  };

  useEffect(() => {
    getBeers();
  });

  return (
    <>
    <main>
    <div className='grid'>
        {beers.length 
          ? beers.map(beer => (<Card data={beer} />))
          : null
        }
    </div>
    </main>
    </>
    
  )
}

export default Home