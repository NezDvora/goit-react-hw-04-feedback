import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.FriendList.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const btnArray = options.map((el, index) => (
    <button
      className={css.button}
      key={index}
      type="button"
      onClick={onLeaveFeedback}
    >
      {el}
    </button>
  ));

  return <div className={css.buttonContainer}>{btnArray}</div>;
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
