import React from 'react';
import Job from './Job';

const Jobs = props => (
  props.entries
    .filter(entry => entry.sys.contentType.sys.id === 'job' &&
    props.jobType === entry.fields.jobType['en-US'])
    .sort((a, b) => new Date(b.fields.startDate['en-US']) - new Date(a.fields.startDate['en-US']))
    .map((entry, i) => (
      <Job
        id={entry.sys.id}
        entry={entry}
        isInitJobExpanded={(entry.fields.project['en-US'] === props.initJobExpanded)}
        key={entry.sys.id}
      />
    )));

export default Jobs;
