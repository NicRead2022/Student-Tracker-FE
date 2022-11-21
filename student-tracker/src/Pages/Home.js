import ClassList from '../components/ClassList'
import Nav from '../components/Nav'
import StudentList from '../components/StudentList'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const [viewStudents, setViewStudents] = useState(false)
  const [viewClasses, setViewClasses] = useState(false)
  let navigate = useNavigate()

  const getOneStudent = (id) => {
    navigate(`/student/${id}`)
  }

  const getOneClass = (id) => {
    navigate(`/class/${id}`)
  }

  return (
    <div>
      <Nav setViewClasses={setViewClasses} setViewStudents={setViewStudents} />

      {viewStudents ? (
        <StudentList getOneStudent={getOneStudent} />
      ) : (
        <ClassList getOneClass={getOneClass} />
      )}
    </div>
  )
}
export default Home
