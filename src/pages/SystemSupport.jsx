import React from 'react';
import '../SystemSupport.css';

const systemHealthData = {
  uptime: "99.97%",
  cpuUsage: "56%",
  memoryUsage: "68%",
  diskUsage: "75%",
  networkUsage: "120 Mbps",
  alerts: [
    {
      type: "High CPU Usage",
      severity: "Medium",
      timestamp: "2025-04-20T16:11:00Z"
    },
    {
      type: "Memory Spike",
      severity: "High",
      timestamp: "2025-04-18T09:32:00Z"
    }
  ],
  downtimeLogs: [
    {
      date: "2025-04-10",
      duration: "12 mins",
      reason: "Server patch deployment"
    },
    {
      date: "2025-03-27",
      duration: "8 mins",
      reason: "Unexpected memory overflow"
    }
  ],
  errors: [
    {
      id: "ERR001",
      message: "Database connection timeout.",
      component: "CampaignService",
      timestamp: "2025-04-21T16:45:00Z"
    },
    {
      id: "ERR002",
      message: "Null reference in UserService.",
      component: "UserService",
      timestamp: "2025-04-21T15:00:00Z"
    }
  ]
};

const SystemSupport = () => {
  const { uptime, cpuUsage, memoryUsage, diskUsage, networkUsage, alerts, downtimeLogs, errors } = systemHealthData;

  return (
    <div className="system-support">
      <h1>System Support & Health Monitoring</h1>

      {/* Real-Time Monitoring */}
      <div className="stats">
        <div className="card">Uptime: {uptime}</div>
        <div className="card">CPU Usage: {cpuUsage}</div>
        <div className="card">Memory Usage: {memoryUsage}</div>
        <div className="card">Disk Usage: {diskUsage}</div>
        <div className="card">Network: {networkUsage}</div>
      </div>

      {/* Alerts */}
      <div className="section">
        <h2>Recent Alerts</h2>
        <ul className="alert-list">
          {alerts.map((alert, i) => (
            <li key={i} className={`alert ${alert.severity.toLowerCase()}`}>
              <strong>{alert.type}</strong> - {alert.severity} Severity
              <div className="timestamp">{new Date(alert.timestamp).toLocaleString()}</div>
            </li>
          ))}
        </ul>
      </div>

      {/* Downtime Log */}
      <div className="section">
        <h2>Downtime Log</h2>
        <table className="downtime-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Duration</th>
              <th>Reason</th>
            </tr>
          </thead>
          <tbody>
            {downtimeLogs.map((log, i) => (
              <tr key={i}>
                <td>{log.date}</td>
                <td>{log.duration}</td>
                <td>{log.reason}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Error Tracking */}
      <div className="section">
        <h2>Error Diagnostics</h2>
        <table className="error-table">
          <thead>
            <tr>
              <th>Error ID</th>
              <th>Message</th>
              <th>Component</th>
              <th>Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {errors.map((error, i) => (
              <tr key={i}>
                <td>{error.id}</td>
                <td>{error.message}</td>
                <td>{error.component}</td>
                <td>{new Date(error.timestamp).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SystemSupport;
