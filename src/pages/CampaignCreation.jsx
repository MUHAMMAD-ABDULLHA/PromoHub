import React, { useState, useEffect } from 'react';
import { 
  Campaign, 
  Description, 
  MonetizationOn, 
  CalendarToday, 
  People, 
  Assessment, 
  Message, 
  LocalOffer, 
  ViewInAr, 
  RecordVoiceOver, 
  DynamicForm, 
  PersonPin, 
  TrendingUp,
  ArrowBack
} from '@mui/icons-material';
import '../CampaignCreation.css';
import { toast, Bounce } from 'react-toastify';

function CampaignCreation({ onCancel, onCreate }) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    objective: '',
    overall_budget: 0,
    daily_budget: 0,
    start_date: '',
    end_date: '',
    demographics: '',
    has_historical: false,
    historical_data: '',
    key_messages: '',
    cta: '',
    offers: '',
    enable_ar: false,
    enable_voice: false,
    multi_step_form: false,
    personalized_page: false,
    status: 'draft',
    kpis: [],
  });

  const objectives = ['Brand Awareness', 'Lead Generation', 'Conversions', 'Other'];
  const ctas = ['Sign Up', 'Learn More', 'Get Started', 'Buy Now'];
  const availableKPIs = ['CTR', 'Conversion Rate', 'ROI', 'Cost per Acquisition', 'Engagement Rate'];
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('user_id');
    console.log("User ID:", userId);
    console.log("Token:", token);
    if (!token || !userId) {
      setError('Authentication required. Please log in.');
      setIsAuthenticated(false);
      toast.error('Authentication required. Redirecting to login...', {
        position: "bottom-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
        transition: Bounce,
      });
      setTimeout(() => {
        window.location.href = '/login';
      }, 3000);
    } else {
      setIsAuthenticated(true);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    let newValue = type === 'checkbox' ? checked : value;

    if ((name === 'overall_budget' || name === 'daily_budget') && value !== '') {
      newValue = parseFloat(value) || 0;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };

  const handleKpiChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      kpis: checked ? [...prev.kpis, value] : prev.kpis.filter((kpi) => kpi !== value),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("isAuthenticated:", isAuthenticated);
    if (!isAuthenticated) {
      toast.error("Authentication required to create a campaign.", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
        transition: Bounce,
      });
      return;
    }

    setLoading(true);
    setError('');

    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('user_id');

    if (!userId) {
      toast.error("User ID not found. Please log in again.", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
        transition: Bounce,
      });
      setLoading(false);
      return;
    }

    const campaignPayload = {
      brand_user_id: parseInt(userId),
      name: formData.name,
      description: formData.description,
      objective: formData.objective,
      overall_budget: parseFloat(formData.overall_budget) || 0,
      daily_budget: parseFloat(formData.daily_budget) || 0,
      start_date: formData.start_date,
      end_date: formData.end_date,
      demographics: formData.demographics,
      has_historical: formData.has_historical,
      historical_data: formData.has_historical ? formData.historical_data : null,
      key_messages: formData.key_messages,
      cta: formData.cta,
      offers: formData.offers,
      enable_ar: formData.enable_ar,
      enable_voice: formData.enable_voice,
      multi_step_form: formData.multi_step_form,
      personalized_page: formData.personalized_page,
      status: formData.status,
      kpis: formData.kpis,
    };

    try {
      const response = await fetch('http://localhost:8080/brand/campaigns/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(campaignPayload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to save campaign');
      }

      const data = await response.json();
      console.log("Campaign response:", data);
      onCreate(data); // Pass single campaign object

      await fetch('http://localhost:8080/notifications/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          user_id: parseInt(userId),
          type: 'CAMPAIGN_UPDATE',
          title: 'New Campaign Created',
          message: `Your campaign "${formData.name}" has been created successfully.`,
        }),
      });

      toast.success('Campaign created successfully!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
        transition: Bounce,
      });
    } catch (error) {
      console.error("Error creating campaign:", error);
      toast.error(error.message || "Error saving campaign", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
        transition: Bounce,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    onCancel();
  };

  return (
    <div className="promohub-campaign-container">
      <div className="promohub-campaign-card">
        <div className="promohub-header">
          <button 
            type="button" 
            className="promohub-back-button" 
            onClick={handleBack}
            disabled={loading}
          >
            <ArrowBack className="promohub-back-icon" />
            Back to Campaigns
          </button>
          <h1 className="promohub-campaign-title">
            <Campaign className="promohub-title-icon" />
            Create New Campaign
          </h1>
        </div>

        {error && <div className="promohub-error-message">{error}</div>}

        <form onSubmit={handleSubmit} className="promohub-campaign-form">
          <div className="promohub-form-section">
            <h2 className="promohub-section-title">
              <Description className="promohub-section-icon" />
              Basic Information
            </h2>
            
            <div className="promohub-input-group">
              <label>Campaign Name</label>
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                placeholder="Enter campaign name"
                required 
                disabled={loading}
              />
            </div>

            <div className="promohub-input-group">
              <label>Description</label>
              <textarea 
                name="description" 
                value={formData.description} 
                onChange={handleChange} 
                placeholder="Describe your campaign"
                required 
                rows={4}
                disabled={loading}
              />
            </div>

            <div className="promohub-input-group">
              <label>Objective</label>
              <select 
                name="objective" 
                value={formData.objective} 
                onChange={handleChange} 
                required
                disabled={loading}
              >
                <option value="">Select campaign objective</option>
                {objectives.map((obj) => (
                  <option key={obj} value={obj}>{obj}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="promohub-form-section">
            <h2 className="promohub-section-title">
              <MonetizationOn className="promohub-section-icon" />
              Budget & Schedule
            </h2>
            
            <div className="promohub-two-column">
              <div className="promohub-input-group">
                <label>Overall Budget ($)</label>
                <input 
                  type="number" 
                  name="overall_budget" 
                  value={formData.overall_budget} 
                  onChange={handleChange} 
                  min="0"
                  step="0.01"
                  required 
                  disabled={loading}
                />
              </div>

              <div className="promohub-input-group">
                <label>Daily Budget ($)</label>
                <input 
                  type="number" 
                  name="daily_budget" 
                  value={formData.daily_budget} 
                  onChange={handleChange} 
                  min="0"
                  step="0.01"
                  required 
                  disabled={loading}
                />
              </div>
            </div>

            <div className="promohub-two-column">
              <div className="promohub-input-group">
                <label>Start Date</label>
                <input 
                  type="date" 
                  name="start_date" 
                  value={formData.start_date} 
                  onChange={handleChange} 
                  required 
                  disabled={loading}
                />
              </div>

              <div className="promohub-input-group">
                <label>End Date</label>
                <input 
                  type="date" 
                  name="end_date" 
                  value={formData.end_date} 
                  onChange={handleChange} 
                  required 
                  disabled={loading}
                />
              </div>
            </div>
          </div>

          <div className="promohub-form-section">
            <h2 className="promohub-section-title">
              <People className="promohub-section-icon" />
              Targeting
            </h2>
            
            <div className="promohub-input-group">
              <label>Demographics</label>
              <textarea 
                name="demographics" 
                value={formData.demographics} 
                onChange={handleChange} 
                placeholder="Describe your target audience"
                rows={3}
                disabled={loading}
              />
            </div>

            <div className="promohub-checkbox-group">
              <input 
                type="checkbox" 
                name="has_historical" 
                id="has_historical"
                checked={formData.has_historical} 
                onChange={handleChange} 
                disabled={loading}
              />
              <label htmlFor="has_historical">Has Historical Data</label>
            </div>

            {formData.has_historical && (
              <div className="promohub-input-group">
                <label>Historical Data</label>
                <textarea 
                  name="historical_data" 
                  value={formData.historical_data} 
                  onChange={handleChange} 
                  placeholder="Describe your historical campaign data"
                  rows={3}
                  disabled={loading}
                />
              </div>
            )}
          </div>

          <div className="promohub-form-section">
            <h2 className="promohub-section-title">
              <Message className="promohub-section-icon" />
              Content & Messaging
            </h2>
            
            <div className="promohub-input-group">
              <label>Key Messages</label>
              <textarea 
                name="key_messages" 
                value={formData.key_messages} 
                onChange={handleChange} 
                placeholder="Key messages for your campaign"
                required 
                rows={4}
                disabled={loading}
              />
            </div>

            <div className="promohub-input-group">
              <label>Call to Action</label>
              <select 
                name="cta" 
                value={formData.cta} 
                onChange={handleChange} 
                required
                disabled={loading}
              >
                <option value="">Select a call to action</option>
                {ctas.map((cta) => (
                  <option key={cta} value={cta}>{cta}</option>
                ))}
              </select>
            </div>

            <div className="promohub-input-group">
              <label>Offers (Optional)</label>
              <input 
                type="text" 
                name="offers" 
                value={formData.offers} 
                onChange={handleChange} 
                placeholder="Special offers or promotions"
                disabled={loading}
              />
            </div>
          </div>

          <div className="promohub-form-section">
            <h2 className="promohub-section-title">
              <Assessment className="promohub-section-icon" />
              Features
            </h2>
            
            <div className="promohub-features-grid">
              <div className="promohub-checkbox-group">
                <input 
                  type="checkbox" 
                  name="enable_ar" 
                  id="enable_ar"
                  checked={formData.enable_ar} 
                  onChange={handleChange} 
                  disabled={loading}
                />
                <label htmlFor="enable_ar">
                  <ViewInAr className="promohub-feature-icon" />
                  Enable AR
                </label>
              </div>

              <div className="promohub-checkbox-group">
                <input 
                  type="checkbox" 
                  name="enable_voice" 
                  id="enable_voice"
                  checked={formData.enable_voice} 
                  onChange={handleChange} 
                  disabled={loading}
                />
                <label htmlFor="enable_voice">
                  <RecordVoiceOver className="promohub-feature-icon" />
                  Enable Voice
                </label>
              </div>

              <div className="promohub-checkbox-group">
                <input 
                  type="checkbox" 
                  name="multi_step_form" 
                  id="multi_step_form"
                  checked={formData.multi_step_form} 
                  onChange={handleChange} 
                  disabled={loading}
                />
                <label htmlFor="multi_step_form">
                  <DynamicForm className="promohub-feature-icon" />
                  Multi-Step Form
                </label>
              </div>

              <div className="promohub-checkbox-group">
                <input 
                  type="checkbox" 
                  name="personalized_page" 
                  id="personalized_page"
                  checked={formData.personalized_page} 
                  onChange={handleChange} 
                  disabled={loading}
                />
                <label htmlFor="personalized_page">
                  <PersonPin className="promohub-feature-icon" />
                  Personalized Page
                </label>
              </div>
            </div>
          </div>

          <div className="promohub-form-section">
            <h2 className="promohub-section-title">
              <TrendingUp className="promohub-section-icon" />
              Key Performance Indicators
            </h2>
            
            <div className="promohub-kpis-grid">
              {availableKPIs.map((kpi) => (
                <div key={kpi} className="promohub-checkbox-group">
                  <input
                    type="checkbox"
                    id={`kpi-${kpi}`}
                    value={kpi}
                    checked={formData.kpis.includes(kpi)}
                    onChange={handleKpiChange}
                    disabled={loading}
                  />
                  <label htmlFor={`kpi-${kpi}`}>{kpi}</label>
                </div>
              ))}
            </div>
          </div>

          <div className="promohub-form-actions">
            <div className="promohub-input-group">
              <label>Status</label>
              <select 
                name="status" 
                value={formData.status} 
                onChange={handleChange}
                disabled={loading}
              >
                <option value="draft">Draft</option>
                <option value="launch">Launch</option>
              </select>
            </div>

            <button 
              type="submit" 
              className="promohub-submit-button"
              disabled={loading}
            >
              {loading ? 'Creating Campaign...' : 'Create Campaign'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CampaignCreation;