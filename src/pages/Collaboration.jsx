// import React, { useState, useEffect } from 'react';
// import {
//   Users, MessageSquare, GitMerge, Plus, Check, X,
//   ChevronDown, ChevronUp, Video, Download, Filter,
//   BarChart2, Mail, AlertCircle, RefreshCw, Slack, ZoomIn,
//   FileText, Clipboard, Settings, Share2, Bell
// } from 'lucide-react';
// import "../Collaboration.css";

// const Collaboration = () => {
//   // State for the active tab
//   const [activeTab, setActiveTab] = useState('collaborate');
  
//   // Collaboration states
//   const [projects, setProjects] = useState([
//     {
//       id: 1,
//       name: 'Summer Fashion Collab',
//       status: 'draft',
//       brands: ['Nike'],
//       invitedBrands: ['Adidas'],
//       sheetUrl: '#',
//       budget: 50000,
//       goals: 'Increase brand awareness by 20%',
//       audience: 'Age 18-35, fashion-conscious',
//       conflicts: []
//     }
//   ]);
  
//   // Communication states
//   const [activeConversation, setActiveConversation] = useState(null);
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState('');
  
//   // Comparison states
//   const [comparisonData, setComparisonData] = useState({
//     campaigns: [],
//     filters: {
//       timeframe: 'last30days',
//       region: 'global',
//       metric: 'ctr'
//     },
//     reportStatus: 'idle'
//   });
  
//   // UI states
//   const [notification, setNotification] = useState(null);
//   const [showVideoModal, setShowVideoModal] = useState(false);

//   // Mock data initialization
//   useEffect(() => {
//     // Load mock communications
//     setMessages([
//       {
//         id: 1,
//         sender: 'nike_admin',
//         text: 'Here is the creative brief for the summer campaign',
//         timestamp: new Date(Date.now() - 3600000),
//         attachments: ['brief.pdf'],
//         status: 'delivered'
//       },
//       {
//         id: 2,
//         sender: 'influencer_alex',
//         text: 'Thanks! I have some questions about the target audience',
//         timestamp: new Date(Date.now() - 1800000),
//         status: 'delivered'
//       }
//     ]);
    
//     // Load mock comparison data
//     setComparisonData(prev => ({
//       ...prev,
//       campaigns: [
//         {
//           id: 1,
//           name: 'Nike Summer',
//           metrics: {
//             ctr: '5.4%',
//             roi: '22%',
//             conversions: 342,
//             spend: 25000
//           }
//         },
//         {
//           id: 2,
//           name: 'Adidas Summer',
//           metrics: {
//             ctr: '4.8%',
//             roi: '18%',
//             conversions: 289,
//             spend: 22000
//           }
//         }
//       ]
//     }));
//   }, []);

//   // Collaboration handlers
// //   const inviteBrand = (projectId, brandName) => {
// //     setProjects(prev => prev.map(proj => 
// //       proj.id === projectId 
// //         ? { ...proj, invitedBrands: [...proj.invitedBrands, brandName] }
// //         : proj
// //     ));
// //     showNotification(`Invitation sent to ${brandName}`);
// //   };

//   const acceptInvitation = (projectId) => {
//     setProjects(prev => prev.map(proj => {
//       if (proj.id === projectId) {
//         return {
//           ...proj,
//           status: 'active',
//           brands: [...proj.brands, ...proj.invitedBrands],
//           invitedBrands: []
//         };
//       }
//       return proj;
//     }));
//     showNotification('Collaboration accepted! Shared workspace created');
//   };

//   const rejectInvitation = (projectId) => {
//     setProjects(prev => prev.map(proj => 
//       proj.id === projectId 
//         ? { ...proj, status: 'rejected', invitedBrands: [] }
//         : proj
//     ));
//     showNotification('Collaboration rejected');
//   };

//   const addBudgetConflict = (projectId, conflict) => {
//     setProjects(prev => prev.map(proj => 
//       proj.id === projectId 
//         ? { ...proj, conflicts: [...proj.conflicts, conflict] }
//         : proj
//     ));
//   };

//   const resolveConflict = (projectId, conflictIndex) => {
//     setProjects(prev => prev.map(proj => 
//       proj.id === projectId 
//         ? { 
//             ...proj, 
//             conflicts: proj.conflicts.filter((_, i) => i !== conflictIndex) 
//           }
//         : proj
//     ));
//   };

//   // Communication handlers
//   const startConversation = (influencer) => {
//     setActiveConversation({
//       influencer,
//       status: 'active',
//       platform: 'slack' // or 'smartsheet'
//     });
//   };

//   const sendMessage = () => {
//     if (!newMessage.trim()) return;
    
//     const message = {
//       id: messages.length + 1,
//       sender: 'current_user',
//       text: newMessage,
//       timestamp: new Date(),
//       status: 'sending'
//     };
    
//     setMessages(prev => [...prev, message]);
//     setNewMessage('');
    
//     // Simulate delivery
//     setTimeout(() => {
//       setMessages(prev => prev.map(msg => 
//         msg.id === message.id ? { ...msg, status: 'delivered' } : msg
//       ));
//     }, 1000);
//   };

//   const scheduleVideoCall = () => {
//     setShowVideoModal(true);
//     showNotification('Zoom meeting scheduled and invite sent');
//   };

//   // Comparison handlers
//   const generateReport = () => {
//     setComparisonData(prev => ({ ...prev, reportStatus: 'generating' }));
    
//     // Simulate report generation
//     setTimeout(() => {
//       setComparisonData(prev => ({ 
//         ...prev, 
//         reportStatus: 'ready',
//         insights: [
//           'Nike campaign outperformed Adidas by 0.6% CTR',
//           'Adidas had better ROI in European markets'
//         ]
//       }));
//       showNotification('Comparative report generated');
//     }, 2000);
//   };

//   const exportReport = (format) => {
//     showNotification(`Report exported as ${format.toUpperCase()}`);
//   };

//   // UI helpers
//   const showNotification = (message) => {
//     setNotification(message);
//     setTimeout(() => setNotification(null), 3000);
//   };

//   return (
//     <div className="smartsheet-collab-container">
//       {/* Notification system */}
//       {notification && (
//         <div className="notification">
//           <Bell size={16} />
//           <span>{notification}</span>
//           <button onClick={() => setNotification(null)}>×</button>
//         </div>
//       )}

//       {/* Main tabs */}
//       <div className="tabs">
//         <button
//           className={`tab ${activeTab === 'collaborate' ? 'active' : ''}`}
//           onClick={() => setActiveTab('collaborate')}
//         >
//           <Users size={16} /> Collaborate
//         </button>
//         <button
//           className={`tab ${activeTab === 'communicate' ? 'active' : ''}`}
//           onClick={() => setActiveTab('communicate')}
//         >
//           <MessageSquare size={16} /> Communicate
//         </button>
//         <button
//           className={`tab ${activeTab === 'compare' ? 'active' : ''}`}
//           onClick={() => setActiveTab('compare')}
//         >
//           <GitMerge size={16} /> Compare
//         </button>
//       </div>

//       {/* Tab content */}
//       <div className="tab-content">
//         {activeTab === 'collaborate' && (
//           <div className="collaboration-panel">
//             <div className="project-list">
//               {projects.map(project => (
//                 <div key={project.id} className={`project-card ${project.status}`}>
//                   <div className="project-header">
//                     <h3>{project.name}</h3>
//                     <span className="status">{project.status}</span>
//                   </div>
                  
//                   <div className="project-details">
//                     <div className="detail">
//                       <label>Brands:</label>
//                       <span>{project.brands.join(', ')}</span>
//                     </div>
                    
//                     {project.invitedBrands.length > 0 && (
//                       <div className="detail">
//                         <label>Pending Invites:</label>
//                         <span>{project.invitedBrands.join(', ')}</span>
//                         <div className="invite-actions">
//                           <button 
//                             className="btn btn-success"
//                             onClick={() => acceptInvitation(project.id)}
//                           >
//                             <Check size={14} /> Accept
//                           </button>
//                           <button 
//                             className="btn btn-danger"
//                             onClick={() => rejectInvitation(project.id)}
//                           >
//                             <X size={14} /> Reject
//                           </button>
//                         </div>
//                       </div>
//                     )}
                    
//                     <div className="detail">
//                       <label>Budget:</label>
//                       <span>${project.budget.toLocaleString()}</span>
//                     </div>
                    
//                     <div className="detail">
//                       <label>Goals:</label>
//                       <span>{project.goals}</span>
//                     </div>
                    
//                     <div className="detail">
//                       <label>Audience:</label>
//                       <span>{project.audience}</span>
//                     </div>
                    
//                     {project.conflicts.length > 0 && (
//                       <div className="conflicts">
//                         <label>Conflicts:</label>
//                         <ul>
//                           {project.conflicts.map((conflict, i) => (
//                             <li key={i}>
//                               <AlertCircle size={14} />
//                               <span>{conflict}</span>
//                               <button
//                                 className="btn btn-outline"
//                                 onClick={() => resolveConflict(project.id, i)}
//                               >
//                                 Resolve
//                               </button>
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                     )}
//                   </div>
                  
//                   <div className="project-actions">
//                     <a href={project.sheetUrl} className="btn btn-primary">
//                       <FileText size={14} /> Open Sheet
//                     </a>
//                     <button className="btn btn-secondary">
//                       <Share2 size={14} /> Invite More Brands
//                     </button>
//                     <button 
//                       className="btn btn-outline"
//                       onClick={() => addBudgetConflict(project.id, 'Budget allocation needs adjustment')}
//                     >
//                       Flag Issue
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {activeTab === 'communicate' && (
//           <div className="communication-panel">
//             {activeConversation ? (
//               <div className="chat-interface">
//                 <div className="chat-header">
//                   <button 
//                     className="back-button"
//                     onClick={() => setActiveConversation(null)}
//                   >
//                     ← Back
//                   </button>
//                   <h3>
//                     Chat with {activeConversation.influencer}
//                     <span className="platform">
//                       {activeConversation.platform === 'slack' ? <Slack size={16} /> : <FileText size={16} />}
//                     </span>
//                   </h3>
//                   <button 
//                     className="btn btn-outline"
//                     onClick={scheduleVideoCall}
//                   >
//                     <ZoomIn size={14} /> Schedule Call
//                   </button>
//                 </div>
                
//                 <div className="message-list">
//                   {messages.map(message => (
//                     <div key={message.id} className={`message ${message.sender}`}>
//                       <div className="message-content">
//                         <p>{message.text}</p>
//                         {message.attachments && (
//                           <div className="attachments">
//                             {message.attachments.map((file, i) => (
//                               <div key={i} className="attachment">
//                                 <Clipboard size={14} />
//                                 <span>{file}</span>
//                               </div>
//                             ))}
//                           </div>
//                         )}
//                         <div className="message-meta">
//                           <span className="time">
//                             {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
//                           </span>
//                           {message.status === 'sending' && (
//                             <span className="status">Sending...</span>
//                           )}
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
                
//                 <div className="message-input">
//                   <input
//                     type="text"
//                     value={newMessage}
//                     onChange={(e) => setNewMessage(e.target.value)}
//                     placeholder="Type your message..."
//                     onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
//                   />
//                   <button 
//                     className="btn btn-primary"
//                     onClick={sendMessage}
//                   >
//                     Send
//                   </button>
//                 </div>
//               </div>
//             ) : (
//               <div className="conversation-list">
//                 <h3>Recent Conversations</h3>
//                 <div className="conversation-card" onClick={() => startConversation('Alex Johnson')}>
//                   <div className="influencer">Alex Johnson</div>
//                   <div className="campaign">Summer Fashion Collab</div>
//                   <div className="last-message">About the creative brief...</div>
//                   <div className="status unread">New messages</div>
//                 </div>
//                 <div className="conversation-card" onClick={() => startConversation('Taylor Smith')}>
//                   <div className="influencer">Taylor Smith</div>
//                   <div className="campaign">Tech Bundle Promo</div>
//                   <div className="last-message">Waiting for feedback...</div>
//                   <div className="status">Active</div>
//                 </div>
//               </div>
//             )}
//           </div>
//         )}

//         {activeTab === 'compare' && (
//           <div className="comparison-panel">
//             <div className="comparison-controls">
//               <div className="filters">
//                 <div className="filter-group">
//                   <label>Time Frame:</label>
//                   <select
//                     value={comparisonData.filters.timeframe}
//                     onChange={(e) => setComparisonData(prev => ({
//                       ...prev,
//                       filters: { ...prev.filters, timeframe: e.target.value }
//                     }))}
//                   >
//                     <option value="last7days">Last 7 Days</option>
//                     <option value="last30days">Last 30 Days</option>
//                     <option value="lastquarter">Last Quarter</option>
//                   </select>
//                 </div>
                
//                 <div className="filter-group">
//                   <label>Region:</label>
//                   <select
//                     value={comparisonData.filters.region}
//                     onChange={(e) => setComparisonData(prev => ({
//                       ...prev,
//                       filters: { ...prev.filters, region: e.target.value }
//                     }))}
//                   >
//                     <option value="global">Global</option>
//                     <option value="north_america">North America</option>
//                     <option value="europe">Europe</option>
//                     <option value="asia">Asia</option>
//                   </select>
//                 </div>
                
//                 <div className="filter-group">
//                   <label>Primary Metric:</label>
//                   <select
//                     value={comparisonData.filters.metric}
//                     onChange={(e) => setComparisonData(prev => ({
//                       ...prev,
//                       filters: { ...prev.filters, metric: e.target.value }
//                     }))}
//                   >
//                     <option value="ctr">CTR</option>
//                     <option value="roi">ROI</option>
//                     <option value="conversions">Conversions</option>
//                     <option value="spend">Spend</option>
//                   </select>
//                 </div>
//               </div>
              
//               <div className="actions">
//                 <button 
//                   className="btn btn-primary"
//                   onClick={generateReport}
//                   disabled={comparisonData.reportStatus === 'generating'}
//                 >
//                   {comparisonData.reportStatus === 'generating' ? (
//                     <>
//                       <RefreshCw className="spinner" size={14} /> Generating...
//                     </>
//                   ) : (
//                     <>
//                       <BarChart2 size={14} /> Generate Report
//                     </>
//                   )}
//                 </button>
                
//                 {comparisonData.reportStatus === 'ready' && (
//                   <>
//                     <button 
//                       className="btn btn-outline"
//                       onClick={() => exportReport('pdf')}
//                     >
//                       <Download size={14} /> PDF
//                     </button>
//                     <button 
//                       className="btn btn-outline"
//                       onClick={() => exportReport('csv')}
//                     >
//                       <Download size={14} /> CSV
//                     </button>
//                   </>
//                 )}
//               </div>
//             </div>
            
//             {comparisonData.campaigns.length > 0 && (
//               <div className="comparison-results">
//                 <div className="metrics-table">
//                   <table>
//                     <thead>
//                       <tr>
//                         <th>Metric</th>
//                         {comparisonData.campaigns.map(campaign => (
//                           <th key={campaign.id}>{campaign.name}</th>
//                         ))}
//                         <th>Difference</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       <tr>
//                         <td>CTR</td>
//                         {comparisonData.campaigns.map(campaign => (
//                           <td key={`${campaign.id}-ctr`}>{campaign.metrics.ctr}</td>
//                         ))}
//                         <td className={
//                           parseFloat(comparisonData.campaigns[0].metrics.ctr) > 
//                           parseFloat(comparisonData.campaigns[1].metrics.ctr) 
//                             ? 'positive' 
//                             : 'negative'
//                         }>
//                           {(
//                             parseFloat(comparisonData.campaigns[0].metrics.ctr) - 
//                             parseFloat(comparisonData.campaigns[1].metrics.ctr)
//                           ).toFixed(1)}%
//                         </td>
//                       </tr>
//                       <tr>
//                         <td>ROI</td>
//                         {comparisonData.campaigns.map(campaign => (
//                           <td key={`${campaign.id}-roi`}>{campaign.metrics.roi}</td>
//                         ))}
//                         <td className={
//                           parseFloat(comparisonData.campaigns[0].metrics.roi) > 
//                           parseFloat(comparisonData.campaigns[1].metrics.roi) 
//                             ? 'positive' 
//                             : 'negative'
//                         }>
//                           {(
//                             parseFloat(comparisonData.campaigns[0].metrics.roi) - 
//                             parseFloat(comparisonData.campaigns[1].metrics.roi)
//                           ).toFixed(1)}%
//                         </td>
//                       </tr>
//                     </tbody>
//                   </table>
//                 </div>
                
//                 <div className="visualization">
//                   <div className="chart-placeholder">
//                     <BarChart2 size={48} />
//                     <p>Performance comparison visualization will appear here</p>
//                   </div>
//                 </div>
                
//                 {comparisonData.insights && (
//                   <div className="insights">
//                     <h4>Key Insights</h4>
//                     <ul>
//                       {comparisonData.insights.map((insight, i) => (
//                         <li key={i}>{insight}</li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}
//               </div>
//             )}
//           </div>
//         )}
//       </div>

//       {/* Video Call Modal */}
//       {showVideoModal && (
//         <div className="video-modal">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h3>Schedule Video Call</h3>
//               <button onClick={() => setShowVideoModal(false)}>×</button>
//             </div>
//             <div className="video-placeholder">
//               <Video size={48} />
//               <p>Zoom integration would appear here</p>
//             </div>
//             <div className="modal-actions">
//               <button 
//                 className="btn btn-primary"
//                 onClick={() => {
//                   setShowVideoModal(false);
//                   showNotification('Zoom meeting scheduled successfully');
//                 }}
//               >
//                 Confirm Schedule
//               </button>
//               <button 
//                 className="btn btn-outline"
//                 onClick={() => setShowVideoModal(false)}
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Collaboration;
import React, { useState, useEffect } from 'react';
import {
  Users, MessageSquare, GitMerge, Plus, Check, X,
  ChevronDown, ChevronUp, Video, Download, Filter,
  BarChart2, Mail, AlertCircle, RefreshCw, Slack, ZoomIn,
  FileText, Clipboard, Settings, Share2, Bell, Search,
  MoreVertical, Smile, Paperclip, Mic, Calendar, UserPlus
} from 'lucide-react';
import "../Collaboration.css";

const Collaboration = () => {
  // State for the active tab
  const [activeTab, setActiveTab] = useState('campaigns');
  
  // Campaigns states
  const [campaigns, setCampaigns] = useState([
    {
      id: 1,
      name: 'Summer Fashion Collab',
      status: 'active',
      brands: ['Nike', 'Adidas'],
      influencers: ['Alex Johnson', 'Taylor Smith'],
      sheetUrl: '#',
      budget: 50000,
      goals: 'Increase brand awareness by 20%',
      audience: 'Age 18-35, fashion-conscious',
      conflicts: [],
      startDate: '2023-06-01',
      endDate: '2023-08-31'
    },
    {
      id: 2,
      name: 'Tech Bundle Promo',
      status: 'draft',
      brands: ['Samsung'],
      influencers: ['Jamie Lee'],
      sheetUrl: '#',
      budget: 35000,
      goals: 'Promote new tech bundle',
      audience: 'Tech enthusiasts 25-45',
      conflicts: [],
      startDate: '2023-07-15',
      endDate: '2023-09-30'
    }
  ]);
  
  // Form states for adding/editing campaigns
  const [showCampaignForm, setShowCampaignForm] = useState(false);
  const [currentCampaign, setCurrentCampaign] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    brands: [],
    influencers: [],
    budget: '',
    goals: '',
    audience: '',
    startDate: '',
    endDate: ''
  });
  
  // Communication states
  const [conversations, setConversations] = useState([
    {
      id: '1',
      name: 'Summer Fashion Group',
      participants: ['Nike', 'Adidas', 'Alex Johnson', 'Taylor Smith'],
      isGroup: true,
      lastMessage: 'Alex: Here are the latest creatives',
      timestamp: new Date(Date.now() - 3600000),
      unread: 3
    },
    {
      id: '2',
      name: 'Alex Johnson',
      participants: ['Alex Johnson'],
      isGroup: false,
      lastMessage: 'When can we schedule the shoot?',
      timestamp: new Date(Date.now() - 1800000),
      unread: 1
    },
    {
      id: '3',
      name: 'Tech Bundle Group',
      participants: ['Samsung', 'Jamie Lee'],
      isGroup: true,
      lastMessage: 'Jamie: The video is ready for review',
      timestamp: new Date(Date.now() - 86400000),
      unread: 0
    }
  ]);
  
  const [activeConversation, setActiveConversation] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Comparison states
  const [comparisonData, setComparisonData] = useState({
    selectedCampaigns: [],
    campaigns: [],
    filters: {
      timeframe: 'last30days',
      region: 'global',
      metric: 'ctr'
    },
    reportStatus: 'idle'
  });
  
  // UI states
  const [notification, setNotification] = useState(null);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [showAddParticipants, setShowAddParticipants] = useState(false);
  const [availableParticipants, setAvailableParticipants] = useState([
    { id: '1', name: 'Nike', type: 'brand' },
    { id: '2', name: 'Adidas', type: 'brand' },
    { id: '3', name: 'Samsung', type: 'brand' },
    { id: '4', name: 'Alex Johnson', type: 'influencer' },
    { id: '5', name: 'Taylor Smith', type: 'influencer' },
    { id: '6', name: 'Jamie Lee', type: 'influencer' }
  ]);


  // Mock data initialization
  useEffect(() => {
    // Load mock comparison data
    setComparisonData(prev => ({
      ...prev,
      campaigns: [
        {
          id: 1,
          name: 'Summer Fashion Collab',
          metrics: {
            ctr: '5.4%',
            roi: '22%',
            conversions: 342,
            spend: 25000,
            impressions: 125000,
            engagement: '8.2%'
          }
        },
        {
          id: 2,
          name: 'Tech Bundle Promo',
          metrics: {
            ctr: '4.8%',
            roi: '18%',
            conversions: 289,
            spend: 22000,
            impressions: 98000,
            engagement: '7.5%'
          }
        },
        {
          id: 3,
          name: 'Holiday Special',
          metrics: {
            ctr: '6.1%',
            roi: '25%',
            conversions: 412,
            spend: 32000,
            impressions: 145000,
            engagement: '9.3%'
          }
        }
      ]
    }));
  }, []);

  // Campaign handlers
  const openCampaignForm = (campaign = null) => {
    if (campaign) {
      setCurrentCampaign(campaign);
      setFormData({
        name: campaign.name,
        brands: [...campaign.brands],
        influencers: [...campaign.influencers],
        budget: campaign.budget,
        goals: campaign.goals,
        audience: campaign.audience,
        startDate: campaign.startDate,
        endDate: campaign.endDate
      });
    } else {
      setCurrentCampaign(null);
      setFormData({
        name: '',
        brands: [],
        influencers: [],
        budget: '',
        goals: '',
        audience: '',
        startDate: '',
        endDate: ''
      });
    }
    setShowCampaignForm(true);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const addBrand = (brand) => {
    if (!formData.brands.includes(brand)) {
      setFormData(prev => ({ ...prev, brands: [...prev.brands, brand] }));
    }
  };

  const removeBrand = (brand) => {
    setFormData(prev => ({ ...prev, brands: prev.brands.filter(b => b !== brand) }));
  };

  const addInfluencer = (influencer) => {
    if (!formData.influencers.includes(influencer)) {
      setFormData(prev => ({ ...prev, influencers: [...prev.influencers, influencer] }));
    }
  };

  const removeInfluencer = (influencer) => {
    setFormData(prev => ({ ...prev, influencers: prev.influencers.filter(i => i !== influencer) }));
  };

  const saveCampaign = () => {
    if (currentCampaign) {
      // Update existing campaign
      setCampaigns(prev => prev.map(camp => 
        camp.id === currentCampaign.id ? { ...camp, ...formData } : camp
      ));
      showNotification('Campaign updated successfully');
    } else {
      // Add new campaign
      const newCampaign = {
        id: Math.max(...campaigns.map(c => c.id)) + 1,
        status: 'draft',
        conflicts: [],
        ...formData
      };
      setCampaigns(prev => [...prev, newCampaign]);
      
      // Create a group conversation for the new campaign
      const newConversation = {
        id: `${newCampaign.id}-group`,
        name: `${newCampaign.name} Group`,
        participants: [...newCampaign.brands, ...newCampaign.influencers],
        isGroup: true,
        lastMessage: 'Group created',
        timestamp: new Date(),
        unread: 0
      };
      setConversations(prev => [newConversation, ...prev]);
      
      showNotification('Campaign created successfully');
    }
    setShowCampaignForm(false);
  };

  const deleteCampaign = (id) => {
    setCampaigns(prev => prev.filter(camp => camp.id !== id));
    showNotification('Campaign deleted');
  };

  // Communication handlers
  const startConversation = (conversation) => {
    setActiveConversation(conversation);
    
    // Load mock messages for the conversation
    const mockMessages = conversation.isGroup 
      ? [
          {
            id: 1,
            sender: 'nike',
            text: 'Here is the creative brief for the summer campaign',
            timestamp: new Date(Date.now() - 3600000),
            attachments: ['brief.pdf'],
            status: 'delivered'
          },
          {
            id: 2,
            sender: 'alex_johnson',
            text: 'Thanks! I have some questions about the target audience',
            timestamp: new Date(Date.now() - 1800000),
            status: 'delivered'
          },
          {
            id: 3,
            sender: 'taylor_smith',
            text: 'When are we scheduling the photoshoot?',
            timestamp: new Date(Date.now() - 900000),
            status: 'delivered'
          }
        ]
      : [
          {
            id: 1,
            sender: conversation.name.toLowerCase().replace(' ', '_'),
            text: 'Hi there! About the campaign...',
            timestamp: new Date(Date.now() - 3600000),
            status: 'delivered'
          },
          {
            id: 2,
            sender: 'current_user',
            text: 'Yes, what would you like to know?',
            timestamp: new Date(Date.now() - 1800000),
            status: 'delivered'
          }
        ];
    
    setMessages(mockMessages);
    
    // Mark as read
    setConversations(prev => prev.map(conv => 
      conv.id === conversation.id ? { ...conv, unread: 0 } : conv
    ));
  };

  const sendMessage = () => {
    if (!newMessage.trim()) return;
    
    const message = {
      id: messages.length + 1,
      sender: 'current_user',
      text: newMessage,
      timestamp: new Date(),
      status: 'sending'
    };
    
    setMessages(prev => [...prev, message]);
    setNewMessage('');
    
    // Update last message in conversation list
    setConversations(prev => prev.map(conv => 
      conv.id === activeConversation.id 
        ? { 
            ...conv, 
            lastMessage: `You: ${newMessage}`,
            timestamp: new Date()
          } 
        : conv
    ));
    
    // Simulate delivery and response
    setTimeout(() => {
      setMessages(prev => prev.map(msg => 
        msg.id === message.id ? { ...msg, status: 'delivered' } : msg
      ));
      
      if (Math.random() > 0.3) { // 70% chance of reply
        const reply = {
          id: messages.length + 2,
          sender: activeConversation.isGroup 
            ? activeConversation.participants
                .filter(p => p !== 'current_user')
                [Math.floor(Math.random() * (activeConversation.participants.length - 1))]
                .toLowerCase().replace(' ', '_')
            : activeConversation.name.toLowerCase().replace(' ', '_'),
          text: getRandomResponse(),
          timestamp: new Date(),
          status: 'delivered'
        };
        
        setMessages(prev => [...prev, reply]);
        
        // Update conversation list with reply
        setConversations(prev => prev.map(conv => 
          conv.id === activeConversation.id 
            ? { 
                ...conv, 
                lastMessage: `${reply.sender.replace('_', ' ')}: ${reply.text}`,
                timestamp: new Date()
              } 
            : conv
        ));
      }
    }, 1000 + Math.random() * 2000);
  };

  const getRandomResponse = () => {
    const responses = [
      "Sounds good!",
      "I'll check and get back to you.",
      "When do you need this by?",
      "Can we discuss this in our next call?",
      "I've shared the files with the team.",
      "Let me review and confirm.",
      "Thanks for the update!",
      "We should align on this with the other brands."
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const scheduleVideoCall = () => {
    setShowVideoModal(true);
    showNotification('Zoom meeting scheduled and invite sent');
  };

  const addParticipants = (participantNames) => {
  if (!activeConversation) return;
  
  // Get the full participant objects from availableParticipants
//   const participantsToAdd = availableParticipants.filter(p => 
//     participantNames.includes(p.name)
//   );
  
  // Update the conversation
  const updatedConversation = {
    ...activeConversation,
    participants: [...new Set([
      ...activeConversation.participants, 
      ...participantNames
    ])]
  };
  
  setActiveConversation(updatedConversation);
  setConversations(prev => prev.map(conv => 
    conv.id === activeConversation.id ? updatedConversation : conv
  ));
  
  // Remove added participants from availableParticipants
  setAvailableParticipants(prev => prev.filter(p => 
    !participantNames.includes(p.name)
  ));
  
  showNotification(`${participantNames.length} participants added`);
  setShowAddParticipants(false);
};

  // Comparison handlers
  const toggleCampaignSelection = (campaignId) => {
    setComparisonData(prev => {
      const isSelected = prev.selectedCampaigns.includes(campaignId);
      const selectedCampaigns = isSelected
        ? prev.selectedCampaigns.filter(id => id !== campaignId)
        : prev.selectedCampaigns.length < 2
          ? [...prev.selectedCampaigns, campaignId]
          : [prev.selectedCampaigns[1], campaignId];
      
      return { ...prev, selectedCampaigns };
    });
  };

  const generateReport = () => {
    if (comparisonData.selectedCampaigns.length !== 2) {
      showNotification('Please select exactly 2 campaigns to compare');
      return;
    }
    
    setComparisonData(prev => ({ ...prev, reportStatus: 'generating' }));
    
    // Simulate report generation
    setTimeout(() => {
      const [camp1, camp2] = comparisonData.selectedCampaigns.map(id => 
        comparisonData.campaigns.find(c => c.id === id)
      );
      
      setComparisonData(prev => ({ 
        ...prev, 
        reportStatus: 'ready',
        insights: [
          `${camp1.name} has ${parseFloat(camp1.metrics.ctr) > parseFloat(camp2.metrics.ctr) ? 'higher' : 'lower'} CTR (${camp1.metrics.ctr} vs ${camp2.metrics.ctr})`,
          `${camp1.name} ${parseFloat(camp1.metrics.roi) > parseFloat(camp2.metrics.roi) ? 'outperforms' : 'underperforms'} ${camp2.name} in ROI by ${Math.abs(parseFloat(camp1.metrics.roi) - parseFloat(camp2.metrics.roi)).toFixed(1)}%`,
          `${camp1.metrics.conversions > camp2.metrics.conversions ? camp1.name : camp2.name} has more conversions (${Math.abs(camp1.metrics.conversions - camp2.metrics.conversions)})`,
          `Spend difference: $${Math.abs(camp1.metrics.spend - camp2.metrics.spend).toLocaleString()}`
        ]
      }));
      showNotification('Comparative report generated');
    }, 2000);
  };

  const exportReport = (format) => {
    showNotification(`Report exported as ${format.toUpperCase()}`);
  };

  // UI helpers
  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 3000);
  };

  const filteredConversations = conversations.filter(conv =>
    conv.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="smartsheet-collab-container">
      {/* Notification system */}
      {notification && (
        <div className="notification">
          <Bell size={16} />
          <span>{notification}</span>
          <button onClick={() => setNotification(null)}>×</button>
        </div>
      )}

      {/* Main tabs */}
      <div className="tabs">
        <button
          className={`tab ${activeTab === 'campaigns' ? 'active' : ''}`}
          onClick={() => setActiveTab('campaigns')}
        >
          <Users size={16} /> Campaigns
        </button>
        <button
          className={`tab ${activeTab === 'communicate' ? 'active' : ''}`}
          onClick={() => setActiveTab('communicate')}
        >
          <MessageSquare size={16} /> Messages
        </button>
        <button
          className={`tab ${activeTab === 'compare' ? 'active' : ''}`}
          onClick={() => setActiveTab('compare')}
        >
          <GitMerge size={16} /> Compare
        </button>
      </div>

      {/* Tab content */}
      <div className="tab-content">
        {activeTab === 'campaigns' && (
          <div className="campaigns-panel">
            <div className="campaigns-header">
              <h2>Collaboration Campaigns</h2>
              <button 
                className="btn btn-primary"
                onClick={() => openCampaignForm()}
              >
                <Plus size={16} /> New Campaign
              </button>
            </div>
            
            <div className="campaigns-list">
              {campaigns.map(campaign => (
                <div key={campaign.id} className={`campaign-card ${campaign.status}`}>
                  <div className="campaign-header">
                    <h3>{campaign.name}</h3>
                    <div className="campaign-status">
                      <span className={`status-badge ${campaign.status}`}>
                        {campaign.status}
                      </span>
                      <div className="campaign-actions">
                        <button 
                          className="btn-icon"
                          onClick={() => openCampaignForm(campaign)}
                        >
                          <Settings size={16} />
                        </button>
                        <button 
                          className="btn-icon"
                          onClick={() => deleteCampaign(campaign.id)}
                        >
                          <X size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="campaign-details">
                    <div className="detail-row">
                      <div className="detail">
                        <label>Brands:</label>
                        <div className="tags">
                          {campaign.brands.map((brand, i) => (
                            <span key={i} className="tag brand">{brand}</span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="detail">
                        <label>Influencers:</label>
                        <div className="tags">
                          {campaign.influencers.map((influencer, i) => (
                            <span key={i} className="tag influencer">{influencer}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="detail-row">
                      <div className="detail">
                        <label>Budget:</label>
                        <span>${campaign.budget.toLocaleString()}</span>
                      </div>
                      
                      <div className="detail">
                        <label>Duration:</label>
                        <span>{campaign.startDate} to {campaign.endDate}</span>
                      </div>
                    </div>
                    
                    <div className="detail">
                      <label>Goals:</label>
                      <p>{campaign.goals}</p>
                    </div>
                    
                    <div className="detail">
                      <label>Target Audience:</label>
                      <p>{campaign.audience}</p>
                    </div>
                  </div>
                  
                  <div className="campaign-actions">
                    <button 
                      className="btn btn-primary"
                      onClick={() => {
                        setActiveTab('communicate');
                        const conv = conversations.find(c => c.name.includes(campaign.name));
                        if (conv) startConversation(conv);
                      }}
                    >
                      <MessageSquare size={14} /> Open Chat
                    </button>
                    <a href={campaign.sheetUrl} className="btn btn-secondary">
                      <FileText size={14} /> View Sheet
                    </a>
                    <button className="btn btn-outline">
                      <Share2 size={14} /> Share
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'communicate' && (
          <div className="communication-panel">
            <div className="chat-container">
              {/* Conversation sidebar */}
              <div className={`conversation-sidebar ${activeConversation ? 'hidden' : ''}`}>
                <div className="sidebar-header">
                  <h3>Messages</h3>
                  <div className="search-bar">
                    <Search size={16} />
                    <input 
                      type="text" 
                      placeholder="Search conversations..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="conversation-list">
                  {filteredConversations.map(conversation => (
                    <div 
                      key={conversation.id}
                      className={`conversation-item ${activeConversation?.id === conversation.id ? 'active' : ''}`}
                      onClick={() => startConversation(conversation)}
                    >
                      <div className="conversation-avatar">
                        {conversation.isGroup ? (
                          <div className="avatar-group">
                            {conversation.participants.slice(0, 2).map((p, i) => (
                              <div key={i} className="group-avatar">
                                {p.charAt(0)}
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="avatar-single">
                            {conversation.name.charAt(0)}
                          </div>
                        )}
                      </div>
                      
                      <div className="conversation-details">
                        <div className="conversation-name">
                          {conversation.name}
                          {conversation.isGroup && <span className="group-badge">Group</span>}
                        </div>
                        <div className="conversation-preview">
                          {conversation.lastMessage}
                        </div>
                      </div>
                      
                      <div className="conversation-meta">
                        <div className="conversation-time">
                          {conversation.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </div>
                        {conversation.unread > 0 && (
                          <div className="unread-count">
                            {conversation.unread}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Chat area */}
              {activeConversation ? (
                <div className="chat-area">
                  <div className="chat-header">
                    <button 
                      className="back-button"
                      onClick={() => setActiveConversation(null)}
                    >
                      ← Back
                    </button>
                    
                    <div className="chat-info">
                      <div className="chat-title">
                        {activeConversation.name}
                        {activeConversation.isGroup && (
                          <span className="participant-count">
                            {activeConversation.participants.length} participants
                          </span>
                        )}
                      </div>
                      {activeConversation.isGroup && (
                        <div className="chat-participants">
                          {activeConversation.participants.join(', ')}
                        </div>
                      )}
                    </div>
                    
                    <div className="chat-actions">
                      <button 
                        className="btn-icon"
                        onClick={scheduleVideoCall}
                      >
                        <Video size={18} />
                      </button>
                      {activeConversation.isGroup && (
                        <button 
                          className="btn-icon"
                          onClick={() => setShowAddParticipants(true)}
                        >
                          <UserPlus size={18} />
                        </button>
                      )}
                      <button className="btn-icon">
                        <MoreVertical size={18} />
                      </button>
                    </div>
                  </div>
                  
                  <div className="message-list">
                    {messages.map(message => (
                      <div key={message.id} className={`message ${message.sender === 'current_user' ? 'sent' : 'received'}`}>
                        {message.sender !== 'current_user' && (
                          <div className="message-sender">
                            {message.sender.replace('_', ' ')}
                          </div>
                        )}
                        <div className="message-content">
                          <p>{message.text}</p>
                          {message.attachments && (
                            <div className="attachments">
                              {message.attachments.map((file, i) => (
                                <div key={i} className="attachment">
                                  <Clipboard size={14} />
                                  <span>{file}</span>
                                </div>
                              ))}
                            </div>
                          )}
                          <div className="message-meta">
                            <span className="time">
                              {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </span>
                            {message.status === 'sending' && (
                              <span className="status">
                                <RefreshCw className="spinner" size={12} />
                              </span>
                            )}
                            {message.status === 'delivered' && message.sender === 'current_user' && (
                              <span className="status">✓</span>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="message-input-area">
                    <button className="btn-icon">
                      <Smile size={20} />
                    </button>
                    <button className="btn-icon">
                      <Paperclip size={20} />
                    </button>
                    <input
                      type="text"
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      placeholder="Type a message..."
                      onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                    />
                    <button className="btn-icon">
                      <Mic size={20} />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="empty-chat">
                  <MessageSquare size={48} />
                  <h3>Select a conversation</h3>
                  <p>Choose an existing chat or start a new one</p>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'compare' && (
          <div className="comparison-panel">
            <div className="comparison-header">
              <h2>Compare Campaign Performance</h2>
              <p>Select two campaigns to analyze their performance metrics side by side</p>
            </div>
            
            <div className="campaign-selection">
              <h3>Select Campaigns to Compare</h3>
              <div className="campaign-grid">
                {comparisonData.campaigns.map(campaign => (
                  <div 
                    key={campaign.id}
                    className={`campaign-selector ${comparisonData.selectedCampaigns.includes(campaign.id) ? 'selected' : ''}`}
                    onClick={() => toggleCampaignSelection(campaign.id)}
                  >
                    <div className="selector-checkbox">
                      {comparisonData.selectedCampaigns.includes(campaign.id) && (
                        <Check size={16} />
                      )}
                    </div>
                    <div className="selector-details">
                      <h4>{campaign.name}</h4>
                      <div className="metrics-preview">
                        <div>CTR: {campaign.metrics.ctr}</div>
                        <div>ROI: {campaign.metrics.roi}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {comparisonData.selectedCampaigns.length === 2 && (
              <>
                <div className="comparison-controls">
                  <div className="filters">
                    <div className="filter-group">
                      <label>Time Frame:</label>
                      <select
                        value={comparisonData.filters.timeframe}
                        onChange={(e) => setComparisonData(prev => ({
                          ...prev,
                          filters: { ...prev.filters, timeframe: e.target.value }
                        }))}
                      >
                        <option value="last7days">Last 7 Days</option>
                        <option value="last30days">Last 30 Days</option>
                        <option value="lastquarter">Last Quarter</option>
                      </select>
                    </div>
                    
                    <div className="filter-group">
                      <label>Primary Metric:</label>
                      <select
                        value={comparisonData.filters.metric}
                        onChange={(e) => setComparisonData(prev => ({
                          ...prev,
                          filters: { ...prev.filters, metric: e.target.value }
                        }))}
                      >
                        <option value="ctr">CTR</option>
                        <option value="roi">ROI</option>
                        <option value="conversions">Conversions</option>
                        <option value="spend">Spend</option>
                        <option value="impressions">Impressions</option>
                        <option value="engagement">Engagement Rate</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="actions">
                    <button 
                      className="btn btn-primary"
                      onClick={generateReport}
                      disabled={comparisonData.reportStatus === 'generating'}
                    >
                      {comparisonData.reportStatus === 'generating' ? (
                        <>
                          <RefreshCw className="spinner" size={14} /> Generating...
                        </>
                      ) : (
                        <>
                          <BarChart2 size={14} /> Generate Report
                        </>
                      )}
                    </button>
                    
                    {comparisonData.reportStatus === 'ready' && (
                      <>
                        <button 
                          className="btn btn-outline"
                          onClick={() => exportReport('pdf')}
                        >
                          <Download size={14} /> PDF
                        </button>
                        <button 
                          className="btn btn-outline"
                          onClick={() => exportReport('csv')}
                        >
                          <Download size={14} /> CSV
                        </button>
                      </>
                    )}
                  </div>
                </div>
                
                <div className="comparison-results">
                  {comparisonData.reportStatus === 'ready' && (
                    <>
                      <div className="metrics-comparison">
                        <h3>Performance Comparison</h3>
                        <div className="metrics-grid">
                          {['ctr', 'roi', 'conversions', 'spend', 'impressions', 'engagement'].map(metric => {
                            const [camp1, camp2] = comparisonData.selectedCampaigns.map(id => 
                              comparisonData.campaigns.find(c => c.id === id)
                            );
                            const camp1Value = parseFloat(camp1.metrics[metric]);
                            const camp2Value = parseFloat(camp2.metrics[metric]);
                            const isPositive = camp1Value > camp2Value;
                            const difference = Math.abs(camp1Value - camp2Value);
                            
                            return (
                              <div key={metric} className="metric-card">
                                <div className="metric-header">
                                  <h4>
                                    {metric.charAt(0).toUpperCase() + metric.slice(1)}
                                    {metric === 'ctr' && ' (Click-Through Rate)'}
                                    {metric === 'roi' && ' (Return on Investment)'}
                                  </h4>
                                </div>
                                <div className="metric-values">
                                  <div className="campaign-value">
                                    <div className="campaign-name">{camp1.name}</div>
                                    <div className="value">{camp1.metrics[metric]}</div>
                                  </div>
                                  <div className="vs">vs</div>
                                  <div className="campaign-value">
                                    <div className="campaign-name">{camp2.name}</div>
                                    <div className="value">{camp2.metrics[metric]}</div>
                                  </div>
                                </div>
                                <div className={`metric-difference ${isPositive ? 'positive' : 'negative'}`}>
                                  {isPositive ? (
                                    <ChevronUp size={16} />
                                  ) : (
                                    <ChevronDown size={16} />
                                  )}
                                  {difference.toFixed(metric === 'ctr' || metric === 'roi' || metric === 'engagement' ? 1 : 0)}
                                  {metric === 'ctr' || metric === 'roi' || metric === 'engagement' ? '%' : ''}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      
                      <div className="visualization">
                        <h3>Performance Visualization</h3>
                        <div className="chart-placeholder">
                          <BarChart2 size={48} />
                          <p>Interactive charts showing comparison of selected metrics</p>
                        </div>
                      </div>
                      
                      <div className="insights">
                        <h3>Key Insights</h3>
                        <ul>
                          {comparisonData.insights.map((insight, i) => (
                            <li key={i}>{insight}</li>
                          ))}
                        </ul>
                      </div>
                    </>
                  )}
                </div>
              </>
            )}
          </div>
        )}
      </div>

      {/* Campaign Form Modal */}
      {showCampaignForm && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <h3>{currentCampaign ? 'Edit Campaign' : 'Create New Campaign'}</h3>
              <button onClick={() => setShowCampaignForm(false)}>×</button>
            </div>
            
            <div className="modal-body">
              <div className="form-group">
                <label>Campaign Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  placeholder="Summer Fashion Collab"
                />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label>Start Date</label>
                  <input
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleFormChange}
                  />
                </div>
                
                <div className="form-group">
                  <label>End Date</label>
                  <input
                    type="date"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleFormChange}
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label>Budget ($)</label>
                <input
                  type="number"
                  name="budget"
                  value={formData.budget}
                  onChange={handleFormChange}
                  placeholder="50000"
                />
              </div>
              
              <div className="form-group">
                <label>Brands</label>
                <div className="tags-input">
                  <div className="tags">
                    {formData.brands.map((brand, i) => (
                      <span key={i} className="tag">
                        {brand}
                        <button onClick={() => removeBrand(brand)}>×</button>
                      </span>
                    ))}
                  </div>
                  <select
                    onChange={(e) => {
                      if (e.target.value) {
                        addBrand(e.target.value);
                        e.target.value = '';
                      }
                    }}
                  >
                    <option value="">Select a brand...</option>
                    <option value="Nike">Nike</option>
                    <option value="Adidas">Adidas</option>
                    <option value="Samsung">Samsung</option>
                    <option value="Apple">Apple</option>
                    <option value="Amazon">Amazon</option>
                  </select>
                </div>
              </div>
              
              <div className="form-group">
                <label>Influencers</label>
                <div className="tags-input">
                  <div className="tags">
                    {formData.influencers.map((influencer, i) => (
                      <span key={i} className="tag">
                        {influencer}
                        <button onClick={() => removeInfluencer(influencer)}>×</button>
                      </span>
                    ))}
                  </div>
                  <select
                    onChange={(e) => {
                      if (e.target.value) {
                        addInfluencer(e.target.value);
                        e.target.value = '';
                      }
                    }}
                  >
                    <option value="">Select an influencer...</option>
                    <option value="Alex Johnson">Alex Johnson</option>
                    <option value="Taylor Smith">Taylor Smith</option>
                    <option value="Jamie Lee">Jamie Lee</option>
                    <option value="Morgan Chase">Morgan Chase</option>
                    <option value="Casey Neistat">Casey Neistat</option>
                  </select>
                </div>
              </div>
              
              <div className="form-group">
                <label>Goals</label>
                <textarea
                  name="goals"
                  value={formData.goals}
                  onChange={handleFormChange}
                  placeholder="Increase brand awareness by 20%..."
                />
              </div>
              
              <div className="form-group">
                <label>Target Audience</label>
                <textarea
                  name="audience"
                  value={formData.audience}
                  onChange={handleFormChange}
                  placeholder="Age 18-35, fashion-conscious..."
                />
              </div>
            </div>
            
            <div className="modal-actions">
              <button 
                className="btn btn-primary"
                onClick={saveCampaign}
              >
                {currentCampaign ? 'Update Campaign' : 'Create Campaign'}
              </button>
              <button 
                className="btn btn-outline"
                onClick={() => setShowCampaignForm(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Video Call Modal */}
      {showVideoModal && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <h3>Schedule Video Call</h3>
              <button onClick={() => setShowVideoModal(false)}>×</button>
            </div>
            
            <div className="modal-body">
              <div className="video-options">
                <div className="video-platform">
                  <Video size={24} />
                  <span>Zoom Meeting</span>
                </div>
                
                <div className="form-group">
                  <label>Meeting Title</label>
                  <input
                    type="text"
                    defaultValue={activeConversation ? `Discussion about ${activeConversation.name}` : 'Campaign Discussion'}
                  />
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label>Date</label>
                    <input type="date" />
                  </div>
                  
                  <div className="form-group">
                    <label>Time</label>
                    <input type="time" />
                  </div>
                </div>
                
                <div className="form-group">
                  <label>Duration</label>
                  <select defaultValue="30">
                    <option value="15">15 minutes</option>
                    <option value="30">30 minutes</option>
                    <option value="45">45 minutes</option>
                    <option value="60">60 minutes</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label>Participants</label>
                  <div className="participants-list">
                    {activeConversation ? (
                      activeConversation.participants.map((p, i) => (
                        <div key={i} className="participant-tag">
                          {p}
                        </div>
                      ))
                    ) : (
                      <div className="no-participants">
                        Select a conversation first
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="modal-actions">
              <button 
                className="btn btn-primary"
                onClick={() => {
                  setShowVideoModal(false);
                  showNotification('Zoom meeting scheduled successfully');
                }}
              >
                <Calendar size={16} /> Schedule Meeting
              </button>
              <button 
                className="btn btn-outline"
                onClick={() => setShowVideoModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Participants Modal */}
      {/* {showAddParticipants && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <h3>Add Participants</h3>
              <button onClick={() => setShowAddParticipants(false)}>×</button>
            </div>
            
            <div className="modal-body">
              <div className="search-bar">
                <Search size={16} />
                <input 
                  type="text" 
                  placeholder="Search participants..."
                />
              </div>
              
              <div className="participants-list">
                {availableParticipants
                  .filter(p => !activeConversation.participants.includes(p.name))
                  .map(participant => (
                    <div key={participant.id} className="participant-item">
                      <div className="participant-info">
                        <div className="participant-avatar">
                          {participant.name.charAt(0)}
                        </div>
                        <div className="participant-name">
                          {participant.name}
                          <span className="participant-type">
                            {participant.type}
                          </span>
                        </div>
                      </div>
                      <button 
                        className="btn btn-outline"
                        onClick={() => addParticipants([participant.name])}
                      >
                        Add
                      </button>
                    </div>
                  ))}
              </div>
            </div>
            
            <div className="modal-actions">
              <button 
                className="btn btn-primary"
                onClick={() => {
                  // Add multiple participants at once
                  const newParticipants = availableParticipants
                    .filter(p => !activeConversation.participants.includes(p.name))
                    .map(p => p.name);
                  addParticipants(newParticipants);
                }}
              >
                Add All
              </button>
              <button 
                className="btn btn-outline"
                onClick={() => setShowAddParticipants(false)}
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )} */}
      {showAddParticipants && (
  <div className="modal">
    <div className="modal-content">
      <div className="modal-header">
        <h3>Add Participants</h3>
        <button onClick={() => setShowAddParticipants(false)}>×</button>
      </div>
      
      <div className="modal-body">
        <div className="search-bar">
          <Search size={16} />
          <input 
            type="text" 
            placeholder="Search participants..."
            onChange={(e) => {
              const searchValue = e.target.value.toLowerCase();
              setAvailableParticipants(prev => 
                prev.filter(p => p.name.toLowerCase().includes(searchValue))
              );
            }}
          />
        </div>
        
        <div className="participants-list">
          {availableParticipants
            .filter(p => !activeConversation.participants.includes(p.name))
            .map(participant => (
              <div key={participant.id} className="participant-item">
                <div className="participant-info">
                  <div className="participant-avatar">
                    {participant.name.charAt(0)}
                  </div>
                  <div className="participant-name">
                    {participant.name}
                    <span className="participant-type">
                      {participant.type}
                    </span>
                  </div>
                </div>
                <button 
                  className="btn btn-outline"
                  onClick={() => addParticipants([participant.name])}
                >
                  Add
                </button>
              </div>
            ))}
        </div>
      </div>
      
      <div className="modal-actions">
        <button 
          className="btn btn-primary"
          onClick={() => {
            const newParticipants = availableParticipants
              .filter(p => !activeConversation.participants.includes(p.name))
              .map(p => p.name);
            addParticipants(newParticipants);
          }}
        >
          Add All
        </button>
        <button 
          className="btn btn-outline"
          onClick={() => setShowAddParticipants(false)}
        >
          Done
        </button>
      </div>
    </div>
  </div>
)}
    </div>
  );
};

export default Collaboration;