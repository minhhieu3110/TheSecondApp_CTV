import router from '@router';
import Tests from './Tests';
import NotYetTest from './DetailTest/NotYetTest';
import CompleteTest from './DetailTest/CompleteTest';
import FailTest from './DetailTest/FailTest';
import ChooseService from './ChooseService';
import DetailIncome from './DetailIncome';
import JobNew from 'screens/Bottom/HomeScreen/common/JobNew';

export const common = {
  [router.TESTS]: Tests,
  [router.NOT_YET_TEST]: NotYetTest,
  [router.COMPLETE_TEST]: CompleteTest,
  [router.FAIL_TEST]: FailTest,
  [router.CHOOSE_SERVICE]: ChooseService,
  [router.DETAIL_INCOME]: DetailIncome,
  [router.JOB_NEW]: JobNew,
};
