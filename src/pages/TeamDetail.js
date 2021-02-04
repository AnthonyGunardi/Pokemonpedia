import React from 'react'
import { TeamCard, Nothing } from '../components'
import { useSelector } from 'react-redux'

function TeamDetail () {
  const teams = useSelector(state => state.team.teams)

  if (teams.length === 0) {
    return <Nothing message="Please Create Your Team First"/>
  }
  return (
    <div className="sm:w-10/12 w-full grid grid-cols-1 p-4 h-2/5">
      <div className="col-span-12 text-center p-3">
        <h1 className="text-3xl font-semibold">Your Team Detail</h1>
      </div>
      <div className="grid sm:grid-cols-3 lg:grid-cols-6 grid-cols-1 gap-2 container mx-auto">
        {
          teams.map(e => {
            return <TeamCard key={e.id} url={e.location_area_encounters.split("/encounters")[0]} />
          })
        }
      </div>
    </div>
  )
}

export default TeamDetail