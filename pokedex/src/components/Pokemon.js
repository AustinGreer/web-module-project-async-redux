import axios from 'axios'
import React, { useState, useEffect } from 'react'

function Pokemon(props) {
    const [pokeman, setPokeMan] = useState({})
    
    useEffect (() => {
        axios.get(`${props.pokemon.url}`)
        .then (res => {
            setPokeMan(res.data)
        })
    }, [props.pokemon])


    return (
        <section className='pokemon'>
            <div>
                <p># {pokeman.id}</p>
                <p>{pokeman.name}</p>
            </div>
        </section>
    )
}

export default Pokemon;