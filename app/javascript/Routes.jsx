import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { LabelIndex } from '~/pages/LabelIndex'
import { Hoge } from '~/pages/Hoge'

export const Routes = () => {
  return (
    <Switch>
      <Route path="/spa/labels">
        <LabelIndex />
      </Route>
      <Route path="/spa/hoge">
        <Hoge />
      </Route>
    </Switch >
  )
}
