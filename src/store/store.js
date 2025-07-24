// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import campaignReducer from '../slice/campaignSlice.js';
import notificationSettingsReducer from '../slice/notificationSettingsSlice.js';
import notificationReducer from '../slice/NotificationSlice.js';
import adReducer from '../slice/adSlice.js'; // Ensure adReducer is imported from the correct file

export const store = configureStore({
  reducer: {
    campaigns: campaignReducer,
    notificationSettings: notificationSettingsReducer,
    notifications: notificationReducer,
    ads: adReducer, // Ensure adReducer is imported from the correct file
  },
});