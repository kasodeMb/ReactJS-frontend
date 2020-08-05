import React, { memo, ReactElement } from 'react'

import { Box, Typography } from '@material-ui/core'
import { IComment } from 'types/IComments'

interface ICommentProps {
  comment: IComment
}

function Index({ comment }: ICommentProps): ReactElement {
  return (
    <Box
      border={1}
      my={3}
      p={3}
      borderColor="grey.400"
      borderRadius={10}
      data-testid="comment"
    >
      <Box>
        <Typography variant="h2" data-testid="name">
          {comment.name}
        </Typography>
        <Typography
          variant="body2"
          data-testid="email"
        >{`<${comment.email}>`}</Typography>
      </Box>
      <Box my={4}>
        <Typography variant="body1" data-testid="body">
          {comment.body}
        </Typography>
      </Box>
    </Box>
  )
}

export default memo(Index)
