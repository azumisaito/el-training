import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Hello } from '~/pages/Hello'
import { Hoge } from '~/pages/Hoge'

// props渡してみた
const name = "mofmof"

export const Routes = () => {
  return (
    <Switch>
      <Route path="/spa/hello">
        <Hello name={name} />
      </Route>
      <Route path="/spa/hoge">
        <Hoge />
      </Route>
    </Switch >
  )
}
