import ApiService from 'services/api-service'

export interface IPost {
  userId: number
  id: number
  title: string
  body: string
}

export interface IPostState {
  postList: IPost[]
  error: Error | null
}

export interface IPostInjections {
  getPosts: typeof ApiService.getPosts
}
