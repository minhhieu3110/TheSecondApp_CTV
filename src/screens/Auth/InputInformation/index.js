import {icon, image} from '@assets';
import {
  Block,
  Icon,
  Image,
  Pressable,
  SelectInput,
  Text,
  TextInput,
  ScrollView,
} from '@components';
import {width} from '@responsive';
import router from '@router';
import {COLORS} from '@theme';
import {authRoot, root} from 'navigation/navigationRef';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useForm} from 'react-hook-form';
export default function InputInformation() {
  const {control} = useForm();
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <ScrollView contentContainerStyle={{paddingBottom: 125}}>
        <Block width={width} height={331}>
          <Image
            source={image.image_san_2}
            resizeMode="cover"
            width={'100%'}
            height={'100%'}
          />
          <Pressable
            onPress={() => root.goBack()}
            absolute
            top={13}
            left={12}
            width={30}
            height={30}
            radius={30}
            backgroundColor={COLORS.transparentColor4}
            justifyCenter
            alignCenter>
            <Icon
              IconType={MaterialIcons}
              iconName={'keyboard-arrow-left'}
              iconSize={30}
              iconColor={COLORS.white}
            />
          </Pressable>
        </Block>
        <Block
          marginTop={-139}
          marginHorizontal={12}
          backgroundColor={COLORS.white}
          paddingBottom={12}
          radius={15}>
          <Block marginTop={18} marginHorizontal={12}>
            <Text fontSize={18} semiBold color={COLORS.red4}>
              Thông tin cá nhân
            </Text>
            <Block marginTop={21}>
              <Block>
                <Text fontSize={15} semiBold color={COLORS.black2}>
                  Họ tên
                </Text>
                <TextInput
                  marginTop={15}
                  paddingLeft={12}
                  borderWidth={0.5}
                  borderColor={COLORS.gray11}
                  backgroundColor={COLORS.white}
                  fontSize={14}
                  regular
                  placeholder={'Nhập họ tên'}
                  radius={5}
                  numberOfLines={1}
                />
              </Block>
              <Block marginTop={17}>
                <Text fontSize={15} semiBold color={COLORS.black2}>
                  Số điện thoại
                </Text>
                <TextInput
                  marginTop={15}
                  paddingLeft={12}
                  borderWidth={0.5}
                  borderColor={COLORS.gray11}
                  backgroundColor={COLORS.gray10}
                  fontSize={14}
                  regular
                  placeholder={'Nhập số điện thoại'}
                  radius={5}
                  numberOfLines={1}
                />
              </Block>
              <Block marginTop={17}>
                <Text fontSize={15} semiBold color={COLORS.black2}>
                  Số CCCD
                </Text>
                <TextInput
                  marginTop={15}
                  paddingLeft={12}
                  borderWidth={0.5}
                  borderColor={COLORS.gray11}
                  backgroundColor={COLORS.white}
                  fontSize={14}
                  regular
                  placeholder={'Nhập số CCCD'}
                  radius={5}
                  numberOfLines={1}
                />
              </Block>
              <Block marginTop={17}>
                <Text fontSize={15} semiBold color={COLORS.black2}>
                  Email
                </Text>
                <TextInput
                  marginTop={15}
                  paddingLeft={12}
                  borderWidth={0.5}
                  borderColor={COLORS.gray11}
                  backgroundColor={COLORS.white}
                  fontSize={14}
                  regular
                  placeholder={'Nhập email'}
                  radius={5}
                  numberOfLines={1}
                />
              </Block>
              <Block marginTop={17}>
                <Text fontSize={15} semiBold color={COLORS.black2}>
                  Mật khẩu
                </Text>
                <TextInput
                  marginTop={15}
                  paddingLeft={12}
                  borderWidth={0.5}
                  borderColor={COLORS.gray11}
                  backgroundColor={COLORS.white}
                  fontSize={14}
                  regular
                  placeholder={'Nhập mật khẩu'}
                  radius={5}
                  numberOfLines={1}
                  secureTextEntry
                />
              </Block>
              <Block marginTop={17}>
                <Text fontSize={15} semiBold color={COLORS.black2}>
                  Xác nhận mật khẩu
                </Text>
                <TextInput
                  marginTop={15}
                  paddingLeft={12}
                  borderWidth={0.5}
                  borderColor={COLORS.gray11}
                  backgroundColor={COLORS.white}
                  fontSize={14}
                  regular
                  placeholder={'Xác nhận mật khẩu'}
                  radius={5}
                  numberOfLines={1}
                  secureTextEntry
                />
              </Block>
              <Block marginTop={17}>
                <Text fontSize={15} semiBold color={COLORS.black2}>
                  Ngày sinh
                </Text>
                <Block marginTop={15} justifyCenter>
                  <TextInput
                    paddingLeft={12}
                    borderWidth={0.5}
                    borderColor={COLORS.gray11}
                    backgroundColor={COLORS.white}
                    fontSize={14}
                    regular
                    radius={5}
                    numberOfLines={1}
                    secureTextEntry
                  />
                  <Image
                    source={icon.icon_input_date}
                    width={18.3}
                    height={17.13}
                    absolute
                    right={11.9}
                  />
                </Block>
              </Block>
              <Block marginTop={17}>
                <Text fontSize={15} semiBold color={COLORS.black2}>
                  Mã giới thiệu
                </Text>
                <TextInput
                  marginTop={15}
                  paddingLeft={12}
                  borderWidth={0.5}
                  borderColor={COLORS.gray11}
                  backgroundColor={COLORS.white}
                  fontSize={14}
                  regular
                  placeholder={'Nhập mã giới thiệu'}
                  radius={5}
                  numberOfLines={1}
                  secureTextEntry
                />
              </Block>
            </Block>
          </Block>
        </Block>
        <Block
          marginTop={12}
          marginHorizontal={12}
          backgroundColor={COLORS.white}
          paddingBottom={12}
          radius={15}>
          <Block marginTop={18} marginHorizontal={12}>
            <Text fontSize={18} semiBold color={COLORS.red4}>
              Thông tin cư trú
            </Text>
            <Block marginTop={21}>
              <Block>
                <Text fontSize={15} semiBold color={COLORS.black2}>
                  Chọn Tỉnh/Thành
                </Text>
                <SelectInput
                  control={control}
                  name={'abc'}
                  marginTop={15}
                  paddingLeft={12}
                  borderWidth={0.5}
                  borderColor={COLORS.gray11}
                  backgroundColor={COLORS.white}
                  fontSize={14}
                  regular
                  placeholder={'Chọn Tỉnh/Thành'}
                  radius={5}
                  numberOfLines={1}
                />
              </Block>
              <Block marginTop={17}>
                <Text fontSize={15} semiBold color={COLORS.black2}>
                  Quận/Huyện
                </Text>
                <SelectInput
                  control={control}
                  name={'abc'}
                  marginTop={15}
                  paddingLeft={12}
                  borderWidth={0.5}
                  borderColor={COLORS.gray11}
                  backgroundColor={COLORS.white}
                  fontSize={14}
                  regular
                  placeholder={'Chọn Quận/Huyện'}
                  radius={5}
                  numberOfLines={1}
                />
              </Block>
              <Block marginTop={17}>
                <Text fontSize={15} semiBold color={COLORS.black2}>
                  Phường/Xã
                </Text>
                <SelectInput
                  control={control}
                  name={'abc'}
                  marginTop={15}
                  paddingLeft={12}
                  borderWidth={0.5}
                  borderColor={COLORS.gray11}
                  backgroundColor={COLORS.white}
                  fontSize={14}
                  regular
                  placeholder={'Chọn Phường/Xã'}
                  radius={5}
                  numberOfLines={1}
                />
              </Block>
              <Block marginTop={17}>
                <Text fontSize={15} semiBold color={COLORS.black2}>
                  Địa chỉ tạm trú
                </Text>
                <TextInput
                  marginTop={15}
                  paddingLeft={12}
                  borderWidth={0.5}
                  borderColor={COLORS.gray11}
                  backgroundColor={COLORS.white}
                  fontSize={14}
                  regular
                  placeholder={'Địa chỉ tạm trú'}
                  radius={5}
                  numberOfLines={1}
                />
              </Block>
            </Block>
          </Block>
        </Block>
        <Pressable
          onPress={() => authRoot.navigate(router.THE_QUESTION_REGISTER)}
          height={48}
          marginHorizontal={12}
          marginTop={20}
          radius={8}
          backgroundColor={COLORS.red4}
          justifyCenter
          alignCenter>
          <Text fontSize={15} regular color={COLORS.white}>
            Tiếp tục
          </Text>
        </Pressable>
      </ScrollView>
    </Block>
  );
}
