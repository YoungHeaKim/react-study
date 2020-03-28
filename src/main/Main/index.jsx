import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { Home, MovieDetail } from 'main/index';
import { Header } from 'components/index';
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
          <Route exact path="/" component={Home}/>
          <Route path="/:id" component={MovieDetail}/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(Main);
