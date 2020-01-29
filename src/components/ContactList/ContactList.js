import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Styles from './ContactList.module.css';
import slide from '../../transition/slide.module.css';

const ContactList = ({ filterContacts, onClickDelete }) => (
  <>
    <TransitionGroup component="ul" className={Styles.list}>
      {filterContacts.map(e => (
        <CSSTransition
          key={e.id}
          timeout={250}
          unmountOnExit
          classNames={slide}
        >
          <li key={e.id} className={Styles.item}>
            <div className={Styles['item-wrap']}>
              <span className={Styles['item-name']}>{e.name}:</span>
              <span className={Styles['item-number']}>{e.number}</span>
            </div>
            <button
              className={Styles.button}
              type="button"
              onClick={onClickDelete}
              id={e.id}
            >
              X
            </button>
          </li>
        </CSSTransition>
      ))}
    </TransitionGroup>
  </>
);
ContactList.propTypes = {
  filterContacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClickDelete: PropTypes.func.isRequired,
};
export default ContactList;
