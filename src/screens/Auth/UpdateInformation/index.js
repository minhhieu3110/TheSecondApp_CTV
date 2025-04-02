import {Block, Header, Icon, Pressable, Text} from '@components';
import router from '@router';
import {COLORS} from '@theme';
import {authRoot} from 'navigation/navigationRef';
import Octicons from 'react-native-vector-icons/Octicons';
export default function UpdateInformation() {
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
            Cập nhật thông tin
          </Text>
          <Text marginTop={10} fontSize={14} regular color={COLORS.black2}>
            Vui lòng hoàn thiện thông tin để đăng ký
          </Text>
          <Block
            marginTop={47}
            height={53}
            backgroundColor={COLORS.pinkWhite2}
            radius={8}
            paddingBottom={16.3}>
            <Block
              marginLeft={15}
              marginTop={16}
              marginRight={13}
              rowCenter
              spaceBetween>
              <Text fontSize={15} medium color={COLORS.black2}>
                Thông tin cá nhân
              </Text>
              <Block rowCenter>
                <Text fontSize={13} regular color={COLORS.green6}>
                  Hoàn thành
                </Text>
                <Icon
                  marginLeft={9.8}
                  IconType={Octicons}
                  iconSize={20.69}
                  iconName={'chevron-right'}
                />
              </Block>
            </Block>
          </Block>
          <Pressable
            onPress={() => authRoot.navigate(router.UPDATE_CITIZEN_ID)}
            marginTop={15}
            height={53}
            backgroundColor={COLORS.pinkWhite2}
            radius={8}
            paddingBottom={16.3}>
            <Block
              marginLeft={15}
              marginTop={16}
              marginRight={13}
              rowCenter
              spaceBetween>
              <Text fontSize={15} medium color={COLORS.black2}>
                Ảnh CCCD
              </Text>
              <Block rowCenter>
                <Text fontSize={13} regular color={COLORS.darkRed1}>
                  Chưa cập nhật
                </Text>
                <Icon
                  marginLeft={9.8}
                  IconType={Octicons}
                  iconSize={20.69}
                  iconName={'chevron-right'}
                />
              </Block>
            </Block>
          </Pressable>
          <Pressable
            onPress={() => authRoot.navigate(router.COMPLETE_REGISTER)}
            marginTop={40}
            radius={8}
            backgroundColor={COLORS.placeholder}
            height={48}
            justifyCenter
            alignCenter>
            <Text fontSize={15} regular color={COLORS.white}>
              Gửi hồ sơ
            </Text>
          </Pressable>
        </Block>
      </Block>
    </Block>
  );
}
