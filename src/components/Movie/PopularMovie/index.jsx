import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from 'components/index';
import styles from './stylesheet.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class PopularMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  };

  render() {
    const { className, movie } = this.props;
    const { vote_average, poster_path, original_title, title, release_date, backdrop_path, overview, id } = movie;
    console.log(movie);

    return (
      <Button className={cx('popularMovieItem', className)} to={`/${id}`}>
        <div className='movieInfo'>
          <div className='posterWrap'>
            <img className='posterImage' src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${poster_path}`}/>
          </div>
          <div className='movieWrap'>
            <div className='titleOfMovieWrap'>
              <p className='titleOfMovie'>{title}</p>
            </div>
            <div>
              <div className='title'>평점:</div>
              <div className='detail'>{vote_average}</div>
            </div>
            <div>
              <div className='title'>영화 개봉일:</div>
              <div className='detail'>{release_date}</div>
            </div>
            <div>
              <div>{overview}</div>
            </div>
          </div>
        </div>
      </Button>
    );
  }
}

export default withRouter(PopularMovie);
