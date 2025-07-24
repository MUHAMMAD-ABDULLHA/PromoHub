import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Login.css';
import googleLogo from '../assets/google-logo.png';
import { Lock, Mail, Visibility, VisibilityOff } from '@mui/icons-material';
import { toast, Bounce } from 'react-toastify';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
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
  
      localStorage.setItem('token', data.token);
      localStorage.setItem('userRole', data.role);
      localStorage.setItem("user_id", data.user_id);
      localStorage.setItem('username', data.username);
      localStorage.setItem('userEmail', payload.email);
      console.log(localStorage.getItem('user_id'));
      console.log(localStorage.getItem('username'));
      console.log(localStorage.getItem('userEmail'));
      const role = localStorage.getItem('userRole');
      toast.success('Login Successful', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
      });
      if(role === 'brandAdmin'){navigate('/unified-ad-dashboard');}
      else if(role === 'endUser'){navigate('/user-management');}
      else if(role === 'influencer'){navigate('/influencer')}
      else {navigate('/administrator-dashboard')}
  
    } catch (error) {
      console.error("Login error:", error);
      toast.error(error.message || "Login failed", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });

    } finally {
      setLoading(false);
    }
  };
  

  const handleGoogleSignIn = () => {
    if (window.google) {
      window.google.accounts.id.initialize({
        client_id: "268718797943-ka8u44ld2gaa75losn91l7vo81iccd2d.apps.googleusercontent.com",
        callback: handleCredentialResponse
      });
      window.google.accounts.id.prompt();
    } else {
      setError("Google sign-in service not available. Please try again.");
    }
  };
  
  const handleCredentialResponse = async (response) => {
    setLoading(true);
    setError('');
    const idToken = response.credential;
  
    try {
      const serverResponse = await fetch('http://localhost:8080/google-login', {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id_token: idToken })
      });
  
      const data = await serverResponse.json();
  
      if (!serverResponse.ok) throw new Error(data.message || "Google login failed");
  
      localStorage.setItem('token', data.token);
      localStorage.setItem('userRole', data.role);
      localStorage.setItem("user_id", data.user_id);
      localStorage.setItem('userEmail', data.email);
  
      navigate('/unified-ad-dashboard');
  
    } catch (error) {
      console.error("Google login error:", error);
      setError(error.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="phl-login-container">
      <div className="phl-login-card">
        <div className="phl-logo-section">
          <svg viewBox="0 0 24 24" width="40" height="40" fill="#4F46E5">
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 22c-5.5 0-10-4.5-10-10S6.5 2 12 2s10 4.5 10 10-4.5 10-10 10z"/>
            <path d="M12 4c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"/>
            <path d="M12 8c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
          </svg>
          <h1>PromoHub</h1>
        </div>
        
        <h2 className="phl-welcome-title">Welcome back</h2>
        <p className="phl-subtitle">Sign in to your account</p>

        {error && <div className="phl-error-message">{error}</div>}

        <form onSubmit={handleLogin} className="phl-login-form">
          <div className="phl-input-group">
            <Mail className="phl-input-icon" />
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              required
            />
          </div>

          <div className="phl-input-group">
            <Lock className="phl-input-icon" />
            <input 
              type={showPassword ? "text" : "password"} 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
            <button 
              type="button" 
              className="phl-password-toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </button>
          </div>

          <div className="phl-forgot-password">
            <Link to="/forget-password">Forgot password?</Link>
          </div>

          <button 
            type="submit" 
            className="phl-signin-button"
            disabled={loading}
          >
            {loading ? 'Signing in...' : 'Sign in'}
          </button>

          <div className="phl-divider">
            <span>or continue with</span>
          </div>

          <button 
            type="button" 
            className="phl-google-signin-button"
            onClick={handleGoogleSignIn}
            disabled={loading}
          >
            <img src={googleLogo} alt="Google Logo" />
            Google
          </button>
        </form>

        <div className="phl-signup-link">
          Don't have an account? <Link to="/registration">Sign up</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;