import React from 'react';
import './AdministratorDashboard.css';
import notification from '../../assets/notification-icon.jpeg';
const data = [
  {
    totalUsers: 1243,
    activeCampaigns: 37,
    pendingApprovals: 12,
    notifications: [
      {
        type: "Security Alert",
        message: "Multiple failed login attempts detected.",
        timestamp: "2025-04-21T08:42:00Z"
      },
      {
        type: "Campaign Status",
        message: "Campaign 'Spring Buzz 2025' flagged for review.",
        timestamp: "2025-04-21T07:30:00Z"
      },
      {
        type: "System Update",
        message: "AR Module has been updated successfully.",
        timestamp: "2025-04-20T18:12:00Z"
      }
    ],
    recentCampaigns: [
      {
        campaignName: "Summer Splash 2025",
        brand: "AquaZon",
        status: "Active",
        budget: 10000,
        reach: 8560,
        engagement: 4870
      },
      {
        campaignName: "EcoFriendly Move",
        brand: "Green Planet",
        status: "Draft",
        budget: 5000,
        reach: 0,
        engagement: 0
      },
      {
        campaignName: "Ramadan Sale Blitz",
        brand: "StyleKart",
        status: "Flagged",
        budget: 12000,
        reach: 9230,
        engagement: 3920
      }
    ]
  }
];

const AdministratorDashboard = () => {
  const dashboard = data[0];

  return (
    <div className="dashboard">
        <header className='admin-header'> <h1>Administrator Dashboard<img src = {notification}></img></h1>
        
        </header>
     
      <div className="stats">
        <div className="card">Total Users: {dashboard.totalUsers}</div>
        <div className="card">Active Campaigns: {dashboard.activeCampaigns}</div>
        <div className="card">Pending Approvals: {dashboard.pendingApprovals}</div>
      </div>

      <div className="section">
        <h2>Notifications</h2>
        <ul className="list">
          {dashboard.notifications.map((n, i) => (
            <li key={i} className="list-item">
              <strong>{n.type}:</strong> {n.message}
              <span className="timestamp">
                {new Date(n.timestamp).toLocaleString()}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="section">
        <h2>Recent Campaigns</h2>
        <div className="campaigns">
          {dashboard.recentCampaigns.map((campaign, i) => (
            <div key={i} className="campaign-card">
              <h3>{campaign.campaignName}</h3>
              <p><strong>Brand:</strong> {campaign.brand}</p>
              <p><strong>Status:</strong> {campaign.status}</p>
              <p><strong>Budget:</strong> ${campaign.budget}</p>
              <p><strong>Reach:</strong> {campaign.reach}</p>
              <p><strong>Engagement:</strong> {campaign.engagement}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdministratorDashboard;
