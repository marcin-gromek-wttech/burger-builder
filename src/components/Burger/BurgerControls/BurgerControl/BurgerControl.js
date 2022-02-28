import PropTypes from 'prop-types';
import React from 'react';
import classes from './BurgerControl.module.css';

const BurgerControl = ({
  label, added, removed, disabledNote
}) => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>{label}</div>
    <button type="button" className={classes.More} onClick={added}>
      &#43;
    </button>

    <button
      type="button"
      className={classes.Less}
      disabled={disabledNote}
      onClick={removed}
    >
      &minus;
    </button>
  </div>
);

export default BurgerControl;

BurgerControl.propTypes = {
  removed: PropTypes.func.isRequired,
  added: PropTypes.func.isRequired,
  disabledNote: PropTypes.bool,
  label: PropTypes.string,
};

BurgerControl.defaultProps = {
  label: 'Total Price: ',
  disabledNote: false
};
