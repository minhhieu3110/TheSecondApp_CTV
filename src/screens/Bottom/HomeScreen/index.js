import {icon, image} from '@assets';
import {Block, HeaderMain, Icon, Image, Pressable, Text} from '@components';
import {width} from '@responsive';
import {COLORS} from '@theme';
import {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import JobReceive from './common/JobReceive';
import JobNew from '../HistoryScreen/common/JobNew';
export default function HomeScreen() {
  const d = new Date();
  const currentDate = new Date();
  currentDate.setDate(d.getDate());

  const formattedDate =
    `${String(currentDate.getDate()).padStart(2, '0')}/` +
    `${String(currentDate.getMonth() + 1).padStart(2, '0')}`;

  function getCurrentWeekActivities() {
    const today = new Date();
    const dayOfWeek = today.getDay();
    const diffToMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;

    const monday = new Date(today);
    monday.setDate(today.getDate() + diffToMonday);

    const activities = [];
    const day = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7'];
    for (let i = 0; i < 7; i++) {
      const currentDate = new Date(monday);
      currentDate.setDate(monday.getDate() + i);

      const formattedDate =
        `${String(currentDate.getDate()).padStart(2, '0')}/` +
        `${String(currentDate.getMonth() + 1).padStart(2, '0')}`;

      activities.push({
        id: i + 1,
        day: day[i],
        date: formattedDate,
        quantity: i + 1 + ' việc',
      });
    }

    return activities;
  }
  const [seen, setSeen] = useState(3); //
  const handleSeen = id => {
    setSeen(id);
  };
  const activity = getCurrentWeekActivities();
  const [visibleJobReceive, setVisibleJobReceive] = useState(true);
  const [visibleJobNew, setVisibleJobNew] = useState(false);
  const handleReceive = () => {
    setVisibleJobNew(false);
    setVisibleJobReceive(true);
  };
  const handleNew = () => {
    setVisibleJobReceive(false);
    setVisibleJobNew(true);
  };
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <HeaderMain title={'Trần Thanh Hải'} />
      <Block absolute>
        <Block marginTop={62}>
          <Block row gap={12} marginHorizontal={12}>
            <Pressable
              onPress={handleReceive}
              width={(width - 36) / 2}
              height={46}
              radius={8}
              borderWidth={1}
              borderColor={COLORS.white}
              backgroundColor={visibleJobReceive && COLORS.white}
              justifyCenter
              alignCenter>
              <Text
                fontSize={15}
                semiBold
                color={visibleJobReceive ? COLORS.red4 : COLORS.white}>
                Việc đã nhận
              </Text>
            </Pressable>
            <Pressable
              onPress={handleNew}
              width={(width - 36) / 2}
              height={46}
              radius={8}
              borderWidth={1}
              borderColor={COLORS.white}
              backgroundColor={visibleJobNew && COLORS.white}
              justifyCenter
              alignCenter>
              <Text
                fontSize={15}
                semiBold
                color={visibleJobNew ? COLORS.red4 : COLORS.white}>
                Việc làm mới
              </Text>
            </Pressable>
          </Block>
          <Block row marginTop={15} gap={10} marginHorizontal={12} height={86}>
            {activity.map(item => (
              <Pressable
                onPress={() => handleSeen(item.id)}
                key={item.id}
                width={(width - 74) / 6}
                height={86}
                backgroundColor={
                  seen === item.id ? COLORS.yellow3 : COLORS.black37
                }
                radius={8}
                alignCenter
                justifyCenter={item.date === formattedDate ? true : false}>
                {item.date === formattedDate ? (
                  ''
                ) : (
                  <Text
                    fontSize={13}
                    regular
                    color={seen === item.id ? COLORS.black2 : COLORS.white}
                    marginTop={11}>
                    {item.day}
                  </Text>
                )}
                <Text
                  fontSize={15}
                  semiBold
                  color={seen === item.id ? COLORS.black2 : COLORS.yellow3}
                  marginTop={5}
                  center>
                  {item.date === formattedDate ? 'Hôm nay' : item.date}
                </Text>
                {item.date === formattedDate ? (
                  ''
                ) : (
                  <Text
                    fontSize={12}
                    regular
                    color={seen === item.id ? COLORS.red4 : COLORS.white}
                    marginTop={5}>
                    {item.quantity}
                  </Text>
                )}
              </Pressable>
            ))}
          </Block>
        </Block>
      </Block>
      <Block paddingTop={15} paddingHorizontal={12}>
        {visibleJobReceive && <JobReceive />}
        {visibleJobNew && <JobNew />}
      </Block>
    </Block>
  );
}
