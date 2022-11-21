import ClassCard from './ClassCard'
import axios from 'axios'
import { BASE_URL } from '../globals'
import { useState, useEffect } from 'react'

const ClassList = ({ getOneClass }) => {
  const [classes, setClasses] = useState([])

  const getAllClasses = async () => {
    const res = await axios.get(`${BASE_URL}/class/all`)
    setClasses(res.data)
  }
  useEffect(() => {
    getAllClasses()
  }, [])

  return (
    <div>
      {classes.map((aClass) => (
        <ClassCard
          key={aClass.id}
          name={aClass.name}
          onClick={() => getOneClass(aClass.id)}
        />
      ))}
    </div>
  )
}
export default ClassList
