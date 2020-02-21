import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { Movie } from '../index';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app">
        <Switch>
          <Route path="/movie" component={Movie}/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(Main);
