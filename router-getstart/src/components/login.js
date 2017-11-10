import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter
} from 'react-router-dom'

const About = ()=>{
  return (
    <h3>I am about</h3>
  )
}
const Protected = () => <h3>Protected</h3>

// 假装登陆操作
const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100) // fake async
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  },
  login() {
    this.setState({ redirectToReferrer: true })
  }
}



const AuthButton = withRouter(({ history }) => (
  fakeAuth.isAuthenticated ? (
    <p>Welcome!</p>
  ): (
      <p>You are not loggin in.<button onClick={fakeAuth.authenticate}>log in</button></p>
  )
));

const BasicExample = () => (
  <Router>
    <div>
      <AuthButton />
      <ul>
        <li><Link to="/public">public</Link></li>
        <li><Link to="/private">private</Link></li>
      </ul>

      <hr />
      <Route path="/public" component={About} />
      <Route path="/private" component={Protected} />
    </div>
  </Router>
)
export default BasicExample