import { createSlice } from '@reduxjs/toolkit';
import { getBlogListThunk } from './BlogThunk';
import { Blog } from '../../models/Blog';

interface BlogState {
  blogs: Blog[];
  loading: boolean;
  error: string | null;
}

const initialState: BlogState = {
  blogs: [],
  loading: false,
  error: null,
};

const blogSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBlogListThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getBlogListThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.blogs = action.payload;
      })
      .addCase(getBlogListThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Lỗi tải danh sách bài viết';
      });
  },
});

export default blogSlice.reducer;
