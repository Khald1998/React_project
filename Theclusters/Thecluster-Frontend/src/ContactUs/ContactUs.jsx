import React from 'react';

const ContactUs = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h1 className="text-center mb-4">Contact Us</h1>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Enter name" />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input type="email" className="form-control" id="email" placeholder="Enter email" />
              <small className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" className="form-control" id="subject" placeholder="Enter subject" />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea className="form-control" id="message" rows={3} />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
