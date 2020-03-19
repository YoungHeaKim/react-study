import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { Home, MovieDetail } from '../index';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/:id" component={MovieDetail}/>
      </Switch>
    );
  }
}

export default withRouter(Main);
