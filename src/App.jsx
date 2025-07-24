import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { Bounce} from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";

// Main pages
import Home from "./pages/Home";
import MainHome from "./pages/HomeMain";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import ForgetPassword from "./pages/ForgetPassword";

// Admin & User Management
import AdministratorDashboard from "./pages/dashboard/AdministratorDashboard";
import UserManagement from "./pages/UserManagement";
import AdminCampaignManagement from "./pages/AdminCampaignManagement";
import AdminPlatformSetting from "./pages/AdminPlatformSetting";
import ManageAccount from "./pages/ManageAccount";
import DashboardHome from "./components/DashboardHome";

// Campaign & Ad Features
import CampaignCreation from "./pages/CampaignCreation";
import AdManagement from "./pages/AdManagement";
import CampaignCard from "./components/CampaignCard";
import CollaborativeMarketing from "./pages/CollaborativeMarketing";
import Analytics from "./pages/Analytics";
import Billing from "./pages/Billing";
import Notifications from "./pages/Notifications";
import SystemSupport from "./pages/SystemSupport";
import CustomerSupport from "./pages/CustomerSupport";
import SocialMediaIntegration from "./pages/SocialMediaIntegration";
import CampaignManagement from "./pages/CampaignManagement";
import CampaignDetail from "./components/CampaignDetail";
import CampaignList from "./components/CampaignCard";
import CampaignEdit from "./components/CampaignEdit";
import AdList from "./components/AdList";
import AdForm from "./components/AdForm";
import AdDetails from "./components/AdDetail";
// Brand Features
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
import ResourceCampaignSystem from "./pages/brandFeatures/ResourceCampaignSystem";

// Dashboards and Collaboration
import BrandAdminDashboard from "./pages/dashboard/BrandAdminDashboard";
import Collaboration from "./pages/Collaboration";
import Influencer from "./pages/Influencer";
import SocialMedia from "./components/SocialMedia";

// Settings
import NotifcationSettings from "./components/Settings";

// Firebase Notification
import { messaging } from "./firebase";
import { getToken, onMessage } from "firebase/messaging";

const vapidKey = "BEYiPIycgKZWn_cvRN6ISEAKcYrvBoYD8_Gsxt2pUBapuupT7th4DYxtIk5KCiY4UVRWqH7pXQCZXB4hn2DHNhA"; // Your VAPID key

const requestPermission = async () => {
  try {
    const token = await getToken(messaging, { vapidKey });
    if (token) {
      console.log("✅ FCM Token:", token);
      // TODO: Send token to Go backend and store for push notifications
    } else {
      console.warn("⚠️ No token received.");
    }
  } catch (error) {
    console.error("❌ Error getting FCM token:", error);
  }
};

function App() {
  useEffect(() => {
    requestPermission();

    // Foreground notifications
    onMessage(messaging, (payload) => {
      console.log("📩 Foreground notification received:", payload);
      // Optional: Show a toast or UI alert here
    });
  }, []);

  return (
    <Layout>
      <Routes>
        {/* Authentication & Home */}
        <Route path="/" element={<MainHome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/Forget-Password" element={<ForgetPassword />} />
        <Route path="/Home" element={<Home />} />

        {/* Admin & User */}
        <Route path="/administrator-dashboard" element={<AdministratorDashboard />} />
        <Route path="/user-management" element={<UserManagement />} />
        <Route path="/admin-campaign-management" element={<AdminCampaignManagement />} />
        <Route path="/admin-platform-setting" element={<AdminPlatformSetting />} />
        <Route path="/manage-account" element={<ManageAccount />} />
        <Route path="/dashboard-home" element={<DashboardHome />} />

        {/* Campaigns & Ads */}
        <Route path="/campaign-creation" element={<CampaignCreation />} />
        <Route path="/ad-management" element={<AdManagement />} />
        <Route path="/campaigns" element={<CampaignCard />} />
        <Route path="/campaigns/:id" element={<CampaignCard />} />
        <Route path="/campaigns/edit/:id" element={<CampaignCard />} />
        <Route path="/collaborative-marketing" element={<CollaborativeMarketing />} />
        <Route path="/campaign-management" element={<CampaignManagement />} />
        <Route path="/campaign-detail/:id" element={<CampaignDetail />} />
        <Route path="/campaign-list" element={<CampaignList />} />
        <Route path="/campaign-edit/:id" element={<CampaignEdit />} />
        <Route path="/ad-list" element={<AdList />} />
        <Route path="/ad-form" element={<AdForm />} />
        <Route path="/ad-details/:id" element={<AdDetails />} />
        {/* System Modules */}
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/billing" element={<Billing />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/system-support" element={<SystemSupport />} />
        <Route path="/customer-support" element={<CustomerSupport />} />
        <Route path="/social-media-integration" element={<SocialMediaIntegration />} />

        {/* Brand Features */}
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
        <Route path="/resource-campaign-system" element={<ResourceCampaignSystem />} />
        <Route path="/unified-ad-dashboard" element={<BrandAdminDashboard />} />

        {/* Extras */}
        <Route path="/collaboration" element={<Collaboration />} />
        <Route path="/influencer" element={<Influencer />} />
        <Route path="/social-media" element={<SocialMedia />} />

        {/* Settings */}
        <Route path="/settings" element={<NotifcationSettings />} />
      </Routes>
      <ToastContainer
      position="bottom-left"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      transition={Bounce}
      />
    </Layout>
  );
}

export default App;
