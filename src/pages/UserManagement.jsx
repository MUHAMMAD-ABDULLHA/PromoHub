import React from 'react';
import '../UserManagement.css';

const pendingRegistrations = [
  {
    id: "pending-1",
    name: "Nadia Ahmed",
    email: "nadia.ahmed@example.com",
    requestedRole: "brand",
    requestedAt: "2025-04-23T11:20:00Z"
  },
  {
    id: "pending-2",
    name: "Omar Siddiqui",
    email: "omar.s@example.com",
    requestedRole: "influencer",
    requestedAt: "2025-04-23T12:05:00Z"
  }
];

const users = [
  {
    id: "user-1",
    name: "Alex Johnson",
    email: "alex@example.com",
    location: "New York, USA",
    role: "influencer",
    status: "active",
    lastLogin: "2025-04-22T09:30:00Z"
  },
  {
    id: "user-2",
    name: "Sara Khan",
    email: "sara@example.com",
    location: "Lahore, Pakistan",
    role: "brand",
    status: "deactivated",
    lastLogin: "2025-04-20T14:12:00Z"
  },
  {
    id: "user-3",
    name: "Miguel López",
    email: "miguel@example.com",
    location: "Madrid, Spain",
    role: "user",
    status: "active",
    lastLogin: "2025-04-21T18:45:00Z"
  }
];

const roles = ["admin", "brand", "influencer", "user"];
const statuses = ["active", "deactivated", "pending"];

const UserManagement = () => {
  return (
    <div className="um-container">
      <header className="um-header">
        <h1 className="um-header__title">User Management</h1>
        <div className="um-controls">
          <input type="text" placeholder="Search by name, email..." className="um-search" />
          <select className="um-filter">
            <option value="">All Roles</option>
            {roles.map(r => <option key={r}>{r}</option>)}
          </select>
          <select className="um-filter">
            <option value="">All Statuses</option>
            {statuses.map(s => <option key={s}>{s}</option>)}
          </select>
          <button className="um-add-btn">+ Add User</button>
        </div>
        <div className="um-bulk-actions">
          <select>
            <option>Bulk Actions</option>
            <option>Deactivate Selected</option>
            <option>Activate Selected</option>
            <option>Change Role</option>
            <option>Send Notification</option>
          </select>
          <button>Apply</button>
        </div>
      </header>

      {/* ✅ PENDING REGISTRATIONS */}
      <div className="um-pending">
        <div className="um-pending__header">Pending Registrations</div>
        <table className="um-pending__table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Requested Role</th>
              <th>Requested At</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {pendingRegistrations.map(p => (
              <tr key={p.id}>
                <td>{p.name}</td>
                <td>{p.email}</td>
                <td>{p.requestedRole}</td>
                <td>{new Date(p.requestedAt).toLocaleString()}</td>
                <td className="um-actions">
                  <button title="Approve">✔️</button>
                  <button title="Reject">❌</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ✅ ACTIVE USERS */}
      <table className="um-table">
        <thead>
          <tr>
            <th><input type="checkbox" /></th>
            <th>Name</th>
            <th>Email</th>
            <th>Location</th>
            <th>Role</th>
            <th>Status</th>
            <th>Last Login</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td><input type="checkbox" /></td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.location}</td>
              <td>
                <select defaultValue={user.role}>
                  {roles.map(r => <option key={r}>{r}</option>)}
                </select>
              </td>
              <td><span className={`badge ${user.status}`}>{user.status}</span></td>
              <td>{new Date(user.lastLogin).toLocaleString()}</td>
              <td className="um-actions">
                <button title="Reset Password">🔒</button>
                <button title="View Logs">📋</button>
                <button title="Deactivate">{user.status === "active" ? "🚫" : "✔️"}</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <footer className="um-pagination">
        <button>« Prev</button>
        <span>Page 1 of 10</span>
        <button>Next »</button>
      </footer>
    </div>
  );
};

export default UserManagement;
