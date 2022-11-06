import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

const Register = () => {
  const { createUser, googleSignIn } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((e) => console.error(e));
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((e) => console.error(e));
  };

  return (
    <div className="mt-20 card flex-shrink-0 w-full max-w-sm mx-auto shadow-2xl bg-base-100">
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="">
            <h1 className="text-4xl font-bold mb-5">Sign In</h1>
            <div className="form-control mb-5">
              <label className="label">
                <span className="label-text">User name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="User name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mb-5">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="Email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                name="password"
                placeholder="Password"
                className="input input-bordered"
              />
            </div>
            <p>
              <small>
                Already have an account?{" "}
                <Link to="/login" className="underline text-primary">
                  Please Login
                </Link>
              </small>
            </p>
            <div className="form-control mt-6">
              <input
                type="submit"
                value="Submit"
                className="btn btn-primary text-white"
              />
            </div>
          </div>
        </form>
        <div className="my-5">
          <button
            onClick={handleGoogleSignIn}
            className="btn btn-outline w-full"
          >
            Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
