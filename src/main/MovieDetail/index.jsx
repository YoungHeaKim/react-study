import React from 'react';
import { withRouter } from 'react-router-dom';
import styles from './stylesheet.scss';
import classNames from 'classnames/bind';
import axios from 'axios';
// import { Button } from 'components';

const cx = classNames.bind(styles);

class MovieDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',

    };
  };

  getMovieDetail = async (id) => {
    const { data: movie } = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=7fdc60f28edc0c187e8450056c7731de&language=ko-KR`);
    console.log(movie);
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    if (id) this.getMovieDetail(id);
  }

  render() {
    // const { title, image, content } = this.state;
    const { className } = this.props;
    const { id } = this.props.match.params;

    return id && (
      <div className={cx('movieDetailItem', className)}>

      </div>
    );
  }
}

export default withRouter(MovieDetail);
