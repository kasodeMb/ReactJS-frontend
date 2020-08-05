import { thunk, Thunk } from 'easy-peasy'

import { IActionModel } from 'store'
import { IInjections, IHelpers } from 'types/IStoreConfig'

import { CommentsModel } from './model'

export interface IThunks {
  getComments: Thunk<CommentsModel, void, IInjections>
}

type CommentsActions = IActionModel['comments']

const thunks: IThunks = {
  getComments: thunk(
    async (
      actions: CommentsActions,
      payload: void,
      { injections }: IHelpers<CommentsModel>,
    ): Promise<void> => {
      try {
        const comments = await injections.getComments()
        actions.getCommentsSuccess(comments)
      } catch (error) {
        actions.getCommentsFail(error)
      }
    },
  ),
}

export default thunks
