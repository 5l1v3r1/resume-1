import React from 'react';
import PropTypes from 'prop-types';

const Achievements = ({ achievement1, achievement2, achievement3 }) => (
  <div>
    <h4>Achievements</h4>
    <ul>
      { achievement1 && <li> {achievement1}</li>}
      { achievement2 && <li> {achievement2}</li>}
      { achievement3 && <li> {achievement3}</li>}
    </ul>
  </div>
);

Achievements.propTypes = {
  achievement1: PropTypes.string,
  achievement2: PropTypes.string,
  achievement3: PropTypes.string
};

Achievements.defaultProps = {
  achievement1: PropTypes.function || null,
  achievement2: PropTypes.function || null,
  achievement3: PropTypes.function || null
};

export default Achievements;
