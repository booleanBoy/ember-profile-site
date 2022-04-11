import { helper } from '@ember/component/helper';

export default helper(function capitaliseFirstWord(args /*, named*/) {
  const [string] = args;
  return string.charAt(0).toUpperCase() + string.substring(1);
});
