// // export default HomeMain;
// import { useState } from 'react';
// import {Link, useNavigate} from 'react-router-dom';
// import { 
//   BarChart3, 
//   Target, 
//   TrendingUp, 
//   Users, 
//   Award,
//   Globe,
//   Zap,
//   ArrowRight,
//   Menu,
//   X,
//   CheckCircle,
//   ChevronDown,
//   Search,
//   Play
// } from 'lucide-react';
// import '../Home.css';

// function HomeMain() {
//   const navigate = useNavigate();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeTab, setActiveTab] = useState('overview');
//   const [color, setColor] = useState('#3b82f6');

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const updateColor = () => {
//     const viewer = document.querySelector("model-viewer");
//     if (viewer?.model?.materials) {
//       viewer.model.materials.forEach((mat) => {
//         mat.pbrMetallicRoughness.setBaseColorFactor([
//           parseInt(color.slice(1, 3), 16) / 255,
//           parseInt(color.slice(3, 5), 16) / 255,
//           parseInt(color.slice(5, 7), 16) / 255,
//           1,
//         ]);
//       });
//     }
//   };

//   return (
//     <div className="app">
//       {/* Navigation */}
//       <nav className="navbar">
//         <div className="nav-container">
//           <div className="nav-brand">
//             <Zap className="nav-logo" />
//             <span className="nav-brand-name">PromoHub</span>
//           </div>
          
//           {/* Desktop Menu */}
//           <div className="desktop-menu">
//             <a href="#features" className="nav-link">Features</a>
//             <a href="#solutions" className="nav-link">Solutions</a>
//             <a href="#pricing" className="nav-link">Pricing</a>
//             <a href="#resources" className="nav-link">Resources</a>
//           </div>
          
//           <div className="desktop-auth">
//             <button className="sign-in-btn" onClick={()=> navigate('/login')}>Sign in</button>
//             <button className="get-started-btn" onClick={()=> navigate('/registration')}>Get started</button>
//           </div>
          
//           {/* Mobile Menu Button */}
//           <div className="mobile-menu-btn">
//             <button onClick={toggleMenu} className="menu-toggle">
//               {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>
        
//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="mobile-menu">
//             <div className="mobile-menu-content">
//               <a href="#features" className="mobile-nav-link" onClick={toggleMenu}>Features</a>
//               <a href="#solutions" className="mobile-nav-link" onClick={toggleMenu}>Solutions</a>
//               <a href="#pricing" className="mobile-nav-link" onClick={toggleMenu}>Pricing</a>
//               <a href="#resources" className="mobile-nav-link" onClick={toggleMenu}>Resources</a>
//               <div className="mobile-auth">
//                 <button className="mobile-sign-in-btn">Sign in</button>
//                 <button className="mobile-get-started-btn">Get started</button>
//               </div>
//             </div>
//           </div>
//         )}
//       </nav>

//       {/* Hero Section */}
//       <section className="hero-section">
//         <div className="hero-container">
//           <div className="hero-content">
//             <h1 className="hero-title">
//               The smarter way to run your digital advertising
//             </h1>
//             <p className="hero-description">
//               Reach the right customers with AI-powered targeting, real-time optimization, and measurable results.
//             </p>
//             <div className="hero-buttons">
//               <button className="primary-btn">
//                 Start now
//               </button>
//               <button className="secondary-btn">
//                 <Play size={16} className="btn-icon" /> Watch demo
//               </button>
//             </div>
//           </div>
//           <div className="hero-image">
//             <div className="dashboard-preview">
//               <img 
//                 src="src\assets\brandDashboard.JPG" 
//                 alt="Dashboard Preview" 
//                 className="dashboard-img"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Trust Indicators */}
//       <section className="trust-section">
//         <div className="trust-container">
//           <p className="trust-text">Trusted by leading brands worldwide</p>
//           <div className="company-logos">
//             {['Company1', 'Company2', 'Company3', 'Company4', 'Company5'].map((company, index) => (
//               <div key={index} className="company-logo">
//                 {company}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Features Tabs */}
//       <section id="features" className="features-section">
//         <div className="features-container">
//           <div className="section-header">
//             <h2 className="section-title">Powerful advertising tools</h2>
//             <p className="section-description">
//               Everything you need to create, manage, and optimize high-performing campaigns
//             </p>
//           </div>
          
//           <div className="tabs-container">
//             <div className="tabs">
//               <button
//                 onClick={() => setActiveTab('overview')}
//                 className={`tab-btn ${activeTab === 'overview' ? 'active-tab' : ''}`}
//               >
//                 Overview
//               </button>
//               <button
//                 onClick={() => setActiveTab('targeting')}
//                 className={`tab-btn ${activeTab === 'targeting' ? 'active-tab' : ''}`}
//               >
//                 Targeting
//               </button>
//               <button
//                 onClick={() => setActiveTab('automation')}
//                 className={`tab-btn ${activeTab === 'automation' ? 'active-tab' : ''}`}
//               >
//                 Automation
//               </button>
//             </div>
//           </div>
          
//           <div className="features-grid">
//             {activeTab === 'overview' && (
//               <>
//                 <div className="feature-card">
//                   <div className="feature-icon-container">
//                     <BarChart3 className="feature-icon" />
//                   </div>
//                   <h3 className="feature-title">Performance Dashboard</h3>
//                   <p className="feature-description">
//                     Get a complete view of your campaign performance with real-time metrics and insights.
//                   </p>
//                   <a href="#" className="feature-link">
//                     Learn more <ArrowRight size={16} className="link-icon" />
//                   </a>
//                 </div>
                
//                 <div className="feature-card">
//                   <div className="feature-icon-container">
//                     <Users className="feature-icon" />
//                   </div>
//                   <h3 className="feature-title">Audience Insights</h3>
//                   <p className="feature-description">
//                     Understand your customers with detailed demographic and behavioral data.
//                   </p>
//                   <a href="#" className="feature-link">
//                     Learn more <ArrowRight size={16} className="link-icon" />
//                   </a>
//                 </div>
                
//                 <div className="feature-card">
//                   <div className="feature-icon-container">
//                     <Award className="feature-icon" />
//                   </div>
//                   <h3 className="feature-title">Creative Tools</h3>
//                   <p className="feature-description">
//                     Build stunning ads with our intuitive drag-and-drop editor and templates.
//                   </p>
//                   <a href="#" className="feature-link">
//                     Learn more <ArrowRight size={16} className="link-icon" />
//                   </a>
//                 </div>
//               </>
//             )}
            
//             {activeTab === 'targeting' && (
//               <>
//                 <div className="feature-card">
//                   <div className="feature-icon-container">
//                     <Target className="feature-icon" />
//                   </div>
//                   <h3 className="feature-title">AI Audience Targeting</h3>
//                   <p className="feature-description">
//                     Reach the right customers with our machine learning algorithms.
//                   </p>
//                   <a href="#" className="feature-link">
//                     Learn more <ArrowRight size={16} className="link-icon" />
//                   </a>
//                 </div>
                
//                 <div className="feature-card">
//                   <div className="feature-icon-container">
//                     <Globe className="feature-icon" />
//                   </div>
//                   <h3 className="feature-title">Location Targeting</h3>
//                   <p className="feature-description">
//                     Target customers based on their geographic location and behavior.
//                   </p>
//                   <a href="#" className="feature-link">
//                     Learn more <ArrowRight size={16} className="link-icon" />
//                   </a>
//                 </div>
                
//                 <div className="feature-card">
//                   <div className="feature-icon-container">
//                     <TrendingUp className="feature-icon" />
//                   </div>
//                   <h3 className="feature-title">Lookalike Audiences</h3>
//                   <p className="feature-description">
//                     Find new customers who resemble your best existing customers.
//                   </p>
//                   <a href="#" className="feature-link">
//                     Learn more <ArrowRight size={16} className="link-icon" />
//                   </a>
//                 </div>
//               </>
//             )}
            
//             {activeTab === 'automation' && (
//               <>
//                 <div className="feature-card">
//                   <div className="feature-icon-container">
//                     <Zap className="feature-icon" />
//                   </div>
//                   <h3 className="feature-title">Smart Bidding</h3>
//                   <p className="feature-description">
//                     Automatically optimize bids to maximize your campaign performance.
//                   </p>
//                   <a href="#" className="feature-link">
//                     Learn more <ArrowRight size={16} className="link-icon" />
//                   </a>
//                 </div>
                
//                 <div className="feature-card">
//                   <div className="feature-icon-container">
//                     <BarChart3 className="feature-icon" />
//                   </div>
//                   <h3 className="feature-title">Performance Alerts</h3>
//                   <p className="feature-description">
//                     Get notified when your campaigns need attention or optimization.
//                   </p>
//                   <a href="#" className="feature-link">
//                     Learn more <ArrowRight size={16} className="link-icon" />
//                   </a>
//                 </div>
                
//                 <div className="feature-card">
//                   <div className="feature-icon-container">
//                     <CheckCircle className="feature-icon" />
//                   </div>
//                   <h3 className="feature-title">Automated Rules</h3>
//                   <p className="feature-description">
//                     Set rules to automatically adjust your campaigns based on performance.
//                   </p>
//                   <a href="#" className="feature-link">
//                     Learn more <ArrowRight size={16} className="link-icon" />
//                   </a>
//                 </div>
//               </>
//             )}
//           </div>
//         </div>
//       </section>

//       {/* Results Section */}
//       <section className="results-section">
//         <div className="results-container">
//           <div className="section-header">
//             <h2 className="section-title">Real results from real businesses</h2>
//             <p className="section-description">
//               See how companies like yours have succeeded with our platform
//             </p>
//           </div>
          
//           <div className="results-grid">
//             <div className="result-card">
//               <div className="result-header">
//                 <div className="result-percentage">
//                   <span>+40%</span>
//                 </div>
//                 <div>
//                   <h4 className="result-title">Conversion Rate</h4>
//                   <p className="result-subtitle">E-commerce brand</p>
//                 </div>
//               </div>
//               <p className="result-quote">
//                 "The AI-driven targeting helped us reach more qualified leads, resulting in a 40% increase in conversions."
//               </p>
//             </div>
            
//             <div className="result-card">
//               <div className="result-header">
//                 <div className="result-percentage">
//                   <span>-25%</span>
//                 </div>
//                 <div>
//                   <h4 className="result-title">Cost Per Acquisition</h4>
//                   <p className="result-subtitle">SaaS company</p>
//                 </div>
//               </div>
//               <p className="result-quote">
//                 "Smart bidding reduced our customer acquisition costs by 25% while maintaining quality."
//               </p>
//             </div>
            
//             <div className="result-card">
//               <div className="result-header">
//                 <div className="result-percentage">
//                   <span>+35%</span>
//                 </div>
//                 <div>
//                   <h4 className="result-title">Return on Ad Spend</h4>
//                   <p className="result-subtitle">Retail chain</p>
//                 </div>
//               </div>
//               <p className="result-quote">
//                 "The performance dashboard helped us optimize our budget allocation, increasing ROAS by 35%."
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Solutions Section */}
//       <section id="solutions" className="solutions-section">
//         <div className="solutions-container">
//           <div className="section-header">
//             <h2 className="section-title">Solutions for every marketing goal</h2>
//             <p className="section-description">
//               Whether you're looking to drive sales, generate leads, or build brand awareness
//             </p>
//           </div>
          
//           <div className="solutions-grid">
//             <div className="solution-card">
//               <h3 className="solution-title">Brand Awareness</h3>
//               <p className="solution-description">
//                 Increase visibility and recognition for your brand
//               </p>
//               <a href="#" className="solution-link">
//                 Learn more <ArrowRight size={16} className="link-icon" />
//               </a>
//             </div>
            
//             <div className="solution-card">
//               <h3 className="solution-title">Lead Generation</h3>
//               <p className="solution-description">
//                 Capture qualified leads for your sales pipeline
//               </p>
//               <a href="#" className="solution-link">
//                 Learn more <ArrowRight size={16} className="link-icon" />
//               </a>
//             </div>
            
//             <div className="solution-card">
//               <h3 className="solution-title">E-commerce Sales</h3>
//               <p className="solution-description">
//                 Drive online sales and revenue for your store
//               </p>
//               <a href="#" className="solution-link">
//                 Learn more <ArrowRight size={16} className="link-icon" />
//               </a>
//             </div>
            
//             <div className="solution-card">
//               <h3 className="solution-title">App Installs</h3>
//               <p className="solution-description">
//                 Grow your mobile app user base
//               </p>
//               <a href="#" className="solution-link">
//                 Learn more <ArrowRight size={16} className="link-icon" />
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* AR Experience Section */}
//       <section className="ar-experience">
//         <h2 className="section-title">Try Our Interactive AR Shoe Ad</h2>
//         <model-viewer
//           src="src\assets\sport_shoe.glb"
//           alt="A 3D model of a shoe"
//           ar
//           ar-modes="scene-viewer webxr quick-look"
//           environment-image="neutral"
//           auto-rotate
//           camera-controls
//           className="model-viewer"
//           exposure="1"
//         >
//           {/* <button
//             slot="ar-button"
//             className="ar-button"
//           >
//             View in AR
//           </button> */}
//         </model-viewer>

//         <input
//           type="color"
//           value={color}
//           onChange={(e) => setColor(e.target.value)}
//           className="color-picker"
//         />

//         <button
//           onClick={updateColor}
//           className="color-change-btn"
//         >
//           Change Shoe Color
//         </button>
//       </section>

//       {/* Pricing Section */}
//       <section id="pricing" className="pricing-section">
//         <div className="pricing-container">
//           <div className="section-header">
//             <h2 className="section-title">Simple, transparent pricing</h2>
//             <p className="section-description">
//               Pay only for what you need with flexible pricing options
//             </p>
//           </div>
          
//           <div className="pricing-grid">
//             <div className="pricing-card">
//               <h3 className="pricing-title">Starter</h3>
//               <p className="pricing-subtitle">For small businesses getting started</p>
//               <p className="pricing-amount">$299<span>/month</span></p>
              
//               <ul className="pricing-features">
//                 <li className="pricing-feature">
//                   <CheckCircle className="feature-check" />
//                   <span>Up to $10,000 monthly ad spend</span>
//                 </li>
//                 <li className="pricing-feature">
//                   <CheckCircle className="feature-check" />
//                   <span>Basic reporting</span>
//                 </li>
//                 <li className="pricing-feature">
//                   <CheckCircle className="feature-check" />
//                   <span>Email support</span>
//                 </li>
//               </ul>
              
//               <button className="pricing-btn">
//                 Get started
//               </button>
//             </div>
            
//             <div className="pricing-card popular">
//               <div className="popular-badge">
//                 POPULAR
//               </div>
//               <h3 className="pricing-title">Professional</h3>
//               <p className="pricing-subtitle">For growing businesses</p>
//               <p className="pricing-amount">$999<span>/month</span></p>
              
//               <ul className="pricing-features">
//                 <li className="pricing-feature">
//                   <CheckCircle className="feature-check" />
//                   <span>Up to $50,000 monthly ad spend</span>
//                 </li>
//                 <li className="pricing-feature">
//                   <CheckCircle className="feature-check" />
//                   <span>Advanced reporting</span>
//                 </li>
//                 <li className="pricing-feature">
//                   <CheckCircle className="feature-check" />
//                   <span>Priority support</span>
//                 </li>
//                 <li className="pricing-feature">
//                   <CheckCircle className="feature-check" />
//                   <span>AI optimization</span>
//                 </li>
//               </ul>
              
//               <button className="pricing-btn primary">
//                 Get started
//               </button>
//             </div>
            
//             <div className="pricing-card">
//               <h3 className="pricing-title">Enterprise</h3>
//               <p className="pricing-subtitle">For large organizations</p>
//               <p className="pricing-amount">Custom<span> pricing</span></p>
              
//               <ul className="pricing-features">
//                 <li className="pricing-feature">
//                   <CheckCircle className="feature-check" />
//                   <span>Unlimited ad spend</span>
//                 </li>
//                 <li className="pricing-feature">
//                   <CheckCircle className="feature-check" />
//                   <span>Custom reporting</span>
//                 </li>
//                 <li className="pricing-feature">
//                   <CheckCircle className="feature-check" />
//                   <span>Dedicated account manager</span>
//                 </li>
//                 <li className="pricing-feature">
//                   <CheckCircle className="feature-check" />
//                   <span>Premium AI features</span>
//                 </li>
//               </ul>
              
//               <button className="pricing-btn">
//                 Contact sales
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Final CTA */}
//       <section className="cta-section">
//         <div className="cta-container">
//           <h2 className="cta-title">Ready to grow your business?</h2>
//           <p className="cta-description">
//             Join thousands of businesses already using BrandPromo to drive real results
//           </p>
//           <div className="cta-buttons">
//             <button className="cta-btn primary">
//               Start free trial
//             </button>
//             <button className="cta-btn secondary">
//               Request demo
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="footer">
//         <div className="footer-container">
//           <div className="footer-grid">
//             <div className="footer-brand">
//               <div className="footer-logo-container">
//                 <Zap className="footer-logo" />
//                 <span className="footer-brand-name">BrandPromo</span>
//               </div>
//               <p className="footer-description">
//                 The complete platform for digital advertising success.
//               </p>
//               <div className="social-links">
//                 <a href="#" className="social-link">
//                   <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true">
//                     <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
//                   </svg>
//                 </a>
//                 <a href="#" className="social-link">
//                   <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true">
//                     <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
//                   </svg>
//                 </a>
//                 <a href="#" className="social-link">
//                   <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true">
//                     <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
//                   </svg>
//                 </a>
//               </div>
//             </div>
            
//             <div className="footer-links">
//               <h4 className="footer-links-title">Product</h4>
//               <ul className="footer-links-list">
//                 <li><a href="#" className="footer-link">Features</a></li>
//                 <li><a href="#" className="footer-link">Pricing</a></li>
//                 <li><a href="#" className="footer-link">Solutions</a></li>
//                 <li><a href="#" className="footer-link">Integrations</a></li>
//               </ul>
//             </div>
            
//             <div className="footer-links">
//               <h4 className="footer-links-title">Resources</h4>
//               <ul className="footer-links-list">
//                 <li><a href="#" className="footer-link">Blog</a></li>
//                 <li><a href="#" className="footer-link">Help Center</a></li>
//                 <li><a href="#" className="footer-link">Webinars</a></li>
//                 <li><a href="#" className="footer-link">Case Studies</a></li>
//               </ul>
//             </div>
            
//             <div className="footer-links">
//               <h4 className="footer-links-title">Company</h4>
//               <ul className="footer-links-list">
//                 <li><a href="#" className="footer-link">About Us</a></li>
//                 <li><a href="#" className="footer-link">Careers</a></li>
//                 <li><a href="#" className="footer-link">Contact</a></li>
//                 <li><a href="#" className="footer-link">Press</a></li>
//               </ul>
//             </div>
//           </div>
          
//           <div className="footer-bottom">
//             <p className="copyright">
//               &copy; {new Date().getFullYear()} BrandPromo. All rights reserved.
//             </p>
//             <div className="legal-links">
//               <a href="#" className="legal-link">Privacy Policy</a>
//               <a href="#" className="legal-link">Terms of Service</a>
//               <a href="#" className="legal-link">Cookie Policy</a>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }
// export default HomeMain;

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  BarChart3, 
  Target, 
  TrendingUp, 
  Users, 
  Award,
  Globe,
  Zap,
  ArrowRight,
  Menu,
  X,
  CheckCircle,
  ChevronDown,
  Search,
  Play
} from 'lucide-react';
import '../Home.css';

function HomeMain() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [color, setColor] = useState('#3b82f6');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const updateColor = () => {
    const viewer = document.querySelector("model-viewer");
    if (viewer?.model?.materials) {
      viewer.model.materials.forEach((mat) => {
        mat.pbrMetallicRoughness.setBaseColorFactor([
          parseInt(color.slice(1, 3), 16) / 255,
          parseInt(color.slice(3, 5), 16) / 255,
          parseInt(color.slice(5, 7), 16) / 255,
          1,
        ]);
      });
    }
  };

  return (
    <div className="ph-app-container">
      {/* Navigation */}
      <nav className="ph-nav-bar">
        <div className="ph-nav-wrapper">
          <div className="ph-nav-logo-section">
            <Zap className="ph-logo-icon" />
            <span className="ph-brand-text">PromoHub</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="ph-desktop-nav">
            <a href="#features" className="ph-nav-item">Features</a>
            <a href="#solutions" className="ph-nav-item">Solutions</a>
            <a href="#pricing" className="ph-nav-item">Pricing</a>
            <a href="#resources" className="ph-nav-item">Resources</a>
          </div>
          
          <div className="ph-desktop-auth-section">
            <button className="ph-signin-button" onClick={() => navigate('/login')}>Sign in</button>
            <button className="ph-getstarted-button" onClick={() => navigate('/registration')}>Get started</button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="ph-mobile-menu-toggle">
            <button onClick={toggleMenu} className="ph-menu-button">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="ph-mobile-nav">
            <div className="ph-mobile-nav-content">
              <a href="#features" className="ph-mobile-nav-item" onClick={toggleMenu}>Features</a>
              <a href="#solutions" className="ph-mobile-nav-item" onClick={toggleMenu}>Solutions</a>
              <a href="#pricing" className="ph-mobile-nav-item" onClick={toggleMenu}>Pricing</a>
              <a href="#resources" className="ph-mobile-nav-item" onClick={toggleMenu}>Resources</a>
              <div className="ph-mobile-auth-section">
                <button className="ph-mobile-signin-button"  onClick={() => navigate('/login')}>Sign in</button>
                <button className="ph-mobile-getstarted-button"  onClick={() => navigate('/registration')}>Get started</button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="ph-hero-section">
        <div className="ph-hero-wrapper">
          <div className="ph-hero-content">
            <h1 className="ph-hero-heading">
              The smarter way to run your digital advertising
            </h1>
            <p className="ph-hero-text">
              Reach the right customers with AI-powered targeting, real-time optimization, and measurable results.
            </p>
            <div className="ph-hero-actions">
              <button className="ph-primary-button">
                Start now
              </button>
              <button className="ph-secondary-button">
                <Play size={16} className="ph-button-icon" /> Watch demo
              </button>
            </div>
          </div>
          <div className="ph-hero-visual">
            <div className="ph-dashboard-container">
              <img 
                src="src\assets\brandDashboard.JPG" 
                alt="Dashboard Preview" 
                className="ph-dashboard-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="ph-trust-section">
        <div className="ph-trust-wrapper">
          <p className="ph-trust-text">Trusted by leading brands worldwide</p>
          <div className="ph-company-logos">
            {['Company1', 'Company2', 'Company3', 'Company4', 'Company5'].map((company, index) => (
              <div key={index} className="ph-logo-item">
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Tabs */}
      <section id="features" className="ph-features-section">
        <div className="ph-features-wrapper">
          <div className="ph-section-header">
            <h2 className="ph-section-title">Powerful advertising tools</h2>
            <p className="ph-section-description">
              Everything you need to create, manage, and optimize high-performing campaigns
            </p>
          </div>
          
          <div className="ph-tabs-container">
            <div className="ph-tabs">
              <button
                onClick={() => setActiveTab('overview')}
                className={`ph-tab-button ${activeTab === 'overview' ? 'ph-tab-active' : ''}`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('targeting')}
                className={`ph-tab-button ${activeTab === 'targeting' ? 'ph-tab-active' : ''}`}
              >
                Targeting
              </button>
              <button
                onClick={() => setActiveTab('automation')}
                className={`ph-tab-button ${activeTab === 'automation' ? 'ph-tab-active' : ''}`}
              >
                Automation
              </button>
            </div>
          </div>
          
          <div className="ph-features-grid">
            {activeTab === 'overview' && (
              <>
                <div className="ph-feature-card">
                  <div className="ph-feature-icon-wrapper">
                    <BarChart3 className="ph-feature-icon" />
                  </div>
                  <h3 className="ph-feature-title">Performance Dashboard</h3>
                  <p className="ph-feature-text">
                    Get a complete view of your campaign performance with real-time metrics and insights.
                  </p>
                  <a href="#" className="ph-feature-link">
                    Learn more <ArrowRight size={16} className="ph-link-icon" />
                  </a>
                </div>
                
                <div className="ph-feature-card">
                  <div className="ph-feature-icon-wrapper">
                    <Users className="ph-feature-icon" />
                  </div>
                  <h3 className="ph-feature-title">Audience Insights</h3>
                  <p className="ph-feature-text">
                    Understand your customers with detailed demographic and behavioral data.
                  </p>
                  <a href="#" className="ph-feature-link">
                    Learn more <ArrowRight size={16} className="ph-link-icon" />
                  </a>
                </div>
                
                <div className="ph-feature-card">
                  <div className="ph-feature-icon-wrapper">
                    <Award className="ph-feature-icon" />
                  </div>
                  <h3 className="ph-feature-title">Creative Tools</h3>
                  <p className="ph-feature-text">
                    Build stunning ads with our intuitive drag-and-drop editor and templates.
                  </p>
                  <a href="#" className="ph-feature-link">
                    Learn more <ArrowRight size={16} className="ph-link-icon" />
                  </a>
                </div>
              </>
            )}
            
            {activeTab === 'targeting' && (
              <>
                <div className="ph-feature-card">
                  <div className="ph-feature-icon-wrapper">
                    <Target className="ph-feature-icon" />
                  </div>
                  <h3 className="ph-feature-title">AI Audience Targeting</h3>
                  <p className="ph-feature-text">
                    Reach the right customers with our machine learning algorithms.
                  </p>
                  <a href="#" className="ph-feature-link">
                    Learn more <ArrowRight size={16} className="ph-link-icon" />
                  </a>
                </div>
                
                <div className="ph-feature-card">
                  <div className="ph-feature-icon-wrapper">
                    <Globe className="ph-feature-icon" />
                  </div>
                  <h3 className="ph-feature-title">Location Targeting</h3>
                  <p className="ph-feature-text">
                    Target customers based on their geographic location and behavior.
                  </p>
                  <a href="#" className="ph-feature-link">
                    Learn more <ArrowRight size={16} className="ph-link-icon" />
                  </a>
                </div>
                
                <div className="ph-feature-card">
                  <div className="ph-feature-icon-wrapper">
                    <TrendingUp className="ph-feature-icon" />
                  </div>
                  <h3 className="ph-feature-title">Lookalike Audiences</h3>
                  <p className="ph-feature-text">
                    Find new customers who resemble your best existing customers.
                  </p>
                  <a href="#" className="ph-feature-link">
                    Learn more <ArrowRight size={16} className="ph-link-icon" />
                  </a>
                </div>
              </>
            )}
            
            {activeTab === 'automation' && (
              <>
                <div className="ph-feature-card">
                  <div className="ph-feature-icon-wrapper">
                    <Zap className="ph-feature-icon" />
                  </div>
                  <h3 className="ph-feature-title">Smart Bidding</h3>
                  <p className="ph-feature-text">
                    Automatically optimize bids to maximize your campaign performance.
                  </p>
                  <a href="#" className="ph-feature-link">
                    Learn more <ArrowRight size={16} className="ph-link-icon" />
                  </a>
                </div>
                
                <div className="ph-feature-card">
                  <div className="ph-feature-icon-wrapper">
                    <BarChart3 className="ph-feature-icon" />
                  </div>
                  <h3 className="ph-feature-title">Performance Alerts</h3>
                  <p className="ph-feature-text">
                    Get notified when your campaigns need attention or optimization.
                  </p>
                  <a href="#" className="ph-feature-link">
                    Learn more <ArrowRight size={16} className="ph-link-icon" />
                  </a>
                </div>
                
                <div className="ph-feature-card">
                  <div className="ph-feature-icon-wrapper">
                    <CheckCircle className="ph-feature-icon" />
                  </div>
                  <h3 className="ph-feature-title">Automated Rules</h3>
                  <p className="ph-feature-text">
                    Set rules to automatically adjust your campaigns based on performance.
                  </p>
                  <a href="#" className="ph-feature-link">
                    Learn more <ArrowRight size={16} className="ph-link-icon" />
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="ph-results-section">
        <div className="ph-results-wrapper">
          <div className="ph-section-header">
            <h2 className="ph-section-title">Real results from real businesses</h2>
            <p className="ph-section-description">
              See how companies like yours have succeeded with our platform
            </p>
          </div>
          
          <div className="ph-results-grid">
            <div className="ph-result-card">
              <div className="ph-result-header">
                <div className="ph-result-metric">
                  <span>+40%</span>
                </div>
                <div>
                  <h4 className="ph-result-title">Conversion Rate</h4>
                  <p className="ph-result-subtitle">E-commerce brand</p>
                </div>
              </div>
              <p className="ph-result-quote">
                "The AI-driven targeting helped us reach more qualified leads, resulting in a 40% increase in conversions."
              </p>
            </div>
            
            <div className="ph-result-card">
              <div className="ph-result-header">
                <div className="ph-result-metric">
                  <span>-25%</span>
                </div>
                <div>
                  <h4 className="ph-result-title">Cost Per Acquisition</h4>
                  <p className="ph-result-subtitle">SaaS company</p>
                </div>
              </div>
              <p className="ph-result-quote">
                "Smart bidding reduced our customer acquisition costs by 25% while maintaining quality."
              </p>
            </div>
            
            <div className="ph-result-card">
              <div className="ph-result-header">
                <div className="ph-result-metric">
                  <span>+35%</span>
                </div>
                <div>
                  <h4 className="ph-result-title">Return on Ad Spend</h4>
                  <p className="ph-result-subtitle">Retail chain</p>
                </div>
              </div>
              <p className="ph-result-quote">
                "The performance dashboard helped us optimize our budget allocation, increasing ROAS by 35%."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="ph-solutions-section">
        <div className="ph-solutions-wrapper">
          <div className="ph-section-header">
            <h2 className="ph-section-title">Solutions for every marketing goal</h2>
            <p className="ph-section-description">
              Whether you're looking to drive sales, generate leads, or build brand awareness
            </p>
          </div>
          
          <div className="ph-solutions-grid">
            <div className="ph-solution-card">
              <h3 className="ph-solution-title">Brand Awareness</h3>
              <p className="ph-solution-text">
                Increase visibility and recognition for your brand
              </p>
              <a href="#" className="ph-solution-link">
                Learn more <ArrowRight size={16} className="ph-link-icon" />
              </a>
            </div>
            
            <div className="ph-solution-card">
              <h3 className="ph-solution-title">Lead Generation</h3>
              <p className="ph-solution-text">
                Capture qualified leads for your sales pipeline
              </p>
              <a href="#" className="ph-solution-link">
                Learn more <ArrowRight size={16} className="ph-link-icon" />
              </a>
            </div>
            
            <div className="ph-solution-card">
              <h3 className="ph-solution-title">E-commerce Sales</h3>
              <p className="ph-solution-text">
                Drive online sales and revenue for your store
              </p>
              <a href="#" className="ph-solution-link">
                Learn more <ArrowRight size={16} className="ph-link-icon" />
              </a>
            </div>
            
            <div className="ph-solution-card">
              <h3 className="ph-solution-title">App Installs</h3>
              <p className="ph-solution-text">
                Grow your mobile app user base
              </p>
              <a href="#" className="ph-solution-link">
                Learn more <ArrowRight size={16} className="ph-link-icon" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* AR Experience Section */}
      <section className="ph-ar-experience">
        <h2 className="ph-section-title">Try Our Interactive AR Shoe Ad</h2>
        <model-viewer
          src="src\assets\sport_shoe.glb"
          alt="A 3D model of a shoe"
          ar
          ar-modes="scene-viewer webxr quick-look"
          environment-image="neutral"
          auto-rotate
          camera-controls
          className="ph-model-viewer"
          exposure="1"
        >
          {/* <button
            slot="ar-button"
            className="ph-ar-button"
          >
            View in AR
          </button> */}
        </model-viewer>

        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="ph-color-picker"
        />

        <button
          onClick={updateColor}
          className="ph-color-change-button"
        >
          Change Shoe Color
        </button>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="ph-pricing-section">
        <div className="ph-pricing-wrapper">
          <div className="ph-section-header">
            <h2 className="ph-section-title">Simple, transparent pricing</h2>
            <p className="ph-section-description">
              Pay only for what you need with flexible pricing options
            </p>
          </div>
          
          <div className="ph-pricing-grid">
            <div className="ph-pricing-card">
              <h3 className="ph-pricing-title">Starter</h3>
              <p className="ph-pricing-subtitle">For small businesses getting started</p>
              <p className="ph-pricing-amount">$299<span>/month</span></p>
              
              <ul className="ph-pricing-features">
                <li className="ph-pricing-feature">
                  <CheckCircle className="ph-feature-check" />
                  <span>Up to $10,000 monthly ad spend</span>
                </li>
                <li className="ph-pricing-feature">
                  <CheckCircle className="ph-feature-check" />
                  <span>Basic reporting</span>
                </li>
                <li className="ph-pricing-feature">
                  <CheckCircle className="ph-feature-check" />
                  <span>Email support</span>
                </li>
              </ul>
              
              <button className="ph-pricing-button">
                Get started
              </button>
            </div>
            
            <div className="ph-pricing-card ph-popular">
              <div className="ph-popular-badge">
                POPULAR
              </div>
              <h3 className="ph-pricing-title">Professional</h3>
              <p className="ph-pricing-subtitle">For growing businesses</p>
              <p className="ph-pricing-amount">$999<span>/month</span></p>
              
              <ul className="ph-pricing-features">
                <li className="ph-pricing-feature">
                  <CheckCircle className="ph-feature-check" />
                  <span>Up to $50,000 monthly ad spend</span>
                </li>
                <li className="ph-pricing-feature">
                  <CheckCircle className="ph-feature-check" />
                  <span>Advanced reporting</span>
                </li>
                <li className="ph-pricing-feature">
                  <CheckCircle className="ph-feature-check" />
                  <span>Priority support</span>
                </li>
                <li className="ph-pricing-feature">
                  <CheckCircle className="ph-feature-check" />
                  <span>AI optimization</span>
                </li>
              </ul>
              
              <button className="ph-pricing-button ph-primary">
                Get started
              </button>
            </div>
            
            <div className="ph-pricing-card">
              <h3 className="ph-pricing-title">Enterprise</h3>
              <p className="ph-pricing-subtitle">For large organizations</p>
              <p className="ph-pricing-amount">Custom<span> pricing</span></p>
              
              <ul className="ph-pricing-features">
                <li className="ph-pricing-feature">
                  <CheckCircle className="ph-feature-check" />
                  <span>Unlimited ad spend</span>
                </li>
                <li className="ph-pricing-feature">
                  <CheckCircle className="ph-feature-check" />
                  <span>Custom reporting</span>
                </li>
                <li className="ph-pricing-feature">
                  <CheckCircle className="ph-feature-check" />
                  <span>Dedicated account manager</span>
                </li>
                <li className="ph-pricing-feature">
                  <CheckCircle className="ph-feature-check" />
                  <span>Premium AI features</span>
                </li>
              </ul>
              
              <button className="ph-pricing-button">
                Contact sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="ph-cta-section">
        <div className="ph-cta-wrapper">
          <h2 className="ph-cta-title">Ready to grow your business?</h2>
          <p className="ph-cta-text">
            Join thousands of businesses already using BrandPromo to drive real results
          </p>
          <div className="ph-cta-actions">
            <button className="ph-cta-button ph-primary">
              Start free trial
            </button>
            <button className="ph-cta-button ph-secondary">
              Request demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="ph-footer">
        <div className="ph-footer-wrapper">
          <div className="ph-footer-grid">
            <div className="ph-footer-brand">
              <div className="ph-footer-logo-container">
                <Zap className="ph-footer-logo" />
                <span className="ph-footer-brand-text">BrandPromo</span>
              </div>
              <p className="ph-footer-text">
                The complete platform for digital advertising success.
              </p>
              <div className="ph-social-links">
                <a href="#" className="ph-social-link">
                  <svg className="ph-social-icon" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="ph-social-link">
                  <svg className="ph-social-icon" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="ph-social-link">
                  <svg className="ph-social-icon" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="ph-footer-links">
              <h4 className="ph-footer-links-title">Product</h4>
              <ul className="ph-footer-links-list">
                <li><a href="#" className="ph-footer-link">Features</a></li>
                <li><a href="#" className="ph-footer-link">Pricing</a></li>
                <li><a href="#" className="ph-footer-link">Solutions</a></li>
                <li><a href="#" className="ph-footer-link">Integrations</a></li>
              </ul>
            </div>
            
            <div className="ph-footer-links">
              <h4 className="ph-footer-links-title">Resources</h4>
              <ul className="ph-footer-links-list">
                <li><a href="#" className="ph-footer-link">Blog</a></li>
                <li><a href="#" className="ph-footer-link">Help Center</a></li>
                <li><a href="#" className="ph-footer-link">Webinars</a></li>
                <li><a href="#" className="ph-footer-link">Case Studies</a></li>
              </ul>
            </div>
            
            <div className="ph-footer-links">
              <h4 className="ph-footer-links-title">Company</h4>
              <ul className="ph-footer-links-list">
                <li><a href="#" className="ph-footer-link">About Us</a></li>
                <li><a href="#" className="ph-footer-link">Careers</a></li>
                <li><a href="#" className="ph-footer-link">Contact</a></li>
                <li><a href="#" className="ph-footer-link">Press</a></li>
              </ul>
            </div>
          </div>
          
          <div className="ph-footer-bottom">
            <p className="ph-copyright">
              © {new Date().getFullYear()} BrandPromo. All rights reserved.
            </p>
            <div className="ph-legal-links">
              <a href="#" className="ph-legal-link">Privacy Policy</a>
              <a href="#" className="ph-legal-link">Terms of Service</a>
              <a href="#" className="ph-legal-link">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default HomeMain;