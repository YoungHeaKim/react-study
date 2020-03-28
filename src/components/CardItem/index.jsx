import React from 'react';
import { withRouter } from 'react-router-dom';
import styles from './stylesheet.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class CardItem extends React.Component {
  render() {
    const { className, item } = this.props;

    return (
      <div className={cx('cardItemWrap', className)}>
        <div className='imageWrap'>
          <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${item.profile_path}`}
               alt='castImage' className='castImage'/>
        </div>
        <div className='cardDetailWrap'>
          <div className='actorName'>배우:</div>
          <span className='cardName'>{item.name}</span>
          <div className='charName'>역할:</div>
          <span className='cardChracter'>{item.character}</span>
        </div>
      </div>
    );
  }
}

export default withRouter(CardItem);
