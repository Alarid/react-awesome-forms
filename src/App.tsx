import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'

export default function App() {
  return (
    <div className="card bg-light shadow p-3 mx-auto my-5" style={{ width: '350px' }}>
      <div className="card-body">
        <h5 className="card-title text-center">
          Awesome Forms
          <span role="img" aria-label="rocket emoji">
            🚀
          </span>
        </h5>
        <Router>
          <Switch>
            <Route path="/" exact component={LoginForm} />
            <Route path="/register" exact component={RegisterForm} />
          </Switch>
        </Router>
      </div>
    </div>
  )
}
