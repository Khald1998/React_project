
const SignIn = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <form>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input type="text" className="form-control" id="username" />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" id="password" />
            </div>
            <button type="submit" className="btn btn-primary">Sign In</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
