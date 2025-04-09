import {icon} from '@assets';
import {
  Block,
  Image,
  ProgressBar,
  ScrollView,
  Text,
  HeaderTile,
} from '@components';
import {width} from '@responsive';
import {COLORS} from '@theme';
import {Table, Row, Rows} from 'react-native-table-component';

export default function DetailUpComming() {
  const data = {
    tableHead: ['Mốc', 'Số điểm', 'Mức thưởng'],
    tableData: [
      ['1', '120', '110.000đ'],
      ['2', '300', '280.000đ'],
      ['3', '500', '800.000đ'],
      ['4', '1000', '1.800.000đ'],
      ['5', '2000', '3.000.000đ'],
    ],
  };
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <HeaderTile canGoBack title={'Nhân viên đáng tin cậy'} />
      <ScrollView contentContainerStyle={{paddingBottom: 152}}>
        <Block
          marginTop={15}
          marginHorizontal={12}
          backgroundColor={COLORS.white}
          paddingBottom={19}
          radius={8}>
          <Block marginTop={12} marginHorizontal={12}>
            <Block row spaceBetween>
              <Block marginTop={5}>
                <Text fontSize={15} semiBold color={COLORS.red4} capitalize>
                  Nhân viên đáng tin cậy
                </Text>
                <Text
                  marginTop={12}
                  fontSize={13}
                  regular
                  color={COLORS.black2}
                  center>
                  Chu kỳ 01 - 08/03/2025
                </Text>
              </Block>
              <Block
                width={width - 301}
                height={34}
                backgroundColor={COLORS.yellowwhite}
                radius={20}
                justifyCenter
                alignCenter>
                <Text fontSize={14} medium color={COLORS.yellow3}>
                  Thưởng tuần
                </Text>
              </Block>
            </Block>
            <Block marginTop={22}>
              <Block marginBottom={10} row marginLeft={16} spaceBetween>
                {Array.from({length: 5}).map((_, index) => (
                  <Block key={index}>
                    <Image
                      source={icon.icon_point_bonus}
                      width={47.25}
                      height={49.68}
                    />
                    <Block
                      absolute
                      top={3.6}
                      left={4}
                      backgroundColor={COLORS.white}
                      width={39}
                      height={35}
                      radius={5}
                      justifyCenter
                      alignCenter>
                      <Text fontSize={13} semiBold color={COLORS.red4}>
                        200
                      </Text>
                    </Block>
                  </Block>
                ))}
              </Block>
              <ProgressBar
                width={width - 99}
                height={8}
                radius={4}
                backgroundColor={COLORS.gray11}
                progressColor={COLORS.gradient5}
                total={2000}
                used={0}
              />
              <Block row marginTop={14.5} spaceBetween width={width - 77}>
                {Array.from({length: 5}).map((_, index) => (
                  <Text key={index} fontSize={13} regular color={COLORS.black2}>
                    100k
                  </Text>
                ))}
              </Block>
            </Block>
            <Block
              marginTop={18.8}
              borderTopWidth={1}
              borderBottomWidth={1}
              borderColor={COLORS.borderColor1}>
              <Block gap={12} marginVertical={12}>
                <Block rowCenter spaceBetween>
                  <Block rowCenter>
                    <Image
                      source={icon.icon_points_achieved}
                      width={22}
                      height={22}
                    />
                    <Text
                      marginLeft={8}
                      fontSize={15}
                      regular
                      color={COLORS.placeholder}>
                      Điểm đã đạt được
                    </Text>
                  </Block>
                  <Text fontSize={15} regular color={COLORS.black2}>
                    0 điểm
                  </Text>
                </Block>
                <Block borderWidth={1} borderColor={COLORS.borderColor1} />
                <Block rowCenter spaceBetween>
                  <Block rowCenter>
                    <Image source={icon.icon_bonus} width={22} height={22} />
                    <Text
                      marginLeft={8}
                      fontSize={15}
                      regular
                      color={COLORS.placeholder}>
                      Tiền thưởng
                    </Text>
                  </Block>
                  <Text fontSize={15} regular color={COLORS.black2}>
                    0 đ
                  </Text>
                </Block>
                <Block borderWidth={1} borderColor={COLORS.borderColor1} />
                <Block rowCenter spaceBetween>
                  <Block rowCenter>
                    <Image
                      source={icon.icon_calendar_star}
                      width={22}
                      height={22}
                    />
                    <Text
                      marginLeft={8}
                      fontSize={15}
                      regular
                      color={COLORS.placeholder}>
                      Thời gian kết thúc
                    </Text>
                  </Block>
                  <Text fontSize={15} regular color={COLORS.black2}>
                    23:59, 08/03/2025
                  </Text>
                </Block>
              </Block>
            </Block>
            <Block marginTop={7}>
              <Text fontSize={15} semiBold color={COLORS.black2}>
                Chi tiết chương trình
              </Text>
              <Text fontSize={14} regular color={COLORS.black2} lineHeight={25}>
                Lorem ipsum dolor sit amet, consectetur adipieiusmod tempor
                incidunt ut labore et dt mt aliquai Ut eni minim veniam, qt
                exercitationem ullam corporis i laboriosam, nisi ut alimi
                commodi consequatur. Quis reprehenderit in voluptate velit esse
                cillum dolore eu fu reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla
              </Text>
            </Block>
            <Block marginTop={19}>
              <Table
                borderStyle={{borderWidth: 1, borderColor: COLORS.grayWhite}}>
                <Row
                  data={data.tableHead}
                  textStyle={{textAlign: 'center'}}
                  style={{backgroundColor: COLORS.gray15, height: 40}}
                />
                <Rows
                  data={data.tableData}
                  textStyle={{textAlign: 'center'}}
                  style={{height: 40}}
                />
              </Table>
            </Block>
            <Text
              fontSize={14}
              regular
              color={COLORS.black2}
              lineHeight={25}
              marginTop={10}>
              Lorem ipsum dolor sit amet, consectetur adipieiusmod tempor
              incidunt ut labore et dt mt aliquai Ut eni minim veniam, qt
              exercitationem ullam corporis i laboriosam, nisi ut alimi commodi
              consequatur. Quis reprehenderit in voluptate velit esse cillum
              dolore eu fu reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla
            </Text>
          </Block>
        </Block>
      </ScrollView>
    </Block>
  );
}
