import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import Home from './components/home'
import About from './components/about'

import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router'

const store = configureStore(null)

const App = React.createClass({
  render() {
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
        </ul>

        {this.props.children}
      </div>
    )
  }
})

render((
  <Provider store={store}>
    <Router history={ browserHistory }>
      <Route path='/' component={ App }>
        <IndexRoute component={ Home } />
        <Route path='about' component={ About } />
      </Route>
    </Router>
  </Provider>
), document.getElementById('root'))
