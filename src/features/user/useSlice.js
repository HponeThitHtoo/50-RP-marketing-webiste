import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

const initialState = {
  isGetLoading: true,
  isLoading: true,
  existedUser: null,
  user: null,
};

export const getUser = createAsyncThunk(
  'user/getUser',
  async (user, thunkAPI) => {
    try {
      const resp = await axios.get(
        `http://localhost:5000/users?email=${user.email}`
      );
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong!');
    }
  }
);

export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (user, thunkAPI) => {
    try {
      let resp;
      resp = await thunkAPI.dispatch(getUser(user));
      if (resp.payload.length === 1) {
        toast.warn('Email already existed!');
        return resp.payload;
      }
      resp = await axios.post(`http://localhost:5000/users`, user);
      toast.success('User account successfully created');
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong!');
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state) => {
        state.isGetLoading = true;
      })
      .addCase(getUser.fulfilled, (state, { payload }) => {
        state.existedUser = payload;
        state.isGetLoading = false;
      })
      .addCase(getUser.rejected, (state, action) => {
        console.log(action);
        state.isGetLoading = false;
      })
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoading = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        console.log(action);
        state.isLoading = false;
      });
  },
});

export default userSlice.reducer;
