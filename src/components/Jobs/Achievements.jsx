import React from 'react';
import PropTypes from 'prop-types';

const Achievements = ({ entry }) => (
  <div>
    {entry.achievement1 && (
      <div>
        <h4>Achievements</h4>
        <ul>
          { entry.achievement1 && <li> {entry.achievement1['en-US']}</li>}<p />
          { entry.achievement2 && <li> {entry.achievement2['en-US']}</li>}<p />
          { entry.achievement3 && <li> {entry.achievement3['en-US']}</li>}<p />
        </ul>
      </div>
    )
    }
  </div>
);

const jobItemShape = {
  achievement: PropTypes.string
};

Achievements.propTypes = {
  entry: PropTypes.objectOf((PropTypes.shape(jobItemShape))).isRequired
};

export default Achievements;
