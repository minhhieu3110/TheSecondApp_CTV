import {icon, image} from '@assets';
import {Block, HeaderMain, Icon, Image, ScrollView, Text} from '@components';
import {width} from '@responsive';
import {COLORS} from '@theme';
import RadialGradient from 'react-native-radial-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';
export default function AccountScreen() {
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      {/* <HeaderMain /> */}
      <ScrollView contentContainerStyle={{paddingBottom: 20}}>
        <HeaderMain
          title={
            <Block alignCenter justifyCenter width={width}>
              <Text fontSize={16} bold color={COLORS.white} uppercase center>
                Trần Thanh Hải
              </Text>
              <Text marginTop={14} fontSize={14} regular color={COLORS.white}>
                Haitran123@gmail.com
              </Text>
              <Text marginTop={11} fontSize={14} medium color={COLORS.yellow3}>
                09909 123 456
              </Text>
            </Block>
          }
        />

        <Block alignCenter>
          <Block
            width={101}
            height={101}
            marginTop={-59}
            radius={101}
            backgroundColor={COLORS.white}
            justifyCenter
            alignCenter>
            <Image
              source={image.image_staff}
              width={95}
              height={95}
              radius={95}
            />
          </Block>
        </Block>
        <Block marginTop={15} row gap={10} marginHorizontal={12}>
          <Block
            width={(width - 44) / 3}
            paddingBottom={15}
            backgroundColor={COLORS.white}
            radius={8}
            alignCenter>
            <Text marginTop={16} fontSize={13} regular color={COLORS.black2}>
              Ví của bạn
            </Text>
            <Image
              source={icon.icon_wallet}
              width={48}
              height={48}
              marginTop={8}
            />
            <Text fontSize={14} semiBold color={COLORS.red4} marginTop={11}>
              23.000.000đ
            </Text>
          </Block>
          <Block
            width={(width - 44) / 3}
            paddingBottom={15}
            backgroundColor={COLORS.white}
            radius={8}
            alignCenter>
            <Text marginTop={16} fontSize={13} regular color={COLORS.black2}>
              Đánh giá
            </Text>
            <Image
              source={icon.icon_evaluate}
              width={48}
              height={48}
              marginTop={8}
            />
            <Block marginTop={9} rowCenter>
              <Text fontSize={14} semiBold color={COLORS.red4}>
                4.8
              </Text>
              <Icon
                marginLeft={5}
                IconType={FontAwesome}
                iconName={'star'}
                iconColor={COLORS.yellow3}
                iconSize={18}
              />
            </Block>
          </Block>
          <Block
            width={(width - 44) / 3}
            paddingBottom={15}
            backgroundColor={COLORS.white}
            radius={8}
            alignCenter>
            <Text marginTop={16} fontSize={13} regular color={COLORS.black2}>
              Hạng thành viên
            </Text>
            <Image
              source={icon.icon_rank}
              width={48}
              height={48}
              marginTop={8}
            />
            <Text fontSize={14} semiBold color={COLORS.red4} marginTop={11}>
              Hạng vàng
            </Text>
          </Block>
        </Block>
        <Block
          marginTop={15}
          marginHorizontal={12}
          backgroundColor={COLORS.white}
          radius={8}
          paddingBottom={12}>
          <Block marginTop={17} marginHorizontal={12}>
            <Text fontSize={15} semiBold color={COLORS.black2}>
              Việc làm của bạn
            </Text>
            <Block marginTop={18}>
              <Block rowCenter>
                <Block
                  width={50}
                  height={50}
                  radius={50}
                  backgroundColor={COLORS.pinkWhite2}
                  justifyCenter
                  alignCenter>
                  <Image source={icon.icon_new_job} width={31} height={31} />
                </Block>
                <Block marginLeft={15} width={width - 117}>
                  <Block rowCenter spaceBetween>
                    <Text fontSize={15} regular color={COLORS.black2}>
                      Việc làm mới
                    </Text>
                    <Block rowCenter>
                      <Block
                        width={21}
                        height={21}
                        radius={21}
                        backgroundColor={COLORS.red4}
                        justifyCenter
                        alignCenter>
                        <Text fontSize={13} regular color={COLORS.white}>
                          2
                        </Text>
                      </Block>
                      <Block marginLeft={12} width={7} height={11.67}>
                        <Icon
                          IconType={Octicons}
                          iconName={'chevron-right'}
                          iconColor={COLORS.lightGray1}
                          iconSize={13}
                        />
                      </Block>
                    </Block>
                  </Block>
                </Block>
              </Block>
              <Block marginTop={12} alignEnd>
                <Block
                  width={width - 117}
                  borderWidth={1}
                  borderColor={COLORS.borderColor2}
                />
              </Block>
              <Block rowCenter marginTop={12}>
                <Block
                  width={50}
                  height={50}
                  radius={50}
                  backgroundColor={COLORS.pinkWhite2}
                  justifyCenter
                  alignCenter>
                  <Image
                    source={icon.icon_receive_job}
                    width={31}
                    height={31}
                  />
                </Block>
                <Block marginLeft={15} width={width - 117}>
                  <Block rowCenter spaceBetween>
                    <Text fontSize={15} regular color={COLORS.black2}>
                      Việc làm đã nhận
                    </Text>
                    <Block rowCenter>
                      <Block
                        width={21}
                        height={21}
                        radius={21}
                        backgroundColor={COLORS.red4}
                        justifyCenter
                        alignCenter>
                        <Text fontSize={13} regular color={COLORS.white}>
                          2
                        </Text>
                      </Block>
                      <Block marginLeft={12} width={7} height={11.67}>
                        <Icon
                          IconType={Octicons}
                          iconName={'chevron-right'}
                          iconColor={COLORS.lightGray1}
                          iconSize={13}
                        />
                      </Block>
                    </Block>
                  </Block>
                </Block>
              </Block>
              <Block marginTop={12} alignEnd>
                <Block
                  width={width - 117}
                  borderWidth={1}
                  borderColor={COLORS.borderColor2}
                />
              </Block>
              <Block rowCenter marginTop={12}>
                <Block
                  width={50}
                  height={50}
                  radius={50}
                  backgroundColor={COLORS.pinkWhite2}
                  justifyCenter
                  alignCenter>
                  <Image source={icon.icon_doing_job} width={31} height={31} />
                </Block>
                <Block marginLeft={15} width={width - 117}>
                  <Block rowCenter spaceBetween>
                    <Text fontSize={15} regular color={COLORS.black2}>
                      Việc làm đang thực hiện
                    </Text>
                    <Block rowCenter>
                      <Block
                        width={21}
                        height={21}
                        radius={21}
                        backgroundColor={COLORS.red4}
                        justifyCenter
                        alignCenter>
                        <Text fontSize={13} regular color={COLORS.white}>
                          2
                        </Text>
                      </Block>
                      <Block marginLeft={12} width={7} height={11.67}>
                        <Icon
                          IconType={Octicons}
                          iconName={'chevron-right'}
                          iconColor={COLORS.lightGray1}
                          iconSize={13}
                        />
                      </Block>
                    </Block>
                  </Block>
                </Block>
              </Block>
              <Block marginTop={12} alignEnd>
                <Block
                  width={width - 117}
                  borderWidth={1}
                  borderColor={COLORS.borderColor2}
                />
              </Block>
              <Block rowCenter marginTop={12}>
                <Block
                  width={50}
                  height={50}
                  radius={50}
                  backgroundColor={COLORS.pinkWhite2}
                  justifyCenter
                  alignCenter>
                  <Image
                    source={icon.icon_complete_job}
                    width={31}
                    height={31}
                  />
                </Block>
                <Block marginLeft={15} width={width - 117}>
                  <Block rowCenter spaceBetween>
                    <Text fontSize={15} regular color={COLORS.black2}>
                      Việc làm đã hoàn thành
                    </Text>
                    <Block rowCenter>
                      <Block
                        width={21}
                        height={21}
                        radius={21}
                        backgroundColor={COLORS.red4}
                        justifyCenter
                        alignCenter>
                        <Text fontSize={13} regular color={COLORS.white}>
                          2
                        </Text>
                      </Block>
                      <Block marginLeft={12} width={7} height={11.67}>
                        <Icon
                          IconType={Octicons}
                          iconName={'chevron-right'}
                          iconColor={COLORS.lightGray1}
                          iconSize={13}
                        />
                      </Block>
                    </Block>
                  </Block>
                </Block>
              </Block>
            </Block>
          </Block>
        </Block>
        <Block
          marginHorizontal={12}
          height={120}
          width={width - 24}
          radius={8}
          marginTop={15}
          overflow={'hidden'}>
          <RadialGradient
            style={{width: width - 24, height: 120, justifyContent: 'center'}}
            colors={COLORS.gradient5}
            radius={200}>
            <Block rowCenter marginLeft={12} marginRight={17} spaceBetween>
              <Block width={width - 220}>
                <Block rowCenter>
                  <Text fontSize={15} semiBold color={COLORS.yellow3} uppercase>
                    Chương trình thưởng
                  </Text>
                  <Block marginLeft={3} width={7} height={11.67}>
                    <Icon
                      IconType={Octicons}
                      iconName={'chevron-right'}
                      iconColor={COLORS.yellow3}
                      iconSize={13}
                    />
                  </Block>
                </Block>
                <Text
                  fontSize={13}
                  regular
                  color={COLORS.yellowwhite}
                  marginTop={15}>
                  Sự kiện của công ty để{'\n'}tăng thêm thu nhập cho CTV SAN
                </Text>
              </Block>
              <Image source={icon.icon_reward} width={123} height={116} />
            </Block>
          </RadialGradient>
        </Block>
        <Block
          marginTop={15}
          marginHorizontal={12}
          backgroundColor={COLORS.white}
          radius={8}
          paddingBottom={12}>
          <Block marginTop={17} marginHorizontal={12}>
            <Text fontSize={15} semiBold color={COLORS.black2}>
              Tài khoản
            </Text>
            <Block marginTop={18}>
              <Block rowCenter>
                <Block
                  width={50}
                  height={50}
                  radius={50}
                  backgroundColor={COLORS.pinkWhite2}
                  justifyCenter
                  alignCenter>
                  <Image
                    source={icon.icon_config_account}
                    width={17.88}
                    height={20}
                  />
                </Block>
                <Block marginLeft={15} width={width - 117}>
                  <Block rowCenter spaceBetween>
                    <Text fontSize={15} regular color={COLORS.black2}>
                      Thiết lập tài khoản
                    </Text>

                    <Block marginLeft={12} width={7} height={11.67}>
                      <Icon
                        IconType={Octicons}
                        iconName={'chevron-right'}
                        iconColor={COLORS.lightGray1}
                        iconSize={13}
                      />
                    </Block>
                  </Block>
                </Block>
              </Block>
              <Block marginTop={12} alignEnd>
                <Block
                  width={width - 117}
                  borderWidth={1}
                  borderColor={COLORS.borderColor2}
                />
              </Block>
              <Block rowCenter marginTop={12}>
                <Block
                  width={50}
                  height={50}
                  radius={50}
                  backgroundColor={COLORS.pinkWhite2}
                  justifyCenter
                  alignCenter>
                  <Image source={icon.icon_service} width={17.88} height={20} />
                </Block>
                <Block marginLeft={15} width={width - 117}>
                  <Block rowCenter spaceBetween>
                    <Text fontSize={15} regular color={COLORS.black2}>
                      Dịch vụ
                    </Text>

                    <Block marginLeft={12} width={7} height={11.67}>
                      <Icon
                        IconType={Octicons}
                        iconName={'chevron-right'}
                        iconColor={COLORS.lightGray1}
                        iconSize={13}
                      />
                    </Block>
                  </Block>
                </Block>
              </Block>
              <Block marginTop={12} alignEnd>
                <Block
                  width={width - 117}
                  borderWidth={1}
                  borderColor={COLORS.borderColor2}
                />
              </Block>
              <Block rowCenter marginTop={12}>
                <Block
                  width={50}
                  height={50}
                  radius={50}
                  backgroundColor={COLORS.pinkWhite2}
                  justifyCenter
                  alignCenter>
                  <Image
                    source={icon.icon_income_1}
                    width={17.88}
                    height={20}
                  />
                </Block>
                <Block marginLeft={15} width={width - 117}>
                  <Block rowCenter spaceBetween>
                    <Text fontSize={15} regular color={COLORS.black2}>
                      Thu nhập
                    </Text>

                    <Block marginLeft={12} width={7} height={11.67}>
                      <Icon
                        IconType={Octicons}
                        iconName={'chevron-right'}
                        iconColor={COLORS.lightGray1}
                        iconSize={13}
                      />
                    </Block>
                  </Block>
                </Block>
              </Block>
              <Block marginTop={12} alignEnd>
                <Block
                  width={width - 117}
                  borderWidth={1}
                  borderColor={COLORS.borderColor2}
                />
              </Block>
              <Block rowCenter marginTop={12}>
                <Block
                  width={50}
                  height={50}
                  radius={50}
                  backgroundColor={COLORS.pinkWhite2}
                  justifyCenter
                  alignCenter>
                  <Image
                    source={icon.icon_reffer_friend}
                    width={17.88}
                    height={20}
                  />
                </Block>
                <Block marginLeft={15} width={width - 117}>
                  <Block rowCenter spaceBetween>
                    <Text fontSize={15} regular color={COLORS.black2}>
                      Giới thiệu bạn bè
                    </Text>

                    <Block marginLeft={12} width={7} height={11.67}>
                      <Icon
                        IconType={Octicons}
                        iconName={'chevron-right'}
                        iconColor={COLORS.lightGray1}
                        iconSize={13}
                      />
                    </Block>
                  </Block>
                </Block>
              </Block>
            </Block>
          </Block>
        </Block>
        <Block
          marginTop={15}
          marginHorizontal={12}
          backgroundColor={COLORS.white}
          radius={8}
          paddingBottom={12}>
          <Block marginTop={17} marginHorizontal={12}>
            <Text fontSize={15} semiBold color={COLORS.black2}>
              Tiện ích
            </Text>
            <Block marginTop={18}>
              <Block rowCenter>
                <Block
                  width={50}
                  height={50}
                  radius={50}
                  backgroundColor={COLORS.pinkWhite2}
                  justifyCenter
                  alignCenter>
                  <Image source={icon.icon_help} width={17.88} height={20} />
                </Block>
                <Block marginLeft={15} width={width - 117}>
                  <Block rowCenter spaceBetween>
                    <Text fontSize={15} regular color={COLORS.black2}>
                      Hỗ trợ
                    </Text>

                    <Block marginLeft={12} width={7} height={11.67}>
                      <Icon
                        IconType={Octicons}
                        iconName={'chevron-right'}
                        iconColor={COLORS.lightGray1}
                        iconSize={13}
                      />
                    </Block>
                  </Block>
                </Block>
              </Block>
              <Block marginTop={12} alignEnd>
                <Block
                  width={width - 117}
                  borderWidth={1}
                  borderColor={COLORS.borderColor2}
                />
              </Block>
              <Block rowCenter marginTop={12}>
                <Block
                  width={50}
                  height={50}
                  radius={50}
                  backgroundColor={COLORS.pinkWhite2}
                  justifyCenter
                  alignCenter>
                  <Image source={icon.icon_setting} width={17.88} height={20} />
                </Block>
                <Block marginLeft={15} width={width - 117}>
                  <Block rowCenter spaceBetween>
                    <Text fontSize={15} regular color={COLORS.black2}>
                      Cài đặt
                    </Text>

                    <Block marginLeft={12} width={7} height={11.67}>
                      <Icon
                        IconType={Octicons}
                        iconName={'chevron-right'}
                        iconColor={COLORS.lightGray1}
                        iconSize={13}
                      />
                    </Block>
                  </Block>
                </Block>
              </Block>
            </Block>
          </Block>
        </Block>
        <Block marginTop={12} alignEnd marginLeft={12} marginRight={21}>
          <Block rowCenter>
            <Image source={icon.icon_logout} width={30} height={30} />
            <Text fontSize={15} regular color={COLORS.red4} marginLeft={10}>
              Đăng xuất
            </Text>
          </Block>
        </Block>
      </ScrollView>
    </Block>
  );
}
