import React, { Component } from 'react'

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import HomePage from './components/HomePage'
import Dropkick from './components/Dropkick.jsx'
import Kings from './components/Kings.jsx'
import Molly from './components/Molly.jsx'

class App extends Component {
  render() {
    return (
      <Router>
        <section className="top-container">
          <header>
            <h1>Irish Music Madness</h1>
          </header>
          <nav>
            <h4 className="nav-link">
              <Link to="/">Home</Link>
            </h4>
            <h4 className="nav-link">
              <Link to="/dropkick">Dropkick Murphys</Link>
            </h4>
            <h4 className="nav-link">
              <Link to="/kings">The High Kings</Link>
            </h4>
            <h4 className="nav-link">
              <Link to="/molly">Flogging Molly</Link>
            </h4>
          </nav>
        </section>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/dropkick" component={Dropkick}></Route>
          <Route exact path="/kings" component={Kings}></Route>
          <Route exact path="/molly" component={Molly}></Route>
        </Switch>
      </Router>
    )
  }
}

export default App
