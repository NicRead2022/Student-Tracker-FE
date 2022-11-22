import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { BASE_URL } from '../globals'
import '../CSS/OneClass.css'

const OneClass = () => {
  let navigate = useNavigate()
  let { id } = useParams()
  const [aClass, setAClass] = useState([])
  const [students, setStudents] = useState([])
  const [formState, setFormState] = useState({ studentId: NaN, letter: '' })
  const [enroll, setEnroll] = useState(false)
  const [allStudents, setAllStudents] = useState([])
  const [newId, setNewId] = useState({ studentId: NaN })

  const getOneClass = async () => {
    const response = await axios.get(`${BASE_URL}/class/${id}`)
    setAClass(response.data)
    setStudents(response.data.students)
    console.log(students)
  }
  const deleteClass = async () => {
    await axios.delete(`${BASE_URL}/class/${id}`)
    navigate(-1)
  }

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (e, studentId) => {
    await axios.put(`${BASE_URL}/grade/${id}`, {
      studentId: studentId,
      letter: formState.letter
    })
  }

  const returnToAllClasses = () => {
    navigate(`/`)
  }

  const startEnroll = async () => {
    setEnroll(true)
    let everyStudent = await axios.get(`${BASE_URL}/student/all`)
    setAllStudents(everyStudent.data)
    //console.log(allStudents)
  }

  const dontShowStudentTwice = (newStudent) => {
    for (let i = 0; i < students.length; i++) {
      if (students[i].id === newStudent.id) {
        return true
      }
    }
    return false
  }

  const handleEnrollChange = (event) => {
    console.log(event.target.value)
    setNewId({ ...newId, [event.target.id]: event.target.value })
  }

  const handleEnrollSubmit = async () => {
    await axios.put(`${BASE_URL}/grade/enroll/${id}`, newId)
  }

  const viewStudent = (studentId) => {
    navigate(`/student/${studentId}`)
  }

  useEffect(() => {
    getOneClass()
  }, [])

  return (
    <div className="bigdiv">
      <div className="class-name">{aClass.name}</div>
      <button onClick={() => returnToAllClasses()}>Back</button>
      <button onClick={() => startEnroll()}>Enroll New Students</button>
      {enroll ? (
        <form onSubmit={() => handleEnrollSubmit()}>
          <select
            name="studentId"
            id="studentId"
            onChange={(e) => handleEnrollChange(e)}
          >
            {allStudents.map((newStudent) =>
              dontShowStudentTwice(newStudent) ? null : (
                <option value={newStudent.id}>{newStudent.name}</option>
              )
            )}
          </select>
          <button>Enroll Student</button>
        </form>
      ) : (
        <div className="students">
          {students.map((student) => (
            <div className="one-student">
              <div>
                <div onClick={() => viewStudent(student.id)}>
                  Name: {student.name}
                </div>
                <div>Email: {student.email}</div>
              </div>
              <div className="grades">
                <div>Letter Grade: {student.Grades[0].letter}</div>
                <form onSubmit={(e) => handleSubmit(e, student.id)}>
                  <select name="letter" id="letter" onChange={handleChange}>
                    <option value={student.Grades[0].letter}>
                      {student.Grades[0].letter}
                    </option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                    <option value="F">F</option>
                  </select>
                  <button>Update Grade</button>
                </form>
                <div>Score Grade: {student.Grades[0].score}</div>
              </div>
            </div>
          ))}
        </div>
      )}
      <hr></hr>
      <button onClick={() => deleteClass()} className="delete-class-btn">
        Delete Class
      </button>
    </div>
  )
}

export default OneClass
