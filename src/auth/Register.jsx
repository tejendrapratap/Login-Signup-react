import { useState } from "react";
import RegisterForm from "../components/RegisterForm";
import { Formik } from "formik";
import * as Yup from "yup";

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

  const mobileRegex = /^[6-9]\d{9}$/;

  const validate = Yup.object({
    name: Yup.string()
      .max(20, "Name must be 20 Charcters or Less")
      .required("Required"),
    email: Yup.string().email("Email is Invalid").required("Email is Required"),
    mobile: Yup.string()
      .matches(mobileRegex, "Phone number is not valid")
      .required("Mobile number is Required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match")
      .required("Password Confirmation is Required"),
  });

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        mobile: "",
        password: "",
      }}
      validationSchema={validate}
    >
      {(formik) => (
        <div className="container">
          {console.log(formik)}
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
      )}
    </Formik>
  );
};

export default Register;
