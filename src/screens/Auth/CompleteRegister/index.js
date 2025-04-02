import {image} from '@assets';
import {Block, Header, Image, Pressable, Text} from '@components';
import router from '@router';
import {COLORS} from '@theme';
import {commonRoot} from 'navigation/navigationRef';

export default function CompleteRegister() {
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <Header />
      <Pressable
        onPress={() => commonRoot.navigate(router.CHOOSE_SERVICE)}
        marginTop={-49}
        marginHorizontal={12}
        radius={8}
        backgroundColor={COLORS.white}
        paddingBottom={20}>
        <Block marginTop={24} marginHorizontal={12}>
          <Text fontSize={18} semiBold color={COLORS.red4}>
            Hoàn tất thủ tục
          </Text>
          <Text
            fontSize={14}
            regular
            color={COLORS.black2}
            marginTop={10}
            lineHeight={20}
            numberOfLines={2}>
            Quý cộng tác viên vui lòng đến văn phòng công ty để hoàn tất thủ tục
            đăng ký CTV SAN
          </Text>
          <Block marginTop={19} alignCenter>
            <Image source={image.image_map} width={195} height={164} />
          </Block>
          <Block marginTop={12}>
            <Text fontSize={14} regular color={COLORS.black2}>
              Địa chỉ công ty
            </Text>
            <Text fontSize={14} semiBold color={COLORS.black2} marginTop={11}>
              123 Cộng Hòa, Phường 13, Tân Bình, Hồ Chí Minh
            </Text>
          </Block>
          <Block marginTop={20}>
            <Text fontSize={14} regular color={COLORS.black2}>
              Hotline
            </Text>
            <Text fontSize={14} semiBold color={COLORS.red4} marginTop={11}>
              1900 1234
            </Text>
          </Block>
        </Block>
      </Pressable>
    </Block>
  );
}
