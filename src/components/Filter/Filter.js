import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import pop from '../../transition/pop.module.css';
import Styles from './Filter.module.css';

const Filter = ({ htmlFor, onChange, value }) => (
  <CSSTransition in timeout={250} unmountOnExit classNames={pop}>
    <section className={Styles.section__filter}>
      <form className={Styles.form__filter}>
        <label htmlFor={htmlFor} className={Styles['form__name-title']}>
          <h4>Fined contacts by name</h4>
          <input
            className={Styles['form__name-input']}
            onChange={onChange}
            value={value}
            name="filter"
            type="text"
            placeholder="Input fined contacts"
          />
        </label>
      </form>
    </section>
  </CSSTransition>
);
Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
};
export default Filter;
