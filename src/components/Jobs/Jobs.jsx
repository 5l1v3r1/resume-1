import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
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
    const StartYear = () => entry.startDate && <FlatButton label={(entry.startDate['en-US'].split('-')[0])} secondary />;

    return (
      <Card
        style={muiTheme.card}
        expanded={this.state.isExpanded}
        onExpandChange={this.handleExpandChange}
      >
        <CardHeader
          title={entry.project && entry.project['en-US']}
          subtitle={entry.tagline && entry.tagline['en-US']}
          actAsExpander
          showExpandableButton
        />
        <CardText expandable>
          {entry.description && entry.description['en-US']}<br />
          <br />
          {entry.recommendation &&
            `${entry.recommendation['en-US']} - ${entry.recommendationPerson['en-US']}`
          }
          <br />
          <FlatButton label={entry.stackLabels['en-US'][0]} secondary />
          <Skills entry={entry} />
          <div style={{ clear: 'left' }} />
          <br />
          <StartYear />
        </CardText>
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

const Jobs = props => (
  props.entries
    .filter(entry => entry.sys.contentType.sys.id === 'job' &&
    props.jobType === entry.fields.jobType['en-US']))
  .map((entry, i) => (
    <Job
      id={entry.sys.id}
      entry={entry}
      isInitJobExpanded={(entry.fields.project['en-US'] === props.initJobExpanded)}
      key={entry.sys.id}
    />
  ));

export default Jobs;
