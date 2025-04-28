// redux/slices/userSlice.ts
import { createSlice } from '@reduxjs/toolkit';
import { getUserListThunk } from './UserThunk';
import { User } from '../../models/User';

interface UserState {
  users: User[];
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getUserListThunk.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUserListThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(getUserListThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to fetch users';
      });
  },
});

export default userSlice.reducer;
