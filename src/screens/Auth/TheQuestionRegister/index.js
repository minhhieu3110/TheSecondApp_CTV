import {icon} from '@assets';
import {Block, Header, Icon, Image, Pressable, Text} from '@components';
import router from '@router';
import {COLORS} from '@theme';
import {authRoot, commonRoot} from 'navigation/navigationRef';
import Octicons from 'react-native-vector-icons/Octicons';
export default function TheQuestionRegister() {
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <Header />
      <Block
        marginHorizontal={12}
        marginTop={-49}
        backgroundColor={COLORS.white}
        radius={15}
        paddingBottom={15}>
        <Block marginTop={24} marginHorizontal={12}>
          <Text fontSize={18} semiBold color={COLORS.red4}>
            Hoàn tất đăng ký
          </Text>
          <Text fontSize={14} regular color={COLORS.black2} marginTop={10}>
            Vui lòng thực hiện 2 bài kiểm tra sau để tiếp tục
          </Text>
          <Pressable
            onPress={() => commonRoot.navigate(router.TESTS)}
            marginTop={28}
            paddingBottom={17}
            radius={8}
            backgroundColor={COLORS.pinkWhite2}>
            <Block marginLeft={15} marginTop={15} marginRight={13}>
              <Block row spaceBetween>
                <Block rowCenter>
                  <Image
                    source={icon.icon_the_question}
                    width={30}
                    height={30}
                  />
                  <Text
                    marginLeft={9.7}
                    fontSize={15}
                    medium
                    color={COLORS.black2}>
                    Bài kiểm tra đầu vào
                  </Text>
                </Block>
                <Icon
                  IconType={Octicons}
                  iconSize={20.69}
                  iconName={'chevron-right'}
                />
              </Block>
              <Text
                marginLeft={39}
                marginTop={6}
                fontSize={13}
                regular
                color={COLORS.placeholder}
                numberOfLines={2}>
                Bao gồm các bài kiểm tra về kỹ năng, kiến thức, đảm bảo chất
                lượng CTV San
              </Text>
              <Block
                marginTop={12}
                marginLeft={39}
                backgroundColor={COLORS.pinkWhite3}
                paddingBottom={7}
                radius={14}
                justifyCenter
                marginRight={160.5}
                alignCenter>
                <Text
                  fontSize={14}
                  regular
                  color={COLORS.darkRed1}
                  marginLeft={10}
                  marginTop={9}
                  marginRight={22}>
                  Chưa hoàn thành
                </Text>
              </Block>
            </Block>
          </Pressable>
          <Pressable
            onPress={() => authRoot.navigate(router.UPDATE_INFORMATION)}
            marginTop={22}
            height={48}
            backgroundColor={COLORS.placeholder}
            radius={8}
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
