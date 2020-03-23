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
      <div className={cx('movieItem', className)}>
        {
          rank < 4 ?
            <div className='rankWrap'>
              <div className='rank'>NO.{rank}</div>
            </div>
            :
            <div className='rankOverThree'>
              <div className='rank'>NO.{rank}</div>
            </div>
        }
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
            {
              rankInten === '0' ?
                <tr>
                  <th>순위 변:</th>
                  <td>---</td>
                </tr> :
                <tr>
                  <th>순위 변:</th>
                  <td>{rankInten}</td>
                </tr>
            }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default withRouter(TopMovie);
