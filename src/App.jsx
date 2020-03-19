import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { Main } from './main/index';
import styles from './stylesheet.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

// component 생성 시 constructor -> componentWillMount -> render -> componentDidMount
// component props 변경시 componentWillReceiveProps -> shouldComponentUpdate -> componentWillUpdate-> render -> componentDidUpdate
class App extends React.Component {
  // constructor -> state 초기화 및 컴포넌트 생성자
  constructor(props) {
    super(props); // this.props가 생성자 내에서 정의되지 않아 버그로 이어질 수 있습니다.
    // state 정의 해주는 부분
    this.state = {};
  }

  render() {
    return (
      <div className={cx('app')}>
        <Switch>
          <Route path="/" component={Main}/>
        </Switch>
      </div>
    );
  }
}
// create-react-app에서는 데코레이터 사용하지 못함으로 이런식으로 사용
export default withRouter(App);
