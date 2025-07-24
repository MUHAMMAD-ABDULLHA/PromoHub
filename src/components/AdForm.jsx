import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createAd, updateAd } from '../slice/adSlice';

const AdForm = ({ campaignId, existingAd = null, onSuccess, onCancel }) => {
  const dispatch = useDispatch();
  const campaigns = useSelector((state) => state.campaigns.campaigns);
  const [formData, setFormData] = useState(
    existingAd || {
      headline: '',
      audience: '',
      location: '',
      mediaType: 'image',
      mediaUrl: '',
      bidStrategy: 'max_impressions',
      enableAR: false,
      arUrl: '',
      status: 'enabled',
      campaignId: campaignId || '',
    }
  );

  // If no campaignId provided, we allow user to pick from campaigns
  useEffect(() => {
    if (!campaignId && campaigns.length === 0) {
      // dispatch(fetchCampaignsByBrandUserId(...));
    }
  }, [campaignId, campaigns]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (existingAd) {
      dispatch(updateAd({ id: existingAd.id, ...formData })).then(onSuccess);
    } else {
      dispatch(createAd(formData)).then(onSuccess);
    }
  };

  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    } else {
      // fallback in case no handler is provided
      window.history.back();
    }
  };

  return (
    <form className="ad-form" onSubmit={handleSubmit}>
      <h2>{existingAd ? 'Edit Ad' : 'Create Ad'}</h2>

      {!campaignId && (
        <div className="form-group">
          <label>Campaign</label>
          <select
            name="campaignId"
            value={formData.campaignId}
            onChange={handleChange}
            required
          >
            <option value="">Select Campaign</option>
            {campaigns.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </div>
      )}

      <div className="form-group">
        <label>Headline</label>
        <input
          name="headline"
          value={formData.headline}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Audience</label>
        <input
          name="audience"
          value={formData.audience}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Location</label>
        <input
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Media Type</label>
        <select name="mediaType" value={formData.mediaType} onChange={handleChange}>
          <option value="image">Image</option>
          <option value="video">Video</option>
        </select>
      </div>

      <div className="form-group">
        <label>Media URL</label>
        <input
          name="mediaUrl"
          value={formData.mediaUrl}
          onChange={handleChange}
          type="url"
          required
        />
      </div>

      <div className="form-group">
        <label>Bid Strategy</label>
        <select name="bidStrategy" value={formData.bidStrategy} onChange={handleChange}>
          <option value="max_impressions">Max Impressions</option>
          <option value="max_clicks">Max Clicks</option>
          <option value="max_conversions">Max Conversions</option>
        </select>
      </div>

      <div className="form-group checkbox">
        <label>
          <input
            type="checkbox"
            name="enableAR"
            checked={formData.enableAR}
            onChange={handleChange}
          />
          Enable AR
        </label>
      </div>

      {formData.enableAR && (
        <div className="form-group">
          <label>AR URL</label>
          <input
            name="arUrl"
            value={formData.arUrl}
            onChange={handleChange}
            type="url"
            required
          />
        </div>
      )}

      <div className="form-group">
        <label>Status</label>
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="enabled">Enabled</option>
          <option value="paused">Paused</option>
        </select>
      </div>

      <div className="form-buttons">
        <button type="button" className="btn btn-secondary" onClick={handleCancel}>
          Back
        </button>
        <button type="submit" className="btn btn-primary">
          {existingAd ? 'Update Ad' : 'Create Ad'}
        </button>
      </div>
    </form>
  );
};

export default AdForm;
