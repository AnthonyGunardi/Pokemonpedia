import React, {useState, useEffect} from 'react'
import TeamSidebar from './TeamSidebar'

function Sidebar () {
  const [dark, setDark] = useState(false)

  const toggleDark = () => {
    if (dark) {
      setDark(false)
      localStorage.setItem('theme', 'light')
      document.querySelector('html').classList.remove('dark')
    } else {
      setDark(true)
      localStorage.setItem('theme', 'dark')
      document.querySelector('html').classList.add('dark')
    }
  }

  const random = () => {
    const number = Math.floor(Math.random() * 898)
    return `https://pokeapi.co/api/v2/pokemon/${number}`
  }

  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') {
      setDark(true)
      document.querySelector('html').classList.add('dark')
    }
  }, [dark])

  return (
    <div className="sm:w-2/12 w-full sm:order-last order-first sm:pt-2">
      <div className="sticky w-full top-0 flex flex-wrap p-2 justify-center">
        <div className="container mx-auto flex justify-center">
          <div className="p-2 border rounded-full flex max-w-xl cursor-pointer">
            <button className={`material-icons ${dark ? "mr-10" : "ml-10"} text-black dark:text-white`} onClick={toggleDark}>
              {
                dark
                ?
                "dark_mode"
                :
                "brightness_high"
              }
            </button>
          </div>
        </div>
        <div className="my-3 w-full">
          <input type="text" name="search" id="search" placeholder="Search Pokémon Name" className="w-full border rounded-xl text-sm h-10 p-2" disabled/>
        </div>
        <div className="text-center w-full">
          <h3 className="border-b mb-1">Your Team</h3>
          <div className="flex flex-wrap justify-center container p-1">
            <TeamSidebar url={random()}/>
            <TeamSidebar url={random()}/>
            <TeamSidebar url={random()}/>
            <TeamSidebar url={random()}/>
            <TeamSidebar url={random()}/>
            <TeamSidebar url={random()}/>
          </div>
          <h3 className="border-t link">View Details</h3>
        </div>
      </div>
    </div>
  )
}

export default Sidebar