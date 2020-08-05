import actions, { IActions } from './actions'
import thunks, { IThunks } from './thunks'
import { IPostState } from 'types/IPosts'

export interface PostsModel extends IPostState, IActions, IThunks {}

export const initialState: IPostState = {
  postList: [],
  error: null,
}

const posts: PostsModel = {
  ...actions,
  ...initialState,
  ...thunks,
}

export default posts
