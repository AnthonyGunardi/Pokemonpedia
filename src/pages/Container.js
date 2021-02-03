import React, { useState, useEffect } from 'react'
import { useFetch } from '../hooks'
import { Poke, Loading, Error, Nothing } from '../components'
import { useSelector } from 'react-redux'

function Container () {
  const {data: pokemons, loading, error} = useFetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0') // limit=156&offset=493
  const search = useSelector(state => state.search)
  const [filtered, setFiltered] = useState()

  useEffect(() => {
    if (pokemons) {
      setFiltered(pokemons)
    }
  }, [pokemons])

  useEffect(() => {
    if (filtered) {
      const timer = setTimeout(() => {
        const input = pokemons.filter(e => {
          return e.name.toLowerCase().includes(search.toLowerCase())
        })
        setFiltered(input)
      }, 1000);

      return () => clearTimeout(timer)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, filtered])

  if (error) {
    return <Error />
  }
  if (loading) {
    return <Loading />
  }
  if (filtered.length === 0) {
    return <Nothing message="Not Found" />
  }
  return (
    <div className="sm:w-10/12 w-full grid sm:grid-cols-3 lg:grid-cols-6 grid-cols-2 gap-2 p-2">
      {
        filtered.map((poke, idx) => {
          return (
            <Poke key={idx} poke={poke} />
          )
        })
      }
    </div>
  )
}

export default Container
// todo search