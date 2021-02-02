import React from 'react'

function Loading () {
  return (
    <div className="border shadow rounded-md p-4 max-w-sm w-full mx-auto h-56">
      <div className="animate-pulse flex flex-wrap justify-center">
          <div className="w-full flex justify-center">
            <div className="mb-3 rounded-full bg-blue-400 h-12 w-12"></div>
          </div>
          <div className="space-y-2 w-8/12">
            <div className="h-4 bg-blue-400 rounded"></div>
            <div className="h-4 bg-blue-400 rounded"></div>
          </div>
      </div>
    </div>
  )
}

export default Loading