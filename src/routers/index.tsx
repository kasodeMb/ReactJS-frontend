import React, { lazy, memo, ComponentType, ReactElement } from 'react'
import { Route, Switch } from 'react-router-dom'

const Posts = lazy(
  (): Promise<{ default: ComponentType }> => import('screens/posts'),
)
const Comments = lazy(
  (): Promise<{ default: ComponentType }> => import('screens/comments'),
)

const Routers = (): ReactElement => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Posts} />
        <Route path="/:id" component={Comments} />
      </Switch>
    </React.Fragment>
  )
}

export default memo(Routers)
