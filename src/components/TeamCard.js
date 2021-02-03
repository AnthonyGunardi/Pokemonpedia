import React, { useState, useEffect }  from 'react'
import { Type, Loading, Data } from './index'
import { useFetch } from '../hooks'

function TeamCard (props) {
  const {data: pokemon, loading} = useFetch(props.url)
  const [maxStat, setMaxStat] = useState(255)

  useEffect(() => {
    if (pokemon) {
      const max = pokemon.stats.reduce((a, b) => ({base_stat: a.base_stat + b.base_stat}))
      setMaxStat(max.base_stat)
    }
  }, [pokemon])

  if (loading) {
    return <Loading />
  }
  return (
    <div className="w-full border rounded-md py-2">
      <div className="w-full">
        <h1 className="font-semibold capitalize text-center link">#{pokemon.id} {pokemon.species.name}</h1>
      </div>
      <div className="w-full flex justify-around">
        <div className="flex justify-center flex-wrap">
          <img className="hover:animate-bounce" src={pokemon.sprites.front_default} alt={pokemon.species.name}/>
        </div>
      </div>
      <div className="w-full mt-2">
        <div className="grid grid-cols-none text-center p-2">
          <div className="flex flex-wrap justify-center border-b-2 py-2">
            <h1 className="font-semibold">Data</h1>
            <div className="w-full">
              <p className="hover:bg-gray-300 dark:hover:text-black rounded-full"><span className="font-semibold">Weight</span> {pokemon.weight / 10} kg</p>
              <p className="hover:bg-gray-300 dark:hover:text-black rounded-full"><span className="font-semibold">Height</span> {pokemon.height * 10} cm</p>
            </div>
          </div>
          <div className="border-b-2 py-2">
            <h1 className="font-semibold">Status</h1>
            {
              pokemon.stats.map((stat, idx) => <Data key={idx} stat={stat}/>)
            }
            <h1 className="font-semibold mt-2">Total Stat: {maxStat}</h1>
          </div>
          <div className="flex flex-wrap justify-center border-b-2 py-2">
            <h1 className="font-semibold">Ability</h1>
            <div className="w-full">
              {
                pokemon.abilities.map((ability, idx) => <Data key={idx} ability={ability} maxStat="max stat" />)
              }
            </div>
          </div>
          <div className=" flex justify-center flex-wrap">
            <h1 className="w-full font-semibold py-2">Type</h1>
            <div className="w-54">
              {
                pokemon.types.map((type, idx) => <Type key={idx} type={type.type.name} />)
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamCard