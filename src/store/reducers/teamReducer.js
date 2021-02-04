const initState = {
  teams: []
}

function teamReducer (state = initState, action) {
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
    default:
      return state
  }
}

export default teamReducer