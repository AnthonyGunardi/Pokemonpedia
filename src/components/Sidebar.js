import React, {useState, useEffect} from 'react'
import { TeamSidebar, Nothing } from './index'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { searchPoke } from '../store/action'

function Sidebar () {
  const [dark, setDark] = useState(false)
  const dispatch = useDispatch()
  const teams = useSelector(state => state.teams)
  const search = useSelector(state => state.search)

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

  const searchFunc = (e) => {
    dispatch(searchPoke(e.target.value))
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
        <Link to="/" className="border-b link mb-2">HOME</Link>
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
          <input type="text" name="search" id="search" placeholder="Search Pokémon Name" className="w-full border rounded-xl text-sm h-10 p-2 text-black" value={search} onChange={searchFunc}/>
        </div>
        <div className="text-center w-full">
          <h3 className="border-b mb-1">Your Pokemon Team</h3>
          <div className="flex flex-wrap justify-center container p-1">
            {
              teams.length === 0
              ?
              <Nothing message="Create Your Own Pokemon Team!"/>
              :
              teams.map((e, idx) => {
                return <TeamSidebar key={e.id} url={e.location_area_encounters.split("/encounters")[0]} index={idx} />
              })
            }
          </div>
          <Link to="/team" className="border-t link pt-1">View Teams Detail</Link>
        </div>
        <div className="border-t mt-2 pt-2">
          <p className="break-words"><span className="font-semibold">Rules</span>: You can select up to 6 Pokemons into your team, by click the pokeball icon on each Pokemon. No duplicate Pokemon.</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar