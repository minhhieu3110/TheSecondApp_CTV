import {image} from '@assets';
import {
  Block,
  Icon,
  Image,
  Pressable,
  Text,
  TextInput,
  Header,
} from '@components';
import {width} from '@responsive';
import router from '@router';
import {COLORS} from '@theme';
import {bottomRoot, root} from 'navigation/navigationRef';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
export default function LoginScreen() {
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <Header />
      <Block
        marginHorizontal={12}
        marginTop={-42}
        paddingBottom={15}
        radius={15}
        backgroundColor={COLORS.white}>
        <Block marginHorizontal={12}>
          <Block marginTop={18}>
            <Text fontSize={18} semiBold color={COLORS.red4}>
              Xin chào!
            </Text>
            <Text fontSize={15} regular color={COLORS.black2} marginTop={18}>
              Vui lòng nhập tài khoản để đăng nhập
            </Text>
            <TextInput
              placeholder={'Nhập số điện thoại'}
              height={45}
              paddingLeft={14}
              radius={5}
              borderWidth={0.5}
              borderColor={COLORS.gray11}
              fontSize={14}
              regular
              marginTop={23}
            />
            <TextInput
              placeholder={'Mật khẩu đăng nhập'}
              height={45}
              paddingLeft={14}
              radius={5}
              borderWidth={0.5}
              borderColor={COLORS.gray11}
              fontSize={14}
              regular
              marginTop={15}
            />
            <Pressable
              onPress={() => bottomRoot.navigate(router.HOME_SCREEN)}
              height={48}
              radius={8}
              backgroundColor={COLORS.red4}
              marginTop={30}
              justifyCenter
              alignCenter>
              <Text fontSize={15} regular color={COLORS.white}>
                Tiếp tục
              </Text>
            </Pressable>
            <Block row spaceBetween marginTop={18}>
              <Text fontSize={14} regular color={COLORS.red4}>
                Quên mật khẩu?
              </Text>
              <Text fontSize={14} regular color={COLORS.red4}>
                Đăng ký
              </Text>
            </Block>
          </Block>
        </Block>
      </Block>
      <Block absolute bottom={35}>
        <Text
          marginHorizontal={48}
          fontSize={14}
          color={COLORS.placeholder}
          center>
          Bằng việc nhấn vào nút{' '}
          <Text semiBold color={COLORS.placeholder}>
            Tiếp tục
          </Text>
          , bạn đã đồng ý với <Text color={COLORS.red4}>Quy chế</Text> và{' '}
          <Text color={COLORS.red4}>Điều khoản</Text> của chúng tôi
        </Text>
      </Block>
    </Block>
  );
}
