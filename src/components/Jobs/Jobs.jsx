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
        {job.project && (
          <Card
            style={muiTheme.card}
            expanded={this.state.isExpanded}
            onExpandChange={this.handleExpandChange}
          >
            <CardHeader
              title={job.project && job.project['en-US']}
              subtitle={job.tagline && job.tagline['en-US']}
              actAsExpander
              showExpandableButton
            />
            <CardText expandable>
              {job.description && job.description['en-US']}<br />
              <br />
              {job.recommendation &&
                `${job.recommendation['en-US']} - ${job.recommendationPerson['en-US']}`
              }
              <br />
              <FlatButton label="stack" secondary />
              {job.startDate && <FlatButton label={startYear(job)} secondary />}
            </CardText>
          </Card>
        ) }
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
    .filter(job => job.fields.careerCategory &&
      props.careerCategory === job.fields.careerCategory['en-US'][0]
      // .some((career, job, careerCategory, i) => career === job.fields.careerCategory['en-US']))
    // .some((career, job, i) => career === job.fields.careerCategory['en-US'])
      // .forEach(job, job.fields.careerCategory['en-US']))
    // .map(career => carreer === 'Apps')
    )
    .map((job, i) => (
      <div>
        <Job
          id={i}
          job={job}
          isInitJobExpanded={(job.fields.project['en-US'] === props.initJobExpanded)}
          key={job.fields.project['en-US']}
        />
        {console.log(job.fields.careerCategory['en-US']
          .find((career, i) => <div key={i}>{career}</div>))
        }
      </div>
    )));

export default Jobs;
