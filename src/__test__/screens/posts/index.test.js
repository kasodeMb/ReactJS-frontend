import React from 'react'
import { render } from '@testing-library/react'
import * as storeHook from 'store'
import { storeMock, storeActionsMock } from '__test__/mocks/store'

import Posts from 'screens/posts'

it('should render the comments information', () => {
  jest.spyOn(storeHook, 'useStoreState').mockReturnValue(storeMock)
  jest.spyOn(storeHook, 'useStoreActions').mockReturnValue(storeActionsMock)

  const { getByTestId, getAllByTestId } = render(<Posts />)

  expect(getByTestId('header').textContent).toEqual('Post List')
  expect(getAllByTestId('post').length).toBe(6)
})
