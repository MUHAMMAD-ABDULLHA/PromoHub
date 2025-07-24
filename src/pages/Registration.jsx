// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "../Registration.css";

// function Registration() {
//   const navigate = useNavigate();
//   const [step, setStep] = useState(1);
//   const [role, setRole] = useState("");

//   // Common fields
//   const [fullName, setFullName] = useState("");
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [phone, setPhone] = useState("");
//   const [age, setAge] = useState("");

//   // Brand-specific fields
//   const [brand_name, setBrandName] = useState("");
//   const [brand_website, setBrandWebsite] = useState("");

//   // Influencer-specific fields
//   const [social_media, setSocialMediaPlatform] = useState("");
//   const [social_media_link, setSocialMediaHandle] = useState("");
//   const [followers, setFollowerCount] = useState("");

//   const availableRoles = [
//     { value: "brandAdmin", label: "Brand (Authentic business/shop)" },
//     { value: "influencer", label: "Influencer (with social media presence)" },
//     { value: "endUser", label: "End User (Simple User)" },
//   ];

//   // Navigate to login page
//   const handleCancel = () => {
//     navigate("/login");
//   };

//   // Step 1: Account type selection
//   const handleStepOneSubmit = (e) => {
//     e.preventDefault();
//     if (!role) {
//       alert("Please select an account type.");
//       return;
//     }
//     setStep(2);
//   };

//   // Step 2: Registration form submission
//   const handleRegister = async (e) => {
//     e.preventDefault();

//     // Format numerical values properly
//     const formattedAge = parseInt(age, 10);
//     const formattedFollowerCount =
//       role === "influencer" ? parseInt(followers, 10) : undefined;

//       const payload = {
//         user: {
//           full_name: fullName,
//           username,
//           email,
//           password,
//           phone,
//           age: formattedAge,
//           role: role, // ✅ keep role inside user
//         },
//         ...(role === "brandAdmin" && { brand_name, brand_website }),
//         ...(role === "influencer" && {
//           social_media,
//           social_media_link,
//           followers: formattedFollowerCount,
//         }),
//       };
      
    

//     try {
//       console.log("Payload:", payload)
//       if (role === "endUser") {
//         const response = await fetch("http://localhost:8080/register/user", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(payload),
//         });
//         if (!response.ok) {
//           const errorData = await response.json();
//           console.error("Error response:", errorData);
//           throw new Error(errorData.message || "Registration failed");
//         }
//       }
//       else if (role === "brandAdmin") {
//         const response = await fetch("http://localhost:8080/register/brand", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(payload),
          
//         });
//         if (!response.ok) {
//           const errorData = await response.json();
//           console.error("Error response:", errorData);
//           throw new Error(errorData.message || "Registration failed");
//         }
//       }
//       else {
//         const response = await fetch("http://localhost:8080/register/influencer", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(payload),
//         });
//         if (!response.ok) {
//           const errorData = await response.json();
//           console.error("Error response:", errorData);
//           throw new Error(errorData.message || "Registration failed");
//         }
//       }  
//       alert("Registration successful! Please log in.");
//       navigate("/login");
//     } catch (error) {
//       console.error("Registration error:", error);
//       alert(error.message || "Registration failed. Please try again.");
//     }
//   };

//   return (
//     <div className="registration-form">
//       {/* Step 1: Account Type Selection */}
//       {step === 1 && (
//         <div className="registration-header">
//           <h2>Register</h2>
//           <button type="button" className="cancel-button" onClick={handleCancel}>
//             &#8592;
//           </button>
//         </div>
//       )}
//       {step === 2 && (
//         <div className="registration-header">
//           <button type="button" className="back-button" onClick={() => setStep(1)}>
//             &#8592;
//           </button>
//           <h2>Register</h2>
//         </div>
//       )}

//       {step === 1 && (
//         <form onSubmit={handleStepOneSubmit}>
//           <p className="select-role-title">Select Account Type:</p>
//           <div className="radio-group">
//             {availableRoles.map((r, idx) => (
//               <label key={idx} className="radio-label">
//                 <input
//                   type="radio"
//                   name="role"
//                   value={r.value}
//                   onChange={(e) => setRole(e.target.value)}
//                 />
//                 <span className="radio-option">{r.label}</span>
//               </label>
//             ))}
//           </div>
//           <button type="submit" className="continue-button">Continue</button>
//         </form>
//       )}

//       {step === 2 && (
//         <form onSubmit={handleRegister}>
//           <div>
//             <label>Full Name:</label>
//             <input
//               type="text"
//               value={fullName}
//               onChange={(e) => setFullName(e.target.value)}
//               placeholder="Enter your full name"
//               required
//             />
//           </div>
//           <div>
//             <label>Username:</label>
//             <input
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               placeholder="Enter your username"
//               required
//             />
//           </div>
//           <div>
//             <label>Email:</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Enter your email"
//               required
//             />
//           </div>
//           <div>
//             <label>Phone:</label>
//             <input
//               type="text"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//               placeholder="Enter your phone number"
//               required
//             />
//           </div>
//           <div>
//             <label>Age:</label>
//             <input
//               type="number"
//               value={age}
//               onChange={(e) => setAge(e.target.value)}
//               placeholder="Enter your age"
//               required
//             />
//           </div>
//           <div>
//             <label>Password:</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Enter your password"
//               required
//             />
//           </div>

//           {/* Brand-Specific Fields */}
//           {role === "brandAdmin" && (
//             <>
//               <div>
//                 <label>Brand Name:</label>
//                 <input
//                   type="text"
//                   value={brand_name}
//                   onChange={(e) => setBrandName(e.target.value)}
//                   placeholder="Enter your brand name"
//                   required
//                 />
//               </div>
//               <div>
//                 <label>Brand Website:</label>
//                 <input
//                   type="url"
//                   value={brand_website}
//                   onChange={(e) => setBrandWebsite(e.target.value)}
//                   placeholder="Enter your brand website"
//                   required
//                 />
//               </div>
//             </>
//           )}

//           {/* Influencer-Specific Fields */}
//           {role === "influencer" && (
//             <>
//               <div>
//                 <label>Social Media Platform:</label>
//                 <select
//                   value={social_media}
//                   onChange={(e) => setSocialMediaPlatform(e.target.value)}
//                   required
//                 >
//                   <option value="" disabled>
//                     Select platform
//                   </option>
//                   <option value="Instagram">Instagram</option>
//                   <option value="Twitter">Twitter</option>
//                   <option value="Facebook">Facebook</option>
//                   <option value="TikTok">TikTok</option>
//                   <option value="Other">Other</option>
//                 </select>
//               </div>
//               <div>
//                 <label>Social Media Handle:</label>
//                 <input
//                   type="text"
//                   value={social_media_link}
//                   onChange={(e) => setSocialMediaHandle(e.target.value)}
//                   placeholder="Enter your social media handle"
//                   required
//                 />
//               </div>
//               <div>
//                 <label>Follower Count:</label>
//                 <input
//                   type="number"
//                   value={followers}
//                   onChange={(e) => setFollowerCount(e.target.value)}
//                   placeholder="Enter your follower count"
//                   required
//                 />
//               </div>
//             </>
//           )}

//           <button type="submit" className="register-button">Register</button>
//         </form>
//       )}
//     </div>
//   );
// }

// export default Registration;
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { ArrowBack, Person, Email, Phone, Lock, Business, Link, People, Tag } from "@mui/icons-material";
// import "../Registration.css";

// function Registration() {
//   const navigate = useNavigate();
//   const [step, setStep] = useState(1);
//   const [role, setRole] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   // Common fields
//   const [fullName, setFullName] = useState("");
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [phone, setPhone] = useState("");
//   const [age, setAge] = useState("");

//   // Brand-specific fields
//   const [brand_name, setBrandName] = useState("");
//   const [brand_website, setBrandWebsite] = useState("");

//   // Influencer-specific fields
//   const [social_media, setSocialMediaPlatform] = useState("");
//   const [social_media_link, setSocialMediaHandle] = useState("");
//   const [followers, setFollowerCount] = useState("");

//   const availableRoles = [
//     { value: "brandAdmin", label: "Brand (Authentic business/shop)", icon: <Business /> },
//     { value: "influencer", label: "Influencer (with social media presence)", icon: <People /> },
//     { value: "endUser", label: "End User (Simple User)", icon: <Person /> },
//   ];

//   const socialMediaOptions = [
//     { value: "Instagram", label: "Instagram" },
//     { value: "Twitter", label: "Twitter" },
//     { value: "Facebook", label: "Facebook" },
//     { value: "TikTok", label: "TikTok" },
//     { value: "YouTube", label: "YouTube" },
//     { value: "Other", label: "Other" },
//   ];

//   const handleCancel = () => navigate("/login");

//   const handleStepOneSubmit = (e) => {
//     e.preventDefault();
//     if (!role) {
//       setError("Please select an account type");
//       return;
//     }
//     setStep(2);
//     setError("");
//   };

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     const formattedAge = parseInt(age, 10);
//     const formattedFollowerCount = role === "influencer" ? parseInt(followers, 10) : undefined;

//     const payload = {
//       user: {
//         full_name: fullName,
//         username,
//         email,
//         password,
//         phone,
//         age: formattedAge,
//         role: role,
//       },
//       ...(role === "brandAdmin" && { brand_name, brand_website }),
//       ...(role === "influencer" && {
//         social_media,
//         social_media_link,
//         followers: formattedFollowerCount,
//       }),
//     };

//     try {
//       let endpoint = "";
//       if (role === "endUser") endpoint = "register/user";
//       else if (role === "brandAdmin") endpoint = "register/brand";
//       else endpoint = "register/influencer";
//       console.log("Payload:", payload);
//       const response = await fetch(`http://localhost:8080/${endpoint}`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message || "Registration failed");
//       }

//       alert("Registration successful! Please log in.");
//       navigate("/login");
//     } catch (error) {
//       console.error("Registration error:", error);
//       setError(error.message || "Registration failed. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="promohub-registration-container">
//       <div className="promohub-registration-card">
//         {/* Header */}
//         <div className="promohub-registration-header">
//           {step === 1 ? (
//             <button type="button" className="promohub-back-button" onClick={handleCancel}>
//               <ArrowBack />
//             </button>
//           ) : (
//             <button type="button" className="promohub-back-button" onClick={() => setStep(1)}>
//               <ArrowBack />
//             </button>
//           )}
//           <h2>Create your PromoHub account</h2>
//         </div>

//         {/* Progress indicator */}
//         <div className="promohub-progress-bar">
//           <div className={`promohub-progress-step ${step >= 1 ? "active" : ""}`}>
//             <span>1</span>
//             <p>Account Type</p>
//           </div>
//           <div className={`promohub-progress-step ${step >= 2 ? "active" : ""}`}>
//             <span>2</span>
//             <p>Details</p>
//           </div>
//         </div>

//         {error && <div className="promohub-error-message">{error}</div>}

//         {/* Step 1: Account Type Selection */}
//         {step === 1 && (
//           <form onSubmit={handleStepOneSubmit} className="promohub-account-type-form">
//             <h3>Select your account type</h3>
//             <div className="promohub-role-options">
//               {availableRoles.map((r, idx) => (
//                 <label key={idx} className={`promohub-role-option ${role === r.value ? "selected" : ""}`}>
//                   <input
//                     type="radio"
//                     name="role"
//                     value={r.value}
//                     onChange={(e) => setRole(e.target.value)}
//                     checked={role === r.value}
//                   />
//                   <div className="promohub-role-icon">{r.icon}</div>
//                   <span>{r.label}</span>
//                 </label>
//               ))}
//             </div>
//             <button type="submit" className="promohub-continue-button">
//               Continue
//             </button>
//           </form>
//         )}

//         {/* Step 2: Registration Form */}
//         {step === 2 && (
//           <form onSubmit={handleRegister} className="promohub-registration-form">
//             <h3>Account Information</h3>
            
//             <div className="promohub-input-group">
//               <Person className="promohub-input-icon" />
//               <input
//                 type="text"
//                 value={fullName}
//                 onChange={(e) => setFullName(e.target.value)}
//                 placeholder="Full Name"
//                 required
//               />
//             </div>

//             <div className="promohub-input-group">
//               <Tag className="promohub-input-icon" />
//               <input
//                 type="text"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 placeholder="Username"
//                 required
//               />
//             </div>

//             <div className="promohub-input-group">
//               <Email className="promohub-input-icon" />
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Email Address"
//                 required
//               />
//             </div>

//             <div className="promohub-input-group">
//               <Phone className="promohub-input-icon" />
//               <input
//                 type="tel"
//                 value={phone}
//                 onChange={(e) => setPhone(e.target.value)}
//                 placeholder="Phone Number"
//                 required
//               />
//             </div>

//             <div className="promohub-input-group">
//               <Person className="promohub-input-icon" />
//               <input
//                 type="number"
//                 value={age}
//                 onChange={(e) => setAge(e.target.value)}
//                 placeholder="Age"
//                 required
//                 min="13"
//               />
//             </div>

//             <div className="promohub-input-group">
//               <Lock className="promohub-input-icon" />
//               <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="Password"
//                 required
//                 minLength="8"
//               />
//             </div>

//             {/* Brand-Specific Fields */}
//             {role === "brandAdmin" && (
//               <>
//                 <h3>Brand Information</h3>
//                 <div className="promohub-input-group">
//                   <Business className="promohub-input-icon" />
//                   <input
//                     type="text"
//                     value={brand_name}
//                     onChange={(e) => setBrandName(e.target.value)}
//                     placeholder="Brand Name"
//                     required
//                   />
//                 </div>
//                 <div className="promohub-input-group">
//                   <Link className="promohub-input-icon" />
//                   <input
//                     type="url"
//                     value={brand_website}
//                     onChange={(e) => setBrandWebsite(e.target.value)}
//                     placeholder="Brand Website (https://example.com)"
//                     required
//                   />
//                 </div>
//               </>
//             )}

//             {/* Influencer-Specific Fields */}
//             {role === "influencer" && (
//               <>
//                 <h3>Social Media Information</h3>
//                 <div className="promohub-input-group">
//                   <People className="promohub-input-icon" />
//                   <select
//                     value={social_media}
//                     onChange={(e) => setSocialMediaPlatform(e.target.value)}
//                     required
//                   >
//                     <option value="" disabled>Select Platform</option>
//                     {socialMediaOptions.map((option) => (
//                       <option key={option.value} value={option.value}>
//                         {option.label}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//                 <div className="promohub-input-group">
//                   <Link className="promohub-input-icon" />
//                   <input
//                     type="text"
//                     value={social_media_link}
//                     onChange={(e) => setSocialMediaHandle(e.target.value)}
//                     placeholder="Social Media Handle"
//                     required
//                   />
//                 </div>
//                 <div className="promohub-input-group">
//                   <People className="promohub-input-icon" />
//                   <input
//                     type="number"
//                     value={followers}
//                     onChange={(e) => setFollowerCount(e.target.value)}
//                     placeholder="Follower Count"
//                     required
//                     min="0"
//                   />
//                 </div>
//               </>
//             )}

//             <button 
//               type="submit" 
//               className="promohub-register-button"
//               disabled={loading}
//             >
//               {loading ? "Creating account..." : "Create Account"}
//             </button>
//           </form>
//         )}

//         <div className="promohub-login-link">
//           Already have an account? <a href="/login">Sign in</a>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Registration;
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { ArrowBack, Person, Email, Phone, Lock, Business, Link, People, Tag } from "@mui/icons-material";
// import "../Registration.css";

// function Registration() {
//   const navigate = useNavigate();
//   const [step, setStep] = useState(1);
//   const [role, setRole] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [errors, setErrors] = useState({
//     fullName: "",
//     username: "",
//     email: "",
//     phone: "",
//     age: "",
//     password: "",
//     brand_name: "",
//     brand_website: "",
//     social_media: "",
//     social_media_link: "",
//     followers: "",
//   });

//   // Common fields
//   const [fullName, setFullName] = useState("");
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [phone, setPhone] = useState("");
//   const [age, setAge] = useState("");

//   // Brand-specific fields
//   const [brand_name, setBrandName] = useState("");
//   const [brand_website, setBrandWebsite] = useState("");

//   // Influencer-specific fields
//   const [social_media, setSocialMediaPlatform] = useState("");
//   const [social_media_link, setSocialMediaHandle] = useState("");
//   const [followers, setFollowerCount] = useState("");

//   const availableRoles = [
//     { value: "brandAdmin", label: "Brand (Authentic business/shop)", icon: <Business /> },
//     { value: "influencer", label: "Influencer (with social media presence)", icon: <People /> },
//     { value: "endUser", label: "End User (Simple User)", icon: <Person /> },
//   ];

//   const socialMediaOptions = [
//     { value: "Instagram", label: "Instagram" },
//     { value: "Twitter", label: "Twitter" },
//     { value: "Facebook", label: "Facebook" },
//     { value: "TikTok", label: "TikTok" },
//     { value: "YouTube", label: "YouTube" },
//     { value: "Other", label: "Other" },
//   ];

//   const handleCancel = () => navigate("/login");

//   const validateStepOne = () => {
//     if (!role) {
//       setError("Please select an account type");
//       return false;
//     }
//     return true;
//   };

//   const validateStepTwo = () => {
//     const newErrors = {
//       fullName: "",
//       username: "",
//       email: "",
//       phone: "",
//       age: "",
//       password: "",
//       brand_name: "",
//       brand_website: "",
//       social_media: "",
//       social_media_link: "",
//       followers: "",
//     };
//     let isValid = true;

//     // Full Name: non-empty, >= 2 characters
//     if (!fullName || fullName.length < 2) {
//       newErrors.fullName = "Full name must be at least 2 characters long";
//       isValid = false;
//     }

//     // Username: non-empty, >= 3 characters, alphanumeric + underscore
//     if (!username || username.length < 3 || !/^[a-zA-Z0-9_]+$/.test(username)) {
//       newErrors.username = "Username must be at least 3 characters long and contain only letters, numbers, or underscores";
//       isValid = false;
//     }

//     // Email: valid format
//     if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
//       newErrors.email = "Please enter a valid email address";
//       isValid = false;
//     }

//     // Phone: valid format (e.g., +1234567890 or 123-456-7890)
//     if (!phone || !/^\+?\d{10,15}$|^(\d{3}-\d{3}-\d{4})$/.test(phone)) {
//       newErrors.phone = "Please enter a valid phone number (e.g., +1234567890 or 123-456-7890)";
//       isValid = false;
//     }

//     // Age: 13-120
//     const parsedAge = parseInt(age, 10);
//     if (!age || isNaN(parsedAge) || parsedAge < 13 || parsedAge > 120) {
//       newErrors.age = "Age must be between 13 and 120";
//       isValid = false;
//     }

//     // Password: >= 8 characters
//     if (!password || password.length < 8) {
//       newErrors.password = "Password must be at least 8 characters long";
//       isValid = false;
//     }

//     // Brand-specific validations
//     if (role === "brandAdmin") {
//       if (!brand_name || brand_name.length < 2) {
//         newErrors.brand_name = "Brand name must be at least 2 characters long";
//         isValid = false;
//       }
//       if (!brand_website || !/^https?:\/\/[^\s$.?#].[^\s]*$/.test(brand_website)) {
//         newErrors.brand_website = "Please enter a valid URL (e.g., https://example.com)";
//         isValid = false;
//       }
//     }

//     // Influencer-specific validations
//     if (role === "influencer") {
//       if (!social_media) {
//         newErrors.social_media = "Please select a social media platform";
//         isValid = false;
//       }
//       if (!social_media_link || social_media_link.length < 3) {
//         newErrors.social_media_link = "Social media handle must be at least 3 characters long";
//         isValid = false;
//       }
//       const parsedFollowers = parseInt(followers, 10);
//       if (!followers || isNaN(parsedFollowers) || parsedFollowers < 0) {
//         newErrors.followers = "Follower count must be a non-negative number";
//         isValid = false;
//       }
//     }

//     setErrors(newErrors);
//     return isValid;
//   };

//   const handleStepOneSubmit = (e) => {
//     e.preventDefault();
//     if (validateStepOne()) {
//       setStep(2);
//       setError("");
//     }
//   };

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     if (!validateStepTwo()) {
//       setLoading(false);
//       return;
//     }

//     const formattedAge = parseInt(age, 10);
//     const formattedFollowerCount = role === "influencer" ? parseInt(followers, 10) : undefined;

//     const payload = {
//       user: {
//         full_name: fullName,
//         username,
//         email,
//         password,
//         phone,
//         age: formattedAge,
//         role: role,
//       },
//       ...(role === "brandAdmin" && { brand_name, brand_website }),
//       ...(role === "influencer" && {
//         social_media,
//         social_media_link,
//         followers: formattedFollowerCount,
//       }),
//     };

//     try {
//       let endpoint = "";
//       if (role === "endUser") endpoint = "register/user";
//       else if (role === "brandAdmin") endpoint = "register/brand";
//       else endpoint = "register/influencer";
//       console.log("Payload:", payload);
//       const response = await fetch(`http://localhost:8080/${endpoint}`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.error || "Registration failed");
//       }

//       alert("Registration successful! Please log in.");
//       navigate("/login");
//     } catch (error) {
//       console.error("Registration error:", error);
//       setError(error.message || "Registration failed. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="promohub-registration-container">
//       <div className="promohub-registration-card">
//         {/* Header */}
//         <div className="promohub-registration-header">
//           {step === 1 ? (
//             <button type="button" className="promohub-back-button" onClick={handleCancel}>
//               <ArrowBack />
//             </button>
//           ) : (
//             <button type="button" className="promohub-back-button" onClick={() => setStep(1)}>
//               <ArrowBack />
//             </button>
//           )}
//           <h2>Create your PromoHub account</h2>
//         </div>

//         {/* Progress indicator */}
//         <div className="promohub-progress-bar">
//           <div className={`promohub-progress-step ${step >= 1 ? "active" : ""}`}>
//             <span>1</span>
//             <p>Account Type</p>
//           </div>
//           <div className={`promohub-progress-step ${step >= 2 ? "active" : ""}`}>
//             <span>2</span>
//             <p>Details</p>
//           </div>
//         </div>

//         {error && <div className="promohub-error-message">{error}</div>}

//         {/* Step 1: Account Type Selection */}
//         {step === 1 && (
//           <form onSubmit={handleStepOneSubmit} className="promohub-account-type-form">
//             <h3>Select your account type</h3>
//             <div className="promohub-role-options">
//               {availableRoles.map((r, idx) => (
//                 <label key={idx} className={`promohub-role-option ${role === r.value ? "selected" : ""}`}>
//                   <input
//                     type="radio"
//                     name="role"
//                     value={r.value}
//                     onChange={(e) => setRole(e.target.value)}
//                     checked={role === r.value}
//                   />
//                   <div className="promohub-role-icon">{r.icon}</div>
//                   <span>{r.label}</span>
//                 </label>
//               ))}
//             </div>
//             <button type="submit" className="promohub-continue-button">
//               Continue
//             </button>
//           </form>
//         )}

//         {/* Step 2: Registration Form */}
//         {step === 2 && (
//           <form onSubmit={handleRegister} className="promohub-registration-form">
//             <h3>Account Information</h3>
            
//             <div className="promohub-input-group">
//               <Person className="promohub-input-icon" />
//               <input
//                 type="text"
//                 value={fullName}
//                 onChange={(e) => {
//                   setFullName(e.target.value);
//                   setErrors({ ...errors, fullName: e.target.value.length < 2 ? "Full name must be at least 2 characters long" : "" });
//                 }}
//                 placeholder="Full Name"
//                 required
//                 className={errors.fullName ? "error-input" : ""}
//               />
//               {errors.fullName && <div className="promohub-error-message">{errors.fullName}</div>}
//             </div>

//             <div className="promohub-input-group">
//               <Tag className="promohub-input-icon" />
//               <input
//                 type="text"
//                 value={username}
//                 onChange={(e) => {
//                   setUsername(e.target.value);
//                   setErrors({
//                     ...errors,
//                     username: e.target.value.length < 3 || !/^[a-zA-Z0-9_]+$/.test(e.target.value)
//                       ? "Username must be at least 3 characters long and contain only letters, numbers, or underscores"
//                       : "",
//                   });
//                 }}
//                 placeholder="Username"
//                 required
//                 className={errors.username ? "error-input" : ""}
//               />
//               {errors.username && <div className="promohub-error-message">{errors.username}</div>}
//             </div>

//             <div className="promohub-input-group">
//               <Email className="promohub-input-icon" />
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => {
//                   setEmail(e.target.value);
//                   setErrors({
//                     ...errors,
//                     email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value) ? "Please enter a valid email address" : "",
//                   });
//                 }}
//                 placeholder="Email Address"
//                 required
//                 className={errors.email ? "error-input" : ""}
//               />
//               {errors.email && <div className="promohub-error-message">{errors.email}</div>}
//             </div>

//             <div className="promohub-input-group">
//               <Phone className="promohub-input-icon" />
//               <input
//                 type="tel"
//                 value={phone}
//                 onChange={(e) => {
//                   setPhone(e.target.value);
//                   setErrors({
//                     ...errors,
//                     phone: !/^\+?\d{10,15}$|^(\d{3}-\d{3}-\d{4})$/.test(e.target.value)
//                       ? "Please enter a valid phone number (e.g., +1234567890 or 123-456-7890)"
//                       : "",
//                   });
//                 }}
//                 placeholder="Phone Number"
//                 required
//                 className={errors.phone ? "error-input" : ""}
//               />
//               {errors.phone && <div className="promohub-error-message">{errors.phone}</div>}
//             </div>

//             <div className="promohub-input-group">
//               <Person className="promohub-input-icon" />
//               <input
//                 type="number"
//                 value={age}
//                 onChange={(e) => {
//                   setAge(e.target.value);
//                   const parsedAge = parseInt(e.target.value, 10);
//                   setErrors({
//                     ...errors,
//                     age: !e.target.value || isNaN(parsedAge) || parsedAge < 13 || parsedAge > 120
//                       ? "Age must be between 13 and 120"
//                       : "",
//                   });
//                 }}
//                 placeholder="Age"
//                 required
//                 min="13"
//                 className={errors.age ? "error-input" : ""}
//               />
//               {errors.age && <div className="promohub-error-message">{errors.age}</div>}
//             </div>

//             <div className="promohub-input-group">
//               <Lock className="promohub-input-icon" />
//               <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => {
//                   setPassword(e.target.value);
//                   setErrors({
//                     ...errors,
//                     password: e.target.value.length < 8 ? "Password must be at least 8 characters long" : "",
//                   });
//                 }}
//                 placeholder="Password"
//                 required
//                 className={errors.password ? "error-input" : ""}
//               />
//               {errors.password && <div className="promohub-error-message">{errors.password}</div>}
//             </div>

//             {/* Brand-Specific Fields */}
//             {role === "brandAdmin" && (
//               <>
//                 <h3>Brand Information</h3>
//                 <div className="promohub-input-group">
//                   <Business className="promohub-input-icon" />
//                   <input
//                     type="text"
//                     value={brand_name}
//                     onChange={(e) => {
//                       setBrandName(e.target.value);
//                       setErrors({
//                         ...errors,
//                         brand_name: e.target.value.length < 2 ? "Brand name must be at least 2 characters long" : "",
//                       });
//                     }}
//                     placeholder="Brand Name"
//                     required
//                     className={errors.brand_name ? "error-input" : ""}
//                   />
//                   {errors.brand_name && <div className="promohub-error-message">{errors.brand_name}</div>}
//                 </div>
//                 <div className="promohub-input-group">
//                   <Link className="promohub-input-icon" />
//                   <input
//                     type="url"
//                     value={brand_website}
//                     onChange={(e) => {
//                       setBrandWebsite(e.target.value);
//                       setErrors({
//                         ...errors,
//                         brand_website: !/^https?:\/\/[^\s$.?#].[^\s]*$/.test(e.target.value)
//                           ? "Please enter a valid URL (e.g., https://example.com)"
//                           : "",
//                       });
//                     }}
//                     placeholder="Brand Website (https://example.com)"
//                     required
//                     className={errors.brand_website ? "error-input" : ""}
//                   />
//                   {errors.brand_website && <div className="promohub-error-message">{errors.brand_website}</div>}
//                 </div>
//               </>
//             )}

//             {/* Influencer-Specific Fields */}
//             {role === "influencer" && (
//               <>
//                 <h3>Social Media Information</h3>
//                 <div className="promohub-input-group">
//                   <People className="promohub-input-icon" />
//                   <select
//                     value={social_media}
//                     onChange={(e) => {
//                       setSocialMediaPlatform(e.target.value);
//                       setErrors({ ...errors, social_media: e.target.value ? "" : "Please select a social media platform" });
//                     }}
//                     required
//                     className={errors.social_media ? "error-input" : ""}
//                   >
//                     <option value="" disabled>Select Platform</option>
//                     {socialMediaOptions.map((option) => (
//                       <option key={option.value} value={option.value}>
//                         {option.label}
//                       </option>
//                     ))}
//                   </select>
//                   {errors.social_media && <div className="promohub-error-message">{errors.social_media}</div>}
//                 </div>
//                 <div className="promohub-input-group">
//                   <Link className="promohub-input-icon" />
//                   <input
//                     type="text"
//                     value={social_media_link}
//                     onChange={(e) => {
//                       setSocialMediaHandle(e.target.value);
//                       setErrors({
//                         ...errors,
//                         social_media_link: e.target.value.length < 3 ? "Social media handle must be at least 3 characters long" : "",
//                       });
//                     }}
//                     placeholder="Social Media Handle"
//                     required
//                     className={errors.social_media_link ? "error-input" : ""}
//                   />
//                   {errors.social_media_link && <div className="promohub-error-message">{errors.social_media_link}</div>}
//                 </div>
//                 <div className="promohub-input-group">
//                   <People className="promohub-input-icon" />
//                   <input
//                     type="number"
//                     value={followers}
//                     onChange={(e) => {
//                       setFollowerCount(e.target.value);
//                       const parsedFollowers = parseInt(e.target.value, 10);
//                       setErrors({
//                         ...errors,
//                         followers: !e.target.value || isNaN(parsedFollowers) || parsedFollowers < 0
//                           ? "Follower count must be a non-negative number"
//                           : "",
//                       });
//                     }}
//                     placeholder="Follower Count"
//                     required
//                     min="0"
//                     className={errors.followers ? "error-input" : ""}
//                   />
//                   {errors.followers && <div className="promohub-error-message">{errors.followers}</div>}
//                 </div>
//               </>
//             )}

//             <button 
//               type="submit" 
//               className="promohub-register-button"
//               disabled={loading || Object.values(errors).some((err) => err !== "")}
//             >
//               {loading ? "Creating account..." : "Create Account"}
//             </button>
//           </form>
//         )}

//         <div className="promohub-login-link">
//           Already have an account? <a href="/login">Sign in</a>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Registration;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowBack, Person, Email, Phone, Lock, Business, Link, People, Tag } from "@mui/icons-material";
import "../Registration.css";

function Registration() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [errors, setErrors] = useState({
    fullName: "",
    username: "",
    email: "",
    phone: "",
    age: "",
    password: "",
    brand_name: "",
    brand_website: "",
    social_media: "",
    social_media_link: "",
    followers: "",
  });

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
    { value: "brandAdmin", label: "Brand (Authentic business/shop)", icon: <Business /> },
    { value: "influencer", label: "Influencer (with social media presence)", icon: <People /> },
    { value: "endUser", label: "End User (Simple User)", icon: <Person /> },
  ];

  const socialMediaOptions = [
    { value: "Instagram", label: "Instagram" },
    { value: "Twitter", label: "Twitter" },
    { value: "Facebook", label: "Facebook" },
    { value: "TikTok", label: "TikTok" },
    { value: "YouTube", label: "YouTube" },
    { value: "Other", label: "Other" },
  ];

  const handleCancel = () => navigate("/login");

  const validateStepOne = () => {
    if (!role) {
      setError("Please select an account type");
      return false;
    }
    return true;
  };

  const validateStepTwo = () => {
    const newErrors = {
      fullName: "",
      username: "",
      email: "",
      phone: "",
      age: "",
      password: "",
      brand_name: "",
      brand_website: "",
      social_media: "",
      social_media_link: "",
      followers: "",
    };
    let isValid = true;

    // Full Name: non-empty, >= 2 characters
    if (!fullName || fullName.length < 2) {
      newErrors.fullName = "Full name must be at least 2 characters long";
      isValid = false;
    }

    // Username: non-empty, >= 3 characters, alphanumeric + underscore
    if (!username || username.length < 3 || !/^[a-zA-Z0-9_]+$/.test(username)) {
      newErrors.username = "Username must be at least 3 characters long and contain only letters, numbers, or underscores";
      isValid = false;
    }

    // Email: valid format
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    // Phone: valid format (e.g., +1234567890 or 123-456-7890)
    if (!phone || !/^\+?\d{10,15}$|^(\d{3}-\d{3}-\d{4})$/.test(phone)) {
      newErrors.phone = "Please enter a valid phone number (e.g., +1234567890 or 123-456-7890)";
      isValid = false;
    }

    // Age: 13-120
    const parsedAge = parseInt(age, 10);
    if (!age || isNaN(parsedAge) || parsedAge < 13 || parsedAge > 120) {
      newErrors.age = "Age must be between 13 and 120";
      isValid = false;
    }

    // Password: >= 8 characters
    if (!password || password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
      isValid = false;
    }

    // Brand-specific validations
    if (role === "brandAdmin") {
      if (!brand_name || brand_name.length < 2) {
        newErrors.brand_name = "Brand name must be at least 2 characters long";
        isValid = false;
      }
      if (!brand_website || !/^https?:\/\/[^\s$.?#].[^\s]*$/.test(brand_website)) {
        newErrors.brand_website = "Please enter a valid URL (e.g., https://example.com)";
        isValid = false;
      }
    }

    // Influencer-specific validations
    if (role === "influencer") {
      if (!social_media) {
        newErrors.social_media = "Please select a social media platform";
        isValid = false;
      }
      if (!social_media_link || social_media_link.length < 3) {
        newErrors.social_media_link = "Social media handle must be at least 3 characters long";
        isValid = false;
      }
      const parsedFollowers = parseInt(followers, 10);
      if (!followers || isNaN(parsedFollowers) || parsedFollowers < 0) {
        newErrors.followers = "Follower count must be a non-negative number";
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleStepOneSubmit = (e) => {
    e.preventDefault();
    if (validateStepOne()) {
      setStep(2);
      setError("");
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!validateStepTwo()) {
      setLoading(false);
      return;
    }

    const formattedAge = parseInt(age, 10);
    const formattedFollowerCount = role === "influencer" ? parseInt(followers, 10) : undefined;

    const payload = {
      user: {
        full_name: fullName,
        username,
        email,
        password,
        phone,
        age: formattedAge,
        role: role,
      },
      ...(role === "brandAdmin" && { brand_name, brand_website }),
      ...(role === "influencer" && {
        social_media,
        social_media_link,
        followers: formattedFollowerCount,
      }),
    };

    try {
      let endpoint = "";
      if (role === "endUser") endpoint = "register/user";
      else if (role === "brandAdmin") endpoint = "register/brand";
      else endpoint = "register/influencer";

      const response = await fetch(`http://localhost:8080/${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Registration failed");
      }

      alert("Registration successful! Please log in.");
      navigate("/login");
    } catch (error) {
      console.error("Registration error:", error);
      setError(error.message || "Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="promohub-registration-container">
      <div className="promohub-registration-card">
        {/* Header */}
        <div className="promohub-registration-header">
          {step === 1 ? (
            <button type="button" className="promohub-back-button" onClick={handleCancel}>
              <ArrowBack />
            </button>
          ) : (
            <button type="button" className="promohub-back-button" onClick={() => setStep(1)}>
              <ArrowBack />
            </button>
          )}
          <h2>Create your PromoHub account</h2>
        </div>

        {/* Progress indicator */}
        <div className="promohub-progress-bar">
          <div className={`promohub-progress-step ${step >= 1 ? "active" : ""}`}>
            <span>1</span>
            <p>Account Type</p>
          </div>
          <div className={`promohub-progress-step ${step >= 2 ? "active" : ""}`}>
            <span>2</span>
            <p>Details</p>
          </div>
        </div>

        {error && <div className="promohub-error-message">{error}</div>}

        {/* Step 1: Account Type Selection */}
        {step === 1 && (
          <form onSubmit={handleStepOneSubmit} className="promohub-account-type-form">
            <h3>Select your account type</h3>
            <div className="promohub-role-options">
              {availableRoles.map((r, idx) => (
                <label key={idx} className={`promohub-role-option ${role === r.value ? "selected" : ""}`}>
                  <input
                    type="radio"
                    name="role"
                    value={r.value}
                    onChange={(e) => setRole(e.target.value)}
                    checked={role === r.value}
                  />
                  <div className="promohub-role-icon">{r.icon}</div>
                  <span>{r.label}</span>
                </label>
              ))}
            </div>
            <button type="submit" className="promohub-continue-button">
              Continue
            </button>
          </form>
        )}

        {/* Step 2: Registration Form */}
        {step === 2 && (
          <form onSubmit={handleRegister} className="promohub-registration-form">
            <h3>Account Information</h3>

            <div className="promohub-input-group">
              <div className="promohub-input-wrapper">
                <Person className="promohub-input-icon" />
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => {
                    setFullName(e.target.value);
                    setErrors({ ...errors, fullName: e.target.value.length < 2 ? "Full name must be at least 2 characters long" : "" });
                  }}
                  placeholder="Full Name"
                  required
                  className={errors.fullName ? "error-input" : ""}
                />
              </div>
              {errors.fullName && <div className="promohub-error-message input-error">{errors.fullName}</div>}
            </div>

            <div className="promohub-input-group">
              <div className="promohub-input-wrapper">
                <Tag className="promohub-input-icon" />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                    setErrors({
                      ...errors,
                      username: e.target.value.length < 3 || !/^[a-zA-Z0-9_]+$/.test(e.target.value)
                        ? "Username must be at least 3 characters long and contain only letters, numbers, or underscores"
                        : "",
                    });
                  }}
                  placeholder="Username"
                  required
                  className={errors.username ? "error-input" : ""}
                />
              </div>
              {errors.username && <div className="promohub-error-message input-error">{errors.username}</div>}
            </div>

            <div className="promohub-input-group">
              <div className="promohub-input-wrapper">
                <Email className="promohub-input-icon" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setErrors({
                      ...errors,
                      email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value) ? "Please enter a valid email address" : "",
                    });
                  }}
                  placeholder="Email Address"
                  required
                  className={errors.email ? "error-input" : ""}
                />
              </div>
              {errors.email && <div className="promohub-error-message input-error">{errors.email}</div>}
            </div>

            <div className="promohub-input-group">
              <div className="promohub-input-wrapper">
                <Phone className="promohub-input-icon" />
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                    setErrors({
                      ...errors,
                      phone: !/^\+?\d{10,15}$|^(\d{3}-\d{3}-\d{4})$/.test(e.target.value)
                        ? "Please enter a valid phone number (e.g., +1234567890 or 123-456-7890)"
                        : "",
                    });
                  }}
                  placeholder="Phone Number"
                  required
                  className={errors.phone ? "error-input" : ""}
                />
              </div>
              {errors.phone && <div className="promohub-error-message input-error">{errors.phone}</div>}
            </div>

            <div className="promohub-input-group">
              <div className="promohub-input-wrapper">
                <Person className="promohub-input-icon" />
                <input
                  type="number"
                  value={age}
                  onChange={(e) => {
                    setAge(e.target.value);
                    const parsedAge = parseInt(e.target.value, 10);
                    setErrors({
                      ...errors,
                      age: !e.target.value || isNaN(parsedAge) || parsedAge < 13 || parsedAge > 120
                        ? "Age must be between 13 and 120"
                        : "",
                    });
                  }}
                  placeholder="Age"
                  required
                  min="13"
                  className={errors.age ? "error-input" : ""}
                />
              </div>
              {errors.age && <div className="promohub-error-message input-error">{errors.age}</div>}
            </div>

            <div className="promohub-input-group">
              <div className="promohub-input-wrapper">
                <Lock className="promohub-input-icon" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setErrors({
                      ...errors,
                      password: e.target.value.length < 8 ? "Password must be at least 8 characters long" : "",
                    });
                  }}
                  placeholder="Password"
                  required
                  className={errors.password ? "error-input" : ""}
                />
              </div>
              {errors.password && <div className="promohub-error-message input-error">{errors.password}</div>}
            </div>

            {/* Brand-Specific Fields */}
            {role === "brandAdmin" && (
              <>
                <h3>Brand Information</h3>
                <div className="promohub-input-group">
                  <div className="promohub-input-wrapper">
                    <Business className="promohub-input-icon" />
                    <input
                      type="text"
                      value={brand_name}
                      onChange={(e) => {
                        setBrandName(e.target.value);
                        setErrors({
                          ...errors,
                          brand_name: e.target.value.length < 2 ? "Brand name must be at least 2 characters long" : "",
                        });
                      }}
                      placeholder="Brand Name"
                      required
                      className={errors.brand_name ? "error-input" : ""}
                    />
                  </div>
                  {errors.brand_name && <div className="promohub-error-message input-error">{errors.brand_name}</div>}
                </div>
                <div className="promohub-input-group">
                  <div className="promohub-input-wrapper">
                    <Link className="promohub-input-icon" />
                    <input
                      type="url"
                      value={brand_website}
                      onChange={(e) => {
                        setBrandWebsite(e.target.value);
                        setErrors({
                          ...errors,
                          brand_website: !/^https?:\/\/[^\s$.?#].[^\s]*$/.test(e.target.value)
                            ? "Please enter a valid URL (e.g., https://example.com)"
                            : "",
                        });
                      }}
                      placeholder="Brand Website (https://example.com)"
                      required
                      className={errors.brand_website ? "error-input" : ""}
                    />
                  </div>
                  {errors.brand_website && <div className="promohub-error-message input-error">{errors.brand_website}</div>}
                </div>
              </>
            )}

            {/* Influencer-Specific Fields */}
            {role === "influencer" && (
              <>
                <h3>Social Media Information</h3>
                <div className="promohub-input-group">
                  <div className="promohub-input-wrapper">
                    <People className="promohub-input-icon" />
                    <select
                      value={social_media}
                      onChange={(e) => {
                        setSocialMediaPlatform(e.target.value);
                        setErrors({ ...errors, social_media: e.target.value ? "" : "Please select a social media platform" });
                      }}
                      required
                      className={errors.social_media ? "error-input" : ""}
                    >
                      <option value="" disabled>
                        Select Platform
                      </option>
                      {socialMediaOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  {errors.social_media && <div className="promohub-error-message input-error">{errors.social_media}</div>}
                </div>
                <div className="promohub-input-group">
                  <div className="promohub-input-wrapper">
                    <Link className="promohub-input-icon" />
                    <input
                      type="text"
                      value={social_media_link}
                      onChange={(e) => {
                        setSocialMediaHandle(e.target.value);
                        setErrors({
                          ...errors,
                          social_media_link: e.target.value.length < 3 ? "Social media handle must be at least 3 characters long" : "",
                        });
                      }}
                      placeholder="Social Media Handle"
                      required
                      className={errors.social_media_link ? "error-input" : ""}
                    />
                  </div>
                  {errors.social_media_link && <div className="promohub-error-message input-error">{errors.social_media_link}</div>}
                </div>
                <div className="promohub-input-group">
                  <div className="promohub-input-wrapper">
                    <People className="promohub-input-icon" />
                    <input
                      type="number"
                      value={followers}
                      onChange={(e) => {
                        setFollowerCount(e.target.value);
                        const parsedFollowers = parseInt(e.target.value, 10);
                        setErrors({
                          ...errors,
                          followers: !e.target.value || isNaN(parsedFollowers) || parsedFollowers < 0
                            ? "Follower count must be a non-negative number"
                            : "",
                        });
                      }}
                      placeholder="Follower Count"
                      required
                      min="0"
                      className={errors.followers ? "error-input" : ""}
                    />
                  </div>
                  {errors.followers && <div className="promohub-error-message input-error">{errors.followers}</div>}
                </div>
              </>
            )}

            <button
              type="submit"
              className="promohub-register-button"
              disabled={loading || Object.values(errors).some((err) => err !== "")}
            >
              {loading ? "Creating account..." : "Register"}
            </button>
          </form>
        )}

        <div className="promohub-login-link">
          Already have an account? <a href="/login">Sign in</a>
        </div>
      </div>
    </div>
  );
}

export default Registration;