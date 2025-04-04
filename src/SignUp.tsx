import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./SignUp.css";
import { validateEmail, validatePassword, validatePhoneNumber } from "./validations";
import { FaEye, FaEyeSlash } from "react-icons/fa";

// Define error state type
interface Errors {
  email?: string;
  username?: string;
  contact?: string;
  password?: string;
}

const SignUp: React.FC = () => {
  const history = useHistory(); // Use useHistory instead of useNavigate

  // State Variables
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [contact, setContact] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState<Errors>({});
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let formErrors: Errors = {};

    if (!username.trim()) {
      formErrors.username = "Username is required";
    }
    if (!validateEmail(email)) {
      formErrors.email = "Invalid email format";
    }
    if (!validatePhoneNumber(contact)) {
      formErrors.contact = "Invalid contact number (must be 10 digits)";
    }
    if (!validatePassword(password)) {
      formErrors.password =
        "Password must be at least 8 characters, include an uppercase letter, a number, and a special character.";
    }

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      console.log("Signup Successful:", { username, email, contact, password });
      // Redirect to the login page (or another page after successful signup)
      history.push("/"); // Replace navigate("/") with history.push("/")
    }
  };

  return (
    <div className="container d-flex align-items-center justify-content-center vh-100">
      <div className="row w-100">
        {/* Left Side - Image Section */}
        <div className="col-md-6">
          <div className="bg-image"></div>
        </div>

        {/* Right Side - Signup Form */}
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <div className="sign-box p-4">
            <h2 className="text-dark">
              Welcome to <span className="text-success">LOREM</span>
            </h2>
            <h1 className="fw-bold text-dark">Sign Up</h1>

            <form onSubmit={handleSubmit}>
              {/* Email Field */}
              <div className="mb-4 mt-4 text-start">
                <label className="form-label text-dark">Enter your username or email address</label>
                <input
                  type="text"
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  placeholder="Username or email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
              </div>

              
<div className="row">
  {/* Username Field */}
  <div className="col-md-6 mb-3 text-start">
    <label className="form-label text-dark">Username</label>
    <input
      type="text"
      className={`form-control ${errors.username ? "is-invalid" : ""}`}
      placeholder="Username"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
    />
    {errors.username && <div className="invalid-feedback">{errors.username}</div>}
  </div>

  {/* Contact Number Field */}
  <div className="col-md-6 mb-3 text-start">
    <label className="form-label text-dark">Contact Number</label>
    <input
      type="text"
      className={`form-control ${errors.contact ? "is-invalid" : ""}`}
      placeholder="Contact Number"
      value={contact}
      onChange={(e) => setContact(e.target.value)}
    />
    {errors.contact && <div className="invalid-feedback">{errors.contact}</div>}
  </div>
</div>

              {/* Password Field */}
              <div className="mb-3 text-start">
                <label className="form-label text-dark">Enter your Password</label>
                <div className="position-relative">
                  <input
                    type={passwordVisible ? "text" : "password"}
                    className={`form-control ${errors.password ? "is-invalid" : ""}`}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <span
                    className="eye-icon position-absolute "
     
                    onClick={() => setPasswordVisible(!passwordVisible)}
                  >
                    {passwordVisible ? <FaEye /> : <FaEyeSlash />}
                  </span>
                </div>
                {errors.password && <div className="invalid-feedback">{errors.password}</div>}
              </div>

              {/* Sign Up Button */}
              <button type="submit" className="signup-button btn btn-success w-50 py-2 mt-3">
                Sign Up
              </button>
            </form>

            {/* Already Have an Account? */}
            <div className="text-center mt-3">
              <span className="signup-text text-primary w-100 " onClick={() => history.push("/")}>
                Have an account? Sign in
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
