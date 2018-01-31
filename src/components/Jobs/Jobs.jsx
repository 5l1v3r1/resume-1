import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

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
    const job = this.props.job.fields;

    const startYear = () =>
      (job.startDate['en-US'].split('-')[0]);

    return (
      <div>
        {job.project ? (
          <Card
            style={muiTheme.card}
            expanded={this.state.isExpanded}
            onExpandChange={this.handleExpandChange}
            // {handleExpandChange}
          >
            <CardHeader
              title={job.project ? job.project['en-US'] : null}
              subtitle={job.tagline ? job.tagline['en-US'] : null}
              actAsExpander
              showExpandableButton
            />
            <CardText expandable>
              {job.description ? job.description['en-US'] : null}<br />
              <br />
              {job.recommendation
                ? `${job.recommendation['en-US']} - ${job.recommendationPerson['en-US']}`
                : null }
              <br />
              <FlatButton label="stack" secondary />
              {job.startDate
                ? <FlatButton label={startYear(job)} secondary />
                : null}
            </CardText>
          </Card>
        ) : null }
      </div>
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
  job: PropTypes.objectOf((PropTypes.shape(jobItemShape))).isRequired,
  isInitJobExpanded: PropTypes.bool
};

Job.defaultProps = {
  isInitJobExpanded: false
};

const Jobs = props => (
  props.jobs
    .filter(job => job.fields.project)
    .map((job, i) => (
      <Job
        id={i}
        job={job}
        isInitJobExpanded={(job.fields.project['en-US'] === props.initJobExpanded)}
        key={i}
      />
    )));

export default Jobs;
