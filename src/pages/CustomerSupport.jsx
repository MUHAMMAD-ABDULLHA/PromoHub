import React, { useState } from 'react';
import '../CustomerSupport.css';
export const faqList = [
  {
    id: 1,
    question: "How do I reset my password?",
    answer: "Go to Settings > Security > Reset Password and follow the instructions.",
    category: "Account",
    status: "Published"
  },
  {
    id: 2,
    question: "What payment methods are supported?",
    answer: "We support JazzCash, Stripe, and PayPal for subscription payments.",
    category: "Billing",
    status: "Draft"
  }
];

export const resourceList = [
  {
    id: 1,
    title: "Getting Started with Campaigns",
    summary: "Step-by-step guide to launch your first ad campaign.",
    url: "https://help.example.com/campaigns/getting-started",
    status: "Published"
  },
  {
    id: 2,
    title: "Platform Settings Overview",
    summary: "Learn how to configure platform-wide settings and features.",
    url: "https://help.example.com/platform/settings-overview",
    status: "Published"
  }
];

export const inquiryList = [
  {
    id: 1,
    user: "alice.w",
    subject: "Unable to upload AR assets",
    date: "2025-04-22T10:15:00Z",
    status: "Open"
  },
  {
    id: 2,
    user: "bob.k",
    subject: "Subscription downgrade issue",
    date: "2025-04-21T14:50:00Z",
    status: "Pending"
  }
];



const CustomerSupport = () => {
  
  const [faqs, setFaqs] = useState(faqList);
  const [resources, setResources] = useState(resourceList);
  const [inquiries, setInquiries] = useState(inquiryList);
  const [searchTerm, setSearchTerm] = useState('');
  const filteredInquiries = inquiries.filter(i =>
    i.user.includes(searchTerm) || i.subject.includes(searchTerm)
  );

  return (
    <div className="admin-faq">
      <h1>FAQ & Self-Help Management</h1>

      {/* FAQ Section */}
      <section className="section">
        <h2>Manage FAQs</h2>
        <button className="btn-add">+ Add FAQ</button>
        <table className="table">
          <thead>
            <tr>
              <th>Question</th><th>Category</th><th>Status</th><th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {faqs.map(f => (
              <tr key={f.id}>
                <td title={f.answer}>{f.question}</td>
                <td>{f.category}</td>
                <td>{f.status}</td>
                <td>
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Resources Section */}
      <section className="section">
        <h2>Self-Help Resources</h2>
        <button className="btn-add">+ Add Resource</button>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th><th>URL</th><th>Status</th><th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {resources.map(r => (
              <tr key={r.id}>
                <td title={r.summary}>{r.title}</td>
                <td><a href={r.url} target="_blank" rel="noreferrer">View</a></td>
                <td>{r.status}</td>
                <td>
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Inquiry Section */}
      <section className="section">
        <h2>User Inquiries</h2>
        <input
          type="text"
          placeholder="Search inquiries..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <table className="table">
          <thead>
            <tr>
              <th>User</th><th>Subject</th><th>Date</th><th>Status</th><th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredInquiries.map(i => (
              <tr key={i.id}>
                <td>{i.user}</td>
                <td>{i.subject}</td>
                <td>{new Date(i.date).toLocaleString()}</td>
                <td>{i.status}</td>
                <td><button>Respond</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default CustomerSupport;
