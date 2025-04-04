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
