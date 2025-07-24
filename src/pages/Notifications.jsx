import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNotifications, updateNotificationStatus } from '../slice/notificationSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Notifications = () => {
  const dispatch = useDispatch();
  const { notifications, status, error } = useSelector((state) => state.notifications);
  const userId = localStorage.getItem('userId') || '123e4567-e89b-12d3-a456-426614174000'; // Fallback for testing

  useEffect(() => {
    dispatch(fetchNotifications());
  }, [dispatch]);

  const handleToggleReadStatus = async (id, is_read) => {
    try {
      await dispatch(updateNotificationStatus({ id, is_read: !is_read })).unwrap();
      toast.success(`Notification marked as ${is_read ? 'unread' : 'read'}`);
    } catch (err) {
      toast.error(err.message || 'Failed to update notification status');
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Notifications</h1>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p style={styles.error}>Error: {error}</p>}
      {notifications.length === 0 && status !== 'loading' && (
        <p>No notifications available</p>
      )}
      <div style={styles.notificationList}>
        {notifications.map((notification) => (
          <div key={notification.id} style={styles.notification}>
            <h3>{notification.is_read}</h3>
            <h3 style={styles.title}>{notification.title}</h3>
            <p style={styles.message}>{notification.message}</p>
            <p style={styles.timestamp}>
              {new Date(notification.timestamp).toLocaleString()}
            </p>
            <button
              onClick={() => handleToggleReadStatus(notification.id, notification.is_read)}
              
              style={notification.is_read ? styles.unreadButton : styles.readButton}
            >
              Mark as {notification.is_read ? 'Unread' : 'Read'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '600px',
    margin: '20px auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  notificationList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  notification: {
    border: '1px solid #ccc',
    padding: '15px',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
    color: "black",
  },
  title: {
    fontSize: '18px',
    marginBottom: '10px',
  },
  message: {
    marginBottom: '10px',
  },
  timestamp: {
    fontSize: '14px',
    color: '#666',
    marginBottom: '10px',
  },
  readButton: {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '8px 16px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  unreadButton: {
    backgroundColor: '#6c757d',
    color: 'white',
    padding: '8px 16px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    marginBottom: '10px',
  },
};

export default Notifications;
