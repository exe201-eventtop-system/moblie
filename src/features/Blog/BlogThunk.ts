import { createGetThunk } from '../genericsCreateThunk';
import { Blog } from '../../models/Blog';

export const getBlogListThunk = createGetThunk<Blog[]>(
  'posts/fetchList',
  '/posts'
);
