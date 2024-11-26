
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate for redirect
import '../Style/Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGithub, faLinkedinIn, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

function Login() {
  const [isActive, setIsActive] = useState(false);
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');
  const [signUpName, setSignUpName] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [loginMode, setLoginMode] = useState(true); // true for sign-in, false for sign-up
  
  const navigate = useNavigate(); // Initialize the useNavigate hook for redirection

  // Toggle between forms
  const handleSignUpClick = () => {
    setIsActive(true);
    setLoginMode(false); 
  };

  const handleSignInClick = () => {
    setIsActive(false);
    setLoginMode(true);
  };

  // Handle Sign-In form submission
  const handleSignInSubmit = (e) => {
    e.preventDefault(); // Prevent form submission refresh
    
    // Check if credentials match (admin / admin123)
    if (signInEmail === 'admin'  && signInPassword === 'admin123'|| signInEmail === ''  && signInPassword === '') {
      // Redirect to the homepage if login is successful
      console.log('Login Successful');
      navigate('/MainPage');  // Redirect to homepage
    } else {
      // Show an error if the credentials are incorrect
      console.log('Invalid credentials');
      alert('Invalid Email or Password');
    }
  };

  // Handle Sign-Up form submission (example, not functional yet)
  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    console.log("Sign-Up Name:", signUpName);
    console.log("Sign-Up Email:", signUpEmail);
    console.log("Sign-Up Password:", signUpPassword);
  };

  return (
    <div className={`container ${isActive ? 'active' : ''}`} id="container">
      {loginMode ? (
        <div className="form-container sign-in">
          <form onSubmit={handleSignInSubmit}>
            <h1>Sign In</h1>
            <div className="social-icons">
              <a href="#" className="icon">
                <FontAwesomeIcon icon={faGooglePlusG} />
              </a>
              <a href="#" className="icon">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#" className="icon">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="#" className="icon">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
            <span>or use your email password</span>
            <input 
              type="text" 
              placeholder="Email" 
              value={signInEmail} 
              onChange={(e) => setSignInEmail(e.target.value)} 
            />
            <input  
              type="password" 
              placeholder="Password" 
              value={signInPassword} 
              onChange={(e) => setSignInPassword(e.target.value)} 
            />
            <a href="#">Forget Your Password?</a>
            <button type="submit">Sign In</button>
          </form>
        </div>
      ) : (
        <div className="form-container sign-up">
          <form onSubmit={handleSignUpSubmit}>
            <h1>Create Account</h1>
            <div className="social-icons">
              <a href="#" className="icon">
                <FontAwesomeIcon icon={faGooglePlusG} />
              </a>
              <a href="#" className="icon">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#" className="icon">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="#" className="icon">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
            <span>Register to start trading stocks in real time</span>
            <input 
              type="text" 
              placeholder="Name" 
              value={signUpName} 
              onChange={(e) => setSignUpName(e.target.value)} 
            />
            <input 
              type="email" 
              placeholder="Email" 
              value={signUpEmail} 
              onChange={(e) => setSignUpEmail(e.target.value)} 
            />
            <input 
              type="password" 
              placeholder="Password" 
              value={signUpPassword} 
              onChange={(e) => setSignUpPassword(e.target.value)} 
            />
            <button type="submit">Sign Up</button>
          </form>
        </div>
      )}
      
      {/* Toggle Panels */}
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Welcome Back!</h1>
            <p>Enter your details to access live stock market data and trade in real time</p>
            <button className="hidden" id="login" onClick={handleSignInClick}>
              Sign In
            </button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Hello, Investor!</h1>
            <p>Register now to monitor stock prices and manage your trades in real time</p>
            <button className="hidden" id="register" onClick={handleSignUpClick}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

