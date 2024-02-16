import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = `http://localhost:5000/features`;

const initialState = {
  features: [],
  feature: {},
  isFeaturesLoading: true,
  isFeatureLoading: true,
};

export const getFeatures = createAsyncThunk(
  'feature/getFeatures',
  async (_, thunkAPI) => {
    try {
      const resp = await axios(url);

      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong!');
    }
  }
);

export const getFeature = createAsyncThunk(
  'feature/getFeature',
  async ({ featureId }, thunkAPI) => {
    // console.log(id);
    try {
      const resp = await axios.get(`${url}/${featureId}`);

      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong!');
    }
  }
);

const featureSlice = createSlice({
  name: 'feature',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFeatures.pending, (state) => {
        state.isFeaturesLoading = true;
      })
      .addCase(getFeatures.fulfilled, (state, action) => {
        state.isFeaturesLoading = false;
        state.features = action.payload;
      })
      .addCase(getFeatures.rejected, (state, action) => {
        console.log(action);
        state.isFeaturesLoading = false;
      })
      .addCase(getFeature.pending, (state) => {
        state.isFeatureLoading = true;
      })
      .addCase(getFeature.fulfilled, (state, action) => {
        state.isFeatureLoading = false;
        state.feature = action.payload;
      })
      .addCase(getFeature.rejected, (state, action) => {
        console.log(action);
        state.isFeatureLoading = false;
      });
  },
});

export default featureSlice.reducer;
