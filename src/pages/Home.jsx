import React, { useState, useEffect } from "react";
import "../Home.css";

function Home() {
  const [userRole, setUserRole] = useState("brandAdmin"); // Default to brandAdmin for testing
  const [userEmail, setUserEmail] = useState("");
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // Retrieve the user's role and email from localStorage after login
    const role = localStorage.getItem("userRole");
    const email = localStorage.getItem("userEmail");
    setUserRole(role);
    setUserEmail(email);

    // Fetch campaigns from the Go backend API
    fetch("http://localhost:8000/campaigns")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setCampaigns(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching campaigns:", err);
        setError("Failed to load campaigns");
        setLoading(false);
      });
  }, []);

  // Filter campaigns for brandAdmin to show only their campaigns
  //const displayedCampaigns =
    userRole === "brandAdmin"
      ? campaigns.filter((campaign) => campaign.created_by === userEmail) // Updated for Go backend
      : campaigns;

  return (
    <div className="page home">
      <h1>Welcome to the Brand Promotion Platform</h1>
      <div><header class="header">
        <h1>BrandHive</h1>
        <nav>
            <ul>
                <li><a href="#features">Features</a></li>
                <li><a href="#how-it-works">How It Works</a></li>
                <li><a href="social.html">Social Media</a></li>
                <li><a href="#get-started" class="btn">Get Started</a></li>
            </ul>
        </nav>
    </header>

    <section class="hero">
        <h2>Welcome to the Ultimate Digital Advertising Revolution</h2>
        <p>Step into a world where cutting-edge technology meets creative brilliance. Harness AI, AR, and dynamic collaboration for campaigns that captivate your audience.</p>
        <a href="social.html" class="btn">Explore Our Social Media</a>
    </section>

    <section id="features" class="features">
        <h2>Our Game-Changing Features</h2>
        <div class="feature-list">
            <div class="feature">
                <h3>AI-Powered Magic</h3>
                <p>Smart Audience Targeting, Predictive Budgeting, and Dynamic Ad Customization.</p>
            </div>
            <div class="feature">
                <h3>Immersive Augmented Reality (AR)</h3>
                <p>AR-Enabled Experiences and 3D Model Integration for enhanced brand engagement.</p>
            </div>
            <div class="feature">
                <h3>Influencer & Brand Collaboration</h3>
                <p>Partner with top influencers and brands for powerful synergy in marketing.</p>
            </div>
        </div>
    </section>

    <section id="how-it-works" class="how-it-works">
        <h2>How It Works</h2>
        <ol>
            <li>Launch Your Campaign: Set goals, budget, and AI-driven audience selection.</li>
            <li>Collaborate & Create: Team up with influencers and integrate user-generated content.</li>
            <li>Monitor & Optimize: Use our unified dashboard for real-time campaign performance tracking.</li>
            <li>Secure & Scale: A secure platform built for growth and adaptability.</li>
        </ol>
    </section>

    <footer class="footer">
        <p>&copy; 2025 BrandHive. All rights reserved.</p>
    </footer>
</div>
      {loading ? (
        <p>Loading campaigns...</p>
      ) : error ? (
        <p>{error}</p>
      ) : userRole === "brandAdmin" ? (
        <div>
          <h2>Your Active Campaigns</h2>
          {/* {displayedCampaigns.length > 0 ? (
            <ul>
              {displayedCampaigns.map((campaign) => (
                <li key={campaign.id}>
                  <strong>{campaign.campaign_name}</strong>: {campaign.description}
                </li>
              ))}
            </ul>
          ) : (
            <p>No active campaigns found for your brand.</p>
          )} */}
          <div> <h1>Analytics</h1></div>
        </div>
        
      ) : userRole === "influencer" || userRole === "endUser" ? (
        <div>
          <h2>All Campaigns</h2>
          {campaigns.length > 0 ? (
            <ul>
              {campaigns.map((campaign) => (
                <li key={campaign.id}>
                  <strong>{campaign.campaign_name}</strong>: {campaign.description}
                </li>
              ))}
            </ul>
          ) : (
            <p>No campaigns available at the moment.</p>
          )}
        </div>
      ) : (
        <p>Please log in to view campaigns.</p>
      )}
    </div>
  );
}

export default Home;
