import StudentCard from './StudentCard'
import axios from 'axios'
import { BASE_URL } from '../globals'
import { useState, useEffect } from 'react'

const StudentList = ({ getOneStudent }) => {
  const [students, setStudents] = useState([])
  const [viewForm, setViewForm] = useState(false)

  const getAllStudents = async () => {
    const res = await axios.get(`${BASE_URL}/student/all`)
    console.log(res.data)
    setStudents(res.data)
  }

  const toggleForm = () => {
    setViewForm(true)
  }

  useEffect(() => {
    getAllStudents()
  }, [])

  return (
    <div>
      <button onClick={toggleForm}>Add Student</button>
      {viewForm ? <div></div> : null}
      {students.map((student) => (
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
