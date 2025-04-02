import router from '@router';
import HomeScreen from './HomeScreen';
import IncomeScreen from './IncomeScreen';
import HistoryScreen from './HistoryScreen';
import AccountScreen from './AccountScreen';

export const bottom = {
  [router.HOME_SCREEN]: HomeScreen,
  [router.INCOME_SCREEN]: IncomeScreen,
  [router.HISTORY_SCREEN]: HistoryScreen,
  [router.ACCOUNT_SCREEN]: AccountScreen,
};
