import React from 'react';
import PropTypes from 'prop-types';

const Achievements = ({ achievement1, achievement2, achievement3 }) => (
  <div>
    <h4>Achievements</h4>
    <ul>
      { achievement1 && <li> {achievement1}</li>}<p />
      { achievement2 && <li> {achievement2}</li>}<p />
      { achievement3 && <li> {achievement3}</li>}<p />
    </ul>
  </div>
);

Achievements.propTypes = {
  achievement1: PropTypes.string,
  achievement2: PropTypes.string,
  achievement3: PropTypes.string
};

Achievements.defaultProps = {
  achievement1: PropTypes.string,
  achievement2: PropTypes.string,
  achievement3: PropTypes.string
};

export default Achievements;
