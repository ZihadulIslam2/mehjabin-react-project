import { useState } from 'react'

const Forms = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    gender: '',
    hobbes: [],
    email: '',
    dateTime: '',
    range: '',
    password: '',
  })

  return (
    <div>
      <h1 className="text-5xl">Forms Page:</h1>
      <div className="flex justify-center items-center">
        <form>
          <label className="p-2 ">
            Name: <input type="text" name="name" />
          </label>
          <br />
          <label className="p-2">
            Description: <textarea type="text" name="description" />
          </label>
          <br />
          <label>
            Gender:
            <input type="radio" name="gender" value="male" />
            Male
            <input type="radio" name="gender" value="female" />
            Female
          </label>
          <br />
          <label>
            Hobbies :
            <input type="checkbox" name="hobbies" /> Reading
            <input type="checkbox" name="hobbies" /> Coding
          </label>
          <br />
          <br />
          <label htmlFor="">
            Email:
            <input type="email" name="email" />
          </label>
          <br />
          <label htmlFor="">
            Date and time:
            <input type="datetime-local" name="dateTime" />
          </label>
          <br />
          <label>
            Range:
            <input type="range" min="1" max="10" name="range" />
          </label>
          <br />
          <label htmlFor="">
            Password:
            <input type="password" name="password" />
          </label>
          <br />

          <button className="btn btn-secondary" type="submit">
            submit
          </button>
        </form>
      </div>
    </div>
  )
}
export default Forms
