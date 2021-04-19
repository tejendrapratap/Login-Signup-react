import { useState } from "react";
import RegisterForm from "../components/RegisterForm";

const Register = ({ history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="container mt-4">
        <div className="row d-flex justify-content-center">
          <div className="col-md-4 mt-5 p-4 border border-secondary rounded bcg">
            <div className="container-fluid bg-warning p-2 mt-3 text-center fnt">
              <h3>Register</h3>
            </div>
            <RegisterForm
              name={name}
              setName={setName}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              mobile={mobile}
              setMobile={setMobile}
              handleSubmit={handleSubmit}
            />
            <div className="container-fluid mt-5 mb-3 text-white">
              Already a User?{" "}
              <a className="btn-color" href="\login">
                Log In
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
