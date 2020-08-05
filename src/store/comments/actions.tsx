import { action, Action } from 'easy-peasy'

import { initialState, CommentsModel } from './model'
import { IComment, ICommentState } from 'types/IComments'
export interface IActions {
  resetStore: Action<CommentsModel>
  getCommentsFail: Action<CommentsModel, Partial<Error>>
  getCommentsSuccess: Action<CommentsModel, Partial<IComment[]>>
  addNewComment: Action<CommentsModel, Partial<IComment>>
}
const actions: IActions = {
  resetStore: action(
    (): ICommentState => {
      return { ...initialState }
    },
  ),
  addNewComment: action(
    (state: ICommentState, payload: IComment): ICommentState => {
      state.commentList.push(payload)
      return {
        ...state,
        error: null,
      }
    },
  ),
  getCommentsFail: action(
    (state: ICommentState, payload: Error): ICommentState => {
      return { ...state, error: payload }
    },
  ),
  getCommentsSuccess: action(
    (state: ICommentState, payload: IComment[]): ICommentState => {
      return {
        ...state,
        ...{ commentList: payload },
        error: null,
      }
    },
  ),
}
export default actions
