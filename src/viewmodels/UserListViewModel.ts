import { getUserListThunk } from './../features/User/UserThunk';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../features/store';

export const useUserListViewModel = () => {
  const dispatch: AppDispatch = useDispatch();
  const { users, loading, error } = useSelector((state: RootState) => state.users);

  useEffect(() => {
    dispatch(getUserListThunk());
  }, [dispatch]);

  return { users, loading, error };
};
