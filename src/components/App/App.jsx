import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
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
import Menu from '../Menu/Menu';
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
      careerCategory: 'Apps'
    };
    this.handleMenuChange = this.handleMenuChange.bind(this);
  }

  componentDidMount () {
    client.sync({
      initial: true
      // content_type: 'job'
    })
      .then((response) => {
        const responseObj = JSON.parse(response.stringifySafe());
        const { entries } = responseObj;
        this.setState({ jobs: entries });
        // window.localStorage.setItem('contentfulEntries', JSON.stringify(entries));
        // const cachedJobs = window.localStorage.getItem('contentfulEntries');
      });
  }

  handleMenuChange (careerCategory) {
    this.setState({
      careerCategory
    });
    history.push(careerCategory);
  }

  render () {
    return (
      <Router history={history}>
        <MuiThemeProvider muiTheme={getMuiTheme(ResumeBaseTheme)}>
          <Grid fluid style={muiTheme.container}>
            <Header />
            <Headline />
            <Switch>
              <Route
                exact
                path="/:careerCategory/:project"
                render={({ match }) => (
                  <Menu
                    handleMenuChange={this.handleMenuChange}
                    initJobExpanded={match.params.project}
                    {...this.state}
                  />
                )}
              />
              <Route
                exact
                path="/:careerCategory"
                render={({ match }) => (
                  <Menu
                    handleMenuChange={this.handleMenuChange}
                    initJobExpanded={match.params.project}
                    {...this.state}
                  />
                )}
              />
              <Route
                exact
                path="/"
                render={({ match }) => (
                  <Menu
                    handleMenuChange={this.handleMenuChange}
                    initJobExpanded={match.params.project}
                    {...this.state}
                  />
                )}
              />
              <Route

                render={({ match }) => (
                  <Menu
                    handleMenuChange={this.handleMenuChange}
                    initJobExpanded={match.params.project}
                    {...this.state}
                  />
                )}
              />
            </Switch>
            <Education {...this.state} />
            <Footer />
          </Grid>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
