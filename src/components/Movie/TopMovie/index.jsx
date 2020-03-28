import React from 'react';
import { withRouter } from 'react-router-dom';
import styles from './stylesheet.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class TopMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  };

  render() {
    const { className, movie } = this.props;
    const { movieNm, rank, openDt, audiAcc, rankInten } = movie;

    return (
      <div className={cx('movieRankWrap', className)}>
        <div className={rank < 4 ? 'rankWrap' : 'rankOverThree'}>
          <div className='rank'>NO.{rank}</div>
        </div>
        <div className='movieInfo'>
          <div className='titleOfMovie'>{movieNm}</div>
          <table className='tableOfMovie'>
            <tbody>
            <tr>
              <th>영화 개봉일:</th>
              <td>{openDt}</td>
            </tr>
            <tr>
              <th>누적관객수:</th>
              <td>{audiAcc}명</td>
            </tr>
            <tr>
              <th>순위 변:</th>
              {
                rankInten === '0' ?
                  <td>---</td> :
                  <td>{rankInten}</td>
              }
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default withRouter(TopMovie);
