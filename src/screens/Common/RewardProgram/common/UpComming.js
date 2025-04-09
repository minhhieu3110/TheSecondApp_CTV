import {icon} from '@assets';
import {Block, Image, Pressable, ScrollView, Text} from '@components';
import {width} from '@responsive';
import router from '@router';
import {COLORS} from '@theme';
import {commonRoot} from 'navigation/navigationRef';

export default function UpComming() {
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <ScrollView contentContainerStyle={{paddingBottom: 122}}>
        <Block marginTop={15} marginHorizontal={12} gap={12}>
          {Array.from({length: 4}).map((_, index) => (
            <Pressable
              onPress={() => commonRoot.navigate(router.DETAIL_UPCOMMING)}
              key={index}
              backgroundColor={COLORS.white}
              radius={8}
              paddingBottom={11}>
              <Block marginTop={12} marginHorizontal={12}>
                <Block row spaceBetween>
                  <Block marginTop={5}>
                    <Text fontSize={15} semiBold color={COLORS.red4} capitalize>
                      Nhân viên đáng tin cậy
                    </Text>
                    <Text
                      marginTop={12}
                      fontSize={13}
                      regular
                      color={COLORS.black2}
                      center>
                      Chu kỳ 01 - 08/03/2025
                    </Text>
                  </Block>
                  <Block
                    width={width - 301}
                    height={34}
                    backgroundColor={COLORS.yellowwhite}
                    radius={20}
                    justifyCenter
                    alignCenter>
                    <Text fontSize={14} medium color={COLORS.yellow3}>
                      Thưởng tháng
                    </Text>
                  </Block>
                </Block>
                <Block
                  marginTop={14}
                  borderWidth={1}
                  borderColor={COLORS.borderColor1}
                />
                <Block rowCenter spaceBetween marginTop={13}>
                  <Block rowCenter>
                    <Image
                      source={icon.icon_points_achieved}
                      width={22}
                      height={22}
                    />
                    <Text
                      marginLeft={8}
                      fontSize={15}
                      regular
                      color={COLORS.placeholder}>
                      Điểm đã đạt được
                    </Text>
                  </Block>
                  <Text fontSize={15} semiBold color={COLORS.black2}>
                    0 điểm
                  </Text>
                </Block>
                <Block
                  marginTop={12}
                  borderWidth={1}
                  borderColor={COLORS.borderColor1}
                />
                <Block rowCenter spaceBetween marginTop={13}>
                  <Block rowCenter>
                    <Image source={icon.icon_bonus} width={22} height={22} />
                    <Text
                      marginLeft={8}
                      fontSize={15}
                      regular
                      color={COLORS.placeholder}>
                      Tiền thưởng
                    </Text>
                  </Block>
                  <Text fontSize={15} semiBold color={COLORS.black2}>
                    0đ
                  </Text>
                </Block>
              </Block>
            </Pressable>
          ))}
        </Block>
      </ScrollView>
    </Block>
  );
}
