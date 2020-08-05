import { IActionModel } from 'store'
import { IPost } from 'types/IPosts'

export interface IType {
  posts: IPost[]
}

export interface IStoreToHookActions {
  postsActions: IActionModel['posts']
}
