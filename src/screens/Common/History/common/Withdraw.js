import {Block, Text, Image, ScrollView} from '@components';
import {COLORS} from '@theme';
import {width} from '@responsive';
import {icon} from '@assets';
export default function WithDraw() {
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <Block width={width - 24} marginLeft={12} marginTop={15}>
        <ScrollView contentContainerStyle={{paddingBottom: 100}}>
          {Array.from({length: 8}).map((_, index) => (
            <Block
              key={index}
              paddingTop={12}
              paddingBottom={15}
              radius={8}
              backgroundColor={COLORS.white}
              marginBottom={12}
              row>
              <Block
                width={40}
                height={40}
                marginLeft={12}
                justifyCenter
                alignCenter
                backgroundColor={COLORS.pinkWhite2}
                radius={40}>
                <Image
                  source={icon.ic_withdraw_success}
                  width={24.31}
                  height={18.51}
                />
              </Block>
              <Block marginLeft={12} marginTop={9}>
                <Text fontSize={15} semiBold color={COLORS.textColor}>
                  Rút tiền thành công
                </Text>
                <Text fontSize={14} regular color={COLORS.red4} marginTop={16}>
                  -200.000 đ
                </Text>
              </Block>
              <Block absolute top={23} right={11}>
                <Text fontSize={14} regular color={COLORS.placeholder}>
                  15/12/2024
                </Text>
              </Block>
            </Block>
          ))}
        </ScrollView>
      </Block>
    </Block>
  );
}
