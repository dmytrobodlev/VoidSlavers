import * as R from 'ramda';
import moment from 'moment';
// helpers
import {
  notEquals,
  isNotNilAndNotEmpty } from './common';
///////////////////////////////////////////////////////////////////////////////////////////////////

// REFACTOR: with conventions

export const DEFAULT_DATE_FORMAT = 'DD/MM/YYYY';
export const DEFAULT_DATE_TIME_FORMAT = 'DD/MM/YYYY HH:mm';

export const makeMinutesFromMilliseconds = (minutes) => R.divide(minutes, R.multiply(1000, 60));
export const makeMillisecondsFromMinutes = (minutes) => R.multiply(minutes, R.multiply(1000, 60));

export const makeMomentInstance = (item) => (
  moment(item)
);

export const makeUTCMomentInstanceAccordingFormat = (item, format) => (
  moment.utc(item, format)
);

export const makeMomentInstanceAccordingFormat = (item, format) => (
  moment(item, format)
);

export const convertDateToFormat = (item, from, to) => (
  moment(item, from).format(to)
);

export const isMomentInstance = (item) => (
  moment.isMoment(item)
);

export const getCurrentDate = () => moment();
export const getCurrentDateUTC = () => moment().utc(getCurrentDate());

export const madeUTCMomentInstance = (item) => moment().utc(item);

export const getCurrentDateWithFormat = (format) => moment().format(format);

export const isValidMoment = (item) => (
  moment(item).isValid()
);

export const addMomentTime = (
  item,
  interval = 0,
  type = 'hours',
) => {
  if (isValidMoment(item)) return moment(item).add(interval, type);
  return item;
};

export const subtractMomentTime = (
  item,
  interval = 0,
  type = 'hours',
) => {
  if (isValidMoment(item)) return moment(item).subtract(interval, type);
  return item;
};

export const addMomentTimeWithFormat = (
  item,
  interval = 0,
  type = 'hours',
  format = DEFAULT_DATE_TIME_FORMAT,
) => {
  if (isValidMoment(item)) return addMomentTime(item, interval, type).format(format);
  return item;
};

export const subtractMomentTimeWithFormat = (
  item,
  interval = 0,
  type = 'hours',
  format = DEFAULT_DATE_TIME_FORMAT,
) => {
  if (isValidMoment(item)) {
    return moment(item).subtract(interval, type).format(format);
  }
  return item;
};

export const convertInstanceToLocalTime = (item) => (
  moment(item).format('LT')
);

export const convertInstanceToISOString = (item) => (
  moment(item).format()
);

export const convertISOStringToLocalTime = (item) => (
  moment(item).format('LT')
);

export const createLocalDateTimeFormat = (dateFormat) => (
  `${dateFormat} LT`
);

export const createTodayLocalDateTimeString = (dateFormat, timeValue) => (
  `${moment().format(dateFormat)} ${timeValue}`
);

// Example, moment('2018-04-14T14:08:13.577Z').format('MM/DD/YYYY LT')
export const createLocalDateTimeString = (ISOString, format) => (
  moment(ISOString).format(format)
);

export const createLocalDateTimeFromInstanceOrISOString = (item, format) => (
  moment(item).format(format)
);

export const createUTCDateTimeFromInstanceOrISOString = (item, format) => (
  moment(item).utc().format(format)
);

export const checkAndConvertInstanceToString = (item, format) => {
  if (isMomentInstance(item)) {
    return createLocalDateTimeFromInstanceOrISOString(item, format);
  }
  return item;
};

export const getNowTimeMomentObject = () => (
  moment().hour(0).minute(0)
);

export const getDateRange = (firstDate, secontDate, format = 'd') => (
  moment(secontDate).diff(moment(firstDate), format)
);

export const isAfter = (firstDate, secondDate) => (
  moment(firstDate).isAfter(secondDate)
);

export const isBefore = (firstDate, secondDate) => (
  moment(firstDate).isBefore(secondDate)
);

export const fromNow = (item) => (
  moment(item).fromNow()
);

export const getStartOfMonthDay = () => moment().startOf('month').format(DEFAULT_DATE_FORMAT);
export const getCurrentDay = () => moment().format(DEFAULT_DATE_FORMAT);

export const setMaxDate = (props, field) => {
  if (notEquals(field.type, 'calendar')) {
    return null;
  }
  if (isNotNilAndNotEmpty(field.maxDate)) {
    return field.maxDate;
  }
  if (R.and(
    isNotNilAndNotEmpty(field.maxDateField),
    isNotNilAndNotEmpty(R.path(['formValues', field.maxDateField], props)),
  )) {
    return makeMomentInstance(props.formValues[field.maxDateField]);
  }
  return null;
};

export const setMinDate = (props, field) => {
  if (notEquals(field.type, 'calendar')) {
    return null;
  }
  if (isNotNilAndNotEmpty(field.minDate)) {
    return field.minDate;
  }
  if (R.and(
    isNotNilAndNotEmpty(field.minDateField),
    isNotNilAndNotEmpty(R.path(['formValues', field.minDateField], props)),
  )) {
    return makeMomentInstance(props.formValues[field.minDateField]);
  }
  return null;
};
