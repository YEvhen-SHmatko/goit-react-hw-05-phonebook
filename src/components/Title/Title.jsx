import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import Styles from './Title.module.css';
import '../../transition/title-appear.css';

const Title = ({ animation, size, children }) => {
  const styles = {
    fontSize: `${size}px`,
    padding: '10px 0',
  };
  return (
    <>
      {animation ? (
        <CSSTransition in timeout={500} unmountOnExit classNames="title" appear>
          <div className={Styles.wrapTitle}>
            <h3 style={styles}>{children}</h3>
          </div>
        </CSSTransition>
      ) : (
        <div className={Styles.wrapTitle}>
          <h3 style={styles}>{children}</h3>
        </div>
      )}
    </>
  );
};
Title.defaultProps = {
  animation: false,
};
Title.propTypes = {
  animation: PropTypes.bool,
  size: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};
export default Title;
