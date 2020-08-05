import React, { memo, ReactElement } from 'react'

import { Box, Container, Typography } from '@material-ui/core'
import Post from 'components/post'

import usePosts from './posts.hook'
import { IPost } from 'types/IPosts'

function Posts(): ReactElement {
  const { posts } = usePosts()
  return (
    <Container>
      <Box>
        <Typography variant="h1" data-testid="header">
          Post List
        </Typography>
      </Box>
      {posts &&
        posts.map((post: IPost, index) => <Post post={post} key={index} />)}
    </Container>
  )
}

export default memo(Posts)
