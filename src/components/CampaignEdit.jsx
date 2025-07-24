import React, { useState } from 'react';
import '../CampaignEdit.css';
const CampaignEdit = ({ campaign, onSave, onCancel }) => {
  const [form, setForm] = useState({ ...campaign });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <form className="campaign-edit" onSubmit={handleSubmit}>
      <h2 className="campaign-edit-title">Edit Campaign</h2>

      <label>Name</label>
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        required
      />

      <label>Description</label>
      <textarea
        name="description"
        value={form.description}
        onChange={handleChange}
        required
      />

      <label>Objective</label>
      <input
        name="objective"
        value={form.objective}
        onChange={handleChange}
      />

      <label>Overall Budget</label>
      <input
        type="number"
        name="overallBudget"
        value={form.overallBudget}
        onChange={handleChange}
      />

      <label>Daily Budget</label>
      <input
        type="number"
        name="dailyBudget"
        value={form.dailyBudget}
        onChange={handleChange}
      />

      <label>Start Date</label>
      <input
        type="date"
        name="startDate"
        value={form.startDate}
        onChange={handleChange}
      />

      <label>End Date</label>
      <input
        type="date"
        name="endDate"
        value={form.endDate}
        onChange={handleChange}
      />

      <div className="campaign-edit-buttons">
        <button type="submit" className="btn btn-save">Save</button>
        <button type="button" className="btn" onClick={onCancel}>Cancel</button>
      </div>
    </form>
  );
};

export default CampaignEdit;
