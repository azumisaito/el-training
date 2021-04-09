import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { LabelsIndex } from '~/pages/LabelsIndex'
import { Hoge } from '~/pages/Hoge'

export const Routes = () => {
  return (
    <Switch>
      <Route path="/spa/labels">
        <LabelsIndex />
      </Route>
      <Route path="/spa/hoge">
        <Hoge />
      </Route>
    </Switch >
  )
}
