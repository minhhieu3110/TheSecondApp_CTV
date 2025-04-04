import {icon, image, lotties} from '@assets';
import {
  Block,
  DoubleButton,
  HeaderTile,
  Image,
  ScrollView,
  Text,
} from '@components';
import {width} from '@responsive';
import {COLORS} from '@theme';

export default function Detail_CompleteJob() {
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <HeaderTile title={'Chi tiết công việc'} canGoBack />
      <ScrollView contentContainerStyle={{paddingBottom: 50}}>
        <Block marginTop={15} marginHorizontal={12}>
          <Block padding={12} backgroundColor={COLORS.white} radius={8}>
            <Block rowCenter>
              <Image source={icon.icon_housework} width={59} height={66.87} />
              <Block marginLeft={15}>
                <Text fontSize={15} semiBold color={COLORS.black2}>
                  Dịch vụ dọn vệ sinh
                </Text>
                <Text
                  fontSize={15}
                  regular
                  color={COLORS.placeholder}
                  marginTop={11}>
                  Quận Tân Bình
                </Text>
              </Block>
            </Block>
          </Block>
          <Block marginTop={20}>
            <Text fontSize={15} semiBold color={COLORS.black2}>
              Chi tiết thời gian
            </Text>
            <Block
              marginTop={13}
              backgroundColor={COLORS.white}
              radius={8}
              paddingBottom={15}>
              <Block marginHorizontal={12} marginTop={17} gap={15}>
                <Block rowCenter spaceBetween>
                  <Text fontSize={15} regular color={COLORS.placeholder}>
                    Thời gian đến
                  </Text>
                  <Text fontSize={15} regular color={COLORS.red4}>
                    17:30- Thứ 7, 02/01/2025
                  </Text>
                </Block>
                <Block borderWidth={1} borderColor={COLORS.borderColor1} />
                <Block rowCenter spaceBetween>
                  <Text fontSize={15} regular color={COLORS.placeholder}>
                    Thời gian về
                  </Text>
                  <Text fontSize={15} regular color={COLORS.green6}>
                    21:34- Thứ 7, 02/01/2025
                  </Text>
                </Block>
              </Block>
            </Block>
          </Block>
          <Block marginTop={20.8}>
            <Text fontSize={15} semiBold color={COLORS.black2}>
              Chi tiết công việc
            </Text>
            <Block
              marginTop={15}
              radius={8}
              backgroundColor={COLORS.white}
              paddingBottom={14}
              paddingHorizontal={12}
              paddingTop={12}
              gap={12}>
              <Block row>
                <Image source={icon.icon_staff} width={22} height={22} />
                <Block marginLeft={8} gap={13} width={width - 76}>
                  <Text fontSize={15} medium color={COLORS.black2}>
                    Lâm Minh Hoàng
                  </Text>
                  <Text fontSize={14} regular color={COLORS.red4}>
                    0909 123 456
                  </Text>
                  <Text
                    fontSize={14}
                    regular
                    color={COLORS.black2}
                    numberOfLines={2}>
                    107 đường Cộng Hòa, Phường 12, quận Tân Bình, Tp.HCM
                  </Text>
                  <Block
                    marginTop={2}
                    borderWidth={1}
                    borderColor={COLORS.borderColor1}
                  />
                </Block>
              </Block>
              <Block row>
                <Image source={icon.icon_calendar} width={22} height={22} />
                <Block marginLeft={8} gap={13} width={width - 76}>
                  <Block rowCenter spaceBetween>
                    <Text fontSize={15} regular color={COLORS.placeholder}>
                      Ngày làm việc
                    </Text>
                    <Text fontSize={14} regular color={COLORS.black2}>
                      Thứ 7, 02/01/2025
                    </Text>
                  </Block>
                  <Block
                    marginTop={2}
                    borderWidth={1}
                    borderColor={COLORS.borderColor1}
                  />
                </Block>
              </Block>
              <Block row>
                <Image source={icon.icon_time} width={22} height={22} />
                <Block marginLeft={8} gap={13} width={width - 76}>
                  <Block rowCenter spaceBetween>
                    <Text fontSize={15} regular color={COLORS.placeholder}>
                      Thời gian làm việc
                    </Text>
                    <Text fontSize={14} regular color={COLORS.black2}>
                      4 giờ, 17:30 đến 21:30
                    </Text>
                  </Block>
                  <Block
                    marginTop={2}
                    borderWidth={1}
                    borderColor={COLORS.borderColor1}
                  />
                </Block>
              </Block>
              <Block row>
                <Image source={icon.icon_detail_work} width={22} height={22} />
                <Block marginLeft={8} gap={13} width={width - 76}>
                  <Text fontSize={15} regular color={COLORS.placeholder}>
                    Chi tiết công việc
                  </Text>
                  <Text fontSize={15} regular color={COLORS.placeholder}>
                    Chăm người bệnh tại nhà
                  </Text>
                  <Text
                    fontSize={14}
                    regular
                    color={COLORS.black2}
                    numberOfLines={2}>
                    Chi chú: Nam khoẻ, có nhiều kinh nghiệm
                  </Text>
                </Block>
              </Block>
            </Block>
          </Block>
          <Text fontSize={15} semiBold color={COLORS.black2} marginTop={20}>
            Chi tiết thu nhập
          </Text>
          <Block
            marginTop={15}
            backgroundColor={COLORS.white}
            paddingBottom={16}
            radius={8}>
            <Block marginHorizontal={12} marginTop={16}>
              <Block rowCenter spaceBetween>
                <Text fontSize={14} regular color={COLORS.placeholder}>
                  Tổng thanh toán
                </Text>
                <Text fontSize={15} regular color={COLORS.black2}>
                  2.000.000 đ
                </Text>
              </Block>
              <Block
                marginTop={15}
                borderWidth={1}
                borderColor={COLORS.gray11}
              />
              <Block marginTop={18} rowCenter spaceBetween>
                <Text fontSize={14} regular color={COLORS.placeholder}>
                  Thu nhập
                </Text>
                <Text fontSize={18} semiBold color={COLORS.green6}>
                  +200.000 đ
                </Text>
              </Block>
            </Block>
          </Block>
        </Block>
      </ScrollView>
      <DoubleButton title1="Hỗ trợ" title2="Xem đánh giá" />
    </Block>
  );
}
