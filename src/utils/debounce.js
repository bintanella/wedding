import _ from 'lodash';

const debounceValidation = _.debounce(function (callback) {
  callback()
}, 1000);

export {
  debounceValidation,
};
