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
      content: '',
      englishTitle: '',
      openDt: '',
      genres: [],
      actors: [],
      image: null,
    };
  };

  getMovieDetail = async (id) => {
    const { data: { movieInfoResult: { movieInfo: movie } } } = await axios.get(`http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=430156241533f1d058c603178cc3ca0e&movieCd=${id}`);
    this.setState({
      title: movie.movieNm,
      englishTitle: movie.movieNmEn,
      openDt: movie.openDt,
      genres: movie.genres,
      actors: movie.actors,
    });
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
        {/*<Button to='/'>뒤로</Button>*/}
        {/*<h1>{title}</h1>*/}
        {/*<p>{content}</p>*/}
        {/*{image !== null && <img src={image} alt="movie"/>}*/}
      </div>
    );
  }
}

export default withRouter(MovieDetail);
