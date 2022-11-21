import './CSS/App.css'
import Home from './Pages/Home'
import OneClass from './Pages/OneClass'
import OneStudent from './Pages/OneStudent'
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { BASE_URL } from './globals'
import axios from 'axios'

function App() {
  const [viewStudents, setViewStudents] = useState(false)
  const [viewClasses, setViewClasses] = useState(false)
  const [students, setStudents] = useState([])

  const getAllStudents = async () => {
    const res = await axios.get(`${BASE_URL}/student/all`)
    setStudents(res.data)
  }

  useEffect(() => {
    getAllStudents()
  }, [students])

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Home
              setViewClasses={setViewClasses}
              setViewStudents={setViewStudents}
              viewStudents={viewStudents}
              getAllStudents={getAllStudents}
              students={students}
            />
          }
        />
        <Route
          path="/student/:id"
          element={<OneStudent setViewStudents={setViewStudents} />}
        />
        <Route path="/class/:id" element={<OneClass />} />
      </Routes>
    </div>
  )
}

export default App
