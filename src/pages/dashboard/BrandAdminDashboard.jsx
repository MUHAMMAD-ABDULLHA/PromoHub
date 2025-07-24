import React, { useState, useEffect } from "react";
import { toast, Bounce } from 'react-toastify';
import { Search, Menu, Home, BarChart2, PieChart, CreditCard, Bell, HelpCircle, ChevronDown, Filter, Plus, Eye, Edit, Trash2, ArrowLeft, Calendar } from "lucide-react";
import { 
  Lock, Mail, Visibility, 
  VisibilityOff, Notifications as NotificationsIcon, Campaign, PersonAdd, TrendingDown, CardGiftcard, Build,
  Payment, Schedule, CheckCircle, Cancel, Flag, Message, Announcement, Warning, Security, Error, Report,
  Poll, LocalOffer, Recommend, CalendarToday
} from '@mui/icons-material';
import { 
  Settings,Receipt, TrendingUp, Tag, RefreshCw, XCircle, Clock, Download,
  Minus, Zap, Gift, AlertCircle, DollarSign, GitCompare, User
} from 'lucide-react';
import "./BrandAdminDashboard.css"; 
import Analytics from "../Analytics";
import AdManagement from "../AdManagement";
import DashboardHome from "../../components/DashboardHome";
import ManageAccount from "../ManageAccount";
import Collaboration from "../Collaboration";
import Notifications from "../Notifications";
import CampaignCreation from "../CampaignManagement"; // Updated import to CampaignManagement
import NotifcationSettings from "../../components/Settings";
import CampaignManagement from "../CampaignManagement";
const BrandAdminDashboard = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeTab, setActiveTab] = useState("home");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [dateRange, setDateRange] = useState("last30days");
  const [searchQuery, setSearchQuery] = useState("");
  const [showChat, setShowChat] = useState(false);
  const [showHumanChat, setShowHumanChat] = useState(false);
  const [chatMessage, setChatMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([
    {
      sender: "bot",
      text: "Hello! I'm your Google Ads Assistant. How can I help you today? Here are some common topics I can assist with: Campaign setup and optimization, Billing questions, Ad approval issues, Performance troubleshooting"
    }
  ]);
  const [activebillTab, setActiveBillTab] = useState('subscription');
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [invoices, setInvoices] = useState([]);
  const [subscription, setSubscription] = useState(null);
  const [promotions, setPromotions] = useState([]);
  const [billloading, setbillLoading] = useState(true);
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const userRole = localStorage.getItem('role') || 'brandAdmin';
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  // Get user data from localStorage
  const userName = localStorage.getItem('username') || 'Brand Admin';
  const userEmail = localStorage.getItem('userEmail') || 'user@example.com';
  const userAvatar = localStorage.getItem('userAvatar') || 'https://via.placeholder.com/150';

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  // Handle sign out
  const handleSignOut = () => {
    localStorage.removeItem('userName');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userAvatar');
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  const handleCreateAccount = () => {
    localStorage.removeItem('userName');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userAvatar');
    localStorage.removeItem('token');
    window.location.href = '/registration';
  };
  
  const handleManageAccount = () => {
    setActiveTab("account");
    setShowDropdown(false);
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      toast.error("You are not authenticated! Please log in.", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      setIsAuthenticated(false);
      setTimeout(() => {
        window.location.href = '/login';
      }, 2000);
    } else {
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    setbillLoading(true);
    try {
      const mockData = getMockNotifications(userRole);
      setNotifications(mockData);
      setUnreadCount(mockData.filter(n => !n.read).length);
    } catch (err) {
      console.error('Error setting up mock notifications:', err);
    } finally {
      setbillLoading(false);
    }
  }, [userRole]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 800));
        setPaymentMethods([
          { id: 'card-1', type: 'visa', last4: '4242', exp: '12/25', primary: true },
          { id: 'card-2', type: 'mastercard', last4: '5555', exp: '06/24', primary: false }
        ]);
        setInvoices([
          { id: 'inv-2023-05-001', date: '2023-05-15', amount: 299.00, status: 'paid', plan: 'Pro Monthly', downloadUrl: '#' },
          { id: 'inv-2023-04-001', date: '2023-04-15', amount: 299.00, status: 'paid', plan: 'Pro Monthly', downloadUrl: '#' },
          { id: 'inv-2023-03-001', date: '2023-03-15', amount: 299.00, status: 'paid', plan: 'Pro Monthly', downloadUrl: '#' }
        ]);
        setSubscription({
          plan: 'Pro Monthly',
          status: 'active',
          nextBillingDate: '2023-06-15',
          amount: 299.00,
          autoRenew: true,
          features: ['Up to 10 campaigns', 'Advanced analytics', 'Priority support', 'API access']
        });
        setPromotions([
          { code: 'SUMMER23', discount: '20%', validUntil: '2023-08-31', description: 'Summer special discount' },
          { code: 'UPGRADE15', discount: '15%', validUntil: '2023-12-31', description: 'Annual plan upgrade' }
        ]);
      } catch (error) {
        console.error('Error loading billing data:', error);
      } finally {
        setbillLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleAutoRenewToggle = () => {
    setSubscription(prev => ({ ...prev, autoRenew: !prev.autoRenew }));
  };

  const renderTabContent = () => {
    if (billloading) {
      return (
        <div className="loading-container">
          <RefreshCw className="animate-spin" />
          <p>Loading billing information...</p>
        </div>
      );
    }
    switch (activebillTab) {
      case 'subscription':
        return (
          <div className="subscription-tab">
            <div className="current-plan">
              <h3>Current Plan</h3>
              <div className="plan-card">
                <div className="plan-header">
                  <h4>{subscription.plan}</h4>
                  <span className={`status-badge ${subscription.status}`}>{subscription.status}</span>
                </div>
                <div className="plan-price">${subscription.amount.toFixed(2)} <span>/month</span></div>
                <div className="plan-features">
                  {subscription.features.map((feature, index) => (
                    <div key={index} className="feature-item">
                      <CheckCircle size={16} /><span>{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="plan-actions">
                  <div className="renewal-toggle">
                    <label>
                      <input type="checkbox" checked={subscription.autoRenew} onChange={handleAutoRenewToggle} />
                      Auto-renewal
                    </label>
                    <span className="renewal-date">Next billing: {subscription.nextBillingDate}</span>
                  </div>
                  <button className="btn btn-secondary">Change Plan</button>
                </div>
              </div>
            </div>
            <div className="plan-comparison">
              <h3>Available Plans</h3>
              <div className="plans-grid">
                <div className="plan-tier">
                  <h4>Starter</h4>
                  <div className="tier-price">$0<span>/month</span></div>
                  <ul className="tier-features">
                    <li>3 active campaigns</li><li>Basic analytics</li><li>Email support</li>
                  </ul>
                  <button className="btn btn-outline">Current Plan</button>
                </div>
                <div className="plan-tier featured">
                  <div className="featured-badge">Most Popular</div>
                  <h4>Professional</h4>
                  <div className="tier-price">$299<span>/month</span></div>
                  <ul className="tier-features">
                    <li>10 active campaigns</li><li>Advanced analytics</li><li>Priority support</li><li>API access</li>
                  </ul>
                  <button className="btn btn-primary">Upgrade</button>
                </div>
                <div className="plan-tier">
                  <h4>Enterprise</h4>
                  <div className="tier-price">Custom</div>
                  <ul className="tier-features">
                    <li>Unlimited campaigns</li><li>Advanced analytics</li><li>24/7 support</li><li>Dedicated account manager</li><li>Custom integrations</li>
                  </ul>
                  <button className="btn btn-outline">Contact Sales</button>
                </div>
              </div>
            </div>
          </div>
        );
      case 'payment':
        return (
          <div className="payment-tab">
            <div className="payment-methods">
              <div className="section-header">
                <h3>Payment Methods</h3>
                <button className="btn btn-primary"><Plus size={16} /> Add Payment Method</button>
              </div>
              <div className="methods-list">
                {paymentMethods.map(method => (
                  <div key={method.id} className="method-card">
                    <div className="method-info">
                      <CreditCard size={20} />
                      <div>
                        <div className="method-type">{method.type.toUpperCase()} ending in {method.last4}</div>
                        <div className="method-expiry">Expires {method.exp}</div>
                      </div>
                    </div>
                    <div className="method-actions">
                      {method.primary && (<span className="primary-badge">Primary</span>)}
                      <button className="btn btn-text">{method.primary ? 'Edit' : 'Make Primary'}</button>
                      <button className="btn btn-text danger">Remove</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="payment-processors">
              <h4>Supported Payment Processors</h4>
              <div className="processors-grid">
                <div className="processor"><img src="/visa.svg" alt="Visa" /></div>
                <div className="processor"><img src="/mastercard.svg" alt="Mastercard" /></div>
                <div className="processor"><img src="/amex.svg" alt="American Express" /></div>
                <div className="processor"><img src="/paypal.svg" alt="PayPal" /></div>
                <div className="processor"><img src="/stripe.svg" alt="Stripe" /></div>
              </div>
            </div>
          </div>
        );
      case 'invoices':
        return (
          <div className="invoices-tab">
            <div className="section-header">
              <h3>Billing History</h3>
              <div className="header-actions">
                <select className="date-filter">
                  <option>Last 30 days</option><option>Last 90 days</option><option>Last 12 months</option><option>All time</option>
                </select>
                <button className="btn btn-secondary"><Download size={16} /> Export</button>
              </div>
            </div>
            <div className="invoices-table">
              <table>
                <thead>
                  <tr><th>Invoice #</th><th>Date</th><th>Amount</th><th>Plan</th><th>Status</th><th>Action</th></tr>
                </thead>
                <tbody>
                  {invoices.map(invoice => (
                    <tr key={invoice.id}>
                      <td>{invoice.id}</td><td>{invoice.date}</td><td>${invoice.amount.toFixed(2)}</td><td>{invoice.plan}</td>
                      <td><span className={`status-badge ${invoice.status}`}>{invoice.status}</span></td>
                      <td><button className="btn btn-text"><Download size={16} /> PDF</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="tax-info">
              <h4>Tax Information</h4>
              <p>All prices are exclusive of applicable taxes. Tax will be calculated during checkout based on your billing address.</p>
            </div>
          </div>
        );
      case 'promotions':
        return (
          <div className="promotions-tab">
            <div className="active-promotions">
              <h3>Available Promotions</h3>
              <div className="promotions-grid">
                {promotions.map((promo, index) => (
                  <div key={index} className="promo-card">
                    <div className="promo-badge"><Gift size={18} /></div>
                    <div className="promo-content">
                      <div className="promo-code">{promo.code} - {promo.discount} OFF</div>
                      <div className="promo-desc">{promo.description}</div>
                      <div className="promo-expiry">Valid until: {promo.validUntil}</div>
                    </div>
                    <button className="btn btn-outline">Apply Code</button>
                  </div>
                ))}
              </div>
            </div>
            <div className="trial-status">
              <h3>Free Trial</h3>
              <div className="trial-card">
                <div className="trial-info">
                  <Zap size={20} />
                  <div><h4>14 days remaining</h4><p>Your free trial ends on June 30, 2023</p></div>
                </div>
                <button className="btn btn-primary">Upgrade to Pro</button>
              </div>
            </div>
          </div>
        );
      case 'analytics':
        return (
          <div className="analytics-tab">
            <div className="spending-overview">
              <h3>Spending Analytics</h3>
              <div className="metrics-grid">
                <div className="metric-card">
                  <div className="metric-label">This Month</div>
                  <div className="metric-value">$299.00</div>
                  <div className="metric-trend positive"><TrendingUp size={16} /> 5% from last month</div>
                </div>
                <div className="metric-card">
                  <div className="metric-label">Last 30 Days</div>
                  <div className="metric-value">$299.00</div>
                  <div className="metric-trend neutral"><BarChart2 size={16} /> No change</div>
                </div>
                <div className="metric-card">
                  <div className="metric-label">Projected Next Month</div>
                  <div className="metric-value">$299.00</div>
                  <div className="metric-trend neutral"><PieChart size={16} /> Expected same</div>
                </div>
              </div>
            </div>
            <div className="spending-chart">
              <div className="chart-header">
                <h4>Monthly Spending</h4>
                <select className="chart-filter">
                  <option>Last 6 months</option><option>Last 12 months</option><option>Year to date</option><option>All time</option>
                </select>
              </div>
              <div className="chart-placeholder">[Chart visualization would appear here]</div>
            </div>
            <div className="budget-alerts">
              <h4>Budget Alerts</h4>
              <div className="alert-settings">
                <div className="alert-item">
                  <div><h5>Monthly Spending Limit</h5><p>Get notified when approaching your budget</p></div>
                  <div className="alert-action">
                    <input type="number" placeholder="$0.00" className="budget-input" />
                    <button className="btn btn-secondary">Set Alert</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const getBotResponse = (message) => {
    const lowerMsg = message.toLowerCase();
    if (lowerMsg.includes('campaign') || lowerMsg.includes('create')) {
      return "To create a new campaign: 1) Click the '+' button in your Google Ads account 2) Select your campaign goal 3) Choose your campaign type 4) Set your budget and bidding strategy. Would you like more detailed instructions?";
    } else if (lowerMsg.includes('not running') || lowerMsg.includes('not showing')) {
      return "Ads might not show due to: 1) Low budget 2) Low bid amounts 3) Poor Quality Score 4) Approval pending. Check your campaign status in the 'Status' column for more details.";
    } else if (lowerMsg.includes('balance') || lowerMsg.includes('billing')) {
      return "You can check your account balance in the 'Billing' section. Your current balance is $250.00, and your next automatic payment is scheduled for May 15, 2023.";
    } else {
      return "I can help with campaign setup, billing questions, and performance issues. Could you please provide more details about your question?";
    }
  };

  const handleSendMessage = () => {
    if (chatMessage.trim() === '') return;
    setChatMessages([...chatMessages, { sender: "user", text: chatMessage }]);
    setChatMessage('');
    setTimeout(() => {
      const botResponse = getBotResponse(chatMessage);
      setChatMessages(prev => [...prev, { sender: "bot", text: botResponse }]);
    }, 1000);
  };

  const handleQuickReply = (message) => {
    setChatMessage(message);
    setTimeout(() => handleSendMessage(), 100);
  };

  const getMockNotifications = (role) => {
    const now = new Date();
    const timeOptions = { hour: '2-digit', minute: '2-digit' };
    const baseNotifications = [
      {
        id: 'sys-1', type: 'system', title: 'Scheduled Maintenance',
        message: 'Platform will be down for maintenance on June 15 from 2:00 AM to 4:00 AM UTC.',
        timestamp: new Date(now.getTime() - 3600000).toLocaleTimeString([], timeOptions),
        read: false, icon: <Build fontSize="small" />
      }
    ];
    const roleNotifications = {
      brandAdmin: [
        { id: 'ba-1', type: 'campaign', title: 'Campaign Approved',
          message: 'Your "Summer Sale 2023" campaign has been approved and is now live.',
          timestamp: new Date(now.getTime() - 1800000).toLocaleTimeString([], timeOptions),
          read: false, icon: <CheckCircle fontSize="small" /> },
        { id: 'ba-2', type: 'influencer', title: 'New Influencer Request',
          message: 'Alex Johnson has requested to join your "Spring Collection" campaign.',
          timestamp: new Date(now.getTime() - 7200000).toLocaleTimeString([], timeOptions),
          read: true, icon: <PersonAdd fontSize="small" /> },
        { id: 'ba-3', type: 'performance', title: 'CTR Drop Alert',
          message: 'Click-through rate for "Holiday Promo" dropped below 2%. Consider optimizing your ad creatives.',
          timestamp: new Date(now.getTime() - 86400000).toLocaleTimeString([], timeOptions),
          read: false, icon: <TrendingDown fontSize="small" /> }
      ],
      influencer: [
        { id: 'inf-1', type: 'invitation', title: 'Campaign Invitation',
          message: 'Nike has invited you to join their "Just Do It" campaign.',
          timestamp: new Date(now.getTime() - 5400000).toLocaleTimeString([], timeOptions),
          read: false, icon: <Mail fontSize="small" /> },
        { id: 'inf-2', type: 'content', title: 'Content Approved',
          message: 'Your Instagram post for Adidas has been approved. Reward points have been added to your account.',
          timestamp: new Date(now.getTime() - 28800000).toLocaleTimeString([], timeOptions),
          read: true, icon: <CheckCircle fontSize="small" /> },
        { id: 'inf-3', type: 'reward', title: 'Reward Earned',
          message: 'You\'ve earned $25 for your participation in the "Summer Styles" campaign.',
          timestamp: new Date(now.getTime() - 172800000).toLocaleTimeString([], timeOptions),
          read: false, icon: <CardGiftcard fontSize="small" /> }
      ],
      endUser: [
        { id: 'eu-1', type: 'campaign', title: 'New Campaign Available',
          message: 'Check out the new "Back to School" quiz campaign and earn 50 bonus points!',
          timestamp: new Date(now.getTime() - 3600000).toLocaleTimeString([], timeOptions),
          read: false, icon: <Campaign fontSize="small" /> },
        { id: 'eu-2', type: 'reward', title: 'Points Redeemed',
          message: 'You\'ve successfully redeemed 200 points for a $5 Amazon gift card.',
          timestamp: new Date(now.getTime() - 86400000).toLocaleTimeString([], timeOptions),
          read: true, icon: <LocalOffer fontSize="small" /> },
        { id: 'eu-3', type: 'recommendation', title: 'Recommended for You',
          message: 'Based on your interests, we think you\'ll love the new "Tech Gadgets" poll campaign.',
          timestamp: new Date(now.getTime() - 172800000).toLocaleTimeString([], timeOptions),
          read: false, icon: <Recommend fontSize="small" /> }
      ],
      platformAdmin: [
        { id: 'pa-1', type: 'security', title: 'Suspicious Login Attempt',
          message: 'Multiple failed login attempts detected for user@example.com from IP 192.168.1.100.',
          timestamp: new Date(now.getTime() - 1800000).toLocaleTimeString([], timeOptions),
          read: false, icon: <Security fontSize="small" /> },
        { id: 'pa-2', type: 'content', title: 'Content Flagged',
          message: 'Influencer post #12345 has been flagged by 3 users for inappropriate content.',
          timestamp: new Date(now.getTime() - 7200000).toLocaleTimeString([], timeOptions),
          read: true, icon: <Flag fontSize="small" /> },
        { id: 'pa-3', type: 'system', title: 'High Server Load',
          message: 'Server CPU usage has exceeded 90% for the past 15 minutes.',
          timestamp: new Date(now.getTime() - 14400000).toLocaleTimeString([], timeOptions),
          read: false, icon: <Warning fontSize="small" /> }
      ]
    };
    return [...baseNotifications, ...(roleNotifications[role] || [])];
  };

  const navigationItems = [
    { id: "home", icon: <Home size={20} />, label: "Dashboard" },
    { id: "campaigns", icon: <BarChart2 size={20} />, label: "Campaigns" },
    { id: "ads", icon: <PieChart size={20} />, label: "Ads & Assets" },
    { id: "collaboration", icon: <User size={20} />, label: "Collaboration" }, 
    { id: "analytics", icon: <BarChart2 size={20} />, label: "Analytics" },
    { id: "billing", icon: <CreditCard size={20} />, label: "Billing" },
    { id: "notifications", icon: <Bell size={20} />, label: "Notifications" },
    { id: "support", icon: <HelpCircle size={20} />, label: "Support" },
    { id: "account", icon: <User size={20} />, label: "Account" },
    { id: "settings", icon: <Settings size={20} />, label: "Settings" }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <DashboardHome />;
      case "campaigns":
        return <CampaignManagement />; // Render CampaignManagement component
      case "ads":
        return <AdManagement />;
      case "analytics":
        return <Analytics />;
      case "billing":
        return (
          <div className="billing-management">
            <div className="billing-header">
              <h2><DollarSign size={24} /> Billing & Subscription</h2>
              <div className="summary-cards">
                <div className="summary-card">
                  <div className="summary-label">Current Plan</div>
                  <div className="summary-value">{subscription?.plan || 'Loading...'}</div>
                </div>
                <div className="summary-card">
                  <div className="summary-label">Next Billing</div>
                  <div className="summary-value">{subscription?.nextBillingDate || 'Loading...'}</div>
                </div>
                <div className="summary-card">
                  <div className="summary-label">Balance</div>
                  <div className="summary-value">${subscription?.amount.toFixed(2) || '0.00'}</div>
                </div>
              </div>
            </div>
            <div className="billing-tabs">
              <button className={`tab-btn ${activebillTab === 'subscription' ? 'active' : ''}`} onClick={() => setActiveBillTab('subscription')}>
                <CreditCard size={18} /> Subscription
              </button>
              <button className={`tab-btn ${activebillTab === 'payment' ? 'active' : ''}`} onClick={() => setActiveBillTab('payment')}>
                <CreditCard size={18} /> Payment Methods
              </button>
              <button className={`tab-btn ${activebillTab === 'invoices' ? 'active' : ''}`} onClick={() => setActiveBillTab('invoices')}>
                <Receipt size={18} /> Invoices
              </button>
              <button className={`tab-btn ${activebillTab === 'promotions' ? 'active' : ''}`} onClick={() => setActiveBillTab('promotions')}>
                <Tag size={18} /> Promotions
              </button>
              <button className={`tab-btn ${activebillTab === 'analytics' ? 'active' : ''}`} onClick={() => setActiveBillTab('analytics')}>
                <TrendingUp size={18} /> Spending Analytics
              </button>
            </div>
            <div className="billing-content">{renderTabContent()}</div>
          </div>
        );
      case "notifications":
        return <Notifications />;
      case "support":
        return (
          <div className="support-section">
            <h2>Support Center</h2>
            <div className="support-card live-chat">
              <div className="support-icon"><HelpCircle size={24} /></div>
              <div className="support-content">
                <h3>Live Chat Support</h3>
                <p>Get instant help from our AI-driven chatbots available 24/7. Our bots can handle common inquiries about campaigns, billing, and troubleshooting.</p>
                <button className="chat-button" onClick={() => setShowChat(true)}>
                  <HelpCircle size={16} /> Start Chat with AI Assistant
                </button>
                <button className="chat-button" onClick={() => setShowHumanChat(true)}>
                  <HelpCircle size={16} /> Start Chat with Human Assistant
                </button>
                <div className="chat-availability"><span className="online-dot"></span> AI Assistant is online</div>
              </div>
            </div>
            <div className="support-card faq">
              <div className="support-icon"><HelpCircle size={24} /></div>
              <div className="support-content">
                <h3>Frequently Asked Questions</h3>
                <p>Find quick answers to common questions about Google Ads setup, optimization, and troubleshooting.</p>
                <div className="faq-categories">
                  <div className="faq-category">
                    <h4><HelpCircle size={16} /> Campaign Management</h4>
                    <ul><li>How to create a new campaign?</li><li>Why is my ad not showing?</li><li>How to improve my Quality Score?</li></ul>
                  </div>
                  <div className="faq-category">
                    <h4><HelpCircle size={16} /> Billing & Payments</h4>
                    <ul><li>When will I be charged?</li><li>How to update payment method?</li><li>Understanding billing thresholds</li></ul>
                  </div>
                  <div className="faq-category">
                    <h4><HelpCircle size={16} /> Performance & Reporting</h4>
                    <ul><li>How to interpret conversion data?</li><li>Why are my clicks down this week?</li><li>Best practices for keyword optimization</li></ul>
                  </div>
                </div>
                <button className="view-all-faq">View All FAQ Articles</button>
              </div>
            </div>
            <div className="support-card self-help">
              <div className="support-icon"><HelpCircle size={24} /></div>
              <div className="support-content">
                <h3>Self-Help Resources</h3>
                <p>Access our comprehensive library of guides, tutorials, and troubleshooting tools to resolve issues independently.</p>
                <div className="resource-grid">
                  <div className="resource-item"><HelpCircle size={20} /><h4>Google Ads Help Center</h4><p>Official documentation and step-by-step guides</p></div>
                  <div className="resource-item"><HelpCircle size={20} /><h4>Video Tutorials</h4><p>Watch expert-led tutorials for all skill levels</p></div>
                  <div className="resource-item"><HelpCircle size={20} /><h4>Troubleshooting Tools</h4><p>Diagnose and fix common account issues</p></div>
                  <div className="resource-item"><HelpCircle size={20} /><h4>Community Forum</h4><p>Connect with other advertisers and experts</p></div>
                </div>
              </div>
            </div>
            {showChat && (
              <div className="chatbot-modal">
                <div className="modal-content">
                  <div className="chat-header">
                    <button className="close" onClick={() => setShowChat(false)}>×</button>
                    <h3>AI Assistant</h3>
                    <div className="chat-status"><span className="online-dot"></span> Online</div>
                  </div>
                  <div className="chat-messages">
                    <div className="bot-message">
                      <p>Hello! I'm your Assistant. How can I help you today? Here are some common topics I can assist with:</p>
                      <ul><li>Campaign setup and optimization</li><li>Billing questions</li><li>Ad approval issues</li><li>Performance troubleshooting</li></ul>
                    </div>
                  </div>
                  <div className="chat-input">
                    <input 
                      type="text" 
                      placeholder="Type your question here..."
                      value={chatMessage}
                      onChange={(e) => setChatMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    />
                    <button onClick={handleSendMessage}><HelpCircle size={16} /></button>
                  </div>
                  <div className="quick-replies">
                    <button className="quick-reply" onClick={() => handleQuickReply("How to create a campaign?")}>How to create a campaign?</button>
                    <button className="quick-reply" onClick={() => handleQuickReply("Why is my ad not running?")}>Why is my ad not running?</button>
                    <button className="quick-reply" onClick={() => handleQuickReply("Check my account balance")}>Check my account balance</button>
                  </div>
                </div>
              </div>
            )}
            {showHumanChat && (
              <div className="chatbot-modal">
                <div className="modal-content">
                  <div className="chat-header">
                    <button className="close" onClick={() => setShowHumanChat(false)}>×</button>
                    <h3>Human Assistant</h3>
                    <div className="chat-status"><span className="online-dot"></span> Online</div>
                  </div>
                  <div className="chat-messages">
                    <div className="bot-message">
                      <p>Hello! I'm your Assistant. How can I help you today? Here are some common topics I can assist with:</p>
                      <ul><li>Campaign setup and optimization</li><li>Billing questions</li><li>Ad approval issues</li><li>Performance troubleshooting</li></ul>
                    </div>
                  </div>
                  <div className="chat-input">
                    <input 
                      type="text" 
                      placeholder="Type your question here..."
                      value={chatMessage}
                      onChange={(e) => setChatMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    />
                    <button onClick={handleSendMessage}><HelpCircle size={16} /></button>
                  </div>
                  <div className="quick-replies">
                    <button className="quick-reply" onClick={() => handleQuickReply("How to create a campaign?")}>How to create a campaign?</button>
                    <button className="quick-reply" onClick={() => handleQuickReply("Why is my ad not running?")}>Why is my ad not running?</button>
                    <button className="quick-reply" onClick={() => handleQuickReply("Check my account balance")}>Check my account balance</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      case 'account':
        return <ManageAccount />;
      case "collaboration":
        return <Collaboration />;
      case "settings":
        return <NotifcationSettings />;
      default:
        return <div>Select a tab to view content.</div>;
    }
  };

  return (
    <div className="app-container">
      <div className={`sidebar ${sidebarCollapsed ? 'collapsed' : ''}`}>
        <div className="sidebar-header">
          <div className={`logo-container ${sidebarCollapsed ? 'collapsed' : ''}`}>
            {!sidebarCollapsed ? <span className="logo">AdManager</span> : <span className="logo-mini">A</span>}
          </div>
          <button onClick={() => setSidebarCollapsed(!sidebarCollapsed)} className="sidebar-toggle">
            <Menu size={20} />
          </button>
        </div>
        <nav className="sidebar-nav">
          <ul>
            {navigationItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveTab(item.id)}
                  className={`nav-item ${activeTab === item.id ? 'active' : ''} ${sidebarCollapsed ? 'collapsed' : ''}`}
                >
                  <span className="nav-icon">{item.icon}</span>
                  {!sidebarCollapsed && <span className="nav-label">{item.label}</span>}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="main-content">
        <header className="main-header">
          <div className="header-left">
            <h1>{navigationItems.find(item => item.id === activeTab)?.label}</h1>
          </div>
          <div className="header-right">
            <div className="search-container">
              <input type="text" placeholder="Search..." className="header-search" />
              <Search size={16} className="search-icon" />
            </div>
            <div className="notification-container">
              <button className="notification-button" onClick={() => setShowNotifications(!showNotifications)}>
                <Bell size={20} />
                {unreadCount > 0 && <span className="notification-badge">{unreadCount}</span>}
              </button>
              {showNotifications && (
                <div className="notification-dropdown">
                  <div className="notification-header">
                    <h4>Notifications</h4>
                    <button className="mark-all-read">Mark all as read</button>
                  </div>
                  <div className="notification-list">
                    {notifications.map(notification => (
                      <div key={notification.id} className={`notification-item ${notification.read ? '' : 'unread'}`}>
                        <div className="notification-icon">
                          {notification.type === 'campaign' && <BarChart2 size={16} />}
                          {notification.type === 'performance' && <TrendingUp size={16} />}
                          {notification.type === 'message' && <Message size={16} />}
                        </div>
                        <div className="notification-content">
                          <h5>{notification.title}</h5>
                          <p>{notification.message}</p>
                          <span className="notification-time">{notification.time}</span>
                        </div>
                        {!notification.read && <div className="unread-dot"></div>}
                      </div>
                    ))}
                  </div>
                  <div className="notification-footer">
                    <button className="view-all">View all notifications</button>
                  </div>
                </div>
              )}
            </div>
            <div className="user-profile-container">
              <div className="user-profile" onClick={toggleDropdown}>
                {userAvatar ? (
                  <img src="src/assets/Profile.jpeg" alt="User avatar" className="avatar-image" />
                ) : (
                  <div className="avatar-fallback">{userName.split(' ').map(n => n[0]).join('')}</div>
                )}
                <span className="username">{userName}</span>
                <ChevronDown size={16} className={`dropdown-icon ${showDropdown ? 'rotate' : ''}`} />
              </div>
              {showDropdown && (
                <div className="dropdown-menu">
                  <div className="dropdown-header">
                    <img src="src/assets/Profile.jpeg" alt="User avatar" className="dropdown-avatar" />
                    <div className="user-info">
                      <p className="user-name">{userName}</p>
                      <p className="user-email">{userEmail}</p>
                    </div>
                  </div>
                  <div className="dropdown-actions">
                    <button className="dropdown-button" id="mngacc" onClick={handleManageAccount}>Manage your account</button>
                    <button className="dropdown-button" id="crtacc" onClick={handleCreateAccount}>Create New Account</button>
                    <button className="dropdown-button" id="signout" onClick={handleSignOut}>Sign Out</button>
                  </div>
                  <div className="legal-links">
                    <ul><li>Privacy Policy</li><li>Terms of service</li></ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>
        <main className="content-area">{renderContent()}</main>
      </div>
    </div>
  );
};

export default BrandAdminDashboard;
