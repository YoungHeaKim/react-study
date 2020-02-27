import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import styles from './stylesheet.scss';
import { Movie } from '../index';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      movies: [],
    };
  };

  getMovies = async () => {
    const { data: { data: { movies } } } = await axios.get('https://yts.mx/api/v2/list_movies.json');
    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { movies, isLoading } = this.state;
    const { className } = this.props;

    return (
      <div className={cx('homeDiv', className)}>
        {
          isLoading ? 'Loading...' :
            <div className='InnerDiv'>
              {
                movies.length !== 0 && movies.map((movie, i) =>
                  <Movie key={i} movie={movie}/>,
                )
              }
            </div>
        }
      </div>
    );
  }
}

export default withRouter(Home);
