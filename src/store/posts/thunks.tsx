import { thunk, Thunk } from 'easy-peasy'

import { IActionModel } from 'store'
import { IInjections, IHelpers } from 'types/IStoreConfig'

import { PostsModel } from './model'

export interface IThunks {
  getPosts: Thunk<PostsModel, void, IInjections>
}

type PostsActions = IActionModel['posts']

const thunks: IThunks = {
  getPosts: thunk(
    async (
      actions: PostsActions,
      payload: void,
      { injections }: IHelpers<PostsModel>,
    ): Promise<void> => {
      try {
        const posts = await injections.getPosts()
        actions.getPostSuccess(posts)
      } catch (error) {
        actions.getPostFail(error)
      }
    },
  ),
}

export default thunks
