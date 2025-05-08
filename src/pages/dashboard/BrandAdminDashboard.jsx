import React, { useState, useEffect } from "react";
import "./BrandAdminDashboard.css";

// Basic CampaignCard component inside the same file
const CampaignCard = ({ campaign, onView, onEdit, onDelete }) => (
  <div className="campaign-card">
    <h4>{campaign.name}</h4>
    <p>Status: {campaign.status}</p>
    <p>Objective: {campaign.objective}</p>
    <button onClick={() => onView(campaign)}>View</button>
    <button onClick={() => onEdit(campaign)}>Edit</button>
    <button onClick={() => onDelete(campaign.id)}>Delete</button>
  </div>
);

const BrandAdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [campaigns, setCampaigns] = useState([]);
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch campaigns only when "campaigns" tab is selected
  useEffect(() => {
    if (activeTab === "campaigns") {
      const fetchCampaigns = async () => {
        setLoading(true);
        try {
          const token = localStorage.getItem("token");
          const res = await fetch("http://localhost:8080/brand/campaigns", {
            credential: "include",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            
          });
          console.log(res)
          const data = await res.json();
          setCampaigns(data);
        } catch (err) {
          console.error("Failed to fetch campaigns", err);
        } finally {
          setLoading(false);
        }
      };

      fetchCampaigns();
    }
  }, [activeTab]);

  const handleView = (campaign) => setSelectedCampaign(campaign);
  const handleEdit = (campaign) => alert(`Edit campaign: ${campaign.name}`);
  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`http://localhost:8080/brand/campaigns/${id}`, {
        method: "DELETE",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.ok) {
        setCampaigns(campaigns.filter(c => c.id !== id));
      } else {
        console.error("Failed to delete");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return (
          <>
            <section className="summary-cards">
              <div className="card"><h3>Active Campaigns</h3><p>8</p></div>
              <div className="card"><h3>Budget Utilization</h3><p>75%</p></div>
              <div className="card"><h3>Ad Performance (CTR)</h3><p>5.2%</p></div>
              <div className="card"><h3>Alerts</h3><p>3 new</p></div>
            </section>
            <section className="performance-charts">
              <div className="chart line-chart"><h3>Campaign Trends</h3><div className="chart-placeholder">[Line Chart]</div></div>
              <div className="chart bar-chart"><h3>Ad Metrics</h3><div className="chart-placeholder">[Bar Chart]</div></div>
            </section>
            <section className="quick-actions">
              <button>Create New Campaign</button>
              <button>Adjust Bidding</button>
              <button>View Detailed Reports</button>
            </section>
          </>
        );

      case "campaigns":
        return (
          <>
            {loading ? (
              <p>Loading campaigns...</p>
            ) : selectedCampaign ? (
              <div className="campaign-detail">
                <h3>{selectedCampaign.name}</h3>
                <p>Status: {selectedCampaign.status}</p>
                <p>Objective: {selectedCampaign.objective}</p>
                <p>Budget: {selectedCampaign.budget}</p>
                <p>Start: {selectedCampaign.start_date}</p>
                <p>End: {selectedCampaign.end_date}</p>
                <button onClick={() => setSelectedCampaign(null)}>Back to List</button>
              </div>
            ) : (
              <div className="campaign-list">
                {campaigns.map((campaign) => (
                  <CampaignCard
                    key={campaign.id}
                    campaign={campaign}
                    onView={handleView}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                  />
                ))}
              </div>
            )}
          </>
        );

      case "ads": return <div>[Ads Management Component Placeholder]</div>;
      case "analytics": return <div>[Analytics Component Placeholder]</div>;
      case "billing": return <div>[Billing Component Placeholder]</div>;
      case "notifications": return <div>[Notifications Component Placeholder]</div>;
      case "support": return <div>[Support Component Placeholder]</div>;

      default:
        return <div>Select a tab to view content.</div>;
    }
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Brand Promotion Platform - Dashboard</h1>
        <nav className="dashboard-nav">
          <ul>
            {["home", "campaigns", "ads", "analytics", "billing", "notifications", "support"].map(tab => (
              <li key={tab}>
                <button onClick={() => {
                  setActiveTab(tab);
                  setSelectedCampaign(null);
                }}>
                  {tab[0].toUpperCase() + tab.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <div className="dashboard-controls">
        <div className="control-item">
          <label>Date Range:</label>
          <select>
            <option>Last 30 days ▼</option>
            <option>Last 7 days</option>
            <option>Last 90 days</option>
          </select>
        </div>
        <div className="control-item search-filter">
          <label>Search:</label>
          <input type="text" placeholder="Search..." />
          <button className="filter-btn">Filter ▼</button>
        </div>
      </div>

      <main className="dashboard-content">
        {renderContent()}
      </main>
    </div>
  );
};

export default BrandAdminDashboard;
