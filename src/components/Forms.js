import { useState } from 'react'

const Forms = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    gender: '',
    hobbies: [], // Fixed typo from "hobbes" to "hobbies"
    email: '',
    dateTime: '',
    range: '',
    password: '',
  })

  // State to store submitted data for preview after submit
  const [submittedData, setSubmittedData] = useState(null)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        hobbies: checked
          ? [...prev.hobbies, value]
          : prev.hobbies.filter((hobby) => hobby !== value),
      }))
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmittedData(formData) // Store form data to be previewed after submit
  }

  return (
    <div className="mt-5">
      <h1 className="text-5xl ">Form:</h1>
      <div className="flex justify-center items-center">
        <form onSubmit={handleSubmit}>
          <label>
            Name:{' '}
            <input
              className="m-5"
              type="text"
              name="name"
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Description:{' '}
            <textarea
              className="m-5"
              type="text"
              name="description"
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Gender:
            <input
              className="m-5"
              type="radio"
              name="gender"
              value="male"
              onChange={handleChange}
            />
            Male
            <input
              className="m-5"
              type="radio"
              name="gender"
              value="female"
              onChange={handleChange}
            />
            Female
          </label>
          <br />
          <label>
            Hobbies:
            <input
              className="m-5"
              type="checkbox"
              name="hobbies"
              value="reading"
              onChange={handleChange}
            />{' '}
            Reading
            <input
              className="m-5"
              type="checkbox"
              name="hobbies"
              value="coding"
              onChange={handleChange}
            />{' '}
            Coding
          </label>
          <br />
          <label htmlFor="">
            Email:
            <input
              className="m-5"
              type="email"
              name="email"
              onChange={handleChange}
            />
          </label>
          <br />
          <label htmlFor="">
            Date and time:
            <input
              className="m-5"
              type="datetime-local"
              name="dateTime"
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Range:
            <input
              className="m-5"
              type="range"
              min="1"
              max="10"
              name="range"
              onChange={handleChange}
            />
          </label>
          <br />
          <label htmlFor="">
            Password:
            <input
              className="m-5"
              type="password"
              name="password"
              onChange={handleChange}
            />
          </label>
          <br />

          <button className="btn btn-secondary m-5" type="submit">
            Submit
          </button>
        </form>
      </div>

      {/* Conditionally render the preview only after form submission */}
      {submittedData && (
        <div className="mt-5">
          <h3>Preview:</h3>
          <pre>{JSON.stringify(submittedData, null, 2)}</pre>
        </div>
      )}
    </div>
  )
}

export default Forms
