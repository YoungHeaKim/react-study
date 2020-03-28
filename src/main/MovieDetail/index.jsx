import React from 'react';
import { withRouter } from 'react-router-dom';
import './stylesheet.scss';
import axios from 'axios';
import { CardItem } from 'components/index';

class MovieDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: null,
      casts: [],
    };
  };

  getMovieDetail = async (id) => {
    const { data: movie } = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=7fdc60f28edc0c187e8450056c7731de&language=ko-KR`);
    const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=7fdc60f28edc0c187e8450056c7731de`);
    this.setState({ movie, casts: data.cast });
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    if (id) this.getMovieDetail(id);
  }

  render() {
    const { movie, casts } = this.state;
    const { id } = this.props.match.params;
    const openYear = movie && movie.release_date.split('-')[0];

    return id && movie && (
      <div className='movieDetailItem'>
        <div className='movieBannerContainer'>
          <div className='imageContainer'>
            <img className='mainImg' src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${movie.poster_path}`}
                 alt='posterImage'/>
          </div>
          <div className='detailInfoWrap'>
            <div className='detailTitle'>
              {movie.title}
              <span className='detailOpenYear'>({openYear})</span>
            </div>
            <div className='detailInfo'>
              {
                movie.status === 'Released' ?
                  <span className='detailStatus'>R</span> :
                  <span className='detailStatus'>{movie.status}</span>
              }
              <span
                className='detailRelease'>{movie.release_date} ({movie.production_countries.map((en) => en.iso_3166_1)})</span>
              <div className='detailGenres'>
                {
                  movie.genres.map((genre, i) =>
                    <span className='detailGenreList' key={i}>{genre.name},</span>,
                  )
                }
              </div>
              {
                movie.runtime / 60 > 1 ?
                  <span className='detailRunTime'> 1h{movie.runtime - 60}m</span> :
                  <span className='detailRunTime'>{movie.runtime}m</span>
              }
            </div>
            <div className='detailContentWrap'>
              <h3 className='detailTagline'>{movie.tagline}</h3>
              <h3 className='detailContentTitle'>개요</h3>
              <p>{movie.overview}</p>
            </div>
          </div>
        </div>
        <div className='movieDetailWrap'>
          <h2>주요 출연진</h2>
          <div className='movieDetailCastWrap'>
            {
              casts.map((item, i) =>
                <CardItem item={item} key={i} className='movieCast'/>,
              )
            }
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(MovieDetail);
