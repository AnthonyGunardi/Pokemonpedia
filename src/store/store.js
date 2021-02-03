import { createStore } from 'redux'

const initState = {
  teams: [],
  search: ''
}

function reducer (state = initState, action) {
  switch (action.type) {
    case "ADDPOKE":
      return {
        ...state,
        teams: state.teams.concat(action.payload)
      }
    case "REMOVEPOKE":
      return {
        ...state,
        teams: state.teams.filter((e,id) => id !== action.payload)
      }
    case "SEARCHPOKE":
      return {
        ...state,
        search: action.payload
      }
    default:
      return state
  }
}

const store = createStore(reducer)

export default store