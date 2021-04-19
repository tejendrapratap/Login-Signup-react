const LoginForm = ({
  email,
  setEmail,
  password,
  setPassword,
  handleSubmit,
}) => (
  <form onSubmit={handleSubmit} className="mt-3">
    <div className="form-group mb-3">
      <label className="form-label text-white">Email</label>
      <input
        type="email"
        className="form-control"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
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
    <button
      disabled={!email || !password}
      className="btn btn-primary mt-4 w-100"
    >
      Submit
    </button>
  </form>
);

export default LoginForm;
