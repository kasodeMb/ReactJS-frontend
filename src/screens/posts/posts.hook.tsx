import {
  useStoreActions,
  useStoreState,
  IActionModel,
  IStateModel,
} from 'store'
import { IType, IStoreToHookActions } from './posts.interfaces'
import { useEffect } from 'react'

function usePosts(): IType {
  const { posts } = useStoreState((state: IStateModel): any => state)
  const { postList } = posts
  const { postsActions } = useStoreActions(
    (actions: IActionModel): IStoreToHookActions => ({
      postsActions: actions.posts,
    }),
  )

  useEffect(() => {
    postsActions.getPosts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return {
    posts: postList,
  }
}

export default usePosts
