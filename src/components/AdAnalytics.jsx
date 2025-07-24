import { useState } from 'react';
import { BarChart2, PieChart, Filter, Download } from 'lucide-react';
import "../AdManagement.css"
const AdAnalytics = ({ ads }) => {
  const [timeRange, setTimeRange] = useState('7d');
  const [selectedMetric, setSelectedMetric] = useState('impressions');

  // Mock analytics data
  const analyticsData = {
    impressions: [12000, 19000, 15000, 18000, 22000, 24000, 21000],
    clicks: [450, 620, 580, 720, 840, 910, 790],
    ctr: [3.8, 3.3, 3.9, 4.0, 3.8, 3.8, 3.8],
    dates: ['Jun 1', 'Jun 2', 'Jun 3', 'Jun 4', 'Jun 5', 'Jun 6', 'Jun 7']
  };

  const topPerformingAds = [...ads]
    .sort((a, b) => b.ctr - a.ctr)
    .slice(0, 3);

  return (
    <div className="ad-analytics">
      <div className="analytics-header">
        <h2>Ad Performance Analytics</h2>
        <div className="controls">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
          >
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
          </select>
          <button className="btn btn-secondary">
            <Download size={16} /> Export
          </button>
        </div>
      </div>

      <div className="metrics-selector">
        <button
          className={`metric-btn ${selectedMetric === 'impressions' ? 'active' : ''}`}
          onClick={() => setSelectedMetric('impressions')}
        >
          Impressions
        </button>
        <button
          className={`metric-btn ${selectedMetric === 'clicks' ? 'active' : ''}`}
          onClick={() => setSelectedMetric('clicks')}
        >
          Clicks
        </button>
        <button
          className={`metric-btn ${selectedMetric === 'ctr' ? 'active' : ''}`}
          onClick={() => setSelectedMetric('ctr')}
        >
          CTR
        </button>
      </div>

      <div className="chart-container">
        <div className="bar-chart">
          {analyticsData[selectedMetric].map((value, i) => (
            <div key={i} className="bar-wrapper">
              <div className="bar-label">{analyticsData.dates[i]}</div>
              <div 
                className="bar" 
                style={{ height: `${(value / Math.max(...analyticsData[selectedMetric])) * 100}%` }}
              >
                <div className="bar-value">
                  {selectedMetric === 'ctr' ? `${value}%` : value.toLocaleString()}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="top-performers">
        <h3>Top Performing Ads</h3>
        <div className="performers-grid">
          {topPerformingAds.map(ad => (
            <div key={ad.id} className="performer-card">
              <div className="ad-preview">
                {ad.type === 'video' ? (
                  <video src={ad.mediaUrl} muted loop />
                ) : (
                  <img src={ad.mediaUrl} alt={ad.headline} />
                )}
              </div>
              <div className="ad-info">
                <h4>{ad.headline}</h4>
                <div className="metrics">
                  <div>
                    <strong>CTR:</strong> {ad.ctr}%
                  </div>
                  <div>
                    <strong>Impressions:</strong> {ad.impressions.toLocaleString()}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdAnalytics;