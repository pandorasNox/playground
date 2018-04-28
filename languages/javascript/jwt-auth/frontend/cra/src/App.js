import React, { Component, Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect, } from 'react-router-dom'

//pages
import HomeIndex from './pages';
import About from './pages/about'
import Login from './pages/login'

//context
import { GlobalContext } from './contexts'
const { GlobalProvider, GlobalConsumer } = GlobalContext;

//components
const Family = (props) => (
   // <Person {...props} />
   <Person />
);

const Secret = () => (<h1>SECRET</h1>);

const ProtectedRoute = ({ component: Component, ...rest }) => (
   <GlobalConsumer>
      {({state: {isLoggedIn},}) => (
         <Route {...rest} render={(props) => (
            isLoggedIn === true
               ? <Component {...props} />
               : <Redirect to={{
                  pathname: '/login',
                  state: { from: props.location }
                  }} />
            )} />
      )}
   </GlobalConsumer>
);

class Person extends Component {
   render () {

      return (
         // <div>Person:{name}</div>
         <GlobalConsumer>
            {({state: {name, age}, getOlder}) => (
               <Fragment>
                  <span> Name: {name}</span>
                  <span> Age: {age}</span>
                  <button onClick={getOlder}>getOlder</button>
               </Fragment>
            )}
         </GlobalConsumer>
      );
   }
}

class App extends Component {

   render() {
      return (
         <GlobalProvider>
            <Router>
               <Fragment>
                  <Route exact path="/" component={HomeIndex} />
                  <Route path="/about" component={About} />
                  <Route path="/login" component={Login} />
                  <Route path="/family" component={Family} />
                  <ProtectedRoute path="/secret" component={Secret}  />
               </Fragment>
            </Router>
         </GlobalProvider>
      )
   };
}

export default App;
