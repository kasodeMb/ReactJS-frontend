import { action, Action } from 'easy-peasy'

import { initialState, PostsModel } from './model'
import { IPost, IPostState } from 'types/IPosts'
export interface IActions {
  resetStore: Action<PostsModel>
  getPostFail: Action<PostsModel, Partial<Error>>
  getPostSuccess: Action<PostsModel, Partial<IPost[]>>
}
const actions: IActions = {
  resetStore: action(
    (): IPostState => {
      return { ...initialState }
    },
  ),
  getPostFail: action(
    (state: IPostState, payload: Error): IPostState => {
      return { ...state, error: payload }
    },
  ),
  getPostSuccess: action(
    (state: IPostState, payload: IPost[]): IPostState => {
      return {
        ...state,
        ...{ postList: payload },
        error: null,
      }
    },
  ),
}
export default actions
