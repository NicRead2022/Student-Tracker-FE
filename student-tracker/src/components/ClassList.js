import ClassCard from './ClassCard'
import axios from 'axios'
import { BASE_URL } from '../globals'
import { useState, useEffect } from 'react'


const ClassList = ({ getOneClass }) => {
  const [classes, setClasses] = useState([])
  const [viewForm, setViewForm] = useState(false)
  const initialState = {name:""}
  const [formValues, setFormValues] = useState(initialState)

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }
const getAllClasses = async () => {
    const res = await axios.get(`${BASE_URL}/class/all`)
    setClasses(res.data)
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`${BASE_URL}/class`, {name:formValues.name})
    setFormValues(initialState)
    setViewForm(false)
    getAllClasses()
  }
  const toggleForm = () => {
    setViewForm(true)
  }
  useEffect(() => {
    getAllClasses()
  }, [])

  return (
    <div>
      <button onClick={toggleForm}>Add Class</button>
      {viewForm ? <div>
        <h3>New Class Form</h3>
        <form onSubmit={handleSubmit}>
          <input
              onChange={handleChange}
              name="name"
              type="text"
              value={formValues.name} required
          /> 
          <button className='add-class' type="submit">Add Class</button>
        </form>
      </div> : 
        <div> {classes.map((aClass) => (
            <ClassCard
              key={aClass.id}
              name={aClass.name}
              onClick={() => getOneClass(aClass.id)}
            />
          ))}</div>
        }
    </div>
  )
}
export default ClassList
