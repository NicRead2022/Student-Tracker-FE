import ClassList from '../components/ClassList'
import Nav from '../components/Nav'
import StudentList from '../components/StudentList'
// import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = ({
  setViewClasses,
  setViewStudents,
  viewStudents,
  getAllStudents,
  students
}) => {
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
        <StudentList
          getOneStudent={getOneStudent}
          getAllStudents={getAllStudents}
          students={students}
        />
      ) : (
        <ClassList getOneClass={getOneClass} />
      )}
    </div>
  )
}
export default Home
