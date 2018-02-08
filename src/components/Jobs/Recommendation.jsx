import React from 'react';
import PropTypes from 'prop-types';

const Recommendation = ({ entry }) => (
  <div>
    {entry.recommendation && (
      <div>
        <h4>Recommendation</h4>
        <i>
          {entry.recommendation['en-US']}
          <p />
          - {entry.recommendationPerson['en-US']}
        </i>
      </div>
    )}
  </div>
);

const jobItemShape = {
  recommendation: PropTypes.string,
  recommendationPerson: PropTypes.string
};

Recommendation.propTypes = {
  entry: PropTypes.objectOf((PropTypes.shape(jobItemShape))).isRequired
};

export default Recommendation;
