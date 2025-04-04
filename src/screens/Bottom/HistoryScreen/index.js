import {image} from '@assets';
import {Block, HeaderMain, Image, Text} from '@components';
import {width} from '@responsive';
import {COLORS, FONTS} from '@theme';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useWindowDimensions} from 'react-native';
import JobNew from './common/JobNew';
import Receive from './common/Receive';
import Doing from './common/Doing';
import Complete from './common/Complete';
import Cancel from './common/Cancel';
import router from '@router';
import {top} from './common/top';
export const HISTORY = {
  NEW_JOB: 'NEW_JOB',
  RECEIVE_JOB: 'RECEIVE_JOB',
  DOING: 'DOING',
  COMPLELE: 'COMPLELE',
  CANCEL: 'CANCEL',
};
export const topTab = [
  {name: router.NEW_JOB, lable: 'Việc mới'},
  {name: router.RECEIVE_JOB, lable: 'Đã nhận'},
  {name: router.DOING_JOB, lable: 'Đang làm'},
  {name: router.COMPLETE_JOB, lable: 'Hoàn tất'},
  {name: router.CANCEL_JOB, lable: 'Đã huỷ'},
];
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
          backgroundColor: COLORS.white2,
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
            backgroundColor: COLORS.white,
            marginBottom: 15,
          },
          tabBarStyle: {
            marginBottom: 21,
            gap: 12,
            width: width,
            backgroundColor: COLORS.white2,
          },
          tabBarGap: 12,
          tabBarIndicatorStyle: {height: 0},
          tabBarScrollEnabled: true,
          tabBarContentContainerStyle: {
            // height: 501,
            backgroundColor: COLORS.white2,
          },
        }}>
        {topTab.map(item => (
          <Tab.Screen
            key={item.name}
            name={item.name}
            component={top[item.name]}
            options={{tabBarLabel: item.lable}}
          />
        ))}
      </Tab.Navigator>
    </Block>
  );
}
