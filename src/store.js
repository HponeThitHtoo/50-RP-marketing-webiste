/* eslint-disable import/prefer-default-export */
import { configureStore } from '@reduxjs/toolkit';
import featureReducer from './features/feature/featureSlice';
import userReducer from './features/user/useSlice';
import contactReducer from './features/contact/contactSlice';

export const store = configureStore({
  reducer: {
    feature: featureReducer,
    user: userReducer,
    contact: contactReducer,
  },
});
