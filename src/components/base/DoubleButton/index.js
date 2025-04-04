import {width} from '@responsive';
import Block from '../Block';
import Pressable from '../Pressable';
import {COLORS} from '@theme';
import Text from '../Text';

const DoubleButton = ({
  title1 = '',
  title2 = '',
  onPress1,
  onPress2,
  loading,
  disabled,
  numberOfLines = 1,
  textProps,
  backgroundColor2 = COLORS.red4,
  ...containerProps
}) => {
  return (
    <Block height={72} backgroundColor={COLORS.white} justifyCenter>
      <Block
        alignCenter
        width={width - 24}
        row
        spaceBetween
        marginHorizontal={12}>
        <Pressable
          onPress={onPress1}
          width={(width - 24) / 2 - 5}
          height={48}
          alignCenter
          justifyCenter
          radius={8}
          borderColor={COLORS.red4}
          borderWidth={1}
          backgroundColor={COLORS.white}>
          <Text fontSize={15} regular color={COLORS.red4}>
            {title1}
          </Text>
        </Pressable>
        <Pressable
          onPress={onPress2}
          width={(width - 24) / 2 - 5}
          height={48}
          alignCenter
          justifyCenter
          radius={8}
          backgroundColor={backgroundColor2}>
          <Text fontSize={15} regular color={COLORS.white}>
            {title2}
          </Text>
        </Pressable>
      </Block>
    </Block>
  );
};
export default DoubleButton;
