import ApiService from 'services/api-service'

export interface IComment {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

export interface ICommentState {
  commentList: IComment[]
  error: Error | null
}

export interface ICommentInjections {
  getComments: typeof ApiService.getComments
}

export interface ICommentForm {
  name: string
  email: string
  body: string
}
