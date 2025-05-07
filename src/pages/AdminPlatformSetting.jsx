import React from 'react';
import '../AdminPlatformSetting.css';

const settings = {
  features: [
    { name: "AR Ads", enabled: true },
    { name: "Voice Commands", enabled: false },
    { name: "Campaign Rewards", enabled: true },
    { name: "Policy Enforcement Mode (AI-Only)", enabled: true },
    { name: "Advertiser Transparency Links", enabled: false }
  ],
  paymentMethods: ["JazzCash", "Stripe", "PayPal"],
  currentPayment: "JazzCash",
  invoicing: { monthlyInvoicing: false, applyCreditLine: false },
  apiKeys: [
    { id: "key1", name: "Frontend API", value: "••••••••", created: "2025-01-15" },
    { id: "key2", name: "Analytics Webhook", value: "••••••••", created: "2025-03-01" }
  ],
  retentionOptions: ["30 days", "90 days", "1 year"],
  dataRetention: "90 days",
  moderation: {
    queue: [
      { id: "fc001", user: "randomUser99", type: "Post", reason: "Inappropriate language" }
    ],
    autoReview: true
  },
  notifications: {
    email: true,
    slackWebhook: ""
  }
};

const AdminPlatformSetting = () => (
  <div className="aps-container">
    <aside className="aps-nav">
      <h2>Tools & Settings</h2>
      <ul>
        <li>Setup</li>
        <li>Billing</li>
        <li>Moderation</li>
        <li>Integrations</li>
      </ul>
    </aside>

    <main className="aps-main">
      <h1>Platform Settings & Moderation</h1>

      {/* Feature Toggles */}
      <section>
        <h2>Feature Toggles</h2>
        <ul className="toggles">
          {settings.features.map((f, i) => (
            <li key={i}>
              <label>
                <input type="checkbox" defaultChecked={f.enabled} />
                {f.name}
                <span className="tooltip">?</span>
              </label>
            </li>
          ))}
        </ul>
      </section>

      {/* Payment & Billing */}
      <section>
        <h2>Payment & Billing</h2>
        <div className="payment-group">
          <label>
            Default Method:
            <select defaultValue={settings.currentPayment}>
              {settings.paymentMethods.map(m => <option key={m}>{m}</option>)}
            </select>
          </label>
          <label>
            <input type="checkbox" defaultChecked={settings.invoicing.monthlyInvoicing} />
            Enable Monthly Invoicing
          </label>
          <button className="btn" disabled={!settings.invoicing.monthlyInvoicing}>
            Apply for Credit Line
          </button>
        </div>
      </section>

      {/* API Keys */}
      <section>
        <h2>API & Webhooks</h2>
        <table className="api-table">
          <thead>
            <tr><th>Name</th><th>Key</th><th>Created</th><th>Actions</th></tr>
          </thead>
          <tbody>
            {settings.apiKeys.map(k => (
              <tr key={k.id}>
                <td>{k.name}</td>
                <td>{k.value}</td>
                <td>{k.created}</td>
                <td>
                  <button>Copy</button>
                  <button>Regenerate</button>
                  <button>Revoke</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Data Retention */}
      <section>
        <h2>Data Retention</h2>
        <label>
          Retain logs for:
          <select defaultValue={settings.dataRetention}>
            {settings.retentionOptions.map(r => <option key={r}>{r}</option>)}
          </select>
        </label>
        <label>
          <input type="checkbox" />
          Enable GDPR Compliance Mode
        </label>
      </section>

      {/* Moderation Queue */}
      <section>
        <h2>Flagged Content</h2>
        <label>
          <input type="checkbox" defaultChecked={settings.moderation.autoReview} />
          Automated Review
        </label>
        <button className="bulk-btn">Remove All</button>
        <button className="bulk-btn">Escalate All</button>

        <table className="flagged-table">
          <thead>
            <tr><th>User</th><th>Type</th><th>Reason</th><th>Actions</th></tr>
          </thead>
          <tbody>
            {settings.moderation.queue.map(f => (
              <tr key={f.id}>
                <td>{f.user}</td>
                <td>{f.type}</td>
                <td>{f.reason}</td>
                <td>
                  <button>Preview</button>
                  <button>Remove</button>
                  <button>Escalate</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Notifications */}
      <section>
        <h2>Notification Preferences</h2>
        <label>
          <input type="checkbox" defaultChecked={settings.notifications.email} />
          Email Alerts
        </label>
        <label>
          Slack Webhook URL:
          <input type="text" defaultValue={settings.notifications.slackWebhook} placeholder="https://hooks.slack.com/…" />
        </label>
      </section>
    </main>
  </div>
);

export default AdminPlatformSetting;
