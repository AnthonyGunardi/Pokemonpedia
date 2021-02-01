import React from 'react'

class PokeDetail extends React.Component {
  constructor() {
    super()
    this.state = {
      pokemon: null
    }
  }

  componentDidMount() {
    this.fetchPoke()
  }

  fetchPoke = () => {
    fetch('https://pokeapi.co/api/v2/pokemon/497')
      .then(res => res.json())
      .then(data => {
        this.setState({
          pokemon: data
        })
    })
  }

  render () {
    const {pokemon} = this.state
    return (
      <div className="sm:w-10/12 w-full m-4 p-4 border">
      {
        !pokemon
        ?
        <p>Loading...</p>
        :
        <div className="flex flex-wrap justify-center border shadow-md p-2">
          <div className="w-full">
            <h1 className="font-semibold capitalize text-center">#{pokemon.id} {pokemon.species.name}</h1>
          </div>
          <div className="w-full sm:w-2/6 flex justify-around">
            <div className="flex justify-center flex-wrap">
              <img className="hover:animate-bounce" src={pokemon.sprites.front_default} alt={pokemon.species.name}/>
              <p className="w-full text-center text-sm font-semibold">Normal</p>
            </div>
            <div className="flex justify-center flex-wrap">
              <img className="hover:animate-bounce" src={pokemon.sprites.front_shiny} alt={pokemon.species.name}/>
              <p className="w-full text-center text-sm font-semibold">Shiny</p>
            </div>
          </div>
          <div className="w-full mt-2">
            <div>
              Ability
            </div>
          </div>
        </div>
      }
      </div>
    )
  }
}

export default PokeDetail