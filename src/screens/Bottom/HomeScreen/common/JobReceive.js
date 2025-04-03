import {icon, image} from '@assets';
import {Block, Image, ScrollView, Text} from '@components';
import {COLORS} from '@theme';

export default function JobReceive() {
  return (
    <ScrollView>
      <Block gap={15}>
        <Block backgroundColor={COLORS.white} padding={12} radius={8}>
          <Block rowCenter>
            <Image source={icon.icon_housework} width={59} height={66.87} />
            <Block marginLeft={15}>
              <Text fontSize={15} semiBold color={COLORS.black2}>
                Dọn vệ sinh
              </Text>
              <Text marginTop={11} fontSize={15} regular color={COLORS.red4}>
                Quận Tân Bình
              </Text>
            </Block>
          </Block>
          <Block marginTop={12} borderWidth={1} borderColor={COLORS.gray11} />
          <Block marginTop={12} rowCenter>
            <Image source={icon.icon_calendar} width={25} height={25} />
            <Text marginLeft={10} fontSize={16} medium color={COLORS.black2}>
              Hôm nay, 27/02/2025
            </Text>
          </Block>
          <Block marginTop={14} rowCenter>
            <Image source={icon.icon_time} width={25} height={25} />
            <Text marginLeft={10} fontSize={16} medium color={COLORS.black2}>
              5 giờ, 8:00 đến 13:00
            </Text>
          </Block>
          <Block marginTop={12} borderWidth={1} borderColor={COLORS.gray11} />
          <Block marginTop={12} rowCenter spaceBetween>
            <Block rowCenter>
              <Image source={icon.icon_price} width={25} height={25} />
              <Text marginLeft={10} fontSize={16} medium color={COLORS.red4}>
                450.000đ
              </Text>
            </Block>
            <Block rowCenter gap={12}>
              <Image source={icon.icon_calendar_star} width={25} height={25} />
              <Image source={icon.icon_cooking} width={25} height={25} />
            </Block>
          </Block>
        </Block>
        <Block backgroundColor={COLORS.white} padding={12} radius={8}>
          <Block rowCenter>
            <Image source={icon.icon_housework} width={59} height={66.87} />
            <Block marginLeft={15}>
              <Text fontSize={15} semiBold color={COLORS.black2}>
                Dọn vệ sinh
              </Text>
              <Text marginTop={11} fontSize={15} regular color={COLORS.red4}>
                Quận Tân Bình
              </Text>
            </Block>
          </Block>
          <Block marginTop={12} borderWidth={1} borderColor={COLORS.gray11} />
          <Block marginTop={12} rowCenter>
            <Image source={icon.icon_calendar} width={25} height={25} />
            <Text marginLeft={10} fontSize={16} medium color={COLORS.black2}>
              Hôm nay, 27/02/2025
            </Text>
          </Block>
          <Block marginTop={14} rowCenter>
            <Image source={icon.icon_time} width={25} height={25} />
            <Text marginLeft={10} fontSize={16} medium color={COLORS.black2}>
              5 giờ, 8:00 đến 13:00
            </Text>
          </Block>
          <Block marginTop={12} borderWidth={1} borderColor={COLORS.gray11} />
          <Block marginTop={12} rowCenter spaceBetween>
            <Block rowCenter>
              <Image source={icon.icon_price} width={25} height={25} />
              <Text marginLeft={10} fontSize={16} medium color={COLORS.red4}>
                450.000đ
              </Text>
            </Block>
            <Block rowCenter gap={12}>
              <Image source={icon.icon_calendar_star} width={25} height={25} />
              <Image source={icon.icon_cooking} width={25} height={25} />
            </Block>
          </Block>
        </Block>
      </Block>
    </ScrollView>
  );
}
