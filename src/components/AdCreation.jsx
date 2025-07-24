import { useState } from 'react';
import { WandSparkles, Image, Video, Globe, Rocket, ChevronLeft, Sparkles } from 'lucide-react';
import "../AdManagement.css";

const AdCreation = ({ onClose, campaigns }) => {
  const [step, setStep] = useState(1);
  const [adData, setAdData] = useState({
    campaignId: campaigns[0]?.id || '15', // Use campaign ID 15
    description: '',
    headline: '',
    media: null,
    mediaType: 'image',
    targeting: {
      audiences: [],
      locations: []
    },
    bidStrategy: 'max_conversions',
    enableAR: false,
    arFile: null
  });

  const [aiSuggestions, setAiSuggestions] = useState({
    headlines: [
      "Summer Sale - Up to 50% Off!",
      "New Collection Just Dropped",
      "Limited Time Offer - Shop Now"
    ],
    audiences: [
      { id: 'aud_1', name: 'Fashion Enthusiasts', size: 1250000 },
      { id: 'aud_2', name: 'Sports Lovers', size: 850000 },
      { id: 'aud_3', name: 'Tech Savvy', size: 920000 }
    ]
  });

  const [error, setError] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAdData({ ...adData, [name]: value });
  };

  const handleGenerateSuggestions = (field) => {
    if (field === 'headline') {
      setAiSuggestions({
        ...aiSuggestions,
        headlines: [
          `${adData.description.split(' ')[0]} Special - Shop Now!`,
          `New ${adData.description.split(' ').slice(0, 2).join(' ')} Collection`,
          `Limited Time Offer on ${adData.description.split(' ')[0]}`
        ]
      });
    }
  };

  const handleMediaUpload = (e) => {
    const file = e.target.files[0];
    if (file && (file.type.startsWith('image/') || file.type.startsWith('video/'))) {
      setAdData({
        ...adData,
        media: file,
        mediaType: file
      });
      setError(null);
    } else {
      setError('Please upload a valid image or video file.');
    }
  };

  const handleARFileUpload = (e) => {
    const file = e.target.files[0];
    if (file && ['image/jpeg', 'image/png', 'video/mp4'].includes(file.type)) {
      setAdData({ ...adData, arFile: file });
      setError(null);
    } else {
      setError('Please upload a valid AR asset (JPEG, PNG, or MP4).');
    }
  };

  const handleSubmit = async () => {
    if (!adData.media) {
      setError('Media file is required.');
      return;
    }
    if (adData.enableAR && !adData.arFile) {
      setError('AR asset is required when AR is enabled.');
      return;
    }

    // const token = localStorage.getItem('token');
    // console.log('JWT Token:', token || 'No token found');
    // if (!token || token === 'null') {
    //   setError('Please log in to create an ad.');
    //   return;
    // }

    setUploading(true);
    setError(null);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('headline', adData.headline);
      formDataToSend.append('mediaType', adData.mediaType);
      formDataToSend.append('targeting', JSON.stringify(adData.targeting));
      formDataToSend.append('bidStrategy', adData.bidStrategy);
      formDataToSend.append('enableAR', adData.enableAR.toString());
      formDataToSend.append('media', adData.media);
      if (adData.enableAR && adData.arFile) {
        formDataToSend.append('arFile', adData.arFile);
      }

      console.log('Sending request to http://localhost:8080/brand/campaigns/', adData.campaignId, '/ads');
      for (let [key, value] of formDataToSend.entries()) {
        console.log('FormData:', key, value);
      }

      const response = await fetch(`http://localhost:8080/brand/campaigns/${adData.campaignId}/ads`, {
        method: 'POST',
        body: formDataToSend,
        // headers: {
        //   'Authorization': `Bearer ${token}`
        // }
      });

      console.log('Response status:', response.status, response.statusText);

      let result;
      try {
        const text = await response.text();
        console.log('Raw response:', text);
        result = text ? JSON.parse(text) : {};
      } catch (jsonErr) {
        throw new Error(`Invalid JSON response: ${jsonErr.message}`);
      }

      if (!response.ok) {
        throw new Error(result.error || `Failed to create ad (Status: ${response.status})`);
      }

      console.log('Ad created:', result);
      onClose();
    } catch (err) {
      console.error('Submission error:', err);
      setError(err.message || 'An error occurred while creating the ad.');
    } finally {
      setUploading(false);
    }
  };

  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <div className="creation-method">
            <h3>Create New Ad</h3>
            <div className="method-options">
              <div className="method-card" onClick={() => setStep(2)}>
                <WandSparkles size={32} />
                <h4>AI-Assisted Creation</h4>
                <p>Describe your ad and get AI-generated suggestions</p>
              </div>
              <div className="method-card" onClick={() => setStep(3)}>
                <Sparkles size={32} />
                <h4>Manual Creation</h4>
                <p>Build your ad step-by-step with guidance</p>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="text-to-ad">
            <h3>Describe Your Ad</h3>
            <textarea
              name="description"
              value={adData.description}
              onChange={handleInputChange}
              placeholder="Example: A vibrant video ad for summer sneakers showing teenagers playing beach volleyball, with upbeat music"
            />
            <button 
              className="btn btn-primary"
              onClick={() => {
                handleGenerateSuggestions('headline');
                setStep(4);
              }}
            >
              Generate Ad Concepts
            </button>
          </div>
        );
      case 3:
        return (
          <div className="manual-creation">
            <h3>Create Your Ad</h3>
            <div className="form-group">
              <label>Campaign</label>
              <select
                name="campaignId"
                value={adData.campaignId}
                onChange={handleInputChange}
              >
                {campaigns.map(campaign => (
                  <option key={campaign.id} value={campaign.id}>
                    {campaign.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Headline</label>
              <div className="input-with-ai">
                <input
                  name="headline"
                  value={adData.headline}
                  onChange={handleInputChange}
                  placeholder="Enter headline..."
                />
                <button 
                  className="ai-suggest-btn"
                  onClick={() => handleGenerateSuggestions('headline')}
                >
                  <Sparkles size={16} /> Suggest
                </button>
              </div>
              {aiSuggestions.headlines && (
                <div className="suggestions-dropdown">
                  {aiSuggestions.headlines.map((suggestion, i) => (
                    <div 
                      key={i}
                      className="suggestion-item"
                      onClick={() => setAdData({...adData, headline: suggestion})}
                    >
                      {suggestion}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="form-group">
              <label>Media</label>
              <input
                type="file"
                accept="image/*,video/*"
                onChange={handleMediaUpload}
              />
              {adData.media && <p>Selected: {adData.media.name}</p>}
            </div>
            <div className="form-group">
              <label>
                <input
                  type="checkbox"
                  checked={adData.enableAR}
                  onChange={(e) => setAdData({ ...adData, enableAR: e.target.checked })}
                />
                Enable AR Experience
              </label>
            </div>
            {adData.enableAR && (
              <div className="form-group">
                <label>AR Asset (Image or Video)</label>
                <input
                  type="file"
                  accept="image/jpeg,image/png,video/mp4"
                  onChange={handleARFileUpload}
                />
                {adData.arFile && <p>Selected: {adData.arFile.name}</p>}
              </div>
            )}
            {error && <div className="error-message">{error}</div>}
          </div>
        );
      case 4:
        return (
          <div className="targeting">
            <h3>Targeting Options</h3>
            <div className="form-group">
              <label>Audiences</label>
              <select
                multiple
                value={adData.targeting.audiences}
                onChange={(e) => {
                  const options = Array.from(e.target.selectedOptions, opt => opt.value);
                  setAdData({
                    ...adData,
                    targeting: { ...adData.targeting, audiences: options }
                  });
                }}
              >
                {aiSuggestions.audiences.map(audience => (
                  <option key={audience.id} value={audience.id}>
                    {audience.name} ({audience.size.toLocaleString()})
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Locations</label>
              <input
                placeholder="Enter locations (comma separated)"
                value={adData.targeting.locations.join(', ')}
                onChange={(e) => {
                  const locations = e.target.value.split(',').map(l => l.trim());
                  setAdData({
                    ...adData,
                    targeting: { ...adData.targeting, locations }
                  });
                }}
              />
            </div>
            {error && <div className="error-message">{error}</div>}
          </div>
        );
      case 5:
        return (
          <div className="review">
            <h3>Review Your Ad</h3>
            <div className="ad-preview">
              {adData.mediaType === 'video' ? (
                <video src={adData.media ? URL.createObjectURL(adData.media) : ''} controls />
              ) : (
                <img 
                  src={adData.media ? URL.createObjectURL(adData.media) : 'https://via.placeholder.com/300x150'} 
                  alt="Ad preview" 
                />
              )}
              <div className="preview-text">
                <h4>{adData.headline || 'Your Headline Here'}</h4>
                <button className="cta-btn">Learn More</button>
              </div>
            </div>
            <div className="summary">
              <h4>Summary</h4>
              <p><strong>Campaign:</strong> {campaigns.find(c => c.id === adData.campaignId)?.name}</p>
              <p><strong>Headline:</strong> {adData.headline || 'Not set'}</p>
              <p><strong>Audiences:</strong> {adData.targeting.audiences.length > 0 
                ? adData.targeting.audiences.join(', ') 
                : 'All audiences'}</p>
              <p><strong>Locations:</strong> {adData.targeting.locations.length > 0 
                ? adData.targeting.locations.join(', ') 
                : 'All locations'}</p>
              <p><strong>AR Enabled:</strong> {adData.enableAR ? 'Yes' : 'No'}</p>
            </div>
            <button 
              className="btn btn-primary" 
              onClick={handleSubmit}
              disabled={uploading}
            >
              {uploading ? 'Publishing...' : 'Publish Ad'}
            </button>
            {error && <div className="error-message">{error}</div>}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="ad-creation-wizard">
      <div className="wizard-header">
        <button className="back-btn" onClick={step > 1 ? () => setStep(step - 1) : onClose}>
          <ChevronLeft size={20} /> Back
        </button>
        <h3>Create Ad ({step}/5)</h3>
      </div>
      
      {renderStep()}
      
      {step > 1 && step < 5 && (
        <div className="wizard-footer">
          <button className="btn btn-secondary" onClick={() => setStep(step - 1)}>
            Back
          </button>
          <button className="btn btn-primary" onClick={() => setStep(step + 1)}>
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default AdCreation;