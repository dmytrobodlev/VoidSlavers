import R from 'ramda';
// theme
import Theme from '../theme';
// //////////////////////////////////////////////////////////////////////////////

export const renderBorderColor = (props) => {
  if (R.and(props.error, props.touched)) {
    return Theme.form.input.errorBorderColor;
  }
  return Theme.form.input.borderColor;
};

export const renderBgColor = (props) => {
  if (props.disabled) {
    return Theme.form.input.disabledBgColor;
  }
  return Theme.form.input.bgColor;
};
