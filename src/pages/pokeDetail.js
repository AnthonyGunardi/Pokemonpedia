import React, { useState, useEffect } from 'react'
import useFetch from '../hooks/useFetch'
import Type from '../components/Type'
import Data from '../components/Data'
import Loading from '../components/Loading'

function PokeDetail () {
  const [url, setUrl] = useState('')
  const {data: pokemon, loading} = useFetch(url)
  const [maxStat, setMaxStat] = useState(255)

  const random = () => {
    const number = Math.floor(Math.random() * 898)
    return `https://pokeapi.co/api/v2/pokemon/${number}`
  }

  useEffect(() => {
    if (url === '') {
      setUrl(random())
    }

    if (pokemon) {
      const max = pokemon.stats.reduce((a, b) => ({base_stat: a.base_stat + b.base_stat}))
      setMaxStat(max.base_stat)
    }
  }, [pokemon, url])

  if (loading) {
    return (
      <Loading />
    )
  }
  return (
    <div className="sm:w-10/12 w-full m-4 p-4">
      <div className="flex flex-wrap justify-center border-t-4 border-red-400 rounded-sm shadow-md p-2">
        <div className="w-full">
          <h1 className="font-semibold capitalize text-center">#{pokemon.id} {pokemon.species.name}</h1>
        </div>
        <div className="w-full sm:w-2/6 flex justify-around">
          <div className="flex justify-center flex-wrap">
            <img className="hover:animate-bounce" src={pokemon.sprites.front_default} alt={pokemon.species.name}/>
            <p className="w-full text-center text-sm font-semibold">Normal</p>
          </div>
          <div className="flex justify-center flex-wrap">
            <img className="hover:animate-bounce" src={pokemon.sprites.front_shiny} alt={pokemon.species.name}/>
            <p className="w-full text-center text-sm font-semibold">Shiny</p>
          </div>
        </div>
        <div className="w-full mt-2">
          <div className="grid md:grid-cols-4 grid-cols-none text-center py-2">
            <div className="flex flex-wrap justify-center border-t-2 py-2">
              <h1 className="font-semibold">Data</h1>
              <div className="w-full">
                <p className="hover:bg-gray-300 dark:hover:text-black rounded-full"><span className="font-semibold">Weight</span> {pokemon.weight / 10} kg</p>
                <p className="hover:bg-gray-300 dark:hover:text-black rounded-full"><span className="font-semibold">Height</span> {pokemon.height * 10} cm</p>
              </div>
            </div>
            <div className="border-t-2 py-2">
              <h1 className="font-semibold">Status</h1>
              {
                pokemon.stats.map((stat, idx) => <Data key={idx} stat={stat}/>)
              }
              <h1 className="font-semibold">Total Stat: {maxStat}</h1>
            </div>
            <div className="flex flex-wrap justify-center border-t-2 py-2">
              <h1 className="font-semibold">Ability</h1>
              <div className="w-full">
                {
                  pokemon.abilities.map((ability, idx) => <Data key={idx} ability={ability} maxStat="max stat" />)
                }
              </div>
            </div>
            <div className=" flex justify-center flex-wrap border-t-2 py-2">
              <h1 className="w-full font-semibold">Type</h1>
              <div className="w-54">
                {
                  pokemon.types.map((type, idx) => <Type key={idx} type={type.type.name} />)
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PokeDetail