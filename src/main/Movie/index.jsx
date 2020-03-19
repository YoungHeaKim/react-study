import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from 'components';
import styles from './stylesheet.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class Movie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  };

  render() {
    const { movieNm, rank, movieCd, openDt, audiAcc,rankInten } = this.props.movie;
    const { className } = this.props;

    return (
      <Button className={cx('movieItem', className)} to={`/${movieCd}`}>
        <div className='rankWrap'>
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
              <td>{rankInten>0 ? rankInten : rankInten}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </Button>
    );
  }
}

export default withRouter(Movie);
