import * as R from 'ramda';
///////////////////////////////////////////////////////////////////////////////////////////////////
// TODO: check is predicate boolean
export const ifElse = (predicate, ifSt, elseSt) => {
  if (predicate) return ifSt;
  return elseSt;
};

export const optionsToMapObject = (options, func = R.prop('label')) => R.compose(
  R.map(func),
  R.indexBy(R.prop('value')),
)(options);

export const distance = (lat1, lon1, lat2, lon2) => {
  const R = 6371;
  const dLat = deg2rad(lat2-lat1);
  const dLon = deg2rad(lon2-lon1);
  const a =
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon/2) * Math.sin(dLon/2)
  ;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  const d = R * c;
  return d;
};

function deg2rad(deg) {
  return deg * (Math.PI/180);
}

export const madeTimeStringFromMinutes = (minutes) => {
  let leftMinutes = R.modulo(minutes, 60);
  const hours = R.subtract(minutes, leftMinutes);
  leftMinutes = ifElse(R.equals(leftMinutes, 0), '00', leftMinutes);
  return R.join(':', [R.divide(hours ,60), leftMinutes]);
};
