import React from 'react'
import { useState } from 'react'
import { Link, useLocation } from 'wouter'
import PokemonList from '../../components/PokemonList/PokemonList'

export default function Home() {
    const [keyword, setKeyword] = useState("")
    const [location, pushLocation] = useLocation()

    function handleSubmit(e){
        e.preventDefault();
        pushLocation(`/pokemon/${keyword}`)

    }


    function handleChange(e){
        setKeyword(e.target.value)
    }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={keyword} onChange={handleChange} />
        <button>submit</button>
      </form>

      <PokemonList />
    </>



  )
}
