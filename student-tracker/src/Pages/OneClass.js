import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { BASE_URL } from '../globals'

const OneClass = () => {
  let navigate = useNavigate()
  let { id } = useParams()
  const [aClass, setAClass] = useState([])
  const [students, setStudents] = useState([])

  const getOneClass = async () => {
    const response = await axios.get(`${BASE_URL}/class/${id}`)
    setAClass(response.data)
    setStudents(response.data.students)
    console.log(response.data.students)
  }
  const deleteClass = async () => {
    await axios.delete(`${BASE_URL}/class/${id}`)
    // setAClass(null)
    navigate(-1)
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
          <div>Letter Grade: {student.Grades[0].letter}</div>
          <div>Score Grade: {student.Grades[0].score}</div>
        </>
      ))}
    <button onClick={() => deleteClass()} className='delete-class-btn'>Delete Class</button>
    </>
  )
}

export default OneClass
