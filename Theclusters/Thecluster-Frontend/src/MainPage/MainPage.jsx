import Button from "./Button";

function MainPage() {
  const handleClick = (props) => {
    const url="http://localhost:3000/"+props.target.value
    console.log(url);
    window.location.href = url;

  };

  return (
    <div className="container text-center my-5">
      <div className="row">
        <h1>Welcome to My App</h1>
      </div>
      <div className="row">
        <p className="lead">
          This is a generic Bootstrap main page in React without a navigation
          bar and footer.
        </p>
      </div>

      <div className="row d-flex justify-content-center">
        <Button name="Add request" value="Compose" onClick={handleClick} />
        <Button name="View requests" value="Requests" onClick={handleClick} />
      </div>
    </div>
  );
}

export default MainPage;
