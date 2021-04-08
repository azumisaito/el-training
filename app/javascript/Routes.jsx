import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Labels } from '~/pages/Labels'
import { Hoge } from '~/pages/Hoge'

// props渡してみた
const name = "mofmof"

export const Routes = () => {
  return (
    <Switch>
      <Route path="/spa/labels">
        <Labels name={name} />
      </Route>
      <Route path="/spa/hoge">
        <Hoge />
      </Route>
    </Switch >
  )
}
