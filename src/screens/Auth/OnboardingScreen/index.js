import {image} from '@assets';
import {Block, Image, Pressable, Text} from '@components';
import {height, moderateVScale, width} from '@responsive';
import router from '@router';
import {COLORS} from '@theme';
import {authRoot} from 'navigation/navigationRef';
import {ImageBackground, ScrollView} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export default function OnboadingScreen() {
  const inset = useSafeAreaInsets();
  return (
    <Block flex>
      <Block
        width={width}
        height={height - inset.top - inset.bottom}
        alignCenter>
        <Image
          source={image.image_san}
          width={width}
          height={'100%'}
          resizeMode="cover"
        />
        <Pressable
          onPress={() => authRoot.navigate(router.LOGIN_SCREEN)}
          absolute
          bottom={127}
          backgroundColor={COLORS.yellow3}
          width={width - 78}
          height={48}
          radius={8}
          justifyCenter
          alignCenter>
          <Text fontSize={15} regular color={COLORS.black2}>
            Đăng nhập
          </Text>
        </Pressable>
        <Pressable
          onPress={() => authRoot.navigate(router.REGISTER_SCREEN)}
          absolute
          bottom={59}
          width={width - 78}
          borderWidth={1}
          borderColor={COLORS.yellow3}
          height={48}
          radius={8}
          justifyCenter
          alignCenter>
          <Text fontSize={15} regular color={COLORS.yellow3}>
            Đăng ký
          </Text>
        </Pressable>
      </Block>
    </Block>
  );
}
