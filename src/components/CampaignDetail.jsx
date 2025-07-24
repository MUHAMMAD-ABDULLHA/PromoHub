import React, { useState } from 'react';
import '../CampaignDetail.css';
import AdList from './AdList';
import AdForm from './AdForm';

const CampaignDetail = ({ campaign, onBack, onEdit, onDelete }) => {
  const [viewMode, setViewMode] = useState('detail'); // 'detail' | 'create-ad' | 'view-ads'

  if (!campaign) return null;

  return (
    <div className="campaign-detail">
      {viewMode === 'detail' && (
        <>
          <h2 className="campaign-detail-title">{campaign.name}</h2>
          <p className="campaign-detail-description">{campaign.description}</p>

          <div className="campaign-detail-meta">
            <p><strong>Objective:</strong> {campaign.objective}</p>
            <p><strong>Overall Budget:</strong> ${campaign.overallBudget}</p>
            <p><strong>Daily Budget:</strong> ${campaign.dailyBudget}</p>
            <p><strong>Start Date:</strong> {campaign.startDate}</p>
            <p><strong>End Date:</strong> {campaign.endDate}</p>
          </div>

          <div className="campaign-detail-buttons">
            <button className="btn" onClick={onBack}>Back</button>
            <button className="btn btn-edit" onClick={() => onEdit(campaign)}>Edit</button>
            <button className="btn btn-delete" onClick={() => onDelete(campaign.id)}>Delete</button>

            {/* Ad Management Buttons */}
            <button
              className="btn btn-primary"
              onClick={() => setViewMode('create-ad')}
            >
              Create Ad
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => setViewMode('view-ads')}
            >
              View Ads
            </button>
          </div>
        </>
      )}

      {viewMode === 'create-ad' && (
        <AdForm
          campaignId={campaign.id}
          onSuccess={() => setViewMode('view-ads')}
          onCancel={() => setViewMode('detail')}
        />

      )}

      {viewMode === 'view-ads' && (
        <AdList
          campaignId={campaign.id}
          onBack={() => setViewMode('detail')}
        />
      )}
    </div>
  );
};

export default CampaignDetail;
