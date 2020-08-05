import {
  useStoreActions,
  useStoreState,
  IActionModel,
  IStateModel,
} from 'store'
import { IType, IStoreToHookActions } from './comments.interfaces'
import { useEffect, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { IComment, ICommentForm } from 'types/IComments'

function useComments(): IType {
  let { id } = useParams()
  const { comments } = useStoreState((state: IStateModel): any => state)
  const { commentList } = comments
  const { commentsActions } = useStoreActions(
    (actions: IActionModel): IStoreToHookActions => ({
      commentsActions: actions.comments,
    }),
  )
  const filteredComments = commentList.filter(
    (comment: IComment): boolean => comment.postId === Number(id),
  )

  useEffect(() => {
    if (!commentList.length) {
      commentsActions.getComments()
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleSubmitComment = useCallback(
    (data: ICommentForm, e: any): void => {
      const { name, email, body } = data
      commentsActions.addNewComment({
        id: 1000,
        postId: Number(id),
        name,
        email,
        body,
      })
      e.target.reset()
    },
    [id, commentsActions],
  )

  return {
    comments: filteredComments,
    id,
    handleSubmitComment,
  }
}

export default useComments
