import React, { memo, ReactElement } from 'react'
import { useForm } from 'react-hook-form'

import {
  Box,
  Button,
  Container,
  Typography,
  TextField,
} from '@material-ui/core'

import useComments from './comments.hook'
import { IComment, ICommentForm } from 'types/IComments'
import Comment from 'components/comment'
// import { commentsStyleFn } from "./posts.styles";

function Comments(): ReactElement {
  const { register, handleSubmit } = useForm<ICommentForm>()
  const { comments, id, handleSubmitComment } = useComments()
  return (
    <Container>
      <Box>
        <Typography variant="h1" data-testid="header">
          Comments for Post #{id}
        </Typography>
      </Box>
      <Box>
        {comments.length ? (
          comments.map((comment: IComment, index) => (
            <Comment key={index} comment={comment} />
          ))
        ) : (
          <Typography data-testid="error-msg">
            No comments were found
          </Typography>
        )}
      </Box>
      <Box mb={6}>
        <form onSubmit={handleSubmit(handleSubmitComment)}>
          <Box width="50%" my={4}>
            <TextField
              variant="outlined"
              label="Name"
              inputRef={register({ required: true })}
              name="name"
              fullWidth
            />
          </Box>
          <Box width="50%" my={4}>
            <TextField
              variant="outlined"
              label="Email"
              inputRef={register({ required: true })}
              name="email"
              fullWidth
            />
          </Box>
          <Box width="50%" my={4}>
            <TextField
              variant="outlined"
              label="Comment"
              inputRef={register({ required: true })}
              name="body"
              multiline
              rows={4}
              fullWidth
            />
          </Box>
          <Button variant="contained" color="primary" type="submit">
            Add new comment
          </Button>
        </form>
      </Box>
    </Container>
  )
}

export default memo(Comments)
