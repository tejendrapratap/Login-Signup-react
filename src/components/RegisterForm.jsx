import { Form, ErrorMessage } from "formik";
const RegisterForm = ({
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
  mobile,
  setMobile,
  handleSubmit,
}) => (
  <Form onSubmit={handleSubmit} className="mt-3">
    <div className="form-group mb-3">
      <label className="form-label text-white">Name</label>
      <input
        type="text"
        className="form-control"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <ErrorMessage />
    </div>
    <div className="form-group mb-3">
      <label className="form-label text-white">Email address</label>
      <input
        type="email"
        className="form-control"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
    <div className="form-group mb-3">
      <label className="form-label text-white">Mobile Number</label>
      <input
        type="tel"
        className="form-control"
        placeholder="Enter Mobile Number"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
      />
    </div>
    <div className="form-group mb-3">
      <label className="form-label text-white">Password</label>
      <input
        type="password"
        className="form-control"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
    <div className="form-group mb-3">
      <label className="form-label text-white">Confirm Password</label>
      <input
        type="password"
        className="form-control"
        placeholder="Re-enter password"
      />
    </div>
    <button
      disabled={!name || !email || !mobile || !password}
      className="btn btn-primary mt-4 w-100"
    >
      Submit
    </button>
  </Form>
);

export default RegisterForm;
