import { renderWithRouter } from '__test__/utils'
import * as storeHook from 'store'
import { storeMock, storeActionsMock } from '__test__/mocks/store'

import Comments from 'screens/comments'

it('should render the comments information', () => {
  jest.spyOn(storeHook, 'useStoreState').mockReturnValue(storeMock)
  jest.spyOn(storeHook, 'useStoreActions').mockReturnValue(storeActionsMock)

  const { getByTestId, getAllByTestId } = renderWithRouter(Comments, {
    route: '/1',
    path: '/:id',
  })

  expect(getByTestId('header').textContent).toEqual('Comments for Post #1')
  expect(getAllByTestId('comment').length).toBe(5)
})

it('should render error message', () => {
  jest.spyOn(storeHook, 'useStoreState').mockReturnValue(storeMock)
  jest.spyOn(storeHook, 'useStoreActions').mockReturnValue(storeActionsMock)

  const { getByTestId } = renderWithRouter(Comments, {
    route: '/123',
    path: '/:id',
  })

  expect(getByTestId('error-msg').textContent).toEqual('No comments were found')
})
