import React from 'react';
import { withRouter } from 'react-router-dom';

class Movie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      year: '',
      title: '',
      summery: '',
      poster: '',
    };
  };

  componentDidMount() {
    const { id, year, title, summery, poster } = this.props;
    console.log(this.props);
    this.setState({ id, year, title, summery, poster });
  }

  render() {
    const { id, year, title, summery, poster } = this.state;

    return (
      <div>
        <div>{id}</div>
        <h1>{title}</h1>
        <img src={poster} alt="movie"/>
        <h2>{year}</h2>
        <p>{summery}</p>
      </div>
    );
  }
}

export default withRouter(Movie);
