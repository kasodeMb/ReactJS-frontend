import actions, { IActions } from './actions'
import thunks, { IThunks } from './thunks'
import { ICommentState } from 'types/IComments'

export interface CommentsModel extends ICommentState, IActions, IThunks {}

export const initialState: ICommentState = {
  commentList: [],
  error: null,
}

const comments: CommentsModel = {
  ...actions,
  ...initialState,
  ...thunks,
}

export default comments
