import React from 'react'
import { TeamCard } from '../components'

function TeamDetail () {
  const random = () => {
    const number = Math.floor(Math.random() * 898)
    return `https://pokeapi.co/api/v2/pokemon/${number}`
  }

  return (
    <div className="sm:w-10/12 w-full grid grid-cols-1 p-4 h-2/5">
      <div className="col-span-12 text-center p-3">
        <h1 className="text-2xl font-semibold">Team Detail</h1>
      </div>
      <div className="grid sm:grid-cols-6 grid-cols-1 gap-2 container mx-auto">
        <TeamCard url={random()}/>
        <TeamCard url={random()}/>
        <TeamCard url={random()}/>
        <TeamCard url={random()}/>
        <TeamCard url={random()}/>
        <TeamCard url={random()}/>
      </div>
    </div>
  )
}

export default TeamDetail