import React from 'react'

function Data (props) {

  const ratio = () => {
    const ratio = ((props.stat.base_stat * 100 / 255)).toFixed(2).toString()
    return `${ratio}%`
  }

  if (props.ability) {
    return (
      <p className="capitalize hover:bg-gray-300 dark:hover:text-black rounded-lg p-1">
        {props.ability.ability.name.replace('-', ' ')}
        {
          props.ability.is_hidden ? <span className="italic"> (Hidden Ability)</span> : ''
        }
      </p>
    )
  }
  if (props.stat) {

    return (
      <div className="px-2">
        <p className="capitalize">{props.stat.stat.name.replace('-', ' ')}</p>
        <div className="shadow w-full bg-gray-200 rounded-full">
          <div className="bg-blue-300 dark:bg-green-300 dark:hover:bg-green-500 hover:bg-indigo-300 rounded-full text-xs leading-none p-1 text-left text-black" style={{ width: ratio() }}><p>{props.stat.base_stat}</p></div>
        </div>
      </div>
    )
  }
}

export default Data