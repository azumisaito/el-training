import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Labels } from '~/pages/Labels'
import { Hoge } from '~/pages/Hoge'
import { Navigation } from '~/components/Navigation'
import { Task } from '~/pages/Task'
import { Tasks } from '~/pages/Tasks'

export const Routes = () => {
  return (
    <div>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Tasks />
        </Route>
        <Route path="/spa/labels">
          <Labels />
        </Route>
        <Route path="/spa/hoge">
          <Hoge />
        </Route>
        <Route path="/spa/tasks/:id">
          <Task />
        </Route>
        <Route path="/spa/tasks">
          <Tasks />
        </Route>
      </Switch >
    </div>
  )
}
