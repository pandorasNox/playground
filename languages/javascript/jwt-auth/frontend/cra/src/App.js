import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

const Home = () => <h1>Home</h1>
const About = () => <h1>About</h1>


const App = () => (
   <Router>
      <div>
         <Route exact path="/" component={Home} />
         <Route path="/about" component={About} />
         <Route path="/rebout" render={() => (<About />)} />
         <Route path="/chibout" children={({match}) => (match && <About />)} />
      </div>
   </Router>
);

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

export default App;
