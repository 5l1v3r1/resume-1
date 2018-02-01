import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import { Grid } from 'react-flexbox-grid';
import * as contentful from 'contentful';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import { deliveryAccessToken, spaceId } from '../../config';
import history from '../../history';
import ResumeBaseTheme from '../../resumeBaseTheme';
import Education from '../Education/Education';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Headline from '../Header/Headline';
import MenuRouter from '../Menu/MenuRouter';
import LeftHeadline from '../LeftHeadline';
import './App.css';

const muiTheme = getMuiTheme({
  container: {
    position: 'relative',
    maxWidth: '940px',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block'
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
      jobs: [],
      jobType: 'Apps'
    };
    this.handleMenuChange = this.handleMenuChange.bind(this);
  }

  componentDidMount () {
    client.sync({
      initial: true
      // content_type: 'entry'
    })
      .then((response) => {
        const responseObj = JSON.parse(response.stringifySafe());
        const { entries } = responseObj;
        this.setState({ jobs: entries });
        // window.localStorage.setItem('contentfulEntries', JSON.stringify(entries));
        // const cachedJobs = window.localStorage.getItem('contentfulEntries');
      });
  }

  handleMenuChange (jobType) {
    this.setState({
      jobType
    });
    history.push(`/${jobType}`);
    // could be fixed here
  }

  render () {
    return (
      <Router history={history}>
        <MuiThemeProvider muiTheme={getMuiTheme(ResumeBaseTheme)}>
          <Grid fluid style={muiTheme.container}>
            <Header />
            <LeftHeadline>
              <Headline name={this.state.jobType} {...this.state} />
            </LeftHeadline>
            <LeftHeadline>
              <MenuRouter
                name="Key Projects"
                handleMenuChange={this.handleMenuChange}
                {...this.state}
              />
            </LeftHeadline>
            <LeftHeadline>
              <Education name="Education" {...this.state} />
            </LeftHeadline>
            <Footer />
          </Grid>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
