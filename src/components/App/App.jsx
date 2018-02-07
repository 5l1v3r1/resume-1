import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import { Grid } from 'react-flexbox-grid';
import * as contentful from 'contentful';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import { deliveryAccessToken, spaceId } from '../../config';
import history from '../../history';
import ResumeBaseTheme from '../../theme/resumeBaseTheme';
import Education from '../Education/Education';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Headline from '../Header/Headline';
import MenuRouter from '../Menu/MenuRouter';
import LeftHeadline from '../LeftHeadline';

const muiTheme = getMuiTheme({
  container: {
    position: 'relative',
    maxWidth: '940px',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block'
  },
  raisedButton: {
    color: '#000000'
  }
});

const client = contentful.createClient({
  space: 'mvpdp8cmlaoe', // space: { spaceId },
  accessToken: '7efe7a99c581fa03fbb489e69abd8e1e5b3dc3b8b8752abc6c0bcc78d5512a14' // accessToken: { deliveryAccessToken }
});

class App extends Component {
  constructor () {
    super();
    this.state = {
      entries: [],
      jobType: 'Apps',
      headline: 'About'
    };
    this.handleMenuChange = this.handleMenuChange.bind(this);
    this.handleContactClick = this.handleContactClick.bind(this);
  }

  componentDidMount () {
    client.sync({
      initial: true
    })
      .then((response) => {
        const responseObj = JSON.parse(response.stringifySafe());
        const { entries } = responseObj;
        this.setState({ entries });
      });
  }

  handleContactClick () {
    this.setState({
      headline: 'Contact'
    });
    history.push('/Contact');
  }

  handleMenuChange (jobType) {
    this.setState({
      jobType,
      headline: jobType
    });
    history.push(`/${jobType}`);
  }

  render () {
    return (
      <Router history={history}>
        <MuiThemeProvider muiTheme={getMuiTheme(ResumeBaseTheme)}>
          <Grid fluid style={muiTheme.container}>
            <Header handleContactClick={this.handleContactClick} />
            <LeftHeadline name={this.state.jobType}>
              <Headline {...this.state} />
            </LeftHeadline>
            <LeftHeadline name="Key Projects">
              <MenuRouter
                handleMenuChange={this.handleMenuChange}
                {...this.state}
              />
            </LeftHeadline>
            <LeftHeadline name="Education" >
              <Education {...this.state} />
            </LeftHeadline>
            <Footer />
          </Grid>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
