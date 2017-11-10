import React, { Component} from 'react'
import Boiling from './Boiling';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Login from './login.js';


const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)



const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )} />
  </div>
)

const Menu = ()=>{
  return <div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/login-example">login-example</Link></li>
      <li><Link to="/topics">Topics</Link></li>
      <li><Link to="/event/boiling">Boiling</Link></li>

    </ul>
  </div>
}

const Content = ()=> {
return <div>
    <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/login-example" component={Login} />
      <Route path="/topics" component={Topics} />
      <Route path="/event/boiling" component={Boiling} />

    </div>
}

const SplitPane = (props)=>{
  return (
    <Router>
    <div className="splitPane">
      <div className="left">
        {props.left}
      </div>
      <div className="right">
        {props.right}
      </div>
    </div>
    </Router>

  )
}

const BasicExample = () => (
    <div>
    <SplitPane left={<Menu/>} right={<Content/>}>

    </SplitPane>
    </div>
)
export default BasicExample