import StudentCard from './StudentCard'
import axios from 'axios'
import { BASE_URL } from '../globals'
import { useState, useEffect } from 'react'

const StudentList = () => {
  const [students, setStudents] = useState([])
  const getAllStudents = async () => {
    const res = await axios.get(`${BASE_URL}/student/all`)
    console.log(res.data)
    setStudents(res.data)
  }
  useEffect(() => {
    getAllStudents()
  }, [])

  return (
    <div>
      {students.map((student) => (
        <StudentCard key={student.id} name={student.name} />
      ))}
    </div>
  )
}
export default StudentList
