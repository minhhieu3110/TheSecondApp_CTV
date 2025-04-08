import {image} from '@assets';
import {
  Block,
  HeaderTile,
  Icon,
  Image,
  RankStar,
  ScrollView,
  SelectInput,
  Text,
} from '@components';
import {height, width} from '@responsive';
import {COLORS} from '@theme';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useForm} from 'react-hook-form';
import Octicons from 'react-native-vector-icons/Octicons';
export default function Evaluate() {
  const {control} = useForm();
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <HeaderTile title={'Đánh giá'} canGoBack />
      <ScrollView contentContainerStyle={{paddingBottom: 100}}>
        <Block marginTop={15} marginHorizontal={12}>
          <Block width={width - 24} height={94} radius={8} overflow={'hidden'}>
            <LinearGradient
              colors={COLORS.gradient5}
              style={{width: width - 24, height: 94, justifyContent: 'center'}}>
              <Block rowCenter marginLeft={12} width={200}>
                <Block
                  width={70}
                  height={70}
                  radius={70}
                  backgroundColor={COLORS.white}
                  justifyCenter
                  alignCenter>
                  <Block
                    width={66}
                    height={66}
                    radius={66}
                    justifyCenter
                    alignCenter
                    overflow={'hidden'}>
                    <Image
                      source={image.image_staff}
                      width={66}
                      height={66}
                      resizeMode="cover"
                    />
                  </Block>
                </Block>
                <Block marginLeft={18}>
                  <Text fontSize={15} semiBold color={COLORS.white}>
                    Trần Thanh Hải
                  </Text>
                  <Block rowCenter marginLeft={5}>
                    <Text fontSize={14} regular color={COLORS.yellow3}>
                      246 đánh giá
                    </Text>
                    <Block
                      height={21}
                      marginHorizontal={15}
                      borderWidth={1}
                      borderColor={COLORS.white}
                    />
                    <Block rowCenter>
                      <Text fontSize={18} semiBold color={COLORS.white}>
                        4.8
                      </Text>
                      <Icon
                        marginLeft={5}
                        IconType={FontAwesome}
                        iconName={'star'}
                        iconSize={18}
                        iconColor={COLORS.yellow3}
                      />
                    </Block>
                  </Block>
                </Block>
              </Block>
            </LinearGradient>
          </Block>
          <Block
            marginTop={15}
            paddingBottom={15}
            backgroundColor={COLORS.white}
            radius={8}>
            <Block marginHorizontal={12} marginTop={12}>
              <Block
                rowCenter
                height={45}
                borderWidth={1}
                borderColor={COLORS.gray15}
                radius={5}
                gap={12}>
                <Block width={(width - 74) / 2} height={45} justifyCenter>
                  <Block rowCenter spaceBetween marginLeft={16}>
                    <Text fontSize={12} regular color={COLORS.black2}>
                      Tháng 1
                    </Text>
                    <Icon
                      IconType={Octicons}
                      iconName={'chevron-down'}
                      iconSize={18.8}
                      iconColor={COLORS.placeholder}
                    />
                  </Block>
                </Block>
                <Block
                  height={27}
                  borderWidth={1}
                  borderColor={COLORS.gray15}
                />
                <Block width={(width - 74) / 2} height={45} justifyCenter>
                  <Block rowCenter spaceBetween marginLeft={16}>
                    <Text fontSize={12} regular color={COLORS.black2}>
                      Năm 2025
                    </Text>
                    <Icon
                      IconType={Octicons}
                      iconName={'chevron-down'}
                      iconSize={18.8}
                      iconColor={COLORS.placeholder}
                    />
                  </Block>
                </Block>
              </Block>
              <Block rowCenter spaceBetween marginTop={25}>
                <Text fontSize={15} semiBold color={COLORS.black2}>
                  Khách hàng đánh giá
                </Text>
                <Text fontSize={14} regular color={COLORS.placeholder}>
                  17 đánh giá
                </Text>
              </Block>
              <Block
                marginTop={15}
                borderTopWidth={1}
                borderColor={COLORS.borderColor2}>
                <Block marginTop={15}>
                  <Block rowCenter>
                    <Block
                      width={40}
                      height={40}
                      radius={40}
                      overflow={'hidden'}>
                      <Image
                        width={40}
                        height={40}
                        source={image.image_san_service}
                        resizeMode="cover"
                      />
                    </Block>
                    <Block
                      width={width - 99}
                      marginLeft={8}
                      rowCenter
                      spaceBetween>
                      <Text fontSize={15} medium color={COLORS.black2}>
                        Hoàng Hải Nam
                      </Text>
                      <Text fontSize={14} regular color={COLORS.placeholder}>
                        01/01/2025
                      </Text>
                    </Block>
                  </Block>
                  <RankStar top={10} width={width - 300} size={20} value={5} />
                  <Text
                    marginTop={10}
                    fontSize={14}
                    regular
                    color={COLORS.black2}>
                    Nhân viên nhiệt tình, làm việc có trách nhiệm
                  </Text>
                  <Block marginTop={10} row>
                    <Block
                      width={71}
                      height={71}
                      radius={7}
                      overflow={'hidden'}>
                      <Image
                        source={image.image_san_service}
                        width={71}
                        height={71}
                        resizeMode="cover"
                      />
                    </Block>
                  </Block>
                </Block>
              </Block>
              <Block
                marginTop={15}
                borderTopWidth={1}
                borderColor={COLORS.borderColor2}>
                <Block marginTop={15}>
                  <Block rowCenter>
                    <Block
                      width={40}
                      height={40}
                      radius={40}
                      overflow={'hidden'}>
                      <Image
                        width={40}
                        height={40}
                        source={image.image_san_service}
                        resizeMode="cover"
                      />
                    </Block>
                    <Block
                      width={width - 99}
                      marginLeft={8}
                      rowCenter
                      spaceBetween>
                      <Text fontSize={15} medium color={COLORS.black2}>
                        Hoàng Hải Nam
                      </Text>
                      <Text fontSize={14} regular color={COLORS.placeholder}>
                        01/01/2025
                      </Text>
                    </Block>
                  </Block>
                  <RankStar top={10} width={width - 300} size={20} value={4} />
                </Block>
              </Block>
            </Block>
          </Block>
        </Block>
      </ScrollView>
    </Block>
  );
}
