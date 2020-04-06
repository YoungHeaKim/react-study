import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { Home, MovieDetail } from 'main/index';
import { Header } from 'components/index';
import { endpoint } from 'common/env';
import './stylesheet.scss';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='pageWrap'>
        <Header className='headerWrap'/>
        <Switch>
          <Route exact path={`${endpoint}`} component={Home}/>
          <Route path={`${endpoint}/:id`} component={MovieDetail}/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(Main);
