import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

const url = `http://localhost:5000/contacts`;

const initialState = {
  isLoading: true,
  contact: null,
};

export const sendContact = createAsyncThunk(
  'contact/sendContact',
  async (contact, thunkAPI) => {
    try {
      const resp = await axios.post(url, contact);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong!');
    }
  }
);

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendContact.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(sendContact.fulfilled, (state, { payload }) => {
        state.contact = payload;
        state.isLoading = false;
        toast.success('Your message is sent successfully');
      })
      .addCase(sendContact.rejected, (state, action) => {
        console.log(action);
        state.isLoading = false;
      });
  },
});

export default contactSlice.reducer;
