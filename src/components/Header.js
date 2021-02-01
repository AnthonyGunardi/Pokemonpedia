import React from 'react'

class Header extends React.Component {
  render() {
    return (
      <header className="h-40 flex justify-center items-center bg-poke-header bg-cover bg-no-repeat bg-center">
        <h1 className=" text-5xl text-white text-center">Gotta Catch 'Em All!</h1>
      </header>
    )
  }
}

export default Header