import { useEffect, useState } from 'react';
import { Plus, Grid } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAds, fetchAdsByCampaign, deleteAd } from '../slice/adSlice';
import { fetchCampaigns } from '../slice/campaignSlice';

import AdForm from '../components/AdForm';
import AdList from '../components/AdList';
import AdDetail from '../components/AdDetail';

import "../AdManagement.css";

const AdManagement = ({ campaignIdFromDetail = null }) => {
  const dispatch = useDispatch();

  // Redux states
  const { ads, loading } = useSelector((state) => state.ads);
  const { campaigns } = useSelector((state) => state.campaigns);

  // UI states
  const [showAdForm, setShowAdForm] = useState(false);
  const [selectedAd, setSelectedAd] = useState(null);
  const [editMode, setEditMode] = useState(false);

  // Determine campaign context (from detail page or full dashboard)
  const campaignId = campaignIdFromDetail || null;

  // Fetch campaigns + ads
  useEffect(() => {
    dispatch(fetchCampaigns());

    if (campaignId) {
      dispatch(fetchAdsByCampaign(campaignId));
    } else {
      dispatch(fetchAds());
    }
  }, [dispatch, campaignId]);

  /** Handle Create Ad (fresh form) */
  const handleCreateAd = () => {
    setEditMode(false);
    setSelectedAd(null);
    setShowAdForm(true);
  };

  /** Handle Edit Ad (prefill form) */
  const handleEditAd = (ad) => {
    setEditMode(true);
    setSelectedAd(ad);
    setShowAdForm(true);
  };

  /** Handle Delete Ad */
  const handleDeleteAd = async (id) => {
    if (window.confirm('Are you sure you want to delete this ad?')) {
      await dispatch(deleteAd(id));
      // Refresh ads after delete
      if (campaignId) {
        dispatch(fetchAdsByCampaign(campaignId));
      } else {
        dispatch(fetchAds());
      }
      setSelectedAd(null);
    }
  };

  /** Normalize ad for detail view */
  const normalizeAd = (ad) => ({
    ...ad,
    mediaType: ad.media_type || ad.mediaType,
    mediaURL: ad.media_url || ad.mediaURL,
    bidStrategy: ad.bid_strategy || ad.bidStrategy,
    enableAR: ad.enable_ar ?? ad.enableAR,
    arURL: ad.ar_url || ad.arURL,
  });

  return (
    <div className="ad-management-dashboard">
      {/* Header */}
      <div className="dashboard-header">
        <h2>
          <Grid size={24} />
          <b>Ad Management</b>
        </h2>
        <div className="header-actions">
          <button className="btn btn-primary" onClick={handleCreateAd}>
            <Plus size={16} /> Create Ad
          </button>
        </div>
      </div>

      {/* Modal for Create/Edit Ad */}
      {showAdForm && (
        <div className="modal-overlay">
          <div className="modal-content">
            <AdForm
              campaigns={campaigns}
              defaultCampaignId={campaignId}
              existingAd={editMode ? selectedAd : null}
              onSuccess={() => {
                setShowAdForm(false);
                if (campaignId) {
                  dispatch(fetchAdsByCampaign(campaignId));
                } else {
                  dispatch(fetchAds());
                }
              }}
              onCancel={() => setShowAdForm(false)}
              onClose={() => setShowAdForm(false)}
            />
          </div>
        </div>
      )}

      {/* Content - Ad List */}
      <div className="dashboard-content">
        <AdList
          campaignId={campaignId}
          onViewAd={(ad) => setSelectedAd(normalizeAd(ad))}
          onCreateAd={handleCreateAd}
          onEditAd={handleEditAd}
          ads={ads}
          loading={loading}
          campaigns={campaigns}
        />
      </div>

      {/* View single Ad (detail modal) */}
      {selectedAd && !showAdForm && (
        <div className="modal-overlay">
          <div className="modal-content">
            <AdDetail
              ad={normalizeAd(selectedAd)}
              onBack={() => setSelectedAd(null)}
              onEdit={(ad) => handleEditAd(ad)}
              onDelete={(id) => handleDeleteAd(id)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AdManagement;
