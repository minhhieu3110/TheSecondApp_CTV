import {icon, image} from '@assets';
import {Block, Icon, Image, Pressable, Text} from '@components';
import {width} from '@responsive';
import router from '@router';
import {COLORS} from '@theme';
import {commonRoot} from 'navigation/navigationRef';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function HeaderMain({title}) {
  return (
    <Block width={width} height={228}>
      <Image
        source={image.image_header}
        width={width}
        height={228}
        resizeMode="cover"
      />

      <Block marginTop={-204} width={width}>
        <Text fontSize={18} semiBold color={COLORS.white} center>
          {title}
        </Text>
      </Block>
      <Block absolute top={11} right={4} rowCenter gap={5} zIndex={100}>
        <Pressable
          onPress={() => commonRoot.navigate(router.MESSAGE)}
          width={27.6}
          height={26}
          justifyEnd>
          <Image source={icon.icon_message} width={19.6} height={18} />
          <Block
            absolute
            top={0}
            right={0}
            width={16}
            height={16}
            radius={16}
            backgroundColor={COLORS.yellow3}
            justifyCenter
            alignCenter>
            <Text fontSize={10} medium color={COLORS.black2}>
              17
            </Text>
          </Block>
        </Pressable>
        <Pressable
          onPress={() => commonRoot.navigate(router.NOTIFICATION)}
          width={27.6}
          height={26}
          justifyEnd>
          <Icon
            IconType={Ionicons}
            iconName={'notifications'}
            iconColor={COLORS.white}
            iconSize={23}
          />
          <Block
            absolute
            top={0}
            right={0}
            width={16}
            height={16}
            radius={16}
            backgroundColor={COLORS.yellow3}
            justifyCenter
            alignCenter>
            <Text fontSize={10} medium color={COLORS.black2}>
              2
            </Text>
          </Block>
        </Pressable>
      </Block>
    </Block>
  );
}
