const StudentCard = (props) => {
  return (
    <div className="student-div" onClick={props.onClick}>
      <img
        src="https://ucarecdn.com/5edb4cdd-4212-4b87-9a57-d2d402401782/imagesremovebgpreview.png"
        alt=""
      ></img>
      <p>{props.name}</p>
    </div>
  )
}
export default StudentCard
