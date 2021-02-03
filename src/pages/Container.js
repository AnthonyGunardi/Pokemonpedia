import React from 'react'
import { useFetch } from '../hooks'
import { Poke, Loading } from '../components'

function Container () {
  const {data: pokemons, loading} = useFetch('https://pokeapi.co/api/v2/pokemon?limit=18&offset=0') // limit=156&offset=493 

  if (loading) {
    return (
      <Loading />
    )
  }
  return (
    <div className="sm:w-10/12 w-full grid sm:grid-cols-3 lg:grid-cols-6 grid-cols-2 gap-2 p-2">
      {
        pokemons.map((poke, idx) => {
          return (
            <Poke key={idx} poke={poke} />
          )
        })
      }
    </div>
  )
}

export default Container