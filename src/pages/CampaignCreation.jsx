import React, { useState } from 'react';
import "../CampaignCreation.css";

function CampaignCreation() {
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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    let newValue = type === 'checkbox' ? checked : value;

    // Force number types for budget fields
    if ((name === 'overall_budget' || name === 'daily_budget') && value !== '') {
      newValue = parseFloat(value);
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
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem("user_id");
    console.log("User ID:", userId);
    const campaignPayload = {
      brand_user_id: parseInt(userId), // required for FK to users table
      name: formData.name,
      description: formData.description,
      objective: formData.objective,
      overall_budget: parseFloat(formData.overall_budget),
      daily_budget: parseFloat(formData.daily_budget),
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
      kpis: formData.kpis, // For campaign_kpis table
    };
    

    if (!token) {
      alert('You are not authenticated!');
      return;
    }
    console.log('Campaign Data:', campaignPayload);
    formData.user_id = userId; // Add user_id to formData
    try {
      const response = await fetch('http://localhost:8080/brand/campaigns/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(campaignPayload),
      });

      if (!response.ok) throw new Error('Failed to save campaign');

      const data = await response.json();
      alert('Campaign saved successfully!');
      console.log(data);
    } catch (error) {
      console.error(error);
      alert('Error saving campaign');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Campaign Builder</h2>

      <label>
        Campaign Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </label>

      <label>
        Description:
        <textarea name="description" value={formData.description} onChange={handleChange} required />
      </label>

      <label>
        Objective:
        <select name="objective" value={formData.objective} onChange={handleChange} required>
          <option value="">Select an objective</option>
          {objectives.map((obj) => (
            <option key={obj} value={obj}>{obj}</option>
          ))}
        </select>
      </label>

      <label>
        Overall Budget:
        <input type="number" name="overall_budget" value={formData.overall_budget} onChange={handleChange} required />
      </label>

      <label>
        Daily Budget:
        <input type="number" name="daily_budget" value={formData.daily_budget} onChange={handleChange} required />
      </label>

      <label>
        Start Date:
        <input type="date" name="start_date" value={formData.start_date} onChange={handleChange} required />
      </label>

      <label>
        End Date:
        <input type="date" name="end_date" value={formData.end_date} onChange={handleChange} required />
      </label>

      <label>
        Demographics:
        <textarea name="demographics" value={formData.demographics} onChange={handleChange} />
      </label>

      <label>
        Has Historical Data:
        <input type="checkbox" name="has_historical" checked={formData.has_historical} onChange={handleChange} />
      </label>

      {formData.has_historical && (
        <label>
          Historical Data:
          <textarea name="historical_data" value={formData.historical_data} onChange={handleChange} />
        </label>
      )}

      <label>
        Key Messages:
        <textarea name="key_messages" value={formData.key_messages} onChange={handleChange} required />
      </label>

      <label>
        Call to Action:
        <select name="cta" value={formData.cta} onChange={handleChange} required>
          <option value="">Select a CTA</option>
          {ctas.map((cta) => (
            <option key={cta} value={cta}>{cta}</option>
          ))}
        </select>
      </label>

      <label>
        Offers:
        <input type="text" name="offers" value={formData.offers} onChange={handleChange} />
      </label>

      <label>
        Enable AR:
        <input type="checkbox" name="enable_ar" checked={formData.enable_ar} onChange={handleChange} />
      </label>

      <label>
        Enable Voice:
        <input type="checkbox" name="enable_voice" checked={formData.enable_voice} onChange={handleChange} />
      </label>

      <label>
        Multi-Step Form:
        <input type="checkbox" name="multi_step_form" checked={formData.multi_step_form} onChange={handleChange} />
      </label>

      <label>
        Personalized Page:
        <input type="checkbox" name="personalized_page" checked={formData.personalized_page} onChange={handleChange} />
      </label>

      <label>
        Status:
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="draft">Draft</option>
          <option value="launch">Launch</option>
        </select>
      </label>

      <fieldset>
        <legend>KPIs</legend>
        {availableKPIs.map((kpi) => (
          <label key={kpi}>
            <input
              type="checkbox"
              value={kpi}
              checked={formData.kpis.includes(kpi)}
              onChange={handleKpiChange}
            />
            {kpi}
          </label>
        ))}
      </fieldset>

      <button type="submit">Submit Campaign</button>
    </form>
  );
}

export default CampaignCreation;
