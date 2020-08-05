import React, { memo, ReactElement } from 'react'

import { Box, Typography, Button } from '@material-ui/core'
import { IPost } from 'types/IPosts'

interface IPostProps {
  post: IPost
}

function Index({ post }: IPostProps): ReactElement {
  return (
    <Box
      border={1}
      my={3}
      p={3}
      borderColor="grey.400"
      borderRadius={10}
      data-testid="post"
    >
      <Box>
        <Typography variant="h2" data-testid="title">
          {post.title}
        </Typography>
      </Box>
      <Box my={4}>
        <Typography variant="body1" data-testid="body">
          {post.body}
        </Typography>
      </Box>
      <Box>
        <Button
          variant="contained"
          color="primary"
          data-testid="button"
          href={`/${post.id}`}
        >
          See comments
        </Button>
      </Box>
    </Box>
  )
}

export default memo(Index)
