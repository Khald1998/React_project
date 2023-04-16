
function Content(props) {

  return (
    <div className="text-center p-5 m-5">
      <h1>Your name is </h1>
      <div>
        <p>
          {props.name}
        </p>
      </div>
    </div>
  )
}

export default Content
