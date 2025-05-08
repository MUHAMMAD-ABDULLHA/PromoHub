import React, { useState, useRef } from 'react';
import "../ForgetPassword.css";

function ForgetPassword() {
  const [email, setEmail] = useState('');
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [loading, setLoading] = useState(false);
  const inputRefs = useRef([]);

  const handleForgetPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('http://localhost:8080/forget-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();

      if (!response.ok) throw new Error(data.message || 'Failed to send code');

      alert('Verification code sent to your email!');
      setIsCodeSent(true);
    } catch (error) {
      console.error('Error:', error);
      alert(error.message || 'Request failed');
    } finally {
      setLoading(false);
    }
  };

  const handleCodeChange = (index, value) => {
    if (value.length > 1) value = value.slice(-1); // keep last char
    const newCode = [...code];
    newCode[index] = value.toUpperCase(); // optional: force uppercase
    setCode(newCode);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    // Auto-submit if all digits filled
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
    try {
      const response = await fetch('http://localhost:8080/verify-code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, code: enteredCode || code.join('') }),
      });
      const data = await response.json();

      if (!response.ok) throw new Error(data.message || 'Invalid code');

      alert('✅ Code verified! You can now reset your password.');
      // TODO: navigate to reset-password page
    } catch (error) {
      alert(error.message || 'Verification failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto' }}>
      {!isCodeSent ? (
        <form onSubmit={handleForgetPassword}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            disabled={loading}
            style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
          />
          <button type="submit" disabled={loading}>
            {loading ? 'Sending...' : 'Send Verification Code'}
          </button>
        </form>
      ) : (
        <div>
          <p>Enter the 6-digit verification code sent to {email}:</p>
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
            {code.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                id={`code-${index}`}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleCodeChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                style={{
                  width: '40px',
                  height: '40px',
                  fontSize: '24px',
                  textAlign: 'center',
                  textTransform: 'uppercase',
                }}
              />
            ))}
          </div>
          <button onClick={() => handleVerifyCode()} disabled={loading} style={{ marginTop: '15px' }}>
            {loading ? 'Verifying...' : 'Verify Code'}
          </button>
        </div>
      )}
    </div>
  );
}

export default ForgetPassword;
