// import React, { useState, useRef } from 'react';
// import "../ForgetPassword.css";

// function ForgetPassword() {
//   const [email, setEmail] = useState('');
//   const [isCodeSent, setIsCodeSent] = useState(false);
//   const [code, setCode] = useState(['', '', '', '', '', '']);
//   const [loading, setLoading] = useState(false);
//   const inputRefs = useRef([]);

//   const handleForgetPassword = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const response = await fetch('http://localhost:8080/forget-password', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email }),
//       });
//       const data = await response.json();

//       if (!response.ok) throw new Error(data.message || 'Failed to send code');

//       alert('Verification code sent to your email!');
//       setIsCodeSent(true);
//     } catch (error) {
//       console.error('Error:', error);
//       alert(error.message || 'Request failed');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleCodeChange = (index, value) => {
//     if (value.length > 1) value = value.slice(-1); // keep last char
//     const newCode = [...code];
//     newCode[index] = value.toUpperCase(); // optional: force uppercase
//     setCode(newCode);

//     if (value && index < 5) {
//       inputRefs.current[index + 1]?.focus();
//     }

//     // Auto-submit if all digits filled
//     if (index === 5 && value && newCode.every((c) => c !== '')) {
//       handleVerifyCode(newCode.join(''));
//     }
//   };

//   const handleKeyDown = (index, e) => {
//     if (e.key === 'Backspace' && !code[index] && index > 0) {
//       inputRefs.current[index - 1]?.focus();
//     }
//   };

//   const handleVerifyCode = async (enteredCode) => {
//     setLoading(true);
//     try {
//       const response = await fetch('http://localhost:8080/verify-code', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, code: enteredCode || code.join('') }),
//       });
//       const data = await response.json();

//       if (!response.ok) throw new Error(data.message || 'Invalid code');

//       alert('✅ Code verified! You can now reset your password.');
//       // TODO: navigate to reset-password page
//     } catch (error) {
//       alert(error.message || 'Verification failed');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{ maxWidth: '400px', margin: 'auto' }}>
//       {!isCodeSent ? (
//         <form onSubmit={handleForgetPassword}>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Enter your email"
//             required
//             disabled={loading}
//             style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
//           />
//           <button type="submit" disabled={loading}>
//             {loading ? 'Sending...' : 'Send Verification Code'}
//           </button>
//         </form>
//       ) : (
//         <div>
//           <p>Enter the 6-digit verification code sent to {email}:</p>
//           <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
//             {code.map((digit, index) => (
//               <input
//                 key={index}
//                 ref={(el) => (inputRefs.current[index] = el)}
//                 id={`code-${index}`}
//                 type="text"
//                 maxLength="1"
//                 value={digit}
//                 onChange={(e) => handleCodeChange(index, e.target.value)}
//                 onKeyDown={(e) => handleKeyDown(index, e)}
//                 style={{
//                   width: '40px',
//                   height: '40px',
//                   fontSize: '24px',
//                   textAlign: 'center',
//                   textTransform: 'uppercase',
//                 }}
//               />
//             ))}
//           </div>
//           <button onClick={() => handleVerifyCode()} disabled={loading} style={{ marginTop: '15px' }}>
//             {loading ? 'Verifying...' : 'Verify Code'}
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default ForgetPassword;
// import React, { useState, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Email, VpnKey, ArrowBack } from '@mui/icons-material';
// import '../ForgetPassword.css';

// function ForgetPassword() {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState('');
//   const [isCodeSent, setIsCodeSent] = useState(false);
//   const [code, setCode] = useState(['', '', '', '', '', '']);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const inputRefs = useRef([]);

//   const handleForgetPassword = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');
//     try {
//       const response = await fetch('http://localhost:8080/forget-password', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email }),
//       });
//       const data = await response.json();

//       if (!response.ok) throw new Error(data.message || 'Failed to send code');

//       setIsCodeSent(true);
//     } catch (error) {
//       console.error('Error:', error);
//       setError(error.message || 'Request failed. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleCodeChange = (index, value) => {
//     if (value.length > 1) value = value.slice(-1);
//     const newCode = [...code];
//     newCode[index] = value.toUpperCase();
//     setCode(newCode);

//     if (value && index < 5) {
//       inputRefs.current[index + 1]?.focus();
//     }

//     if (index === 5 && value && newCode.every((c) => c !== '')) {
//       handleVerifyCode(newCode.join(''));
//     }
//   };

//   const handleKeyDown = (index, e) => {
//     if (e.key === 'Backspace' && !code[index] && index > 0) {
//       inputRefs.current[index - 1]?.focus();
//     }
//   };

//   const handleVerifyCode = async (enteredCode) => {
//     setLoading(true);
//     setError('');
//     try {
//       const response = await fetch('http://localhost:8080/verify-code', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, code: enteredCode || code.join('') }),
//       });
//       const data = await response.json();

//       if (!response.ok) throw new Error(data.message || 'Invalid code');

//       navigate('/reset-password', { state: { email } });
//     } catch (error) {
//       setError(error.message || 'Verification failed. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="promohub-forgot-container">
//       <div className="promohub-forgot-card">
//         <button className="promohub-back-button" onClick={() => navigate(-1)}>
//           <ArrowBack />
//         </button>

//         <div className="promohub-logo">
//           <svg viewBox="0 0 24 24" width="40" height="40" fill="#4F46E5">
//             <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 22c-5.5 0-10-4.5-10-10S6.5 2 12 2s10 4.5 10 10-4.5 10-10 10z"/>
//             <path d="M12 4c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"/>
//             <path d="M12 8c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
//           </svg>
//           <h1>PromoHub</h1>
//         </div>

//         <h2>Reset your password</h2>
        
//         {error && <div className="promohub-error-message">{error}</div>}

//         {!isCodeSent ? (
//           <form onSubmit={handleForgetPassword} className="promohub-email-form">
//             <p className="promohub-instructions">
//               Enter your email address and we'll send you a verification code to reset your password.
//             </p>
            
//             <div className="promohub-input-group">
//               <Email className="promohub-input-icon" />
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Email address"
//                 required
//                 disabled={loading}
//               />
//             </div>

//             <button 
//               type="submit" 
//               className="promohub-send-button"
//               disabled={loading}
//             >
//               {loading ? 'Sending code...' : 'Send verification code'}
//             </button>
//           </form>
//         ) : (
//           <div className="promohub-code-verification">
//             <p className="promohub-instructions">
//               We sent a 6-digit code to <strong>{email}</strong>. Enter it below to continue.
//             </p>
            
//             <div className="promohub-code-inputs">
//               {code.map((digit, index) => (
//                 <input
//                   key={index}
//                   ref={(el) => (inputRefs.current[index] = el)}
//                   type="text"
//                   maxLength="1"
//                   value={digit}
//                   onChange={(e) => handleCodeChange(index, e.target.value)}
//                   onKeyDown={(e) => handleKeyDown(index, e)}
//                   disabled={loading}
//                 />
//               ))}
//             </div>

//             <button 
//               onClick={() => handleVerifyCode()} 
//               className="promohub-verify-button"
//               disabled={loading || code.some(c => c === '')}
//             >
//               {loading ? 'Verifying...' : 'Verify code'}
//             </button>

//             <p className="promohub-resend-link">
//               Didn't receive a code? <button type="button" onClick={handleForgetPassword}>Resend code</button>
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default ForgetPassword;
import React, { useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Email, ArrowBack } from '@mui/icons-material';
import '../ForgetPassword.css';

function ForgetPassword() {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState(location.state?.email || '');
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [isCodeVerified, setIsCodeVerified] = useState(false);
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [newPasswordError, setNewPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const inputRefs = useRef([]);

  const handleForgetPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const response = await fetch('http://localhost:8080/forget-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();

      if (!response.ok) throw new Error(data.error || 'Failed to send code');

      setIsCodeSent(true);
    } catch (error) {
      console.error('Error:', error);
      setError(error.message || 'Request failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleCodeChange = (index, value) => {
    if (value.length > 1) value = value.slice(-1);
    const newCode = [...code];
    newCode[index] = value.toUpperCase();
    setCode(newCode);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    if (index === 5 && value && newCode.every((c) => c !== '')) {
      handleVerifyCode(newCode.join(''));
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerifyCode = async (enteredCode) => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch('http://localhost:8080/verify-code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, code: enteredCode || code.join('') }),
      });
      const data = await response.json();

      if (!response.ok) throw new Error(data.error || 'Invalid code');

      setIsCodeVerified(true);
    } catch (error) {
      setError(error.message || 'Verification failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const validatePasswords = () => {
    let isValid = true;
    setNewPasswordError('');
    setConfirmPasswordError('');

    if (newPassword.length < 8) {
      setNewPasswordError('Password must be at least 8 characters long');
      isValid = false;
    }

    if (newPassword !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
      isValid = false;
    }

    return isValid;
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Validate passwords before API call
    if (!validatePasswords()) {
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, newPassword }),
      });
      const data = await response.json();

      if (!response.ok) throw new Error(data.error || 'Failed to reset password');

      navigate('/login', { state: { message: 'Password reset successfully. Please log in.' } });
    } catch (error) {
      setError(error.message || 'Password reset failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="promohub-forgot-container">
      <div className="promohub-forgot-card">
        <button className="promohub-back-button" onClick={() => navigate(-1)}>
          <ArrowBack />
        </button>

        <div className="promohub-logo">
          <svg viewBox="0 0 24 24" width="40" height="40" fill="#4F46E5">
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 22c-5.5 0-10-4.5-10-10S6.5 2 12 2s10 4.5 10 10-4.5 10-10 10z"/>
            <path d="M12 4c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"/>
            <path d="M12 8c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
          </svg>
          <h1>PromoHub</h1>
        </div>

        <h2>Reset your password</h2>
        
        {error && <div className="promohub-error-message">{error}</div>}

        {!isCodeSent ? (
          <form onSubmit={handleForgetPassword} className="promohub-email-form">
            <p className="promohub-instructions">
              Enter your email address and we'll send you a verification code to reset your password.
            </p>
            
            <div className="promohub-input-group">
              <Email className="promohub-input-icon" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                required
                disabled={loading}
              />
            </div>

            <button 
              type="submit" 
              className="promohub-send-button"
              disabled={loading}
            >
              {loading ? 'Sending code...' : 'Send verification code'}
            </button>
          </form>
        ) : !isCodeVerified ? (
          <div className="promohub-code-verification">
            <p className="promohub-instructions">
              We sent a 6-digit code to <strong>{email}</strong>. Enter it below to continue.
            </p>
            
            <div className="promohub-code-inputs">
              {code.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleCodeChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  disabled={loading}
                />
              ))}
            </div>

            <button 
              onClick={() => handleVerifyCode()} 
              className="promohub-verify-button"
              disabled={loading || code.some(c => c === '')}
            >
              {loading ? 'Verifying...' : 'Verify code'}
            </button>

            <p className="promohub-resend-link">
              Didn't receive a code? <button type="button" onClick={handleForgetPassword}>Resend code</button>
            </p>
          </div>
        ) : (
          <form onSubmit={handleResetPassword} className="section">
            <h2>Security Settings</h2>
            <div>
              <label>New Password</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => {
                  setNewPassword(e.target.value);
                  setNewPasswordError(e.target.value.length < 8 ? 'Password must be at least 8 characters long' : '');
                }}
                placeholder="Enter new password"
                required
                disabled={loading}
                className={newPasswordError ? 'error-input' : ''}
              />
              {newPasswordError && <div className="promohub-error-message">{newPasswordError}</div>}
            </div>
            <div>
              <label>Confirm Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  setConfirmPasswordError(e.target.value !== newPassword ? 'Passwords do not match' : '');
                }}
                placeholder="Confirm new password"
                required
                disabled={loading}
                className={confirmPasswordError ? 'error-input' : ''}
              />
              {confirmPasswordError && <div className="promohub-error-message">{confirmPasswordError}</div>}
            </div>
            <button 
              type="submit" 
              className="Change"
              disabled={loading || newPasswordError || confirmPasswordError}
            >
              {loading ? 'Saving...' : 'Save Security Settings'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default ForgetPassword;