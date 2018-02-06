import React from 'react';
import { Row } from 'react-flexbox-grid';
import RaisedButton from 'material-ui/RaisedButton';
import Phone from 'material-ui/svg-icons/communication/phone';
import MapPointer from 'material-ui/svg-icons/maps/place';
import Email from 'material-ui/svg-icons/communication/email';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import ResumeBaseTheme from '../../theme/resumeBaseTheme';

const muiTheme = getMuiTheme({
  raisedButton: {
    margin: 10
  }
});

const ContactModal = props => (
  props.entries
    .filter(entry => entry.sys.contentType.sys.id === 'contact')
    .map(entry => (
      <RaisedButton
        key={entry.sys.id}
        label={entry.fields.name && entry.fields.name['en-US']}
        labelPosition="after"
        // icon={entry.fields.icon && entry.fields.icon['en-US']}
        secondary
        color="white"
        style={muiTheme.raisedButton}
        href={entry.fields.link && entry.fields.link['en-US']}
      />
    )));

export default ContactModal;
