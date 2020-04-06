import React from 'react';
import { withRouter } from 'react-router-dom';
import './stylesheet.scss';
import dragon from 'Svg/dragon-solid.svg';
import { Button } from 'components/index';
import classNames from 'classnames/bind';
import styles from './stylesheet.scss';
import { endpoint } from 'common/env';

const cx = classNames.bind(styles);

class Header extends React.Component {
  render() {
    const { className } = this.props;
    return (
      <Button to={endpoint} className={cx('logoButton', className)}>
        <img className='logoImg' src={dragon} alt='logo'/>
        <h1>영화소개 페이지</h1>
      </Button>
    );
  }
}

export default withRouter(Header);
