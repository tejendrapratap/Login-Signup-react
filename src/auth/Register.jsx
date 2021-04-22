import { Formik, Form } from "formik";
import * as Yup from "yup";
import sign from "../icons/signup.svg";

const Register = () => {
  const mobileRegex = /^[6-9]\d{9}$/;

  const validate = Yup.object({
    name: Yup.string()
      .max(20, "Name must be 20 Charcters or Less")
      .required("Name is Required"),
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
        confirmPassword: "",
      }}
      validationSchema={validate}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-4 mt-5 p-4 border border-secondary shadow rounded bcg">
              <div className="container-fluid bg-warning p-2 text-center fnt">
                <h3>
                  <img src={sign} alt="sign up" />
                  Register
                </h3>
              </div>
              <Form onSubmit={handleSubmit} className="mt-3">
                <div className="form-group mb-3">
                  <label
                    htmlFor={values.name}
                    className="form-label text-white"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      errors.name && touched.name && "is-invalid"
                    }`}
                    name="name"
                    autoComplete="off"
                    placeholder="Enter your name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.name && touched.name && (
                    <div className="mb-4 error">{errors.name}</div>
                  )}
                </div>
                <div className="form-group mb-3">
                  <label
                    htmlFor={values.email}
                    className="form-label text-white"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    className={`form-control ${
                      errors.email && touched.email && "is-invalid"
                    }`}
                    name="email"
                    autoComplete="off"
                    placeholder="Enter your email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.email && touched.email && (
                    <div className="error">{errors.email}</div>
                  )}
                </div>
                <div className="form-group mb-3">
                  <label
                    htmlFor={values.mobile}
                    className="form-label text-white"
                  >
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    className={`form-control ${
                      errors.mobile && touched.mobile && "is-invalid"
                    }`}
                    name="mobile"
                    autoComplete="off"
                    placeholder="Enter Mobile Number"
                    value={values.mobile}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.mobile && touched.mobile && (
                    <div className="error">{errors.mobile}</div>
                  )}
                </div>
                <div className="form-group mb-3">
                  <label
                    htmlFor={values.password}
                    className="form-label text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    className={`form-control ${
                      errors.password && touched.password && "is-invalid"
                    }`}
                    name="password"
                    autoComplete="off"
                    placeholder="Enter password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.password && touched.password && (
                    <div className="error">{errors.password}</div>
                  )}
                </div>
                <div className="form-group mb-3">
                  <label
                    htmlFor={values.confirmPassword}
                    className="form-label text-white"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className={`form-control ${
                      errors.confirmPassword &&
                      touched.confirmPassword &&
                      "is-invalid"
                    }`}
                    name="confirmPassword"
                    autoComplete="off"
                    placeholder="Re-enter password"
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.confirmPassword && touched.confirmPassword && (
                    <div className="error">{errors.confirmPassword}</div>
                  )}
                </div>
                <button
                  disabled={
                    !values.name ||
                    !values.email ||
                    !values.mobile ||
                    !values.password ||
                    !values.confirmPassword
                  }
                  className="btn btn-primary mt-4 w-100"
                >
                  Submit
                </button>
              </Form>
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
