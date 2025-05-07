import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import UserManagement from "./pages/UserManagement";
import CampaignCreation from "./pages/CampaignCreation";
import AdManagement from "./pages/AdManagement";
import Analytics from "./pages/Analytics";
import SystemSupport from "./pages/SystemSupport";
import CustomerSupport from "./pages/CustomerSupport";
import Billing from "./pages/Billing";
import Notifications from "./pages/Notifications";
import CollaborativeMarketing from "./pages/CollaborativeMarketing";
import SocialMediaIntegration from "./pages/SocialMediaIntegration";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import MainHome from "./pages/HomeMain";
import AdministratorDashboard from "./pages/dashboard/AdministratorDashboard";
import AdminCampaignManagement from "./pages/AdminCampaignManagement";
import AdminPlatformSetting from "./pages/AdminPlatformSetting";
// Brand-Specific Feature Routes
import AiAudienceSegmentation from "./pages/brandFeatures/AiAudienceSegmentation";
import AugmentedRealityIntegration from "./pages/brandFeatures/AugmentedRealityIntegration";
import CampaignRewardSystem from "./pages/brandFeatures/CampaignRewardSystem";
import CollaborativeEditing from "./pages/brandFeatures/CollaborativeEditing";
import RealTimeAdBidding from "./pages/brandFeatures/RealTimeAdBidding";
import VoiceActivatedCampaign from "./pages/brandFeatures/VoiceActivatedCampaign";
import AiAdCustomization from "./pages/brandFeatures/AiAdCustomization";
import AutomaticAdContentAdaptation from "./pages/brandFeatures/AutomaticAdContentAdaptation";
import LocationBasedAdDelivery from "./pages/brandFeatures/LocationBasedAdDelivery";
import ConsistentBrandMessaging from "./pages/brandFeatures/ConsistentBrandMessaging";
import UnifiedAdDashboard from "./pages/brandFeatures/UnifiedAdDashboard";
import ResourceCampaignSystem from "./pages/brandFeatures/ResourceCampaignSystem";
import SocialMedia from "./components/SocialMedia";
import "./App.css";

function App() {
  return (
    <Layout>
      <Routes>
        {/* Default route now shows Login */}
        <Route path="/" element={<MainHome/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/campaign-creation" element={<CampaignCreation />} />
        <Route path="/ad-management" element={<AdManagement />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/system-support" element={<SystemSupport />} />
        <Route path="/customer-support" element={<CustomerSupport />} />
        <Route path="/billing" element={<Billing />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/collaborative-marketing" element={<CollaborativeMarketing />} />
        <Route path="/social-media-integration" element={<SocialMediaIntegration />} />
        <Route path="/administrator-dashboard" element={<AdministratorDashboard />} />
        <Route path="/user-management" element={<UserManagement />} />
        <Route path="/admin-campaign-management" element={<AdminCampaignManagement />} />
        <Route path="/admin-platform-setting" element={<AdminPlatformSetting />} />
        {/* Brand-Specific Feature Routes */}
        <Route path="/social-media" element={<SocialMedia/>}/>
        <Route path="/ai-audience-segmentation" element={<AiAudienceSegmentation />} />
        <Route path="/ar-integration" element={<AugmentedRealityIntegration />} />
        <Route path="/campaign-reward" element={<CampaignRewardSystem />} />
        <Route path="/collaborative-editing" element={<CollaborativeEditing />} />
        <Route path="/realtime-ad-bidding" element={<RealTimeAdBidding />} />
        <Route path="/voice-activated-campaign" element={<VoiceActivatedCampaign />} />
        <Route path="/ai-ad-customization" element={<AiAdCustomization />} />
        <Route path="/auto-ad-content" element={<AutomaticAdContentAdaptation />} />
        <Route path="/location-based-ad-delivery" element={<LocationBasedAdDelivery />} />
        <Route path="/consistent-brand-messaging" element={<ConsistentBrandMessaging />} />
        <Route path="/unified-ad-dashboard" element={<UnifiedAdDashboard />} />
        <Route path="/resource-campaign-system" element={<ResourceCampaignSystem />} />
      </Routes>
    </Layout>
  );
}

export default App;
