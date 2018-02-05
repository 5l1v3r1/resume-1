import React from 'react';
import FlatButton from 'material-ui/FlatButton';

// TODO: add const formatDate

export const StartYear = ({ date }) => (
  <div>
    { date ? date['en-US'].split('-')[0] : ''}
  </div>
);
export const YearButton = ({ date }) => (
  date ? <FlatButton label={StartYear({ date })} secondary /> : null);

// const entry = this.props.entry.fields;
// const formatYear = date => date.split('-')[0];
// export const StartYear = (entry.startDate ? entry.startDate['en-US'].split('-')[0] : '');
// export const StartYearButton = () => (
//   entry.startDate ? <FlatButton label={StartYear} secondary /> : null);
// export const StartYear = (entry.startDate ? formatYear(entry.startDate['en-US']) : '');
// export const StartYearButton = () => (
//   entry.startDate ? <FlatButton label={StartYear} secondary /> : null
// );

export default YearButton;
