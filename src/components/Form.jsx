import React from 'react'

const Form = ({ onSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Array.from(formData.values(), value => parseFloat(value)); // Convert to numbers
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-blue-200 p-4 ">
      {Array.from({ length: 8 }, (_, i) => (
        <div key={i} className="flex items-center space-x-2">
          <label htmlFor={`semester-${i + 1}`} className="text-black ">Semester {i + 1}:</label>
          <input id={`semester-${i + 1}`} name={`semester-${i + 1}`} type="number" min="0" max="10" step="0.1" className="border-2 border-gray-200 dark:border-gray-400 rounded w-20 p-1 text-black" />
        </div>
      ))}
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded dark:bg-blue-700">Submit</button>
    </form>
  )
}

export default Form