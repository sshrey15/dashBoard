import React from 'react'

const Form = () => {
  return (
    <form className="space-y-4">
      {Array.from({ length: 8 }, (_, i) => (
        <div key={i} className="flex items-center space-x-2">
          <label htmlFor={`semester-${i + 1}`} className="text-gray-700">Semester {i + 1}:</label>
          <input id={`semester-${i + 1}`} type="number" min="0" max="100" className="border-2 border-gray-200 rounded w-20 p-1 bg-white text-black" />
        </div>
      ))}
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
    </form>
  )
}

export default Form