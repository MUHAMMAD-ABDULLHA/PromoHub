import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Registration.css";

function Registration() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [role, setRole] = useState("");

  // Common fields
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");

  // Brand-specific fields
  const [brand_name, setBrandName] = useState("");
  const [brand_website, setBrandWebsite] = useState("");

  // Influencer-specific fields
  const [social_media, setSocialMediaPlatform] = useState("");
  const [social_media_link, setSocialMediaHandle] = useState("");
  const [followers, setFollowerCount] = useState("");

  const availableRoles = [
    { value: "brandAdmin", label: "Brand (Authentic business/shop)" },
    { value: "influencer", label: "Influencer (with social media presence)" },
    { value: "endUser", label: "End User (Simple User)" },
  ];

  // Navigate to login page
  const handleCancel = () => {
    navigate("/login");
  };

  // Step 1: Account type selection
  const handleStepOneSubmit = (e) => {
    e.preventDefault();
    if (!role) {
      alert("Please select an account type.");
      return;
    }
    setStep(2);
  };

  // Step 2: Registration form submission
  const handleRegister = async (e) => {
    e.preventDefault();

    // Format numerical values properly
    const formattedAge = parseInt(age, 10);
    const formattedFollowerCount =
      role === "influencer" ? parseInt(followers, 10) : undefined;

      const payload = {
        user: {
          full_name: fullName,
          username,
          email,
          password,
          phone,
          age: formattedAge,
          role: role, // ✅ keep role inside user
        },
        ...(role === "brandAdmin" && { brand_name, brand_website }),
        ...(role === "influencer" && {
          social_media,
          social_media_link,
          followers: formattedFollowerCount,
        }),
      };
      
    

    try {
      console.log("Payload:", payload)
      if (role === "endUser") {
        const response = await fetch("http://localhost:8080/register/user", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (!response.ok) {
          const errorData = await response.json();
          console.error("Error response:", errorData);
          throw new Error(errorData.message || "Registration failed");
        }
      }
      else if (role === "brandAdmin") {
        const response = await fetch("http://localhost:8080/register/brand", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
          
        });
        if (!response.ok) {
          const errorData = await response.json();
          console.error("Error response:", errorData);
          throw new Error(errorData.message || "Registration failed");
        }
      }
      else {
        const response = await fetch("http://localhost:8080/register/influencer", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (!response.ok) {
          const errorData = await response.json();
          console.error("Error response:", errorData);
          throw new Error(errorData.message || "Registration failed");
        }
      }  
      alert("Registration successful! Please log in.");
      navigate("/login");
    } catch (error) {
      console.error("Registration error:", error);
      alert(error.message || "Registration failed. Please try again.");
    }
  };

  return (
    <div className="registration-form">
      {/* Step 1: Account Type Selection */}
      {step === 1 && (
        <div className="registration-header">
          <h2>Register</h2>
          <button type="button" className="cancel-button" onClick={handleCancel}>
            &#8592;
          </button>
        </div>
      )}
      {step === 2 && (
        <div className="registration-header">
          <button type="button" className="back-button" onClick={() => setStep(1)}>
            &#8592;
          </button>
          <h2>Register</h2>
        </div>
      )}

      {step === 1 && (
        <form onSubmit={handleStepOneSubmit}>
          <p className="select-role-title">Select Account Type:</p>
          <div className="radio-group">
            {availableRoles.map((r, idx) => (
              <label key={idx} className="radio-label">
                <input
                  type="radio"
                  name="role"
                  value={r.value}
                  onChange={(e) => setRole(e.target.value)}
                />
                <span className="radio-option">{r.label}</span>
              </label>
            ))}
          </div>
          <button type="submit" className="continue-button">Continue</button>
        </form>
      )}

      {step === 2 && (
        <form onSubmit={handleRegister}>
          <div>
            <label>Full Name:</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter your full name"
              required
            />
          </div>
          <div>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              required
            />
          </div>
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
            <label>Phone:</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your phone number"
              required
            />
          </div>
          <div>
            <label>Age:</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Enter your age"
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

          {/* Brand-Specific Fields */}
          {role === "brandAdmin" && (
            <>
              <div>
                <label>Brand Name:</label>
                <input
                  type="text"
                  value={brand_name}
                  onChange={(e) => setBrandName(e.target.value)}
                  placeholder="Enter your brand name"
                  required
                />
              </div>
              <div>
                <label>Brand Website:</label>
                <input
                  type="url"
                  value={brand_website}
                  onChange={(e) => setBrandWebsite(e.target.value)}
                  placeholder="Enter your brand website"
                  required
                />
              </div>
            </>
          )}

          {/* Influencer-Specific Fields */}
          {role === "influencer" && (
            <>
              <div>
                <label>Social Media Platform:</label>
                <select
                  value={social_media}
                  onChange={(e) => setSocialMediaPlatform(e.target.value)}
                  required
                >
                  <option value="" disabled>
                    Select platform
                  </option>
                  <option value="Instagram">Instagram</option>
                  <option value="Twitter">Twitter</option>
                  <option value="Facebook">Facebook</option>
                  <option value="TikTok">TikTok</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label>Social Media Handle:</label>
                <input
                  type="text"
                  value={social_media_link}
                  onChange={(e) => setSocialMediaHandle(e.target.value)}
                  placeholder="Enter your social media handle"
                  required
                />
              </div>
              <div>
                <label>Follower Count:</label>
                <input
                  type="number"
                  value={followers}
                  onChange={(e) => setFollowerCount(e.target.value)}
                  placeholder="Enter your follower count"
                  required
                />
              </div>
            </>
          )}

          <button type="submit" className="register-button">Register</button>
        </form>
      )}
    </div>
  );
}

export default Registration;
