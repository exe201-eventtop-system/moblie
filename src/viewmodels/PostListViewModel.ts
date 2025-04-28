import { getBlogListThunk } from './../features/Blog/BlogThunk';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../features/store';

export const useBlogListViewModel = () => {
  const dispatch: AppDispatch = useDispatch();
  const { blogs, loading, error } = useSelector((state: RootState) => state.blogs);

  useEffect(() => {
    dispatch(getBlogListThunk());
  }, [dispatch]);

  return { blogs, loading, error };
};
