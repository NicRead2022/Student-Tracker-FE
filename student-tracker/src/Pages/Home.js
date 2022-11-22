import ClassList from '../components/ClassList'
import Nav from '../components/Nav'
import StudentList from '../components/StudentList'
// import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../CSS/Home.css'
import '../CSS/App.css'

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
      <div className="classes-students">
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
    </div>
  )
}
export default Home
