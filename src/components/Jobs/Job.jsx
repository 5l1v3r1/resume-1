import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from 'material-ui/Avatar';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Skills from '../Skills/Skills';

const muiTheme = getMuiTheme({
  card: {
    margin: 5
  },
  chip: {
    marginRight: 20,
    float: 'left'
  },
  chipWrapper: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  headerRight: {
    float: 'right',
    position: 'absolute',
    right: '45px',
    top: '15px'
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
    const isExpandable = entry.description && entry.description['en-US'] !== '';

    return (
      <Card
        style={muiTheme.card}
        expanded={this.state.isExpanded}
        onExpandChange={this.handleExpandChange}
      >
        <CardHeader
          title={entry.project && entry.project['en-US']}
          subtitle={<Tagline entry={entry} />}
          actAsExpander={isExpandable}
          showExpandableButton={isExpandable}
          children={<HeaderRight entry={entry} />}
          // children={entry.stackLabels && entry.stackLabels['en-US'][0]}
          titleStyle={muiTheme.cardTitle}
          style={muiTheme.cardHeader}
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

const HeaderRight = ({ entry }) => (
  <div style={muiTheme.headerRight}>
    {entry.stackLabels &&
      <Chip key={entry.stackLabels} style={muiTheme.chip}>
        <Avatar size={32}>
          {entry.stackLabels['en-US'][0].charAt(0).toUpperCase()}
        </Avatar>
        {entry.stackLabels['en-US'][0]}
      </Chip>
    }
    {entry.startDate && <StartYear entry={entry} /> }
  </div>
);

const Tagline = ({ entry }) => (
  <i>
    {entry.tagline && entry.tagline['en-US']}
  </i>
);

const StartYear = ({ entry }) => (entry.startDate ? entry.startDate['en-US'].split('-')[0] : '');

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
