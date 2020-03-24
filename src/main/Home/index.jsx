import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import styles from './stylesheet.scss';
import { PopularMovie, CardSlider, TopMovie } from 'components/index';
import classNames from 'classnames/bind';
import moment from 'moment';

const cx = classNames.bind(styles);

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      movies: [],
      popularMovies: [],
      page: 1,
      pages: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };
  };

  getMovies = async () => {
    const { page } = this.state;
    let today = moment().subtract(1, 'days').format('YYYYMMDD');
    const { data: { boxOfficeResult: { dailyBoxOfficeList: movies } } } = await axios.get(`http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=430156241533f1d058c603178cc3ca0e&targetDt=${today}`);
    const { data: { results: popularMovies } } = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=7fdc60f28edc0c187e8450056c7731de&language=ko-KR&page=${page}`);
    this.setState({ movies, popularMovies, isLoading: false });
  };

  componentDidMount() {
    const { movies } = this.state;
    if (movies.length === 0) this.getMovies();
  }

  render() {
    const { movies, isLoading, popularMovies, pages } = this.state;
    const { className } = this.props;

    return (
      <div className={cx('homeDiv', className)}>
        {
          isLoading ? 'Loading...' :
            <div className='InnerDiv'>
              <h1 className='headerTitle'>영화 Top 10</h1>
              <CardSlider className='sliderItems' items={movies}>
                {
                  movies.length !== 0 && movies.map((item, i) =>
                    <TopMovie className='movieWrap' key={i} movie={item}/>,
                  )
                }
              </CardSlider>
              <h1 className='headerPopularTitle'>최신 영화</h1>
              <ul className='listPopularMovie'>
                {
                  popularMovies.length !== 0 && popularMovies.map((movie, i) =>
                    <li className='moviePopularWrap' key={i}>
                      <PopularMovie movie={movie}/>
                    </li>,
                  )
                }
              </ul>
              <ul>
                {
                  pages.map((page, i) =>
                    <li key={i}>{page}</li>,
                  )
                }
              </ul>
            </div>
        }
      </div>
    );
  }
}

export default withRouter(Home);
