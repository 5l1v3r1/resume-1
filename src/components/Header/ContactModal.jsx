import React from 'react';
import { Col } from 'react-flexbox-grid';
import RaisedButton from 'material-ui/RaisedButton';
import './ContactModal.css';
// import Phone from 'material-ui/svg-icons/communication/phone';
// import MapPointer from 'material-ui/svg-icons/maps/place';
// import Email from 'material-ui/svg-icons/communication/email';

const ContactModal = props => (
  props.entries
    .filter(entry => entry.sys.contentType.sys.id === 'contact')
    .map((entry, i) => (
      <Col key={entry.fields.name['en-US']}>
        <RaisedButton
          className="ContactModal__button"
          label={entry.fields.name && entry.fields.name['en-US']}
          labelPosition="after"
          // icon={entry.fields.icon && entry.fields.icon['en-US']}
          secondary
          href={entry.fields.link && entry.fields.link['en-US']}
        />
      </Col>
    )));

export default ContactModal;
