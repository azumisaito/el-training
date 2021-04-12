import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Labels } from '~/pages/Labels'
import { Hoge } from '~/pages/Hoge'
import { Tasks } from '~/pages/Tasks'

export const Routes = () => {
  return (
    <Switch>
      <Route path="/spa/labels">
        <Labels />
      </Route>
      <Route path="/spa/hoge">
        <Hoge />
      </Route>
      <Route path="/spa/tasks">
        <Tasks />
      </Route>
    </Switch >
  )
}
