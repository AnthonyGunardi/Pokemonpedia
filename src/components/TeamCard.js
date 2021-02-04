import React, { useState, useEffect }  from 'react'
import { Type, Loading, Ability, Error, Stat, Image } from './index'
import { useFetch } from '../hooks'
import { Link } from 'react-router-dom'

function TeamCard (props) {
  const {data: pokemon, loading, error} = useFetch(props.url)
  const [maxStat, setMaxStat] = useState(255)

  useEffect(() => {
    if (pokemon) {
      const max = pokemon.stats.reduce((a, b) => ({base_stat: a.base_stat + b.base_stat}))
      setMaxStat(max.base_stat)
    }
  }, [pokemon])

  if (error) {
    return <Error />
  }
  if (loading) {
    return <Loading />
  }
  return (
    <div className="border-t-4 border-red-400 dark:border-blue-400 w-full rounded-md py-2 shadow-md">
      <div className="w-full text-center">
        <Link to={`/pokemon/${pokemon.id}`} className="font-semibold capitalize text-center link">#{pokemon.id} {pokemon.species.name}</Link>
      </div>
      <div className="w-full flex justify-around">
        <div className="flex justify-center flex-wrap">
          <Image image={pokemon.sprites.front_default} name={pokemon.species.name}/>
        </div>
      </div>
      <div className="w-full mt-2">
        <div className="grid grid-cols-none text-center p-2">
          <div className="border-b-2 py-2">
            <h1 className="font-semibold">Status</h1>
            {
              pokemon.stats.map((stat, idx) => <Stat key={idx} stat={stat}/>)
            }
            <h1 className="font-semibold mt-2">Total Stat: {maxStat}</h1>
          </div>
          <div className="flex flex-wrap justify-center border-b-2 py-2">
            <h1 className="font-semibold">Ability</h1>
            <div className="w-full">
              {
                pokemon.abilities.map((ability, idx) => <Ability key={idx} ability={ability} maxStat="max stat" />)
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