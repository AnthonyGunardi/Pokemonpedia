import React from 'react'
import pokeball from '../assets/img/pokeball.png'
import { useDispatch, useSelector } from 'react-redux'
import { addPoke } from '../store/action';
import { toast } from 'react-toastify';

function AddButton (props) {
  const dispatch = useDispatch()
  const teams = useSelector(state => state.teams)

  const addTeam = () => {
    if (teams.length < 6 && !teams.some(e => e.id === props.pokemon.id)) {
      dispatch(addPoke(props.pokemon))
    } else {
      toast.error('Cannot Add Pokemon to Team!');
    }
  }

  return (
    <button onClick={addTeam} className="transform hover:scale-110 mt-2"><img src={pokeball} alt="" className="w-5 h-5"/></button>
  )
}

export default AddButton