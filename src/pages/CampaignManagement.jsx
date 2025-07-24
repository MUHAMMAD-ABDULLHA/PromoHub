import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchCampaign,
  fetchCampaigns,
  updateCampaign,
  deleteCampaign,
  setCreatingCampaign,
  clearSelectedCampaign
} from '../slice/campaignSlice';

import CampaignList from '../components/CampaignCard';
import CampaignDetail from '../components/CampaignDetail';
import CampaignEdit from '../components/CampaignEdit';
import CampaignCreation from './CampaignCreation';

const CampaignManagement = () => {
  const dispatch = useDispatch();
  const {
    campaigns,
    selectedCampaign,
    loading,
    error,
    isCreatingCampaign
  } = useSelector((state) => state.campaigns);

  const [searchQuery, setSearchQuery] = useState('');
  const [dateRange, setDateRange] = useState('last30days');
  const [viewMode, setViewMode] = useState('list'); // 'list' | 'view' | 'edit'

  // Fetch campaigns on mount
  useEffect(() => {
    dispatch(fetchCampaigns());
  }, [dispatch]);

  // View campaign
  const handleViewCampaign = async (campaignId) => {
    const result = await dispatch(fetchCampaign(campaignId));
    if (fetchCampaign.fulfilled.match(result)) {
      setViewMode('view');
    } else {
      console.error('Failed to fetch campaign for view:', result.error);
    }
  };

  // Edit campaign (fix: fetch before switching to edit)
  const handleEditCampaign = async (campaignId) => {
    const result = await dispatch(fetchCampaign(campaignId));
    if (fetchCampaign.fulfilled.match(result)) {
      setViewMode('edit');
    } else {
      console.error('Failed to fetch campaign for edit:', result.error);
    }
  };

  // Save edits
  const handleSaveEdit = async (updatedCampaign) => {
    try {
      await dispatch(
        updateCampaign({
          id: updatedCampaign.id,
          data: updatedCampaign
        })
      );

      dispatch(fetchCampaigns());
      setViewMode('view');
    } catch (err) {
      console.error('Failed to update campaign:', err);
    }
  };

  // Delete campaign
  const handleDeleteCampaign = async (campaignId) => {
    if (window.confirm('Are you sure you want to delete this campaign?')) {
      try {
        await dispatch(deleteCampaign(campaignId));
        dispatch(fetchCampaigns());
        setViewMode('list');
      } catch (err) {
        console.error('Failed to delete campaign:', err);
      }
    }
  };

  // Back to list
  const handleBackToList = () => {
    setViewMode('list');
    dispatch(clearSelectedCampaign());
  };

  if (loading) return <div className="loading">Loading campaigns...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  console.log('viewMode:', viewMode, 'selectedCampaign:', selectedCampaign);

  return (
    <div className="campaign-management">
      {isCreatingCampaign ? (
        <CampaignCreation
          onCancel={() => dispatch(setCreatingCampaign(false))}
          onCreate={() => {
            dispatch(setCreatingCampaign(false));
            dispatch(fetchCampaigns());
          }}
        />
      ) : viewMode === 'view' && selectedCampaign ? (
        <CampaignDetail
          campaign={selectedCampaign}
          onBack={handleBackToList}
          onEdit={() => handleEditCampaign(selectedCampaign.id)}
          onDelete={() => handleDeleteCampaign(selectedCampaign.id)}
        />
      ) : viewMode === 'edit' && selectedCampaign ? (
        <CampaignEdit
          campaign={selectedCampaign}
          onSave={handleSaveEdit}
          onCancel={handleBackToList}
        />
      ) : (
        <CampaignList
          campaigns={campaigns.filter((c) =>
            c.name.toLowerCase().includes(searchQuery.toLowerCase())
          )}
          searchQuery={searchQuery}
          dateRange={dateRange}
          onSearchChange={setSearchQuery}
          onDateRangeChange={setDateRange}
          onViewCampaign={handleViewCampaign}
          onEditCampaign={handleEditCampaign}
          onDeleteCampaign={handleDeleteCampaign}
          onCreateCampaign={() => dispatch(setCreatingCampaign(true))}
        />
      )}
    </div>
  );
};

export default CampaignManagement;
