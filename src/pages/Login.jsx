import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Login.css';
import googleLogo from '../assets/google-logo.png';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const payload = {
      email: email,
      password: password
    }
  
    try {
      const response = await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });
  
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Invalid credentials');
      }
  
      console.log("User logged in:", data);
  
      localStorage.setItem('token', data.token);
      localStorage.setItem('userRole', data.role);
      localStorage.setItem("user_id", data.user_id);
      localStorage.setItem('userEmail', data.email);
  
      alert("Login successful!");
      navigate('/campaign-creation'); 
  
    } catch (error) {
      console.error("Login error:", error);
      alert(error.message || "Login failed");
    }
  };
  

  const handleGoogleSignIn = () => {
    window.google.accounts.id.initialize({
      client_id: "268718797943-ka8u44ld2gaa75losn91l7vo81iccd2d.apps.googleusercontent.com",
      callback: handleCredentialResponse
      
    });
    console.log("Google Sign-In initialized");
    window.google.accounts.id.prompt();  // shows popup
  };
  
  const handleCredentialResponse = async (response) => {
    const idToken = response.credential; // this is the id_token
  
    try {
      console.log("Google ID Token:", idToken);
      const serverResponse = await fetch('http://localhost:8080/google-login', {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id_token: idToken })
      });
  
      const data = await serverResponse.json();
  
      if (!serverResponse.ok) throw new Error(data.message || "Google login failed");
  
      console.log("Google login success:", data);
  
      localStorage.setItem('token', data.token);
      localStorage.setItem('userRole', data.role);
      localStorage.setItem("user_id", data.user_id);
      localStorage.setItem('userEmail', data.email);
  
      alert("Google login successful!");
      navigate('/campaign-creation');
  
    } catch (error) {
      console.error("Google login error:", error);
      alert(error.message || "Login failed");
    }
  };
  
  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        <div className="button-group">
          <p className='forgot-link'><Link to= "/forget-password">Forgot Password</Link></p>
          <button type="submit">Login</button>
          <button 
            type="button" 
            className="google-signin-button" 
            onClick={handleGoogleSignIn}
          >
            <img src={googleLogo} alt="Google Logo" />
            Sign in with Google
          </button>
        </div>
      </form>
      <div className="additional-links">
        <p>Don't have an account? <Link to="/registration">Register here</Link></p>
      </div>
    </div>
  );
}

export default Login;
