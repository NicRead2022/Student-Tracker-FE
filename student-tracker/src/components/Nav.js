const Nav = ({ setViewClasses, setViewStudents }) => {
  const toggleViewClasses = () => {
    setViewClasses(true)
    setViewStudents(false)
  }
  const toggleViewStudents = () => {
    setViewStudents(true)
    setViewClasses(false)
  }

  return (
    <div>
      <h1>Student Tracker</h1>
      <button onClick={() => toggleViewStudents()} className="student-button">
        Students
      </button>
      <button onClick={toggleViewClasses} className="class-button">
        Classes
      </button>
    </div>
  )
}

export default Nav
