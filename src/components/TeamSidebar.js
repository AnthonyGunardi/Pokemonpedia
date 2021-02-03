import React from 'react'
import { useFetch } from '../hooks'
import { Loading } from './index'
import { Link } from 'react-router-dom'

function TeamSidebar (props) {
  const {data: pokemon, loading} = useFetch(props.url)

  if (loading) {
    return (
      <div className="border w-5/12 sm:w-full p-2 rounded-md shadow-sm mb-1 sm:mx-0 mx-1 transform sm:hover:translate-x-1 hover:-translate-y-1">
        <Loading />
      </div>
    )
  }
  return (
    <div className="border w-5/12 sm:w-full p-2 rounded-md shadow-sm mb-1 sm:mx-0 mx-1 transform sm:hover:translate-x-1 hover:-translate-y-1 sm:text-md text-xs">
      <div className="flex justify-between items-center">
      <Link to={`/pokemon/${pokemon.id}`} className=" font-semibold text-sm break-all link capitalize">{pokemon.species.name}</Link>
        <span className="material-icons ml-3 cursor-pointer">
          cancel
        </span>
      </div>
    </div>
  )
}

export default TeamSidebar