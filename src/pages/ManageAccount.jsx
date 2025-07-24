// // import { useState } from 'react';
// // import '../ManageAccount.css';

// // const ManageAccount = () => {
// //   const [activeTab, setActiveTab] = useState('profile');
// //   const [profile, setProfile] = useState({
// //     name: 'Sarah Khan',
// //     username: 'sarahkhan',
// //     email: 'sarah@example.com',
// //     phone: '+923001234567',
// //     bio: 'Social media enthusiast and brand collaborator',
// //     profilePicture: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80',
// //   });
// //   const [notificationSettings, setNotificationSettings] = useState({
// //     channels: { email: true, sms: false, push: true },
// //     frequency: 'real-time',
// //     types: { campaignUpdates: true, offers: false, interactions: true },
// //   });
// //   const [subscriptions] = useState([
// //     { id: 1, tier: 'Premium', status: 'Active', renewal: '2025-06-15', cost: 5000 },
// //   ]);
// //   const [analytics] = useState({
// //     demographics: { age: '18-35', gender: '55% Female', location: 'Pakistan' },
// //     engagement: { followerGrowth: 150, engagementRate: '4.8%', reach: 6000 },
// //   });
// //   const [error, setError] = useState('');

// //   const handleProfileUpdate = (e) => {
// //     e.preventDefault();
// //     if (profile.profilePicture && profile.profilePicture.size > 2 * 1024 * 1024) {
// //       setError('Profile picture must be less than 2MB');
// //       return;
// //     }
// //     // Mock profile update
// //     setError('');
// //     alert('Profile updated successfully');
// //   };

// //   const handleNotificationUpdate = () => {
// //     // Mock notification settings update
// //     alert('Notification settings saved');
// //   };

// //   const handleExportAnalytics = (format) => {
// //     // Mock analytics export
// //     alert(`Exporting analytics in ${format}`);
// //   };

// //   return (
// //     <div className="manage-account">
// //       <h1>Manage Your Account</h1>
// //       <div className="tabs">
// //         {['profile', 'subscriptions', 'notifications', 'analytics', 'security'].map((tab) => (
// //           <button
// //             key={tab}
// //             className={activeTab === tab ? 'active' : ''}
// //             onClick={() => setActiveTab(tab)}
// //           >
// //             {tab.charAt(0).toUpperCase() + tab.slice(1)}
// //           </button>
// //         ))}
// //       </div>

// //       {error && <div className="error">{error}</div>}

// //       {activeTab === 'profile' && (
// //         <form onSubmit={handleProfileUpdate} className="section">
// //           <div className="profile-picture">
// //             <img src={profile.profilePicture} alt="Profile" />
// //             <input
// //               type="file"
// //               accept="image/jpeg,image/png,image/gif"
// //               onChange={(e) => {
// //                 const file = e.target.files[0];
// //                 if (file) {
// //                   setProfile({ ...profile, profilePicture: URL.createObjectURL(file) });
// //                 }
// //               }}
// //             />
// //           </div>
// //           <div>
// //             <label>Full Name</label>
// //             <input
// //               type="text"
// //               value={profile.name}
// //               onChange={(e) => setProfile({ ...profile, name: e.target.value })}
// //               required
// //             />
// //           </div>
// //           <div>
// //             <label>Username</label>
// //             <input
// //               type="text"
// //               value={profile.username}
// //               onChange={(e) => setProfile({ ...profile, username: e.target.value })}
// //               required
// //             />
// //           </div>
// //           <div>
// //             <label>Email</label>
// //             <input
// //               type="email"
// //               value={profile.email}
// //               onChange={(e) => setProfile({ ...profile, email: e.target.value })}
// //               required
// //             />
// //           </div>
// //           <div>
// //             <label>Phone Number</label>
// //             <input
// //               type="tel"
// //               value={profile.phone}
// //               onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
// //               pattern="\+[0-9]{10,15}"
// //               required
// //             />
// //           </div>
// //           <div>
// //             <label>Bio</label>
// //             <textarea
// //               value={profile.bio}
// //               onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
// //             />
// //           </div>
// //           <button type="submit">Save Profile</button>
// //         </form>
// //       )}

// //       {activeTab === 'subscriptions' && (
// //         <div className="section">
// //           <h2>Subscriptions</h2>
// //           {subscriptions.map((sub) => (
// //             <div key={sub.id} className="subscription">
// //               <p><strong>Tier:</strong> {sub.tier}</p>
// //               <p><strong>Status:</strong> {sub.status}</p>
// //               <p><strong>Renewal Date:</strong> {sub.renewal}</p>
// //               <p><strong>Estimated Cost:</strong> PKR {sub.cost}</p>
// //               <a href="#">View Invoice</a>
// //             </div>
// //           ))}
// //           <div>
// //             <label>Apply Coupon Code</label>
// //             <input type="text" placeholder="Enter code" />
// //             <button>Apply</button>
// //           </div>
// //           <p><strong>Predicted Monthly Cost:</strong> PKR 5500</p>
// //         </div>
// //       )}

// //       {activeTab === 'notifications' && (
// //         <div className="section">
// //           <h2>Notification Settings</h2>
// //           <div>
// //             <h3>Channels</h3>
// //             <label>
// //               <input
// //                 type="checkbox"
// //                 checked={notificationSettings.channels.email}
// //                 onChange={() =>
// //                   setNotificationSettings({
// //                     ...notificationSettings,
// //                     channels: { ...notificationSettings.channels, email: !notificationSettings.channels.email },
// //                   })
// //                 }
// //               />
// //               Email
// //             </label>
// //             <label>
// //               <input
// //                 type="checkbox"
// //                 checked={notificationSettings.channels.sms}
// //                 onChange={() =>
// //                   setNotificationSettings({
// //                     ...notificationSettings,
// //                     channels: { ...notificationSettings.channels, sms: !notificationSettings.channels.sms },
// //                   })
// //                 }
// //               />
// //               SMS
// //             </label>
// //             <label>
// //               <input
// //                 type="checkbox"
// //                 checked={notificationSettings.channels.push}
// //                 onChange={() =>
// //                   setNotificationSettings({
// //                     ...notificationSettings,
// //                     channels: { ...notificationSettings.channels, push: !notificationSettings.channels.push },
// //                   })
// //                 }
// //               />
// //               Push
// //             </label>
// //           </div>
// //           <div>
// //             <h3>Frequency</h3>
// //             <select
// //               value={notificationSettings.frequency}
// //               onChange={(e) => setNotificationSettings({ ...notificationSettings, frequency: e.target.value })}
// //             >
// //               <option value="real-time">Real-Time</option>
// //               <option value="daily">Daily Digest</option>
// //             </select>
// //           </div>
// //           <div>
// //             <h3>Notification Types</h3>
// //             <label>
// //               <input
// //                 type="checkbox"
// //                 checked={notificationSettings.types.campaignUpdates}
// //                 onChange={() =>
// //                   setNotificationSettings({
// //                     ...notificationSettings,
// //                     types: { ...notificationSettings.types, campaignUpdates: !notificationSettings.types.campaignUpdates },
// //                   })
// //                 }
// //               />
// //               Campaign Updates
// //             </label>
// //             <label>
// //               <input
// //                 type="checkbox"
// //                 checked={notificationSettings.types.offers}
// //                 onChange={() =>
// //                   setNotificationSettings({
// //                     ...notificationSettings,
// //                     types: { ...notificationSettings.types, offers: !notificationSettings.types.offers },
// //                   })
// //                 }
// //               />
// //               Promotional Offers
// //             </label>
// //             <label>
// //               <input
// //                 type="checkbox"
// //                 checked={notificationSettings.types.interactions}
// //                 onChange={() =>
// //                   setNotificationSettings({
// //                     ...notificationSettings,
// //                     types: { ...notificationSettings.types, interactions: !notificationSettings.types.interactions },
// //                   })
// //                 }
// //               />
// //               Influencer Interactions
// //             </label>
// //           </div>
// //           <div>
// //             <h3>Schedule Notifications</h3>
// //             <input type="date" />
// //             <input type="text" placeholder="Event description" />
// //             <button>Schedule</button>
// //           </div>
// //           <button onClick={handleNotificationUpdate}>Save Notification Settings</button>
// //         </div>
// //       )}

// //       {activeTab === 'analytics' && (
// //         <div className="section">
// //           <h2>Analytics Dashboard</h2>
// //           <div>
// //             <h3>Follower Demographics</h3>
// //             <p><strong>Age:</strong> {analytics.demographics.age}</p>
// //             <p><strong>Gender:</strong> {analytics.demographics.gender}</p>
// //             <p><strong>Location:</strong> {analytics.demographics.location}</p>
// //           </div>
// //           <div>
// //             <h3>Engagement Metrics</h3>
// //             <p><strong>Follower Growth:</strong> {analytics.engagement.followerGrowth}</p>
// //             <p><strong>Engagement Rate:</strong> {analytics.engagement.engagementRate}</p>
// //             <p><strong>Reach:</strong> {analytics.engagement.reach}</p>
// //           </div>
// //           <div>
// //             <button onClick={() => handleExportAnalytics('CSV')}>Export as CSV</button>
// //             <button onClick={() => handleExportAnalytics('PDF')}>Export as PDF</button>
// //           </div>
// //         </div>
// //       )}

// //       {activeTab === 'security' && (
// //         <div className="section">
// //           <h2>Security Settings</h2>
// //           <div>
// //             <label>New Password</label>
// //             <input type="password" />
// //           </div>
// //           <div>
// //             <label>Confirm Password</label>
// //             <input type="password" />
// //           </div>
// //           <label>
// //             <input type="checkbox" />
// //             Enable Two-Factor Authentication
// //           </label>
// //           <div>
// //             <h3>Recent Login Activity</h3>
// //             <p>2025-05-15 10:30 PM - Chrome, Pakistan</p>
// //           </div>
// //           <button className="danger">Log Out of All Devices</button>
// //           <button>Save Security Settings</button>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default ManageAccount;
// // import { useState } from 'react';
// // import '../ManageAccount.css';

// // const ManageAccount = () => {
// //   const [activeTab, setActiveTab] = useState('profile');
// //   const [profile, setProfile] = useState({
// //     name: 'Ali Hassan',
// //     username: 'alihassan',
// //     email: 'ali@example.com',
// //     phone: '+923001234567',
// //     profilePicture: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80',
// //   });
// //   const [notificationSettings, setNotificationSettings] = useState({
// //     channels: { email: true, sms: false, push: true },
// //     frequency: 'real-time',
// //     types: { campaignUpdates: true, offers: false },
// //   });
// //   const [error, setError] = useState('');

// //   const handleProfileUpdate = (e) => {
// //     e.preventDefault();
// //     if (profile.profilePicture && typeof profile.profilePicture !== 'string' && profile.profilePicture.size > 2 * 1024 * 1024) {
// //       setError('Profile picture must be less than 2MB');
// //       return;
// //     }
// //     setError('');
// //     alert('Profile updated successfully');
// //   };

// //   const handleNotificationUpdate = () => {
// //     alert('Notification settings saved');
// //   };

// //   return (
// //     <div className="manage-account">
// //       <h1>Account Settings</h1>
// //       <div className="tabs">
// //         {['profile', 'notifications', 'security'].map((tab) => (
// //           <button
// //             key={tab}
// //             className={activeTab === tab ? 'active' : ''}
// //             onClick={() => setActiveTab(tab)}
// //           >
// //             {tab.charAt(0).toUpperCase() + tab.slice(1)}
// //           </button>
// //         ))}
// //       </div>

// //       {error && <div className="error">{error}</div>}

// //       {activeTab === 'profile' && (
// //         <form onSubmit={handleProfileUpdate} className="section">
// //           <div className="profile-picture">
// //             <img src={profile.profilePicture} alt="Profile" />
// //             <input
// //               type="file"
// //               accept="image/jpeg,image/png,image/gif"
// //               onChange={(e) => {
// //                 const file = e.target.files[0];
// //                 if (file) {
// //                   setProfile({ ...profile, profilePicture: URL.createObjectURL(file) });
// //                 }
// //               }}
// //             />
// //           </div>
// //           <div>
// //             <label>Full Name</label>
// //             <input
// //               type="text"
// //               value={profile.name}
// //               onChange={(e) => setProfile({ ...profile, name: e.target.value })}
// //               required
// //             />
// //           </div>
// //           <div>
// //             <label>Username</label>
// //             <input
// //               type="text"
// //               value={profile.username}
// //               onChange={(e) => setProfile({ ...profile, username: e.target.value })}
// //               required
// //             />
// //           </div>
// //           <div>
// //             <label>Email</label>
// //             <input
// //               type="email"
// //               value={profile.email}
// //               onChange={(e) => setProfile({ ...profile, email: e.target.value })}
// //               required
// //             />
// //           </div>
// //           <div>
// //             <label>Phone Number</label>
// //             <input
// //               type="tel"
// //               value={profile.phone}
// //               onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
// //               pattern="\+[0-9]{10,15}"
// //               required
// //             />
// //           </div>
// //           <button type="submit">Save Changes</button>
// //         </form>
// //       )}

// //       {activeTab === 'notifications' && (
// //         <div className="section">
// //           <h2>Notification Preferences</h2>
// //           <div>
// //             <h3>Channels</h3>
// //             <label>
// //               <input
// //                 type="checkbox"
// //                 checked={notificationSettings.channels.email}
// //                 onChange={() =>
// //                   setNotificationSettings({
// //                     ...notificationSettings,
// //                     channels: { ...notificationSettings.channels, email: !notificationSettings.channels.email },
// //                   })
// //                 }
// //               />
// //               Email
// //             </label>
// //             <label>
// //               <input
// //                 type="checkbox"
// //                 checked={notificationSettings.channels.sms}
// //                 onChange={() =>
// //                   setNotificationSettings({
// //                     ...notificationSettings,
// //                     channels: { ...notificationSettings.channels, sms: !notificationSettings.channels.sms },
// //                   })
// //                 }
// //               />
// //               SMS
// //             </label>
// //             <label>
// //               <input
// //                 type="checkbox"
// //                 checked={notificationSettings.channels.push}
// //                 onChange={() =>
// //                   setNotificationSettings({
// //                     ...notificationSettings,
// //                     channels: { ...notificationSettings.channels, push: !notificationSettings.channels.push },
// //                   })
// //                 }
// //               />
// //               Push
// //             </label>
// //           </div>
// //           <div>
// //             <h3>Frequency</h3>
// //             <select
// //               value={notificationSettings.frequency}
// //               onChange={(e) => setNotificationSettings({ ...notificationSettings, frequency: e.target.value })}
// //             >
// //               <option value="real-time">Real-Time</option>
// //               <option value="daily">Daily Digest</option>
// //             </select>
// //           </div>
// //           <div>
// //             <h3>Notification Types</h3>
// //             <label>
// //               <input
// //                 type="checkbox"
// //                 checked={notificationSettings.types.campaignUpdates}
// //                 onChange={() =>
// //                   setNotificationSettings({
// //                     ...notificationSettings,
// //                     types: { ...notificationSettings.types, campaignUpdates: !notificationSettings.types.campaignUpdates },
// //                   })
// //                 }
// //               />
// //               Campaign Updates
// //             </label>
// //             <label>
// //               <input
// //                 type="checkbox"
// //                 checked={notificationSettings.types.offers}
// //                 onChange={() =>
// //                   setNotificationSettings({
// //                     ...notificationSettings,
// //                     types: { ...notificationSettings.types, offers: !notificationSettings.types.offers },
// //                   })
// //                 }
// //               />
// //               Promotional Offers
// //             </label>
// //           </div>
// //           <button className = "save-preferences" onClick={handleNotificationUpdate}>Save Preferences</button>
// //         </div>
// //       )}

// //       {activeTab === 'security' && (
// //         <div className="section">
// //           <h2>Security Settings</h2>
// //           <div>
// //             <label>New Password</label>
// //             <input type="password" />
// //           </div>
// //           <div>
// //             <label>Confirm Password</label>
// //             <input type="password" />
// //           </div>
// //           <div>
// //             <h3>Recent Login Activity</h3>
// //             <p>2025-05-15 10:30 PM - Chrome, Pakistan</p>
// //           </div>
// //           <button className="danger">Log Out of All Devices</button>
// //           <button  className = "save-preferences" >Save Security Settings</button>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default ManageAccount;
// import React, { useState, useRef } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { Email, ArrowBack } from '@mui/icons-material';
// import '../ManageAccount.css';
// import '../ForgetPassword.css';

// const ForgetPassword = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [email, setEmail] = useState(location.state?.email || '');
//   const [isCodeSent, setIsCodeSent] = useState(false);
//   const [isCodeVerified, setIsCodeVerified] = useState(false);
//   const [code, setCode] = useState(['', '', '', '', '', '']);
//   const [newPassword, setNewPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [newPasswordError, setNewPasswordError] = useState('');
//   const [confirmPasswordError, setConfirmPasswordError] = useState('');
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

//       if (!response.ok) throw new Error(data.error || 'Failed to send code');

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

//       if (!response.ok) throw new Error(data.error || 'Invalid code');

//       setIsCodeVerified(true);
//     } catch (error) {
//       setError(error.message || 'Verification failed. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const validatePasswords = () => {
//     let isValid = true;
//     setNewPasswordError('');
//     setConfirmPasswordError('');

//     if (newPassword.length < 8) {
//       setNewPasswordError('Password must be at least 8 characters long');
//       isValid = false;
//     }

//     if (newPassword !== confirmPassword) {
//       setConfirmPasswordError('Passwords do not match');
//       isValid = false;
//     }

//     return isValid;
//   };

//   const handleResetPassword = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');

//     if (!validatePasswords()) {
//       setLoading(false);
//       return;
//     }

//     try {
//       const response = await fetch('http://localhost:8080/reset-password', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, newPassword }),
//       });
//       const data = await response.json();

//       if (!response.ok) throw new Error(data.error || 'Failed to reset password');

//       navigate('/login', { state: { message: 'Password reset successfully. Please log in.' } });
//     } catch (error) {
//       setError(error.message || 'Password reset failed. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="promohub-forgot-container">
//       <div className="promohub-forgot-card">
//         <button className="promohub-back-button" onClick={() => navigate(<ManageAccount/>)}>
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
//         ) : !isCodeVerified ? (
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
//         ) : (
//           <form onSubmit={handleResetPassword} className="section">
//             <h2>Security Settings</h2>
//             <div>
//               <label>New Password</label>
//               <input
//                 type="password"
//                 value={newPassword}
//                 onChange={(e) => {
//                   setNewPassword(e.target.value);
//                   setNewPasswordError(e.target.value.length < 8 ? 'Password must be at least 8 characters long' : '');
//                 }}
//                 placeholder="Enter new password"
//                 required
//                 disabled={loading}
//                 className={newPasswordError ? 'error-input' : ''}
//               />
//               {newPasswordError && <div className="promohub-error-message">{newPasswordError}</div>}
//             </div>
//             <div>
//               <label>Confirm Password</label>
//               <input
//                 type="password"
//                 value={confirmPassword}
//                 onChange={(e) => {
//                   setConfirmPassword(e.target.value);
//                   setConfirmPasswordError(e.target.value !== newPassword ? 'Passwords do not match' : '');
//                 }}
//                 placeholder="Confirm new password"
//                 required
//                 disabled={loading}
//                 className={confirmPasswordError ? 'error-input' : ''}
//               />
//               {confirmPasswordError && <div className="promohub-error-message">{confirmPasswordError}</div>}
//             </div>
//             <button 
//               type="submit" 
//               className="save-preferences"
//               disabled={loading || newPasswordError || confirmPasswordError}
//             >
//               {loading ? 'Saving...' : 'Save Security Settings'}
//             </button>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// };

// const ManageAccount = () => {
//   const [activeTab, setActiveTab] = useState('profile');
//   const [showForgetPassword, setShowForgetPassword] = useState(false);
//   const [profile, setProfile] = useState({
//     name: 'Ali Hassan',
//     username: 'alihassan',
//     email: 'ali@example.com',
//     phone: '+923001234567',
//     profilePicture: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80',
//   });
//   const [notificationSettings, setNotificationSettings] = useState({
//     channels: { email: true, sms: false, push: true },
//     frequency: 'real-time',
//     types: { campaignUpdates: true, offers: false },
//   });
//   const [error, setError] = useState('');

//   const handleProfileUpdate = (e) => {
//     e.preventDefault();
//     if (profile.profilePicture && typeof profile.profilePicture !== 'string' && profile.profilePicture.size > 2 * 1024 * 1024) {
//       setError('Profile picture must be less than 2MB');
//       return;
//     }
//     setError('');
//     alert('Profile updated successfully');
//   };

//   const handleNotificationUpdate = () => {
//     alert('Notification settings saved');
//   };

//   const handleLogOutAllDevices = () => {
//     alert('Logged out of all devices');
//   };

//   return (
//     <div className="manage-account">
//       <h1>Account Settings</h1>
//       <div className="tabs">
//         {['profile', 'notifications', 'security'].map((tab) => (
//           <button
//             key={tab}
//             className={activeTab === tab ? 'active' : ''}
//             onClick={() => {
//               setActiveTab(tab);
//               setShowForgetPassword(false); // Reset ForgetPassword view when switching tabs
//             }}
//           >
//             {tab.charAt(0).toUpperCase() + tab.slice(1)}
//           </button>
//         ))}
//       </div>

//       {error && <div className="error">{error}</div>}

//       {activeTab === 'profile' && (
//         <form onSubmit={handleProfileUpdate} className="section">
//           <div className="profile-picture">
//             <img src={profile.profilePicture} alt="Profile" />
//             <input
//               type="file"
//               accept="image/jpeg,image/png,image/gif"
//               onChange={(e) => {
//                 const file = e.target.files[0];
//                 if (file) {
//                   setProfile({ ...profile, profilePicture: URL.createObjectURL(file) });
//                 }
//               }}
//             />
//           </div>
//           <div>
//             <label>Full Name</label>
//             <input
//               type="text"
//               value={profile.name}
//               onChange={(e) => setProfile({ ...profile, name: e.target.value })}
//               required
//             />
//           </div>
//           <div>
//             <label>Username</label>
//             <input
//               type="text"
//               value={profile.username}
//               onChange={(e) => setProfile({ ...profile, username: e.target.value })}
//               required
//             />
//           </div>
//           <div>
//             <label>Email</label>
//             <input
//               type="email"
//               value={profile.email}
//               onChange={(e) => setProfile({ ...profile, email: e.target.value })}
//               required
//             />
//           </div>
//           <div>
//             <label>Phone Number</label>
//             <input
//               type="tel"
//               value={profile.phone}
//               onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
//               pattern="\+[0-9]{10,15}"
//               required
//             />
//           </div>
//           <button type="submit">Save Changes</button>
//         </form>
//       )}

//       {activeTab === 'notifications' && (
//         <div className="section">
//           <h2>Notification Preferences</h2>
//           <div>
//             <h3>Channels</h3>
//             <label>
//               <input
//                 type="checkbox"
//                 checked={notificationSettings.channels.email}
//                 onChange={() =>
//                   setNotificationSettings({
//                     ...notificationSettings,
//                     channels: { ...notificationSettings.channels, email: !notificationSettings.channels.email },
//                   })
//                 }
//               />
//               Email
//             </label>
//             <label>
//               <input
//                 type="checkbox"
//                 checked={notificationSettings.channels.sms}
//                 onChange={() =>
//                   setNotificationSettings({
//                     ...notificationSettings,
//                     channels: { ...notificationSettings.channels, sms: !notificationSettings.channels.sms },
//                   })
//                 }
//               />
//               SMS
//             </label>
//             <label>
//               <input
//                 type="checkbox"
//                 checked={notificationSettings.channels.push}
//                 onChange={() =>
//                   setNotificationSettings({
//                     ...notificationSettings,
//                     channels: { ...notificationSettings.channels, push: !notificationSettings.channels.push },
//                   })
//                 }
//               />
//               Push
//             </label>
//           </div>
//           <div>
//             <h3>Frequency</h3>
//             <select
//               value={notificationSettings.frequency}
//               onChange={(e) => setNotificationSettings({ ...notificationSettings, frequency: e.target.value })}
//             >
//               <option value="real-time">Real-Time</option>
//               <option value="daily">Daily Digest</option>
//             </select>
//           </div>
//           <div>
//             <h3>Notification Types</h3>
//             <label>
//               <input
//                 type="checkbox"
//                 checked={notificationSettings.types.campaignUpdates}
//                 onChange={() =>
//                   setNotificationSettings({
//                     ...notificationSettings,
//                     types: { ...notificationSettings.types, campaignUpdates: !notificationSettings.types.campaignUpdates },
//                   })
//                 }
//               />
//               Campaign Updates
//             </label>
//             <label>
//               <input
//                 type="checkbox"
//                 checked={notificationSettings.types.offers}
//                 onChange={() =>
//                   setNotificationSettings({
//                     ...notificationSettings,
//                     types: { ...notificationSettings.types, offers: !notificationSettings.types.offers },
//                   })
//                 }
//               />
//               Promotional Offers
//             </label>
//           </div>
//           <button className="save-preferences" onClick={handleNotificationUpdate}>Save Preferences</button>
//         </div>
//       )}

//       {activeTab === 'security' && !showForgetPassword && (
//         <div className="section">
//           <h2>Security Settings</h2>
//           <div>
//             <button 
//               className="promohub-send-button" 
//               onClick={() => setShowForgetPassword(true)}
//             >
//               Forget Password
//             </button>
//           </div>
//           <div>
//             <h3>Recent Login Activity</h3>
//             <p>2025-05-15 10:30 PM - Chrome, Pakistan</p>
//           </div>
//           <button className="danger" onClick={handleLogOutAllDevices}>
//             Log Out of All Devices
//           </button>
//         </div>
//       )}

//       {activeTab === 'security' && showForgetPassword && <ForgetPassword />}
//     </div>
//   );
// };

// export default ManageAccount;
import React, { useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Email, ArrowBack } from '@mui/icons-material';
import '../ManageAccount.css';
import '../ForgetPassword.css';

const ForgetPassword = ({ onBack }) => {
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
        <button className="promohub-back-button" onClick={onBack}>
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
              className="save-preferences"
              disabled={loading || newPasswordError || confirmPasswordError}
            >
              {loading ? 'Saving...' : 'Save Security Settings'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

const ManageAccount = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [showForgetPassword, setShowForgetPassword] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Ali Hassan',
    username: 'alihassan',
    email: 'ali@example.com',
    phone: '+923001234567',
    profilePicture: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80',
  });
  const [notificationSettings, setNotificationSettings] = useState({
    channels: { email: true, sms: false, push: true },
    frequency: 'real-time',
    types: { campaignUpdates: true, offers: false },
  });
  const [error, setError] = useState('');

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    if (profile.profilePicture && typeof profile.profilePicture !== 'string' && profile.profilePicture.size > 2 * 1024 * 1024) {
      setError('Profile picture must be less than 2MB');
      return;
    }
    setError('');
    alert('Profile updated successfully');
  };

  const handleNotificationUpdate = () => {
    alert('Notification settings saved');
  };

  const handleLogOutAllDevices = () => {
    alert('Logged out of all devices');
  };

  return (
    <div className="manage-account">
      <h1>Account Settings</h1>
      <div className="tabs">
        {['profile', 'notifications', 'security'].map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? 'active' : ''}
            onClick={() => {
              setActiveTab(tab);
              setShowForgetPassword(false); // Reset ForgetPassword view when switching tabs
            }}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {error && <div className="error">{error}</div>}

      {activeTab === 'profile' && (
        <form onSubmit={handleProfileUpdate} className="section">
          <div className="profile-picture">
            <img src={profile.profilePicture} alt="Profile" />
            <input
              type="file"
              accept="image/jpeg,image/png,image/gif"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  setProfile({ ...profile, profilePicture: URL.createObjectURL(file) });
                }
              }}
            />
          </div>
          <div>
            <label>Full Name</label>
            <input
              type="text"
              value={profile.name}
              onChange={(e) => setProfile({ ...profile, name: e.target.value })}
              required
            />
          </div>
          <div>
            <label>Username</label>
            <input
              type="text"
              value={profile.username}
              onChange={(e) => setProfile({ ...profile, username: e.target.value })}
              required
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              value={profile.email}
              onChange={(e) => setProfile({ ...profile, email: e.target.value })}
              required
            />
          </div>
          <div>
            <label>Phone Number</label>
            <input
              type="tel"
              value={profile.phone}
              onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
              pattern="\+[0-9]{10,15}"
              required
            />
          </div>
          <button type="submit">Save Changes</button>
        </form>
      )}

      {activeTab === 'notifications' && (
        <div className="section">
          <h2>Notification Preferences</h2>
          <div>
            <h3>Channels</h3>
            <label>
              <input
                type="checkbox"
                checked={notificationSettings.channels.email}
                onChange={() =>
                  setNotificationSettings({
                    ...notificationSettings,
                    channels: { ...notificationSettings.channels, email: !notificationSettings.channels.email },
                  })
                }
              />
              Email
            </label>
            <label>
              <input
                type="checkbox"
                checked={notificationSettings.channels.sms}
                onChange={() =>
                  setNotificationSettings({
                    ...notificationSettings,
                    channels: { ...notificationSettings.channels, sms: !notificationSettings.channels.sms },
                  })
                }
              />
              SMS
            </label>
            <label>
              <input
                type="checkbox"
                checked={notificationSettings.channels.push}
                onChange={() =>
                  setNotificationSettings({
                    ...notificationSettings,
                    channels: { ...notificationSettings.channels, push: !notificationSettings.channels.push },
                  })
                }
              />
              Push
            </label>
          </div>
          <div>
            <h3>Frequency</h3>
            <select
              value={notificationSettings.frequency}
              onChange={(e) => setNotificationSettings({ ...notificationSettings, frequency: e.target.value })}
            >
              <option value="real-time">Real-Time</option>
              <option value="daily">Daily Digest</option>
            </select>
          </div>
          <div>
            <h3>Notification Types</h3>
            <label>
              <input
                type="checkbox"
                checked={notificationSettings.types.campaignUpdates}
                onChange={() =>
                  setNotificationSettings({
                    ...notificationSettings,
                    types: { ...notificationSettings.types, campaignUpdates: !notificationSettings.types.campaignUpdates },
                  })
                }
              />
              Campaign Updates
            </label>
            <label>
              <input
                type="checkbox"
                checked={notificationSettings.types.offers}
                onChange={() =>
                  setNotificationSettings({
                    ...notificationSettings,
                    types: { ...notificationSettings.types, offers: !notificationSettings.types.offers },
                  })
                }
              />
              Promotional Offers
            </label>
          </div>
          <button className="save-preferences" onClick={handleNotificationUpdate}>Save Preferences</button>
        </div>
      )}

      {activeTab === 'security' && !showForgetPassword && (
        <div className="section">
          <h2>Security Settings</h2>
          <div>
            <button 
              className="promohub-send-button" 
              onClick={() => setShowForgetPassword(true)}
            >
              Forget Password
            </button>
          </div>
          <div>
            <h3>Recent Login Activity</h3>
            <p>2025-05-15 10:30 PM - Chrome, Pakistan</p>
          </div>
          <button className="danger" onClick={handleLogOutAllDevices}>
            Log Out of All Devices
          </button>
        </div>
      )}

      {activeTab === 'security' && showForgetPassword && <ForgetPassword onBack={() => setShowForgetPassword(false)} />}
    </div>
  );
};

export default ManageAccount;