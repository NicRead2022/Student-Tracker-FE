import axios from 'axios'
import { BASE_URL } from '../globals'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const OneStudent = () => {
  let { id } = useParams()
  const [studentInfo, setStudentInfo] = useState({})
  const [studentClasses, setStudentClasses] = useState([])

  const getStudentInfo = async () => {
    let res = await axios.get(`${BASE_URL}/student/${id}`)
    setStudentInfo(res.data)
    setStudentClasses(res.data.classes)
  }

  useEffect(() => {
    getStudentInfo()
  }, [])

  return (
    <div>
      <h1>{studentInfo.name}</h1>
      <h3>{studentInfo.email}</h3>
      <div>
        {studentClasses.map((element) => (
          <div>
            <h4>{element.name}</h4>
            <h4>{element.Grades[0].letter}</h4>
            <h4>{element.Grades[0].score}</h4>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OneStudent
