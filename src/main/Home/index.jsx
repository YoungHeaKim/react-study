import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import styles from './stylesheet.scss';
// import { Button } from '../../components/index';
import { Movie } from '../index';

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
    console.log(movies);
    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { movies, isLoading } = this.state;
    console.log(movies);

    return (
      <div className={styles}>
        {
          isLoading ? 'Loading...' :
            <div>
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
