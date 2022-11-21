const StudentCard = (props) => {
  return (
    <div>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThl_Nkif3vx_D_HsfSylvWnYcWZHyuOTkEig&usqp=CAU"
        alt=""
      ></img>
      <p>{props.name}</p>
    </div>
  )
}
export default StudentCard
