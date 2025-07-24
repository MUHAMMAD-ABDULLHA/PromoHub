import { useState } from 'react';
import { Filter, Search, Edit, BarChart2, Pause, Play, Trash2 } from 'lucide-react';
import "../AdManagement.css"
const BrandAdGallery = ({ ads, onEditAd }) => {
  const [filters, setFilters] = useState({
    status: 'all',
    type: 'all',
    search: ''
  });
  const [selectedAds, setSelectedAds] = useState([]);

  const filteredAds = ads.filter(ad => {
    if (filters.status !== 'all' && ad.status !== filters.status) return false;
    if (filters.type !== 'all' && ad.type !== filters.type) return false;
    if (filters.search && !ad.headline.toLowerCase().includes(filters.search.toLowerCase())) return false;
    return true;
  });

  const handleStatusChange = (adId, newStatus) => {
    // In a real app, this would call an API
    console.log(`Changing ad ${adId} status to ${newStatus}`);
  };

  const handleBulkAction = (action) => {
    selectedAds.forEach(adId => {
      if (action === 'pause') handleStatusChange(adId, 'paused');
      if (action === 'activate') handleStatusChange(adId, 'active');
      if (action === 'delete') {
        if (window.confirm('Delete selected ads?')) {
          console.log(`Deleting ad ${adId}`);
        }
      }
    });
    setSelectedAds([]);
  };

  return (
    <div className="brand-ad-gallery">
      <div className="gallery-header">
        <h2>Your Ads</h2>
        <div className="controls">
          <div className="search-bar">
            <Search size={18} />
            <input
              placeholder="Search ads..."
              value={filters.search}
              onChange={(e) => setFilters({...filters, search: e.target.value})}
            />
          </div>
          <div className="filter-group">
            <Filter size={18} />
            <select
              value={filters.status}
              onChange={(e) => setFilters({...filters, status: e.target.value})}
            >
              <option value="all">All Statuses</option>
              <option value="active">Active</option>
              <option value="paused">Paused</option>
            </select>
            <select
              value={filters.type}
              onChange={(e) => setFilters({...filters, type: e.target.value})}
            >
              <option value="all">All Types</option>
              <option value="image">Image</option>
              <option value="video">Video</option>
            </select>
          </div>
          {/* <button className="btn btn-primary" onClick={onCreateAd}>
            + Create Ad
          </button> */}
        </div>
      </div>

      {selectedAds.length > 0 && (
        <div className="bulk-actions">
          <button onClick={() => handleBulkAction('activate')}>
            <Play size={16} /> Activate
          </button>
          <button onClick={() => handleBulkAction('pause')}>
            <Pause size={16} /> Pause
          </button>
          <button onClick={() => handleBulkAction('delete')}>
            <Trash2 size={16} /> Delete
          </button>
          <span>{selectedAds.length} selected</span>
        </div>
      )}

      <div className="ads-grid">
        {filteredAds.length > 0 ? (
          filteredAds.map(ad => (
            <div 
              key={ad.id}
              className={`ad-card ${selectedAds.includes(ad.id) ? 'selected' : ''}`}
              onClick={() => setSelectedAds(prev => 
                prev.includes(ad.id) 
                  ? prev.filter(id => id !== ad.id) 
                  : [...prev, ad.id]
              )}
            >
              <div className="card-header">
                <input
                  type="checkbox"
                  checked={selectedAds.includes(ad.id)}
                  onChange={(e) => e.stopPropagation()}
                />
                <span className={`status-badge ${ad.status}`}>
                  {ad.status}
                </span>
              </div>
              
              <div className="ad-preview">
                {ad.type === 'video' ? (
                  <video src={ad.mediaUrl} muted loop />
                ) : (
                  <img src={ad.mediaUrl} alt={ad.headline} />
                )}
              </div>
              
              <div className="ad-info">
                <h4>{ad.headline}</h4>
                <p className="campaign">{ad.campaign}</p>
                <div className="metrics">
                  <span>
                    <BarChart2 size={14} /> {ad.ctr}% CTR
                  </span>
                  <span>
                    {ad.impressions.toLocaleString()} impressions
                  </span>
                </div>
              </div>
              
              <div className="card-actions">
                <button onClick={(e) => {
                  e.stopPropagation();
                  onEditAd(ad.id);
                }}>
                  <Edit size={16} />
                </button>
                <button onClick={(e) => {
                  e.stopPropagation();
                  console.log(`View analytics for ad ${ad.id}`);
                }}>
                  <BarChart2 size={16} />
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="empty-state">
            <p>No ads found matching your filters</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BrandAdGallery;