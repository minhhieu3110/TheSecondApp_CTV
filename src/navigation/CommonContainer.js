import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import router from '@router';
import {common} from 'screens/Common';
const CommonStack = createNativeStackNavigator();
const commonStack = [
  {name: router.TESTS},
  {name: router.NOT_YET_TEST},
  {name: router.COMPLETE_TEST},
  {name: router.FAIL_TEST},
  {name: router.CHOOSE_SERVICE},
  {name: router.DETAIL_INCOME},
  {name: router.DETAIL_JOB_NEW},
  {name: router.DETAIL_RECEIVE_JOB},
  {name: router.DETAIL_DOING_JOB},
  {name: router.DETAIL_COMPLETE_JOB},
  {name: router.DETAIL_CANCEL_JOB},
  {name: router.WALLET_OF_YOU},
  {name: router.RECHARGE},
  {name: router.INFO_RECHARGE},
  {name: router.WITHDRAW},
  {name: router.HISTORY_INCOME},
  {name: router.EVALUATE},
  {name: router.RANK_STAFF},
  {name: router.CONFIG_ACCOUNT},
  {name: router.SETTING},
  {name: router.SERVICE},
  {name: router.REFER_FRIEND},
  {name: router.HELP},
  {name: router.THEQUESTION},
  {name: router.TERMS_OF_USE},
  {name: router.PRIVACY_SECURITY},
  {name: router.MESSAGE},
  {name: router.DETAIL_MESSAGE},
  {name: router.NOTIFICATION},
  {name: router.REWARD_PROGRAM},
  {name: router.DETAIL_UPCOMMING},
];
export default function CommonContainer() {
  return (
    <CommonStack.Navigator screenOptions={{headerShown: false}}>
      {commonStack.map(stack => (
        <CommonStack.Screen
          key={stack.name}
          name={stack.name}
          component={common[stack.name]}
        />
      ))}
    </CommonStack.Navigator>
  );
}
