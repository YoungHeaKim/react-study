import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from 'components';
import styles from './stylesheet.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class Movie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  };

  render() {
    const { id, year, title, summary, medium_cover_image } = this.props.movie;
    const { className } = this.props;

    return (
      <Button className={cx("movieItem", className)}>
        <div>{id}</div>
        <h1>{title}</h1>
        <img src={medium_cover_image} alt="movie"/>
        <h2>{year}</h2>
        <p>{summary}</p>
      </Button>
    );
  }
}

export default withRouter(Movie);
