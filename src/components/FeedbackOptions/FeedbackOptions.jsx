import PropTypes from 'prop-types';
import React from 'react';

const FeedbackOptions = ({ onLeaveFeedback }) => (
  <>
    <button type="button" data-name="good" onClick={onLeaveFeedback}>
      Good
    </button>
    <button type="button" data-name="neutral" onClick={onLeaveFeedback}>
      Neutral
    </button>
    <button type="button" data-name="bad" onClick={onLeaveFeedback}>
      Bad
    </button>
  </>
);

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func
};

export default FeedbackOptions;
