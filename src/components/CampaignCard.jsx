// components/CampaignList.js
import React, { useEffect, useState } from "react";
import CampaignCard from "./CampaignCard";
import { useNavigate } from "react-router-dom";

function CampaignList() {
  const [campaigns, setCampaigns] = useState([]);
  const navigate = useNavigate();

  const fetchCampaigns = async () => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("user_id");

    if (!token || !userId) {
      alert("Not authenticated");
      return;
    }

    try {
      const response = await fetch(`http://localhost:8080/brand/campaigns/user/${userId}`, {
        constraint: "cors",
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!response.ok) throw new Error("Failed to fetch campaigns");
      const data = await response.json();
      setCampaigns(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchCampaigns();
  }, []);

  const handleView = (campaign) => {
    navigate(`/campaigns/${campaign.id}`);
  };

  const handleEdit = (campaign) => {
    navigate(`/campaigns/edit/${campaign.id}`);
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");

    try {
      const res = await fetch(`http://localhost:8080/brand/campaigns/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.ok) throw new Error("Delete failed");
      setCampaigns((prev) => prev.filter((c) => c.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="campaign-list">
      {campaigns.length === 0 ? (
        <p>No campaigns found.</p>
      ) : (
        campaigns.map((c) => (
          <CampaignCard
            key={c.id}
            campaign={c}
            onView={handleView}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))
      )}
    </div>
  );
}

export default CampaignList;
