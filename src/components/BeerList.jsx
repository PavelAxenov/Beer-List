import React, { useState } from 'react'
import logo from '../images/beerLogo.png'


export default function Beers( {beer, loading, allBeer}) {

    const [value, setValue] = useState('')

    const filterBeers = allBeer.filter(item => {
        return item.name.toLowerCase().includes(value.toLowerCase())
    })

    if (loading) {
        return <h2>Loading...</h2>
    } else if (value === '') {
        return (
            <div>
                <header className="header">
                    <img src={logo} alt="logo" className="logo" />
                    <input
                        type="text"
                        onChange={(event) => setValue(event.target.value) }
                    />
                </header>
                <ul>

                    {beer.map((item) => (
                        <li className="item-beer" key={item.id} >
                        <img src={item.image_url} alt={item.name} />
                        <h1 className="item-name">{item.name}</h1>
                        <p className="item-description">
                            {item.description.length < 140 ? item.description : item.description.slice(0,140) + '...'}
                        </p>
                    </li>
                    ))}
                </ul>
            </div>
            
        )
    }
    return (
        <div>
            <header className="header">
                <img src={logo} alt="logo" className="logo" />
                <input
                    type="text"
                    onChange={(event) => setValue(event.target.value) }
                />
            </header>
            <ul>
                {filterBeers.map((item) => (
                <li className="item-beer" key={item.id}>
                    <img src={item.image_url} alt={item.name} />
                    <h1 className="item-name">{item.name}</h1>
                    <p className="item-description">
                        {item.description.length < 140 ? item.description : item.description.slice(0,140) + '...'}
                    </p>
                </li>
                ))}
            </ul>
        </div>
        
    )
}
