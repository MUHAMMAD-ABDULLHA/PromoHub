import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdsByCampaign, fetchAds } from '../slice/adSlice';

const AdList = ({ campaignId, onViewAd, onCreateAd, onBack }) => {
  const dispatch = useDispatch();

  const { ads = [], loading } = useSelector((state) => state.ads);
  const campaigns = useSelector((state) => state.campaigns.campaigns);

  const [selectedCampaign, setSelectedCampaign] = useState(campaignId || '');

  useEffect(() => {
    if (campaignId) {
      dispatch(fetchAdsByCampaign(campaignId));
    } else {
      dispatch(fetchAds());
    }
  }, [campaignId, dispatch]);

  const handleFilterChange = (e) => {
    const value = e.target.value;
    setSelectedCampaign(value);
    if (value) {
      dispatch(fetchAdsByCampaign(value));
    } else {
      dispatch(fetchAds());
    }
  };

  // Filter out invalid/null ads
  const validAds = Array.isArray(ads) ? ads.filter((ad) => ad && ad.id) : [];

  return (
    <div className="ad-list">
      <div className="ad-list-header">
        <h2>{campaignId ? 'Ads for Campaign' : 'All Ads'}</h2>

        {/* Show dropdown filter only if not inside campaign detail */}
        {!campaignId && (
          <select
            className="dropdown"
            value={selectedCampaign}
            onChange={handleFilterChange}
          >
            <option value="">All Campaigns</option>
            {campaigns.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        )}

        <button
          className="btn btn-primary"
          onClick={() => onCreateAd(campaignId)}
        >
          Create Ad
        </button>

        {/* Back button visible only if opened from CampaignDetail */}
        {campaignId && (
          <button className="btn btn-secondary" onClick={onBack}>
            Back
          </button>
        )}
      </div>

      {loading ? (
        <p>Loading ads...</p>
      ) : validAds.length === 0 ? (
        <p>No ads available for this campaign.</p>
      ) : (
        <div className="ad-grid">
          {validAds.map((ad) => (
            <div key={ad.id} className="ad-card">
              <h3>{ad.headline || 'Untitled Ad'}</h3>
              <p>
                <strong>Audience:</strong> {ad.audience || 'N/A'}
              </p>
              <p>
                <strong>Location:</strong> {ad.location || 'N/A'}
              </p>
              <p>
                <strong>Status:</strong> {ad.status || 'Unknown'}
              </p>
              <button
                className="btn btn-secondary"
                onClick={() => onViewAd(ad)}
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdList;