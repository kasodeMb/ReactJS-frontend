import { IActionModel } from 'store'
import { IComment, ICommentForm } from 'types/IComments'

export interface IType {
  comments: IComment[]
  id: number
  handleSubmitComment(data: ICommentForm, e: any): void
}

export interface IStoreToHookActions {
  commentsActions: IActionModel['comments']
}
