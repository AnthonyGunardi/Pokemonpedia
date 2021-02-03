export const addPoke = (pokemon) => {
  return {type: "ADDPOKE", payload: pokemon}
}

export const removePoke = (index) => {
  return {type: "REMOVEPOKE", payload: index}
}

export const searchPoke = (string) => {
  return {type: "SEARCHPOKE", payload: string}
}