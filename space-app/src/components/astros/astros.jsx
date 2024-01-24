import { useState } from 'react';
import './astros'

const Astro = () => {
    const[astros, setAstros]= useState(null)
    
    const fetchData = async ()=> {
        const response = await fetch('http://api.open-notify.org/astros.json');
        console.log(response.json());
        setAstros(results);
    }
    return (
        <div className='card flex'>
            <p className='card-name'>Astro</p>
            <p className='card-station'>Craft</p>
        </div>
    )
}

const Astros = () => {
    return(
        <div className='cards-container flex'>
            <Astro />
        </div>
    )
}

export default Astros;