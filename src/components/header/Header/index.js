import {icon, image} from '@assets';
import {Block, Icon, Image, Pressable} from '@components';
import {width} from '@responsive';
import {COLORS} from '@theme';
import {root} from 'navigation/navigationRef';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
export default function Header() {
  return (
    <Block width={width} height={331}>
      <Image
        source={image.image_san_1}
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
  );
}
