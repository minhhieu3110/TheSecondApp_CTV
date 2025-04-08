import {icon, image} from '@assets';
import {Block, HeaderTile, Image, Pressable, Text} from '@components';
import {width} from '@responsive';
import router from '@router';
import {COLORS} from '@theme';
import {commonRoot} from 'navigation/navigationRef';

export default function Wallet() {
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <Block width={width} height={218}>
        <Image
          source={image.image_header}
          width={width}
          height={218}
          resizeMode="cover">
          <HeaderTile
            title={'Ví của bạn'}
            background={COLORS.white2}
            canGoBack
            colorIcon={COLORS.white}
            colorText={COLORS.white}
          />
          <Text fontSize={40} bold color={COLORS.white} center>
            30.000.000 đ
          </Text>
          <Text fontSize={14} regular color={COLORS.white} center>
            Số dư khả dụng từ thu nhập, nạp, rút
          </Text>
          <Block row gap={12.3} marginHorizontal={12} marginTop={18}>
            <Pressable
              onPress={() => commonRoot.navigate(router.RECHARGE)}
              width={(width - 48.6) / 3}
              height={52}
              backgroundColor={COLORS.white}
              radius={8}
              justifyCenter
              alignCenter
              rowCenter>
              <Image source={icon.icon_recharge} width={30} height={24.48} />
              <Text fontSize={14} regular color={COLORS.black2} marginLeft={9}>
                Nạp tiền
              </Text>
            </Pressable>
            <Pressable
              onPress={() => commonRoot.navigate(router.WITHDRAW)}
              width={(width - 48.6) / 3}
              height={52}
              backgroundColor={COLORS.white}
              radius={8}
              justifyCenter
              alignCenter
              rowCenter>
              <Image source={icon.icon_withdraw} width={30} height={24.48} />
              <Text fontSize={14} regular color={COLORS.black2} marginLeft={9}>
                Rút tiền
              </Text>
            </Pressable>
            <Pressable
              onPress={() => commonRoot.navigate(router.HISTORY_INCOME)}
              width={(width - 48.6) / 3}
              height={52}
              backgroundColor={COLORS.white}
              radius={8}
              justifyCenter
              alignCenter
              rowCenter>
              <Image
                source={icon.icon_history_income}
                width={30}
                height={24.48}
              />
              <Text fontSize={14} regular color={COLORS.black2} marginLeft={9}>
                Lịch sử
              </Text>
            </Pressable>
          </Block>
        </Image>
      </Block>
      <Block marginTop={15} marginHorizontal={12}>
        <Block backgroundColor={COLORS.white} radius={8} paddingBottom={15}>
          <Block row marginTop={12} marginHorizontal={12}>
            <Block
              width={40}
              height={40}
              radius={40}
              backgroundColor={COLORS.yellowwhite}
              justifyCenter
              alignCenter>
              <Image source={icon.ic_withdraw} width={25.07} height={19.09} />
            </Block>
            <Block
              width={width - 100}
              marginLeft={12}
              row
              spaceBetween
              marginTop={14}>
              <Block>
                <Text fontSize={15} semiBold color={COLORS.black2}>
                  Lệnh rút tiền
                </Text>
                <Text fontSize={14} regular color={COLORS.red4} marginTop={15}>
                  1.500.000 đ
                </Text>
              </Block>
              <Block>
                <Text fontSize={14} regular color={COLORS.placeholder}>
                  08/ 04/2025
                </Text>
                <Text
                  fontSize={14}
                  regular
                  color={COLORS.orange4}
                  marginTop={16}>
                  Chờ duyệt
                </Text>
              </Block>
            </Block>
          </Block>
        </Block>
        <Block marginTop={20}>
          <Text fontSize={15} semiBold color={COLORS.black2}>
            Giao dịch gần đây
          </Text>
          <Block marginTop={18} gap={15}>
            <Block backgroundColor={COLORS.white} radius={8} paddingBottom={15}>
              <Block row marginTop={12} marginHorizontal={12}>
                <Block
                  width={40}
                  height={40}
                  radius={40}
                  backgroundColor={COLORS.yellowwhite}
                  justifyCenter
                  alignCenter>
                  <Image
                    source={icon.ic_withdraw_success}
                    width={25.07}
                    height={19.09}
                  />
                </Block>
                <Block
                  width={width - 100}
                  marginLeft={12}
                  row
                  spaceBetween
                  marginTop={14}>
                  <Block>
                    <Text fontSize={15} semiBold color={COLORS.black2}>
                      Rút tiền thành công
                    </Text>
                    <Text
                      fontSize={14}
                      regular
                      color={COLORS.red4}
                      marginTop={15}>
                      -150.000 đ
                    </Text>
                  </Block>
                  <Block>
                    <Text fontSize={14} regular color={COLORS.placeholder}>
                      08/ 04/2025
                    </Text>
                  </Block>
                </Block>
              </Block>
            </Block>
            <Block backgroundColor={COLORS.white} radius={8} paddingBottom={15}>
              <Block row marginTop={12} marginHorizontal={12}>
                <Block
                  width={40}
                  height={40}
                  radius={40}
                  overflow={'hidden'}
                  backgroundColor={COLORS.yellowwhite}
                  justifyCenter
                  alignCenter>
                  <Image
                    source={image.image_san_service}
                    width={40}
                    height={40}
                    resizeMode="cover"
                  />
                </Block>
                <Block
                  width={width - 100}
                  marginLeft={12}
                  row
                  spaceBetween
                  marginTop={14}>
                  <Block>
                    <Text fontSize={15} semiBold color={COLORS.black2}>
                      Thu nhập từ dịch vụ
                    </Text>
                    <Text
                      fontSize={14}
                      regular
                      color={COLORS.green6}
                      marginTop={15}>
                      +390.000 đ
                    </Text>
                  </Block>
                  <Block>
                    <Text fontSize={14} regular color={COLORS.placeholder}>
                      08/ 04/2025
                    </Text>
                  </Block>
                </Block>
              </Block>
              <Text
                marginTop={15}
                marginLeft={64}
                fontSize={14}
                regular
                color={COLORS.placeholder}
                numberOfLines={1}>
                Bạn đã hoàn thành dịch vụ "Chăm sóc người...
              </Text>
            </Block>
            <Block backgroundColor={COLORS.white} radius={8} paddingBottom={15}>
              <Block row marginTop={12} marginHorizontal={12}>
                <Block
                  width={40}
                  height={40}
                  radius={40}
                  backgroundColor={COLORS.greenWhite}
                  justifyCenter
                  alignCenter>
                  <Image
                    source={icon.ic_recharge_success}
                    width={25.07}
                    height={19.09}
                  />
                </Block>
                <Block
                  width={width - 100}
                  marginLeft={12}
                  row
                  spaceBetween
                  marginTop={14}>
                  <Block>
                    <Text fontSize={15} semiBold color={COLORS.black2}>
                      Nạp tiền thành công
                    </Text>
                    <Text
                      fontSize={14}
                      regular
                      color={COLORS.green6}
                      marginTop={15}>
                      +150.000 đ
                    </Text>
                  </Block>
                  <Block>
                    <Text fontSize={14} regular color={COLORS.placeholder}>
                      08/ 04/2025
                    </Text>
                  </Block>
                </Block>
              </Block>
            </Block>
          </Block>
        </Block>
      </Block>
    </Block>
  );
}
