import React from 'react';
import "../../Dashboard.css";

function UnifiedAdDashboard() {
  return (
    <div className="dashboard-container">
      {/* Header and Navigation */}
      <header className="dashboard-header">
        <h1>Brand Promotion Platform - Dashboard</h1>
        <nav className="dashboard-nav">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#campaigns">Campaigns</a></li>
            <li><a href="#ads">Ads</a></li>
            <li><a href="#analytics">Analytics</a></li>
            <li><a href="#billing">Billing</a></li>
            <li><a href="#notifications">Notifications</a></li>
            <li><a href="#support">Support</a></li>
          </ul>
        </nav>
      </header>

      {/* Controls: Date Range, Search, Filter */}
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

      {/* Summary Cards */}
      <section className="summary-cards">
        <div className="card">
          <h3>Active Campaigns</h3>
          <p>8</p>
        </div>
        <div className="card">
          <h3>Budget Utilization</h3>
          <p>75%</p>
        </div>
        <div className="card">
          <h3>Ad Performance (CTR)</h3>
          <p>5.2%</p>
        </div>
        <div className="card">
          <h3>Alerts</h3>
          <p>3 new</p>
        </div>
      </section>

      {/* Real-Time Performance Charts */}
      <section className="performance-charts">
        <div className="chart line-chart">
          <h3>Campaign Trends</h3>
          <div className="chart-placeholder">[Line Chart]</div>
        </div>
        <div className="chart bar-chart">
          <h3>Ad Metrics</h3>
          <div className="chart-placeholder">[Bar Chart]</div>
        </div>
      </section>

      {/* Quick Actions Panel */}
      <section className="quick-actions">
        <button>Create New Campaign</button>
        <button>Adjust Bidding</button>
        <button>View Detailed Reports</button>
      </section>
    </div>
  );
}

export default UnifiedAdDashboard;
