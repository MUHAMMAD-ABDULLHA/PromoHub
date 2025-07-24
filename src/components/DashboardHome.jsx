import React, { useState, useEffect } from 'react';
import { 
  BarChart2, 
  PieChart, 
  LineChart,
  DollarSign,
  Clock,
  Users,
  Smartphone,
  Map,
  Filter,
  Calendar,
  Download,
  Plus,
  RefreshCw,
  ChevronDown,
  TrendingUp,
  AlertCircle
} from 'lucide-react';
import { 
  BarChart, 
  LineChart as RechartsLineChart, 
  PieChart as RechartsPieChart,
  Bar, 
  Line, 
  Pie, 
  Cell, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';
import "../Dashboard.css";

const DashboardHome = () => {
  const [dateRange, setDateRange] = useState('last30days');
  const [loading, setLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState({
    totalCampaigns: 0,
    budgetUtilization: "0%",
    ctr: "0%",
    conversions: 0,
    topCampaigns: [],
    performanceData: [],
    audienceData: {}
  });

  // Mock data initialization
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 800));
        
        // Mock data
        setDashboardData({
          totalCampaigns: 8,
          budgetUtilization: "75%",
          ctr: "5.2%",
          conversions: 1243,
          topCampaigns: [
            { 
              name: "Summer Sale", 
              status: "Active", 
              budget: "$5,000", 
              impressions: 230450, 
              clicks: 12340, 
              ctr: "5.4%", 
              conversions: 342 
            },
            { 
              name: "Spring Collection", 
              status: "Paused", 
              budget: "$3,200", 
              impressions: 156789, 
              clicks: 7890, 
              ctr: "5.0%", 
              conversions: 234 
            },
            { 
              name: "Holiday Promo", 
              status: "Active", 
              budget: "$7,500", 
              impressions: 189230, 
              clicks: 9450, 
              ctr: "5.0%", 
              conversions: 420 
            }
          ],
          performanceData: [
            { date: 'Jun 1', impressions: 8500, clicks: 425, conversions: 21 },
            { date: 'Jun 2', impressions: 9200, clicks: 460, conversions: 23 },
            { date: 'Jun 3', impressions: 10500, clicks: 525, conversions: 26 },
            { date: 'Jun 4', impressions: 11200, clicks: 560, conversions: 28 },
            { date: 'Jun 5', impressions: 9800, clicks: 490, conversions: 25 },
            { date: 'Jun 6', impressions: 11500, clicks: 575, conversions: 29 },
            { date: 'Jun 7', impressions: 12500, clicks: 625, conversions: 31 }
          ],
          audienceData: {
            age: [
              { name: '18-24', value: 25 },
              { name: '25-34', value: 45 },
              { name: '35-44', value: 20 },
              { name: '45+', value: 10 }
            ],
            gender: [
              { name: 'Male', value: 55 },
              { name: 'Female', value: 43 },
              { name: 'Other', value: 2 }
            ],
            device: [
              { name: 'Mobile', value: 65 },
              { name: 'Desktop', value: 30 },
              { name: 'Tablet', value: 5 }
            ],
            location: [
              { name: 'North America', value: 60 },
              { name: 'Europe', value: 25 },
              { name: 'Asia', value: 10 },
              { name: 'Other', value: 5 }
            ]
          }
        });
      } catch (error) {
        console.error("Error loading dashboard data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [dateRange]);

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner" ></div>
        <p>Loading dashboard data...</p>
      </div>
    );
  }

  return (
    <div className="dashboard-home">
      {/* Header Section */}
      <div className="dashboard-header">
        <h2>
          <BarChart2 size={24} />
          <b>Overview Dashboard</b>          
        </h2>
        <div className="header-actions">
          <div className="date-range-selector">
            <Calendar size={16} />
            <select 
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
            >
              <option value="last7days">Last 7 days</option>
              <option value="last30days">Last 30 days</option>
              <option value="last90days">Last 90 days</option>
              <option value="custom">Custom range</option>
            </select>
          </div>
          <button className="btn btn-secondary">
            <Download size={16} /> Export
          </button>
        </div>
      </div>

      {/* Key Metrics Cards */}
      <div className="metrics-grid">
        <div className="metric-card">
          <div className="metric-header">
            <BarChart2 size={18} />
            <h4>Campaigns</h4>
          </div>
          <div className="metric-value">
            <div>{dashboardData.totalCampaigns}</div>
            <div className="metric-trend positive">
              <TrendingUp size={14} /> +2
            </div>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <DollarSign size={18} />
            <h4>Budget Utilization</h4>
          </div>
          <div className="metric-value">
            <div>{dashboardData.budgetUtilization}</div>
            <div className="metric-trend neutral">
              $24,500
            </div>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <LineChart size={18} />
            <h4>CTR</h4>
          </div>
          <div className="metric-value">
            <div>{dashboardData.ctr}</div>
            <div className="metric-trend positive">
              <TrendingUp size={14} /> +0.3%
            </div>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-header">
            <Users size={18} />
            <h4>Conversions</h4>
          </div>
          <div className="metric-value">
            <div>{dashboardData.conversions.toLocaleString()}</div>
            <div className="metric-trend positive">
              <TrendingUp size={14} /> +6%
            </div>
          </div>
        </div>
      </div>

      {/* Performance Charts */}
      <div className="charts-grid">
        <div className="chart-card">
          <div className="chart-header">
            <h3>Performance Over Time</h3>
            <div className="chart-actions">
              <button className="btn btn-text">
                <Filter size={16} /> Filters
              </button>
              <button className="btn btn-text">
                <Download size={16} /> Export
              </button>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <RechartsLineChart data={dashboardData.performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="impressions" 
                stroke="#8884d8" 
                name="Impressions" 
                strokeWidth={2} 
              />
              <Line 
                type="monotone" 
                dataKey="clicks" 
                stroke="#82ca9d" 
                name="Clicks" 
                strokeWidth={2} 
              />
              <Line 
                type="monotone" 
                dataKey="conversions" 
                stroke="#ffc658" 
                name="Conversions" 
                strokeWidth={2} 
              />
            </RechartsLineChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <div className="chart-header">
            <h3>Audience Metrics</h3>
            <div className="chart-actions">
              <button className="btn btn-text">
                <Filter size={16} /> Filters
              </button>
              <button className="btn btn-text">
                <Download size={16} /> Export
              </button>
            </div>
          </div>
          <div className="audience-metrics-grid">
            <div className="audience-chart">
              <h5>Age Distribution</h5>
              <ResponsiveContainer width="100%" height={200}>
                <RechartsPieChart>
                  <Pie
                    data={dashboardData.audienceData.age}
                    cx="50%"
                    cy="50%"
                    outerRadius={60}
                    innerRadius={30}
                    paddingAngle={5}
                    dataKey="value"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {dashboardData.audienceData.age.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </RechartsPieChart>
              </ResponsiveContainer>
            </div>

            <div className="audience-chart">
              <h5>Gender</h5>
              <ResponsiveContainer width="100%" height={200}>
                <RechartsPieChart>
                  <Pie
                    data={dashboardData.audienceData.gender}
                    cx="50%"
                    cy="50%"
                    outerRadius={60}
                    innerRadius={30}
                    paddingAngle={5}
                    dataKey="value"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {dashboardData.audienceData.gender.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </RechartsPieChart>
              </ResponsiveContainer>
            </div>

            <div className="audience-chart">
              <h5>Devices</h5>
              <ResponsiveContainer width="100%" height={200}>
                <RechartsPieChart>
                  <Pie
                    data={dashboardData.audienceData.device}
                    cx="50%"
                    cy="50%"
                    outerRadius={60}
                    innerRadius={30}
                    paddingAngle={5}
                    dataKey="value"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {dashboardData.audienceData.device.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </RechartsPieChart>
              </ResponsiveContainer>
            </div>

            <div className="audience-chart">
              <h5>Locations</h5>
              <ResponsiveContainer width="100%" height={200}>
                <RechartsPieChart>
                  <Pie
                    data={dashboardData.audienceData.location}
                    cx="50%"
                    cy="50%"
                    outerRadius={60}
                    innerRadius={30}
                    paddingAngle={5}
                    dataKey="value"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {dashboardData.audienceData.location.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </RechartsPieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      {/* Top Campaigns Table */}
      <div className="top-campaigns">
        <div className="top-campaigns-header">
          <h3>Top Performing Campaigns</h3>
          <button className="text-link">View All</button>
        </div>
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>Campaign</th>
                <th>Status</th>
                <th>Budget</th>
                <th className="text-right">Impressions</th>
                <th className="text-right">Clicks</th>
                <th className="text-right">CTR</th>
                <th className="text-right">Conversions</th>
              </tr>
            </thead>
            <tbody>
              {dashboardData.topCampaigns.map((campaign, index) => (
                <tr key={index}>
                  <td>{campaign.name}</td>
                  <td>
                    <span className={`status-badge ${campaign.status.toLowerCase()}`}>
                      {campaign.status}
                    </span>
                  </td>
                  <td>{campaign.budget}</td>
                  <td className="text-right">{campaign.impressions?.toLocaleString() || '0'}</td>
                  <td className="text-right">{campaign.clicks?.toLocaleString() || '0'}</td>
                  <td className="text-right">{campaign.ctr || '0%'}</td>
                  <td className="text-right">{campaign.conversions?.toLocaleString() || '0'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Alerts and Recommendations */}
      <div className="alerts-section">
        <div className="alert-card warning">
          <AlertCircle size={20} />
          <div>
            <h4>CTR Drop Detected</h4>
            <p>Your "Spring Collection" campaign CTR has dropped below 2%. Consider optimizing your ad creatives.</p>
          </div>
          <button className="btn btn-text">View Details</button>
        </div>
        <div className="alert-card info">
          <TrendingUp size={20} />
          <div>
            <h4>Budget Recommendation</h4>
            <p>Increase budget by 15% for your top performing "Summer Sale" campaign to maximize conversions.</p>
          </div>
          <button className="btn btn-text">Optimize Now</button>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="quick-actions">
        <button className="btn btn-primary">
          <Plus size={18} /> Create Campaign
        </button>
        <button className="btn btn-secondary">
          View Reports
        </button>
        <button className="btn btn-secondary">
          Optimize Budget
        </button>
      </div>
    </div>
  );
};

export default DashboardHome;