import React from 'react'
import useFetch from '../hooks/useFetch'

function TeamSidebar (props) {
  const {data: pokemon, loading} = useFetch(props.url)

  if (loading) {
    return (
      <div className="border w-5/12 sm:w-full p-2 rounded-md shadow-sm mb-1 sm:mx-0 mx-1 transform sm:hover:translate-x-1 hover:-translate-y-1">
        <div className="flex justify-between items-center">
          <p>...</p>
        </div>
      </div>
    )
  }
  return (
    <div className="border w-5/12 sm:w-full p-2 rounded-md shadow-sm mb-1 sm:mx-0 mx-1 transform sm:hover:translate-x-1 hover:-translate-y-1">
      <div className="flex justify-between items-center">
      <p className=" font-semibold text-sm break-all link capitalize">{pokemon.species.name}</p>
        <span className="material-icons ml-3">
          cancel
        </span>
      </div>
    </div>
  )
}

export default TeamSidebar