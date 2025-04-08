import Block from '@components/base/Block';
import Icon from '@components/base/Icon';
import Pressable from '@components/base/Pressable';
import Text from '@components/base/Text';
import {useNavigation} from '@react-navigation/native';
import {width} from '@responsive';
import {COLORS} from '@theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
const HeaderTile = ({
  icon,
  iconType,
  title,
  showBack = true,
  root,
  screenName,
  screenParams,
  canGoBack,
  onPress,
  colorIcon,
  colorText,
  uppercase = false,
  background = false,
}) => {
  const navigation = useNavigation();

  const handleBack = () => {
    if (screenName) {
      root?.navigate(screenName, screenParams);
    }
    if (canGoBack) {
      navigation.goBack();
    }
    if (onPress) {
      onPress();
      return;
    }
  };
  return background ? (
    <Block zIndex={10} width={width} height={53} backgroundColor={background}>
      <Pressable
        onPress={handleBack}
        height={30}
        marginLeft={3}
        marginTop={12}
        alignCenter
        row>
        {icon ? (
          <Icon
            IconType={iconType}
            iconName={icon}
            iconSize={30}
            iconColor={colorIcon}
          />
        ) : (
          <Icon
            IconType={Ionicons}
            iconName={'chevron-back'}
            iconSize={30}
            iconColor={colorIcon}
          />
        )}
        {colorText ? (
          <Text
            width={width - 46}
            fontSize={15}
            semiBold
            color={colorText}
            center
            uppercase={uppercase}>
            {title}
          </Text>
        ) : (
          <Text
            width={width - 46}
            fontSize={15}
            semiBold
            color={COLORS.black2}
            center
            uppercase={uppercase}>
            {title}
          </Text>
        )}
      </Pressable>
    </Block>
  ) : (
    <Block width={width} height={53} backgroundColor={COLORS.white}>
      <Pressable
        onPress={handleBack}
        height={30}
        marginLeft={3}
        marginTop={12}
        alignCenter
        row>
        {icon ? (
          <Icon
            IconType={iconType}
            iconName={icon}
            iconSize={30}
            iconColor={colorIcon}
          />
        ) : (
          <Icon
            IconType={Ionicons}
            iconName={'chevron-back'}
            iconSize={30}
            iconColor={colorIcon}
          />
        )}
        {colorText ? (
          <Text
            width={width - 46}
            fontSize={15}
            semiBold
            color={colorText}
            center
            uppercase={uppercase}>
            {title}
          </Text>
        ) : (
          <Text
            width={width - 46}
            fontSize={15}
            semiBold
            color={COLORS.black2}
            center
            uppercase={uppercase}>
            {title}
          </Text>
        )}
      </Pressable>
    </Block>
  );
};
export default HeaderTile;
