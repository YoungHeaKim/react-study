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
    const { vote_average, poster_path, original_title, title, release_date, overview, id } = movie;

    return (
      <div className={cx('popularMovieItem', className)}>
        <div className='posterWrap'>
          <img className='posterImage' src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${poster_path}`}/>
        </div>
        <div className='movieCardWrap'>
          <Button className='titleOfMovieWrap' to={`/${id}`}>
            <p className='titleOfMovie'>{title}</p>
          </Button>
          <div className='movieInfoWrap'>
            <div className='titleOfOpen'>영화 개봉일:</div>
            <div className='titleOfOpen'>평점:</div>
          </div>
          <div className='movieInfoWrap'>
            <div className='detailOfOpen'>{release_date}</div>
            <div className='detailOfOpen'>{vote_average}</div>
          </div>
          <div className='movieOverWrap'>
            {overview}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(PopularMovie);
