import { useState, useEffect } from 'react';
import { 
  CreditCard, Receipt, TrendingUp, Tag, RefreshCw,CheckCircle,XCircle,Clock,Download,Plus,
  Minus,Zap,Gift,AlertCircle,PieChart,BarChart2,DollarSign,Calendar
} from 'lucide-react';
import "../Billing.css"; // Assuming you have a CSS file for styling

const Billing = () => {
  const [activebillTab, setActiveBillTab] = useState('subscription');
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [invoices, setInvoices] = useState([]);
  const [subscription, setSubscription] = useState(null);
  const [promotions, setPromotions] = useState([]);
  const [billloading, setbillLoading] = useState(true);

  // Mock data initialization
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 800));
        
        // Mock data
        setPaymentMethods([
          {
            id: 'card-1',
            type: 'visa',
            last4: '4242',
            exp: '12/25',
            primary: true
          },
          {
            id: 'card-2',
            type: 'mastercard',
            last4: '5555',
            exp: '06/24',
            primary: false
          }
        ]);

        setInvoices([
          {
            id: 'inv-2023-05-001',
            date: '2023-05-15',
            amount: 299.00,
            status: 'paid',
            plan: 'Pro Monthly',
            downloadUrl: '#'
          },
          {
            id: 'inv-2023-04-001',
            date: '2023-04-15',
            amount: 299.00,
            status: 'paid',
            plan: 'Pro Monthly',
            downloadUrl: '#'
          },
          {
            id: 'inv-2023-03-001',
            date: '2023-03-15',
            amount: 299.00,
            status: 'paid',
            plan: 'Pro Monthly',
            downloadUrl: '#'
          }
        ]);

        setSubscription({
          plan: 'Pro Monthly',
          status: 'active',
          nextBillingDate: '2023-06-15',
          amount: 299.00,
          autoRenew: true,
          features: [
            'Up to 10 campaigns',
            'Advanced analytics',
            'Priority support',
            'API access'
          ]
        });

        setPromotions([
          {
            code: 'SUMMER23',
            discount: '20%',
            validUntil: '2023-08-31',
            description: 'Summer special discount'
          },
          {
            code: 'UPGRADE15',
            discount: '15%',
            validUntil: '2023-12-31',
            description: 'Annual plan upgrade'
          }
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
    setSubscription(prev => ({
      ...prev,
      autoRenew: !prev.autoRenew
    }));
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
                  <span className={`status-badge ${subscription.status}`}>
                    {subscription.status}
                  </span>
                </div>
                <div className="plan-price">
                  ${subscription.amount.toFixed(2)} <span>/month</span>
                </div>
                <div className="plan-features">
                  {subscription.features.map((feature, index) => (
                    <div key={index} className="feature-item">
                      <CheckCircle size={16} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="plan-actions">
                  <div className="renewal-toggle">
                    <label>
                      <input 
                        type="checkbox" 
                        checked={subscription.autoRenew} 
                        onChange={handleAutoRenewToggle}
                      />
                      Auto-renewal
                    </label>
                    <span className="renewal-date">
                      Next billing: {subscription.nextBillingDate}
                    </span>
                  </div>
                  <button className="btn btn-secondary">
                    Change Plan
                  </button>
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
                    <li>3 active campaigns</li>
                    <li>Basic analytics</li>
                    <li>Email support</li>
                  </ul>
                  <button className="btn btn-outline">
                    Current Plan
                  </button>
                </div>

                <div className="plan-tier featured">
                  <div className="featured-badge">Most Popular</div>
                  <h4>Professional</h4>
                  <div className="tier-price">$299<span>/month</span></div>
                  <ul className="tier-features">
                    <li>10 active campaigns</li>
                    <li>Advanced analytics</li>
                    <li>Priority support</li>
                    <li>API access</li>
                  </ul>
                  <button className="btn btn-primary">
                    Upgrade
                  </button>
                </div>

                <div className="plan-tier">
                  <h4>Enterprise</h4>
                  <div className="tier-price">Custom</div>
                  <ul className="tier-features">
                    <li>Unlimited campaigns</li>
                    <li>Advanced analytics</li>
                    <li>24/7 support</li>
                    <li>Dedicated account manager</li>
                    <li>Custom integrations</li>
                  </ul>
                  <button className="btn btn-outline">
                    Contact Sales
                  </button>
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
                <button className="btn btn-primary">
                  <Plus size={16} /> Add Payment Method
                </button>
              </div>
              
              <div className="methods-list">
                {paymentMethods.map(method => (
                  <div key={method.id} className="method-card">
                    <div className="method-info">
                      <CreditCard size={20} />
                      <div>
                        <div className="method-type">
                          {method.type.toUpperCase()} ending in {method.last4}
                        </div>
                        <div className="method-expiry">
                          Expires {method.exp}
                        </div>
                      </div>
                    </div>
                    <div className="method-actions">
                      {method.primary && (
                        <span className="primary-badge">Primary</span>
                      )}
                      <button className="btn btn-text">
                        {method.primary ? 'Edit' : 'Make Primary'}
                      </button>
                      <button className="btn btn-text danger">
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="payment-processors">
              <h4>Supported Payment Processors</h4>
              <div className="processors-grid">
                <div className="processor">
                  <img src="/visa.svg" alt="Visa" />
                </div>
                <div className="processor">
                  <img src="/mastercard.svg" alt="Mastercard" />
                </div>
                <div className="processor">
                  <img src="/amex.svg" alt="American Express" />
                </div>
                <div className="processor">
                  <img src="/paypal.svg" alt="PayPal" />
                </div>
                <div className="processor">
                  <img src="/stripe.svg" alt="Stripe" />
                </div>
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
                  <option>Last 30 days</option>
                  <option>Last 90 days</option>
                  <option>Last 12 months</option>
                  <option>All time</option>
                </select>
                <button className="btn btn-secondary">
                  <Download size={16} /> Export
                </button>
              </div>
            </div>

            <div className="invoices-table">
              <table>
                <thead>
                  <tr>
                    <th>Invoice #</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Plan</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {invoices.map(invoice => (
                    <tr key={invoice.id}>
                      <td>{invoice.id}</td>
                      <td>{invoice.date}</td>
                      <td>${invoice.amount.toFixed(2)}</td>
                      <td>{invoice.plan}</td>
                      <td>
                        <span className={`status-badge ${invoice.status}`}>
                          {invoice.status}
                        </span>
                      </td>
                      <td>
                        <button className="btn btn-text">
                          <Download size={16} /> PDF
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="tax-info">
              <h4>Tax Information</h4>
              <p>
                All prices are exclusive of applicable taxes. Tax will be calculated 
                during checkout based on your billing address.
              </p>
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
                    <div className="promo-badge">
                      <Gift size={18} />
                    </div>
                    <div className="promo-content">
                      <div className="promo-code">
                        {promo.code} - {promo.discount} OFF
                      </div>
                      <div className="promo-desc">
                        {promo.description}
                      </div>
                      <div className="promo-expiry">
                        Valid until: {promo.validUntil}
                      </div>
                    </div>
                    <button className="btn btn-outline">
                      Apply Code
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="trial-status">
              <h3>Free Trial</h3>
              <div className="trial-card">
                <div className="trial-info">
                  <Zap size={20} />
                  <div>
                    <h4>14 days remaining</h4>
                    <p>Your free trial ends on June 30, 2023</p>
                  </div>
                </div>
                <button className="btn btn-primary">
                  Upgrade to Pro
                </button>
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
                  <div className="metric-trend positive">
                    <TrendingUp size={16} /> 5% from last month
                  </div>
                </div>
                <div className="metric-card">
                  <div className="metric-label">Last 30 Days</div>
                  <div className="metric-value">$299.00</div>
                  <div className="metric-trend neutral">
                    <BarChart2 size={16} /> No change
                  </div>
                </div>
                <div className="metric-card">
                  <div className="metric-label">Projected Next Month</div>
                  <div className="metric-value">$299.00</div>
                  <div className="metric-trend neutral">
                    <PieChart size={16} /> Expected same
                  </div>
                </div>
              </div>
            </div>

            <div className="spending-chart">
              <div className="chart-header">
                <h4>Monthly Spending</h4>
                <select className="chart-filter">
                  <option>Last 6 months</option>
                  <option>Last 12 months</option>
                  <option>Year to date</option>
                  <option>All time</option>
                </select>
              </div>
              <div className="chart-placeholder">
                [Chart visualization would appear here]
              </div>
            </div>

            <div className="budget-alerts">
              <h4>Budget Alerts</h4>
              <div className="alert-settings">
                <div className="alert-item">
                  <div>
                    <h5>Monthly Spending Limit</h5>
                    <p>Get notified when approaching your budget</p>
                  </div>
                  <div className="alert-action">
                    <input 
                      type="number" 
                      placeholder="$0.00" 
                      className="budget-input"
                    />
                    <button className="btn btn-secondary">
                      Set Alert
                    </button>
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

  return (
    <div className="billing-management">
      <div className="billing-header">
        <h2>
          <DollarSign size={24} />
          Billing & Subscription
        </h2>
        <div className="summary-cards">
          <div className="summary-card">
            <div className="summary-label">Current Plan</div>
            <div className="summary-value">
              {subscription?.plan || 'Loading...'}
            </div>
          </div>
          <div className="summary-card">
            <div className="summary-label">Next Billing</div>
            <div className="summary-value">
              {subscription?.nextBillingDate || 'Loading...'}
            </div>
          </div>
          <div className="summary-card">
            <div className="summary-label">Balance</div>
            <div className="summary-value">
              ${subscription?.amount.toFixed(2) || '0.00'}
            </div>
          </div>
        </div>
      </div>

      <div className="billing-tabs">
        <button
          className={`tab-btn ${activebillTab === 'subscription' ? 'active' : ''}`}
          onClick={() => setActiveBillTab('subscription')}
        >
          <CreditCard size={18} /> Subscription
        </button>
        <button
          className={`tab-btn ${activebillTab === 'payment' ? 'active' : ''}`}
          onClick={() => setActiveBillTab('payment')}
        >
          <CreditCard size={18} /> Payment Methods
        </button>
        <button
          className={`tab-btn ${activebillTab === 'invoices' ? 'active' : ''}`}
          onClick={() => setActiveBillTab('invoices')}
        >
          <Receipt size={18} /> Invoices
        </button>
        <button
          className={`tab-btn ${activebillTab === 'promotions' ? 'active' : ''}`}
          onClick={() => setActiveBillTab('promotions')}
        >
          <Tag size={18} /> Promotions
        </button>
        <button
          className={`tab-btn ${activebillTab === 'analytics' ? 'active' : ''}`}
          onClick={() => setActiveBillTab('analytics')}
        >
          <TrendingUp size={18} /> Spending Analytics
        </button>
      </div>

      <div className="billing-content">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default Billing;