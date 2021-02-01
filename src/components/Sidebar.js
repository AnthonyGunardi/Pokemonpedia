import React from 'react'

class Sidebar extends React.Component {
  constructor() {
    super()
    this.state = {
      dark: false
    }
  }

  toggleDark = () => {
    if (this.state.dark) {
      this.setState({
        dark: false
      })
    } else {
      this.setState({
        dark: true
      })
    }
  }

  render() {
    return (
      <div className="sm:w-2/12 w-full sm:order-last order-first sm:pt-2">
        <div className="sticky w-full top-0 flex flex-wrap p-2 justify-center">
          <div className="container mx-auto flex justify-center">
            <div className="p-2 border rounded-full flex max-w-xl cursor-pointer">
              <button className={`material-icons ${this.state.dark ? "mr-10" : "ml-10"} text-black`} onClick={this.toggleDark}>
                {
                  this.state.dark
                  ?
                  "dark_mode"
                  :
                  "brightness_high"
                }
              </button>
            </div>
          </div>
          <div className="my-3 w-full">
            <input type="text" name="search" id="search" placeholder="Search Pokémon Name" className="w-full border rounded-xl text-sm h-10 p-2"/>
          </div>
          <div className="text-center w-full">
            <h3 className="border-b mb-1">Your Team</h3>
            <div className="flex flex-wrap justify-center container p-1">
              <p className="border w-5/12 sm:w-full p-2 font-semibold text-sm break-all transform sm:hover:translate-x-1 hover:-translate-y-1 mb-1 rounded-sm shadow-sm sm:mx-0 mx-1">Serperior</p>
              <p className="border w-5/12 sm:w-full p-2 font-semibold text-sm break-all transform sm:hover:translate-x-1 hover:-translate-y-1 mb-1 rounded-sm shadow-sm sm:mx-0 mx-1">Serperior</p>
              <p className="border w-5/12 sm:w-full p-2 font-semibold text-sm break-all transform sm:hover:translate-x-1 hover:-translate-y-1 mb-1 rounded-sm shadow-sm sm:mx-0 mx-1">Serperior</p>
              <p className="border w-5/12 sm:w-full p-2 font-semibold text-sm break-all transform sm:hover:translate-x-1 hover:-translate-y-1 mb-1 rounded-sm shadow-sm sm:mx-0 mx-1">Serperior</p>
              <p className="border w-5/12 sm:w-full p-2 font-semibold text-sm break-all transform sm:hover:translate-x-1 hover:-translate-y-1 mb-1 rounded-sm shadow-sm sm:mx-0 mx-1">Serperior</p>
              <p className="border w-5/12 sm:w-full p-2 font-semibold text-sm break-all transform sm:hover:translate-x-1 hover:-translate-y-1 mb-1 rounded-sm shadow-sm sm:mx-0 mx-1">Serperior</p>
            </div>
            <h3 className="border-t">View All</h3>
          </div>
        </div>
      </div>
    )
  }
}

export default Sidebar