import router from '@router';
import Tests from './Tests';
import NotYetTest from './DetailTest/NotYetTest';
import CompleteTest from './DetailTest/CompleteTest';
import FailTest from './DetailTest/FailTest';
import ChooseService from './ChooseService';
import DetailIncome from './DetailIncome';
import Detail_NewJob from './DetailJob/Detail_NewJob';
import Detail_ReceiveJob from './DetailJob/Detail_RecceiveJob';
import Detail_DoingJob from './DetailJob/Detail_DoingJob';
import Detail_CompleteJob from './DetailJob/Detail_CompleteJob';
import Detail_CancelJob from './DetailJob/Detail_CancelJob';
import Wallet from './Wallet';
import Recharge from './Recharge';
import InfoRecharge from './Recharge/common/RechargeInfo';
import Withdraw from './Withdraw';
import History from './History';
import Evaluate from './Evaluate';
import RankStaff from './RankStaff';

export const common = {
  [router.TESTS]: Tests,
  [router.NOT_YET_TEST]: NotYetTest,
  [router.COMPLETE_TEST]: CompleteTest,
  [router.FAIL_TEST]: FailTest,
  [router.CHOOSE_SERVICE]: ChooseService,
  [router.DETAIL_INCOME]: DetailIncome,
  [router.DETAIL_JOB_NEW]: Detail_NewJob,
  [router.DETAIL_RECEIVE_JOB]: Detail_ReceiveJob,
  [router.DETAIL_DOING_JOB]: Detail_DoingJob,
  [router.DETAIL_COMPLETE_JOB]: Detail_CompleteJob,
  [router.DETAIL_CANCEL_JOB]: Detail_CancelJob,
  [router.WALLET_OF_YOU]: Wallet,
  [router.RECHARGE]: Recharge,
  [router.INFO_RECHARGE]: InfoRecharge,
  [router.WITHDRAW]: Withdraw,
  [router.HISTORY_INCOME]: History,
  [router.EVALUATE]: Evaluate,
  [router.RANK_STAFF]: RankStaff,
};
