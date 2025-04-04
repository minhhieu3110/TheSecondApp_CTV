import {
  Block,
  HeaderMain,
  Icon,
  Image,
  Pressable,
  ScrollView,
  Text,
} from '@components';
import {width} from '@responsive';
import {COLORS} from '@theme';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import React, {useState} from 'react';
import {
  addDays,
  subDays,
  addWeeks,
  subWeeks,
  addMonths,
  subMonths,
  format,
} from 'date-fns';
import {icon, image} from '@assets';
import {commonRoot} from 'navigation/navigationRef';
import router from '@router';

export default function IncomeScreen() {
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <HeaderMain title={'Thu nhập'} />
      <Block absolute>
        <Block
          marginTop={57}
          backgroundColor={COLORS.black37}
          width={width - 24}
          marginHorizontal={12}
          paddingBottom={14}
          radius={8}>
          <Block marginTop={21} row>
            <Block
              borderBottomWidth={5}
              borderColor={COLORS.yellowwhite}
              width={(width - 24) / 3}
              alignCenter>
              <Text fontSize={15} medium color={COLORS.white} marginBottom={8}>
                Ngày
              </Text>
            </Block>
            <Block
              borderBottomWidth={5}
              borderColor={COLORS.yellowwhite}
              width={(width - 24) / 3}
              alignCenter>
              <Text fontSize={15} medium color={COLORS.white} marginBottom={8}>
                Tuần
              </Text>
            </Block>
            <Block
              borderBottomWidth={5}
              borderColor={COLORS.yellow3}
              width={(width - 24) / 3}
              alignCenter>
              <Text
                fontSize={15}
                medium
                color={COLORS.yellow3}
                marginBottom={8}>
                Tháng
              </Text>
            </Block>
          </Block>
          <Block marginTop={14}>
            <Text fontSize={13} regular color={COLORS.white} center>
              01/2025
            </Text>
            <Block rowCenter spaceBetween marginHorizontal={10}>
              <Pressable>
                <Icon
                  IconType={MaterialIcons}
                  iconName={'chevron-left'}
                  iconSize={20.69}
                  iconColor={COLORS.white}
                />
              </Pressable>
              <Text fontSize={24} semiBold color={COLORS.yellow3}>
                17.980.990đ
              </Text>
              <Pressable>
                <Icon
                  IconType={MaterialIcons}
                  iconName={'chevron-right'}
                  iconSize={20.69}
                  iconColor={COLORS.white}
                />
              </Pressable>
            </Block>
            <Text fontSize={12} regular color={COLORS.white} center>
              Thu nhập từ thực hiện các công việc, dịch vụ
            </Text>
          </Block>
        </Block>
      </Block>
      <ScrollView contentContainerStyle={{paddingBottom: 20}}>
        <Block marginTop={20} marginHorizontal={12}>
          <Block rowCenter spaceBetween>
            <Text fontSize={15} semiBold color={COLORS.black2}>
              Lịch sử
            </Text>
            <Text fontSize={15} regular color={COLORS.placeholder}>
              10 công việc
            </Text>
          </Block>
          <Block marginTop={15} gap={12}>
            {Array.from({length: 10}).map((_, index) => (
              <Pressable
                onPress={() => commonRoot.navigate(router.DETAIL_INCOME)}
                key={index}
                padding={12}
                radius={8}
                backgroundColor={COLORS.white}>
                <Block row spaceBetween>
                  <Block rowCenter>
                    <Image
                      source={icon.icon_housework}
                      width={56}
                      height={63.47}
                    />
                    <Block marginLeft={12}>
                      <Text fontSize={15} semiBold color={COLORS.black2}>
                        Dọn vệ sinh
                      </Text>
                      <Text
                        fontSize={13}
                        regular
                        color={COLORS.placeholder}
                        marginTop={14}>
                        02/04//2025
                      </Text>
                    </Block>
                  </Block>
                  <Text
                    marginTop={9}
                    fontSize={15}
                    semiBold
                    color={COLORS.green6}>
                    +235.890đ
                  </Text>
                </Block>
              </Pressable>
            ))}
          </Block>
        </Block>
      </ScrollView>
    </Block>
  );
}
