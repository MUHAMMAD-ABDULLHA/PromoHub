import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNotificationSettings, saveNotificationSettings, updateLocalSettings } from '../slice/notificationSettingsSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NotifcationSettings = () => {
  const dispatch = useDispatch();
  const { settings, config, status, error } = useSelector((state) => state.notificationSettings);
  const userId = localStorage.getItem('userId') || '123e4567-e89b-12d3-a456-426614174000'; // Fallback for testing

  useEffect(() => {
    dispatch(fetchNotificationSettings(userId));
  }, [dispatch, userId]);

  const handleChannelChange = (channelId) => {
    dispatch(updateLocalSettings({ [channelId]: !settings[channelId] }));
  };

  const handleSave = async () => {
    try {
      await dispatch(saveNotificationSettings({
        email_notifications: settings.email_notifications,
        push_notifications: settings.push_notifications,
        sms_notifications: settings.sms_notifications,
      })).unwrap();
      toast.success('Settings saved! Check your email.');
    } catch (err) {
      toast.error(err.message || 'Failed to save settings');
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Notification Settings</h1>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p style={styles.error}>Error: {error}</p>}
      <div style={styles.section}>
        <h2 style={styles.subHeader}>Notification Channels</h2>
        <div style={styles.channels}>
          {config.channels.map((channel) => (
            <label key={channel.id} style={styles.label}>
              <input
                type="checkbox"
                checked={settings[channel.id.toLowerCase() + '_notifications'] || false}
                onChange={() => handleChannelChange(channel.id.toLowerCase() + '_notifications')}
                style={styles.checkbox}
              />
              {channel.label}
            </label>
          ))}
        </div>
      </div>
      <button
        onClick={handleSave}
        style={status === 'loading' ? styles.buttonDisabled : styles.button}
        disabled={status === 'loading'}
      >
        Save
      </button>
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
  section: {
    border: '1px solid #ccc',
    padding: '15px',
    marginBottom: '15px',
    borderRadius: '5px',
  },
  subHeader: {
    fontSize: '18px',
    marginBottom: '10px',
  },
  channels: {
    display: 'flex',
    gap: '15px',
  },
  label: {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
  },
  checkbox: {
    width: '16px',
    height: '16px',
  },
  button: {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  buttonDisabled: {
    backgroundColor: '#cccccc',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'not-allowed',
  },
  error: {
    color: 'red',
    marginBottom: '10px',
  },
};

export default NotifcationSettings;
