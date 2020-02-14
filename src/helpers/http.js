import R from 'ramda';
// helpers
import * as H from './';
// /////////////////////////////////////////////////////////////////////////////////////////////////

export const isResponseSuccess = response => {
  if (R.isNil(response)) return false;
  const { status } = response;
  if (R.isNil(status)) return false;
  return R.and(R.gte(status, 200), R.lt(status, 300));
};

export const showResponseError = error => {
  const {
    response: { data },
  } = error;
  const { invalidFields, message, errors, error_description } = data;
  if (H.isNotNil(invalidFields)) {
    invalidFields.map(field => H.showToast('error', `${field.fieldName}: ${field.message}`, true));
  } else if (H.isNotNil(message)) {
    if (H.isNotNilAndNotEmpty(errors)) {
      errors.map(error => H.showToast('error', error, true));
    } else {
      H.showToast('error', message, true);
    }
  } else if (H.isNotNil(error_description)) {
    H.showToast('error', error_description, true);
  }
};
