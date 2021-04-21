import { useState } from "react";
import LoginForm from "../components/LoginForm";
import sign from "../icons/login.svg";

const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {};

  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-4 mt-5 p-4 border border-secondary shadow rounded bcg">
            <div className="container-fluid bg-warning p-2 mt-3 text-center fnt">
              <h3>
                <img src={sign} alt="sign up" />
                Log In
              </h3>
            </div>
            <LoginForm
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              handleSubmit={handleSubmit}
            />
            <div className="container-fluid mt-5 mb-3 text-white">
              Not Registered?{" "}
              <a className="btn-color" href="\register">
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
