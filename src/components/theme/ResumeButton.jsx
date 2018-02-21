import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Open from 'material-ui/svg-icons/action/open-in-new';

const ResumeButton = () => (
  <RaisedButton
    label="View CV at resume.botbotdot.com"
    secondary
    className="Header__Button-contact"
    labelPosition="before"
    icon={<Open />}
  />
);

export default ResumeButton;
