// import React from "react";
// import "../Home.css"
// import image from "../assets/Profile.jpeg";
// import {useState} from "react";
// import "@google/model-viewer";
// function HomeMain() {
//     const [showDropdown, setShowDropdown] = useState(false);
//     const toggleDropdown = () =>
//     {
//         setShowDropdown(!showDropdown);
//     }
//   return (
//     <div className="home-main">
//         <header className="header">
//         <h1>Promotion Hub</h1>
//         <div className = "avatar-container">
//             <button onClick={toggleDropdown} className= "avatar-button">
//                 <img src={image} alt="user avatar" />
//             </button>
//             {showDropdown &&(
//             <div className = "user-avatar">
//                 <li className="dropdown-menu">
//                 <ul>Profile</ul>
//                 <ul>Setting</ul>
//                 <ul>Login</ul>
//                 </li>
//             </div>
//         )} 
//         </div>
//         </header>
//         <section class="hero">
//             <h2>Welcome to the Ultimate Digital Advertising Revolution</h2>
//             <p>Step into a world where cutting-edge technology meets creative brilliance. Harness AI, AR, and dynamic collaboration for campaigns that captivate your audience.</p>
//         </section>
//         <section class="features" id="features">
//             <h2>Our Game-Changing Features</h2>
//             <div class="feature-list">
//             <div class="feature">
//                 <h3>AI-Powered Magic</h3>
//                 <p>AR-Enabled Experience and 3D Model Integration for enchanced brand engagement.</p>
//             </div>
//             <div class="feature">
//                 <h3>Influencer & Brand Collaboration</h3>
//                 <p>Partner with top influencers and brands for powerful synergy in marketing.</p>
//             </div>
//             </div>
//             <footer class="footer">
//                 <p>&copy; 2025 BrandHive. All rights reserved.</p>
//             </footer>
//         </section>
//     </div>
//   );
// }
// export default HomeMain;
import React, { useState,useEffect, useRef } from "react";
import "../Home.css";
import image from "../assets/Profile.jpeg";
import "@google/model-viewer";

function HomeMain() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [color, setColor] = useState("#ffffff");
  const [activeFeature, setActiveFeature] = useState("ar-ad");
  const intervalRef = useRef (null);
  const [activeIndex,setActiveIndex] = useState(0);
  const currentIndexRef = useRef(0);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const updateColor = () => {
    const viewer = document.querySelector("model-viewer");
    if (viewer?.model?.materials) {
      viewer.model.materials.forEach((mat) => {
        mat.pbrMetallicRoughness.setBaseColorFactor([
          parseInt(color.slice(1, 3), 16) / 255,
          parseInt(color.slice(3, 5), 16) / 255,
          parseInt(color.slice(5, 7), 16) / 255,
          1,
        ]);
      });
    }
  };

  const featureData = [
    {
      id: "ar-ad",
      title: "Interactive AR Ads",
      video: "media/ar-ad-demo.mp4",
      desc: "Engage users with immersive augmented reality experiences.",
    },
    {
      id: "influencer-matching",
      title: "Find the Best Influencers",
      video: "media/influencer-matching-demo.mp4",
      desc: "AI-powered matching to connect with influencers in your niche.",
    },
    {
      id: "cross-brand",
      title: "Cross-Brand Collaboration",
      video: "media/cross-brand-demo.mp4",
      desc: "Partner with complementary brands for shared campaigns.",
    },
    {
      id: "auto-bids",
      title: "Real-Time Automatic Bidding",
      video: "media/auto-bids-demo.mp4",
      desc: "Optimize ad spend with AI-driven bidding strategies.",
    },
    {
      id: "ai-ad-creation",
      title: "AI-Powered Ad Creation",
      video: "media/ai-ad-creation-demo.mp4",
      desc: "Generate high-performing ads tailored to your audience.",
    },
  ];
  useEffect (()=>{
    currentIndexRef.current = activeIndex;
  }, [activeIndex]);
  useEffect (()=>{
    startAutoRotate();
    return()=>clearInterval(intervalRef.current);
  }, [])
  const startAutoRotate = ()=>{
    intervalRef.current  = setInterval (()=>{
      const nextIndex = (currentIndexRef.current +1 )%featureData.length;
      setActiveIndex(nextIndex)
    }, 5000)
  };
  const handleDotClick = (index)=>{
    setActiveFeature(index);
    currentIndexRef.current = index;
  };
  const currentFeature = featureData[activeIndex]
  return (
    <div className="home-main">
      <header className="header">
        <h1>Promotion Hub</h1>
        <div className="avatar-container">
          <button onClick={toggleDropdown} className="avatar-button">
            <img src={image} alt="user avatar" />
          </button>
          {showDropdown && (
            <div className="user-avatar">
              <div className="dropdown-menu">
                <img src ={image} alt = "user avatar"/>
                <p>Abdullah Zahid</p>
                <p id="email">muhammadabdullah146k@gmail.com</p>
                <button id="mngacc">Manage your account</button>
                <button id="crtacc">Create New Account</button>
                <button id="signout">Sign Out</button>
                <div className="legal-links">
                  <ul>
                    <li>Privacy Policy</li>
                    <li>Terms of service</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      <section className="hero">
        <h2>Welcome to the Ultimate Digital Advertising Revolution</h2>
        <p>
          Step into a world where cutting-edge technology meets creative
          brilliance. Harness AI, AR, and dynamic collaboration for campaigns
          that captivate your audience.
        </p>
      </section>

      <section id="feature-showcase">
        <h2 className="section-title">Our Game-Changing Features</h2>
        <div className="feature-container">
        <div className="feature active" id={currentFeature.id}>
          <h2>{currentFeature.title}</h2>
          <video autoPlay loop muted>
            <source src={currentFeature.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p>{currentFeature.description}</p>
        </div>
      </div>

      <div className="feature-nav">
        {featureData.map((feature, i) => (
          <span
            key={feature.id}
            className={`dot ${i === activeIndex ? "active" : ""}`}
            onClick={() => handleDotClick(i)}
          />
        ))}
      </div>
      </section>

      {/* AR Shoe Ad Experience Section */}
      <section className="ar-experience" style={{ textAlign: "center", padding: "3rem 1rem" }}>
        <h2 className="section-title">Try Our Interactive AR Shoe Ad</h2>
        <model-viewer
          src="/models/sport_shoe.glb"
          alt="A 3D model of a shoe"
          ar
          ar-modes="scene-viewer webxr quick-look"
          environment-image="neutral"
          auto-rotate
          camera-controls
          style={{ width: "500px", height: "500px", margin: "0 auto" }}
          exposure="1"
        >
          <button
            slot="ar-button"
            style={{
              position: "absolute",
              top: "10px",
              left: "10px",
              backgroundColor: "#111",
              color: "#fff",
              padding: "8px 12px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            View in AR
          </button>
        </model-viewer>

        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          style={{ marginTop: "20px", width: "60px", height: "40px", cursor: "pointer" }}
        />

        <button
          onClick={updateColor}
          style={{
            marginTop: "10px",
            padding: "10px 20px",
            backgroundColor: "#3b82f6",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Change Shoe Color
        </button>
      </section>

      <footer className="footer">
        <p>&copy; 2025 BrandHive. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomeMain;
