// // import React, { useState, useEffect } from 'react';
// // import {
// //   Users, MessageSquare, GitMerge, Plus, Check, X, ChevronLeft, ChevronRight,
// //   Heart, MoreHorizontal, Bookmark, Share2, Settings, Grid, List, Search,
// //   Bell, FileText, Video, UserPlus, Edit, Trash2, Eye, ArrowLeft, Filter,
// //   Smile, Paperclip, Mic, Calendar, Award, Mail, AlertCircle, Slack, Clipboard
// // } from 'lucide-react';
// // import "../Influencer.css";
// // import SocialMedia from '../components/SocialMedia';

// // const Influencer = () => {
// //   // Main app state
// //   const [activeTab, setActiveTab] = useState('social');
// //   const [currentUser, setCurrentUser] = useState({
// //     username: 'current_user',
// //     fullName: 'Current User',
// //     avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
// //     bio: 'Digital creator | Photography enthusiast',
// //     posts: 42,
// //     followers: 1250,
// //     following: 843,
// //     isFollowing: false
// //   });

// //   // Posts data
// //   const [posts, setPosts] = useState([
// //     {
// //       id: 1,
// //       username: 'fashion_brand',
// //       avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
// //       image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
// //       caption: 'Check out our new summer collection! #fashion #summer',
// //       likes: 1243,
// //       comments: [
// //         { id: 1, username: 'user1', text: 'Love this collection!', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80' },
// //         { id: 2, username: 'user2', text: 'Where can I buy these?', avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80' }
// //       ],
// //       time: '2 HOURS AGO',
// //       sponsored: false,
// //       impressions: 12500,
// //       engagementRate: 4.2,
// //       isLiked: false,
// //       showComments: false,
// //       isSaved: false
// //     }
// //   ]);
// //   const [userPosts, setUserPosts] = useState(posts.filter(p => p.username === currentUser.username));
// //   const [stories, setStories] = useState([
// //     {
// //       id: 1,
// //       username: 'user1',
// //       avatar: 'https://example.com/avatar.jpg',
// //       image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e',
// //       time: '1h ago',
// //       comments: []
// //     }
// //   ]);

// //   // Brand ads data
// //   const [brandAds, setBrandAds] = useState([
// //     {
// //       id: 1,
// //       brandName: 'TechTrend',
// //       brandLogo: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
// //       adImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
// //       caption: 'Discover our latest gadget! #tech',
// //       views: 15000,
// //       clicks: 750,
// //       ctr: 5.0,
// //       postedDate: '2025-05-15',
// //       targetAudience: ['tech', 'young_adults'],
// //       status: 'active',
// //       isLiked: false,
// //       comments: [
// //         { id: 1, username: 'user1', text: 'Looks amazing!', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80' }
// //       ],
// //       gamification: {
// //         hasReward: true,
// //         totalPoints: 50,
// //         tasks: [
// //           { action: 'like', points: 10, completed: false },
// //           { action: 'comment', points: 20, completed: false },
// //           { action: 'share', points: 20, currentShares: 0, target: 1, completed: false }
// //         ]
// //       }
// //     }
// //   ]);

// //   // Messages data
// //   const [messages, setMessages] = useState([
// //     {
// //       id: 1,
// //       username: 'user1',
// //       avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
// //       lastMessage: 'Hey, how are you doing?',
// //       time: '2h ago',
// //       unread: true,
// //       messages: [
// //         { id: 1, sender: 'user1', text: 'Hey there!', time: '10:30 AM' },
// //         { id: 2, sender: 'current_user', text: 'Hi! How are you?', time: '10:32 AM' },
// //         { id: 3, sender: 'user1', text: 'Hey, how are you doing?', time: '2:15 PM' }
// //       ]
// //     },
// //     {
// //       id: 2,
// //       username: 'brand_manager',
// //       avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
// //       lastMessage: 'Can we discuss the campaign details?',
// //       time: '1h ago',
// //       unread: false,
// //       messages: [
// //         { id: 1, sender: 'brand_manager', text: 'Hi! Excited about the collab?', time: '9:00 AM' },
// //         { id: 2, sender: 'current_user', text: 'Absolutely, lets discuss the cost.', time: '9:05 AM' },
// //       ]
// //     }
// //   ]);

// //   // Campaign data
// //   const [campaigns, setCampaigns] = useState([
// //     {
// //       id: 1,
// //       name: 'Summer Fashion Collab',
// //       status: 'active',
// //       brands: ['Nike', 'Adidas'],
// //       influencers: ['Alex Johnson', 'Taylor Smith'],
// //       budget: 50000,
// //       goals: 'Increase brand awareness by 20%',
// //       audience: 'Age 18-35, fashion-conscious',
// //       startDate: '2023-06-01',
// //       endDate: '2023-08-31',
// //       objective: 'Brand Awareness',
// //       impressions: 125000,
// //       clicks: 6800,
// //       ctr: '5.4%',
// //       conversions: 342
// //     },
// //     {
// //       id: 2,
// //       name: 'Tech Bundle Promo',
// //       status: 'pending',
// //       brands: ['Samsung'],
// //       influencers: ['Tech Guru'],
// //       budget: 35000,
// //       goals: 'Promote new tech bundle',
// //       audience: 'Tech enthusiasts 25-45',
// //       startDate: '2023-07-01',
// //       endDate: '2023-09-30',
// //       objective: 'Product Sales',
// //       impressions: 0,
// //       clicks: 0,
// //       ctr: '0%',
// //       conversions: 0
// //     },
// //     {
// //       id: 3,
// //       name: 'Winter Sports Campaign',
// //       status: 'completed',
// //       brands: ['Burton', 'Rossignol'],
// //       influencers: ['Snow Pro'],
// //       budget: 60000,
// //       goals: 'Drive winter gear sales',
// //       audience: 'Sports enthusiasts 18-40',
// //       startDate: '2022-12-01',
// //       endDate: '2023-02-28',
// //       objective: 'Sales',
// //       impressions: 200000,
// //       clicks: 10000,
// //       ctr: '5.0%',
// //       conversions: 500
// //     }
// //   ]);

// //   // Brand requests data
// //   const [brandRequests, setBrandRequests] = useState([
// //     {
// //       id: 1,
// //       name: 'Summer Fashion Collab',
// //       status: 'pending',
// //       brands: ['Nike'],
// //       invitedBrands: ['Adidas'],
// //       sheetUrl: '#',
// //       budget: 50000,
// //       goals: 'Increase brand awareness by 20%',
// //       audience: 'Age 18-35, fashion-conscious',
// //       conflicts: []
// //     },
// //     {
// //       id: 2,
// //       name: 'Tech Bundle Promo',
// //       status: 'pending',
// //       brands: ['Samsung'],
// //       invitedBrands: [],
// //       sheetUrl: '#',
// //       budget: 35000,
// //       goals: 'Promote new tech bundle',
// //       audience: 'Tech enthusiasts 25-45',
// //       conflicts: []
// //     }
// //   ]);

// //   // Conversation data
// //   const [conversations, setConversations] = useState([
// //     {
// //       id: '1',
// //       name: 'Summer Fashion Group',
// //       participants: ['Nike', 'Adidas', 'Alex Johnson', 'Taylor Smith'],
// //       isGroup: true,
// //       lastMessage: 'Alex: Here are the latest creatives',
// //       timestamp: new Date(Date.now() - 3600000),
// //       unread: 3
// //     },
// //     {
// //       id: '2',
// //       name: 'Tech Bundle Discussion',
// //       participants: ['Samsung', 'Tech Guru'],
// //       isGroup: true,
// //       lastMessage: 'Samsung: Can we review the timeline?',
// //       timestamp: new Date(Date.now() - 7200000),
// //       unread: 1
// //     },
// //     {
// //       id: '3',
// //       name: 'user1',
// //       participants: ['user1'],
// //       isGroup: false,
// //       lastMessage: 'Hey, how are you doing?',
// //       timestamp: new Date(Date.now() - 7200000),
// //       unread: 2
// //     }
// //   ]);

// //   const [activeConversation, setActiveConversation] = useState(null);
// //   const [newMessage, setNewMessage] = useState('');
// //   const [notification, setNotification] = useState(null);
// //   const [showVideoModal, setShowVideoModal] = useState(false);
// //   const [showAddParticipants, setShowAddParticipants] = useState(false);
// //   const [availableParticipants] = useState([
// //     { id: '1', name: 'Nike', type: 'brand' },
// //     { id: '2', name: 'Adidas', type: 'brand' },
// //     { id: '3', name: 'Samsung', type: 'brand' },
// //     { id: '4', name: 'Alex Johnson', type: 'influencer' },
// //     { id: '5', name: 'Taylor Smith', type: 'influencer' },
// //     { id: '6', name: 'Tech Guru', type: 'influencer' }
// //   ]);
// //   const [searchQuery, setSearchQuery] = useState('');
// //   const [dateRange, setDateRange] = useState('last30days');
// //   const [selectedCampaign, setSelectedCampaign] = useState(null);
// //   const [timeRange, setTimeRange] = useState('7d');
// //   const [analyticsData] = useState({
// //     impressions: 25000,
// //     engagements: 1500,
// //     followers: 1250,
// //     clickRate: 3.5
// //   });
// //   const [gamificationData] = useState([
// //     {
// //       title: 'Engager',
// //       image: 'https://source.unsplash.com/random/100x100/?badge',
// //       progress: 80,
// //       target: 100,
// //       reward: '50 points'
// //     }
// //   ]);
// //   const [newComments, setNewComments] = useState({});
// //   const [adFilters, setAdFilters] = useState({
// //     searchQuery: '',
// //     audience: [],
// //     sortBy: 'recent',
// //     minCTR: 0,
// //     minViews: 0
// //   });

// //   // Handlers
// //   const startConversation = (conversation) => {
// //     setActiveConversation(conversation);
// //     // Find messages for the selected conversation
// //     const convMessages = messages.find(msg => msg.username === conversation.name.toLowerCase().replace(' ', '_'))?.messages || [];
// //     setMessages(convMessages.length > 0 ? convMessages : [
// //       { id: 1, sender: conversation.name.toLowerCase().replace(' ', '_'), text: 'Hi there!', timestamp: new Date(Date.now() - 3600000), status: 'delivered' }
// //     ]);
// //     setConversations(prev => prev.map(conv =>
// //       conv.id === conversation.id ? { ...conv, unread: 0 } : conv
// //     ));
// //   };

// //   const sendMessage = () => {
// //     if (!newMessage.trim()) return;
// //     const message = {
// //       id: messages.length + 1,
// //       sender: 'current_user',
// //       text: newMessage,
// //       timestamp: new Date(),
// //       status: 'sending'
// //     };
// //     setMessages(prev => [...prev, message]);
// //     setNewMessage('');
// //     setConversations(prev => prev.map(conv =>
// //       conv.id === activeConversation.id
// //         ? { ...conv, lastMessage: `You: ${newMessage}`, timestamp: new Date() }
// //         : conv
// //     ));
// //     setTimeout(() => {
// //       setMessages(prev => prev.map(msg =>
// //         msg.id === message.id ? { ...msg, status: 'delivered' } : msg
// //       ));
// //     }, 1000);
// //   };

// //   const scheduleVideoCall = () => {
// //     setShowVideoModal(true);
// //     showNotification('Zoom meeting scheduled and invite sent');
// //   };

// //   const addParticipants = (participantNames) => {
// //     if (!activeConversation) return;
// //     const updatedConversation = {
// //       ...activeConversation,
// //       participants: [...new Set([...activeConversation.participants, ...participantNames])]
// //     };
// //     setActiveConversation(updatedConversation);
// //     setConversations(prev => prev.map(conv =>
// //       conv.id === activeConversation.id ? updatedConversation : conv
// //     ));
// //     showNotification(`${participantNames.length} participants added`);
// //     setShowAddParticipants(false);
// //   };

// //   const acceptInvitation = (requestId) => {
// //     setBrandRequests(prev => prev.map(req => {
// //       if (req.id === requestId) {
// //         const newCampaign = {
// //           id: Math.max(...campaigns.map(c => c.id)) + 1,
// //           name: req.name,
// //           status: 'active',
// //           brands: [...req.brands, ...req.invitedBrands],
// //           influencers: [currentUser.username],
// //           budget: req.budget,
// //           goals: req.goals,
// //           audience: req.audience,
// //           startDate: new Date().toISOString().split('T')[0],
// //           endDate: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
// //           objective: 'Brand Awareness',
// //           impressions: 0,
// //           clicks: 0,
// //           ctr: '0%',
// //           conversions: 0
// //         };
// //         setCampaigns(prev => [...prev, newCampaign]);
// //         setConversations(prev => [{
// //           id: `${newCampaign.id}-group`,
// //           name: `${newCampaign.name} Group`,
// //           participants: [...newCampaign.brands, ...newCampaign.influencers],
// //           isGroup: true,
// //           lastMessage: 'Group created',
// //           timestamp: new Date(),
// //           unread: 0
// //         }, ...prev]);
// //         return { ...req, status: 'accepted', invitedBrands: [] };
// //       }
// //       return req;
// //     }));
// //     showNotification('Collaboration accepted! Shared workspace created');
// //   };

// //   const rejectInvitation = (requestId) => {
// //     setBrandRequests(prev => prev.map(req =>
// //       req.id === requestId ? { ...req, status: 'rejected', invitedBrands: [] } : req
// //     ));
// //     showNotification('Collaboration rejected');
// //   };

// //   const addBudgetConflict = (requestId, conflict) => {
// //     setBrandRequests(prev => prev.map(req =>
// //       req.id === requestId ? { ...req, conflicts: [...req.conflicts, conflict] } : req
// //     ));
// //   };

// //   const resolveConflict = (requestId, conflictIndex) => {
// //     setBrandRequests(prev => prev.map(req =>
// //       req.id === requestId
// //         ? { ...req, conflicts: req.conflicts.filter((_, i) => i !== conflictIndex) }
// //         : req
// //     ));
// //   };

// //   const handleAddComment = (postId) => {
// //     const commentText = newComments[postId]?.trim();
// //     if (!commentText) return;

// //     setPosts(posts.map(post =>
// //       post.id === postId
// //         ? {
// //             ...post,
// //             comments: [
// //               ...post.comments,
// //               {
// //                 id: post.comments.length + 1,
// //                 username: currentUser.username,
// //                 text: commentText,
// //                 avatar: currentUser.avatar
// //               }
// //             ]
// //           }
// //         : post
// //     ));
// //     setNewComments({ ...newComments, [postId]: '' });
// //   };

// //   const showNotification = (message) => {
// //     setNotification(message);
// //     setTimeout(() => setNotification(null), 3000);
// //   };

// //   const filteredConversations = conversations.filter(conv =>
// //     conv.name.toLowerCase().includes(searchQuery.toLowerCase())
// //   );

// //   const Ad = ({ ad, newComments, handleLikeAd, handleAddAdComment, handleShare, setNewComments }) => (
// //     <div className="ad-card">
// //       <div className="ad-image-container">
// //         <img src={ad.adImage} alt={ad.brandName} className="ad-image" />
// //         {ad.gamification?.hasReward && (
// //           <div className="gamification-badge">
// //             <Award size={16} color="#333" />
// //             <div className="gamification-tooltip">
// //               <h4>Earn {ad.gamification.totalPoints} points</h4>
// //               {ad.gamification.tasks.map((task, i) => (
// //                 <div 
// //                   key={i} 
// //                   className={`gamification-task ${task.completed ? 'completed' : ''}`}
// //                 >
// //                   {task.completed ? '✓ ' : ''}
// //                   {task.action === 'like' && 'Like this ad: '}
// //                   {task.action === 'comment' && 'Comment on this ad: '}
// //                   {task.action === 'share' && `Share ${task.currentShares || 0}/${task.target || 1} times: `}
// //                   {task.points} points
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //       <div className="ad-info">
// //         <div className="ad-header">
// //           <img src={ad.brandLogo} alt={ad.brandName} className="brand-logo" />
// //           <span className="brand-name">{ad.brandName}</span>
// //         </div>
// //         <p className="ad-caption">{ad.caption}</p>
// //         <div className="ad-stats">
// //           <div className="stat-item">
// //             <span className="stat-label">Views</span>
// //             <span className="stat-value">{ad.views.toLocaleString()}</span>
// //           </div>
// //           <div className="stat-item">
// //             <span className="stat-label">Clicks</span>
// //             <span className="stat-value">{ad.clicks.toLocaleString()}</span>
// //           </div>
// //           <div className="stat-item">
// //             <span className="stat-label">CTR</span>
// //             <span className="stat-value">{ad.ctr}%</span>
// //           </div>
// //           <div className="stat-item">
// //             <span className="stat-label">Posted</span>
// //             <span className="stat-value">{ad.postedDate}</span>
// //           </div>
// //         </div>
// //         <div className="ad-actions">
// //           <button 
// //             className="action-button like-button"
// //             onClick={() => handleLikeAd(ad.id)}
// //           >
// //             <Heart 
// //               size={18} 
// //               fill={ad.isLiked ? 'currentColor' : 'none'} 
// //             />
// //             Like
// //           </button>
// //           <button 
// //             className="action-button comment-button"
// //             onClick={() => {
// //               document.getElementById(`comment-input-${ad.id}`)?.focus();
// //             }}
// //           >
// //             <MessageSquare size={18} />
// //             Comment
// //           </button>
// //           <button 
// //             className="action-button share-button"
// //             onClick={() => handleShare(ad.id)}
// //           >
// //             <Share2 size={18} />
// //             Share
// //           </button>
// //         </div>
// //         {ad.comments.length > 0 && (
// //           <div className="comments-section">
// //             {ad.comments.slice(0, 2).map(comment => (
// //               <div key={comment.id} className="comment">
// //                 <img 
// //                   src={comment.avatar} 
// //                   alt={comment.username} 
// //                   className="comment-avatar"
// //                 />
// //                 <div className="comment-content">
// //                   <span className="comment-username">{comment.username}</span>
// //                   {comment.text}
// //                 </div>
// //               </div>
// //             ))}
// //             {ad.comments.length > 2 && (
// //               <div style={{ color: '#666', fontSize: '12px' }}>
// //                 View all {ad.comments.length} comments
// //               </div>
// //             )}
// //           </div>
// //         )}
// //         <div className="add-comment">
// //           <input
// //             id={`comment-input-${ad.id}`}
// //             type="text"
// //             className="comment-input"
// //             placeholder="Add a comment..."
// //             value={newComments[ad.id] || ''}
// //             onChange={(e) => setNewComments({
// //               ...newComments,
// //               [ad.id]: e.target.value
// //             })}
// //           />
// //           <button
// //             className="post-comment-button"
// //             onClick={() => handleAddAdComment(ad.id)}
// //             disabled={!newComments[ad.id]?.trim()}
// //           >
// //             Post
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );

// //   const CampaignDetail = ({ campaign, setSelectedCampaign }) => (
// //     <div className="campaign-detail">
// //       <div className="detail-header">
// //         <button className="back-button" onClick={() => setSelectedCampaign(null)}><ArrowLeft size={20} /></button>
// //         <h2>Campaign Details</h2>
// //       </div>
// //       <div className="detail-grid">
// //         <div>
// //           <div className="detail-section">
// //             <h3>{campaign.name}</h3>
// //             <div className="detail-properties">
// //               <div className="detail-property"><p className="property-label">Status</p><p className="property-value">{campaign.status}</p></div>
// //               <div className="detail-property"><p className="property-label">Objective</p><p className="property-value">{campaign.objective}</p></div>
// //               <div className="detail-property"><p className="property-label">Budget</p><p className="property-value">${campaign.budget.toLocaleString()}</p></div>
// //               <div className="detail-property"><p className="property-label">Duration</p><p className="property-value">{campaign.startDate} - {campaign.endDate}</p></div>
// //             </div>
// //           </div>
// //         </div>
// //         <div className="performance-metrics">
// //           <h4>Performance Metrics</h4>
// //           <div className="metrics-grid small">
// //             <div className="metric"><p className="metric-label">Impressions</p><p className="metric-value">{campaign.impressions?.toLocaleString() || "0"}</p></div>
// //             <div className="metric"><p className="metric-label">Clicks</p><p className="metric-value">{campaign.clicks?.toLocaleString() || "0"}</p></div>
// //             <div className="metric"><p className="metric-label">CTR</p><p className="metric-value">{campaign.ctr || "0%"}</p></div>
// //             <div className="metric"><p className="metric-label">Conversions</p><p className="metric-value">{campaign.conversions?.toLocaleString() || "0"}</p></div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );

// //   return (
// //     <div className="smartsheet-collab-container">
// //       {notification && (
// //         <div className="notification">
// //           <Bell size={16} />
// //           <span>{notification}</span>
// //           <button onClick={() => setNotification(null)}>×</button>
// //         </div>
// //       )}
// //       <div className="tabs">
// //         <button className={`tab ${activeTab === 'social' ? 'active' : ''}`} onClick={() => setActiveTab('social')}>
// //           <Users size={16} /> Social
// //         </button>
// //         <button className={`tab ${activeTab === 'ads' ? 'active' : ''}`} onClick={() => setActiveTab('ads')}>
// //           Brand Ads
// //         </button>
// //         <button className={`tab ${activeTab === 'campaigns' ? 'active' : ''}`} onClick={() => setActiveTab('campaigns')}>
// //           <GitMerge size={16} /> Campaigns
// //         </button>
// //         <button className={`tab ${activeTab === 'messages' ? 'active' : ''}`} onClick={() => setActiveTab('messages')}>
// //           <MessageSquare size={16} /> Messages
// //         </button>
// //         <button className={`tab ${activeTab === 'collaboration' ? 'active' : ''}`} onClick={() => setActiveTab('collaboration')}>
// //           <Mail size={16} /> Collaboration
// //         </button>
// //         <button className={`tab ${activeTab === 'dashboard' ? 'active' : ''}`} onClick={() => setActiveTab('dashboard')}>
// //           Analytics Dashboard
// //         </button>
// //         <button className={`tab ${activeTab === 'gamification' ? 'active' : ''}`} onClick={() => setActiveTab('gamification')}>
// //           Gamification
// //         </button>
// //       </div>
// //       <div className="tab-content">
// //         {activeTab === 'social' && (
// //           <SocialMedia 
// //             currentUser={currentUser}
// //             setCurrentUser={setCurrentUser}
// //             posts={posts}
// //             setPosts={setPosts}
// //             stories={stories}
// //             messages={messages}
// //             userPosts={userPosts}
// //             setUserPosts={setUserPosts}
// //           />
// //         )}
// //         {activeTab === 'campaigns' && (
// //           <div className="campaigns-panel">
// //             {selectedCampaign ? (
// //               <CampaignDetail
// //                 campaign={selectedCampaign}
// //                 setSelectedCampaign={setSelectedCampaign}
// //               />
// //             ) : (
// //               <>
// //                 <div className="campaigns-header">
// //                   <h2>Campaign Management</h2>
// //                 </div>
// //                 <div className="campaigns-table-container">
// //                   <div className="table-controls">
// //                     <div className="search-container">
// //                       <Search size={16} className="search-icon" />
// //                       <input
// //                         type="text"
// //                         className="search-input"
// //                         placeholder="Search campaigns..."
// //                         value={searchQuery}
// //                         onChange={(e) => setSearchQuery(e.target.value)}
// //                       />
// //                     </div>
// //                     <div className="filter-controls">
// //                       <select className="filter-select" value={dateRange} onChange={(e) => setDateRange(e.target.value)}>
// //                         <option value="last7days">Last 7 days</option>
// //                         <option value="last30days">Last 30 days</option>
// //                         <option value="last90days">Last 90 days</option>
// //                       </select>
// //                       <button className="btn btn-secondary"><Filter size={16} /> Filters</button>
// //                     </div>
// //                   </div>
// //                   <div className="table-wrapper">
// //                     <table className="data-table">
// //                       <thead>
// //                         <tr>
// //                           <th>Campaign Name</th>
// //                           <th>Status</th>
// //                           <th>Objective</th>
// //                           <th>Budget</th>
// //                           <th>Duration</th>
// //                           <th className="text-right">Actions</th>
// //                         </tr>
// //                       </thead>
// //                       <tbody>
// //                         {campaigns
// //                           .filter(campaign =>
// //                             campaign.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
// //                             campaign.status.toLowerCase().includes(searchQuery.toLowerCase()) ||
// //                             campaign.objective.toLowerCase().includes(searchQuery.toLowerCase()) ||
// //                             campaign.brands.join(', ').toLowerCase().includes(searchQuery.toLowerCase())
// //                           )
// //                           .map((campaign) => (
// //                             <tr key={campaign.id}>
// //                               <td><div className="campaign-name" onClick={() => setSelectedCampaign(campaign)}>{campaign.name}</div></td>
// //                               <td><span className={`status-badge ${campaign.status.toLowerCase()}`}>{campaign.status}</span></td>
// //                               <td>{campaign.objective}</td>
// //                               <td>${campaign.budget.toLocaleString()}</td>
// //                               <td>{campaign.startDate} to {campaign.endDate}</td>
// //                               <td className="action-buttons">
// //                                 <button onClick={() => setSelectedCampaign(campaign)}><Eye size={18} /></button>
// //                               </td>
// //                             </tr>
// //                           ))}
// //                       </tbody>
// //                     </table>
// //                   </div>
// //                 </div>
// //               </>
// //             )}
// //           </div>
// //         )}
// //         {activeTab === 'messages' && (
// //           <div className="communication-panel">
// //             <div className="chat-container">
// //               <div className={`conversation-sidebar ${activeConversation ? 'hidden' : ''}`}>
// //                 <div className="sidebar-header">
// //                   <h3>Messages</h3>
// //                   <div className="search-bar">
// //                     <Search size={16} />
// //                     <input
// //                       type="text"
// //                       placeholder="Search conversations..."
// //                       value={searchQuery}
// //                       onChange={(e) => setSearchQuery(e.target.value)}
// //                     />
// //                   </div>
// //                 </div>
// //                 <div className="conversation-list">
// //                   {filteredConversations.map(conversation => (
// //                     <div
// //                       key={conversation.id}
// //                       className={`conversation-item ${activeConversation?.id === conversation.id ? 'active' : ''}`}
// //                       onClick={() => startConversation(conversation)}
// //                     >
// //                       <div className="conversation-avatar">{conversation.name.charAt(0)}</div>
// //                       <div className="conversation-details">
// //                         <div className="conversation-name">{conversation.name}</div>
// //                         <div className="conversation-preview">{conversation.lastMessage}</div>
// //                       </div>
// //                       {conversation.unread > 0 && (
// //                         <span className="unread-count">{conversation.unread}</span>
// //                       )}
// //                     </div>
// //                   ))}
// //                 </div>
// //               </div>
// //               {activeConversation && (
// //                 <div className="chat-area">
// //                   <div className="chat-header">
// //                     <button className="back-button" onClick={() => setActiveConversation(null)}>← Back</button>
// //                     <div className="chat-info">
// //                       <div className="chat-title">{activeConversation.name}</div>
// //                     </div>
// //                     <div className="chat-actions">
// //                       <button className="btn-icon" onClick={scheduleVideoCall}><Video size={18} /></button>
// //                       {activeConversation.isGroup && (
// //                         <button className="btn-icon" onClick={() => setShowAddParticipants(true)}><UserPlus size={18} /></button>
// //                       )}
// //                     </div>
// //                   </div>
// //                   <div className="message-list">
// //                     {messages.map(message => (
// //                       <div key={message.id} className={`message ${message.sender === 'current_user' ? 'sent' : 'received'}`}>
// //                         <p>{message.text}</p>
// //                         <span className="time">{message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
// //                       </div>
// //                     ))}
// //                   </div>
// //                   <div className="message-input-area">
// //                     <input
// //                       type="text"
// //                       value={newMessage}
// //                       onChange={(e) => setNewMessage(e.target.value)}
// //                       placeholder="Type a message..."
// //                       onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
// //                     />
// //                     <button className="btn-icon"><Smile size={20} /></button>
// //                     <button className="btn-icon"><Paperclip size={20} /></button>
// //                   </div>
// //                 </div>
// //               )}
// //             </div>
// //           </div>
// //         )}
// //         {activeTab === 'collaboration' && (
// //           <div className="collaboration-panel">
// //             <div className="project-list">
// //               <h2>Brand Collaboration Requests</h2>
// //               {brandRequests.map(request => (
// //                 <div key={request.id} className={`project-card ${request.status}`}>
// //                   <div className="project-header">
// //                     <h3>{request.name}</h3>
// //                     <span className="status">{request.status}</span>
// //                   </div>
// //                   <div className="project-details">
// //                     <div className="detail">
// //                       <label>Brands:</label>
// //                       <span>{request.brands.join(', ')}</span>
// //                     </div>
// //                     {request.invitedBrands.length > 0 && (
// //                       <div className="detail">
// //                         <label>Pending Invites:</label>
// //                         <span>{request.invitedBrands.join(', ')}</span>
// //                       </div>
// //                     )}
// //                     <div className="detail">
// //                       <label>Budget:</label>
// //                       <span>${request.budget.toLocaleString()}</span>
// //                     </div>
// //                     <div className="detail">
// //                       <label>Goals:</label>
// //                       <span>{request.goals}</span>
// //                     </div>
// //                     <div className="detail">
// //                       <label>Audience:</label>
// //                       <span>{request.audience}</span>
// //                     </div>
// //                     {request.status === 'pending' && (
// //                       <div className="invite-actions">
// //                         <button 
// //                           className="btn btn-success"
// //                           onClick={() => acceptInvitation(request.id)}
// //                         >
// //                           <Check size={14} /> Accept
// //                         </button>
// //                         <button 
// //                           className="btn btn-danger"
// //                           onClick={() => rejectInvitation(request.id)}
// //                         >
// //                           <X size={14} /> Reject
// //                         </button>
// //                       </div>
// //                     )}
// //                     {request.conflicts.length > 0 && (
// //                       <div className="conflicts">
// //                         <label>Conflicts:</label>
// //                         <ul>
// //                           {request.conflicts.map((conflict, i) => (
// //                             <li key={i}>
// //                               <AlertCircle size={14} />
// //                               <span>{conflict}</span>
// //                               <button
// //                                 className="btn btn-outline"
// //                                 onClick={() => resolveConflict(request.id, i)}
// //                               >
// //                                 Resolve
// //                               </button>
// //                             </li>
// //                           ))}
// //                         </ul>
// //                       </div>
// //                     )}
// //                   </div>
// //                   <div className="project-actions">
// //                     <a href={request.sheetUrl} className="btn btn-primary">
// //                       <FileText size={14} /> Open Sheet
// //                     </a>
// //                     <button 
// //                       className="btn btn-outline"
// //                       onClick={() => addBudgetConflict(request.id, 'Budget allocation needs adjustment')}
// //                     >
// //                       Flag Issue
// //                     </button>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         )}
// //         {activeTab === 'dashboard' && (
// //           <div className="dashboard-container">
// //             <div className="dashboard-header">
// //               <h2>Performance Dashboard</h2>
// //               <div className="filter-controls">
// //                 <div className="time-range">
// //                   <button 
// //                     className={timeRange === '7d' ? 'active' : ''}
// //                     onClick={() => setTimeRange('7d')}
// //                   >
// //                     7 Days
// //                   </button>
// //                   <button 
// //                     className={timeRange === '30d' ? 'active' : ''}
// //                     onClick={() => setTimeRange('30d')}
// //                   >
// //                     30 Days
// //                   </button>
// //                   <button 
// //                     className={timeRange === '90d' ? 'active' : ''}
// //                     onClick={() => setTimeRange('90d')}
// //                   >
// //                     90 Days
// //                   </button>
// //                 </div>
// //                 <select
// //                   value={timeRange}
// //                   onChange={(e) => setTimeRange(e.target.value)}
// //                 >
// //                   <option value="impressions">Impressions</option>
// //                   <option value="engagements">Engagements</option>
// //                   <option value="followers">Followers</option>
// //                 </select>
// //               </div>
// //             </div>
// //             <div className="metrics-overview">
// //               <div className="metric-card">
// //                 <h3>Impressions</h3>
// //                 <div className="metric-value">{analyticsData.impressions.toLocaleString()}</div>
// //                 <div className="metric-change positive">+12%</div>
// //               </div>
// //               <div className="metric-card">
// //                 <h3>Engagements</h3>
// //                 <div className="metric-value">{analyticsData.engagements.toLocaleString()}</div>
// //                 <div className="metric-change positive">+7%</div>
// //               </div>
// //               <div className="metric-card">
// //                 <h3>Followers</h3>
// //                 <div className="metric-value">{analyticsData.followers.toLocaleString()}</div>
// //                 <div className="metric-change positive">+3%</div>
// //               </div>
// //               <div className="metric-card">
// //                 <h3>Click Rate</h3>
// //                 <div className="metric-value">{analyticsData.clickRate}%</div>
// //                 <div className="metric-change negative">-0.2%</div>
// //               </div>
// //             </div>
// //             <div className="charts-container">
// //               <div className="chart">
// //                 <h3>Impressions</h3>
// //                 <div className="chart-placeholder">
// //                   <img src="https://via.placeholder.com/400x200?text=Impressions+Chart" alt="Impressions Chart" />
// //                 </div>
// //               </div>
// //               <div className="chart">
// //                 <h3>Engagements</h3>
// //                 <div className="chart-placeholder">
// //                   <img src="https://via.placeholder.com/400x200?text=Engagements+Chart" alt="Engagements Chart" />
// //                 </div>
// //               </div>
// //             </div>
// //             <div className="top-performing">
// //               <h3>Top Performing Posts</h3>
// //               <div className="posts-list">
// //                 {[...Array(3)].map((_, i) => (
// //                   <div key={i} className="performance-post">
// //                     <img src={`https://via.placeholder.com/150?text=Post+${i+1}`} alt="Post" />
// //                     <div className="post-metrics">
// //                       <div>Impressions: {(10000 + i * 2000).toLocaleString()}</div>
// //                       <div>Engagements: {(500 + i * 100).toLocaleString()}</div>
// //                       <div>Engagement Rate: {4.2 + i}%</div>
// //                     </div>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           </div>
// //         )}
// //         {activeTab === 'gamification' && (
// //           <div className="gamification-container">
// //             <div className="score-card">
// //               <h3>Your Current Score</h3>
// //               <div className="score-value">1,450</div>
// //               <div className="score-level">Gold Tier</div>
// //               <div className="progress-bar">
// //                 <div className="progress" style={{ width: '65%' }}></div>
// //               </div>
// //               <div className="progress-text">650 points to Platinum</div>
// //             </div>
// //             <div className="badges-container">
// //               <h3>Available Badges</h3>
// //               <div className="badges-list">
// //                 {gamificationData.map((badge, i) => (
// //                   <div key={i} className="badge-card">
// //                     <img src={badge.image} alt={badge.title} />
// //                     <h4>{badge.title}</h4>
// //                     <div className="badge-progress">
// //                       <div className="progress-bar">
// //                         <div className="progress" style={{ width: `${badge.progress}%` }}></div>
// //                       </div>
// //                       <span>{badge.progress}/{badge.target}</span>
// //                     </div>
// //                     <div className="badge-reward">Reward: {badge.reward}</div>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //             <div className="leaderboard">
// //               <h3>Leaderboard</h3>
// //               <div className="leaderboard-list">
// //                 {[...Array(5)].map((_, i) => (
// //                   <div key={i} className="leaderboard-item">
// //                     <span className="rank">{i+1}</span>
// //                     <img src={`https://source.unsplash.com/random/40x40/?user${i}`} alt="User" />
// //                     <span className="username">user_{i+1}</span>
// //                     <span className="score">{(5-i)*1000} pts</span>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           </div>
// //         )}
// //         {activeTab === 'ads' && (
// //           <div className="ads-container">
// //             <div className="ads-header">
// //               <h2>Brand Advertisement Campaigns</h2>
// //               <p>View and engage with brand advertisements to earn rewards</p>
// //             </div>
// //             <div className="filter-controls enhanced">
// //               <div className="search-bar">
// //                 <Search className="search-icon" size={18} />
// //                 <input
// //                   type="text"
// //                   placeholder="Search ads..."
// //                   value={adFilters.searchQuery}
// //                   onChange={(e) => setAdFilters({ ...adFilters, searchQuery: e.target.value })}
// //                 />
// //               </div>
// //               <div className="filter-panel">
// //                 <div className="filter-group">
// //                   <label>Audience</label>
// //                   <div className="checkbox-group">
// //                     {['tech', 'fashion', 'young_adults', 'women'].map(audience => (
// //                       <label key={audience}>
// //                         <input
// //                           type="checkbox"
// //                           checked={adFilters.audience.includes(audience)}
// //                           onChange={() => {
// //                             if (adFilters.audience.includes(audience)) {
// //                               setAdFilters({
// //                                 ...adFilters,
// //                                 audience: adFilters.audience.filter(a => a !== audience)
// //                               });
// //                             } else {
// //                               setAdFilters({
// //                                 ...adFilters,
// //                                 audience: [...adFilters.audience, audience]
// //                               });
// //                             }
// //                           }}
// //                         />
// //                         {audience.charAt(0).toUpperCase() + audience.slice(1)}
// //                       </label>
// //                     ))}
// //                   </div>
// //                 </div>
// //                 <div className="filter-group">
// //                   <label>Sort By</label>
// //                   <select
// //                     value={adFilters.sortBy}
// //                     onChange={(e) => setAdFilters({ ...adFilters, sortBy: e.target.value })}
// //                   >
// //                     <option value="recent">Most Recent</option>
// //                     <option value="views">Most Views</option>
// //                     <option value="ctr">Highest CTR</option>
// //                   </select>
// //                 </div>
// //                 <div className="filter-group">
// //                   <label>Min CTR (%)</label>
// //                   <input
// //                     type="number"
// //                     value={adFilters.minCTR}
// //                     onChange={(e) => setAdFilters({ ...adFilters, minCTR: parseFloat(e.target.value) || 0 })}
// //                   />
// //                 </div>
// //                 <div className="filter-group">
// //                   <label>Min Views</label>
// //                   <input
// //                     type="number"
// //                     value={adFilters.minViews}
// //                     onChange={(e) => setAdFilters({ ...adFilters, minViews: parseInt(e.target.value) || 0 })}
// //                   />
// //                 </div>
// //               </div>
// //             </div>
// //             <div className="ads-grid">
// //               {brandAds.map(ad => (
// //                 <Ad 
// //                   key={ad.id}
// //                   ad={ad}
// //                   newComments={newComments}
// //                   handleLikeAd={(id) => {
// //                     setBrandAds(brandAds.map(ad => 
// //                       ad.id === id 
// //                         ? { 
// //                             ...ad, 
// //                             isLiked: !ad.isLiked,
// //                             gamification: {
// //                               ...ad.gamification,
// //                               tasks: ad.gamification.tasks.map(task => 
// //                                 task.action === 'like' ? { ...task, completed: !ad.isLiked } : task
// //                               )
// //                             }
// //                           } 
// //                         : ad
// //                     ));
// //                   }}
// //                   handleAddAdComment={(id) => {
// //                     const commentText = newComments[id]?.trim();
// //                     if (!commentText) return;
// //                     setBrandAds(brandAds.map(ad => 
// //                       ad.id === id 
// //                         ? { 
// //                             ...ad, 
// //                             comments: [
// //                               ...ad.comments,
// //                               {
// //                                 id: ad.comments.length + 1,
// //                                 username: currentUser.username,
// //                                 text: commentText,
// //                                 avatar: currentUser.avatar
// //                               }
// //                             ],
// //                             gamification: {
// //                               ...ad.gamification,
// //                               tasks: ad.gamification.tasks.map(task => 
// //                                 task.action === 'comment' ? { ...task, completed: true } : task
// //                               )
// //                             }
// //                           } 
// //                         : ad
// //                     ));
// //                     setNewComments({ ...newComments, [id]: '' });
// //                   }}
// //                   handleShare={(id) => {
// //                     setBrandAds(brandAds.map(ad => 
// //                       ad.id === id 
// //                         ? { 
// //                             ...ad, 
// //                             gamification: {
// //                               ...ad.gamification,
// //                               tasks: ad.gamification.tasks.map(task => 
// //                                 task.action === 'share' 
// //                                   ? { 
// //                                       ...task, 
// //                                       currentShares: (task.currentShares || 0) + 1,
// //                                       completed: (task.currentShares || 0) + 1 >= (task.target || 1)
// //                                     } 
// //                                   : task
// //                               )
// //                             }
// //                           } 
// //                         : ad
// //                     ));
// //                     showNotification('Ad shared successfully!');
// //                   }}
// //                   setNewComments={setNewComments}
// //                 />
// //               ))}
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //       {showVideoModal && (
// //         <div className="modal">
// //           <div className="modal-content">
// //             <div className="modal-header">
// //               <h3>Schedule Video Call</h3>
// //               <button onClick={() => setShowVideoModal(false)}>×</button>
// //             </div>
// //             <div className="modal-body">
// //               <div className="form-group">
// //                 <label>Meeting Title</label>
// //                 <input type="text" defaultValue={activeConversation ? `Discussion about ${activeConversation.name}` : 'Campaign Discussion'} />
// //               </div>
// //               <div className="form-row">
// //                 <div className="form-group">
// //                   <label>Date</label>
// //                   <input type="date" />
// //                 </div>
// //                 <div className="form-group">
// //                   <label>Time</label>
// //                   <input type="time" />
// //                 </div>
// //               </div>
// //             </div>
// //             <div className="modal-actions">
// //               <button className="btn btn-primary" onClick={() => { setShowVideoModal(false); showNotification('Meeting scheduled'); }}><Calendar size={16} /> Schedule Meeting</button>
// //               <button className="btn btn-outline" onClick={() => setShowVideoModal(false)}>Cancel</button>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //       {showAddParticipants && (
// //         <div className="modal">
// //           <div className="modal-content">
// //             <div className="modal-header">
// //               <h3>Add Participants</h3>
// //               <button onClick={() => setShowAddParticipants(false)}>×</button>
// //             </div>
// //             <div className="modal-body">
// //               <div className="search-bar">
// //                 <Search size={16} />
// //                 <input type="text" placeholder="Search participants..." />
// //               </div>
// //               <div className="participants-list">
// //                 {availableParticipants
// //                   .filter(p => !activeConversation?.participants.includes(p.name))
// //                   .map(participant => (
// //                     <div key={participant.id} className="participant-item">
// //                       <div className="participant-info">
// //                         <div className="participant-avatar">{participant.name.charAt(0)}</div>
// //                         <div className="participant-name">{participant.name}</div>
// //                       </div>
// //                       <button className="btn btn-outline" onClick={() => addParticipants([participant.name])}>Add</button>
// //                     </div>
// //                   ))}
// //               </div>
// //             </div>
// //             <div className="modal-actions">
// //               <button className="btn btn-primary" onClick={() => {
// //                 const newParticipants = availableParticipants
// //                   .filter(p => !activeConversation?.participants.includes(p.name))
// //                   .map(p => p.name);
// //                 addParticipants(newParticipants);
// //               }}>Add All</button>
// //               <button className="btn btn-outline" onClick={() => setShowAddParticipants(false)}>Done</button>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Influencer;
// import React, { useState, useEffect } from 'react';
// import {
//   Users, MessageSquare, GitMerge, Plus, Check, X, ChevronLeft, ChevronRight,
//   Heart, MoreHorizontal, Bookmark, Share2, Settings, Grid, List, Search,
//   Bell, FileText, Video, UserPlus, Edit, Trash2, Eye, ArrowLeft, Filter,
//   Smile, Paperclip, Mic, Calendar, Award, Mail, AlertCircle, Slack, Clipboard,
//   BarChart2, TrendingUp, Clock, DollarSign, Download
// } from 'lucide-react';
// import {
//   LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
//   PieChart, Pie, Cell, BarChart, Bar
// } from 'recharts';
// import "../Influencer.css";
// import SocialMedia from '../components/SocialMedia';

// const Influencer = () => {
//   // Main app state
//   const [activeTab, setActiveTab] = useState('social');
//   const [currentUser, setCurrentUser] = useState({
//     username: 'current_user',
//     fullName: 'Current User',
//     avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
//     bio: 'Digital creator | Photography enthusiast',
//     posts: 42,
//     followers: 1250,
//     following: 843,
//     isFollowing: false
//   });

//   // Posts data
//   const [posts, setPosts] = useState([
//     {
//       id: 1,
//       username: 'fashion_brand',
//       avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
//       image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
//       caption: 'Check out our new summer collection! #fashion #summer',
//       likes: 1243,
//       comments: [
//         { id: 1, username: 'user1', text: 'Love this collection!', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80' },
//         { id: 2, username: 'user2', text: 'Where can I buy these?', avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80' }
//       ],
//       time: '2 HOURS AGO',
//       sponsored: false,
//       impressions: 12500,
//       engagementRate: 4.2,
//       isLiked: false,
//       showComments: false,
//       isSaved: false
//     }
//   ]);
//   const [userPosts, setUserPosts] = useState(posts.filter(p => p.username === currentUser.username));
//   const [stories, setStories] = useState([
//     {
//       id: 1,
//       username: 'user1',
//       avatar: 'https://example.com/avatar.jpg',
//       image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e',
//       time: '1h ago',
//       comments: []
//     }
//   ]);

//   // Brand ads data
//   const [brandAds, setBrandAds] = useState([
//     {
//       id: 1,
//       brandName: 'TechTrend',
//       brandLogo: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
//       adImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
//       caption: 'Discover our latest gadget! #tech',
//       views: 15000,
//       clicks: 750,
//       ctr: 5.0,
//       postedDate: '2025-05-15',
//       targetAudience: ['tech', 'young_adults'],
//       status: 'active',
//       isLiked: false,
//       comments: [
//         { id: 1, username: 'user1', text: 'Looks amazing!', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80' }
//       ],
//       gamification: {
//         hasReward: true,
//         totalPoints: 50,
//         tasks: [
//           { action: 'like', points: 10, completed: false },
//           { action: 'comment', points: 20, completed: false },
//           { action: 'share', points: 20, currentShares: 0, target: 1, completed: false }
//         ]
//       }
//     }
//   ]);

//   // Messages data
//   const [messages, setMessages] = useState([
//     {
//       id: 1,
//       username: 'user1',
//       avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
//       lastMessage: 'Hey, how are you doing?',
//       time: '2h ago',
//       unread: true,
//       messages: [
//         { id: 1, sender: 'user1', text: 'Hey there!', time: '10:30 AM' },
//         { id: 2, sender: 'current_user', text: 'Hi! How are you?', time: '10:32 AM' },
//         { id: 3, sender: 'user1', text: 'Hey, how are you doing?', time: '2:15 PM' }
//       ]
//     },
//     {
//       id: 2,
//       username: 'brand_manager',
//       avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
//       lastMessage: 'Can we discuss the campaign details?',
//       time: '1h ago',
//       unread: false,
//       messages: [
//         { id: 1, sender: 'brand_manager', text: 'Hi! Excited about the collab?', time: '9:00 AM' },
//         { id: 2, sender: 'current_user', text: 'Absolutely, lets discuss!', time: '9:05 AM' }
//       ]
//     }
//   ]);

//   // Campaign data
//   const [campaigns, setCampaigns] = useState([
//     {
//       id: 1,
//       name: 'Summer Fashion Collab',
//       status: 'active',
//       brands: ['Nike', 'Adidas'],
//       influencers: ['Alex Johnson', 'Taylor Smith'],
//       budget: 50000,
//       goals: 'Increase brand awareness by 20%',
//       audience: 'Age 18-35, fashion-conscious',
//       startDate: '2023-06-01',
//       endDate: '2023-08-31',
//       objective: 'Brand Awareness',
//       impressions: 125000,
//       clicks: 6800,
//       ctr: '5.4%',
//       conversions: 342
//     },
//     {
//       id: 2,
//       name: 'Tech Bundle Promo',
//       status: 'pending',
//       brands: ['Samsung'],
//       influencers: ['Tech Guru'],
//       budget: 35000,
//       goals: 'Promote new tech bundle',
//       audience: 'Tech enthusiasts 25-45',
//       startDate: '2023-07-01',
//       endDate: '2023-09-30',
//       objective: 'Product Sales',
//       impressions: 0,
//       clicks: 0,
//       ctr: '0%',
//       conversions: 0
//     },
//     {
//       id: 3,
//       name: 'Winter Sports Campaign',
//       status: 'completed',
//       brands: ['Burton', 'Rossignol'],
//       influencers: ['Snow Pro'],
//       budget: 60000,
//       goals: 'Drive winter gear sales',
//       audience: 'Sports enthusiasts 18-40',
//       startDate: '2022-12-01',
//       endDate: '2023-02-28',
//       objective: 'Sales',
//       impressions: 200000,
//       clicks: 10000,
//       ctr: '5.0%',
//       conversions: 500
//     }
//   ]);

//   // Brand requests data
//   const [brandRequests, setBrandRequests] = useState([
//     {
//       id: 1,
//       name: 'Summer Fashion Collab',
//       status: 'pending',
//       brands: ['Nike'],
//       invitedBrands: ['Adidas'],
//       sheetUrl: '#',
//       budget: 50000,
//       goals: 'Increase brand awareness by 20%',
//       audience: 'Age 18-35, fashion-conscious',
//       conflicts: []
//     },
//     {
//       id: 2,
//       name: 'Tech Bundle Promo',
//       status: 'pending',
//       brands: ['Samsung'],
//       invitedBrands: [],
//       sheetUrl: '#',
//       budget: 35000,
//       goals: 'Promote new tech bundle',
//       audience: 'Tech enthusiasts 25-45',
//       conflicts: []
//     }
//   ]);

//   // Conversation data
//   const [conversations, setConversations] = useState([
//     {
//       id: '1',
//       name: 'Summer Fashion Group',
//       participants: ['Nike', 'Adidas', 'Alex Johnson', 'Taylor Smith'],
//       isGroup: true,
//       lastMessage: 'Alex: Here are the latest creatives',
//       timestamp: new Date(Date.now() - 3600000),
//       unread: 3
//     },
//     {
//       id: '2',
//       name: 'Tech Bundle Discussion',
//       participants: ['Samsung', 'Tech Guru'],
//       isGroup: true,
//       lastMessage: 'Samsung: Can we review the timeline?',
//       timestamp: new Date(Date.now() - 7200000),
//       unread: 1
//     },
//     {
//       id: '3',
//       name: 'user1',
//       participants: ['user1'],
//       isGroup: false,
//       lastMessage: 'Hey, how are you doing?',
//       timestamp: new Date(Date.now() - 7200000),
//       unread: 2
//     }
//   ]);

//   // Analytics state
//   const [activeConversation, setActiveConversation] = useState(null);
//   const [newMessage, setNewMessage] = useState('');
//   const [notification, setNotification] = useState(null);
//   const [showVideoModal, setShowVideoModal] = useState(false);
//   const [showAddParticipants, setShowAddParticipants] = useState(false);
//   const [availableParticipants] = useState([
//     { id: '1', name: 'Nike', type: 'brand' },
//     { id: '2', name: 'Adidas', type: 'brand' },
//     { id: '3', name: 'Samsung', type: 'brand' },
//     { id: '4', name: 'Alex Johnson', type: 'influencer' },
//     { id: '5', name: 'Taylor Smith', type: 'influencer' },
//     { id: '6', name: 'Tech Guru', type: 'influencer' }
//   ]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [dateRange, setDateRange] = useState('last30days');
//   const [selectedCampaign, setSelectedCampaign] = useState(null);
//   const [timeRange, setTimeRange] = useState('7d');
//   const [analyticsData, setAnalyticsData] = useState({
//     impressions: 25000,
//     engagements: 1500,
//     followers: 1250,
//     clickRate: 3.5,
//     performanceTime: [],
//     ageDistribution: [],
//     campaignComparison: [],
//     engagementHeatmap: {
//       xLabels: [],
//       yLabels: [],
//       data: []
//     }
//   });
//   const [loadingAnalytics, setLoadingAnalytics] = useState(true);
//   const [gamificationData] = useState([
//     {
//       title: 'Engager',
//       image: 'https://source.unsplash.com/random/100x100/?badge',
//       progress: 80,
//       target: 100,
//       reward: '50 points'
//     }
//   ]);
//   const [newComments, setNewComments] = useState({});
//   const [adFilters, setAdFilters] = useState({
//     searchQuery: '',
//     audience: [],
//     sortBy: 'recent',
//     minCTR: 0,
//     minViews: 0
//   });

//   const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

//   // Fetch analytics data (mock for now, ready for API)
//   useEffect(() => {
//     const fetchAnalyticsData = async () => {
//       setLoadingAnalytics(true);
//       try {
//         // Simulate API call
//         await new Promise(resolve => setTimeout(resolve, 1000));

//         // Derive performance time data from campaigns
//         const performanceTime = campaigns
//           .filter(c => c.status === 'active' || c.status === 'completed')
//           .map((c, i) => ({
//             date: `Jun ${i + 1}`,
//             impressions: c.impressions || 0,
//             clicks: c.clicks || 0,
//             conversions: c.conversions || 0
//           }));

//         // Mock age distribution based on campaign audience
//         const ageDistribution = [
//           { name: '18-24', value: 25 },
//           { name: '25-34', value: 45 },
//           { name: '35-44', value: 20 },
//           { name: '45+', value: 10 }
//         ];

//         // Campaign comparison data
//         const campaignComparison = campaigns.map(c => ({
//           name: c.name,
//           budget: c.budget,
//           impressions: c.impressions
//         }));

//         // Engagement heatmap for posts
//         const engagementHeatmap = {
//           xLabels: ['0%', '25%', '50%', '75%', '100%'],
//           yLabels: ['Header', 'Image', 'Caption', 'Comments', 'Footer'],
//           data: [
//             [80, 60, 30, 10, 5],
//             [40, 70, 50, 30, 20],
//             [20, 40, 60, 40, 30],
//             [10, 30, 50, 70, 90],
//             [5, 10, 20, 30, 40]
//           ]
//         };

//         setAnalyticsData(prev => ({
//           ...prev,
//           performanceTime,
//           ageDistribution,
//           campaignComparison,
//           engagementHeatmap
//         }));
//       } catch (error) {
//         console.error('Error fetching analytics data:', error);
//         showNotification('Failed to load analytics data');
//       } finally {
//         setLoadingAnalytics(false);
//       }
//     };

//     fetchAnalyticsData();
//   }, [campaigns, dateRange]);

//   // Handlers
//   const startConversation = (conversation) => {
//     setActiveConversation(conversation);
//     const convMessages = messages.find(msg => msg.username === conversation.name.toLowerCase().replace(' ', '_'))?.messages || [];
//     setMessages(convMessages.length > 0 ? convMessages : [
//       { id: 1, sender: conversation.name.toLowerCase().replace(' ', '_'), text: 'Hi there!', timestamp: new Date(Date.now() - 3600000), status: 'delivered' }
//     ]);
//     setConversations(prev => prev.map(conv =>
//       conv.id === conversation.id ? { ...conv, unread: 0 } : conv
//     ));
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
//     setConversations(prev => prev.map(conv =>
//       conv.id === activeConversation.id
//         ? { ...conv, lastMessage: `You: ${newMessage}`, timestamp: new Date() }
//         : conv
//     ));
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

//   const addParticipants = (participantNames) => {
//     if (!activeConversation) return;
//     const updatedConversation = {
//       ...activeConversation,
//       participants: [...new Set([...activeConversation.participants, ...participantNames])]
//     };
//     setActiveConversation(updatedConversation);
//     setConversations(prev => prev.map(conv =>
//       conv.id === activeConversation.id ? updatedConversation : conv
//     ));
//     showNotification(`${participantNames.length} participants added`);
//     setShowAddParticipants(false);
//   };

//   const acceptInvitation = (requestId) => {
//     setBrandRequests(prev => prev.map(req => {
//       if (req.id === requestId) {
//         const newCampaign = {
//           id: Math.max(...campaigns.map(c => c.id)) + 1,
//           name: req.name,
//           status: 'active',
//           brands: [...req.brands, ...req.invitedBrands],
//           influencers: [currentUser.username],
//           budget: req.budget,
//           goals: req.goals,
//           audience: req.audience,
//           startDate: new Date().toISOString().split('T')[0],
//           endDate: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
//           objective: 'Brand Awareness',
//           impressions: 0,
//           clicks: 0,
//           ctr: '0%',
//           conversions: 0
//         };
//         setCampaigns(prev => [...prev, newCampaign]);
//         setConversations(prev => [{
//           id: `${newCampaign.id}-group`,
//           name: `${newCampaign.name} Group`,
//           participants: [...newCampaign.brands, ...newCampaign.influencers],
//           isGroup: true,
//           lastMessage: 'Group created',
//           timestamp: new Date(),
//           unread: 0
//         }, ...prev]);
//         return { ...req, status: 'accepted', invitedBrands: [] };
//       }
//       return req;
//     }));
//     showNotification('Collaboration accepted! Shared workspace created');
//   };

//   const rejectInvitation = (requestId) => {
//     setBrandRequests(prev => prev.map(req =>
//       req.id === requestId ? { ...req, status: 'rejected', invitedBrands: [] } : req
//     ));
//     showNotification('Collaboration rejected');
//   };

//   const addBudgetConflict = (requestId, conflict) => {
//     setBrandRequests(prev => prev.map(req =>
//       req.id === requestId ? { ...req, conflicts: [...req.conflicts, conflict] } : req
//     ));
//   };

//   const resolveConflict = (requestId, conflictIndex) => {
//     setBrandRequests(prev => prev.map(req =>
//       req.id === requestId
//         ? { ...req, conflicts: req.conflicts.filter((_, i) => i !== conflictIndex) }
//         : req
//     ));
//   };

//   const handleAddComment = (postId) => {
//     const commentText = newComments[postId]?.trim();
//     if (!commentText) return;

//     setPosts(posts.map(post =>
//       post.id === postId
//         ? {
//             ...post,
//             comments: [
//               ...post.comments,
//               {
//                 id: post.comments.length + 1,
//                 username: currentUser.username,
//                 text: commentText,
//                 avatar: currentUser.avatar
//               }
//             ]
//           }
//         : post
//     ));
//     setNewComments({ ...newComments, [postId]: '' });
//   };

//   const showNotification = (message) => {
//     setNotification(message);
//     setTimeout(() => setNotification(null), 3000);
//   };

//   const filteredConversations = conversations.filter(conv =>
//     conv.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   // Chart Components
//   const PerformanceLineChart = ({ data, dateRange, setDateRange }) => (
//     <div className="chart-container">
//       <div className="chart-header">
//         <h4>Campaign Performance Over Time</h4>
//         <select
//           className="chart-filter"
//           value={dateRange}
//           onChange={(e) => setDateRange(e.target.value)}
//         >
//           <option value="last7days">Last 7 Days</option>
//           <option value="last30days">Last 30 Days</option>
//           <option value="last90days">Last 90 Days</option>
//         </select>
//       </div>
//       <ResponsiveContainer width="100%" height={300}>
//         <LineChart data={data}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="date" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Line type="monotone" dataKey="impressions" stroke="#8884d8" name="Impressions" strokeWidth={2} />
//           <Line type="monotone" dataKey="clicks" stroke="#82ca9d" name="Clicks" strokeWidth={2} />
//           <Line type="monotone" dataKey="conversions" stroke="#ffc658" name="Conversions" strokeWidth={2} />
//         </LineChart>
//       </ResponsiveContainer>
//     </div>
//   );

//   const AgePieChart = ({ data }) => (
//     <div className="demo-chart">
//       <h5>Age Distribution</h5>
//       <ResponsiveContainer width="100%" height={250}>
//         <PieChart>
//           <Pie
//             data={data}
//             cx="50%"
//             cy="50%"
//             outerRadius={80}
//             innerRadius={40}
//             paddingAngle={5}
//             dataKey="value"
//             label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
//             labelLine={false}
//           >
//             {data.map((_, index) => (
//               <Cell
//                 key={`cell-${index}`}
//                 fill={COLORS[index % COLORS.length]}
//                 stroke="#fff"
//                 strokeWidth={1}
//               />
//             ))}
//           </Pie>
//           <Tooltip
//             formatter={(value) => [`${value}%`, 'Percentage']}
//             contentStyle={{
//               backgroundColor: '#fff',
//               border: '1px solid #ddd',
//               borderRadius: '4px',
//             }}
//           />
//           <Legend
//             layout="horizontal"
//             verticalAlign="bottom"
//             align="center"
//             wrapperStyle={{ paddingTop: '20px' }}
//           />
//         </PieChart>
//       </ResponsiveContainer>
//     </div>
//   );

//   const CampaignBarChart = ({ data }) => (
//     <div className="chart-container">
//       <h4>Campaign Budget vs. Impressions</h4>
//       <ResponsiveContainer width="100%" height={300}>
//         <BarChart data={data}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="name" />
//           <YAxis />
//           <Tooltip />
//           <Bar dataKey="budget" fill="#8884d8" name="Budget ($)" />
//           <Bar dataKey="impressions" fill="#82ca9d" name="Impressions" />
//         </BarChart>
//       </ResponsiveContainer>
//     </div>
//   );

//   const EngagementHeatmap = ({ data }) => (
//     <div className="heatmap-container">
//       <h5>Post Interaction Heatmap</h5>
//       <div className="heatmap-grid">
//         {data.yLabels.map((rowLabel, rowIndex) => (
//           <React.Fragment key={rowLabel}>
//             <div className="heatmap-row-label">{rowLabel}</div>
//             {data.xLabels.map((colLabel, colIndex) => (
//               <div
//                 key={`${rowLabel}-${colLabel}`}
//                 className="heatmap-cell"
//                 style={{
//                   backgroundColor: `rgba(0, 136, 254, ${data.data[rowIndex][colIndex] / 100})`,
//                 }}
//               >
//                 {data.data[rowIndex][colIndex]}%
//               </div>
//             ))}
//           </React.Fragment>
//         ))}
//         <div className="heatmap-corner"></div>
//         {data.xLabels.map((label) => (
//           <div key={`x-${label}`} className="heatmap-col-label">
//             {label}
//           </div>
//         ))}
//       </div>
//     </div>
//   );

//   const Ad = ({ ad, newComments, handleLikeAd, handleAddAdComment, handleShare, setNewComments }) => (
//     <div className="ad-card">
//       <div className="ad-image-container">
//         <img src={ad.adImage} alt={ad.brandName} className="ad-image" />
//         {ad.gamification?.hasReward && (
//           <div className="gamification-badge">
//             <Award size={16} color="#333" />
//             <div className="gamification-tooltip">
//               <h4>Earn {ad.gamification.totalPoints} points</h4>
//               {ad.gamification.tasks.map((task, i) => (
//                 <div
//                   key={i}
//                   className={`gamification-task ${task.completed ? 'completed' : ''}`}
//                 >
//                   {task.completed ? '✓ ' : ''}
//                   {task.action === 'like' && 'Like this ad: '}
//                   {task.action === 'comment' && 'Comment on this ad: '}
//                   {task.action === 'share' && `Share ${task.currentShares || 0}/${task.target || 1} times: `}
//                   {task.points} points
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//       <div className="ad-info">
//         <div className="ad-header">
//           <img src={ad.brandLogo} alt={ad.brandName} className="brand-logo" />
//           <span className="brand-name">{ad.brandName}</span>
//         </div>
//         <p className="ad-caption">{ad.caption}</p>
//         <div className="ad-stats">
//           <div className="stat-item">
//             <span className="stat-label">Views</span>
//             <span className="stat-value">{ad.views.toLocaleString()}</span>
//           </div>
//           <div className="stat-item">
//             <span className="stat-label">Clicks</span>
//             <span className="stat-value">{ad.clicks.toLocaleString()}</span>
//           </div>
//           <div className="stat-item">
//             <span className="stat-label">CTR</span>
//             <span className="stat-value">{ad.ctr}%</span>
//           </div>
//           <div className="stat-item">
//             <span className="stat-label">Posted</span>
//             <span className="stat-value">{ad.postedDate}</span>
//           </div>
//         </div>
//         <div className="ad-actions">
//           <button
//             className="action-button like-button"
//             onClick={() => handleLikeAd(ad.id)}
//           >
//             <Heart
//               size={18}
//               fill={ad.isLiked ? 'currentColor' : 'none'}
//             />
//             Like
//           </button>
//           <button
//             className="action-button comment-button"
//             onClick={() => {
//               document.getElementById(`comment-input-${ad.id}`)?.focus();
//             }}
//           >
//             <MessageSquare size={18} />
//             Comment
//           </button>
//           <button
//             className="action-button share-button"
//             onClick={() => handleShare(ad.id)}
//           >
//             <Share2 size={18} />
//             Share
//           </button>
//         </div>
//         {ad.comments.length > 0 && (
//           <div className="comments-section">
//             {ad.comments.slice(0, 2).map(comment => (
//               <div key={comment.id} className="comment">
//                 <img
//                   src={comment.avatar}
//                   alt={comment.username}
//                   className="comment-avatar"
//                 />
//                 <div className="comment-content">
//                   <span className="comment-username">{comment.username}</span>
//                   {comment.text}
//                 </div>
//               </div>
//             ))}
//             {ad.comments.length > 2 && (
//               <div style={{ color: '#666', fontSize: '12px' }}>
//                 View all {ad.comments.length} comments
//               </div>
//             )}
//           </div>
//         )}
//         <div className="add-comment">
//           <input
//             id={`comment-input-${ad.id}`}
//             type="text"
//             className="comment-input"
//             placeholder="Add a comment..."
//             value={newComments[ad.id] || ''}
//             onChange={(e) => setNewComments({
//               ...newComments,
//               [ad.id]: e.target.value
//             })}
//           />
//           <button
//             className="post-comment-button"
//             onClick={() => handleAddAdComment(ad.id)}
//             disabled={!newComments[ad.id]?.trim()}
//           >
//             Post
//           </button>
//         </div>
//       </div>
//     </div>
//   );

//   const CampaignDetail = ({ campaign, setSelectedCampaign }) => (
//   <div className="campaign-detail">
//     <div className="detail-header">
//       <button
//       className="back-button"
//       onClick={() => setSelectedCampaign(null)}
//       aria-label="Go back to campaign list"
//       title="Back to campaigns"
//     >
//       <ArrowLeft size={20} />
//       <span className="sr-only">Back</span>
//       </button>
//       <h2>Campaign Details</h2>
//     </div>
//     <div className="detail-grid">
//       <div>
//         <div className="detail-section">
//           <h3>{campaign.name}</h3>
//           <div className="detail-properties">
//             <div className="detail-property">
//               <p className="property-label">Status</p>
//               <p className="property-value">{campaign.status}</p>
//             </div>
//             <div className="detail-property">
//               <p className="property-label">Objective</p>
//               <p className="property-value">{campaign.objective}</p>
//             </div>
//             <div className="detail-property">
//               <p className="property-label">Budget</p>
//               <p className="property-value">${campaign.budget.toLocaleString()}</p>
//             </div>
//             <div className="detail-property">
//               <p className="property-label">Duration</p>
//               <p className="property-value">{campaign.startDate} - {campaign.endDate}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="performance-metrics">
//         <h4>Performance Metrics</h4>
//         <div className="metrics-grid small">
//           <div className="metric">
//             <p className="metric-label">Impressions</p>
//             <p className="metric-value">{campaign.impressions?.toLocaleString() || "0"}</p>
//           </div>
//           <div className="metric">
//             <p className="metric-label">Clicks</p>
//             <p className="metric-value">{campaign.clicks?.toLocaleString() || "0"}</p>
//           </div>
//           <div className="metric">
//             <p className="metric-label">CTR</p>
//             <p className="metric-value">{campaign.ctr || "0%"}</p>
//           </div>
//           <div className="metric">
//             <p className="metric-label">Conversions</p>
//             <p className="metric-value">{campaign.conversions?.toLocaleString() || "0"}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// );
//   return (
//     <div className="smartsheet-collab-container">
//       {notification && (
//         <div className="notification">
//           <Bell size={16} />
//           <span>{notification}</span>
//           <button onClick={() => setNotification(null)}>×</button>
//         </div>
//       )}
//       <div className="tabs">
//         <button className={`tab ${activeTab === 'social' ? 'active' : ''}`} onClick={() => setActiveTab('social')}>
//           <Users size={16} /> Social
//         </button>
//         <button className={`tab ${activeTab === 'ads' ? 'active' : ''}`} onClick={() => setActiveTab('ads')}>
//           Brand Ads
//         </button>
//         <button className={`tab ${activeTab === 'campaigns' ? 'active' : ''}`} onClick={() => setActiveTab('campaigns')}>
//           <GitMerge size={16} /> Campaigns
//         </button>
//         <button className={`tab ${activeTab === 'messages' ? 'active' : ''}`} onClick={() => setActiveTab('messages')}>
//           <MessageSquare size={16} /> Messages
//         </button>
//         <button className={`tab ${activeTab === 'collaboration' ? 'active' : ''}`} onClick={() => setActiveTab('collaboration')}>
//           <Mail size={16} /> Collaboration
//         </button>
//         <button className={`tab ${activeTab === 'dashboard' ? 'active' : ''}`} onClick={() => setActiveTab('dashboard')}>
//           Analytics Dashboard
//         </button>
//         <button className={`tab ${activeTab === 'gamification' ? 'active' : ''}`} onClick={() => setActiveTab('gamification')}>
//           Gamification
//         </button>
//       </div>
//       <div className="tab-content">
//         {activeTab === 'social' && (
//           <SocialMedia
//             currentUser={currentUser}
//             setCurrentUser={setCurrentUser}
//             posts={posts}
//             setPosts={setPosts}
//             stories={stories}
//             messages={messages}
//             userPosts={userPosts}
//             setUserPosts={setUserPosts}
//           />
//         )}
//         {activeTab === 'campaigns' && (
//           <div className="campaigns-panel">
//             {selectedCampaign ? (
//               <CampaignDetail
//                 campaign={selectedCampaign}
//                 setSelectedCampaign={setSelectedCampaign}
//               />
//             ) : (
//               <>
//                 <div className="campaigns-header">
//                   <h2>Campaign Management</h2>
//                 </div>
//                 <div className="campaigns-table-container">
//                   <div className="table-controls">
//                     <div className="search-container">
//                       <Search size={16} className="search-icon" />
//                       <input
//                         type="text"
//                         className="search-input"
//                         placeholder="Search campaigns..."
//                         value={searchQuery}
//                         onChange={(e) => setSearchQuery(e.target.value)}
//                       />
//                     </div>
//                     <div className="filter-controls">
//                       <select className="filter-select" value={dateRange} onChange={(e) => setDateRange(e.target.value)}>
//                         <option value="last7days">Last 7 days</option>
//                         <option value="last30days">Last 30 days</option>
//                         <option value="last90days">Last 90 days</option>
//                       </select>
//                       <button className="btn btn-secondary"><Filter size={16} /> Filters</button>
//                     </div>
//                   </div>
//                   <div className="table-wrapper">
//                     <table className="data-table">
//                       <thead>
//                         <tr>
//                           <th>Campaign Name</th>
//                           <th>Status</th>
//                           <th>Objective</th>
//                           <th>Budget</th>
//                           <th>Duration</th>
//                           <th className="text-right">Actions</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {campaigns
//                           .filter(campaign =>
//                             campaign.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//                             campaign.status.toLowerCase().includes(searchQuery.toLowerCase()) ||
//                             campaign.objective.toLowerCase().includes(searchQuery.toLowerCase()) ||
//                             campaign.brands.join(', ').toLowerCase().includes(searchQuery.toLowerCase())
//                           )
//                           .map((campaign) => (
//                             <tr key={campaign.id}>
//                               <td><div className="campaign-name" onClick={() => setSelectedCampaign(campaign)}>{campaign.name}</div></td>
//                               <td><span className={`status-badge ${campaign.status.toLowerCase()}`}>{campaign.status}</span></td>
//                               <td>{campaign.objective}</td>
//                               <td>${campaign.budget.toLocaleString()}</td>
//                               <td>{campaign.startDate} to {campaign.endDate}</td>
//                               <td className="action-buttons">
//                                 <button onClick={() => setSelectedCampaign(campaign)}><Eye size={18} /></button>
//                               </td>
//                             </tr>
//                           ))}
//                       </tbody>
//                     </table>
//                   </div>
//                 </div>
//               </>
//             )}
//           </div>
//         )}
//         {activeTab === 'messages' && (
//           <div className="communication-panel">
//             <div className="chat-container">
//               <div className={`conversation-sidebar ${activeConversation ? 'hidden' : ''}`}>
//                 <div className="sidebar-header">
//                   <h3>Messages</h3>
//                   <div className="search-bar">
//                     <Search size={16} />
//                     <input
//                       type="text"
//                       placeholder="Search conversations..."
//                       value={searchQuery}
//                       onChange={(e) => setSearchQuery(e.target.value)}
//                     />
//                   </div>
//                 </div>
//                 <div className="conversation-list">
//                   {filteredConversations.map(conversation => (
//                     <div
//                       key={conversation.id}
//                       className={`conversation-item ${activeConversation?.id === conversation.id ? 'active' : ''}`}
//                       onClick={() => startConversation(conversation)}
//                     >
//                       <div className="conversation-avatar">{conversation.name.charAt(0)}</div>
//                       <div className="conversation-details">
//                         <div className="conversation-name">{conversation.name}</div>
//                         <div className="conversation-preview">{conversation.lastMessage}</div>
//                       </div>
//                       {conversation.unread > 0 && (
//                         <span className="unread-count">{conversation.unread}</span>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//               {activeConversation && (
//                 <div className="chat-area">
//                   <div className="chat-header">
//                     <button className="back-button" onClick={() => setActiveConversation(null)}>← Back</button>
//                     <div className="chat-info">
//                       <div className="chat-title">{activeConversation.name}</div>
//                     </div>
//                     <div className="chat-actions">
//                       <button className="btn-icon" onClick={scheduleVideoCall}><Video size={18} /></button>
//                       {activeConversation.isGroup && (
//                         <button className="btn-icon" onClick={() => setShowAddParticipants(true)}><UserPlus size={18} /></button>
//                       )}
//                     </div>
//                   </div>
//                   <div className="message-list">
//                     {messages.map(message => (
//                       <div key={message.id} className={`message ${message.sender === 'current_user' ? 'sent' : 'received'}`}>
//                         <p>{message.text}</p>
//                         <span className="time">{message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
//                       </div>
//                     ))}
//                   </div>
//                   <div className="message-input-area">
//                     <input
//                       type="text"
//                       value={newMessage}
//                       onChange={(e) => setNewMessage(e.target.value)}
//                       placeholder="Type a message..."
//                       onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
//                     />
//                     <button className="btn-icon"><Smile size={20} /></button>
//                     <button className="btn-icon"><Paperclip size={20} /></button>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         )}
//         {activeTab === 'collaboration' && (
//           <div className="collaboration-panel">
//             <div className="project-list">
//               <h2>Brand Collaboration Requests</h2>
//               {brandRequests.map(request => (
//                 <div key={request.id} className={`project-card ${request.status}`}>
//                   <div className="project-header">
//                     <h3>{request.name}</h3>
//                     <span className="status">{request.status}</span>
//                   </div>
//                   <div className="project-details">
//                     <div className="detail">
//                       <label>Brands:</label>
//                       <span>{request.brands.join(', ')}</span>
//                     </div>
//                     {request.invitedBrands.length > 0 && (
//                       <div className="detail">
//                         <label>Pending Invites:</label>
//                         <span>{request.invitedBrands.join(', ')}</span>
//                       </div>
//                     )}
//                     <div className="detail">
//                       <label>Budget:</label>
//                       <span>${request.budget.toLocaleString()}</span>
//                     </div>
//                     <div className="detail">
//                       <label>Goals:</label>
//                       <span>{request.goals}</span>
//                     </div>
//                     <div className="detail">
//                       <label>Audience:</label>
//                       <span>{request.audience}</span>
//                     </div>
//                     {request.status === 'pending' && (
//                       <div className="invite-actions">
//                         <button
//                           className="btn btn-success"
//                           onClick={() => acceptInvitation(request.id)}
//                         >
//                           <Check size={14} /> Accept
//                         </button>
//                         <button
//                           className="btn btn-danger"
//                           onClick={() => rejectInvitation(request.id)}
//                         >
//                           <X size={14} /> Reject
//                         </button>
//                       </div>
//                     )}
//                     {request.conflicts.length > 0 && (
//                       <div className="conflicts">
//                         <label>Conflicts:</label>
//                         <ul>
//                           {request.conflicts.map((conflict, i) => (
//                             <li key={i}>
//                               <AlertCircle size={14} />
//                               <span>{conflict}</span>
//                               <button
//                                 className="btn btn-outline"
//                                 onClick={() => resolveConflict(request.id, i)}
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
//                     <a href={request.sheetUrl} className="btn btn-primary">
//                       <FileText size={14} /> Open Sheet
//                     </a>
//                     <button
//                       className="btn btn-outline"
//                       onClick={() => addBudgetConflict(request.id, 'Budget allocation needs adjustment')}
//                     >
//                       Flag Issue
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//         {activeTab === 'dashboard' && (
//           <div className="dashboard-container">
//             <div className="dashboard-header">
//               <h2>Performance Dashboard</h2>
//               <div className="filter-controls">
//                 <div className="time-range">
//                   <button
//                     className={timeRange === '7d' ? 'active' : ''}
//                     onClick={() => setTimeRange('7d')}
//                   >
//                     7 Days
//                   </button>
//                   <button
//                     className={timeRange === '30d' ? 'active' : ''}
//                     onClick={() => setTimeRange('30d')}
//                   >
//                     30 Days
//                   </button>
//                   <button
//                     className={timeRange === '90d' ? 'active' : ''}
//                     onClick={() => setTimeRange('90d')}
//                   >
//                     90 Days
//                   </button>
//                 </div>
//                 <button className="btn btn-secondary">
//                   <Download size={16} /> Export Report
//                 </button>
//               </div>
//             </div>
//             {loadingAnalytics ? (
//               <div className="loading-container">
//                 <div className="loading-spinner"></div>
//                 <p>Loading analytics data...</p>
//               </div>
//             ) : (
//               <>
//                 <div className="metrics-overview">
//                   <div className="metric-card">
//                     <div className="metric-header">
//                       <BarChart2 size={18} />
//                       <h4>Impressions</h4>
//                     </div>
//                     <div className="metric-value">{analyticsData.impressions.toLocaleString()}</div>
//                     <div className="metric-change positive">+12%</div>
//                   </div>
//                   <div className="metric-card">
//                     <div className="metric-header">
//                       <Heart size={18} />
//                       <h4>Engagements</h4>
//                     </div>
//                     <div className="metric-value">{analyticsData.engagements.toLocaleString()}</div>
//                     <div className="metric-change positive">+7%</div>
//                   </div>
//                   <div className="metric-card">
//                     <div className="metric-header">
//                       <Users size={18} />
//                       <h4>Followers</h4>
//                     </div>
//                     <div className="metric-value">{analyticsData.followers.toLocaleString()}</div>
//                     <div className="metric-change positive">+3%</div>
//                   </div>
//                   <div className="metric-card">
//                     <div className="metric-header">
//                       <DollarSign size={18} />
//                       <h4>Click Rate</h4>
//                     </div>
//                     <div className="metric-value">{analyticsData.clickRate}%</div>
//                     <div className="metric-change negative">-0.2%</div>
//                   </div>
//                 </div>
//                 <div className="charts-container">
//                   <PerformanceLineChart
//                     data={analyticsData.performanceTime}
//                     dateRange={dateRange}
//                     setDateRange={setDateRange}
//                   />
//                   <CampaignBarChart data={analyticsData.campaignComparison} />
//                   <div className="chart-container">
//                     <div className="chart-header">
//                       <h4>Audience Demographics</h4>
//                       <button className="btn btn-text">
//                         <Download size={16} /> Export
//                       </button>
//                     </div>
//                     <div className="demographics-grid">
//                       <AgePieChart data={analyticsData.ageDistribution} />
//                     </div>
//                   </div>
//                   <EngagementHeatmap data={analyticsData.engagementHeatmap} />
//                 </div>
//                 <div className="top-performing">
//                   <h3>Top Performing Posts</h3>
//                   <div className="posts-list">
//                     {posts.slice(0, 3).map((post, i) => (
//                       <div key={post.id} className="performance-post">
//                         <img src={post.image} alt="Post" />
//                         <div className="post-metrics">
//                           <div>Impressions: {post.impressions.toLocaleString()}</div>
//                           <div>Engagements: {(post.likes + post.comments.length).toLocaleString()}</div>
//                           <div>Engagement Rate: {post.engagementRate}%</div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </>
//             )}
//           </div>
//         )}
//         {activeTab === 'gamification' && (
//           <div className="gamification-container">
//             <div className="score-card">
//               <h3>Your Current Score</h3>
//               <div className="score-value">1,450</div>
//               <div className="score-level">Gold Tier</div>
//               <div className="progress-bar">
//                 <div className="progress" style={{ width: '65%' }}></div>
//               </div>
//               <div className="progress-text">650 points to Platinum</div>
//             </div>
//             <div className="badges-container">
//               <h3>Available Badges</h3>
//               <div className="badges-list">
//                 {gamificationData.map((badge, i) => (
//                   <div key={i} className="badge-card">
//                     <img src={badge.image} alt={badge.title} />
//                     <h4>{badge.title}</h4>
//                     <div className="badge-progress">
//                       <div className="progress-bar">
//                         <div className="progress" style={{ width: `${badge.progress}%` }}></div>
//                       </div>
//                       <span>{badge.progress}/{badge.target}</span>
//                     </div>
//                     <div className="badge-reward">Reward: {badge.reward}</div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <div className="leaderboard">
//               <h3>Leaderboard</h3>
//               <div className="leaderboard-list">
//                 {[...Array(5)].map((_, i) => (
//                   <div key={i} className="leaderboard-item">
//                     <span className="rank">{i + 1}</span>
//                     <img src={`https://source.unsplash.com/random/40x40/?user${i}`} alt="User" />
//                     <span className="username">user_{i + 1}</span>
//                     <span className="score">{(5 - i) * 1000} pts</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}
//         {activeTab === 'ads' && (
//           <div className="ads-container">
//             <div className="ads-header">
//               <h2>Brand Advertisement Campaigns</h2>
//               <p>View and engage with brand advertisements to earn rewards</p>
//             </div>
//             <div className="filter-controls enhanced">
//               <div className="search-bar">
//                 <Search className="search-icon" size={18} />
//                 <input
//                   type="text"
//                   placeholder="Search ads..."
//                   value={adFilters.searchQuery}
//                   onChange={(e) => setAdFilters({ ...adFilters, searchQuery: e.target.value })}
//                 />
//               </div>
//               <div className="filter-panel">
//                 <div className="filter-group">
//                   <label>Audience</label>
//                   <div className="checkbox-group">
//                     {['tech', 'fashion', 'young_adults', 'women'].map(audience => (
//                       <label key={audience}>
//                         <input
//                           type="checkbox"
//                           checked={adFilters.audience.includes(audience)}
//                           onChange={() => {
//                             if (adFilters.audience.includes(audience)) {
//                               setAdFilters({
//                                 ...adFilters,
//                                 audience: adFilters.audience.filter(a => a !== audience)
//                               });
//                             } else {
//                               setAdFilters({
//                                 ...adFilters,
//                                 audience: [...adFilters.audience, audience]
//                               });
//                             }
//                           }}
//                         />
//                         {audience.charAt(0).toUpperCase() + audience.slice(1)}
//                       </label>
//                     ))}
//                   </div>
//                 </div>
//                 <div className="filter-group">
//                   <label>Sort By</label>
//                   <select
//                     value={adFilters.sortBy}
//                     onChange={(e) => setAdFilters({ ...adFilters, sortBy: e.target.value })}
//                   >
//                     <option value="recent">Most Recent</option>
//                     <option value="views">Most Views</option>
//                     <option value="ctr">Highest CTR</option>
//                   </select>
//                 </div>
//                 <div className="filter-group">
//                   <label>Min CTR (%)</label>
//                   <input
//                     type="number"
//                     value={adFilters.minCTR}
//                     onChange={(e) => setAdFilters({ ...adFilters, minCTR: parseFloat(e.target.value) || 0 })}
//                   />
//                 </div>
//                 <div className="filter-group">
//                   <label>Min Views</label>
//                   <input
//                     type="number"
//                     value={adFilters.minViews}
//                     onChange={(e) => setAdFilters({ ...adFilters, minViews: parseInt(e.target.value) || 0 })}
//                   />
//                 </div>
//               </div>
//             </div>
//             <div className="ads-grid">
//               {brandAds.map(ad => (
//                 <Ad
//                   key={ad.id}
//                   ad={ad}
//                   newComments={newComments}
//                   handleLikeAd={(id) => {
//                     setBrandAds(brandAds.map(ad =>
//                       ad.id === id
//                         ? {
//                             ...ad,
//                             isLiked: !ad.isLiked,
//                             gamification: {
//                               ...ad.gamification,
//                               tasks: ad.gamification.tasks.map(task =>
//                                 task.action === 'like' ? { ...task, completed: !ad.isLiked } : task
//                               )
//                             }
//                           }
//                         : ad
//                     ));
//                   }}
//                   handleAddAdComment={(id) => {
//                     const commentText = newComments[id]?.trim();
//                     if (!commentText) return;
//                     setBrandAds(brandAds.map(ad =>
//                       ad.id === id
//                         ? {
//                             ...ad,
//                             comments: [
//                               ...ad.comments,
//                               {
//                                 id: ad.comments.length + 1,
//                                 username: currentUser.username,
//                                 text: commentText,
//                                 avatar: currentUser.avatar
//                               }
//                             ],
//                             gamification: {
//                               ...ad.gamification,
//                               tasks: ad.gamification.tasks.map(task =>
//                                 task.action === 'comment' ? { ...task, completed: true } : task
//                               )
//                             }
//                           }
//                         : ad
//                     ));
//                     setNewComments({ ...newComments, [id]: '' });
//                   }}
//                   handleShare={(id) => {
//                     setBrandAds(brandAds.map(ad =>
//                       ad.id === id
//                         ? {
//                             ...ad,
//                             gamification: {
//                               ...ad.gamification,
//                               tasks: ad.gamification.tasks.map(task =>
//                                 task.action === 'share'
//                                   ? {
//                                       ...task,
//                                       currentShares: (task.currentShares || 0) + 1,
//                                       completed: (task.currentShares || 0) + 1 >= (task.target || 1)
//                                     }
//                                   : task
//                               )
//                             }
//                           }
//                         : ad
//                     ));
//                     showNotification('Ad shared successfully!');
//                   }}
//                   setNewComments={setNewComments}
//                 />
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//       {showVideoModal && (
//         <div className="modal">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h3>Schedule Video Call</h3>
//               <button onClick={() => setShowVideoModal(false)}>×</button>
//             </div>
//             <div className="modal-body">
//               <div className="form-group">
//                 <label>Meeting Title</label>
//                 <input type="text" defaultValue={activeConversation ? `Discussion about ${activeConversation.name}` : 'Campaign Discussion'} />
//               </div>
//               <div className="form-row">
//                 <div className="form-group">
//                   <label>Date</label>
//                   <input type="date" />
//                 </div>
//                 <div className="form-group">
//                   <label>Time</label>
//                   <input type="time" />
//                 </div>
//               </div>
//             </div>
//             <div className="modal-actions">
//               <button className="btn btn-primary" onClick={() => { setShowVideoModal(false); showNotification('Meeting scheduled'); }}><Calendar size={16} /> Schedule Meeting</button>
//               <button className="btn btn-outline" onClick={() => setShowVideoModal(false)}>Cancel</button>
//             </div>
//           </div>
//         </div>
//       )}
//       {showAddParticipants && (
//         <div className="modal">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h3>Add Participants</h3>
//               <button onClick={() => setShowAddParticipants(false)}>×</button>
//             </div>
//             <div className="modal-body">
//               <div className="search-bar">
//                 <Search size={16} />
//                 <input type="text" placeholder="Search participants..." />
//               </div>
//               <div className="participants-list">
//                 {availableParticipants
//                   .filter(p => !activeConversation?.participants.includes(p.name))
//                   .map(participant => (
//                     <div key={participant.id} className="participant-item">
//                       <div className="participant-info">
//                         <div className="participant-avatar">{participant.name.charAt(0)}</div>
//                         <div className="participant-name">{participant.name}</div>
//                       </div>
//                       <button className="btn btn-outline" onClick={() => addParticipants([participant.name])}>Add</button>
//                     </div>
//                   ))}
//               </div>
//             </div>
//             <div className="modal-actions">
//               <button className="btn btn-primary" onClick={() => {
//                 const newParticipants = availableParticipants
//                   .filter(p => !activeConversation?.participants.includes(p.name))
//                   .map(p => p.name);
//                 addParticipants(newParticipants);
//               }}>Add All</button>
//               <button className="btn btn-outline" onClick={() => setShowAddParticipants(false)}>Done</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Influencer;
// import React, { useState, useEffect } from 'react';
// import {
//   Users, MessageSquare, GitMerge, Plus, Check, X, ChevronLeft, ChevronRight,
//   Heart, MoreHorizontal, Bookmark, Share2, Settings, Grid, List, Search,
//   Bell, FileText, Video, UserPlus, Edit, Trash2, Eye, ArrowLeft, Filter,
//   Smile, Paperclip, Mic, Calendar, Award, Mail, AlertCircle, Slack, Clipboard,
//   BarChart2, TrendingUp, Clock, DollarSign, Download
// } from 'lucide-react';
// import {
//   LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
//   PieChart, Pie, Cell, BarChart, Bar
// } from 'recharts';
// import "../Influencer.css";
// import SocialMedia from '../components/SocialMedia';

// const Influencer = () => {
//   // Main app state
//   const [activeTab, setActiveTab] = useState('social');
//   const [currentUser, setCurrentUser] = useState({
//     username: 'current_user',
//     fullName: 'Current User',
//     avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
//     bio: 'Digital creator | Photography enthusiast',
//     posts: 42,
//     followers: 1250,
//     following: 843,
//     isFollowing: false
//   });

//   // Posts data
//   const [posts, setPosts] = useState([
//     {
//       id: 1,
//       username: 'fashion_brand',
//       avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
//       image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
//       caption: 'Check out our new summer collection! #fashion #summer',
//       likes: 1243,
//       comments: [
//         { id: 1, username: 'user1', text: 'Love this collection!', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80' },
//         { id: 2, username: 'user2', text: 'Where can I buy these?', avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80' }
//       ],
//       time: '2 HOURS AGO',
//       sponsored: false,
//       impressions: 12500,
//       engagementRate: 4.2,
//       isLiked: false,
//       showComments: false,
//       isSaved: false
//     }
//   ]);
//   const [userPosts, setUserPosts] = useState(posts.filter(p => p.username === currentUser.username));
//   const [stories, setStories] = useState([
//     {
//       id: 1,
//       username: 'user1',
//       avatar: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e',
//       image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e',
//       time: '1h ago',
//       comments: []
//     }
//   ]);

//   // Brand ads data
//   const [brandAds, setBrandAds] = useState([
//     {
//       id: 1,
//       brandName: 'TechTrend',
//       brandLogo: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
//       adImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
//       caption: 'Discover our latest gadget! #tech',
//       views: 15000,
//       clicks: 750,
//       ctr: 5.0,
//       postedDate: '2025-05-15',
//       targetAudience: ['tech', 'young_adults'],
//       status: 'active',
//       isLiked: false,
//       comments: [
//         { id: 1, username: 'user1', text: 'Looks amazing!', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80' }
//       ],
//       gamification: {
//         hasReward: true,
//         totalPoints: 50,
//         tasks: [
//           { action: 'like', points: 10, completed: false },
//           { action: 'comment', points: 20, completed: false },
//           { action: 'share', points: 20, currentShares: 0, target: 1, completed: false }
//         ]
//       }
//     }
//   ]);

//   // Messages data
//   const [messages, setMessages] = useState([
//     {
//       id: 1,
//       username: 'user1',
//       avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
//       lastMessage: 'Hey, how are you doing?',
//       time: '2h ago',
//       unread: true,
//       messages: [
//         { id: 1, sender: 'user1', text: 'Hey there!', time: '10:30 AM' },
//         { id: 2, sender: 'current_user', text: 'Hi! How are you?', time: '10:32 AM' },
//         { id: 3, sender: 'user1', text: 'Hey, how are you doing?', time: '2:15 PM' }
//       ]
//     },
//     {
//       id: 2,
//       username: 'brand_manager',
//       avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
//       lastMessage: 'Can we discuss the campaign details?',
//       time: '1h ago',
//       unread: false,
//       messages: [
//         { id: 1, sender: 'brand_manager', text: 'Hi! Excited about the collab?', time: '9:00 AM' },
//         { id: 2, sender: 'current_user', text: 'Absolutely, lets discuss!', time: '9:05 AM' }
//       ]
//     }
//   ]);

//   // Campaign data
//   const [campaigns, setCampaigns] = useState([
//     {
//       id: 1,
//       name: 'Summer Fashion Collab',
//       status: 'active',
//       brands: ['Nike', 'Adidas'],
//       influencers: ['Alex Johnson', 'Taylor Smith'],
//       budget: 50000,
//       goals: 'Increase brand awareness by 20%',
//       audience: 'Age 18-35, fashion-conscious',
//       startDate: '2023-06-01',
//       endDate: '2023-08-31',
//       objective: 'Brand Awareness',
//       impressions: 125000,
//       clicks: 6800,
//       ctr: '5.4%',
//       conversions: 342
//     },
//     {
//       id: 2,
//       name: 'Tech Bundle Promo',
//       status: 'pending',
//       brands: ['Samsung'],
//       influencers: ['Tech Guru'],
//       budget: 35000,
//       goals: 'Promote new tech bundle',
//       audience: 'Tech enthusiasts 25-45',
//       startDate: '2023-07-01',
//       endDate: '2023-09-30',
//       objective: 'Product Sales',
//       impressions: 0,
//       clicks: 0,
//       ctr: '0%',
//       conversions: 0
//     },
//     {
//       id: 3,
//       name: 'Winter Sports Campaign',
//       status: 'completed',
//       brands: ['Burton', 'Rossignol'],
//       influencers: ['Snow Pro'],
//       budget: 60000,
//       goals: 'Drive winter gear sales',
//       audience: 'Sports enthusiasts 18-40',
//       startDate: '2022-12-01',
//       endDate: '2023-02-28',
//       objective: 'Sales',
//       impressions: 200000,
//       clicks: 10000,
//       ctr: '5.0%',
//       conversions: 500
//     }
//   ]);

//   // Brand requests data
//   const [brandRequests, setBrandRequests] = useState([
//     {
//       id: 1,
//       name: 'Summer Fashion Collab',
//       status: 'pending',
//       brands: ['Nike'],
//       invitedBrands: ['Adidas'],
//       sheetUrl: '#',
//       budget: 50000,
//       goals: 'Increase brand awareness by 20%',
//       audience: 'Age 18-35, fashion-conscious',
//       conflicts: []
//     },
//     {
//       id: 2,
//       name: 'Tech Bundle Promo',
//       status: 'pending',
//       brands: ['Samsung'],
//       invitedBrands: [],
//       sheetUrl: '#',
//       budget: 35000,
//       goals: 'Promote new tech bundle',
//       audience: 'Tech enthusiasts 25-45',
//       conflicts: []
//     }
//   ]);

//   // Conversation data
//   const [conversations, setConversations] = useState([
//     {
//       id: '1',
//       name: 'Summer Fashion Group',
//       participants: ['Nike', 'Adidas', 'Alex Johnson', 'Taylor Smith'],
//       isGroup: true,
//       lastMessage: 'Alex: Here are the latest creatives',
//       timestamp: new Date(Date.now() - 3600000),
//       unread: 3
//     },
//     {
//       id: '2',
//       name: 'Tech Bundle Discussion',
//       participants: ['Samsung', 'Tech Guru'],
//       isGroup: true,
//       lastMessage: 'Samsung: Can we review the timeline?',
//       timestamp: new Date(Date.now() - 7200000),
//       unread: 1
//     },
//     {
//       id: '3',
//       name: 'user1',
//       participants: ['user1'],
//       isGroup: false,
//       lastMessage: 'Hey, how are you doing?',
//       timestamp: new Date(Date.now() - 7200000),
//       unread: 2
//     }
//   ]);

//   // Analytics state
//   const [activeConversation, setActiveConversation] = useState(null);
//   const [newMessage, setNewMessage] = useState('');
//   const [notification, setNotification] = useState(null);
//   const [showVideoModal, setShowVideoModal] = useState(false);
//   const [showAddParticipants, setShowAddParticipants] = useState(false);
//   const [availableParticipants] = useState([
//     { id: '1', name: 'Nike', type: 'brand' },
//     { id: '2', name: 'Adidas', type: 'brand' },
//     { id: '3', name: 'Samsung', type: 'brand' },
//     { id: '4', name: 'Alex Johnson', type: 'influencer' },
//     { id: '5', name: 'Taylor Smith', type: 'influencer' },
//     { id: '6', name: 'Tech Guru', type: 'influencer' }
//   ]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [dateRange, setDateRange] = useState('last30days');
//   const [selectedCampaign, setSelectedCampaign] = useState(null);
//   const [timeRange, setTimeRange] = useState('7d');
//   const [analyticsData, setAnalyticsData] = useState({
//     impressions: 25000,
//     engagements: 1500,
//     followers: 1250,
//     clickRate: 3.5,
//     performanceTime: [],
//     ageDistribution: [],
//     campaignComparison: [],
//     engagementHeatmap: {
//       xLabels: [],
//       yLabels: [],
//       data: []
//     }
//   });
//   const [loadingAnalytics, setLoadingAnalytics] = useState(true);
//   const [gamificationData] = useState([
//     {
//       title: 'Engager',
//       image: 'https://source.unsplash.com/random/100x100/?badge',
//       progress: 80,
//       target: 100,
//       reward: '50 points'
//     }
//   ]);
//   const [newComments, setNewComments] = useState({});
//   const [adFilters, setAdFilters] = useState({
//     searchQuery: '',
//     audience: [],
//     sortBy: 'recent',
//     minCTR: 0,
//     minViews: 0
//   });

//   const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

//   // Fetch analytics data (mock for now, ready for API)
//   useEffect(() => {
//     const fetchAnalyticsData = async () => {
//       setLoadingAnalytics(true);
//       try {
//         // Simulate API call
//         await new Promise(resolve => setTimeout(resolve, 1000));

//         // Derive performance time data from campaigns
//         const performanceTime = campaigns
//           .filter(c => c.status === 'active' || c.status === 'completed')
//           .map((c, i) => ({
//             date: `Jun ${i + 1}`,
//             impressions: c.impressions || 0,
//             clicks: c.clicks || 0,
//             conversions: c.conversions || 0
//           }));

//         // Mock age distribution based on campaign audience
//         const ageDistribution = [
//           { name: '18-24', value: 25 },
//           { name: '25-34', value: 45 },
//           { name: '35-44', value: 20 },
//           { name: '45+', value: 10 }
//         ];

//         // Campaign comparison data
//         const campaignComparison = campaigns.map(c => ({
//           name: c.name,
//           budget: c.budget,
//           impressions: c.impressions
//         }));

//         // Engagement heatmap for posts
//         const engagementHeatmap = {
//           xLabels: ['0%', '25%', '50%', '75%', '100%'],
//           yLabels: ['Header', 'Image', 'Caption', 'Comments', 'Footer'],
//           data: [
//             [80, 60, 30, 10, 5],
//             [40, 70, 50, 30, 20],
//             [20, 40, 60, 40, 30],
//             [10, 30, 50, 70, 90],
//             [5, 10, 20, 30, 40]
//           ]
//         };

//         setAnalyticsData(prev => ({
//           ...prev,
//           performanceTime,
//           ageDistribution,
//           campaignComparison,
//           engagementHeatmap
//         }));
//       } catch (error) {
//         console.error('Error fetching analytics data:', error);
//         showNotification('Failed to load analytics data');
//       } finally {
//         setLoadingAnalytics(false);
//       }
//     };

//     fetchAnalyticsData();
//   }, [campaigns, dateRange]);

//   // Handlers
//   const startConversation = (conversation) => {
//     setActiveConversation(conversation);
//     const convMessages = messages.find(msg => msg.username === conversation.name.toLowerCase().replace(' ', '_'))?.messages || [];
//     setMessages(convMessages.length > 0 ? convMessages : [
//       { id: 1, sender: conversation.name.toLowerCase().replace(' ', '_'), text: 'Hi there!', timestamp: new Date(Date.now() - 3600000), status: 'delivered' }
//     ]);
//     setConversations(prev => prev.map(conv =>
//       conv.id === conversation.id ? { ...conv, unread: 0 } : conv
//     ));
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
//     setConversations(prev => prev.map(conv =>
//       conv.id === activeConversation.id
//         ? { ...conv, lastMessage: `You: ${newMessage}`, timestamp: new Date() }
//         : conv
//     ));
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

//   const addParticipants = (participantNames) => {
//     if (!activeConversation) return;
//     const updatedConversation = {
//       ...activeConversation,
//       participants: [...new Set([...activeConversation.participants, ...participantNames])]
//     };
//     setActiveConversation(updatedConversation);
//     setConversations(prev => prev.map(conv =>
//       conv.id === activeConversation.id ? updatedConversation : conv
//     ));
//     showNotification(`${participantNames.length} participants added`);
//     setShowAddParticipants(false);
//   };

//   const acceptInvitation = (requestId) => {
//     setBrandRequests(prev => prev.map(req => {
//       if (req.id === requestId) {
//         const newCampaign = {
//           id: Math.max(...campaigns.map(c => c.id)) + 1,
//           name: req.name,
//           status: 'active',
//           brands: [...req.brands, ...req.invitedBrands],
//           influencers: [currentUser.username],
//           budget: req.budget,
//           goals: req.goals,
//           audience: req.audience,
//           startDate: new Date().toISOString().split('T')[0],
//           endDate: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
//           objective: 'Brand Awareness',
//           impressions: 0,
//           clicks: 0,
//           ctr: '0%',
//           conversions: 0
//         };
//         setCampaigns(prev => [...prev, newCampaign]);
//         setConversations(prev => [{
//           id: `${newCampaign.id}-group`,
//           name: `${newCampaign.name} Group`,
//           participants: [...newCampaign.brands, ...newCampaign.influencers],
//           isGroup: true,
//           lastMessage: 'Group created',
//           timestamp: new Date(),
//           unread: 0
//         }, ...prev]);
//         return { ...req, status: 'accepted', invitedBrands: [] };
//       }
//       return req;
//     }));
//     showNotification('Collaboration accepted! Shared workspace created');
//   };

//   const rejectInvitation = (requestId) => {
//     setBrandRequests(prev => prev.map(req =>
//       req.id === requestId ? { ...req, status: 'rejected', invitedBrands: [] } : req
//     ));
//     showNotification('Collaboration rejected');
//   };

//   const addBudgetConflict = (requestId, conflict) => {
//     setBrandRequests(prev => prev.map(req =>
//       req.id === requestId ? { ...req, conflicts: [...req.conflicts, conflict] } : req
//     ));
//   };

//   const resolveConflict = (requestId, conflictIndex) => {
//     setBrandRequests(prev => prev.map(req =>
//       req.id === requestId
//         ? { ...req, conflicts: req.conflicts.filter((_, i) => i !== conflictIndex) }
//         : req
//     ));
//   };

//   const handleAddComment = (postId) => {
//     const commentText = newComments[postId]?.trim();
//     if (!commentText) return;

//     setPosts(posts.map(post =>
//       post.id === postId
//         ? {
//             ...post,
//             comments: [
//               ...post.comments,
//               {
//                 id: post.comments.length + 1,
//                 username: currentUser.username,
//                 text: commentText,
//                 avatar: currentUser.avatar
//               }
//             ]
//           }
//         : post
//     ));
//     setNewComments({ ...newComments, [postId]: '' });
//   };

//   const showNotification = (message) => {
//     setNotification(message);
//     setTimeout(() => setNotification(null), 3000);
//   };

//   const filteredConversations = conversations.filter(conv =>
//     conv.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   // Chart Components
//   const PerformanceLineChart = ({ data, dateRange, setDateRange }) => (
//     <div className="chart-container">
//       <div className="chart-header">
//         <h4>Campaign Performance Over Time</h4>
//         <select
//           className="chart-filter"
//           value={dateRange}
//           onChange={(e) => setDateRange(e.target.value)}
//         >
//           <option value="last7days">Last 7 Days</option>
//           <option value="last30days">Last 30 Days</option>
//           <option value="last90days">Last 90 Days</option>
//         </select>
//       </div>
//       <ResponsiveContainer width="100%" height={300}>
//         <LineChart data={data}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="date" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Line type="monotone" dataKey="impressions" stroke="#8884d8" name="Impressions" strokeWidth={2} />
//           <Line type="monotone" dataKey="clicks" stroke="#82ca9d" name="Clicks" strokeWidth={2} />
//           <Line type="monotone" dataKey="conversions" stroke="#ffc658" name="Conversions" strokeWidth={2} />
//         </LineChart>
//       </ResponsiveContainer>
//     </div>
//   );

//   const AgePieChart = ({ data }) => (
//     <div className="demo-chart">
//       <h5>Age Distribution</h5>
//       <ResponsiveContainer width="100%" height={250}>
//         <PieChart>
//           <Pie
//             data={data}
//             cx="50%"
//             cy="50%"
//             outerRadius={80}
//             innerRadius={40}
//             paddingAngle={5}
//             dataKey="value"
//             label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
//             labelLine={false}
//           >
//             {data.map((_, index) => (
//               <Cell
//                 key={`cell-${index}`}
//                 fill={COLORS[index % COLORS.length]}
//                 stroke="#fff"
//                 strokeWidth={1}
//               />
//             ))}
//           </Pie>
//           <Tooltip
//             formatter={(value) => [`${value}%`, 'Percentage']}
//             contentStyle={{
//               backgroundColor: '#fff',
//               border: '1px solid #ddd',
//               borderRadius: '4px',
//             }}
//           />
//           <Legend
//             layout="horizontal"
//             verticalAlign="bottom"
//             align="center"
//             wrapperStyle={{ paddingTop: '20px' }}
//           />
//         </PieChart>
//       </ResponsiveContainer>
//     </div>
//   );

//   const CampaignBarChart = ({ data }) => (
//     <div className="chart-container">
//       <h4>Campaign Budget vs. Impressions</h4>
//       <ResponsiveContainer width="100%" height={300}>
//         <BarChart data={data}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="name" />
//           <YAxis />
//           <Tooltip />
//           <Bar dataKey="budget" fill="#8884d8" name="Budget ($)" />
//           <Bar dataKey="impressions" fill="#82ca9d" name="Impressions" />
//         </BarChart>
//       </ResponsiveContainer>
//     </div>
//   );

//   const EngagementHeatmap = ({ data }) => (
//     <div className="heatmap-container">
//       <h5>Post Interaction Heatmap</h5>
//       <div className="heatmap-grid">
//         {data.yLabels.map((rowLabel, rowIndex) => (
//           <React.Fragment key={rowLabel}>
//             <div className="heatmap-row-label">{rowLabel}</div>
//             {data.xLabels.map((colLabel, colIndex) => (
//               <div
//                 key={`${rowLabel}-${colLabel}`}
//                 className="heatmap-cell"
//                 style={{
//                   backgroundColor: `rgba(0, 136, 254, ${data.data[rowIndex][colIndex] / 100})`,
//                 }}
//               >
//                 {data.data[rowIndex][colIndex]}%
//               </div>
//             ))}
//           </React.Fragment>
//         ))}
//         <div className="heatmap-corner"></div>
//         {data.xLabels.map((label) => (
//           <div key={`x-${label}`} className="heatmap-col-label">
//             {label}
//           </div>
//         ))}
//       </div>
//     </div>
//   );

//   const Ad = ({ ad, newComments, handleLikeAd, handleAddAdComment, handleShare, setNewComments }) => (
//     <div className="ad-card">
//       <div className="ad-image-container">
//         <img src={ad.adImage} alt={ad.brandName} className="ad-image" />
//         {ad.gamification?.hasReward && (
//           <div className="gamification-badge">
//             <Award size={16} color="#333" />
//             <div className="gamification-tooltip">
//               <h4>Earn {ad.gamification.totalPoints} points</h4>
//               {ad.gamification.tasks.map((task, i) => (
//                 <div
//                   key={i}
//                   className={`gamification-task ${task.completed ? 'completed' : ''}`}
//                 >
//                   {task.completed ? '✓ ' : ''}
//                   {task.action === 'like' && 'Like this ad: '}
//                   {task.action === 'comment' && 'Comment on this ad: '}
//                   {task.action === 'share' && `Share ${task.currentShares || 0}/${task.target || 1} times: `}
//                   {task.points} points
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//       <div className="ad-info">
//         <div className="ad-header">
//           <img src={ad.brandLogo} alt={ad.brandName} className="brand-logo" />
//           <span className="brand-name">{ad.brandName}</span>
//         </div>
//         <p className="ad-caption">{ad.caption}</p>
//         <div className="ad-stats">
//           <div className="stat-item">
//             <span className="stat-label">Views</span>
//             <span className="stat-value">{ad.views.toLocaleString()}</span>
//           </div>
//           <div className="stat-item">
//             <span className="stat-label">Clicks</span>
//             <span className="stat-value">{ad.clicks.toLocaleString()}</span>
//           </div>
//           <div className="stat-item">
//             <span className="stat-label">CTR</span>
//             <span className="stat-value">{ad.ctr}%</span>
//           </div>
//           <div className="stat-item">
//             <span className="stat-label">Posted</span>
//             <span className="stat-value">{ad.postedDate}</span>
//           </div>
//         </div>
//         <div className="ad-actions">
//           <button
//             className="action-button like-button"
//             onClick={() => handleLikeAd(ad.id)}
//           >
//             <Heart
//               size={18}
//               fill={ad.isLiked ? 'currentColor' : 'none'}
//             />
//             Like
//           </button>
//           <button
//             className="action-button comment-button"
//             onClick={() => {
//               document.getElementId(`comment-input-${ad.id}`)?.focus();
//             }}
//           >
//             <MessageSquare size={18} />
//             Comment
//           </button>
//           <button
//             className="action-button share-button"
//             onClick={() => handleShare(ad.id)}
//           >
//             <Share2 size={18} />
//             Share
//           </button>
//         </div>
//         {ad.comments.length > 0 && (
//           <div className="comments-section">
//             {ad.comments.slice(0, 2).map(comment => (
//               <div key={comment.id} className="comment">
//                 <img
//                   src={comment.avatar}
//                   alt={comment.username}
//                   className="comment-avatar"
//                 />
//                 <div className="comment-content">
//                   <span className="comment-username">{comment.username}</span>
//                   {comment.text}
//                 </div>
//               </div>
//             ))}
//             {ad.comments.length > 2 && (
//               <div style={{ color: '#666', fontSize: '12px' }}>
//                 View all {ad.comments.length} comments
//               </div>
//             )}
//           </div>
//         )}
//         <div className="add-comment">
//           <input
//             id={`comment-input-${ad.id}`}
//             type="text"
//             className="comment-input"
//             placeholder="Add a comment..."
//             value={newComments[ad.id] || ''}
//             onChange={(e) => setNewComments({
//               ...newComments,
//               [ad.id]: e.target.value
//             })}
//           />
//           <button
//             className="post-comment-button"
//             onClick={() => handleAddAdComment(ad.id)}
//             disabled={!newComments[ad.id]?.trim()}
//           >
//             Post
//           </button>
//         </div>
//       </div>
//     </div>
//   );

//   const CampaignDetail = ({ campaign, setSelectedCampaign }) => (
//     <div className="campaign-detail">
//       <div className="detail-header">
//         <button
//           className="back-button"
//           onClick={() => setSelectedCampaign(null)}
//           aria-label="Go back to campaign list"
//           title="Back to campaigns"
//         >
//           <ArrowLeft size={20} />
//           <span className="sr-only">Back</span>
//         </button>
//         <h2>Campaign Details</h2>
//       </div>
//       <div className="detail-grid">
//         <div>
//           <div className="detail-section">
//             <h3>{campaign.name}</h3>
//             <div className="detail-properties">
//               <div className="detail-property">
//                 <p className="property-label">Status</p>
//                 <p className="property-value">{campaign.status}</p>
//               </div>
//               <div className="detail-property">
//                 <p className="property-label">Objective</p>
//                 <p className="property-value">{campaign.objective}</p>
//               </div>
//               <div className="detail-property">
//                 <p className="property-label">Budget</p>
//                 <p className="property-value">${campaign.budget.toLocaleString()}</p>
//               </div>
//               <div className="detail-property">
//                 <p className="property-label">Duration</p>
//                 <p className="property-value">{campaign.startDate} - {campaign.endDate}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="performance-metrics">
//           <h4>Performance Metrics</h4>
//           <div className="metrics-grid small">
//             <div className="metric">
//               <p className="metric-label">Impressions</p>
//               <p className="metric-value">{campaign.impressions?.toLocaleString() || "0"}</p>
//             </div>
//             <div className="metric">
//               <p className="metric-label">Clicks</p>
//               <p className="metric-value">{campaign.clicks?.toLocaleString() || "0"}</p>
//             </div>
//             <div className="metric">
//               <p className="metric-label">CTR</p>
//               <p className="metric-value">{campaign.ctr || "0%"}</p>
//             </div>
//             <div className="metric">
//               <p className="metric-label">Conversions</p>
//               <p className="metric-value">{campaign.conversions?.toLocaleString() || "0"}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <div className="smartsheet-collab-container">
//       {notification && (
//         <div className="notification">
//           <Bell size={16} />
//           <span>{notification}</span>
//           <button onClick={() => setNotification(null)}>×</button>
//         </div>
//       )}
//       <div className="tabs">
//         <button className={`tab ${activeTab === 'social' ? 'active' : ''}`} onClick={() => setActiveTab('social')}>
//           <Users size={16} /> Social
//         </button>
//         <button className={`tab ${activeTab === 'ads' ? 'active' : ''}`} onClick={() => setActiveTab('ads')}>
//           Brand Ads
//         </button>
//         <button className={`tab ${activeTab === 'campaigns' ? 'active' : ''}`} onClick={() => setActiveTab('campaigns')}>
//           <GitMerge size={16} /> Campaigns
//         </button>
//         <button className={`tab ${activeTab === 'messages' ? 'active' : ''}`} onClick={() => setActiveTab('messages')}>
//           <MessageSquare size={16} /> Messages
//         </button>
//         <button className={`tab ${activeTab === 'collaboration' ? 'active' : ''}`} onClick={() => setActiveTab('collaboration')}>
//           <Mail size={16} /> Collaboration
//         </button>
//         <button className={`tab ${activeTab === 'dashboard' ? 'active' : ''}`} onClick={() => setActiveTab('dashboard')}>
//           Analytics Dashboard
//         </button>
//         <button className={`tab ${activeTab === 'gamification' ? 'active' : ''}`} onClick={() => setActiveTab('gamification')}>
//           Gamification
//         </button>
//       </div>
//       <div className="tab-content">
//         {activeTab === 'social' && (
//           <SocialMedia
//             currentUser={currentUser}
//             setCurrentUser={setCurrentUser}
//             posts={posts}
//             setPosts={setPosts}
//             stories={stories}
//             messages={messages}
//             userPosts={userPosts}
//             setUserPosts={setUserPosts}
//           />
//         )}
//         {activeTab === 'campaigns' && (
//           <div className="campaigns-panel">
//             {selectedCampaign ? (
//               <CampaignDetail
//                 campaign={selectedCampaign}
//                 setSelectedCampaign={setSelectedCampaign}
//               />
//             ) : (
//               <>
//                 <div className="campaigns-header">
//                   <h2>Campaign Management</h2>
//                 </div>
//                 <div className="campaigns-table-container">
//                   <div className="table-controls">
//                     <div className="search-container">
//                       <Search size={16} className="search-icon" />
//                       <input
//                         type="text"
//                         className="search-input"
//                         placeholder="Search campaigns..."
//                         value={searchQuery}
//                         onChange={(e) => setSearchQuery(e.target.value)}
//                       />
//                     </div>
//                     <div className="filter-controls">
//                       <select className="filter-select" value={dateRange} onChange={(e) => setDateRange(e.target.value)}>
//                         <option value="last7days">Last 7 days</option>
//                         <option value="last30days">Last 30 days</option>
//                         <option value="last90days">Last 90 days</option>
//                       </select>
//                       <button className="btn btn-secondary"><Filter size={16} /> Filters</button>
//                     </div>
//                   </div>
//                   <div className="table-wrapper">
//                     <table className="data-table">
//                       <thead>
//                         <tr>
//                           <th>Campaign Name</th>
//                           <th>Status</th>
//                           <th>Objective</th>
//                           <th>Budget</th>
//                           <th>Duration</th>
//                           <th className="text-right">Actions</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {campaigns
//                           .filter(campaign =>
//                             campaign.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//                             campaign.status.toLowerCase().includes(searchQuery.toLowerCase()) ||
//                             campaign.objective.toLowerCase().includes(searchQuery.toLowerCase()) ||
//                             campaign.brands.join(', ').toLowerCase().includes(searchQuery.toLowerCase())
//                           )
//                           .map((campaign) => (
//                             <tr key={campaign.id}>
//                               <td><div className="campaign-name" onClick={() => setSelectedCampaign(campaign)}>{campaign.name}</div></td>
//                               <td><span className={`status-badge ${campaign.status.toLowerCase()}`}>{campaign.status}</span></td>
//                               <td>{campaign.objective}</td>
//                               <td>${campaign.budget.toLocaleString()}</td>
//                               <td>{campaign.startDate} to {campaign.endDate}</td>
//                               <td className="action-buttons">
//                                 <button onClick={() => setSelectedCampaign(campaign)}><Eye size={18} /></button>
//                               </td>
//                             </tr>
//                           ))}
//                       </tbody>
//                     </table>
//                   </div>
//                 </div>
//               </>
//             )}
//           </div>
//         )}
//         {activeTab === 'messages' && (
//           <div className="communication-panel">
//             <div className="chat-container">
//               <div className={`conversation-sidebar ${activeConversation ? 'hidden' : ''}`}>
//                 <div className="sidebar-header">
//                   <h3>Messages</h3>
//                   <div className="search-bar">
//                     <Search size={16} />
//                     <input
//                       type="text"
//                       placeholder="Search conversations..."
//                       value={searchQuery}
//                       onChange={(e) => setSearchQuery(e.target.value)}
//                     />
//                   </div>
//                 </div>
//                 <div className="conversation-list">
//                   {filteredConversations.map(conversation => (
//                     <div
//                       key={conversation.id}
//                       className={`conversation-item ${activeConversation?.id === conversation.id ? 'active' : ''}`}
//                       onClick={() => startConversation(conversation)}
//                     >
//                       <div className="conversation-avatar">{conversation.name.charAt(0)}</div>
//                       <div className="conversation-details">
//                         <div className="conversation-name">{conversation.name}</div>
//                         <div className="conversation-preview">{conversation.lastMessage}</div>
//                       </div>
//                       {conversation.unread > 0 && (
//                         <span className="unread-count">{conversation.unread}</span>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//               {activeConversation && (
//                 <div className="chat-area">
//                   <div className="chat-header">
//                     <button
//                       className="back-button"
//                       onClick={() => setActiveConversation(null)}
//                       aria-label="Go back to conversation list"
//                       title="Back to conversations"
//                     >
//                       <ArrowLeft size={20} />
//                       <span className="sr-only">Back</span>
//                     </button>
//                     <div className="chat-info">
//                       <div className="chat-title">{activeConversation.name}</div>
//                     </div>
//                     <div className="chat-actions">
//                       <button className="btn-icon" onClick={scheduleVideoCall}><Video size={18} /></button>
//                       {activeConversation.isGroup && (
//                         <button className="btn-icon" onClick={() => setShowAddParticipants(true)}><UserPlus size={18} /></button>
//                       )}
//                     </div>
//                   </div>
//                   <div className="message-list">
//                     {messages.map(message => (
//                       <div key={message.id} className={`message ${message.sender === 'current_user' ? 'sent' : 'received'}`}>
//                         <p>{message.text}</p>
//                         <span className="time">{message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
//                       </div>
//                     ))}
//                   </div>
//                   <div className="message-input-area">
//                     <input
//                       type="text"
//                       value={newMessage}
//                       onChange={(e) => setNewMessage(e.target.value)}
//                       placeholder="Type a message..."
//                       onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
//                     />
//                     <button className="btn-icon"><Smile size={20} /></button>
//                     <button className="btn-icon"><Paperclip size={20} /></button>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         )}
//         {activeTab === 'collaboration' && (
//           <div className="collaboration-panel">
//             <div className="project-list">
//               <h2>Brand Collaboration Requests</h2>
//               {brandRequests.map(request => (
//                 <div key={request.id} className={`project-card ${request.status}`}>
//                   <div className="project-header">
//                     <h3>{request.name}</h3>
//                     <span className="status">{request.status}</span>
//                   </div>
//                   <div className="project-details">
//                     <div className="detail">
//                       <label>Brands:</label>
//                       <span>{request.brands.join(', ')}</span>
//                     </div>
//                     {request.invitedBrands.length > 0 && (
//                       <div className="detail">
//                         <label>Pending Invites:</label>
//                         <span>{request.invitedBrands.join(', ')}</span>
//                       </div>
//                     )}
//                     <div className="detail">
//                       <label>Budget:</label>
//                       <span>${request.budget.toLocaleString()}</span>
//                     </div>
//                     <div className="detail">
//                       <label>Goals:</label>
//                       <span>{request.goals}</span>
//                     </div>
//                     <div className="detail">
//                       <label>Audience:</label>
//                       <span>{request.audience}</span>
//                     </div>
//                     {request.status === 'pending' && (
//                       <div className="invite-actions">
//                         <button
//                           className="btn btn-success"
//                           onClick={() => acceptInvitation(request.id)}
//                         >
//                           <Check size={14} /> Accept
//                         </button>
//                         <button
//                           className="btn btn-danger"
//                           onClick={() => rejectInvitation(request.id)}
//                         >
//                           <X size={14} /> Reject
//                         </button>
//                       </div>
//                     )}
//                     {request.conflicts.length > 0 && (
//                       <div className="conflicts">
//                         <label>Conflicts:</label>
//                         <ul>
//                           {request.conflicts.map((conflict, i) => (
//                             <li key={i}>
//                               <AlertCircle size={14} />
//                               <span>{conflict}</span>
//                               <button
//                                 className="btn btn-outline"
//                                 onClick={() => resolveConflict(request.id, i)}
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
//                     <a href={request.sheetUrl} className="btn btn-primary">
//                       <FileText size={14} /> Open Sheet
//                     </a>
//                     <button
//                       className="btn btn-outline"
//                       onClick={() => addBudgetConflict(request.id, 'Budget allocation needs adjustment')}
//                     >
//                       Flag Issue
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//         {activeTab === 'dashboard' && (
//           <div className="dashboard-container">
//             <div className="dashboard-header">
//               <h2>Performance Dashboard</h2>
//               <div className="filter-controls">
//                 <div className="time-range">
//                   <button
//                     className={timeRange === '7d' ? 'active' : ''}
//                     onClick={() => setTimeRange('7d')}
//                   >
//                     7 Days
//                   </button>
//                   <button
//                     className={timeRange === '30d' ? 'active' : ''}
//                     onClick={() => setTimeRange('30d')}
//                   >
//                     30 Days
//                   </button>
//                   <button
//                     className={timeRange === '90d' ? 'active' : ''}
//                     onClick={() => setTimeRange('90d')}
//                   >
//                     90 Days
//                   </button>
//                 </div>
//                 <button className="btn btn-secondary">
//                   <Download size={16} /> Export Report
//                 </button>
//               </div>
//             </div>
//             {loadingAnalytics ? (
//               <div className="loading-container">
//                 <div className="loading-spinner"></div>
//                 <p>Loading analytics data...</p>
//               </div>
//             ) : (
//               <>
//                 <div className="metrics-overview">
//                   <div className="metric-card">
//                     <div className="metric-header">
//                       <BarChart2 size={18} />
//                       <h4>Impressions</h4>
//                     </div>
//                     <div className="metric-value">{analyticsData.impressions.toLocaleString()}</div>
//                     <div className="metric-change positive">+12%</div>
//                   </div>
//                   <div className="metric-card">
//                     <div className="metric-header">
//                       <Heart size={18} />
//                       <h4>Engagements</h4>
//                     </div>
//                     <div className="metric-value">{analyticsData.engagements.toLocaleString()}</div>
//                     <div className="metric-change positive">+7%</div>
//                   </div>
//                   <div className="metric-card">
//                     <div className="metric-header">
//                       <Users size={18} />
//                       <h4>Followers</h4>
//                     </div>
//                     <div className="metric-value">{analyticsData.followers.toLocaleString()}</div>
//                     <div className="metric-change positive">+3%</div>
//                   </div>
//                   <div className="metric-card">
//                     <div className="metric-header">
//                       <DollarSign size={18} />
//                       <h4>Click Rate</h4>
//                     </div>
//                     <div className="metric-value">{analyticsData.clickRate}%</div>
//                     <div className="metric-change negative">-0.2%</div>
//                   </div>
//                 </div>
//                 <div className="charts-container">
//                   <PerformanceLineChart
//                     data={analyticsData.performanceTime}
//                     dateRange={dateRange}
//                     setDateRange={setDateRange}
//                   />
//                   <CampaignBarChart data={analyticsData.campaignComparison} />
//                   <div className="chart-container">
//                     <div className="chart-header">
//                       <h4>Audience Demographics</h4>
//                       <button className="btn btn-text">
//                         <Download size={16} /> Export
//                       </button>
//                     </div>
//                     <div className="demographics-grid">
//                       <AgePieChart data={analyticsData.ageDistribution} />
//                     </div>
//                   </div>
//                   <EngagementHeatmap data={analyticsData.engagementHeatmap} />
//                 </div>
//                 <div className="top-performing">
//                   <h3>Top Performing Posts</h3>
//                   <div className="posts-list">
//                     {posts.slice(0, 3).map((post, i) => (
//                       <div key={post.id} className="performance-post">
//                         <img src={post.image} alt="Post" />
//                         <div className="post-metrics">
//                           <div>Impressions: {post.impressions.toLocaleString()}</div>
//                           <div>Engagements: {(post.likes + post.comments.length).toLocaleString()}</div>
//                           <div>Engagement Rate: {post.engagementRate}%</div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </>
//             )}
//           </div>
//         )}
//         {activeTab === 'gamification' && (
//           <div className="gamification-container">
//             <div className="score-card">
//               <h3>Your Current Score</h3>
//               <div className="score-value">1,450</div>
//               <div className="score-level">Gold Tier</div>
//               <div className="progress-bar">
//                 <div className="progress" style={{ width: '65%' }}></div>
//               </div>
//               <div className="progress-text">650 points to Platinum</div>
//             </div>
//             <div className="badges-container">
//               <h3>Available Badges</h3>
//               <div className="badges-list">
//                 {gamificationData.map((badge, i) => (
//                   <div key={i} className="badge-card">
//                     <img src={badge.image} alt={badge.title} />
//                     <h4>{badge.title}</h4>
//                     <div className="badge-progress">
//                       <div className="progress-bar">
//                         <div className="progress" style={{ width: `${badge.progress}%` }}></div>
//                       </div>
//                       <span>{badge.progress}/{badge.target}</span>
//                     </div>
//                     <div className="badge-reward">Reward: {badge.reward}</div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <div className="leaderboard">
//               <h3>Leaderboard</h3>
//               <div className="leaderboard-list">
//                 {[...Array(5)].map((_, i) => (
//                   <div key={i} className="leaderboard-item">
//                     <span className="rank">{i + 1}</span>
//                     <img src={`https://source.unsplash.com/random/40x40/?user${i}`} alt="User" />
//                     <span className="username">user_{i + 1}</span>
//                     <span className="score">{(5 - i) * 1000} pts</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}
//         {activeTab === 'ads' && (
//           <div className="ads-container">
//             <div className="ads-header">
//               <h2>Brand Advertisement Campaigns</h2>
//               <p>View and engage with brand advertisements to earn rewards</p>
//             </div>
//             <div className="filter-controls enhanced">
//               <div className="search-bar">
//                 <Search className="search-icon" size={18} />
//                 <input
//                   type="text"
//                   placeholder="Search ads..."
//                   value={adFilters.searchQuery}
//                   onChange={(e) => setAdFilters({ ...adFilters, searchQuery: e.target.value })}
//                 />
//               </div>
//               <div className="filter-panel">
//                 <div className="filter-group">
//                   <label>Audience</label>
//                   <div className="checkbox-group">
//                     {['tech', 'fashion', 'young_adults', 'women'].map(audience => (
//                       <label key={audience}>
//                         <input
//                           type="checkbox"
//                           checked={adFilters.audience.includes(audience)}
//                           onChange={() => {
//                             if (adFilters.audience.includes(audience)) {
//                               setAdFilters({
//                                 ...adFilters,
//                                 audience: adFilters.audience.filter(a => a !== audience)
//                               });
//                             } else {
//                               setAdFilters({
//                                 ...adFilters,
//                                 audience: [...adFilters.audience, audience]
//                               });
//                             }
//                           }}
//                         />
//                         {audience.charAt(0).toUpperCase() + audience.slice(1)}
//                       </label>
//                     ))}
//                   </div>
//                 </div>
//                 <div className="filter-group">
//                   <label>Sort By</label>
//                   <select
//                     value={adFilters.sortBy}
//                     onChange={(e) => setAdFilters({ ...adFilters, sortBy: e.target.value })}
//                   >
//                     <option value="recent">Most Recent</option>
//                     <option value="views">Most Views</option>
//                     <option value="ctr">Highest CTR</option>
//                   </select>
//                 </div>
//                 <div className="filter-group">
//                   <label>Min CTR (%)</label>
//                   <input
//                     type="number"
//                     value={adFilters.minCTR}
//                     onChange={(e) => setAdFilters({ ...adFilters, minCTR: parseFloat(e.target.value) || 0 })}
//                   />
//                 </div>
//                 <div className="filter-group">
//                   <label>Min Views</label>
//                   <input
//                     type="number"
//                     value={adFilters.minViews}
//                     onChange={(e) => setAdFilters({ ...adFilters, minViews: parseInt(e.target.value) || 0 })}
//                   />
//                 </div>
//               </div>
//             </div>
//             <div className="ads-grid">
//               {brandAds.map(ad => (
//                 <Ad
//                   key={ad.id}
//                   ad={ad}
//                   newComments={newComments}
//                   handleLikeAd={(id) => {
//                     setBrandAds(brandAds.map(ad =>
//                       ad.id === id
//                         ? {
//                             ...ad,
//                             isLiked: !ad.isLiked,
//                             gamification: {
//                               ...ad.gamification,
//                               tasks: ad.gamification.tasks.map(task =>
//                                 task.action === 'like' ? { ...task, completed: !ad.isLiked } : task
//                               )
//                             }
//                           }
//                         : ad
//                     ));
//                   }}
//                   handleAddAdComment={(id) => {
//                     const commentText = newComments[id]?.trim();
//                     if (!commentText) return;
//                     setBrandAds(brandAds.map(ad =>
//                       ad.id === id
//                         ? {
//                             ...ad,
//                             comments: [
//                               ...ad.comments,
//                               {
//                                 id: ad.comments.length + 1,
//                                 username: currentUser.username,
//                                 text: commentText,
//                                 avatar: currentUser.avatar
//                               }
//                             ],
//                             gamification: {
//                               ...ad.gamification,
//                               tasks: ad.gamification.tasks.map(task =>
//                                 task.action === 'comment' ? { ...task, completed: true } : task
//                               )
//                             }
//                           }
//                         : ad
//                     ));
//                     setNewComments({ ...newComments, [id]: '' });
//                   }}
//                   handleShare={(id) => {
//                     setBrandAds(brandAds.map(ad =>
//                       ad.id === id
//                         ? {
//                             ...ad,
//                             gamification: {
//                               ...ad.gamification,
//                               tasks: ad.gamification.tasks.map(task =>
//                                 task.action === 'share'
//                                   ? {
//                                       ...task,
//                                       currentShares: (task.currentShares || 0) + 1,
//                                       completed: (task.currentShares || 0) + 1 >= (task.target || 1)
//                                     }
//                                   : task
//                               )
//                             }
//                           }
//                         : ad
//                     ));
//                     showNotification('Ad shared successfully!');
//                   }}
//                   setNewComments={setNewComments}
//                 />
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//       {showVideoModal && (
//         <div className="modal">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h3>Schedule Video Call</h3>
//               <button onClick={() => setShowVideoModal(false)}>×</button>
//             </div>
//             <div className="modal-body">
//               <div className="form-group">
//                 <label>Meeting Title</label>
//                 <input type="text" defaultValue={activeConversation ? `Discussion about ${activeConversation.name}` : 'Campaign Discussion'} />
//               </div>
//               <div className="form-row">
//                 <div className="form-group">
//                   <label>Date</label>
//                   <input type="date" />
//                 </div>
//                 <div className="form-group">
//                   <label>Time</label>
//                   <input type="time" />
//                 </div>
//               </div>
//             </div>
//             <div className="modal-actions">
//               <button className="btn btn-primary" onClick={() => { setShowVideoModal(false); showNotification('Meeting scheduled'); }}><Calendar size={16} /> Schedule Meeting</button>
//               <button className="btn btn-outline" onClick={() => setShowVideoModal(false)}>Cancel</button>
//             </div>
//           </div>
//         </div>
//       )}
//       {showAddParticipants && (
//         <div className="modal">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h3>Add Participants</h3>
//               <button onClick={() => setShowAddParticipants(false)}>×</button>
//             </div>
//             <div className="modal-body">
//               <div className="search-bar">
//                 <Search size={16} />
//                 <input type="text" placeholder="Search participants..." />
//               </div>
//               <div className="participants-list">
//                 {availableParticipants
//                   .filter(p => !activeConversation?.participants.includes(p.name))
//                   .map(participant => (
//                     <div key={participant.id} className="participant-item">
//                       <div className="participant-info">
//                         <div className="participant-avatar">{participant.name.charAt(0)}</div>
//                         <div className="participant-name">{participant.name}</div>
//                       </div>
//                       <button className="btn btn-outline" onClick={() => addParticipants([participant.name])}>Add</button>
//                     </div>
//                   ))}
//               </div>
//             </div>
//             <div className="modal-actions">
//               <button className="btn btn-primary" onClick={() => {
//                 const newParticipants = availableParticipants
//                   .filter(p => !activeConversation?.participants.includes(p.name))
//                   .map(p => p.name);
//                 addParticipants(newParticipants);
//               }}>Add All</button>
//               <button className="btn btn-outline" onClick={() => setShowAddParticipants(false)}>Done</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Influencer;
import React, { useState, useEffect } from 'react';
import {
  Users, MessageSquare, GitMerge, Plus, Check, X, ChevronLeft, ChevronRight,
  Heart, MoreHorizontal, Bookmark, Share2, Settings, Grid, List, Search,
  Bell, FileText, Video, UserPlus, Edit, Trash2, Eye, ArrowLeft, Filter,
  Smile, Paperclip, Mic, Calendar, Award, Mail, AlertCircle, Slack, Clipboard,
  BarChart2, TrendingUp, Clock, DollarSign, Download
} from 'lucide-react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell, BarChart, Bar
} from 'recharts';
import '../Influencer.css';
import SocialMedia from '../components/SocialMedia';

const Influencer = () => {
  // Main app state
  const [activeTab, setActiveTab] = useState('social');
  const [currentUser, setCurrentUser] = useState({
    username: 'current_user',
    fullName: 'Current User',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    bio: 'Digital creator | Photography enthusiast',
    posts: 42,
    followers: 1250,
    following: 843,
    isFollowing: false
  });

  // Posts data
  const [posts, setPosts] = useState([
    {
      id: 1,
      username: 'fashion_brand',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      caption: 'Check out our new summer collection! #fashion #summer',
      likes: 1243,
      comments: [
        { id: 1, username: 'user1', text: 'Love this collection!', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80' },
        { id: 2, username: 'user2', text: 'Where can I buy these?', avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80' }
      ],
      time: '2 HOURS AGO',
      sponsored: false,
      impressions: 12500,
      engagementRate: 4.2,
      isLiked: false,
      showComments: false,
      isSaved: false
    }
  ]);
  const [userPosts, setUserPosts] = useState(posts.filter(p => p.username === currentUser.username));
  const [stories, setStories] = useState([
    {
      id: 1,
      username: 'user1',
      avatar: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e',
      image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e',
      time: '1h ago',
      comments: []
    }
  ]);

  // Brand ads data
  const [brandAds, setBrandAds] = useState([
    {
      id: 1,
      brandName: 'TechTrend',
      brandLogo: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      adImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      caption: 'Discover our latest gadget! #tech',
      views: 15000,
      clicks: 750,
      ctr: 5.0,
      postedDate: '2025-05-15',
      targetAudience: ['tech', 'young_adults'],
      status: 'active',
      isLiked: false,
      comments: [
        { id: 1, username: 'user1', text: 'Looks amazing!', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80' }
      ],
      gamification: {
        hasReward: true,
        totalPoints: 50,
        tasks: [
          { action: 'like', points: 10, completed: false },
          { action: 'comment', points: 20, completed: false },
          { action: 'share', points: 20, currentShares: 0, target: 1, completed: false }
        ]
      }
    }
  ]);

  // Messages data
  const [messages, setMessages] = useState([
    {
      id: 1,
      username: 'user1',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      lastMessage: 'Hey, how are you doing?',
      time: '2h ago',
      unread: true,
      messages: [
        { id: 1, sender: 'user1', text: 'Hey there!', time: '10:30 AM' },
        { id: 2, sender: 'current_user', text: 'Hi! How are you?', time: '10:32 AM' },
        { id: 3, sender: 'user1', text: 'Hey, how are you doing?', time: '2:15 PM' }
      ]
    },
    {
      id: 2,
      username: 'brand_manager',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      lastMessage: 'Can we discuss the campaign details?',
      time: '1h ago',
      unread: false,
      messages: [
        { id: 1, sender: 'brand_manager', text: 'Hi! Excited about the collab?', time: '9:00 AM' },
        { id: 2, sender: 'current_user', text: 'Absolutely, lets discuss!', time: '9:05 AM' }
      ]
    }
  ]);

  // Campaign data
  const [campaigns, setCampaigns] = useState([
    {
      id: 1,
      name: 'Summer Fashion Collab',
      status: 'active',
      brands: ['Nike', 'Adidas'],
      influencers: ['Alex Johnson', 'Taylor Smith'],
      budget: 50000,
      goals: 'Increase brand awareness by 20%',
      audience: 'Age 18-35, fashion-conscious',
      startDate: '2023-06-01',
      endDate: '2023-08-31',
      objective: 'Brand Awareness',
      impressions: 125000,
      clicks: 6800,
      ctr: '5.4%',
      conversions: 342
    },
    {
      id: 2,
      name: 'Tech Bundle Promo',
      status: 'pending',
      brands: ['Samsung'],
      influencers: ['Tech Guru'],
      budget: 35000,
      goals: 'Promote new tech bundle',
      audience: 'Tech enthusiasts 25-45',
      startDate: '2023-07-01',
      endDate: '2023-09-30',
      objective: 'Product Sales',
      impressions: 0,
      clicks: 0,
      ctr: '0%',
      conversions: 0
    },
    {
      id: 3,
      name: 'Winter Sports Campaign',
      status: 'completed',
      brands: ['Burton', 'Rossignol'],
      influencers: ['Snow Pro'],
      budget: 60000,
      goals: 'Drive winter gear sales',
      audience: 'Sports enthusiasts 18-40',
      startDate: '2022-12-01',
      endDate: '2023-02-28',
      objective: 'Sales',
      impressions: 200000,
      clicks: 10000,
      ctr: '5.0%',
      conversions: 500
    }
  ]);

  // Brand requests data
  const [brandRequests, setBrandRequests] = useState([
    {
      id: 1,
      name: 'Summer Fashion Collab',
      status: 'pending',
      brands: ['Nike'],
      invitedBrands: ['Adidas'],
      sheetUrl: '#',
      budget: 50000,
      goals: 'Increase brand awareness by 20%',
      audience: 'Age 18-35, fashion-conscious',
      conflicts: []
    },
    {
      id: 2,
      name: 'Tech Bundle Promo',
      status: 'pending',
      brands: ['Samsung'],
      invitedBrands: [],
      sheetUrl: '#',
      budget: 35000,
      goals: 'Promote new tech bundle',
      audience: 'Tech enthusiasts 25-45',
      conflicts: []
    }
  ]);

  // Conversation data
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
      name: 'Tech Bundle Discussion',
      participants: ['Samsung', 'Tech Guru'],
      isGroup: true,
      lastMessage: 'Samsung: Can we review the timeline?',
      timestamp: new Date(Date.now() - 7200000),
      unread: 1
    },
    {
      id: '3',
      name: 'user1',
      participants: ['user1'],
      isGroup: false,
      lastMessage: 'Hey, how are you doing?',
      timestamp: new Date(Date.now() - 7200000),
      unread: 2
    }
  ]);

  // Analytics state
  const [activeConversation, setActiveConversation] = useState(null);
  const [newMessage, setNewMessage] = useState('');
  const [notification, setNotification] = useState(null);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [showAddParticipants, setShowAddParticipants] = useState(false);
  const [availableParticipants] = useState([
    { id: '1', name: 'Nike', type: 'brand' },
    { id: '2', name: 'Adidas', type: 'brand' },
    { id: '3', name: 'Samsung', type: 'brand' },
    { id: '4', name: 'Alex Johnson', type: 'influencer' },
    { id: '5', name: 'Taylor Smith', type: 'influencer' },
    { id: '6', name: 'Tech Guru', type: 'influencer' }
  ]);
  const [searchQuery, setSearchQuery] = useState('');
  const [dateRange, setDateRange] = useState('last30days');
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [timeRange, setTimeRange] = useState('7d');
  const [analyticsData, setAnalyticsData] = useState({
    impressions: 25000,
    engagements: 1500,
    followers: 1250,
    clickRate: 3.5,
    performanceTime: [],
    ageDistribution: [],
    campaignComparison: [],
    engagementHeatmap: {
      xLabels: [],
      yLabels: [],
      data: []
    }
  });
  const [loadingAnalytics, setLoadingAnalytics] = useState(true);
  const [gamificationData] = useState([
    {
      title: 'Engager',
      image: 'https://source.unsplash.com/random/100x100/?badge',
      progress: 80,
      target: 100,
      reward: '50 points'
    }
  ]);
  const [newComments, setNewComments] = useState({});
  const [adFilters, setAdFilters] = useState({
    searchQuery: '',
    audience: [],
    sortBy: 'recent',
    minCTR: 0,
    minViews: 0
  });

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

  // Fetch analytics data
  useEffect(() => {
    const fetchAnalyticsData = async () => {
      setLoadingAnalytics(true);
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        const performanceTime = campaigns
          .filter(c => c.status === 'active' || c.status === 'completed')
          .map((c, i) => ({
            date: `Jun ${i + 1}`,
            impressions: c.impressions || 0,
            clicks: c.clicks || 0,
            conversions: c.conversions || 0
          }));
        const ageDistribution = [
          { name: '18-24', value: 25 },
          { name: '25-34', value: 45 },
          { name: '35-44', value: 20 },
          { name: '45+', value: 10 }
        ];
        const campaignComparison = campaigns.map(c => ({
          name: c.name,
          budget: c.budget,
          impressions: c.impressions
        }));
        const engagementHeatmap = {
          xLabels: ['0%', '25%', '50%', '75%', '100%'],
          yLabels: ['Header', 'Image', 'Caption', 'Comments', 'Footer'],
          data: [
            [80, 60, 30, 10, 5],
            [40, 70, 50, 30, 20],
            [20, 40, 60, 40, 30],
            [10, 30, 50, 70, 90],
            [5, 10, 20, 30, 40]
          ]
        };
        setAnalyticsData(prev => ({
          ...prev,
          performanceTime,
          ageDistribution,
          campaignComparison,
          engagementHeatmap
        }));
      } catch (error) {
        console.error('Error fetching analytics data:', error);
        showNotification('Failed to load analytics data');
      } finally {
        setLoadingAnalytics(false);
      }
    };
    fetchAnalyticsData();
  }, [campaigns, dateRange]);

  // Handlers
  const startConversation = (conversation) => {
    setActiveConversation(conversation);
    const convMessages = messages.find(msg => msg.username === conversation.name.toLowerCase().replace(' ', '_'))?.messages || [];
    setMessages(convMessages.length > 0 ? convMessages : [
      { id: 1, sender: conversation.name.toLowerCase().replace(' ', '_'), text: 'Hi there!', timestamp: new Date(Date.now() - 3600000), status: 'delivered' }
    ]);
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
    setConversations(prev => prev.map(conv =>
      conv.id === activeConversation.id
        ? { ...conv, lastMessage: `You: ${newMessage}`, timestamp: new Date() }
        : conv
    ));
    setTimeout(() => {
      setMessages(prev => prev.map(msg =>
        msg.id === message.id ? { ...msg, status: 'delivered' } : msg
      ));
    }, 1000);
  };

  const scheduleVideoCall = () => {
    setShowVideoModal(true);
    showNotification('Zoom meeting scheduled and invite sent');
  };

  const addParticipants = (participantNames) => {
    if (!activeConversation) return;
    const updatedConversation = {
      ...activeConversation,
      participants: [...new Set([...activeConversation.participants, ...participantNames])]
    };
    setActiveConversation(updatedConversation);
    setConversations(prev => prev.map(conv =>
      conv.id === activeConversation.id ? updatedConversation : conv
    ));
    showNotification(`${participantNames.length} participants added`);
    setShowAddParticipants(false);
  };

  const acceptInvitation = (requestId) => {
    setBrandRequests(prev => prev.map(req => {
      if (req.id === requestId) {
        const newCampaign = {
          id: Math.max(...campaigns.map(c => c.id)) + 1,
          name: req.name,
          status: 'active',
          brands: [...req.brands, ...req.invitedBrands],
          influencers: [currentUser.username],
          budget: req.budget,
          goals: req.goals,
          audience: req.audience,
          startDate: new Date().toISOString().split('T')[0],
          endDate: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
          objective: 'Brand Awareness',
          impressions: 0,
          clicks: 0,
          ctr: '0%',
          conversions: 0
        };
        setCampaigns(prev => [...prev, newCampaign]);
        setConversations(prev => [{
          id: `${newCampaign.id}-group`,
          name: `${newCampaign.name} Group`,
          participants: [...newCampaign.brands, ...newCampaign.influencers],
          isGroup: true,
          lastMessage: 'Group created',
          timestamp: new Date(),
          unread: 0
        }, ...prev]);
        return { ...req, status: 'accepted', invitedBrands: [] };
      }
      return req;
    }));
    showNotification('Collaboration accepted! Shared workspace created');
  };

  const rejectInvitation = (requestId) => {
    setBrandRequests(prev => prev.map(req =>
      req.id === requestId ? { ...req, status: 'rejected', invitedBrands: [] } : req
    ));
    showNotification('Collaboration rejected');
  };

  const addBudgetConflict = (requestId, conflict) => {
    setBrandRequests(prev => prev.map(req =>
      req.id === requestId ? { ...req, conflicts: [...req.conflicts, conflict] } : req
    ));
  };

  const resolveConflict = (requestId, conflictIndex) => {
    setBrandRequests(prev => prev.map(req =>
      req.id === requestId
        ? { ...req, conflicts: req.conflicts.filter((_, i) => i !== conflictIndex) }
        : req
    ));
  };

  const handleAddComment = (postId) => {
    const commentText = newComments[postId]?.trim();
    if (!commentText) return;
    setPosts(posts.map(post =>
      post.id === postId
        ? {
            ...post,
            comments: [
              ...post.comments,
              {
                id: post.comments.length + 1,
                username: currentUser.username,
                text: commentText,
                avatar: currentUser.avatar
              }
            ]
          }
        : post
    ));
    setNewComments({ ...newComments, [postId]: '' });
  };

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 3000);
  };

  const filteredConversations = conversations.filter(conv =>
    conv.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Chart Components
  const PerformanceLineChart = ({ data, dateRange, setDateRange }) => (
    <div className="Influencer_ChartContainer">
      <div className="Influencer_ChartHeader">
        <h4>Campaign Performance Over Time</h4>
        <select
          className="Influencer_ChartFilter"
          value={dateRange}
          onChange={(e) => setDateRange(e.target.value)}
        >
          <option value="last7days">Last 7 Days</option>
          <option value="last30days">Last 30 Days</option>
          <option value="last90days">Last 90 Days</option>
        </select>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="impressions" stroke="#8884d8" name="Impressions" strokeWidth={2} />
          <Line type="monotone" dataKey="clicks" stroke="#82ca9d" name="Clicks" strokeWidth={2} />
          <Line type="monotone" dataKey="conversions" stroke="#ffc658" name="Conversions" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );

  const AgePieChart = ({ data }) => (
    <div className="Influencer_DemoChart">
      <h5>Age Distribution</h5>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            innerRadius={40}
            paddingAngle={5}
            dataKey="value"
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
            labelLine={false}
          >
            {data.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
                stroke="#fff"
                strokeWidth={1}
              />
            ))}
          </Pie>
          <Tooltip
            formatter={(value) => [`${value}%`, 'Percentage']}
            contentStyle={{
              backgroundColor: '#fff',
              border: '1px solid #ddd',
              borderRadius: '4px',
            }}
          />
          <Legend
            layout="horizontal"
            verticalAlign="bottom"
            align="center"
            wrapperStyle={{ paddingTop: '20px' }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );

  const CampaignBarChart = ({ data }) => (
    <div className="Influencer_ChartContainer">
      <h4>Campaign Budget vs. Impressions</h4>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="budget" fill="#8884d8" name="Budget ($)" />
          <Bar dataKey="impressions" fill="#82ca9d" name="Impressions" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );

  const EngagementHeatmap = ({ data }) => (
    <div className="Influencer_HeatmapContainer">
      <h5>Post Interaction Heatmap</h5>
      <div className="Influencer_HeatmapGrid">
        {data.yLabels.map((rowLabel, rowIndex) => (
          <React.Fragment key={rowLabel}>
            <div className="Influencer_HeatmapRowLabel">{rowLabel}</div>
            {data.xLabels.map((colLabel, colIndex) => (
              <div
                key={`${rowLabel}-${colLabel}`}
                className="Influencer_HeatmapCell"
                style={{
                  backgroundColor: `rgba(0, 136, 254, ${data.data[rowIndex][colIndex] / 100})`,
                }}
              >
                {data.data[rowIndex][colIndex]}%
              </div>
            ))}
          </React.Fragment>
        ))}
        <div className="Influencer_HeatmapCorner"></div>
        {data.xLabels.map((label) => (
          <div key={`x-${label}`} className="Influencer_HeatmapColLabel">
            {label}
          </div>
        ))}
      </div>
    </div>
  );

  const Ad = ({ ad, newComments, handleLikeAd, handleAddAdComment, handleShare, setNewComments }) => (
    <div className="Influencer_AdCard">
      <div className="Influencer_AdImageContainer">
        <img src={ad.adImage} alt={ad.brandName} className="Influencer_AdImage" />
        {ad.gamification?.hasReward && (
          <div className="Influencer_GamificationBadge">
            <Award size={16} color="#333" />
            <div className="Influencer_GamificationTooltip">
              <h4>Earn {ad.gamification.totalPoints} points</h4>
              {ad.gamification.tasks.map((task, i) => (
                <div
                  key={i}
                  className={`Influencer_GamificationTask ${task.completed ? 'Influencer_Completed' : ''}`}
                >
                  {task.completed ? '✓ ' : ''}
                  {task.action === 'like' && 'Like this ad: '}
                  {task.action === 'comment' && 'Comment on this ad: '}
                  {task.action === 'share' && `Share ${task.currentShares || 0}/${task.target || 1} times: `}
                  {task.points} points
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="Influencer_AdInfo">
        <div className="Influencer_AdHeader">
          <img src={ad.brandLogo} alt={ad.brandName} className="Influencer_BrandLogo" />
          <span className="Influencer_BrandName">{ad.brandName}</span>
        </div>
        <p className="Influencer_AdCaption">{ad.caption}</p>
        <div className="Influencer_AdStats">
          <div className="Influencer_StatItem">
            <span className="Influencer_StatLabel">Views</span>
            <span className="Influencer_StatValue">{ad.views.toLocaleString()}</span>
          </div>
          <div className="Influencer_StatItem">
            <span className="Influencer_StatLabel">Clicks</span>
            <span className="Influencer_StatValue">{ad.clicks.toLocaleString()}</span>
          </div>
          <div className="Influencer_StatItem">
            <span className="Influencer_StatLabel">CTR</span>
            <span className="Influencer_StatValue">{ad.ctr}%</span>
          </div>
          <div className="Influencer_StatItem">
            <span className="Influencer_StatLabel">Posted</span>
            <span className="Influencer_StatValue">{ad.postedDate}</span>
          </div>
        </div>
        <div className="Influencer_AdActions">
          <button
            className="Influencer_ActionButton Influencer_LikeButton"
            onClick={() => handleLikeAd(ad.id)}
          >
            <Heart
              size={18}
              fill={ad.isLiked ? 'currentColor' : 'none'}
            />
            Like
          </button>
          <button
            className="Influencer_ActionButton Influencer_CommentButton"
            onClick={() => {
              document.getElementById(`comment-input-${ad.id}`)?.focus();
            }}
          >
            <MessageSquare size={18} />
            Comment
          </button>
          <button
            className="Influencer_ActionButton Influencer_ShareButton"
            onClick={() => handleShare(ad.id)}
          >
            <Share2 size={18} />
            Share
          </button>
        </div>
        {ad.comments.length > 0 && (
          <div className="Influencer_CommentsSection">
            {ad.comments.slice(0, 2).map(comment => (
              <div key={comment.id} className="Influencer_Comment">
                <img
                  src={comment.avatar}
                  alt={comment.username}
                  className="Influencer_CommentAvatar"
                />
                <div className="Influencer_CommentContent">
                  <span className="Influencer_CommentUsername">{comment.username}</span>
                  {comment.text}
                </div>
              </div>
            ))}
            {ad.comments.length > 2 && (
              <div className="Influencer_MoreComments">
                View all {ad.comments.length} comments
              </div>
            )}
          </div>
        )}
        <div className="Influencer_AddComment">
          <input
            id={`comment-input-${ad.id}`}
            type="text"
            className="Influencer_CommentInput"
            placeholder="Add a comment..."
            value={newComments[ad.id] || ''}
            onChange={(e) => setNewComments({
              ...newComments,
              [ad.id]: e.target.value
            })}
          />
          <button
            className="Influencer_PostCommentButton"
            onClick={() => handleAddAdComment(ad.id)}
            disabled={!newComments[ad.id]?.trim()}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );

  const CampaignDetail = ({ campaign, setSelectedCampaign }) => (
    <div className="Influencer_CampaignDetail">
      <div className="Influencer_DetailHeader">
        <button
          className="Influencer_BackButton"
          onClick={() => setSelectedCampaign(null)}
          aria-label="Go back to campaign list"
          title="Back to campaigns"
        >
          <ArrowLeft size={20} />
          <span className="sr-only">Back</span>
        </button>
        <h2>Campaign Details</h2>
      </div>
      <div className="Influencer_DetailGrid">
        <div>
          <div className="Influencer_DetailSection">
            <h3>{campaign.name}</h3>
            <div className="Influencer_DetailProperties">
              <div className="Influencer_DetailProperty">
                <p className="Influencer_PropertyLabel">Status</p>
                <p className="Influencer_PropertyValue">{campaign.status}</p>
              </div>
              <div className="Influencer_DetailProperty">
                <p className="Influencer_PropertyLabel">Objective</p>
                <p className="Influencer_PropertyValue">{campaign.objective}</p>
              </div>
              <div className="Influencer_DetailProperty">
                <p className="Influencer_PropertyLabel">Budget</p>
                <p className="Influencer_PropertyValue">${campaign.budget.toLocaleString()}</p>
              </div>
              <div className="Influencer_DetailProperty">
                <p className="Influencer_PropertyLabel">Duration</p>
                <p className="Influencer_PropertyValue">{campaign.startDate} - {campaign.endDate}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="Influencer_PerformanceMetrics">
          <h4>Performance Metrics</h4>
          <div className="Influencer_MetricsGridSmall">
            <div className="Influencer_Metric">
              <p className="Influencer_MetricLabel">Impressions</p>
              <p className="Influencer_MetricValue">{campaign.impressions?.toLocaleString() || "0"}</p>
            </div>
            <div className="Influencer_Metric">
              <p className="Influencer_MetricLabel">Clicks</p>
              <p className="Influencer_MetricValue">{campaign.clicks?.toLocaleString() || "0"}</p>
            </div>
            <div className="Influencer_Metric">
              <p className="Influencer_MetricLabel">CTR</p>
              <p className="Influencer_MetricValue">{campaign.ctr || "0%"}</p>
            </div>
            <div className="Influencer_Metric">
              <p className="Influencer_MetricLabel">Conversions</p>
              <p className="Influencer_MetricValue">{campaign.conversions?.toLocaleString() || "0"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="Influencer_CollabContainer">
      {notification && (
        <div className="Influencer_Notification">
          <Bell size={16} />
          <span>{notification}</span>
          <button onClick={() => setNotification(null)}>×</button>
        </div>
      )}
      <div className="Influencer_Tabs">
        <button className={`Influencer_Tab ${activeTab === 'social' ? 'Influencer_Active' : ''}`} onClick={() => setActiveTab('social')}>
          <Users size={16} /> Social
        </button>
        <button className={`Influencer_Tab ${activeTab === 'ads' ? 'Influencer_Active' : ''}`} onClick={() => setActiveTab('ads')}>
          Brand Ads
        </button>
        <button className={`Influencer_Tab ${activeTab === 'campaigns' ? 'Influencer_Active' : ''}`} onClick={() => setActiveTab('campaigns')}>
          <GitMerge size={16} /> Campaigns
        </button>
        <button className={`Influencer_Tab ${activeTab === 'messages' ? 'Influencer_Active' : ''}`} onClick={() => setActiveTab('messages')}>
          <MessageSquare size={16} /> Messages
        </button>
        <button className={`Influencer_Tab ${activeTab === 'collaboration' ? 'Influencer_Active' : ''}`} onClick={() => setActiveTab('collaboration')}>
          <Mail size={16} /> Collaboration
        </button>
        <button className={`Influencer_Tab ${activeTab === 'dashboard' ? 'Influencer_Active' : ''}`} onClick={() => setActiveTab('dashboard')}>
          Analytics Dashboard
        </button>
        <button className={`Influencer_Tab ${activeTab === 'gamification' ? 'Influencer_Active' : ''}`} onClick={() => setActiveTab('gamification')}>
          Gamification
        </button>
      </div>
      <div className="Influencer_TabContent">
        {activeTab === 'social' && (
          <SocialMedia
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}
            posts={posts}
            setPosts={setPosts}
            stories={stories}
            messages={messages}
            userPosts={userPosts}
            setUserPosts={setUserPosts}
          />
        )}
        {activeTab === 'campaigns' && (
          <div className="Influencer_CampaignsPanel">
            {selectedCampaign ? (
              <CampaignDetail
                campaign={selectedCampaign}
                setSelectedCampaign={setSelectedCampaign}
              />
            ) : (
              <>
                <div className="Influencer_CampaignsHeader">
                  <h2>Campaign Management</h2>
                </div>
                <div className="Influencer_CampaignsTableContainer">
                  <div className="Influencer_TableControls">
                    <div className="Influencer_SearchContainer">
                      <Search size={16} className="Influencer_SearchIcon" />
                      <input
                        type="text"
                        className="Influencer_SearchInput"
                        placeholder="Search campaigns..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                    <div className="Influencer_FilterControls">
                      <select className="Influencer_FilterSelect" value={dateRange} onChange={(e) => setDateRange(e.target.value)}>
                        <option value="last7days">Last 7 days</option>
                        <option value="last30days">Last 30 days</option>
                        <option value="last90days">Last 90 days</option>
                      </select>
                      <button className="Influencer_Btn Influencer_BtnSecondary"><Filter size={16} /> Filters</button>
                    </div>
                  </div>
                  <div className="Influencer_TableWrapper">
                    <table className="Influencer_DataTable">
                      <thead>
                        <tr>
                          <th>Campaign Name</th>
                          <th>Status</th>
                          <th>Objective</th>
                          <th>Budget</th>
                          <th>Duration</th>
                          <th className="Influencer_TextRight">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {campaigns
                          .filter(campaign =>
                            campaign.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            campaign.status.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            campaign.objective.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            campaign.brands.join(', ').toLowerCase().includes(searchQuery.toLowerCase())
                          )
                          .map((campaign) => (
                            <tr key={campaign.id}>
                              <td><div className="Influencer_CampaignName" onClick={() => setSelectedCampaign(campaign)}>{campaign.name}</div></td>
                              <td><span className={`Influencer_StatusBadge Influencer_${campaign.status.toLowerCase()}`}>{campaign.status}</span></td>
                              <td>{campaign.objective}</td>
                              <td>${campaign.budget.toLocaleString()}</td>
                              <td>{campaign.startDate} to {campaign.endDate}</td>
                              <td className="Influencer_ActionButtons">
                                <button onClick={() => setSelectedCampaign(campaign)}><Eye size={18} /></button>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </>
            )}
          </div>
        )}
        {activeTab === 'messages' && (
          <div className="Influencer_CommunicationPanel">
            <div className="Influencer_ChatContainer">
              <div className={`Influencer_ConversationSidebar ${activeConversation ? 'Influencer_Hidden' : ''}`}>
                <div className="Influencer_SidebarHeader">
                  <h3>Messages</h3>
                  <div className="Influencer_SearchBar">
                    <Search size={16} />
                    <input
                      type="text"
                      placeholder="Search conversations..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>
                <div className="Influencer_ConversationList">
                  {filteredConversations.map(conversation => (
                    <div
                      key={conversation.id}
                      className={`Influencer_ConversationItem ${activeConversation?.id === conversation.id ? 'Influencer_Active' : ''}`}
                      onClick={() => startConversation(conversation)}
                    >
                      <div className="Influencer_ConversationAvatar">{conversation.name.charAt(0)}</div>
                      <div className="Influencer_ConversationDetails">
                        <div className="Influencer_ConversationName">{conversation.name}</div>
                        <div className="Influencer_ConversationPreview">{conversation.lastMessage}</div>
                      </div>
                      {conversation.unread > 0 && (
                        <span className="Influencer_UnreadCount">{conversation.unread}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              {activeConversation && (
                <div className="Influencer_ChatArea">
                  <div className="Influencer_ChatHeader">
                    <button
                      className="Influencer_BackButton"
                      onClick={() => setActiveConversation(null)}
                      aria-label="Go back to conversation list"
                      title="Back to conversations"
                    >
                      <ArrowLeft size={20} />
                      <span className="sr-only">Back</span>
                    </button>
                    <div className="Influencer_ChatInfo">
                      <div className="Influencer_ChatTitle">{activeConversation.name}</div>
                    </div>
                    <div className="Influencer_ChatActions">
                      <button className="Influencer_BtnIcon" onClick={scheduleVideoCall}><Video size={18} /></button>
                      {activeConversation.isGroup && (
                        <button className="Influencer_BtnIcon" onClick={() => setShowAddParticipants(true)}><UserPlus size={18} /></button>
                      )}
                    </div>
                  </div>
                  <div className="Influencer_MessageList">
                    {messages.map(message => (
                      <div key={message.id} className={`Influencer_Message ${message.sender === 'current_user' ? 'Influencer_Sent' : 'Influencer_Received'}`}>
                        <p>{message.text}</p>
                        <span className="Influencer_Time">{message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                      </div>
                    ))}
                  </div>
                  <div className="Influencer_MessageInputArea">
                    <input
                      type="text"
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      placeholder="Type a message..."
                      onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                    />
                    <button className="Influencer_BtnIcon"><Smile size={20} /></button>
                    <button className="Influencer_BtnIcon"><Paperclip size={20} /></button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
        {activeTab === 'collaboration' && (
          <div className="Influencer_CollaborationPanel">
            <div className="Influencer_ProjectList">
              <h2>Brand Collaboration Requests</h2>
              {brandRequests.map(request => (
                <div key={request.id} className={`Influencer_ProjectCard Influencer_${request.status}`}>
                  <div className="Influencer_ProjectHeader">
                    <h3>{request.name}</h3>
                    <span className="Influencer_Status">{request.status}</span>
                  </div>
                  <div className="Influencer_ProjectDetails">
                    <div className="Influencer_Detail">
                      <label>Brands:</label>
                      <span>{request.brands.join(', ')}</span>
                    </div>
                    {request.invitedBrands.length > 0 && (
                      <div className="Influencer_Detail">
                        <label>Pending Invites:</label>
                        <span>{request.invitedBrands.join(', ')}</span>
                      </div>
                    )}
                    <div className="Influencer_Detail">
                      <label>Budget:</label>
                      <span>${request.budget.toLocaleString()}</span>
                    </div>
                    <div className="Influencer_Detail">
                      <label>Goals:</label>
                      <span>{request.goals}</span>
                    </div>
                    <div className="Influencer_Detail">
                      <label>Audience:</label>
                      <span>{request.audience}</span>
                    </div>
                    {request.status === 'pending' && (
                      <div className="Influencer_InviteActions">
                        <button
                          className="Influencer_Btn Influencer_BtnSuccess"
                          onClick={() => acceptInvitation(request.id)}
                        >
                          <Check size={14} /> Accept
                        </button>
                        <button
                          className="Influencer_Btn Influencer_BtnDanger"
                          onClick={() => rejectInvitation(request.id)}
                        >
                          <X size={14} /> Reject
                        </button>
                      </div>
                    )}
                    {request.conflicts.length > 0 && (
                      <div className="Influencer_Conflicts">
                        <label>Conflicts:</label>
                        <ul>
                          {request.conflicts.map((conflict, i) => (
                            <li key={i}>
                              <AlertCircle size={14} />
                              <span>{conflict}</span>
                              <button
                                className="Influencer_Btn Influencer_BtnOutline"
                                onClick={() => resolveConflict(request.id, i)}
                              >
                                Resolve
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  <div className="Influencer_ProjectActions">
                    <a href={request.sheetUrl} className="Influencer_Btn Influencer_BtnPrimary">
                      <FileText size={14} /> Open Sheet
                    </a>
                    <button
                      className="Influencer_Btn Influencer_BtnOutline"
                      onClick={() => addBudgetConflict(request.id, 'Budget allocation needs adjustment')}
                    >
                      Flag Issue
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {activeTab === 'dashboard' && (
          <div className="Influencer_DashboardContainer">
            <div className="Influencer_DashboardHeader">
              <h2>Performance Dashboard</h2>
              <div className="Influencer_FilterControls">
                <div className="Influencer_TimeRange">
                  <button
                    className={timeRange === '7d' ? 'Influencer_Active' : ''}
                    onClick={() => setTimeRange('7d')}
                  >
                    7 Days
                  </button>
                  <button
                    className={timeRange === '30d' ? 'Influencer_Active' : ''}
                    onClick={() => setTimeRange('30d')}
                  >
                    30 Days
                  </button>
                  <button
                    className={timeRange === '90d' ? 'Influencer_Active' : ''}
                    onClick={() => setTimeRange('90d')}
                  >
                    90 Days
                  </button>
                </div>
                <button className="Influencer_Btn Influencer_BtnSecondary">
                  <Download size={16} /> Export Report
                </button>
              </div>
            </div>
            {loadingAnalytics ? (
              <div className="Influencer_LoadingContainer">
                <div className="Influencer_LoadingSpinner"></div>
                <p>Loading analytics data...</p>
              </div>
            ) : (
              <>
                <div className="Influencer_MetricsOverview">
                  <div className="Influencer_MetricCard">
                    <div className="Influencer_MetricHeader">
                      <BarChart2 size={18} />
                      <h4>Impressions</h4>
                    </div>
                    <div className="Influencer_MetricValue">{analyticsData.impressions.toLocaleString()}</div>
                    <div className="Influencer_MetricChange Influencer_Positive">+12%</div>
                  </div>
                  <div className="Influencer_MetricCard">
                    <div className="Influencer_MetricHeader">
                      <Heart size={18} />
                      <h4>Engagements</h4>
                    </div>
                    <div className="Influencer_MetricValue">{analyticsData.engagements.toLocaleString()}</div>
                    <div className="Influencer_MetricChange Influencer_Positive">+7%</div>
                  </div>
                  <div className="Influencer_MetricCard">
                    <div className="Influencer_MetricHeader">
                      <Users size={18} />
                      <h4>Followers</h4>
                    </div>
                    <div className="Influencer_MetricValue">{analyticsData.followers.toLocaleString()}</div>
                    <div className="Influencer_MetricChange Influencer_Positive">+3%</div>
                  </div>
                  <div className="Influencer_MetricCard">
                    <div className="Influencer_MetricHeader">
                      <DollarSign size={18} />
                      <h4>Click Rate</h4>
                    </div>
                    <div className="Influencer_MetricValue">{analyticsData.clickRate}%</div>
                    <div className="Influencer_MetricChange Influencer_Negative">-0.2%</div>
                  </div>
                </div>
                <div className="Influencer_ChartsContainer">
                  <PerformanceLineChart
                    data={analyticsData.performanceTime}
                    dateRange={dateRange}
                    setDateRange={setDateRange}
                  />
                  <CampaignBarChart data={analyticsData.campaignComparison} />
                  <div className="Influencer_ChartContainer">
                    <div className="Influencer_ChartHeader">
                      <h4>Audience Demographics</h4>
                      <button className="Influencer_Btn Influencer_BtnText">
                        <Download size={16} /> Export
                      </button>
                    </div>
                    <div className="Influencer_DemographicsGrid">
                      <AgePieChart data={analyticsData.ageDistribution} />
                    </div>
                  </div>
                  <EngagementHeatmap data={analyticsData.engagementHeatmap} />
                </div>
                <div className="Influencer_TopPerforming">
                  <h3>Top Performing Posts</h3>
                  <div className="Influencer_PostsList">
                    {posts.slice(0, 3).map((post, i) => (
                      <div key={post.id} className="Influencer_PerformancePost">
                        <img src={post.image} alt="Post" />
                        <div className="Influencer_PostMetrics">
                          <div>Impressions: {post.impressions.toLocaleString()}</div>
                          <div>Engagements: {(post.likes + post.comments.length).toLocaleString()}</div>
                          <div>Engagement Rate: {post.engagementRate}%</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        )}
        {activeTab === 'gamification' && (
          <div className="Influencer_GamificationContainer">
            <div className="Influencer_ScoreCard">
              <h3>Your Current Score</h3>
              <div className="Influencer_ScoreValue">1,450</div>
              <div className="Influencer_ScoreLevel">Gold Tier</div>
              <div className="Influencer_ProgressBar">
                <div className="Influencer_Progress" style={{ width: '65%' }}></div>
              </div>
              <div className="Influencer_ProgressText">650 points to Platinum</div>
            </div>
            <div className="Influencer_BadgesContainer">
              <h3>Available Badges</h3>
              <div className="Influencer_BadgesList">
                {gamificationData.map((badge, i) => (
                  <div key={i} className="Influencer_BadgeCard">
                    <img src={badge.image} alt={badge.title} />
                    <h4>{badge.title}</h4>
                    <div className="Influencer_BadgeProgress">
                      <div className="Influencer_ProgressBar">
                        <div className="Influencer_Progress" style={{ width: `${badge.progress}%` }}></div>
                      </div>
                      <span>{badge.progress}/{badge.target}</span>
                    </div>
                    <div className="Influencer_BadgeReward">Reward: {badge.reward}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="Influencer_Leaderboard">
              <h3>Leaderboard</h3>
              <div className="Influencer_LeaderboardList">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="Influencer_LeaderboardItem">
                    <span className="Influencer_Rank">{i + 1}</span>
                    <img src={`https://source.unsplash.com/random/40x40/?user${i}`} alt="User" />
                    <span className="Influencer_Username">user_{i + 1}</span>
                    <span className="Influencer_Score">{(5 - i) * 1000} pts</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        {activeTab === 'ads' && (
          <div className="Influencer_AdsContainer">
            <div className="Influencer_AdsHeader">
              <h2>Brand Advertisement Campaigns</h2>
              <p>View and engage with brand advertisements to earn rewards</p>
            </div>
            <div className="Influencer_FilterControlsEnhanced">
              <div className="Influencer_SearchBar">
                <Search className="Influencer_SearchIcon" size={18} />
                <input
                  type="text"
                  placeholder="Search ads..."
                  value={adFilters.searchQuery}
                  onChange={(e) => setAdFilters({ ...adFilters, searchQuery: e.target.value })}
                />
              </div>
              <div className="Influencer_FilterPanel">
                <div className="Influencer_FilterGroup">
                  <label>Audience</label>
                  <div className="Influencer_CheckboxGroup">
                    {['tech', 'fashion', 'young_adults', 'women'].map(audience => (
                      <label key={audience}>
                        <input
                          type="checkbox"
                          checked={adFilters.audience.includes(audience)}
                          onChange={() => {
                            if (adFilters.audience.includes(audience)) {
                              setAdFilters({
                                ...adFilters,
                                audience: adFilters.audience.filter(a => a !== audience)
                              });
                            } else {
                              setAdFilters({
                                ...adFilters,
                                audience: [...adFilters.audience, audience]
                              });
                            }
                          }}
                        />
                        {audience.charAt(0).toUpperCase() + audience.slice(1)}
                      </label>
                    ))}
                  </div>
                </div>
                <div className="Influencer_FilterGroup">
                  <label>Sort By</label>
                  <select
                    value={adFilters.sortBy}
                    onChange={(e) => setAdFilters({ ...adFilters, sortBy: e.target.value })}
                  >
                    <option value="recent">Most Recent</option>
                    <option value="views">Most Views</option>
                    <option value="ctr">Highest CTR</option>
                  </select>
                </div>
                <div className="Influencer_FilterGroup">
                  <label>Min CTR (%)</label>
                  <input
                    type="number"
                    value={adFilters.minCTR}
                    onChange={(e) => setAdFilters({ ...adFilters, minCTR: parseFloat(e.target.value) || 0 })}
                  />
                </div>
                <div className="Influencer_FilterGroup">
                  <label>Min Views</label>
                  <input
                    type="number"
                    value={adFilters.minViews}
                    onChange={(e) => setAdFilters({ ...adFilters, minViews: parseInt(e.target.value) || 0 })}
                  />
                </div>
              </div>
            </div>
            <div className="Influencer_AdsGrid">
              {brandAds.map(ad => (
                <Ad
                  key={ad.id}
                  ad={ad}
                  newComments={newComments}
                  handleLikeAd={(id) => {
                    setBrandAds(brandAds.map(ad =>
                      ad.id === id
                        ? {
                            ...ad,
                            isLiked: !ad.isLiked,
                            gamification: {
                              ...ad.gamification,
                              tasks: ad.gamification.tasks.map(task =>
                                task.action === 'like' ? { ...task, completed: !ad.isLiked } : task
                              )
                            }
                          }
                        : ad
                    ));
                  }}
                  handleAddAdComment={(id) => {
                    const commentText = newComments[id]?.trim();
                    if (!commentText) return;
                    setBrandAds(brandAds.map(ad =>
                      ad.id === id
                        ? {
                            ...ad,
                            comments: [
                              ...ad.comments,
                              {
                                id: ad.comments.length + 1,
                                username: currentUser.username,
                                text: commentText,
                                avatar: currentUser.avatar
                              }
                            ],
                            gamification: {
                              ...ad.gamification,
                              tasks: ad.gamification.tasks.map(task =>
                                task.action === 'comment' ? { ...task, completed: true } : task
                              )
                            }
                          }
                        : ad
                    ));
                    setNewComments({ ...newComments, [id]: '' });
                  }}
                  handleShare={(id) => {
                    setBrandAds(brandAds.map(ad =>
                      ad.id === id
                        ? {
                            ...ad,
                            gamification: {
                              ...ad.gamification,
                              tasks: ad.gamification.tasks.map(task =>
                                task.action === 'share'
                                  ? {
                                      ...task,
                                      currentShares: (task.currentShares || 0) + 1,
                                      completed: (task.currentShares || 0) + 1 >= (task.target || 1)
                                    }
                                  : task
                              )
                            }
                          }
                        : ad
                    ));
                    showNotification('Ad shared successfully!');
                  }}
                  setNewComments={setNewComments}
                />
              ))}
            </div>
          </div>
        )}
      </div>
      {showVideoModal && (
        <div className="Influencer_Modal">
          <div className="Influencer_ModalContent">
            <div className="Influencer_ModalHeader">
              <h3>Schedule Video Call</h3>
              <button onClick={() => setShowVideoModal(false)}>×</button>
            </div>
            <div className="Influencer_ModalBody">
              <div className="Influencer_FormGroup">
                <label>Meeting Title</label>
                <input type="text" defaultValue={activeConversation ? `Discussion about ${activeConversation.name}` : 'Campaign Discussion'} />
              </div>
              <div className="Influencer_FormRow">
                <div className="Influencer_FormGroup">
                  <label>Date</label>
                  <input type="date" />
                </div>
                <div className="Influencer_FormGroup">
                  <label>Time</label>
                  <input type="time" />
                </div>
              </div>
            </div>
            <div className="Influencer_ModalActions">
              <button className="Influencer_Btn Influencer_BtnPrimary" onClick={() => { setShowVideoModal(false); showNotification('Meeting scheduled'); }}><Calendar size={16} /> Schedule Meeting</button>
              <button className="Influencer_Btn Influencer_BtnOutline" onClick={() => setShowVideoModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
      {showAddParticipants && (
        <div className="Influencer_Modal">
          <div className="Influencer_ModalContent">
            <div className="Influencer_ModalHeader">
              <h3>Add Participants</h3>
              <button onClick={() => setShowAddParticipants(false)}>×</button>
            </div>
            <div className="Influencer_ModalBody">
              <div className="Influencer_SearchBar">
                <Search size={16} />
                <input type="text" placeholder="Search participants..." />
              </div>
              <div className="Influencer_ParticipantsList">
                {availableParticipants
                  .filter(p => !activeConversation?.participants.includes(p.name))
                  .map(participant => (
                    <div key={participant.id} className="Influencer_ParticipantItem">
                      <div className="Influencer_ParticipantInfo">
                        <div className="Influencer_ParticipantAvatar">{participant.name.charAt(0)}</div>
                        <div className="Influencer_ParticipantName">{participant.name}</div>
                      </div>
                      <button className="Influencer_Btn Influencer_BtnOutline" onClick={() => addParticipants([participant.name])}>Add</button>
                    </div>
                  ))}
              </div>
            </div>
            <div className="Influencer_ModalActions">
              <button className="Influencer_Btn Influencer_BtnPrimary" onClick={() => {
                const newParticipants = availableParticipants
                  .filter(p => !activeConversation?.participants.includes(p.name))
                  .map(p => p.name);
                addParticipants(newParticipants);
              }}>Add All</button>
              <button className="Influencer_Btn Influencer_BtnOutline" onClick={() => setShowAddParticipants(false)}>Done</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Influencer;