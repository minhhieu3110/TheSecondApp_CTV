import {image} from '@assets';
import {
  Block,
  Image,
  Text,
  Pressable,
  Icon,
  TextInput,
  Header,
} from '@components';
import {width} from '@responsive';
import router from '@router';
import {COLORS} from '@theme';

import {authRoot, root} from 'navigation/navigationRef';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
export default function InputOTP() {
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <Header />
      <Block
        marginTop={-42}
        marginHorizontal={12}
        paddingBottom={148}
        radius={15}
        backgroundColor={COLORS.white}>
        <Block marginTop={18} marginLeft={12} marginRight={9}>
          <Text fontSize={18} semiBold color={COLORS.red4}>
            Xác nhận mã OTP
          </Text>
          <Text fontSize={14} regular color={COLORS.black2} marginTop={10}>
            Một mã xác thực gồm 6 số đã được gửi đến số điện thoại 0909 123 456
          </Text>
          <Text
            marginTop={55}
            fontSize={16}
            light
            color={COLORS.textColor}
            center>
            Nhập mã để tiếp tục
          </Text>
          <Block marginTop={18} row columnGap={16}>
            {Array.from({length: 6}).map((_, index) => (
              <TextInput
                key={index}
                width={(width - 128) / 6}
                height={50.14}
                radius={5}
                backgroundColor={COLORS.blueGray}
                center
                keyboardType="numeric"
                maxLength={1}
                justifyCenter
                alignCenter
              />
            ))}
          </Block>
          <Text
            fontSize={16}
            regular
            color={COLORS.black2}
            marginTop={14.9}
            center>
            Bạn không nhận được mã?{' '}
            <Text
              color={COLORS.red4}
              underline
              onPress={() => authRoot.navigate(router.INPUT_INFORMATION)}>
              Gửi lại
            </Text>{' '}
            (175s)
          </Text>
        </Block>
      </Block>
    </Block>
  );
}
