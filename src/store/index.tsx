import { createStore, createTypedHooks, Actions, State } from 'easy-peasy'
import { persistReducer, persistStore } from 'redux-persist'

// @ts-ignore
import createEncryptor from 'redux-persist-transform-encrypt'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import storage from 'redux-persist/lib/storage'

import ApiService from 'services/api-service'

import posts, { PostsModel } from './posts/model'
import comments, { CommentsModel } from './comments/model'

interface StoreModel {
  posts: PostsModel
  comments: CommentsModel
}

const model: StoreModel = {
  posts,
  comments,
}

const encryptor = createEncryptor({
  secretKey: process.env.REACT_APP_STORE_KEY || '',
})

const { useStoreActions, useStoreState } = createTypedHooks<StoreModel>()

const persistKey = process.env.REACT_APP_PERSIST_KEY || ''

const store = createStore(model, {
  disableImmer: true,
  injections: ApiService,
  reducerEnhancer: (reducer: any): any =>
    persistReducer(
      {
        key: `${persistKey}`,
        storage,
        stateReconciler: autoMergeLevel2,
        transforms: [encryptor],
      },
      reducer,
    ),
})

const persistor = persistStore(store)

export function resetStores(): void {
  Object.values(store.dispatch).forEach(
    (storeAction: any): void =>
      storeAction.resetStore && storeAction.resetStore(),
  )
}
export type IStateModel = State<StoreModel>
export type IActionModel = Actions<StoreModel>
export { persistor, useStoreActions, useStoreState }

export default store
