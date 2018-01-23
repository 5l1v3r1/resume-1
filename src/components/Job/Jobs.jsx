import React from 'react';
import Job from './Job';

const Jobs = props =>
  (props.jobs.map((job, i) => (
    <Job key={i} id={i} job={job} isJobExpanded={false} />
  )));

export default Jobs;
