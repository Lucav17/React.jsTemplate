import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Index from './pages/Index'
import NavBar from './components/Header';
import '../public/style/style.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tokenm: null
    }
  }

  componentDidMount() {

  }


  render() {
    return (
      <div>
        <NavBar />
        <Switch>
            <Route path='/' component={Index} />
        </Switch>
      </div>
    );
  }
}

export default App;
