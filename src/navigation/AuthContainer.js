import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import router from '@router';
import {auth} from 'screens/Auth';
const authStack = [
  {name: router.ONBOARDING_SCREEN},
  {name: router.LOGIN_SCREEN},
  {name: router.REGISTER_SCREEN},
  {name: router.INPUT_OTP},
  {name: router.INPUT_INFORMATION},
  {name: router.THE_QUESTION_REGISTER},
  {name: router.UPDATE_INFORMATION},
  {name: router.UPDATE_CITIZEN_ID},
  {name: router.COMPLETE_REGISTER},
];
export default function AuthContainer() {
  const AuthStack = createNativeStackNavigator();
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      {authStack.map(stack => (
        <AuthStack.Screen
          key={stack.name}
          name={stack.name}
          component={auth[stack.name]}
        />
      ))}
    </AuthStack.Navigator>
  );
}
