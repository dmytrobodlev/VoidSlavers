import R from "ramda";
import titleCase from "voca/title_case";
import upperCase from "voca/upper_case";
import lowerCase from "voca/lower_case";
// /////////////////////////////////////////////////////////////////////////////////////////////////

// export const showToast = (type, message, withoutLocale, timer) => {
//   const defaultTimer = 5000;
//   const showTime = R.or(timer, defaultTimer);
//   if (withoutLocale) return ToastsStore[type](message, showTime);
//   ToastsStore[type](message, showTime);
// };

export const convertToCase = (text, caseAction) => {
  const caseActionMap = {
    titleCase,
    upperCase,
    lowerCase
  };
  const caseActionFn = caseActionMap[caseAction];
  if (R.and(caseAction, R.is(Function, caseActionFn)))
    return caseActionFn(text);

  return text;
};

export const formatMinutes = minutes => {
  if (minutes % 60 === 0) {
    return `${minutes / 60} h`;
  } else if (minutes < 60) {
    return `${minutes} m`;
  } else {
    return `${Math.floor(minutes / 60)} h ${minutes % 60} m`;
  }
};
