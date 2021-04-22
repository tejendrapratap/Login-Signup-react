import { Formik, Form } from "formik";
import log from "../icons/login.svg";
import * as Yup from "yup";

const Login = ({ history }) => {
  const validate = Yup.object({
    email: Yup.string().email("Email is Invalid").required("Email is Required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is Required"),
  });

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
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
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-md-4 mt-5 p-4 border border-secondary shadow rounded bcg">
              <div className="container-fluid bg-warning p-2 mt-3 text-center fnt">
                <h3>
                  <img src={log} alt="sign up" />
                  Log In
                </h3>
              </div>
              <Form onSubmit={handleSubmit} className="mt-3">
                <div className="form-group mb-3">
                  <label className="form-label text-white">Email</label>
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
                <button
                  disabled={!values.email || !values.password}
                  className="btn btn-primary mt-4 w-100"
                >
                  Submit
                </button>
              </Form>
              <div className="container-fluid mt-5 mb-3 text-white">
                Not Registered?{" "}
                <a className="btn-color" href="\register">
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default Login;
