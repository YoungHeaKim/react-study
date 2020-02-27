import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { Home } from '../index';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { className } = this.props;

    return (
      <div className={className}>
        <Switch>
          <Route path="/" component={Home}/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(Main);
