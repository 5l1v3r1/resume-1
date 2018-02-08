import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Skills from '../Skills/Skills';

const muiTheme = getMuiTheme({
  card: {
    margin: 5
  }
});

class Job extends Component {
  constructor (props) {
    super();
    this.state = {
      isExpanded: false
    };
    this.handleExpandChange = this.handleExpandChange.bind(this);
  }

  componentWillMount () {
    this.setState({
      isExpanded: this.props.isInitJobExpanded
    });
  }

  handleExpandChange () {
    this.setState(prevState => ({
      isExpanded: !prevState.isExpanded
    }));
  }

  render () {
    const entry = this.props.entry.fields;
    const StartYear = (entry.startDate ? entry.startDate['en-US'].split('-')[0] : '');
    const tagline = (entry.tagline && `${entry.tagline['en-US']} ${StartYear ? ` – ${StartYear}` : ''}`);
    const isExpandable = entry.description && entry.description['en-US'] !== '';

    return (
      <Card
        style={muiTheme.card}
        expanded={this.state.isExpanded}
        onExpandChange={this.handleExpandChange}
      >
        <CardHeader
          title={entry.project && entry.project['en-US']}
          subtitle={tagline}
          actAsExpander={isExpandable}
          showExpandableButton={isExpandable}
        />
        <CardText expandable>
          {entry.description && entry.description['en-US']}<br />
          <br />

          {entry.recommendation && (
            <div>
              <h4>Recommendation</h4>
              {entry.recommendation['en-US']}
              <p />
               - <i>{entry.recommendationPerson['en-US']}</i>
            </div>
          )}
          <br />
          {entry.stackLabels && <h4>{entry.stackLabels['en-US'][0]} Stack</h4>}
          {entry.stack ? <Skills entry={entry} /> : null }
          <div style={{ clear: 'left' }} />
        </CardText>
        {/* {console.log(entry.startDate)} */}
      </Card>
    );
  }
}

const jobItemShape = {
  current: PropTypes.objectOf,
  description: PropTypes.objectOf,
  location: PropTypes.objectOf,
  project: PropTypes.string,
  section: PropTypes.array,
  stack: PropTypes.array,
  stackLabels: PropTypes.array,
  startDate: PropTypes.array,
  tagline: PropTypes.array
};

Job.propTypes = {
  entry: PropTypes.objectOf((PropTypes.shape(jobItemShape))).isRequired,
  isInitJobExpanded: PropTypes.bool
};

Job.defaultProps = {
  isInitJobExpanded: false
};

export default Job;
