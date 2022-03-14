import { helper } from '@ember/component/helper';
import { htmlSafe as hSafe } from '@ember/template';

export default helper(function htmlSafe(positional /*, named*/) {
  return hSafe(positional);
});
