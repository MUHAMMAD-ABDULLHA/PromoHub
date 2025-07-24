import React, { useState, useEffect } from 'react';
import {
  BarChart2,
  TrendingUp,
  Users,
  Map,
  Smartphone,
  Heart,
  MessageSquare,
  AlertCircle,
  Leaf,
  Award,
  Clock,
  DollarSign,
  RefreshCw,
  Download,
  Filter,
  Sliders,
  Star,
  LucideLineChart
  
} from 'lucide-react';
import { 
  BarChart, Bar, LineChart, Line,  Pie, Cell,
  XAxis, YAxis,ZAxis,ScatterChart,Scatter, CartesianGrid,
   Tooltip, Legend, ResponsiveContainer,PieChart
} from 'recharts';
import"../Analytics.css"

const Analytics= () => {
  const [activeTab, setActiveTab] = useState('performance');
  const [dateRange, setDateRange] = useState('last30days');
  const [campaignData, setCampaignData] = useState(null);
  const [feedbackData, setFeedbackData] = useState(null);
  const [sustainabilityData, setSustainabilityData] = useState(null);
  const [predictionData, setPredictionData] = useState(null);
  const [loading, setLoading] = useState(true);
  const performanceTimeData = [
    { date: 'Jun 1', impressions: 8500, clicks: 425, conversions: 21 },
    { date: 'Jun 2', impressions: 9200, clicks: 460, conversions: 23 },
    { date: 'Jun 3', impressions: 10500, clicks: 525, conversions: 26 },
    { date: 'Jun 4', impressions: 11200, clicks: 560, conversions: 28 },
    { date: 'Jun 5', impressions: 9800, clicks: 490, conversions: 25 },
    { date: 'Jun 6', impressions: 11500, clicks: 575, conversions: 29 },
    { date: 'Jun 7', impressions: 12500, clicks: 625, conversions: 31 },
  ];

  // const ageData = [
  //   { name: '18-24', value: 25 },
  //   { name: '25-34', value: 45 },
  //   { name: '35-44', value: 20 },
  //   { name: '45+', value: 10 }
  // ];

  // const genderData = [
  //   { name: 'Male', value: 55 },
  //   { name: 'Female', value: 43 },
  //   { name: 'Other', value: 2 }
  // ];

  // const locationData = [
  //   { name: 'North America', value: 60 },
  //   { name: 'Europe', value: 25 },
  //   { name: 'Asia', value: 10 },
  //   { name: 'Other', value: 5 }
  // ];

  // const deviceData = [
  //   { name: 'Mobile', value: 65 },
  //   { name: 'Desktop', value: 30 },
  //   { name: 'Tablet', value: 5 }
  // ];

  // const sentimentTrendData = [
  //   { date: 'Jun 1', positive: 12, negative: 2 },
  //   { date: 'Jun 2', positive: 15, negative: 1 },
  //   { date: 'Jun 3', positive: 18, negative: 0 },
  //   { date: 'Jun 4', positive: 14, negative: 3 },
  //   { date: 'Jun 5', positive: 16, negative: 2 },
  //   { date: 'Jun 6', positive: 20, negative: 1 },
  //   { date: 'Jun 7', positive: 22, negative: 2 }
  // ];

  // const ratingData = [
  //   { name: '5 Stars', value: 68 },
  //   { name: '4 Stars', value: 45 },
  //   { name: '3 Stars', value: 25 },
  //   { name: '2 Stars', value: 12 },
  //   { name: '1 Star', value: 6 }
  // ];

  const carbonComparisonData = [
    { name: 'Your Campaign', value: 245 },
    { name: 'Industry Avg', value: 310 },
    { name: 'Last Campaign', value: 280 }
  ];

  const energyUsageData = [
    { name: 'Hosting', value: 45 },
    { name: 'Ad Serving', value: 35 },
    { name: 'Creative Prod', value: 20 },
    { name: 'Other', value: 20 }
  ];

  // const forecastData = [
  //   { day: 1, reach: 5000, engagement: 250, conversions: 12 },
  //   { day: 7, reach: 35000, engagement: 1750, conversions: 88 },
  //   { day: 14, reach: 75000, engagement: 3750, conversions: 188 },
  //   { day: 21, reach: 115000, engagement: 5750, conversions: 288 },
  //   { day: 30, reach: 150000, engagement: 7500, conversions: 375 }
  // ];

  // const benchmarkData = [
  //   { 
  //     metric: 'CTR', 
  //     yourValue: 5.0, 
  //     industryValue: 3.8,
  //     difference: ((5.0 - 3.8) / 3.8 * 100).toFixed(1)
  //   },
  //   { 
  //     metric: 'ROAS', 
  //     yourValue: 4.5, 
  //     industryValue: 3.2,
  //     difference: ((4.5 - 3.2) / 3.2 * 100).toFixed(1)
  //   }
  // ];

  const heatmapData = {
    xLabels: ['0%', '25%', '50%', '75%', '100%'],
    yLabels: ['Header', 'Features', 'Testimonials', 'CTA', 'Footer'],
    data: [
      [80, 60, 30, 10, 5],
      [40, 70, 50, 30, 20],
      [20, 40, 60, 40, 30],
      [10, 30, 50, 70, 90],
      [5, 10, 20, 30, 40]
    ]
  };

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];
  useEffect(() => {
    // Simulate API call with mock data
    const fetchData = async () => {
      setLoading(true);
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock campaign performance data
        setCampaignData({
          impressions: 125000,
          clicks: 6250,
          ctr: 5.0,
          conversions: 312,
          cpa: 8.20,
          roas: 4.5,
          demographics: {
            age: {
              '18-24': 25,
              '25-34': 45,
              '35-44': 20,
              '45+': 10
            },
            gender: {
              male: 55,
              female: 43,
              other: 2
            },
            location: {
              'North America': 60,
              Europe: 25,
              Asia: 10,
              Other: 5
            },
            device: {
              mobile: 65,
              desktop: 30,
              tablet: 5
            }
          },
          engagement: {
            avgTimeSpent: 42,
            scrollDepth: 68,
            hotspots: [
              { x: 25, y: 30, intensity: 80 },
              { x: 60, y: 45, intensity: 95 }
            ]
          }
        });

        // Mock feedback data
        setFeedbackData({
          averageRating: 4.2,
          totalResponses: 156,
          sentiment: {
            positive: 68,
            neutral: 25,
            negative: 7
          },
          comments: [
            "Loved the creative design!",
            "Product was good but shipping took too long",
            "Would definitely recommend to friends"
          ],
          trends: [
            { date: 'Jun 1', positive: 12, negative: 2 },
            { date: 'Jun 2', positive: 15, negative: 1 },
            { date: 'Jun 3', positive: 18, negative: 0 },
            { date: 'Jun 4', positive: 14, negative: 3 }
          ]
        });

        // Mock sustainability data
        setSustainabilityData({
          carbonFootprint: 245, // kg CO2
          diversityScore: 82, // out of 100
          energyUsage: 120, // kWh
          badges: ['EcoFriendly', 'DiversityChampion'],
          comparisons: {
            industryAverage: 310,
            previousCampaign: 280
          }
        });

        // Mock prediction data
        // In your useEffect mock data:
        setPredictionData({
          forecast: [
            { day: 1, reach: 5000, engagement: 250, conversions: 12 },
            { day: 7, reach: 35000, engagement: 1750, conversions: 88 },
            { day: 30, reach: 150000, engagement: 7500, conversions: 375 }
          ],
          recommendations: [
            "Increase budget by 15% for highest performing ad sets",
            "Reallocate spend from underperforming demographics",
            "Test new creatives for 25-34 age group"
          ],
          benchmarks: [  // Changed to array format
            { 
              metric: 'CTR', 
              yourValue: 5.0, 
              industryValue: 3.8,
              difference: ((5.0 - 3.8) / 3.8 * 100).toFixed(1)
            },
            { 
              metric: 'ROAS', 
              yourValue: 4.5, 
              industryValue: 3.2,
              difference: ((4.5 - 3.2) / 3.2 * 100).toFixed(1)
            }
          ]
        });

      } catch (error) {
        console.error("Error loading analytics data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [dateRange]);

   const renderTabContent = () => {
    
    if (loading) {
      return (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading analytics data...</p>
        </div>
      );
    }

    switch (activeTab) {
      case 'performance':
        return (
          <div className="performance-tab">
            <div className="metrics-overview">
              <div className="metric-card">
                <div className="metric-header">
                  <BarChart2 size={18} />
                  <h4>Impressions</h4>
                </div>
                <div className="metric-value">{campaignData.impressions.toLocaleString()}</div>
                <div className="metric-trend positive">
                  <TrendingUp size={14} /> 12% from last period
                </div>
              </div>
              
              <div className="metric-card">
                <div className="metric-header">
                  <LucideLineChart size={18} />
                  <h4>Click-Through Rate</h4>
                </div>
                <div className="metric-value">{campaignData.ctr}%</div>
                <div className="metric-trend positive">
                  <TrendingUp size={14} /> 0.5% improvement
                </div>
              </div>
              
              <div className="metric-card">
                <div className="metric-header">
                  <PieChart size={18} />
                  <h4>Conversions</h4>
                </div>
                <div className="metric-value">{campaignData.conversions}</div>
                <div className="metric-trend neutral">
                  <BarChart2 size={14} /> No change
                </div>
              </div>
              
              <div className="metric-card">
                <div className="metric-header">
                  <DollarSign size={18} />
                  <h4>ROAS</h4>
                </div>
                <div className="metric-value">{campaignData.roas}x</div>
                <div className="metric-trend positive">
                  <TrendingUp size={14} /> 0.3x better
                </div>
              </div>
            </div>

            <div className="chart-section">
              <div className="chart-container">
                <div className="chart-header">
                  <h4>Performance Over Time</h4>
                  <select 
                    className="chart-filter"
                    value={dateRange}
                    onChange={(e) => setDateRange(e.target.value)}
                  >
                    <option value="last7days">Last 7 Days</option>
                    <option value="last30days">Last 30 Days</option>
                    <option value="last90days">Last 90 Days</option>
                  </select>
                </div>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={performanceTimeData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="impressions" stroke="#8884d8" name="Impressions" strokeWidth={2} />
                    <Line type="monotone" dataKey="clicks" stroke="#82ca9d" name="Clicks" strokeWidth={2} />
                    <Line type="monotone" dataKey="conversions" stroke="#ffc658" name="Conversions" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              
              <div className="chart-container">
                <div className="chart-header">
                  <h4>Audience Demographics</h4>
                  <button className="btn btn-text">
                    <Download size={16} /> Export
                  </button>
                </div>
                <div className="demographics-grid">
                  {/* Age Distribution */}
                  <div className="demo-chart">
                    <h5>Age Distribution</h5>
                    <ResponsiveContainer width="100%" height={250}>
                      {campaignData ? (
                        <PieChart>
                          <Pie
                            data={Object.entries(campaignData.demographics.age).map(([name, value]) => ({
                              name,
                              value: Number(value)
                            }))}
                            cx="50%"
                            cy="50%"
                            outerRadius={80}
                            innerRadius={40}
                            paddingAngle={5}
                            dataKey="value"
                            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                            labelLine={false}
                          >
                            {Object.entries(campaignData.demographics.age).map((_, index) => (
                              <Cell 
                                key={`cell-${index}`} 
                                fill={COLORS[index % COLORS.length]} 
                                stroke="#fff"
                                strokeWidth={1}
                              />
                            ))}
                          </Pie>
                          <Tooltip 
                            formatter={(value) => [`${value}%`, 'Percentage']}
                            contentStyle={{
                              backgroundColor: '#fff',
                              border: '1px solid #ddd',
                              borderRadius: '4px'
                            }}
                          />
                          <Legend 
                            layout="horizontal"
                            verticalAlign="bottom"
                            align="center"
                            wrapperStyle={{ paddingTop: '20px' }}
                          />
                        </PieChart>
                      ) : (
                        <div className="chart-loading">Loading data...</div>
                      )}
                    </ResponsiveContainer>
                  </div>

                  {/* Gender Distribution */}
                  <div className="demo-chart">
                    <h5>Gender</h5>
                    <ResponsiveContainer width="100%" height={250}>
                      {campaignData ? (
                        <PieChart>
                          <Pie
                            data={Object.entries(campaignData.demographics.gender).map(([name, value]) => ({
                              name: name.charAt(0).toUpperCase() + name.slice(1), // Capitalize labels
                              value: Number(value) // Ensure value is a number
                            }))}
                            cx="50%"
                            cy="50%"
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                          >
                            {Object.entries(campaignData.demographics.gender).map((_, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
                        </PieChart>
                      ) : (
                        <div className="chart-loading">Loading gender data...</div>
                      )}
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </div>

            <div className="engagement-section">
              <h4>Engagement Metrics</h4>
              <div className="engagement-grid">
                <div className="engagement-card">
                  <div className="engagement-metric">
                    <Clock size={18} />
                    <div>
                      <h5>Average Time Spent</h5>
                      <p>{campaignData.engagement.avgTimeSpent} seconds</p>
                    </div>
                  </div>
                </div>
                <div className="engagement-card">
                  <div className="engagement-metric">
                    <BarChart2 size={18} />
                    <div>
                      <h5>Scroll Depth</h5>
                      <p>{campaignData.engagement.scrollDepth}% of page</p>
                    </div>
                  </div>
                </div>
                <div className="engagement-card">
                  <div className="engagement-metric">
                    <Map size={18} />
                    <div>
                      <h5>Interaction Hotspots</h5>
                      <p>{campaignData.engagement.hotspots.length} high-engagement areas</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="heatmap-container">
                <h5>Page Interaction Heatmap</h5>
                <div className="heatmap-grid">
                  {heatmapData.yLabels.map((rowLabel, rowIndex) => (
                    <React.Fragment key={rowLabel}>
                      <div className="heatmap-row-label">{rowLabel}</div>
                      {heatmapData.xLabels.map((colLabel, colIndex) => (
                        <div 
                          key={`${rowLabel}-${colLabel}`}
                          className="heatmap-cell"
                          style={{
                            backgroundColor: `rgba(0, 136, 254, ${heatmapData.data[rowIndex][colIndex] / 100})`
                          }}
                        >
                          {heatmapData.data[rowIndex][colIndex]}%
                        </div>
                      ))}
                    </React.Fragment>
                  ))}
                  <div className="heatmap-corner"></div>
                  {heatmapData.xLabels.map(label => (
                    <div key={`x-${label}`} className="heatmap-col-label">{label}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'feedback':
        return (
          <div className="feedback-tab">
            <div className="feedback-overview">
              <div className="rating-card">
                <div className="rating-header">
                  <Star size={20} fill="currentColor" />
                  <h4>Average Rating</h4>
                </div>
                <div className="rating-value">{feedbackData.averageRating.toFixed(1)}</div>
                <div className="rating-count">
                  from {feedbackData.totalResponses} responses
                </div>
              </div>
              
              <div className="sentiment-card">
                <div className="sentiment-header">
                  <h4>Sentiment Analysis</h4>
                  <div className="sentiment-legend">
                    <span className="positive">Positive</span>
                    <span className="neutral">Neutral</span>
                    <span className="negative">Negative</span>
                  </div>
                </div>
                <div className="sentiment-bars">
                  <div 
                    className="sentiment-bar positive" 
                    style={{ width: `${feedbackData.sentiment.positive}%` }}
                  >
                    {feedbackData.sentiment.positive}%
                  </div>
                  <div 
                    className="sentiment-bar neutral" 
                    style={{ width: `${feedbackData.sentiment.neutral}%` }}
                  >
                    {feedbackData.sentiment.neutral}%
                  </div>
                  <div 
                    className="sentiment-bar negative" 
                    style={{ width: `${feedbackData.sentiment.negative}%` }}
                  >
                    {feedbackData.sentiment.negative}%
                  </div>
                </div>
              </div>
            </div>

            <div className="comments-section">
              <h4>Recent Feedback</h4>
              <div className="comments-grid">
                {feedbackData.comments.map((comment, index) => (
                  <div key={index} className="comment-card">
                    <div className="comment-header">
                      <span className="comment-sentiment positive">
                        <Heart size={14} />
                      </span>
                      <span className="comment-date">2 days ago</span>
                    </div>
                    <p className="comment-text">{comment}</p>
                  </div>
                ))}
              </div>
              <button className="btn btn-secondary">
                View All Feedback
              </button>
            </div>

            <div className="trends-section">
              <div className="section-header">
                <h4>Sentiment Trends</h4>
                <select className="trend-filter">
                  <option>Last 7 Days</option>
                  <option>Last 30 Days</option>
                  <option>Last 90 Days</option>
                </select>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={feedbackData.trends}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="positive" stroke="#82ca9d" name="Positive" />
                  <Line type="monotone" dataKey="negative" stroke="#ff6b6b" name="Negative" />
                </LineChart>
              </ResponsiveContainer>
              <div className="trend-alerts">
                <div className="alert-card">
                  <AlertCircle size={18} />
                  <div>
                    <h5>Negative Feedback Spike</h5>
                    <p>3x more negative comments detected on June 4</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'sustainability':
        return (
          <div className="sustainability-tab">
            <div className="impact-scorecard">
              <h4>Campaign Impact Scorecard</h4>
              <div className="scorecard-grid">
                <div className="impact-metric">
                  <Leaf size={20} />
                  <div>
                    <h5>Carbon Footprint</h5>
                    <p>{sustainabilityData.carbonFootprint} kg CO2</p>
                    <div className="metric-comparison">
                      {sustainabilityData.carbonFootprint < sustainabilityData.comparisons.industryAverage ? (
                        <span className="positive">
                          {Math.round((sustainabilityData.comparisons.industryAverage - sustainabilityData.carbonFootprint) / sustainabilityData.comparisons.industryAverage * 100)}% better than industry
                        </span>
                      ) : (
                        <span className="negative">
                          Higher than industry average
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="impact-metric">
                  <Users size={20} />
                  <div>
                    <h5>Diversity Score</h5>
                    <p>{sustainabilityData.diversityScore}/100</p>
                    <div className="metric-comparison">
                      {sustainabilityData.diversityScore > 75 ? (
                        <span className="positive">Excellent representation</span>
                      ) : (
                        <span className="neutral">Room for improvement</span>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="impact-metric">
                  <Award size={20} />
                  <div>
                    <h5>Certifications</h5>
                    <div className="badges-list">
                      {sustainabilityData.badges.map((badge, index) => (
                        <span key={index} className="badge">
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="report-section">
              <div className="section-header">
                <h4>Sustainability Report</h4>
                <button className="btn btn-primary">
                  <Download size={16} /> Download Full Report
                </button>
              </div>
              <div className="report-charts">
                <div className="report-chart">
                  <h5>Carbon Footprint Comparison</h5>
                  <ResponsiveContainer width="100%" height={250}>
                    <BarChart data={carbonComparisonData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="value" fill="#8884d8" name="kg CO2" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="report-chart">
                  <h5>Energy Usage Breakdown</h5>
                  <ResponsiveContainer width="100%" height={250}>
                    <PieChart>
                      <Pie
                        data={energyUsageData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {energyUsageData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            <div className="recommendations-section">
              <h4>Improvement Recommendations</h4>
              <div className="recommendations-list">
                <div className="recommendation-card">
                  <Leaf size={16} />
                  <p>Switch to green hosting for campaign landing pages to reduce energy usage by ~15%</p>
                </div>
                <div className="recommendation-card">
                  <Users size={16} />
                  <p>Expand targeting to underrepresented demographics to improve diversity score</p>
                </div>
                <div className="recommendation-card">
                  <Award size={16} />
                  <p>Apply for Responsible Advertising certification to enhance brand reputation</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'predictive':
        return (
          <div className="predictive-tab">
            <div className="forecast-section">
              <h4>30-Day Performance Forecast</h4>
              <div className="forecast-cards">
                <div className="forecast-card">
                  <div className="forecast-header">
                    <Users size={18} />
                    <h5>Reach</h5>
                  </div>
                  <div className="forecast-value">
                    {predictionData.forecast[predictionData.forecast.length - 1].reach.toLocaleString()}
                  </div>
                  <div className="forecast-comparison">
                    <TrendingUp size={14} /> 25% increase expected
                  </div>
                </div>
                
                <div className="forecast-card">
                  <div className="forecast-header">
                    <Heart size={18} />
                    <h5>Engagement</h5>
                  </div>
                  <div className="forecast-value">
                    {predictionData.forecast[predictionData.forecast.length - 1].engagement.toLocaleString()}
                  </div>
                  <div className="forecast-comparison">
                    <TrendingUp size={14} /> 22% increase expected
                  </div>
                </div>
                
                <div className="forecast-card">
                  <div className="forecast-header">
                    <BarChart2 size={18} />
                    <h5>Conversions</h5>
                  </div>
                  <div className="forecast-value">
                    {predictionData.forecast[predictionData.forecast.length - 1].conversions.toLocaleString()}
                  </div>
                  <div className="forecast-comparison">
                    <TrendingUp size={14} /> 20% increase expected
                  </div>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={predictionData.forecast}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" label={{ value: 'Days', position: 'insideBottomRight' }} />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="reach" stroke="#8884d8" name="Reach" />
                  <Line type="monotone" dataKey="engagement" stroke="#82ca9d" name="Engagement" />
                  <Line type="monotone" dataKey="conversions" stroke="#ffc658" name="Conversions" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="recommendations-section">
              <div className="section-header">
                <h4>AI Recommendations</h4>
                <button className="btn btn-text">
                  <RefreshCw size={16} /> Refresh
                </button>
              </div>
              <div className="recommendations-list">
                {predictionData.recommendations.map((rec, index) => (
                  <div key={index} className="recommendation-card">
                    <div className="recommendation-number">{index + 1}</div>
                    <p>{rec}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="benchmarks-section">
              <h4>Competitive Benchmarks</h4>
              <div className="benchmarks-grid">
                {predictionData.benchmarks.map((benchmark, index) => (
                  <div key={index} className="benchmark-card">
                    <h5>{benchmark.metric}</h5>
                    <div className="benchmark-value">
                      <span className="your-value">{benchmark.yourValue}{benchmark.metric === 'CTR' ? '%' : 'x'}</span>
                      <span className="industry-value">Industry: {benchmark.industryValue}{benchmark.metric === 'CTR' ? '%' : 'x'}</span>
                    </div>
                    <div className="benchmark-comparison positive">
                      {benchmark.difference}% above average
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="simulator-section">
              <h4>Budget Simulator</h4>
              <div className="simulator-controls">
                <div className="slider-control">
                  <label>Budget Adjustment</label>
                  <input type="range" min="-50" max="50" defaultValue="0" />
                  <div className="slider-labels">
                    <span>-50%</span>
                    <span>0%</span>
                    <span>+50%</span>
                  </div>
                </div>
                <button className="btn btn-primary">
                  <Sliders size={16} /> Simulate
                </button>
              </div>
              <div className="simulator-results-placeholder">
                <ResponsiveContainer width="100%" height={200}>
                  <ScatterChart
                    margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                  >
                    <CartesianGrid />
                    <XAxis type="number" dataKey="x" name="Budget Change" unit="%" />
                    <YAxis type="number" dataKey="y" name="Projected ROI" unit="%" />
                    <ZAxis type="number" dataKey="z" range={[60, 400]} name="Impact" />
                    <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                    <Scatter name="Projections" data={[
                      { x: -50, y: -30, z: 100 },
                      { x: -25, y: -10, z: 200 },
                      { x: 0, y: 15, z: 250 },
                      { x: 25, y: 35, z: 350 },
                      { x: 50, y: 50, z: 400 }
                    ]} fill="#8884d8" />
                  </ScatterChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="analytics-dashboard">
      <div className="analytics-header">
        <h2>
          <BarChart2 size={24} />
          Campaign Analytics & Insights
        </h2>
        <div className="header-actions">
          <button className="btn btn-secondary">
            <Download size={16} /> Export Report
          </button>
          <button className="btn btn-secondary">
            <Filter size={16} /> Filters
          </button>
        </div>
      </div>

      <div className="analytics-tabs">
        <button
          className={`tab-btn ${activeTab === 'performance' ? 'active' : ''}`}
          onClick={() => setActiveTab('performance')}
        >
          <BarChart2 size={18} /> Performance
        </button>
        <button
          className={`tab-btn ${activeTab === 'feedback' ? 'active' : ''}`}
          onClick={() => setActiveTab('feedback')}
        >
          <MessageSquare size={18} /> User Feedback
        </button>
        <button
          className={`tab-btn ${activeTab === 'sustainability' ? 'active' : ''}`}
          onClick={() => setActiveTab('sustainability')}
        >
          <Leaf size={18} /> Sustainability
        </button>
        <button
          className={`tab-btn ${activeTab === 'predictive' ? 'active' : ''}`}
          onClick={() => setActiveTab('predictive')}
        >
          <TrendingUp size={18} /> Predictive
        </button>
      </div>

      <div className="analytics-content">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default Analytics;