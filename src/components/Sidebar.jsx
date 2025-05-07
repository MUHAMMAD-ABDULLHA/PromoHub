import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../Sidebar.css";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [userRole, setUserRole] = useState("brandAdmin"); // Default role for testing

  useEffect(() => {
    //const role = localStorage.getItem("userRole");
    setUserRole("brandAdmin"); // Default to brandAdmin for testing
  }, []);

  const openSidebar = () => setIsOpen(true);
  const closeSidebar = () => setIsOpen(false);

  // Define navigation items based on user role
  let navItems = [];
  if (userRole === "brandAdmin") {
    navItems = [
      { path: "/", label: "Home" },
      { path: "/campaign-creation", label: "Campaign Builder" },
      { path: "/ad-management", label: "Ad Management" },
      { path: "/analytics", label: "Analytics & Insights" },
      { path: "/billing", label: "Billing & Subscription" },
      { path: "/notifications", label: "Notifications" },
      { path: "/ai-audience-segmentation", label: "AI Audience Segmentation" },
      { path: "/ar-integration", label: "AR Integration" },
      { path: "/campaign-reward", label: "Campaign Reward System" },
      { path: "/collaborative-editing", label: "Collaborative Editing" },
      { path: "/realtime-ad-bidding", label: "Real-Time Ad Bidding" },
      { path: "/voice-activated-campaign", label: "Voice-Activated Campaign" },
      { path: "/ai-ad-customization", label: "AI Ad Customization" },
      { path: "/auto-ad-content", label: "Automatic Ad Content" },
      { path: "/location-based-ad-delivery", label: "Location-Based Ad Delivery" },
      { path: "/consistent-brand-messaging", label: "Consistent Brand Messaging" },
      { path: "/unified-ad-dashboard", label: "Unified Ad Dashboard" },
      { path: "/resource-campaign-system", label: "Resource Campaign / System" },
      { path: "/social-media", label: "Social Media"},
      { path: "/Login", label: "Sign Out"}
    ];
  } else if (userRole === "influencer" || userRole === "endUser") {
    navItems = [
      { path: "/", label: "Home" },
      { path: "/campaign-creation", label: "Campaigns" },
      { path: "/social-media", label: "Social Media Integration" },
      { path: "/analytics", label: "Analytics & Insights" },
      { path: "/Login", label: "Sign Out"}

    ];
  } else if (userRole === "administrator") {
    navItems = [
      { path: "/", label: "Home" },
      { path: "/administrator-dashboard", label: "Administrator Dashboard" },
      { path: "/user-management", label: "User Management" },
      { path: "/system-support", label: "System Support" },
      { path: "/customer-support", label: "Customer Support" },
      { path: "/admin-campaign-management", label: "Campaign Management" },
      { path: "/admin-platform-setting", label: "Platform Settings" },
      { path: "/Login", label: "Sign Out"}

    ];
  } else {
    navItems = [
      { path: "/", label: "Home" },
      { path: "/login", label: "Login" },
      { path: "/registration", label: "Register" }
    ];
  }

  return (
    <>
      {/* Open button (hamburger) always visible when sidebar is closed */}
      {!isOpen && (
        <button className="sidebar-open-button" onClick={openSidebar}>
          &#9776;
        </button>
      )}
      <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
        {/* Close button inside sidebar at top right */}
        <button className="sidebar-close-button" onClick={closeSidebar}>
          &times;
        </button>
        <nav>
          <ul>
            {navItems.map((item, idx) => (
              <li key={idx}>
                <NavLink to={item.path} end onClick={closeSidebar}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Sidebar;
