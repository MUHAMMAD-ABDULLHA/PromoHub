// import React, { useState } from 'react';
// import { 
//   Heart, MessageSquare, Share2, MoreHorizontal, Home, Search, PlusSquare, 
//   User, Settings, ChevronLeft, ChevronRight, X, Send, Bookmark, Grid, List, 
//   Filter, Award
// } from 'lucide-react';
// import "../UserManagement.css";

// // Story Component
// const Story = ({ story, index, storyViewed, onOpen }) => (
//   <div 
//     className={`story ${storyViewed[index] ? 'story-viewed' : ''}`}
//     onClick={() => onOpen(index)}
//   >
//     <div className="story-avatar">
//       <img src={story.avatar} alt={story.username} />
//     </div>
//     <span>{story.username}</span>
//   </div>
// );

// // Post Component
// const Post = ({ post, currentUser, newComments, handleLike, toggleComments, handleAddComment, handleSavePost, setNewComments }) => (
//   <div className={`post ${post.sponsored ? 'sponsored' : ''}`}>
//     <div className="post-header">
//       <img src={post.avatar} alt={post.username} className="post-avatar" />
//       <span className="post-username">{post.username}</span>
//       {post.sponsored && <span className="sponsored-badge">Sponsored</span>}
//       <button className="post-more">
//         <MoreHorizontal size={20} />
//       </button>
//     </div>
    
//     <img src={post.image} alt="Post" className="post-image" />
    
//     <div className="post-actions">
//       <button onClick={() => handleLike(post.id)}>
//         <Heart 
//           size={24} 
//           fill={post.isLiked ? '#ff0000' : 'none'} 
//           color={post.isLiked ? '#ff0000' : '#000'} 
//         />
//       </button>
//       <button onClick={() => toggleComments(post.id)}>
//         <MessageSquare size={24} />
//       </button>
//       <button>
//         <Share2 size={24} />
//       </button>
//       <button 
//         className="save-button" 
//         onClick={() => handleSavePost(post.id)}
//       >
//         <Bookmark 
//           size={24} 
//           fill={post.isSaved ? '#000' : 'none'} 
//         />
//       </button>
//     </div>
    
//     <div className="post-likes">{post.likes.toLocaleString()} likes</div>
    
//     <div className="post-caption">
//       <span className="post-caption-username">{post.username}</span>
//       {post.caption}
//     </div>
    
//     {post.comments.length > 0 && !post.showComments && (
//       <div 
//         className="view-comments" 
//         onClick={() => toggleComments(post.id)}
//       >
//         View all {post.comments.length} comments
//       </div>
//     )}
    
//     <div className="post-stats">
//       Impressions: {post.impressions.toLocaleString()} • Engagement: {post.engagementRate}%
//     </div>
    
//     <div className="post-time">{post.time}</div>
    
//     {post.showComments && (
//       <div className="comments-section">
//         {post.comments.map(comment => (
//           <div key={comment.id} className="comment">
//             <img src={comment.avatar} alt={comment.username} className="comment-avatar" />
//             <div className="comment-content">
//               <span className="comment-username">{comment.username}</span>
//               {comment.text}
//             </div>
//           </div>
//         ))}
        
//         <div className="add-comment">
//           <input
//             type="text"
//             className="comment-input"
//             placeholder="Add a comment..."
//             value={newComments[post.id] || ''}
//             onChange={(e) => setNewComments({
//               ...newComments,
//               [post.id]: e.target.value
//             })}
//             onKeyPress={(e) => e.key === 'Enter' && handleAddComment(post.id)}
//           />
//           <button 
//             className="post-button"
//             onClick={() => handleAddComment(post.id)}
//             disabled={!newComments[post.id]?.trim()}
//           >
//             Post
//           </button>
//         </div>
//       </div>
//     )}
//   </div>
// );

// // Ad Component
// const Ad = ({ ad, newComments, handleLikeAd, handleAddAdComment, handleShare, setNewComments }) => (
//   <div className="ad-card">
//     <div className="ad-image-container">
//       <img src={ad.adImage} alt={ad.brandName} className="ad-image" />
//       {ad.gamification?.hasReward && (
//         <div className="gamification-badge">
//           <Award size={16} color="#333" />
//           <div className="gamification-tooltip">
//             <h4>Earn {ad.gamification.totalPoints} points</h4>
//             {ad.gamification.tasks.map((task, i) => (
//               <div 
//                 key={i} 
//                 className={`gamification-task ${task.completed ? 'completed' : ''}`}
//               >
//                 {task.completed ? '✓ ' : ''}
//                 {task.action === 'like' && 'Like this ad: '}
//                 {task.action === 'comment' && 'Comment on this ad: '}
//                 {task.action === 'share' && `Share ${task.currentShares || 0}/${task.target || 1} times: `}
//                 {task.points} points
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>

//     <div className="ad-info">
//       <div className="ad-header">
//         <img src={ad.brandLogo} alt={ad.brandName} className="brand-logo" />
//         <span className="brand-name">{ad.brandName}</span>
//       </div>
      
//       <p className="ad-caption">{ad.caption}</p>
      
//       <div className="ad-stats">
//         <div className="stat-item">
//           <span className="stat-label">Views</span>
//           <span className="stat-value">{ad.views.toLocaleString()}</span>
//         </div>
//         <div className="stat-item">
//           <span className="stat-label">Clicks</span>
//           <span className="stat-value">{ad.clicks.toLocaleString()}</span>
//         </div>
//         <div className="stat-item">
//           <span className="stat-label">CTR</span>
//           <span className="stat-value">{ad.ctr}%</span>
//         </div>
//         <div className="stat-item">
//           <span className="stat-label">Posted</span>
//           <span className="stat-value">{ad.postedDate}</span>
//         </div>
//       </div>
      
//       <div className="ad-actions">
//         <button 
//           className="action-button like-button"
//           onClick={() => handleLikeAd(ad.id)}
//         >
//           <Heart 
//             size={18} 
//             fill={ad.isLiked ? 'currentColor' : 'none'} 
//           />
//           Like
//         </button>
//         <button 
//           className="action-button comment-button"
//           onClick={() => {
//             document.getElementById(`comment-input-${ad.id}`)?.focus();
//           }}
//         >
//           <MessageSquare size={18} />
//           Comment
//         </button>
//         <button 
//           className="action-button share-button"
//           onClick={() => handleShare(ad.id)}
//         >
//           <Share2 size={18} />
//           Share
//         </button>
//       </div>
      
//       {ad.comments.length > 0 && (
//         <div className="comments-section">
//           {ad.comments.slice(0, 2).map(comment => (
//             <div key={comment.id} className="comment">
//               <img 
//                 src={comment.avatar} 
//                 alt={comment.username} 
//                 className="comment-avatar"
//               />
//               <div className="comment-content">
//                 <span className="comment-username">{comment.username}</span>
//                 {comment.text}
//               </div>
//             </div>
//           ))}
//           {ad.comments.length > 2 && (
//             <div style={{ color: '#666', fontSize: '12px' }}>
//               View all {ad.comments.length} comments
//             </div>
//           )}
//         </div>
//       )}
      
//       <div className="add-comment">
//         <input
//           id={`comment-input-${ad.id}`}
//           type="text"
//           className="comment-input"
//           placeholder="Add a comment..."
//           value={newComments[ad.id] || ''}
//           onChange={(e) => setNewComments({
//             ...newComments,
//             [ad.id]: e.target.value
//           })}
//         />
//         <button
//           className="post-comment-button"
//           onClick={() => handleAddAdComment(ad.id)}
//           disabled={!newComments[ad.id]?.trim()}
//         >
//           Post
//         </button>
//       </div>
//     </div>
//   </div>
// );

// // Conversation Component
// const Conversation = ({ conversation, setSelectedConversation }) => (
//   <div 
//     className={`conversation ${conversation.unread ? 'unread' : ''}`}
//     onClick={() => setSelectedConversation(conversation.id)}
//   >
//     <img src={conversation.avatar} alt={conversation.username} className="conversation-avatar" />
//     <div className="conversation-info">
//       <div className="conversation-header">
//         <span className="conversation-username">{conversation.username}</span>
//         <span className="conversation-time">{conversation.time}</span>
//       </div>
//       <p className="conversation-preview">
//         {conversation.isGroup && (
//           <span className="group-indicator">{conversation.username}: </span>
//         )}
//         {conversation.lastMessage}
//       </p>
//     </div>
//   </div>
// );

// // Message Component
// const Message = ({ message, currentUser }) => (
//   <div 
//     className={`message ${message.sender === currentUser.username ? 'sent' : 'received'}`}
//   >
//     <p>{message.text}</p>
//     <span className="message-time">{message.time}</span>
//   </div>
// );

// // StoryViewer Component
// const StoryViewer = ({ stories, currentStoryIndex, storyLiked, handleStoryLike, navigateStory, closeStory }) => (
//   <div className="story-viewer">
//     <div className="story-header">
//       <div className="story-user">
//         <img 
//           src={stories[currentStoryIndex].avatar} 
//           alt={stories[currentStoryIndex].username} 
//           className="story-user-avatar"
//         />
//         <span>{stories[currentStoryIndex].username}</span>
//         <span className="story-time">{stories[currentStoryIndex].time}</span>
//       </div>
//       <button onClick={closeStory}>
//         <X color="white" size={24} />
//       </button>
//     </div>

//     <div className="story-progress">
//       {stories.map((_, i) => (
//         <div key={i} className="story-progress-bar">
//           <div 
//             className="story-progress-fill" 
//             style={{ width: i === currentStoryIndex ? '100%' : i < currentStoryIndex ? '100%' : '0%' }}
//           />
//         </div>
//       ))}
//     </div>

//     <div className="story-content">
//       <div 
//         className="story-nav prev" 
//         onClick={() => navigateStory('prev')}
//       >
//         <ChevronLeft color="white" size={32} />
//       </div>

//       <img 
//         src={stories[currentStoryIndex].image} 
//         alt="Story" 
//         className="story-image"
//       />

//       <div 
//         className="story-nav next" 
//         onClick={() => navigateStory('next')}
//       >
//         <ChevronRight color="white" size={32} />
//       </div>
//     </div>

//     <div className="story-actions">
//       <button 
//         className="story-action-btn"
//         onClick={handleStoryLike}
//       >
//         <Heart 
//           fill={storyLiked[currentStoryIndex] ? 'red' : 'none'} 
//           color={storyLiked[currentStoryIndex] ? 'red' : 'white'} 
//         />
//         <span className="story-action-text">Like</span>
//       </button>
//       <button className="story-action-btn">
//         <MessageSquare color="white" />
//         <span className="story-action-text">Reply</span>
//       </button>
//       <button className="story-action-btn">
//         <Share2 color="white" />
//         <span className="story-action-text">Share</span>
//       </button>
//     </div>

//     <div className="story-comments">
//       {stories[currentStoryIndex].comments.map(comment => (
//         <div key={comment.id} className="story-comment">
//           <img 
//             src={comment.avatar} 
//             alt={comment.username} 
//             className="story-comment-avatar"
//           />
//           <div className="story-comment-content">
//             <span className="story-comment-username">{comment.username}</span>
//             {comment.text}
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// );

// // SettingsModal Component
// const SettingsModal = ({ currentUser, setCurrentUser, setShowSettings }) => (
//   <div className="settings-modal">
//     <div className="settings-header">
//       <button 
//         className="close-settings"
//         onClick={() => setShowSettings(false)}
//       >
//         <X size={24} />
//       </button>
//       <h2>Settings</h2>
//     </div>

//     <div className="settings-content">
//       <div className="settings-section">
//         <h3>Profile</h3>
//         <div className="settings-form">
//           <div className="form-group">
//             <label>Username</label>
//             <input 
//               type="text" 
//               value={currentUser.username}
//               onChange={(e) => setCurrentUser(prev => ({
//                 ...prev,
//                 username: e.target.value
//               }))}
//             />
//           </div>
//           <div className="form-group">
//             <label>Full Name</label>
//             <input 
//               type="text" 
//               value={currentUser.fullName}
//               onChange={(e) => setCurrentUser(prev => ({
//                 ...prev,
//                 fullName: e.target.value
//               }))}
//             />
//           </div>
//           <div className="form-group">
//             <label>Bio</label>
//             <textarea 
//               value={currentUser.bio}
//               onChange={(e) => setCurrentUser(prev => ({
//                 ...prev,
//                 bio: e.target.value
//               }))}
//             />
//           </div>
//         </div>
//       </div>

//       <div className="settings-actions">
//         <button 
//           className="save-settings"
//           onClick={() => setShowSettings(false)}
//         >
//           Save Changes
//         </button>
//         <button className="logout-button">
//           Log Out
//         </button>
//       </div>
//     </div>
//   </div>
// );

// // ProfileView Component
// const ProfileView = ({ currentUser, userPosts, profileViewMode, setProfileViewMode, toggleFollow, setShowSettings }) => (
//   <div className="profile-view">
//     <div className="profile-header">
//       <div className="profile-avatar-container">
//         <img src={currentUser.avatar} alt={currentUser.username} className="profile-avatar" />
//       </div>
//       <div className="profile-stats">
//         <div className="profile-stat">
//           <span className="stat-number">{userPosts.length}</span>
//           <span className="stat-label">Posts</span>
//         </div>
//         <div className="profile-stat">
//           <span className="stat-number">{currentUser.followers}</span>
//           <span className="stat-label">Followers</span>
//         </div>
//         <div className="profile-stat">
//           <span className="stat-number">{currentUser.following}</span>
//           <span className="stat-label">Following</span>
//         </div>
//       </div>
//     </div>

//     <div className="profile-info">
//       <h2 className="profile-name">{currentUser.fullName}</h2>
//       <p className="profile-bio">{currentUser.bio}</p>
//     </div>

//     <div className="profile-actions">
//       <button 
//         className={`profile-action-btn ${currentUser.isFollowing ? 'following' : ''}`}
//         onClick={toggleFollow}
//       >
//         {currentUser.isFollowing ? 'Following' : 'Follow'}
//       </button>
//       <button 
//         className="profile-action-btn"
//         onClick={() => setShowSettings(true)}
//       >
//         <Settings size={18} />
//       </button>
//     </div>

//     <div className="profile-view-toggle">
//       <button 
//         className={`view-toggle-btn ${profileViewMode === 'grid' ? 'active' : ''}`}
//         onClick={() => setProfileViewMode('grid')}
//       >
//         <Grid size={24} />
//       </button>
//       <button 
//         className={`view-toggle-btn ${profileViewMode === 'list' ? 'active' : ''}`}
//         onClick={() => setProfileViewMode('list')}
//       >
//         <List size={24} />
//       </button>
//     </div>

//     <div className={`user-posts ${profileViewMode}`}>
//       {userPosts.map(post => (
//         <div key={post.id} className="user-post">
//           <img src={post.image} alt="User post" />
//           <div className="post-overlay">
//             <span><Heart size={16} /> {post.likes}</span>
//             <span><MessageSquare size={16} /> {post.comments.length}</span>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// );

// // Main UserManagement Component
// const UserManagement = () => {
//   // State declarations
//   const [activeTab, setActiveTab] = useState('social');
//   const [activeSocialTab, setActiveSocialTab] = useState('home');
//   const [showSettings, setShowSettings] = useState(false);
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
//     },
//     {
//       id: 2,
//       username: 'tech_company',
//       avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
//       image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
//       caption: 'Our new product launch is coming soon! Stay tuned for updates. #tech #innovation',
//       likes: 892,
//       comments: [
//         { id: 1, username: 'techfan', text: "Can't wait for this!", avatar: 'https://images.unsplash.com/photo-1522556189639-b1509e7e43f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80' }
//       ],
//       time: '5 HOURS AGO',
//       sponsored: false,
//       impressions: 9800,
//       engagementRate: 3.8,
//       isLiked: false,
//       showComments: false,
//       isSaved: false
//     }
//   ]);

//   const [stories, setStories] = useState([
//     {
//       id: 1,
//       username: 'travel_enthusiast',
//       avatar: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
//       image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
//       comments: [
//         { id: 1, username: 'user3', text: 'Beautiful place!', avatar: 'https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80' }
//       ],
//       time: '30 MINUTES AGO'
//     },
//     {
//       id: 2,
//       username: 'food_blogger',
//       avatar: 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
//       image: 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
//       comments: [],
//       time: '1 HOUR AGO'
//     }
//   ]);

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
//       username: 'group_chat',
//       avatar: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
//       lastMessage: 'Meeting at 3pm tomorrow',
//       time: '1d ago',
//       unread: false,
//       isGroup: true,
//       messages: [
//         { id: 1, sender: 'user2', text: 'Anyone free tomorrow?', time: '9:00 AM' },
//         { id: 2, sender: 'user3', text: 'I can meet in the afternoon', time: '9:15 AM' },
//         { id: 3, sender: 'user1', text: 'Meeting at 3pm tomorrow', time: '5:30 PM' }
//       ]
//     }
//   ]);

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
//     },
//     {
//       id: 2,
//       brandName: 'FashionHub',
//       brandLogo: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
//       adImage: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
//       caption: 'New arrivals in store! #fashion',
//       views: 20000,
//       clicks: 800,
//       ctr: 4.0,
//       postedDate: '2025-05-14',
//       targetAudience: ['fashion', 'women'],
//       status: 'active',
//       isLiked: false,
//       comments: [],
//       gamification: {
//         hasReward: true,
//         totalPoints: 40,
//         tasks: [
//           { action: 'like', points: 10, completed: false },
//           { action: 'comment', points: 15, completed: false },
//           { action: 'share', points: 15, currentShares: 0, target: 1, completed: false }
//         ]
//       }
//     }
//   ]);

//   const [socialFilters, setSocialFilters] = useState({
//     searchQuery: '',
//     sortBy: 'recent',
//     contentType: []
//   });

//   const [adFilters, setAdFilters] = useState({
//     searchQuery: '',
//     audience: [],
//     sortBy: 'recent',
//     minCTR: 0,
//     minViews: 0
//   });

//   const [newComments, setNewComments] = useState({});
//   const [storyViewed, setStoryViewed] = useState(stories.map(() => false));
//   const [currentStoryIndex, setCurrentStoryIndex] = useState(null);
//   const [storyLiked, setStoryLiked] = useState(stories.map(() => false));
//   const [selectedConversation, setSelectedConversation] = useState(null);
//   const [newMessage, setNewMessage] = useState('');
//   const [userPosts, setUserPosts] = useState(posts.filter(post => post.username === currentUser.username));
//   const [profileViewMode, setProfileViewMode] = useState('grid');
//   const [timeRange, setTimeRange] = useState('7d');
//   const [analyticsData, setAnalyticsData] = useState({
//     impressions: 25000,
//     engagements: 1500,
//     followers: 1250,
//     clickRate: 3.5
//   });
//   const [gamificationData, setGamificationData] = useState([
//     {
//       title: 'Engager',
//       image: 'https://source.unsplash.com/random/100x100/?badge',
//       progress: 80,
//       target: 100,
//       reward: '50 points'
//     },
//     {
//       title: 'Influencer',
//       image: 'https://source.unsplash.com/random/100x100/?trophy',
//       progress: 40,
//       target: 100,
//       reward: '100 points'
//     }
//   ]);

//   const contentTypeOptions = ['posts', 'sponsored'];
//   const audienceOptions = ['tech', 'fashion', 'young_adults', 'women'];

//   // New functionality: Create post
//   const handleCreatePost = () => {
//     const newPost = {
//       id: posts.length + 1,
//       username: currentUser.username,
//       avatar: currentUser.avatar,
//       image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
//       caption: 'New post! #created',
//       likes: 0,
//       comments: [],
//       time: 'Just now',
//       sponsored: false,
//       impressions: 0,
//       engagementRate: 0,
//       isLiked: false,
//       showComments: false,
//       isSaved: false
//     };
//     setPosts([newPost, ...posts]);
//     setCurrentUser(prev => ({
//       ...prev,
//       posts: prev.posts + 1
//     }));
//     setUserPosts([newPost, ...userPosts]);
//   };

//   const handleLike = (postId) => {
//     setPosts(posts.map(post =>
//       post.id === postId
//         ? { ...post, isLiked: !post.isLiked, likes: post.isLiked ? post.likes - 1 : post.likes + 1 }
//         : post
//     ));
//   };

//   const toggleComments = (postId) => {
//     setPosts(posts.map(post =>
//       post.id === postId ? { ...post, showComments: !post.showComments } : post
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

//   const handleSavePost = (postId) => {
//     setPosts(posts.map(post =>
//       post.id === postId ? { ...post, isSaved: !post.isSaved } : post
//     ));
//   };

//   const handleLikeAd = (adId) => {
//     setBrandAds(brandAds.map(ad =>
//       ad.id === adId
//         ? {
//             ...ad,
//             isLiked: !ad.isLiked,
//             gamification: ad.gamification.hasReward
//               ? {
//                   ...ad.gamification,
//                   tasks: ad.gamification.tasks.map(task =>
//                     task.action === 'like' ? { ...task, completed: !ad.isLiked } : task
//                   )
//                 }
//               : ad.gamification
//           }
//         : ad
//     ));
//   };

//   const handleAddAdComment = (adId) => {
//     const commentText = newComments[adId]?.trim();
//     if (!commentText) return;

//     setBrandAds(brandAds.map(ad =>
//       ad.id === adId
//         ? {
//             ...ad,
//             comments: [
//               ...ad.comments,
//               {
//                 id: ad.comments.length + 1,
//                 username: currentUser.username,
//                 text: commentText,
//                 avatar: currentUser.avatar
//               }
//             ],
//             gamification: ad.gamification.hasReward
//               ? {
//                   ...ad.gamification,
//                   tasks: ad.gamification.tasks.map(task =>
//                     task.action === 'comment' ? { ...task, completed: true } : task
//                   )
//                 }
//               : ad.gamification
//           }
//         : ad
//     ));
//     setNewComments({ ...newComments, [adId]: '' });
//   };

//   const handleShare = (adId) => {
//     setBrandAds(brandAds.map(ad =>
//       ad.id === adId
//         ? {
//             ...ad,
//             gamification: ad.gamification.hasReward
//               ? {
//                   ...ad.gamification,
//                   tasks: ad.gamification.tasks.map(task =>
//                     task.action === 'share'
//                       ? {
//                           ...task,
//                           currentShares: (task.currentShares || 0) + 1,
//                           completed: ((task.currentShares || 0) + 1) >= task.target
//                         }
//                       : task
//                   )
//                 }
//               : ad.gamification
//           }
//         : ad
//     ));
//   };

//   const openStory = (index) => {
//     setCurrentStoryIndex(index);
//     setStoryViewed(prev => {
//       const newViewed = [...prev];
//       newViewed[index] = true;
//       return newViewed;
//     });
//   };

//   const handleStoryLike = () => {
//     setStoryLiked(prev => {
//       const newLiked = [...prev];
//       newLiked[currentStoryIndex] = !newLiked[currentStoryIndex];
//       return newLiked;
//     });
//   };

//   const navigateStory = (direction) => {
//     if (direction === 'prev' && currentStoryIndex > 0) {
//       setCurrentStoryIndex(currentStoryIndex - 1);
//     } else if (direction === 'next' && currentStoryIndex < stories.length - 1) {
//       setCurrentStoryIndex(currentStoryIndex + 1);
//     }
//   };

//   const closeStory = () => {
//     setCurrentStoryIndex(null);
//   };

//   const handleSendMessage = () => {
//     const messageText = newMessage.trim();
//     if (!messageText || !selectedConversation) return;

//     setMessages(messages.map(conversation =>
//       conversation.id === selectedConversation
//         ? {
//             ...conversation,
//             messages: [
//               ...conversation.messages,
//               {
//                 id: conversation.messages.length + 1,
//                 sender: currentUser.username,
//                 text: messageText,
//                 time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
//               }
//             ],
//             lastMessage: messageText,
//             time: 'Just now',
//             unread: false
//           }
//         : conversation
//     ));
//     setNewMessage('');
//   };

//   const toggleFollow = () => {
//     setCurrentUser(prev => ({
//       ...prev,
//       isFollowing: !prev.isFollowing,
//       followers: prev.isFollowing ? prev.followers - 1 : prev.followers + 1
//     }));
//   };

//   const toggleAudienceFilter = (audience) => {
//     setAdFilters({
//       ...adFilters,
//       audience: adFilters.audience.includes(audience)
//         ? adFilters.audience.filter(a => a !== audience)
//         : [...adFilters.audience, audience]
//     });
//   };

//   const toggleAdStatus = (id) => {
//     setBrandAds(brandAds.map(ad =>
//       ad.id === id 
//         ? { ...ad, status: ad.status === 'active' ? 'paused' : 'active' }
//         : ad
//     ));
//   };

//   // Enhanced filter for social content
//   const filteredPosts = posts.filter(post => {
//     if (socialFilters.searchQuery && 
//         !post.caption.toLowerCase().includes(socialFilters.searchQuery.toLowerCase()) &&
//         !post.username.toLowerCase().includes(socialFilters.searchQuery.toLowerCase())) {
//       return false;
//     }
//     if (socialFilters.contentType.length > 0) {
//       if (socialFilters.contentType.includes('sponsored') && !post.sponsored) return false;
//       if (socialFilters.contentType.includes('posts') && post.sponsored) return false;
//     }
//     return true;
//   }).sort((a, b) => {
//     if (socialFilters.sortBy === 'recent') {
//       const timeA = a.time === 'Just now' ? new Date() : new Date();
//       const timeB = b.time === 'Just now' ? new Date() : new Date();
//       return timeB - timeA;
//     }
//     if (socialFilters.sortBy === 'likes') return b.likes - a.likes;
//     return 0;
//   });

//   // Enhanced filter for ads
//   const filteredAds = brandAds.filter(ad => {
//     if (adFilters.searchQuery && 
//         !ad.brandName.toLowerCase().includes(adFilters.searchQuery.toLowerCase()) &&
//         !ad.caption.toLowerCase().includes(adFilters.searchQuery.toLowerCase())) {
//       return false;
//     }
//     if (adFilters.audience.length > 0 && 
//         !adFilters.audience.some(aud => ad.targetAudience.includes(aud))) {
//       return false;
//     }
//     if (adFilters.minCTR && ad.ctr < adFilters.minCTR) return false;
//     if (adFilters.minViews && ad.views < adFilters.minViews) return false;
//     return true;
//   }).sort((a, b) => {
//     if (adFilters.sortBy === 'recent') return new Date(b.postedDate) - new Date(a.postedDate);
//     if (adFilters.sortBy === 'views') return b.views - a.views;
//     if (adFilters.sortBy === 'ctr') return b.ctr - a.ctr;
//     return 0;
//   });

//   return (
//     <div className="user-management">
//       <style>{`
//         .like-button {
//           background: ${brandAds.some(ad => ad.isLiked) ? '#ffebee' : '#f5f5f5'};
//           color: ${brandAds.some(ad => ad.isLiked) ? '#f44336' : '#333'};
//         }
//       `}</style>

//       <div className="tabs">
//         <div 
//           className={`tab ${activeTab === 'social' ? 'active' : ''}`}
//           onClick={() => setActiveTab('social')}
//         >
//           Social Media
//         </div>
//         <div 
//           className={`tab ${activeTab === 'ads' ? 'active' : ''}`}
//           onClick={() => setActiveTab('ads')}
//         >
//           Brand Ads
//         </div>
//         <div 
//           className={`tab ${activeTab === 'dashboard' ? 'active' : ''}`}
//           onClick={() => setActiveTab('dashboard')}
//         >
//           Analytics Dashboard
//         </div>
//         <div 
//           className={`tab ${activeTab === 'gamification' ? 'active' : ''}`}
//           onClick={() => setActiveTab('gamification')}
//         >
//           Gamification
//         </div>
//       </div>

//       {activeTab === 'social' && (
//         <div className="social-app">
//           <header className="app-header">
//             <h1 className="app-logo">PromoHub</h1>
//             <div className="header-icons">
//               <button className="header-icon" onClick={handleCreatePost}>
//                 <PlusSquare size={24} />
//               </button>
//               <button className="header-icon">
//                 <Heart size={24} />
//               </button>
//               <button 
//                 className="header-icon"
//                 onClick={() => {
//                   setActiveSocialTab('messages');
//                   setSelectedConversation(null);
//                 }}
//               >
//                 <MessageSquare size={24} />
//               </button>
//             </div>
//           </header>

//           <main className="app-main">
//             {activeSocialTab === 'home' && (
//               <div className="home-feed">
//                 <div className="filter-controls">
//                   <div className="search-bar">
//                     <Search className="search-icon" size={18} />
//                     <input
//                       type="text"
//                       placeholder="Search posts..."
//                       value={socialFilters.searchQuery}
//                       onChange={(e) => setSocialFilters({ ...socialFilters, searchQuery: e.target.value })}
//                     />
//                   </div>
//                   <div className="filter-panel">
//                     <select
//                       value={socialFilters.sortBy}
//                       onChange={(e) => setSocialFilters({ ...socialFilters, sortBy: e.target.value })}
//                     >
//                       <option value="recent">Most Recent</option>
//                       <option value="likes">Most Likes</option>
//                     </select>
//                     <div className="content-type-filter">
//                       {contentTypeOptions.map(type => (
//                         <label key={type}>
//                           <input
//                             type="checkbox"
//                             checked={socialFilters.contentType.includes(type)}
//                             onChange={() => {
//                               setSocialFilters(prev => ({
//                                 ...prev,
//                                 contentType: prev.contentType.includes(type)
//                                   ? prev.contentType.filter(t => t !== type)
//                                   : [...prev.contentType, type]
//                               }));
//                             }}
//                           />
//                           {type.charAt(0).toUpperCase() + type.slice(1)}
//                         </label>
//                       ))}
//                     </div>
//                   </div>
//                 </div>

//                 <div className="stories">
//                   {stories.map((story, i) => (
//                     <Story 
//                       key={i} 
//                       story={story} 
//                       index={i} 
//                       storyViewed={storyViewed} 
//                       onOpen={openStory} 
//                     />
//                   ))}
//                 </div>

//                 {filteredPosts.map(post => (
//                   <Post 
//                     key={post.id}
//                     post={post}
//                     currentUser={currentUser}
//                     newComments={newComments}
//                     handleLike={handleLike}
//                     toggleComments={toggleComments}
//                     handleAddComment={handleAddComment}
//                     handleSavePost={handleSavePost}
//                     setNewComments={setNewComments}
//                   />
//                 ))}
//               </div>
//             )}

//             {activeSocialTab === 'profile' && (
//               <ProfileView 
//                 currentUser={currentUser}
//                 userPosts={userPosts}
//                 profileViewMode={profileViewMode}
//                 setProfileViewMode={setProfileViewMode}
//                 toggleFollow={toggleFollow}
//                 setShowSettings={setShowSettings}
//               />
//             )}

//             {activeSocialTab === 'messages' && (
//               <div className="messages-view">
//                 {selectedConversation === null ? (
//                   <>
//                     <div className="messages-header">
//                       <h2>Messages</h2>
//                     </div>
//                     <div className="conversations-list">
//                       {messages.map(conversation => (
//                         <Conversation 
//                           key={conversation.id}
//                           conversation={conversation}
//                           setSelectedConversation={setSelectedConversation}
//                         />
//                       ))}
//                     </div>
//                   </>
//                 ) : (
//                   <>
//                     <div className="conversation-header">
//                       <button 
//                         className="back-button"
//                         onClick={() => setSelectedConversation(null)}
//                       >
//                         <ChevronLeft size={24} />
//                       </button>
//                       <div className="conversation-user">
//                         <img 
//                           src={messages.find(c => c.id === selectedConversation).avatar} 
//                           alt={messages.find(c => c.id === selectedConversation).username} 
//                           className="conversation-user-avatar"
//                         />
//                         <span>{messages.find(c => c.id === selectedConversation).username}</span>
//                       </div>
//                     </div>

//                     <div className="message-list">
//                       {messages.find(c => c.id === selectedConversation).messages.map(message => (
//                         <Message 
//                           key={message.id}
//                           message={message}
//                           currentUser={currentUser}
//                         />
//                       ))}
//                     </div>

//                     <div className="message-input-container">
//                       <input
//                         type="text"
//                         className="message-input"
//                         placeholder="Message..."
//                         value={newMessage}
//                         onChange={(e) => setNewMessage(e.target.value)}
//                         onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
//                       />
//                       <button 
//                         className="send-button"
//                         onClick={handleSendMessage}
//                         disabled={!newMessage.trim()}
//                       >
//                         <Send size={20} />
//                       </button>
//                     </div>
//                   </>
//                 )}
//               </div>
//             )}

//             {currentStoryIndex !== null && (
//               <StoryViewer 
//                 stories={stories}
//                 currentStoryIndex={currentStoryIndex}
//                 storyLiked={storyLiked}
//                 handleStoryLike={handleStoryLike}
//                 navigateStory={navigateStory}
//                 closeStory={closeStory}
//               />
//             )}

//             {showSettings && (
//               <SettingsModal 
//                 currentUser={currentUser}
//                 setCurrentUser={setCurrentUser}
//                 setShowSettings={setShowSettings}
//               />
//             )}
//           </main>

//           <nav className="bottom-nav">
//             <button 
//               className={`nav-item ${activeSocialTab === 'home' ? 'active' : ''}`}
//               onClick={() => setActiveSocialTab('home')}
//             >
//               <Home size={24} />
//             </button>
//             <button 
//               className={`nav-item ${activeSocialTab === 'search' ? 'active' : ''}`}
//               onClick={() => setActiveSocialTab('search')}
//             >
//               <Search size={24} />
//             </button>
//             <button 
//               className={`nav-item ${activeSocialTab === 'create' ? 'active' : ''}`}
//               onClick={() => setActiveSocialTab('create')}
//             >
//               <PlusSquare size={24} />
//             </button>
//             <button 
//               className={`nav-item ${activeSocialTab === 'messages' ? 'active' : ''}`}
//               onClick={() => {
//                 setActiveSocialTab('messages');
//                 setSelectedConversation(null);
//               }}
//             >
//               <MessageSquare size={24} />
//             </button>
//             <button 
//               className={`nav-item ${activeSocialTab === 'profile' ? 'active' : ''}`}
//               onClick={() => setActiveSocialTab('profile')}
//             >
//               <User size={24} />
//             </button>
//           </nav>
//         </div>      
//       )}

//       {activeTab === 'ads' && (
//         <div className="ads-container">
//           <div className="ads-header">
//             <h2>Brand Advertisement Campaigns</h2>
//             <p>View and engage with brand advertisements to earn rewards</p>
//           </div>

//           <div className="filter-controls enhanced">
//             <div className="search-bar">
//               <Search className="search-icon" size={18} />
//               <input
//                 type="text"
//                 placeholder="Search ads..."
//                 value={adFilters.searchQuery}
//                 onChange={(e) => setAdFilters({ ...adFilters, searchQuery: e.target.value })}
//               />
//             </div>
//             <div className="filter-panel">
//               <div className="filter-group">
//                 <label>Audience</label>
//                 <div className="checkbox-group">
//                   {audienceOptions.map(audience => (
//                     <label key={audience}>
//                       <input
//                         type="checkbox"
//                         checked={adFilters.audience.includes(audience)}
//                         onChange={() => toggleAudienceFilter(audience)}
//                       />
//                       {audience.charAt(0).toUpperCase() + audience.slice(1)}
//                     </label>
//                   ))}
//                 </div>
//               </div>
//               <div className="filter-group">
//                 <label>Sort By</label>
//                 <select
//                   value={adFilters.sortBy}
//                   onChange={(e) => setAdFilters({ ...adFilters, sortBy: e.target.value })}
//                 >
//                   <option value="recent">Most Recent</option>
//                   <option value="views">Most Views</option>
//                   <option value="ctr">Highest CTR</option>
//                 </select>
//               </div>
//               <div className="filter-group">
//                 <label>Min CTR (%)</label>
//                 <input
//                   type="number"
//                   value={adFilters.minCTR}
//                   onChange={(e) => setAdFilters({ ...adFilters, minCTR: parseFloat(e.target.value) || 0 })}
//                 />
//               </div>
//               <div className="filter-group">
//                 <label>Min Views</label>
//                 <input
//                   type="number"
//                   value={adFilters.minViews}
//                   onChange={(e) => setAdFilters({ ...adFilters, minViews: parseInt(e.target.value) || 0 })}
//                 />
//               </div>
//             </div>
//           </div>

//           <div className="ads-grid">
//             {filteredAds.map(ad => (
//               <Ad 
//                 key={ad.id}
//                 ad={ad}
//                 newComments={newComments}
//                 handleLikeAd={handleLikeAd}
//                 handleAddAdComment={handleAddAdComment}
//                 handleShare={handleShare}
//                 setNewComments={setNewComments}
//               />
//             ))}
//           </div>
//         </div>
//       )}

//       {activeTab === 'dashboard' && (
//         <div className="dashboard-container">
//           <div className="dashboard-header">
//             <h2>Performance Dashboard</h2>
//             <div className="filter-controls">
//               <div className="time-range">
//                 <button 
//                   className={timeRange === '7d' ? 'active' : ''}
//                   onClick={() => setTimeRange('7d')}
//                 >
//                   7 Days
//                 </button>
//                 <button 
//                   className={timeRange === '30d' ? 'active' : ''}
//                   onClick={() => setTimeRange('30d')}
//                 >
//                   30 Days
//                 </button>
//                 <button 
//                   className={timeRange === '90d' ? 'active' : ''}
//                   onClick={() => setTimeRange('90d')}
//                 >
//                   90 Days
//                 </button>
//               </div>
//               <select
//                 value={socialFilters.sortBy}
//                 onChange={(e) => setSocialFilters({ ...socialFilters, sortBy: e.target.value })}
//               >
//                 <option value="impressions">Impressions</option>
//                 <option value="engagements">Engagements</option>
//                 <option value="followers">Followers</option>
//               </select>
//             </div>
//           </div>

//           <div className="metrics-overview">
//             <div className="metric-card">
//               <h3>Impressions</h3>
//               <div className="metric-value">{analyticsData.impressions.toLocaleString()}</div>
//               <div className="metric-change positive">+12%</div>
//             </div>
//             <div className="metric-card">
//               <h3>Engagements</h3>
//               <div className="metric-value">{analyticsData.engagements.toLocaleString()}</div>
//               <div className="metric-change positive">+7%</div>
//             </div>
//             <div className="metric-card">
//               <h3>Followers</h3>
//               <div className="metric-value">{analyticsData.followers.toLocaleString()}</div>
//               <div className="metric-change positive">+3%</div>
//             </div>
//             <div className="metric-card">
//               <h3>Click Rate</h3>
//               <div className="metric-value">{analyticsData.clickRate}%</div>
//               <div className="metric-change negative">-0.2%</div>
//             </div>
//           </div>

//           <div className="charts-container">
//             <div className="chart">
//               <h3>Impressions</h3>
//               <div className="chart-placeholder">
//                 <img src="https://via.placeholder.com/400x200?text=Impressions+Chart" alt="Impressions Chart" />
//               </div>
//             </div>
//             <div className="chart">
//               <h3>Engagements</h3>
//               <div className="chart-placeholder">
//                 <img src="https://via.placeholder.com/400x200?text=Engagements+Chart" alt="Engagements Chart" />
//               </div>
//             </div>
//           </div>

//           <div className="top-performing">
//             <h3>Top Performing Posts</h3>
//             <div className="posts-list">
//               {posts.slice(0, 3).map((post, i) => (
//                 <div key={i} className="performance-post">
//                   <img src={post.image} alt="Post" />
//                   <div className="post-metrics">
//                     <div>Impressions: {post.impressions.toLocaleString()}</div>
//                     <div>Engagements: {(post.likes + post.comments.length).toLocaleString()}</div>
//                     <div>Engagement Rate: {post.engagementRate}%</div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}

//       {activeTab === 'gamification' && (
//         <div className="gamification-container">
//           <div className="score-card">
//             <h3>Your Current Score</h3>
//             <div className="score-value">1,450</div>
//             <div className="score-level">Gold Tier</div>
//             <div className="progress-bar">
//               <div className="progress" style={{ width: '65%' }}></div>
//             </div>
//             <div className="progress-text">650 points to Platinum</div>
//           </div>

//           <div className="badges-container">
//             <h3>Available Badges</h3>
//             <div className="badges-list">
//               {gamificationData.map((badge, i) => (
//                 <div key={i} className="badge-card">
//                   <img src={badge.image} alt={badge.title} />
//                   <h4>{badge.title}</h4>
//                   <div className="badge-progress">
//                     <div className="progress-bar">
//                       <div className="progress" style={{ width: `${badge.progress}%` }}></div>
//                     </div>
//                     <span>{badge.progress}/{badge.target}</span>
//                   </div>
//                   <div className="badge-reward">Reward: {badge.reward}</div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="leaderboard">
//             <h3>Leaderboard</h3>
//             <div className="leaderboard-list">
//               {[...Array(5)].map((_, i) => (
//                 <div key={i} className="leaderboard-item">
//                   <span className="rank">{i+1}</span>
//                   <img src={`https://source.unsplash.com/random/40x40/?user${i}`} alt="User" />
//                   <span className="username">user_{i+1}</span>
//                   <span className="score">{(5-i)*1000} pts</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default UserManagement;
import React, { useState, useEffect } from 'react';
import { 
  Heart, MessageSquare, Share2, MoreHorizontal, Home, Search, PlusSquare, 
  User, Settings, ChevronLeft, ChevronRight, X, Send, Bookmark, Grid, List, 
  Filter, Award
} from 'lucide-react';
import { 
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, 
  ResponsiveContainer 
} from 'recharts';
import "../UserManagement.css";

// Story Component
const Story = ({ story, index, storyViewed, onOpen }) => (
  <div 
    className={`story ${storyViewed[index] ? 'story-viewed' : ''}`}
    onClick={() => onOpen(index)}
  >
    <div className="story-avatar">
      <img src={story.avatar} alt={story.username} />
    </div>
    <span>{story.username}</span>
  </div>
);

// Post Component
const Post = ({ post, currentUser, newComments, handleLike, toggleComments, handleAddComment, handleSavePost, setNewComments }) => (
  <div className={`post ${post.sponsored ? 'sponsored' : ''}`}>
    <div className="post-header">
      <img src={post.avatar} alt={post.username} className="post-avatar" />
      <span className="post-username">{post.username}</span>
      {post.sponsored && <span className="sponsored-badge">Sponsored</span>}
      <button className="post-more">
        <MoreHorizontal size={20} />
      </button>
    </div>
    
    <img src={post.image} alt="Post" className="post-image" />
    
    <div className="post-actions">
      <button onClick={() => handleLike(post.id)}>
        <Heart 
          size={24} 
          fill={post.isLiked ? '#ff0000' : 'none'} 
          color={post.isLiked ? '#ff0000' : '#000'} 
        />
      </button>
      <button onClick={() => toggleComments(post.id)}>
        <MessageSquare size={24} />
      </button>
      <button>
        <Share2 size={24} />
      </button>
      <button 
        className="save-button" 
        onClick={() => handleSavePost(post.id)}
      >
        <Bookmark 
          size={24} 
          fill={post.isSaved ? '#000' : 'none'} 
        />
      </button>
    </div>
    
    <div className="post-likes">{post.likes.toLocaleString()} likes</div>
    
    <div className="post-caption">
      <span className="post-caption-username">{post.username}</span>
      {post.caption}
    </div>
    
    {post.comments.length > 0 && !post.showComments && (
      <div 
        className="view-comments" 
        onClick={() => toggleComments(post.id)}
      >
        View all {post.comments.length} comments
      </div>
    )}
    
    <div className="post-stats">
      Impressions: {post.impressions.toLocaleString()} • Engagement: {post.engagementRate}%
    </div>
    
    <div className="post-time">{post.time}</div>
    
    {post.showComments && (
      <div className="comments-section">
        {post.comments.map(comment => (
          <div key={comment.id} className="comment">
            <img src={comment.avatar} alt={comment.username} className="comment-avatar" />
            <div className="comment-content">
              <span className="comment-username">{comment.username}</span>
              {comment.text}
            </div>
          </div>
        ))}
        
        <div className="add-comment">
          <input
            type="text"
            className="comment-input"
            placeholder="Add a comment..."
            value={newComments[post.id] || ''}
            onChange={(e) => setNewComments({
              ...newComments,
              [post.id]: e.target.value
            })}
            onKeyPress={(e) => e.key === 'Enter' && handleAddComment(post.id)}
          />
          <button 
            className="post-button"
            onClick={() => handleAddComment(post.id)}
            disabled={!newComments[post.id]?.trim()}
          >
            Post
          </button>
        </div>
      </div>
    )}
  </div>
);

// Ad Component
const Ad = ({ ad, newComments, handleLikeAd, handleAddAdComment, handleShare, setNewComments }) => (
  <div className="ad-card">
    <div className="ad-image-container">
      <img src={ad.adImage} alt={ad.brandName} className="ad-image" />
      {ad.gamification?.hasReward && (
        <div className="gamification-badge">
          <Award size={16} color="#333" />
          <div className="gamification-tooltip">
            <h4>Earn {ad.gamification.totalPoints} points</h4>
            {ad.gamification.tasks.map((task, i) => (
              <div 
                key={i} 
                className={`gamification-task ${task.completed ? 'completed' : ''}`}
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

    <div className="ad-info">
      <div className="ad-header">
        <img src={ad.brandLogo} alt={ad.brandName} className="brand-logo" />
        <span className="brand-name">{ad.brandName}</span>
      </div>
      
      <p className="ad-caption">{ad.caption}</p>
      
      <div className="ad-stats">
        <div className="stat-item">
          <span className="stat-label">Views</span>
          <span className="stat-value">{ad.views.toLocaleString()}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Clicks</span>
          <span className="stat-value">{ad.clicks.toLocaleString()}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">CTR</span>
          <span className="stat-value">{ad.ctr}%</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Posted</span>
          <span className="stat-value">{ad.postedDate}</span>
        </div>
      </div>
      
      <div className="ad-actions">
        <button 
          className="action-button like-button"
          onClick={() => handleLikeAd(ad.id)}
        >
          <Heart 
            size={18} 
            fill={ad.isLiked ? 'currentColor' : 'none'} 
          />
          Like
        </button>
        <button 
          className="action-button comment-button"
          onClick={() => {
            document.getElementById(`comment-input-${ad.id}`)?.focus();
          }}
        >
          <MessageSquare size={18} />
          Comment
        </button>
        <button 
          className="action-button share-button"
          onClick={() => handleShare(ad.id)}
        >
          <Share2 size={18} />
          Share
        </button>
      </div>
      
      {ad.comments.length > 0 && (
        <div className="comments-section">
          {ad.comments.slice(0, 2).map(comment => (
            <div key={comment.id} className="comment">
              <img 
                src={comment.avatar} 
                alt={comment.username} 
                className="comment-avatar"
              />
              <div className="comment-content">
                <span className="comment-username">{comment.username}</span>
                {comment.text}
              </div>
            </div>
          ))}
          {ad.comments.length > 2 && (
            <div style={{ color: '#666', fontSize: '12px' }}>
              View all {ad.comments.length} comments
            </div>
          )}
        </div>
      )}
      
      <div className="add-comment">
        <input
          id={`comment-input-${ad.id}`}
          type="text"
          className="comment-input"
          placeholder="Add a comment..."
          value={newComments[ad.id] || ''}
          onChange={(e) => setNewComments({
            ...newComments,
            [ad.id]: e.target.value
          })}
        />
        <button
          className="post-comment-button"
          onClick={() => handleAddAdComment(ad.id)}
          disabled={!newComments[ad.id]?.trim()}
        >
          Post
        </button>
      </div>
    </div>
  </div>
);

// Conversation Component
const Conversation = ({ conversation, setSelectedConversation }) => (
  <div 
    className={`conversation ${conversation.unread ? 'unread' : ''}`}
    onClick={() => setSelectedConversation(conversation.id)}
  >
    <img src={conversation.avatar} alt={conversation.username} className="conversation-avatar" />
    <div className="conversation-info">
      <div className="conversation-header">
        <span className="conversation-username">{conversation.username}</span>
        <span className="conversation-time">{conversation.time}</span>
      </div>
      <p className="conversation-preview">
        {conversation.isGroup && (
          <span className="group-indicator">{conversation.username}: </span>
        )}
        {conversation.lastMessage}
      </p>
    </div>
  </div>
);

// Message Component
const Message = ({ message, currentUser }) => (
  <div 
    className={`message ${message.sender === currentUser.username ? 'sent' : 'received'}`}
  >
    <p>{message.text}</p>
    <span className="message-time">{message.time}</span>
  </div>
);

// StoryViewer Component
const StoryViewer = ({ stories, currentStoryIndex, storyLiked, handleStoryLike, navigateStory, closeStory }) => (
  <div className="story-viewer">
    <div className="story-header">
      <div className="story-user">
        <img 
          src={stories[currentStoryIndex].avatar} 
          alt={stories[currentStoryIndex].username} 
          className="story-user-avatar"
        />
        <span>{stories[currentStoryIndex].username}</span>
        <span className="story-time">{stories[currentStoryIndex].time}</span>
      </div>
      <button onClick={closeStory}>
        <X color="white" size={24} />
      </button>
    </div>

    <div className="story-progress">
      {stories.map((_, i) => (
        <div key={i} className="story-progress-bar">
          <div 
            className="story-progress-fill" 
            style={{ width: i === currentStoryIndex ? '100%' : i < currentStoryIndex ? '100%' : '0%' }}
          />
        </div>
      ))}
    </div>

    <div className="story-content">
      <div 
        className="story-nav prev" 
        onClick={() => navigateStory('prev')}
      >
        <ChevronLeft color="white" size={32} />
      </div>

      <img 
        src={stories[currentStoryIndex].image} 
        alt="Story" 
        className="story-image"
      />

      <div 
        className="story-nav next" 
        onClick={() => navigateStory('next')}
      >
        <ChevronRight color="white" size={32} />
      </div>
    </div>

    <div className="story-actions">
      <button 
        className="story-action-btn"
        onClick={handleStoryLike}
      >
        <Heart 
          fill={storyLiked[currentStoryIndex] ? 'red' : 'none'} 
          color={storyLiked[currentStoryIndex] ? 'red' : 'white'} 
        />
        <span className="story-action-text">Like</span>
      </button>
      <button className="story-action-btn">
        <MessageSquare color="white" />
        <span className="story-action-text">Reply</span>
      </button>
      <button className="story-action-btn">
        <Share2 color="white" />
        <span className="story-action-text">Share</span>
      </button>
    </div>

    <div className="story-comments">
      {stories[currentStoryIndex].comments.map(comment => (
        <div key={comment.id} className="story-comment">
          <img 
            src={comment.avatar} 
            alt={comment.username} 
            className="story-comment-avatar"
          />
          <div className="story-comment-content">
            <span className="story-comment-username">{comment.username}</span>
            {comment.text}
          </div>
        </div>
      ))}
    </div>
  </div>
);

// SettingsModal Component
const SettingsModal = ({ currentUser, setCurrentUser, setShowSettings }) => (
  <div className="settings-modal">
    <div className="settings-header">
      <button 
        className="close-settings"
        onClick={() => setShowSettings(false)}
      >
        <X size={24} />
      </button>
      <h2>Settings</h2>
    </div>

    <div className="settings-content">
      <div className="settings-section">
        <h3>Profile</h3>
        <div className="settings-form">
          <div className="form-group">
            <label>Username</label>
            <input 
              type="text" 
              value={currentUser.username}
              onChange={(e) => setCurrentUser(prev => ({
                ...prev,
                username: e.target.value
              }))}
            />
          </div>
          <div className="form-group">
            <label>Full Name</label>
            <input 
              type="text" 
              value={currentUser.fullName}
              onChange={(e) => setCurrentUser(prev => ({
                ...prev,
                fullName: e.target.value
              }))}
            />
          </div>
          <div className="form-group">
            <label>Bio</label>
            <textarea 
              value={currentUser.bio}
              onChange={(e) => setCurrentUser(prev => ({
                ...prev,
                bio: e.target.value
              }))}
            />
          </div>
        </div>
      </div>

      <div className="settings-actions">
        <button 
          className="save-settings"
          onClick={() => setShowSettings(false)}
        >
          Save Changes
        </button>
        <button className="logout-button">
          Log Out
        </button>
      </div>
    </div>
  </div>
);

// ProfileView Component
const ProfileView = ({ currentUser, userPosts, profileViewMode, setProfileViewMode, toggleFollow, setShowSettings }) => (
  <div className="profile-view">
    <div className="profile-header">
      <div className="profile-avatar-container">
        <img src={currentUser.avatar} alt={currentUser.username} className="profile-avatar" />
      </div>
      <div className="profile-stats">
        <div className="profile-stat">
          <span className="stat-number">{userPosts.length}</span>
          <span className="stat-label">Posts</span>
        </div>
        <div className="profile-stat">
          <span className="stat-number">{currentUser.followers}</span>
          <span className="stat-label">Followers</span>
        </div>
        <div className="profile-stat">
          <span className="stat-number">{currentUser.following}</span>
          <span className="stat-label">Following</span>
        </div>
      </div>
    </div>

    <div className="profile-info">
      <h2 className="profile-name">{currentUser.fullName}</h2>
      <p className="profile-bio">{currentUser.bio}</p>
    </div>

    <div className="profile-actions">
      <button 
        className={`profile-action-btn ${currentUser.isFollowing ? 'following' : ''}`}
        onClick={toggleFollow}
      >
        {currentUser.isFollowing ? 'Following' : 'Follow'}
      </button>
      <button 
        className="profile-action-btn"
        onClick={() => setShowSettings(true)}
      >
        <Settings size={18} />
      </button>
    </div>

    <div className="profile-view-toggle">
      <button 
        className={`view-toggle-btn ${profileViewMode === 'grid' ? 'active' : ''}`}
        onClick={() => setProfileViewMode('grid')}
      >
        <Grid size={24} />
      </button>
      <button 
        className={`view-toggle-btn ${profileViewMode === 'list' ? 'active' : ''}`}
        onClick={() => setProfileViewMode('list')}
      >
        <List size={24} />
      </button>
    </div>

    <div className={`user-posts ${profileViewMode}`}>
      {userPosts.map(post => (
        <div key={post.id} className="user-post">
          <img src={post.image} alt="User post" />
          <div className="post-overlay">
            <span><Heart size={16} /> {post.likes}</span>
            <span><MessageSquare size={16} /> {post.comments.length}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// Main UserManagement Component
const UserManagement = () => {
  // State declarations
  const [activeTab, setActiveTab] = useState('social');
  const [activeSocialTab, setActiveSocialTab] = useState('home');
  const [showSettings, setShowSettings] = useState(false);
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
    },
    {
      id: 2,
      username: 'tech_company',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      caption: 'Our new product launch is coming soon! Stay tuned for updates. #tech #innovation',
      likes: 892,
      comments: [
        { id: 1, username: 'techfan', text: "Can't wait for this!", avatar: 'https://images.unsplash.com/photo-1522556189639-b1509e7e43f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80' }
      ],
      time: '5 HOURS AGO',
      sponsored: false,
      impressions: 9800,
      engagementRate: 3.8,
      isLiked: false,
      showComments: false,
      isSaved: false
    }
  ]);

  const [stories, setStories] = useState([
    {
      id: 1,
      username: 'travel_enthusiast',
      avatar: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      comments: 'Beautiful place!',
      time: '30 MINUTES AGO'
    },
    {
      id: 2,
      username: 'food_blogger',
      avatar: 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      time: '1 HOUR AGO'
    }
  ]);

  const [messages, setMessages] = useState([
    {
      id: 1,
      username: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto',
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
      username: 'group_chat',
      avatar: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      lastMessage: 'Meeting at 3pm tomorrow',
      time: '1d ago',
      unread: false,
      isGroup: true,
      messages: [
        { id: 1, sender: 'user2', text: 'Anyone free tomorrow?', time: '9:00 AM' },
        { id: 2, sender: 'user3', text: 'I can meet in the afternoon', time: '9:15 AM' },
        { id: 3, sender: 'user1', text: 'Meeting at 3pm tomorrow', time: '5:30 PM' }
      ]
    }
  ]);

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
    },
    {
      id: 2,
      brandName: 'FashionHub',
      brandLogo: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      adImage: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      caption: 'New arrivals in store! #fashion',
      views: 20000,
      clicks: 800,
      ctr: 4.0,
      postedDate: '2025-05-14',
      targetAudience: ['fashion', 'women'],
      status: 'active',
      isLiked: false,
      comments: [],
      gamification: {
        hasReward: true,
        totalPoints: 40,
        tasks: [
          { action: 'like', points: 10, completed: false },
          { action: 'comment', points: 15, completed: false },
          { action: 'share', points: 15, currentShares: 0, target: 1, completed: false }
        ]
      }
    }
  ]);

  const [socialFilters, setSocialFilters] = useState({
    searchQuery: '',
    sortBy: 'recent',
    contentType: []
  });

  const [adFilters, setAdFilters] = useState({
    searchQuery: '',
    audience: [],
    sortBy: 'recent',
    minCTR: 0,
    minViews: 0
  });

  const [newComments, setNewComments] = useState({});
  const [storyViewed, setStoryViewed] = useState(stories.map(() => false));
  const [currentStoryIndex, setCurrentStoryIndex] = useState(null);
  const [storyLiked, setStoryLiked] = useState(stories.map(() => false));
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [newMessage, setNewMessage] = useState('');
  const [userPosts, setUserPosts] = useState(posts.filter(post => post.username === currentUser.username));
  const [profileViewMode, setProfileViewMode] = useState('grid');
  const [timeRange, setTimeRange] = useState('7d');
  const [analyticsData, setAnalyticsData] = useState({
    impressions: 25000,
    engagements: 1500,
    followers: 1250,
    clickRate: 3.5
  });
  const [gamificationData, setGamificationData] = useState([
    {
      title: 'Engager',
      image: 'https://source.unsplash.com/random/100x100/?badge',
      progress: 80,
      target: 100,
      reward: '50 points'
    },
    {
      title: 'Influencer',
      image: 'https://source.unsplash.com/random/100x100/?trophy',
      progress: 40,
      target: 100,
      reward: '100 points'
    }
  ]);

  // Mock data for charts
  const [performanceTimeData, setPerformanceTimeData] = useState([]);

  useEffect(() => {
    // Simulate fetching performance data for charts based on posts
    const days = 7;
    const mockData = Array.from({ length: days }, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() - (days - 1 - i));
      const formattedDate = date.toISOString().split('T')[0];
      const relevantPosts = posts.filter(post => {
        // Simplified date check for demo
        return post.time.includes('HOUR') || post.time === 'Just now';
      });
      const impressions = relevantPosts.reduce((sum, post) => sum + post.impressions, 0) / days + Math.random() * 1000;
      const engagements = relevantPosts.reduce((sum, post) => sum + post.likes + post.comments.length, 0) / days + Math.random() * 100;
      return {
        date: formattedDate,
        impressions: Math.round(impressions),
        engagements: Math.round(engagements),
      };
    });
    setPerformanceTimeData(mockData);
  }, [posts]);

  const contentTypeOptions = ['posts', 'sponsored'];
  const audienceOptions = ['tech', 'fashion', 'young_adults', 'women'];

  // New functionality: Create post
  const handleCreatePost = () => {
    const newPost = {
      id: posts.length + 1,
      username: currentUser.username,
      avatar: currentUser.avatar,
      image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      caption: 'New post! #created',
      likes: 0,
      comments: [],
      time: 'Just now',
      sponsored: false,
      impressions: 0,
      engagementRate: 0,
      isLiked: false,
      showComments: false,
      isSaved: false
    };
    setPosts([newPost, ...posts]);
    setCurrentUser(prev => ({
      ...prev,
      posts: prev.posts + 1
    }));
    setUserPosts([newPost, ...userPosts]);
  };

  const handleLike = (postId) => {
    setPosts(posts.map(post =>
      post.id === postId
        ? { ...post, isLiked: !post.isLiked, likes: post.isLiked ? post.likes - 1 : post.likes + 1 }
        : post
    ));
  };

  const toggleComments = (postId) => {
    setPosts(posts.map(post =>
      post.id === postId ? { ...post, showComments: !post.showComments } : post
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

  const handleSavePost = (postId) => {
    setPosts(posts.map(post =>
      post.id === postId ? { ...post, isSaved: !post.isSaved } : post
    ));
  };

  const handleLikeAd = (adId) => {
    setBrandAds(brandAds.map(ad =>
      ad.id === adId
        ? {
            ...ad,
            isLiked: !ad.isLiked,
            gamification: ad.gamification.hasReward
              ? {
                  ...ad.gamification,
                  tasks: ad.gamification.tasks.map(task =>
                    task.action === 'like' ? { ...task, completed: !ad.isLiked } : task
                  )
                }
              : ad.gamification
          }
        : ad
    ));
  };

  const handleAddAdComment = (adId) => {
    const commentText = newComments[adId]?.trim();
    if (!commentText) return;

    setBrandAds(brandAds.map(ad =>
      ad.id === adId
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
            gamification: ad.gamification.hasReward
              ? {
                  ...ad.gamification,
                  tasks: ad.gamification.tasks.map(task =>
                    task.action === 'comment' ? { ...task, completed: true } : task
                  )
                }
              : ad.gamification
          }
        : ad
    ));
    setNewComments({ ...newComments, [adId]: '' });
  };

  const handleShare = (adId) => {
    setBrandAds(brandAds.map(ad =>
      ad.id === adId
        ? {
            ...ad,
            gamification: ad.gamification.hasReward
              ? {
                  ...ad.gamification,
                  tasks: ad.gamification.tasks.map(task =>
                    task.action === 'share'
                      ? {
                          ...task,
                          currentShares: (task.currentShares || 0) + 1,
                          completed: ((task.currentShares || 0) + 1) >= task.target
                        }
                      : task
                  )
                }
              : ad.gamification
          }
        : ad
    ));
  };

  const openStory = (index) => {
    setCurrentStoryIndex(index);
    setStoryViewed(prev => {
      const newViewed = [...prev];
      newViewed[index] = true;
      return newViewed;
    });
  };

  const handleStoryLike = () => {
    setStoryLiked(prev => {
      const newLiked = [...prev];
      newLiked[currentStoryIndex] = !newLiked[currentStoryIndex];
      return newLiked;
    });
  };

  const navigateStory = (direction) => {
    if (direction === 'prev' && currentStoryIndex > 0) {
      setCurrentStoryIndex(currentStoryIndex - 1);
    } else if (direction === 'next' && currentStoryIndex < stories.length - 1) {
      setCurrentStoryIndex(currentStoryIndex + 1);
    }
  };

  const closeStory = () => {
    setCurrentStoryIndex(null);
  };

  const handleSendMessage = () => {
    const messageText = newMessage.trim();
    if (!messageText || !selectedConversation) return;

    setMessages(messages.map(conversation =>
      conversation.id === selectedConversation
        ? {
            ...conversation,
            messages: [
              ...conversation.messages,
              {
                id: conversation.messages.length + 1,
                sender: currentUser.username,
                text: messageText,
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
              }
            ],
            lastMessage: messageText,
            time: 'Just now',
            unread: false
          }
        : conversation
    ));
    setNewMessage('');
  };

  const toggleFollow = () => {
    setCurrentUser(prev => ({
      ...prev,
      isFollowing: !prev.isFollowing,
      followers: prev.isFollowing ? prev.followers - 1 : prev.followers + 1
    }));
  };

  const toggleAudienceFilter = (audience) => {
    setAdFilters({
      ...adFilters,
      audience: adFilters.audience.includes(audience)
        ? adFilters.audience.filter(a => a !== audience)
        : [...adFilters.audience, audience]
    });
  };

  const toggleAdStatus = (id) => {
    setBrandAds(brandAds.map(ad =>
      ad.id === id 
        ? { ...ad, status: ad.status === 'active' ? 'paused' : 'active' }
        : ad
    ));
  };

  // Enhanced filter for social content
  const filteredPosts = posts.filter(post => {
    if (socialFilters.searchQuery && 
        !post.caption.toLowerCase().includes(socialFilters.searchQuery.toLowerCase()) &&
        !post.username.toLowerCase().includes(socialFilters.searchQuery.toLowerCase())) {
      return false;
    }
    if (socialFilters.contentType.length > 0) {
      if (socialFilters.contentType.includes('sponsored') && !post.sponsored) return false;
      if (socialFilters.contentType.includes('posts') && post.sponsored) return false;
    }
    return true;
  }).sort((a, b) => {
    if (socialFilters.sortBy === 'recent') {
      const timeA = a.time === 'Just now' ? new Date() : new Date();
      const timeB = b.time === 'Just now' ? new Date() : new Date();
      return timeB - timeA;
    }
    if (socialFilters.sortBy === 'likes') return b.likes - a.likes;
    return 0;
  });

  // Enhanced filter for ads
  const filteredAds = brandAds.filter(ad => {
    if (adFilters.searchQuery && 
        !ad.brandName.toLowerCase().includes(adFilters.searchQuery.toLowerCase()) &&
        !ad.caption.toLowerCase().includes(adFilters.searchQuery.toLowerCase())) {
      return false;
    }
    if (adFilters.audience.length > 0 && 
        !adFilters.audience.some(aud => ad.targetAudience.includes(aud))) {
      return false;
    }
    if (adFilters.minCTR && ad.ctr < adFilters.minCTR) return false;
    if (adFilters.minViews && ad.views < adFilters.minViews) return false;
    return true;
  }).sort((a, b) => {
    if (adFilters.sortBy === 'recent') return new Date(b.postedDate) - new Date(a.postedDate);
    if (adFilters.sortBy === 'views') return b.views - a.views;
    if (adFilters.sortBy === 'ctr') return b.ctr - a.ctr;
    return 0;
  });

  return (
    <div className="user-management">
      <style>{`
        .like-button {
          background: ${brandAds.some(ad => ad.isLiked) ? '#ffebee' : '#f5f5f5'};
          color: ${brandAds.some(ad => ad.isLiked) ? '#f44336' : '#333'};
        }
      `}</style>

      <div className="tabs">
        <div 
          className={`tab ${activeTab === 'social' ? 'active' : ''}`}
          onClick={() => setActiveTab('social')}
        >
          Social Media
        </div>
        <div 
          className={`tab ${activeTab === 'ads' ? 'active' : ''}`}
          onClick={() => setActiveTab('ads')}
        >
          Brand Ads
        </div>
        <div 
          className={`tab ${activeTab === 'dashboard' ? 'active' : ''}`}
          onClick={() => setActiveTab('dashboard')}
        >
          Analytics Dashboard
        </div>
        <div 
          className={`tab ${activeTab === 'gamification' ? 'active' : ''}`}
          onClick={() => setActiveTab('gamification')}
        >
          Gamification
        </div>
      </div>

      {activeTab === 'social' && (
        <div className="social-app">
          <header className="app-header">
            <h1 className="app-logo">PromoHub</h1>
            <div className="header-icons">
              <button className="header-icon" onClick={handleCreatePost}>
                <PlusSquare size={24} />
              </button>
              <button className="header-icon">
                <Heart size={24} />
              </button>
              <button 
                className="header-icon"
                onClick={() => {
                  setActiveSocialTab('messages');
                  setSelectedConversation(null);
                }}
              >
                <MessageSquare size={24} />
              </button>
            </div>
          </header>

          <main className="app-main">
            {activeSocialTab === 'home' && (
              <div className="home-feed">
                <div className="filter-controls">
                  <div className="search-bar">
                    <Search className="search-icon" size={18} />
                    <input
                      type="text"
                      placeholder="Search posts..."
                      value={socialFilters.searchQuery}
                      onChange={(e) => setSocialFilters({ ...socialFilters, searchQuery: e.target.value })}
                    />
                  </div>
                  <div className="filter-panel">
                    <select
                      value={socialFilters.sortBy}
                      onChange={(e) => setSocialFilters({ ...socialFilters, sortBy: e.target.value })}
                    >
                      <option value="recent">Most Recent</option>
                      <option value="likes">Most Likes</option>
                    </select>
                    <div className="content-type-filter">
                      {contentTypeOptions.map(type => (
                        <label key={type}>
                          <input
                            type="checkbox"
                            checked={socialFilters.contentType.includes(type)}
                            onChange={() => {
                              setSocialFilters(prev => ({
                                ...prev,
                                contentType: prev.contentType.includes(type)
                                  ? prev.contentType.filter(t => t !== type)
                                  : [...prev.contentType, type]
                              }));
                            }}
                          />
                          {type.charAt(0).toUpperCase() + type.slice(1)}
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="stories">
                  {stories.map((story, i) => (
                    <Story 
                      key={i} 
                      story={story} 
                      index={i} 
                      storyViewed={storyViewed} 
                      onOpen={openStory} 
                    />
                  ))}
                </div>

                {filteredPosts.map(post => (
                  <Post 
                    key={post.id}
                    post={post}
                    currentUser={currentUser}
                    newComments={newComments}
                    handleLike={handleLike}
                    toggleComments={toggleComments}
                    handleAddComment={handleAddComment}
                    handleSavePost={handleSavePost}
                    setNewComments={setNewComments}
                  />
                ))}
              </div>
            )}

            {activeSocialTab === 'profile' && (
              <ProfileView 
                currentUser={currentUser}
                userPosts={userPosts}
                profileViewMode={profileViewMode}
                setProfileViewMode={setProfileViewMode}
                toggleFollow={toggleFollow}
                setShowSettings={setShowSettings}
              />
            )}

            {activeSocialTab === 'messages' && (
              <div className="messages-view">
                {selectedConversation === null ? (
                  <>
                    <div className="messages-header">
                      <h2>Messages</h2>
                    </div>
                    <div className="conversations-list">
                      {messages.map(conversation => (
                        <Conversation 
                          key={conversation.id}
                          conversation={conversation}
                          setSelectedConversation={setSelectedConversation}
                        />
                      ))}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="conversation-header">
                      <button 
                        className="back-button"
                        onClick={() => setSelectedConversation(null)}
                      >
                        <ChevronLeft size={24} />
                      </button>
                      <div className="conversation-user">
                        <img 
                          src={messages.find(c => c.id === selectedConversation).avatar} 
                          alt={messages.find(c => c.id === selectedConversation).username} 
                          className="conversation-user-avatar"
                        />
                        <span>{messages.find(c => c.id === selectedConversation).username}</span>
                      </div>
                    </div>

                    <div className="message-list">
                      {messages.find(c => c.id === selectedConversation).messages.map(message => (
                        <Message 
                          key={message.id}
                          message={message}
                          currentUser={currentUser}
                        />
                      ))}
                    </div>

                    <div className="message-input-container">
                      <input
                        type="text"
                        className="message-input"
                        placeholder="Message..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      />
                      <button 
                        className="send-button"
                        onClick={handleSendMessage}
                        disabled={!newMessage.trim()}
                      >
                        <Send size={20} />
                      </button>
                    </div>
                  </>
                )}
              </div>
            )}

            {currentStoryIndex !== null && (
              <StoryViewer 
                stories={stories}
                currentStoryIndex={currentStoryIndex}
                storyLiked={storyLiked}
                handleStoryLike={handleStoryLike}
                navigateStory={navigateStory}
                closeStory={closeStory}
              />
            )}

            {showSettings && (
              <SettingsModal 
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
                setShowSettings={setShowSettings}
              />
            )}
          </main>

          <nav className="bottom-nav">
            <button 
              className={`nav-item ${activeSocialTab === 'home' ? 'active' : ''}`}
              onClick={() => setActiveSocialTab('home')}
            >
              <Home size={24} />
            </button>
            <button 
              className={`nav-item ${activeSocialTab === 'search' ? 'active' : ''}`}
              onClick={() => setActiveSocialTab('search')}
            >
              <Search size={24} />
            </button>
            <button 
              className={`nav-item ${activeSocialTab === 'create' ? 'active' : ''}`}
              onClick={() => setActiveSocialTab('create')}
            >
              <PlusSquare size={24} />
            </button>
            <button 
              className={`nav-item ${activeSocialTab === 'messages' ? 'active' : ''}`}
              onClick={() => {
                setActiveSocialTab('messages');
                setSelectedConversation(null);
              }}
            >
              <MessageSquare size={24} />
            </button>
            <button 
              className={`nav-item ${activeSocialTab === 'profile' ? 'active' : ''}`}
              onClick={() => setActiveSocialTab('profile')}
            >
              <User size={24} />
            </button>
          </nav>
        </div>      
      )}

      {activeTab === 'ads' && (
        <div className="ads-container">
          <div className="ads-header">
            <h2>Brand Advertisement Campaigns</h2>
            <p>View and engage with brand advertisements to earn rewards</p>
          </div>

          <div className="filter-controls enhanced">
            <div className="search-bar">
              <Search className="search-icon" size={18} />
              <input
                type="text"
                placeholder="Search ads..."
                value={adFilters.searchQuery}
                onChange={(e) => setAdFilters({ ...adFilters, searchQuery: e.target.value })}
              />
            </div>
            <div className="filter-panel">
              <div className="filter-group">
                <label>Audience</label>
                <div className="checkbox-group">
                  {audienceOptions.map(audience => (
                    <label key={audience}>
                      <input
                        type="checkbox"
                        checked={adFilters.audience.includes(audience)}
                        onChange={() => toggleAudienceFilter(audience)}
                      />
                      {audience.charAt(0).toUpperCase() + audience.slice(1)}
                    </label>
                  ))}
                </div>
              </div>
              <div className="filter-group">
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
              <div className="filter-group">
                <label>Min CTR (%)</label>
                <input
                  type="number"
                  value={adFilters.minCTR}
                  onChange={(e) => setAdFilters({ ...adFilters, minCTR: parseFloat(e.target.value) || 0 })}
                />
              </div>
              <div className="filter-group">
                <label>Min Views</label>
                <input
                  type="number"
                  value={adFilters.minViews}
                  onChange={(e) => setAdFilters({ ...adFilters, minViews: parseInt(e.target.value) || 0 })}
                />
              </div>
            </div>
          </div>

          <div className="ads-grid">
            {filteredAds.map(ad => (
              <Ad 
                key={ad.id}
                ad={ad}
                newComments={newComments}
                handleLikeAd={handleLikeAd}
                handleAddAdComment={handleAddAdComment}
                handleShare={handleShare}
                setNewComments={setNewComments}
              />
            ))}
          </div>
        </div>
      )}

      {activeTab === 'dashboard' && (
        <div className="dashboard-container">
          <div className="dashboard-header">
            <h2>Performance Dashboard</h2>
            <div className="filter-controls">
              <div className="time-range">
                <button 
                  className={timeRange === '7d' ? 'active' : ''}
                  onClick={() => setTimeRange('7d')}
                >
                  7 Days
                </button>
                <button 
                  className={timeRange === '30d' ? 'active' : ''}
                  onClick={() => setTimeRange('30d')}
                >
                  30 Days
                </button>
                <button 
                  className={timeRange === '90d' ? 'active' : ''}
                  onClick={() => setTimeRange('90d')}
                >
                  90 Days
                </button>
              </div>
              <select
                value={socialFilters.sortBy}
                onChange={(e) => setSocialFilters({ ...socialFilters, sortBy: e.target.value })}
              >
                <option value="impressions">Impressions</option>
                <option value="engagements">Engagements</option>
                <option value="followers">Followers</option>
              </select>
            </div>
          </div>

          <div className="metrics-overview">
            <div className="metric-card">
              <h3>Impressions</h3>
              <div className="metric-value">{analyticsData.impressions.toLocaleString()}</div>
              <div className="metric-change positive">+12%</div>
            </div>
            <div className="metric-card">
              <h3>Engagements</h3>
              <div className="metric-value">{analyticsData.engagements.toLocaleString()}</div>
              <div className="metric-change positive">+7%</div>
            </div>
            <div className="metric-card">
              <h3>Followers</h3>
              <div className="metric-value">{analyticsData.followers.toLocaleString()}</div>
              <div className="metric-change positive">+3%</div>
            </div>
            <div className="metric-card">
              <h3>Click Rate</h3>
              <div className="metric-value">{analyticsData.clickRate}%</div>
              <div className="metric-change negative">-0.2%</div>
            </div>
          </div>

          <div className="charts-container">
            <div className="chart">
              <h3>Impressions Over Time</h3>
              <div style={{ width: '100%', height: 200 }}>
                <ResponsiveContainer>
                  <LineChart data={performanceTimeData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="impressions" stroke="#8884d8" name="Impressions" />
                    <Line type="monotone" dataKey="engagements" stroke="#82ca9d" name="Engagements" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="chart">
              <h3>Engagements by Post</h3>
              <div style={{ width: '100%', height: 200 }}>
                <ResponsiveContainer>
                  <BarChart data={posts.map(post => ({
                    name: post.username,
                    likes: post.likes,
                    comments: post.comments.length
                  }))}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="likes" fill="#8884d8" name="Likes" />
                    <Bar dataKey="comments" fill="#82ca9d" name="Comments" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          <div className="top-performing">
            <h3>Top Performing Posts</h3>
            <div className="posts-list">
              {posts.slice(0, 3).map((post, i) => (
                <div key={i} className="performance-post">
                  <img src={post.image} alt="Post" />
                  <div className="post-metrics">
                    <div>Impressions: {post.impressions.toLocaleString()}</div>
                    <div>Engagements: {(post.likes + post.comments.length).toLocaleString()}</div>
                    <div>Engagement Rate: {post.engagementRate}%</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'gamification' && (
        <div className="gamification-container">
          <div className="score-card">
            <h3>Your Current Score</h3>
            <div className="score-value">1,450</div>
            <div className="score-level">Gold Tier</div>
            <div className="progress-bar">
              <div className="progress" style={{ width: '65%' }}></div>
            </div>
            <div className="progress-text">650 points to Platinum</div>
          </div>

          <div className="badges-container">
            <h3>Available Badges</h3>
            <div className="badges-list">
              {gamificationData.map((badge, i) => (
                <div key={i} className="badge-card">
                  <img src={badge.image} alt={badge.title} />
                  <h4>{badge.title}</h4>
                  <div className="badge-progress">
                    <div className="progress-bar">
                      <div className="progress" style={{ width: `${badge.progress}%` }}></div>
                    </div>
                    <span>{badge.progress}/{badge.target}</span>
                  </div>
                  <div className="badge-reward">Reward: {badge.reward}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="leaderboard">
            <h3>Leaderboard</h3>
            <div className="leaderboard-list">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="leaderboard-item">
                  <span className="rank">{i+1}</span>
                  <img src={`https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80`} alt="User" />
                  <span className="username">user_{i+1}</span>
                  <span className="score">{(5-i)*1000} pts</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserManagement;