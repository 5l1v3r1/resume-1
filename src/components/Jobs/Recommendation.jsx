import React from 'react';
import PropTypes from 'prop-types';

const Recommendation = ({ recommendation, recommendationPerson }) => (
  <div>
    <h4>Recommendation</h4>
    <i>
      {recommendation}
      <p />
          - {recommendationPerson}
    </i>
  </div>
);

Recommendation.propTypes = {
  recommendation: PropTypes.string,
  recommendationPerson: PropTypes.string
};

Recommendation.defaultProps = {
  recommendation: null,
  recommendationPerson: null
};

export default Recommendation;
