import React from 'react'
import { render } from '@testing-library/react'

import Comment from 'components/comment'

it('should render the comment information', () => {
  const comment = {
    id: 1,
    postId: 1,
    name: 'Test',
    email: 'test@test.com',
    body: 'comment body',
  }

  const { getByTestId } = render(<Comment comment={comment} />)

  expect(getByTestId('name').textContent).toEqual(comment.name)

  expect(getByTestId('email').textContent).toEqual(`<${comment.email}>`)

  expect(getByTestId('body').textContent).toEqual(comment.body)
})
