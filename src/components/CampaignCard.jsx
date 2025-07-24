import React from 'react';
import { Eye, Edit, Trash2, Plus, Search, Filter } from 'lucide-react';
import '../CampaignManagement.css';

const CampaignList = ({
  campaigns,
  searchQuery,
  dateRange,
  onSearchChange,
  onDateRangeChange,
  onViewCampaign,
  onEditCampaign,
  onDeleteCampaign,
  onCreateCampaign
}) => {
  return (
    <div className="campaign-list">
      <div className="list-header">
        <h2>Campaign Management</h2>
        <button onClick={onCreateCampaign} className="btn primary-btn">
          <Plus size={18} /> Create Campaign
        </button>
      </div>

      <div className="list-controls">
        <div className="search-box">
          <Search size={16} />
          <input
            type="text"
            placeholder="Search campaigns..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>

        <div className="filter-controls">
          <select
            value={dateRange}
            onChange={(e) => onDateRangeChange(e.target.value)}
          >
            <option value="last7days">Last 7 days</option>
            <option value="last30days">Last 30 days</option>
            <option value="last90days">Last 90 days</option>
          </select>
          <button className="btn secondary-btn">
            <Filter size={16} /> More Filters
          </button>
        </div>
      </div>

      <div className="campaign-table">
        <table>
          <thead>
            <tr>
              <th>Campaign Name</th>
              <th>Status</th>
              <th>Objective</th>
              <th>Overall Budget</th>
              <th>Daily Budget</th>
              <th>Duration</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {campaigns.length > 0 ? (
              campaigns.map((campaign) => (
                <tr key={campaign.id}>
                  <td>
                    <button
                      className="campaign-name"
                      onClick={() => onViewCampaign(campaign.id)}
                    >
                      {campaign.name}
                    </button>
                  </td>
                  <td>
                    <span
                      className={`status-badge ${
                        campaign.status?.toLowerCase() || 'unknown'
                      }`}
                    >
                      {campaign.status}
                    </span>
                  </td>
                  <td>{campaign.objective}</td>
                  <td>${campaign.overall_budget?.toLocaleString()}</td>
                  <td>${campaign.daily_budget?.toLocaleString()}</td>
                  <td>
                    {campaign.start_date} to {campaign.end_date}
                  </td>
                  <td className="actions">
                    <button
                      onClick={() => onViewCampaign(campaign.id)}
                      className="action-btn view-btn"
                    >
                      <Eye size={16} />
                    </button>
                    <button
                      onClick={() => onEditCampaign(campaign.id)} // FIXED: Pass ID, not object
                      className="action-btn edit-btn"
                    >
                      <Edit size={16} />
                    </button>
                    <button
                      onClick={() => onDeleteCampaign(campaign.id)}
                      className="action-btn delete-btn"
                    >
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="no-results">
                  No campaigns found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CampaignList;
