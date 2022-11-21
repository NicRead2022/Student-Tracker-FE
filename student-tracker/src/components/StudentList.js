import StudentCard from './StudentCard'
import axios from 'axios'
import { BASE_URL } from '../globals'
import { useState, useEffect } from 'react'

const StudentList = ({ getOneStudent, getAllStudents, students }) => {
  const initialState = {
    name: '',
    email: ''
  }

  const [formState, setFormState] = useState(initialState)
  // const [students, setStudents] = useState([])
  const [viewForm, setViewForm] = useState(false)

  // const getAllStudents = async () => {
  //   const res = await axios.get(`${BASE_URL}/student/all`)
  //   setStudents(res.data)
  // }

  const toggleForm = () => {
    setViewForm(true)
  }

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    axios.post(`${BASE_URL}/student/`, formState)
    setViewForm(false)
    getAllStudents()
  }

  // useEffect(() => {
  //   getAllStudents()
  // }, [])

  return (
    <div>
      <button onClick={toggleForm}>Add Student</button>
      {viewForm ? (
        <div>
          <form onSubmit={handleSubmit}>
            <input
              onChange={handleChange}
              value={formState.name}
              placeholder="name"
              name="name"
            ></input>
            <input
              onChange={handleChange}
              value={formState.email}
              placeholder="email"
              name="email"
            ></input>
            <button>submit</button>
          </form>
        </div>
      ) : null}
      {students
        .sort((a, b) => b.id - a.id)
        .map((student) => (
          <StudentCard
            key={student.id}
            name={student.name}
            onClick={() => getOneStudent(student.id)}
          />
        ))}
    </div>
  )
}
export default StudentList
