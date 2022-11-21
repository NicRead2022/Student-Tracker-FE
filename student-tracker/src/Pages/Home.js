import ClassList from '../components/ClassList'
import Nav from '../components/Nav'
import StudentList from '../components/StudentList'
import { useState } from 'react'

const Home = () => {
  const [viewStudents, setViewStudents] = useState(false)
  const [viewClasses, setViewClasses] = useState(false)

  return (
    <div>
      <Nav setViewClasses={setViewClasses} setViewStudents={setViewStudents} />

      {viewStudents ? <StudentList /> : <ClassList />}
    </div>
  )
}
export default Home
