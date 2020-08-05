import { Actions, Dispatch, Meta, State } from 'easy-peasy'

import { IStateModel } from 'store'
import { IPostInjections } from './IPosts'
import { ICommentInjections } from './IComments'

/* tslint:disable-next-line */
export interface IInjections extends IPostInjections, ICommentInjections {}

export interface IHelpers<T extends object> {
  dispatch: Dispatch<IStateModel>
  injections: IInjections
  meta: Meta

  getState(): State<T>
  getStoreActions(): Actions<IStateModel>
  getStoreState(): State<IStateModel>
}
