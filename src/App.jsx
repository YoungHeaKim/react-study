import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { Main } from './main/views/index';

// component 생성 시 constructor -> componentWillMount -> render -> componentDidMount
// component props 변경시 componentWillReceiveProps -> shouldComponentUpdate -> componentWillUpdate-> render -> componentDidUpdate
@withRouter
class App extends React.Component {
  // constructor -> state 초기화 및 컴포넌트 생성자
  constructor(props) {
    super(props); // this.props가 생성자 내에서 정의되지 않아 버그로 이어질 수 있습니다.
    // state 정의 해주는 부분
    this.state = {};
  }

  render() {
    return (
      <div className="app">
        <Switch>
          <Route path="/" component={Main}/>
        </Switch>
      </div>
    );
  }
}

export default App;
