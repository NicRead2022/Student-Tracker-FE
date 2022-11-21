import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../globals'

const OneClass = () => {
  let { id } = useParams()
  const [aClass, setAClass] = useState([])
  const [students, setStudents] = useState([])

  const getOneClass = async () => {
    const response = await axios.get(`${BASE_URL}/class/${id}`)
    setAClass(response.data)
    setStudents(response.data.students)
  }

  useEffect(() => {
    getOneClass()
  }, [])

  return (
    <>
      <div>{aClass.name}</div>
      {students.map((student) => (
        <>
          <div>Name: {student.name}</div>
          <div>Email: {student.email}</div>
          <div>Letter Grade: {student.Grades.letter}</div>
          <div>Score Grade: {student.Grades.score}</div>
        </>
      ))}
    </>
  )
}

export default OneClass
