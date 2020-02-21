import React from 'react';
import { withRouter } from 'react-router-dom';
import Axios from 'axios';

@withRouter
class Movie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
    };
  };

  getMovies = async () => {
    const movies = await Axios.get('https://yts.mx/api/v2/list_movies.json');
    this.setState({ movies: movies.data.data.movies });
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { movies } = this.state;

    return (
      <div>
        {
          movies.length !== 0 ? 'Loading....' :
            movies.map((movie, i) =>
              <div>
                <h1>{i}</h1>
                <div>{movie}</div>
              </div>,
            )
        }
      </div>
    );
  }
}

export default Movie;
