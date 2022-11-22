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
    <div className="nav-btn">
      <div className="title"><h1>Student Tracker</h1></div>
      <div className="buttons"><button onClick={() => toggleViewStudents()} className="student-button">
        Students
      </button>
      <button onClick={toggleViewClasses} className="class-button">
        Classes
      </button></div>
    </div>
  )
}

export default Nav
