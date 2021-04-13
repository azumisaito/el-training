import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes } from './Routes'
import axios from 'axios'

export const App = () => {
  const token = document.querySelector('[name=csrf-token]').content
  axios.defaults.headers.common['X-CSRF-TOKEN'] = token

  return (
    <Router>
      <Routes />
    </Router>
  )
}
