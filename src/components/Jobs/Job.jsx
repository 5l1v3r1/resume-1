import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Achievements from './Achievements';
import Recommendation from './Recommendation';
import Skills from '../Skills/Skills';
import AlignRight from '../../theme/AlignRight';
import AlignMiddle from '../../theme/AlignMiddle';
import StackChip from '../StackChip';

const muiTheme = getMuiTheme({
  card: {
    margin: 5
  },
  startDateWrapper: {
    position: 'absolute',
    right: 0,
    top: '50%',
    transform: 'translate(0,-50%)'
  }
});

const StartYear = ({ startDate }) => (startDate ? startDate.split('-')[0] : '');

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
          titleStyle={muiTheme.cardTitle}
          style={muiTheme.cardHeader}
        >
          <AlignRight>
            <AlignMiddle right>
              <StackChip stackLabels={entry.stackLabels['en-US']} />
              {entry.startDate && <StartYear startDate={entry.startDate['en-US']} /> }
            </AlignMiddle>
          </AlignRight>
        </CardHeader>
        <CardText expandable>
          {entry.description && entry.description['en-US']}<br />
          <br />
          {entry.recommendation &&
            <Recommendation recommendation={entry.recommendation['en-US']} recommendationPerson={entry.recommendationPerson['en-US']} />
          }
          <br />
          {entry.achievement1 &&
            <Achievements
              achievement1={entry.achievement1 && entry.achievement1['en-US']}
              achievement2={entry.achievement2 && entry.achievement2['en-US']}
              achievement3={entry.achievement3 && entry.achievement3['en-US']}
            />
          }
          {entry.stackLabels && <h4>{entry.stackLabels['en-US'][0]} Stack</h4>}
          {entry.stack ? <Skills entry={entry} /> : null }
          <div style={{ clear: 'left' }} />
        </CardText>
      </Card>
    );
  }
}

const Tagline = ({ entry }) => (<div>{entry.tagline && entry.tagline['en-US']}</div>);

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

Tagline.propTypes = {
  entry: PropTypes.objectOf((PropTypes.shape(jobItemShape))).isRequired
};

export default Job;
