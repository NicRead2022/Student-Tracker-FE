import '../CSS/Home.css'

const ClassCard = (props) => {
  return (
    <div>
      <img
        className="course-img"
        src="https://static.vecteezy.com/system/resources/previews/003/303/818/original/empty-classroom-scene-with-interior-decoration-and-objects-free-vector.jpg"
        alt=""
      ></img>
      <p>{props.name}</p>
    </div>
  )
}
export default ClassCard
