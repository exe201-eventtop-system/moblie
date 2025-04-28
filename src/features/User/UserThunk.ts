import { createGetThunk } from '../genericsCreateThunk';
import { User } from '../../models/User';

export const getUserListThunk = createGetThunk<User[]>(
  'users/getList',
  '/users' 
);
