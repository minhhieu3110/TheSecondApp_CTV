import {icon} from '@assets';
import {Block, Header, Image, Pressable, Text} from '@components';
import {width} from '@responsive';
import router from '@router';
import {COLORS} from '@theme';
import {authRoot} from 'navigation/navigationRef';

export default function UpdateCitizenID() {
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <Header />
      <Block
        marginTop={-49}
        marginHorizontal={12}
        paddingBottom={12}
        backgroundColor={COLORS.white}
        radius={8}>
        <Block marginTop={25} marginHorizontal={12}>
          <Text fontSize={18} semiBold color={COLORS.red4}>
            Hình ảnh CCCD
          </Text>
          <Text
            fontSize={14}
            regular
            color={COLORS.black2}
            lineHeight={20}
            marginTop={10}>
            - Vui lòng chụp ảnh rõ nét, đủ 4 góc
            {'\n'}- Hình ảnh bắt buộc phải xoay ngang
          </Text>
          <Block rowCenter gap={20} marginTop={19}>
            <Block
              width={(width - 60) / 2}
              height={(width - 60) / 2}
              borderWidth={1}
              borderColor={COLORS.blue3}
              backgroundColor={COLORS.pinkWhite2}
              borderDashed
              radius={10}>
              <Block alignCenter marginTop={65}>
                <Image
                  source={icon.icon_update_image}
                  width={47}
                  height={46.95}
                />
                <Text
                  fontSize={16}
                  regular
                  color={COLORS.black2}
                  marginTop={19}>
                  Mặt trước
                </Text>
              </Block>
            </Block>
            <Block
              width={(width - 60) / 2}
              height={(width - 60) / 2}
              borderWidth={1}
              borderColor={COLORS.blue3}
              backgroundColor={COLORS.pinkWhite2}
              borderDashed
              radius={10}>
              <Block alignCenter marginTop={65}>
                <Image
                  source={icon.icon_update_image}
                  width={47}
                  height={46.95}
                />
                <Text
                  fontSize={16}
                  regular
                  color={COLORS.black2}
                  marginTop={19}>
                  Mặt sau
                </Text>
              </Block>
            </Block>
          </Block>
          <Pressable
            onPress={() => authRoot.navigate(router.UPDATE_INFORMATION)}
            marginTop={60}
            radius={8}
            backgroundColor={COLORS.placeholder}
            height={48}
            justifyCenter
            alignCenter>
            <Text fontSize={15} regular color={COLORS.white}>
              Tiếp tục
            </Text>
          </Pressable>
        </Block>
      </Block>
    </Block>
  );
}
