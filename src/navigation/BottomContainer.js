import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import {icon} from 'assets';
import router from '@router';
import {bottom} from 'screens/Bottom';
import {COLORS, FONTS} from '@theme';
import {Block} from '@components';

const Tab = createBottomTabNavigator();

const getTabBarIcon = (route, focused) => {
  switch (route.name) {
    case router.HOME_SCREEN:
      return focused ? icon.icon_home_focus : icon.icon_home;
    case router.INCOME_SCREEN:
      return focused ? icon.icon_income_focus : icon.icon_income;
    case router.HISTORY_SCREEN:
      return focused ? icon.icon_history_focus : icon.icon_history;
    case router.ACCOUNT_SCREEN:
      return focused ? icon.icon_account_focus : icon.icon_account;
    default:
      return null;
  }
};
const screenOptions = ({route}) => {
  return {
    headerShown: false,
    tabBarStyle: {
      height: 81.65,
      elevation: 10,
      shadowOpacity: 0.1,
      shadowRadius: 10,
      shadowColor: '#000',
      shadowOffset: {height: -5, width: 0},
    },
    tabBarIcon: ({focused}) => (
      <Image
        source={getTabBarIcon(route, focused)}
        style={{width: 28, height: 28}}
      />
    ),
    tabBarLabelStyle: {
      fontSize: 12,
      fontFamily: FONTS.regular,
    },
    tabBarActiveTintColor: COLORS.red4,
    tabBarInactiveTintColor: COLORS.black1,
    tabBarItemStyle: {width: 54, height: 50, marginTop: 23.8},
  };
};

export default function BottomContainer() {
  return (
    <Tab.Navigator
      initialRouteName={router.HOME_SCREEN}
      screenOptions={screenOptions}>
      <Tab.Screen
        name={router.HOME_SCREEN}
        component={bottom[router.HOME_SCREEN]}
        options={{tabBarLabel: 'Trang chủ'}}
      />
      <Tab.Screen
        name={router.INCOME_SCREEN}
        component={bottom[router.INCOME_SCREEN]}
        options={{tabBarLabel: 'Thu nhập'}}
      />

      <Tab.Screen
        name={router.HISTORY_SCREEN}
        component={bottom[router.HISTORY_SCREEN]}
        options={{tabBarLabel: 'Lịch sử'}}
      />
      <Tab.Screen
        name={router.ACCOUNT_SCREEN}
        component={bottom[router.ACCOUNT_SCREEN]}
        options={{tabBarLabel: 'Tài khoản'}}
      />
    </Tab.Navigator>
  );
}
