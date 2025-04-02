import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './navigationRef';
import router from '@router';
import AuthContainer from './AuthContainer';
import CommonContainer from './CommonContainer';
import BottomContainer from './BottomContainer';

export default function MainStack() {
  const RootStack = createNativeStackNavigator();
  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator screenOptions={{headerShown: false}}>
        <RootStack.Screen
          name={router.AUTH_CONTAINER}
          component={AuthContainer}
        />
        <RootStack.Screen
          name={router.BOTTOM_CONTAINER}
          component={BottomContainer}
        />
        <RootStack.Screen
          name={router.COMMON_CONTAINER}
          component={CommonContainer}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
