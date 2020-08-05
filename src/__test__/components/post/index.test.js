import React from 'react'
import { render } from '@testing-library/react'

import Post from 'components/post'

it('should render the comment information', () => {
  const post = {
    id: 1,
    userId: 1,
    title: 'Test',
    body: 'post body',
  }
  const { getByTestId } = render(<Post post={post} />)

  expect(getByTestId('title').textContent).toEqual(post.title)

  expect(getByTestId('body').textContent).toEqual(post.body)

  expect(getByTestId('button').getAttribute('href')).toEqual(`/${post.id}`)
})
