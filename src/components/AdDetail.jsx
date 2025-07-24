import React from 'react';

const AdDetail = ({ ad, onBack, onEdit, onDelete }) => {
  if (!ad) return null; // Prevent rendering if no ad is selected

  // Normalize keys from backend (snake_case → camelCase)
  const normalizedAd = {
    headline: ad.headline,
    audience: ad.audience,
    location: ad.location,
    status: ad.status,
    mediaType: ad.media_type || ad.mediaType,
    mediaURL: ad.media_url || ad.mediaUrl,
    bidStrategy: ad.bid_strategy || ad.bidStrategy,
    enableAR: ad.enable_ar ?? ad.enableAR,
    arURL: ad.ar_url || ad.arURL,
  };

  return (
    <div className="ad-detail">
      <h2>{normalizedAd.headline || 'Untitled Ad'}</h2>

      <div className="ad-detail-meta">
        <p><strong>Audience:</strong> {normalizedAd.audience || 'N/A'}</p>
        <p><strong>Location:</strong> {normalizedAd.location || 'N/A'}</p>
        <p><strong>Status:</strong> {normalizedAd.status || 'Unknown'}</p>
        <p><strong>Media Type:</strong> {normalizedAd.mediaType || 'N/A'}</p>
        <p><strong>Media URL:</strong> {normalizedAd.mediaURL || 'N/A'}</p>
        <p><strong>Bid Strategy:</strong> {normalizedAd.bidStrategy || 'N/A'}</p>
        <p><strong>AR Enabled:</strong> {normalizedAd.enableAR ? 'Yes' : 'No'}</p>
        {normalizedAd.enableAR && (
          <p><strong>AR URL:</strong> {normalizedAd.arURL || 'N/A'}</p>
        )}
      </div>

      <div className="ad-detail-buttons">
        <button className="btn btn-secondary" onClick={onBack}>
          Back
        </button>

        {/* Only render edit/delete if parent provided these handlers */}
        {typeof onEdit === 'function' && (
          <button className="btn btn-edit" onClick={() => onEdit(ad)}>
            Edit
          </button>
        )}
        {typeof onDelete === 'function' && (
          <button className="btn btn-delete" onClick={() => onDelete(ad.id)}>
            Delete
          </button>
        )}
      </div>
    </div>
  );
};

export default AdDetail;
