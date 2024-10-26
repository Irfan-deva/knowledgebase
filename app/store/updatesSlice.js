import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchUpdates = createAsyncThunk('updates/fetch', async () => {
  const response = await axios.get('https://irfandeva-student.stackstaging.com/api/services')
  return response.data
})
const upatesSlice = createSlice({
  name: 'updates',
  initialState: {
    updates: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUpdates.pending, (state, action) => {
      state.status = 'loading'
    })
      .addCase(fetchUpdates.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message

      })
      .addCase(fetchUpdates.fulfilled, (state, action) => {
        state.status = 'success',
          state.updates = action.payload
      })
  }
})
// Selector to get a bookmark by ID
export const selectUpdateById = (services, id) =>
  services.find(service => service.id == id);
export default upatesSlice.reducer