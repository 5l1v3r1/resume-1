import React from 'react';
import { Row } from 'react-flexbox-grid';
import RaisedButton from 'material-ui/RaisedButton';
import Phone from 'material-ui/svg-icons/communication/phone';
import MapPointer from 'material-ui/svg-icons/maps/place';
import Email from 'material-ui/svg-icons/communication/email';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
  raisedButton: {
    margin: 10
  }
});

const ContactModal = () => (
  <div>
    <h3> Get in Touch </h3>
    <Row center="xs">
      <RaisedButton
        label="0403989033"
        labelPosition="after"
        icon={<Phone />}
        secondary
        style={muiTheme.raisedButton}
        href="tel:+61403989033"
      />
      <RaisedButton
        label="phil@tgrrr.com"
        labelPosition="after"
        icon={<Email />}
        secondary
        style={muiTheme.raisedButton}
        href="mailto:phil@tgrrr.com"
      />
      <RaisedButton
        label="Melbourne, Australia"
        labelPosition="after"
        icon={<MapPointer />}
        style={muiTheme.raisedButton}
        href="https://www.google.com.au/maps/place/1%2F377+Sydney+Rd,+Coburg+VIC+3058/@-37.7446427,144.9636139,17z/data=!3m1!4b1!4m5!3m4!1s0x6ad644b3c1b5fdeb:0x5307945657c3381b!8m2!3d-37.744647!4d144.9658026"
      />
    </Row>
  </div>
);

export default ContactModal;
