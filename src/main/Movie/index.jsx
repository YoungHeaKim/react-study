import React from 'react';
import { withRouter } from 'react-router-dom';
import Axios from 'axios';

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
    console.log(movies);

    return (
      <div>
        {
          movies.length === 0 ? 'Loading....' :
            movies.map((movie, i) =>
              <div key={i}>
                <h1>{i + 1}</h1>
                <div>{movie.title}</div>
                <img src={movie.medium_cover_image} alt="movie"/>
              </div>,
            )
        }
      </div>
    );
  }
}

export default withRouter(Movie);
