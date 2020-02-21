import React from 'react';

// component 생성 시 constructor -> componentWillMount -> render -> componentDidMount
// component props 변경시 componentWillReceiveProps -> shouldComponentUpdate -> componentWillUpdate-> render -> componentDidUpdate
class App extends React.Component {
  // constructor -> state 초기화 및 컴포넌트 생성자
  constructor(props) {
    super(props); // this.props가 생성자 내에서 정의되지 않아 버그로 이어질 수 있습니다.
    // state 정의 해주는 부분
    this.state = {
      count: 0,
    };
  }

  add() {
    this.setState(current => ({ count: current.count + 1 }));
  }

  minus() {
    // setState에서 변경된 사항들을 current로 가져와 setState 가능
    this.setState(current => ({ count: current.count - 1 }));
  }

  render() {
    const { count } = this.state;

    return <div className="app">
      <h1>
        Count : {count}
      </h1>
      <button onClick={() => this.add()}>Add</button>
      <button onClick={() => this.minus()}>Minus</button>
    </div>;
  }
}

export default App;
