import {icon, image, lotties} from '@assets';
import {Block, Image, ScrollView, Text} from '@components';
import {width} from '@responsive';
import {COLORS} from '@theme';
import LottieView from 'lottie-react-native';
import RadialGradient from 'react-native-radial-gradient';
export default function JobNew() {
  return (
    <ScrollView>
      <Block gap={14.8} radius={8}>
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
          <Block
            marginTop={12}
            backgroundColor={COLORS.yellowwhite}
            padding={12}
            radius={8}
            rowCenter
            spaceBetween>
            <Block rowCenter>
              <Block
                width={30}
                height={30}
                radius={30}
                justifyCenter
                alignCenter
                overflow={'hidden'}>
                <RadialGradient
                  colors={COLORS.gradient5}
                  style={{
                    width: 30,
                    height: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <LottieView
                    source={lotties.lottie_time}
                    style={{width: 30, height: 30}}
                    autoPlay
                    loop
                  />
                </RadialGradient>
              </Block>
              <Text fontSize={14} regular color={COLORS.black2} marginLeft={10}>
                Thời gian nhận việc
              </Text>
            </Block>
            <Text fontSize={22} bold color={COLORS.red4}>
              157s
            </Text>
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
          <Block marginTop={12} borderWidth={1} borderColor={COLORS.gray11} />
          <Block height={42} marginTop={12} row gap={10}>
            <Block
              width={(width - 58) / 2}
              borderWidth={1}
              borderColor={COLORS.red4}
              radius={8}
              justifyCenter
              alignCenter>
              <Text fontSize={15} regular color={COLORS.red4}>
                Từ chối
              </Text>
            </Block>

            <Block
              width={(width - 58) / 2}
              borderWidth={1}
              borderColor={COLORS.red4}
              backgroundColor={COLORS.red4}
              radius={8}
              justifyCenter
              alignCenter>
              <Text fontSize={15} regular color={COLORS.white}>
                Nhận việc
              </Text>
            </Block>
          </Block>
        </Block>
      </Block>
    </ScrollView>
  );
}
