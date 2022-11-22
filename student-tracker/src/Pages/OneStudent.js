import axios from 'axios'
import { BASE_URL } from '../globals'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const OneStudent = ({ setViewStudents }) => {
  let { id } = useParams()
  let navigate = useNavigate()

  const [studentInfo, setStudentInfo] = useState({})
  const [studentClasses, setStudentClasses] = useState([])
  const [gpa, setGpa] = useState(null)

  const getStudentInfo = async () => {
    // updateGpa()
    let res = await axios.get(`${BASE_URL}/student/${id}`)
    setStudentInfo(res.data)
    setStudentClasses(res.data.classes)
  }

  const deleteStudent = async () => {
    await axios.delete(`${BASE_URL}/student/${id}`)
    setViewStudents(true)
    navigate('/')
  }

  const calculateGpa = async () => {}

  const updateGpa = async () => {
    // await calculateGpa()
    let res = await axios.get(`${BASE_URL}/student/${id}`)
    let allgrades = 0
    for (let i = 0; i < res.data.classes.length; i++) {
      allgrades += res.data.classes[i].Grades[0].score
    }
    let GPA = allgrades / res.data.classes.length
    let roundedGPA = GPA.toFixed(2)
    setGpa(roundedGPA)
    await axios.put(`${BASE_URL}/student/${id}`, { gpa: gpa })
    await getStudentInfo()
  }

  useEffect(() => {
    updateGpa()
    // getStudentInfo()
    // calculateGpa()
  }, [])

  return (
    <div>
      <h1>{studentInfo.name}</h1>
      <h3>{studentInfo.email}</h3>
      <h3>{studentInfo.gpa}</h3>
      <div>
        {studentClasses.map((element) => (
          <div>
            <h4>{element.name}</h4>
            <h4>{element.Grades[0].letter}</h4>
            <h4>{element.Grades[0].score}</h4>
          </div>
        ))}
      </div>
      <button onClick={deleteStudent}>delete student</button>
    </div>
  )
}

export default OneStudent
