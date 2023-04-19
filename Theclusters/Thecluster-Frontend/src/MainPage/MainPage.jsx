import Button from "./Button";
import { Navigate } from "react-router-dom";
import React from "react";

function MainPage() {
  const [goToCompose, stGoToCompose] = React.useState(false);
  const [goToRequests, stGoToRequests] = React.useState(false);

  if (goToCompose) {
    return <Navigate  to="/Compose" />;
  }
  if (goToRequests) {
    return <Navigate to="/Requests" />;
  }
  return (
    <div className="container text-center my-5">
      <div className="row">
        <h1>Welcome to My App</h1>
      </div>
      <div className="row">
        <p className="lead">
          This app will help you coordinate with other students for senior
          project for capstone.
        </p>
      </div>

      <div className="row d-flex justify-content-center">
        <Button
          name="Add request"
          onClick={() => {
            stGoToCompose(true);
          }}
        />
        <Button
          name="View requests"
          onClick={() => {
            stGoToRequests(true);
          }}
        />
      </div>
    </div>
  );
}

export default MainPage;
