import { commentsMock, commentsActionsMock } from './comments'
import { postsMock, postsActionsMock } from './posts'

const storeMock = {
  comments: commentsMock,
  posts: postsMock,
}

const storeActionsMock = {
  commentsCodesActions: commentsActionsMock,
  postsActions: postsActionsMock,
}

export { storeMock, storeActionsMock }
