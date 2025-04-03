import {image} from '@assets';
import {Block, HeaderMain, Image, Text} from '@components';
import {width} from '@responsive';
import {COLORS, FONTS} from '@theme';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useWindowDimensions} from 'react-native';
import JobNew from '../HomeScreen/common/JobNew';
import Receive from './common/Receive';
import Doing from './common/Doing';
import Complete from './common/Complete';
import Cancel from './common/Cancel';
export const HISTORY = {
  NEW_JOB: 'NEW_JOB',
  RECEIVE_JOB: 'RECEIVE_JOB',
  DOING: 'DOING',
  COMPLELE: 'COMPLELE',
  CANCEL: 'CANCEL',
};
export default function HistoryScreen() {
  const Tab = createMaterialTopTabNavigator();
  const layout = useWindowDimensions();
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <HeaderMain title={'Lịch sử'} />

      <Tab.Navigator
        style={{
          marginTop: -164,
          marginHorizontal: 12,
        }}
        screenOptions={{
          tabBarActiveTintColor: COLORS.yellow3,
          tabBarLabelStyle: {
            fontSize: 15,
            fontFamily: FONTS.regular,
            color: COLORS.black2,
          },
          tabBarItemStyle: {
            width: (width - 36) / 4,
            height: 33,
            borderRadius: 5,
            // borderWidth: 1,
            backgroundColor: COLORS.white,
          },
          tabBarStyle: {
            marginBottom: 21,
            gap: 12,
            width: width,
            backgroundColor: COLORS.none,
          },
          tabBarGap: 12,
          tabBarIndicatorStyle: {height: 0},
          tabBarScrollEnabled: true,
          tabBarContentContainerStyle: {height: 50},
        }}>
        <Tab.Screen
          name={HISTORY.NEW_JOB}
          component={JobNew}
          options={{title: 'Việc mới'}}
        />
        <Tab.Screen
          name={HISTORY.RECEIVE_JOB}
          component={Receive}
          options={{title: 'Đã nhận'}}
        />
        <Tab.Screen
          name={HISTORY.DOING}
          component={Doing}
          options={{title: 'Đang làm'}}
        />
        <Tab.Screen
          name={HISTORY.COMPLELE}
          component={Complete}
          options={{title: 'Hoàn tất'}}
        />
        <Tab.Screen
          name={HISTORY.CANCEL}
          component={Cancel}
          options={{title: 'Đã huỷ'}}
        />
      </Tab.Navigator>
    </Block>
  );
}
