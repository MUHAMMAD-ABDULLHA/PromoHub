import React from 'react';
import '../AdminCampaignManagement.css';

const campaigns = [
  {
    id: 101,
    name: "Ramadan Sale Blitz",
    brand: "StyleKart",
    status: "Active",
    budget: 12000,
    reach: 9230,
    engagement: 3920
  },
  {
    id: 102,
    name: "EcoFriendly Move",
    brand: "Green Planet",
    status: "Flagged",
    budget: 5000,
    reach: 3000,
    engagement: 1200
  }
];

const AdminCampaignManagement = () => (
  <div className="acm-container">
    <h1>Campaign Oversight</h1>
    <div className="acm-controls">
      <input type="text" placeholder="Search campaigns..." />
      <button>Refresh</button>
    </div>
    <table className="acm-table">
      <thead>
        <tr>
          <th>Name</th><th>Brand</th><th>Status</th><th>Budget</th><th>Reach</th><th>Engagement</th><th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {campaigns.map(c => (
          <tr key={c.id}>
            <td>{c.name}</td>
            <td>{c.brand}</td>
            <td><span className={`badge ${c.status.toLowerCase()}`}>{c.status}</span></td>
            <td>${c.budget}</td>
            <td>{c.reach}</td>
            <td>{c.engagement}</td>
            <td className="actions">
              <button title="View/Edit">✏️</button>
              <button title="Flag/Suspend">🚩</button>
              <button title="History">📜</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default AdminCampaignManagement;
