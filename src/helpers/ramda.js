import R from 'ramda';
//  /////////////////////////////////////////////////////////////////////////////////////////////////

export const isArray = R.is(Array);
export const isString = R.is(String);
export const isNumber = R.is(Number);
export const isObject = R.is(Object);
export const isTrue = R.equals(true);
export const isBoolean = R.is(Boolean);
export const isFalse = R.equals(false);
export const isFunction = R.is(Function);
export const mapIndexed = R.addIndex(R.map);
export const isNotNil = R.complement(R.isNil);
export const notEquals = R.complement(R.equals);
export const isNotEmpty = R.complement(R.isEmpty);
export const isAllTrue = (...args) => R.all(isTrue, args);
export const isAllFalse = (...args) => R.all(isFalse, args);
export const isNilOrEmpty = value => R.or(R.isNil(value), R.isEmpty(value));
export const isNotNilAndNotEmpty = value => R.and(isNotNil(value), isNotEmpty(value));
