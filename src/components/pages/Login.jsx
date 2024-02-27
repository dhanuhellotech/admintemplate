import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log("Login button clicked.");

    // Perform authentication logic here
    const validEmail = 'gpreschool@gmail.com';
    const validPassword = '123456';

    if (email === validEmail && password === validPassword) {
      console.log("Login successful.");
      onLogin(); // Call the callback function passed from the parent component
      navigate('/'); // Redirect to the home page upon successful login
    } else {
      setError('Invalid credentials. Please enter correct email and password.');
    }
  };

  console.log("Rendering Login component.");

  return (
    <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
      <div className="position-relative overflow-hidden radial-gradient min-vh-100 d-flex align-items-center justify-content-center">
        <div className="d-flex align-items-center justify-content-center w-100">
          <div className="row justify-content-center w-100">
            <div className="col-md-8 col-lg-6 col-xxl-3">
              <div className="card mb-0">
                <div className="card-body">
                  <Link to="/" className="text-nowrap logo-img text-center d-block py-3 w-100">
                    <img src="../assets/images/logos/dark-logo.svg" width={180} alt="Logo" />
                  </Link>
                  <h2 className="text-center mb-4">Login</h2>
                  {error && <div className="alert alert-danger">{error}</div>}
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password:</label>
                    <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                  </div>
                  <button type="button" className="btn btn-primary w-100 mb-3" onClick={handleLogin}>Login</button>
                  <p className="text-center">Don't have an account? <Link to="/register">Register</Link></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
