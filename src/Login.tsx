import { useState } from "react";
import React from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaApple } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
import { validateEmail, validatePassword } from "./validations";

export const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let formErrors: { email?: string; password?: string } = {};

    if (!validateEmail(email)) {
      formErrors.email = "Invalid email format";
    }
    if (!validatePassword(password)) {
      formErrors.password =
        "Password must be at least 8 characters, include an uppercase letter, a number, and a special character.";
    }

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      console.log("Login Successful:", { email, password });
      // Navigate to another page if needed
    }
  };

  return (
    <div className="container d-flex align-items-center justify-content-center vh-100">
      <div className="row w-100">
        {/* Left Side - Image Section */}
        <div className="col-md-6"></div>

        {/* Right Side - Login Form */}
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <div className="login-box p-4 rounded shadow bg-white">
            <h2 className="text">
              Welcome to <span className="text-success">LOREM</span>
            </h2>
            <h1 className="fw-bold">Sign in</h1>

            {/* Social Login */}
            <div className="d-flex justify-content-start gap-4 my-4">
              <button className="google-login btn border border-0 d-flex align-items-center gap-4 px-3">
                <FcGoogle size={20} /> Sign in with Google
              </button>
              <button className="facebook btn border border-0 p-2">
                <FaFacebook size={24} className="text-primary" />
              </button>
              <button className="apple btn border border-0 p-2">
                <FaApple size={24} />
              </button>
            </div>

            {/* ✅ Form with Custom Validations */}
            <form onSubmit={handleSubmit}>
              {/* Email Field */}
              <div className="mb-4 text-start">
                <label className="form-label">Enter your username or email address</label>
                <input
                  type="text"
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  placeholder="Username or email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
              </div>

              {/* Password Field */}
              <div className="mb-3 position-relative text-start">
                <label className="form-label">Enter your Password</label>
                <input
                  type={passwordVisible ? "text" : "password"}
                  className={`form-control ${errors.password ? "is-invalid" : ""}`}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span
                  className="eye-icon position-absolute end-0 me-3"
                  style={{ cursor: "pointer" }}
                  onClick={() => setPasswordVisible(!passwordVisible)}
                >
                  {passwordVisible ? <FaEye /> : <FaEyeSlash />}
                </span>
                {errors.password && <div className="invalid-feedback">{errors.password}</div>}
              </div>

              {/* Forgot Password */}
              <div className="text-end mb-3">
                <a href="./forgotpassword" className="text-primary text-decoration-none">
                  Forgot Password?
                </a>
              </div>

              {/* Sign In Button */}
              <button type="submit" className="signin-button btn btn-success w-100 py-2">
                Sign in
              </button>
            </form>

            {/* Sign Up */}
            <div className="text-center mt-3">
              No Account?
              <span
                className="signup-text text-primary text-decoration-none"
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/signup")}
              >
                Sign up
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div>Hi</div>
  );
};


