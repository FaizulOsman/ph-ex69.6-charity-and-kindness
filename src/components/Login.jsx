import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

const Login = () => {
  const { logIn, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    logIn(email, password)
      .then((result) => {
        const user = result.user;
        const currentUser = { email: user.email };
        console.log(user);

        // get JWT token
        fetch("http://localhost:5000/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("charity-token", data.token);
            console.log(data);
          });

        toast.success("Successfully logged in");
        form.reset();
        navigate("/");
      })
      .catch((e) => {
        console.error(e);
        toast.error("Something went wrong");
      });
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
        <form onSubmit={handleSubmit} className="">
          <div className="">
            <h1 className="text-4xl font-bold mb-5">Login</h1>
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
                Don't have an account?{" "}
                <Link to="/register" className="underline text-primary">
                  Please Register
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

export default Login;
