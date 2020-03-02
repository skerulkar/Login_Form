// import React from 'react';
import React, { Component } from 'react';

import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Wallet from './components/Wallet';

function App() {
  return (
      <Router>

        <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route path="/wallet" component={Wallet}></Route>
        </Switch>
        

      </Router>
      

  );
}


// export default class App extends Component {
//   render() {
//     return (
//       <Router>

//         <Switch>
//           <Route exact path="/" component={Login}></Route>
//           <Route path="/register" component={Register}></Route>
//         </Switch>
        

//       </Router>
//     );
//   }
// }


export default App;
