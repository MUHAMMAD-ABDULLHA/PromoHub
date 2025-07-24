import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchNotifications = createAsyncThunk(
  'notifications/fetch',
  async (_, { rejectWithValue }) => {
    try {
      const userId = localStorage.getItem('user_id');
      if (!userId) {
        throw new Error('User ID not found in localStorage');
      }
      const response = await axios.get(`http://localhost:8080/notifications?user_id=${userId}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message || 'Failed to fetch notifications');
    }
  }
);

export const saveNotifications = createAsyncThunk(
  'notifications/save',
  async (notifications, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:8080/notifications', notifications);
      console.log(response)
      return notifications; // Return the saved notifications to update state
    } catch (error) {
      return rejectWithValue(error.message || 'Failed to save notifications');
    }
    
  }
);

export const updateNotificationStatus = createAsyncThunk(
  'notifications/updateStatus',
  async ({ id, is_read }, { rejectWithValue }) => {
    try {
      await axios.post('http://localhost:8080/notifications/status', { id, is_read });
      return { id, is_read };
    } catch (error) {
      return rejectWithValue(error.message || 'Failed to update notification status');
    }
  }
);

const notificationSlice = createSlice({
  name: 'notifications',
  initialState: {
    notifications: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotifications.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchNotifications.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.notifications = action.payload;
      })
      .addCase(fetchNotifications.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(saveNotifications.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(saveNotifications.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.notifications = [...state.notifications, ...action.payload];
      })
      .addCase(saveNotifications.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(updateNotificationStatus.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateNotificationStatus.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const { id, is_read } = action.payload;
        const notification = state.notifications.find((n) => n.id === id);
        if (notification) {
          notification.is_read = is_read;
        }
      })
      .addCase(updateNotificationStatus.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default notificationSlice.reducer;
