import React from 'react';
import { Route } from 'react-router-dom';
import { Row, Col } from 'react-flexbox-grid';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import RaisedButton from 'material-ui/RaisedButton';
import Phone from 'material-ui/svg-icons/communication/phone';
import MapPointer from 'material-ui/svg-icons/maps/place';
import Email from 'material-ui/svg-icons/communication/email';

const muiTheme = getMuiTheme({
  raisedButton: {
    margin: '21px'
  },
  careerHeadline: {
    margin: '30px 0'
  }
});

const summary = [
  {
    id: 0,
    careerCategory: 'home',
    careerHeadline: 'Hi',
    careerHeadlineDescription: "I love hearing great ideas, and I couldn’t help but notice that I was always ‘that guy’ in the group that helped everyone get projects off the ground. My fascination with the online world has kept me alert to developments in technology. As a result, I developed and absorbed a useful cache of skills and knowledge. 10 years later, our services have grown beyond websites. I'm always looking forward to solving a new problem. So, how can we help solve yours?"
  },
  { id: 1, careerCategory: 'Apps', careerHeadline: 'Apps careerHeadline' },
  { id: 2, careerCategory: 'Websites', careerHeadline: 'Websites careerHeadline' },
  { id: 3, careerCategory: 'Product', careerHeadline: 'Product careerHeadline' },
  { id: 4, careerCategory: 'Film', careerHeadline: 'Film careerHeadline' }
];

const HomecareerHeadline = () => (
  <Col>
    <h1>{ summary[0].careerHeadline }</h1>
    { summary[0].careerHeadlineDescription }
  </Col>
);

const AppscareerHeadline = () => (
  <Col>
    <h1> { summary[1].careerCategory } Experience</h1>
    { summary[1].careerHeadline}
  </Col>
);
const WebsitescareerHeadline = () => (
  <Col>
    <h1> { summary[2].careerCategory } Experience</h1>
    { summary[2].careerHeadline}
  </Col>

);
const ProductcareerHeadline = () => (
  <Col>
    <h1> { summary[3].careerCategory } Development</h1>
    { summary[3].careerHeadline}
  </Col>
);
const FilmcareerHeadline = () => (
  <div>
    <h1> { summary[4].careerCategory } Experience</h1>
    { summary[4].careerHeadline}
  </div>
);

const ContactModal = () => (
  <div>
    <h1> Get in Touch </h1>
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

const Headline = () => (
  <Row style={muiTheme.careerHeadline}>
    <Route exact path="/" component={HomecareerHeadline} />
    <Route path="/Apps" component={AppscareerHeadline} />
    <Route path="/Websites" component={WebsitescareerHeadline} />
    <Route path="/Product" component={ProductcareerHeadline} />
    <Route path="/Film" component={FilmcareerHeadline} />
    <Route path="/Contact" component={ContactModal} />
  </Row>
);

export default Headline;
