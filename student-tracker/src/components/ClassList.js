import ClassCard from "./ClassCard";
import axios from 'axios'
import {BASE_URL} from '../globals'
import {useState, useEffect} from 'react'

const ClassList = () => {
const [classes, setClasses] = useState([])
const getAllClasses = async () => {
  const res = await axios.get(`${BASE_URL}/api/classes`)
  setClasses(res.data)
}
useEffect(() => {
  getAllClasses()
},[])
  return (
    <div>
      {classes.map((element) => (
        <ClassCard 
        key={element.id}
        name={element.name}
        />
      ))}
    </div>
  )
}
export default ClassList