export const addPoke = (obj) => {
  return (dispatch, getState) => {
    dispatch({
      type: "ADDPOKE", payload: obj
    })
  }
}

export const removePoke = (index) => {
  return (dispatch, getState) => {
    dispatch({
      type: "REMOVEPOKE", payload: index
    })
  }
}