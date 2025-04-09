import {icon, image} from '@assets';
import {
  Block,
  HeaderTile,
  Icon,
  Image,
  ScrollView,
  Text,
  TextInput,
} from '@components';
import {width} from '@responsive';
import {COLORS} from '@theme';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
export default function ConfigAccount() {
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <HeaderTile title={'Thiết lập tài khoản'} canGoBack />
      <ScrollView contentContainerStyle={{paddingBottom: 105}}>
        <Block
          marginTop={15}
          marginHorizontal={12}
          backgroundColor={COLORS.white}
          radius={8}
          paddingBottom={15}>
          <Block marginTop={15} marginHorizontal={12}>
            <Block alignCenter>
              <Block width={94} height={94}>
                <Image
                  source={image.image_staff}
                  width={94}
                  height={94}
                  radius={94}
                  resizeMode="cover"
                />
                <Block
                  width={25}
                  height={25}
                  radius={25}
                  backgroundColor={COLORS.black30}
                  absolute
                  right={0}
                  bottom={0}
                  justifyCenter
                  alignCenter>
                  <Icon
                    IconType={Fontisto}
                    iconName={'camera'}
                    iconColor={COLORS.white}
                    iconSize={14.78}
                  />
                </Block>
              </Block>
            </Block>
            <Block marginTop={33}>
              <Block marginTop={21}>
                <Block>
                  <Text fontSize={15} semiBold color={COLORS.black2}>
                    Thông tin cá nhân
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
                    numberOfLines={1}>
                    Trần Thanh Hải
                  </TextInput>
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
                    color={COLORS.placeholder}
                    placeholder={'Nhập email'}
                    radius={5}
                    numberOfLines={1}>
                    Haitran123@gmail.com
                  </TextInput>
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
                    numberOfLines={1}>
                    0909 123 456
                  </TextInput>
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
                      placeholder="09/03/2000"
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
              </Block>
            </Block>
            <Block
              marginTop={20}
              height={53}
              backgroundColor={COLORS.greenWhite}
              radius={8}
              justifyCenter
              alignCenter>
              <Block rowCenter spaceBetween width={width - 75.52}>
                <Text fontSize={15} medium color={COLORS.black2}>
                  Ảnh CCCD
                </Text>
                <Block rowCenter>
                  <Text fontSize={13} regular color={COLORS.green6}>
                    Đã duyệt
                  </Text>
                  <Icon
                    marginLeft={9.8}
                    IconType={MaterialIcons}
                    iconName={'chevron-right'}
                    iconSize={20.69}
                    iconColor={COLORS.black2}
                  />
                </Block>
              </Block>
            </Block>
            <Block
              marginTop={15}
              height={53}
              backgroundColor={COLORS.greenWhite}
              radius={8}
              justifyCenter
              alignCenter>
              <Block rowCenter spaceBetween width={width - 75.52}>
                <Text fontSize={15} medium color={COLORS.black2}>
                  Hồ sơ cư trú
                </Text>
                <Block rowCenter>
                  <Text fontSize={13} regular color={COLORS.green6}>
                    Đã duyệt
                  </Text>
                  <Icon
                    marginLeft={9.8}
                    IconType={MaterialIcons}
                    iconName={'chevron-right'}
                    iconSize={20.69}
                    iconColor={COLORS.black2}
                  />
                </Block>
              </Block>
            </Block>
            <Block marginTop={40}>
              <Block
                height={48}
                radius={8}
                backgroundColor={COLORS.red4}
                justifyCenter
                alignCenter>
                <Text fontSize={15} regular color={COLORS.white}>
                  Cập nhật
                </Text>
              </Block>
              <Text
                fontSize={15}
                regular
                color={COLORS.red4}
                marginTop={17}
                center>
                Xoá tài khoản
              </Text>
            </Block>
          </Block>
        </Block>
      </ScrollView>
    </Block>
  );
}
