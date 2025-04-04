import router from '@router';
import JobNew from './JobNew';
import Receive from './Receive';
import Doing from './Doing';
import Complete from './Complete';
import Cancel from './Cancel';

export const top = {
  [router.NEW_JOB]: JobNew,
  [router.RECEIVE_JOB]: Receive,
  [router.DOING_JOB]: Doing,
  [router.COMPLETE_JOB]: Complete,
  [router.CANCEL_JOB]: Cancel,
};
