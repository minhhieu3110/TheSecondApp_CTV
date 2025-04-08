import {icon} from '@assets';
import {Block, HeaderTile, Icon, Image, Pressable, Text} from '@components';
import {width} from '@responsive';
import router from '@router';
import {COLORS} from '@theme';
import {commonRoot} from 'navigation/navigationRef';
import {useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
export default function RankStaff() {
  const [bronze, setBronze] = useState(true);
  const [silver, setSilver] = useState(false);
  const [gold, setGold] = useState(false);
  const [diamon, setDiamon] = useState(false);

  const benefit = [
    {
      title: 'Đồng',
      titleBenefit: 'Hạng đồng',
      icon: `${icon.rank_bronze}`,
    },
    {
      title: 'Bạc',
      titleBenefit: 'Hạng bạc',
      icon: `${icon.rank_silver}`,
    },
    {
      title: 'Vàng',
      titleBenefit: 'Hạng vàng',
      icon: `${icon.rank_gold}`,
    },
    {
      title: 'Kim cương',
      titleBenefit: 'Hạng kim cương',
      icon: `${icon.rank_diamon}`,
    },
  ];
  const handleBenefit = title => {
    setBronze(false);
    setSilver(false);
    setGold(false);
    setDiamon(false);
    if (title === 'Đồng') setBronze(true);
    if (title === 'Bạc') setSilver(true);
    if (title === 'Vàng') setGold(true);
    if (title === 'Kim cương') setDiamon(true);
  };
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <HeaderTile title={'Hạng thành viên'} canGoBack />
      <Block
        width={width - 24}
        marginTop={12}
        radius={8}
        backgroundColor={COLORS.white}
        marginLeft={12}
        paddingBottom={12}
        justifyCenter>
        <Block marginTop={15} marginLeft={11} row>
          <Block width={62.37} height={62}>
            <Image source={icon.rank_gold} width={62.37} height={62} />
          </Block>
          <Block marginLeft={12.8} marginTop={5}>
            <Text fontSize={18} semiBold color={COLORS.black5}>
              Hạng vàng
            </Text>
            <Text fontSize={14} regular color={COLORS.placeholder}>
              Có hiệu lực đến ngày 31/12/2025
            </Text>
          </Block>
        </Block>
        <Block
          width={width - 48}
          height={5}
          marginLeft={12}
          marginTop={15}
          backgroundColor={COLORS.gray11}
        />
        <Block width={width - 44.5} marginTop={14} marginLeft={10}>
          <Text fontSize={15} semiBold color={COLORS.black2} marginBottom={20}>
            Hoạt động
          </Text>
          <Block rowCenter spaceBetween>
            <Text fontSize={15} semiBold color={COLORS.black5}>
              Tiêu chí
            </Text>
            <Text fontSize={15} semiBold color={COLORS.black5}>
              Đã đạt
            </Text>
            <Text fontSize={15} semiBold color={COLORS.black5}>
              Lên hạng
            </Text>
          </Block>
          <Block
            borderWidth={1}
            borderColor={COLORS.grayBreak}
            marginTop={15}
          />
          <Block rowCenter spaceBetween marginTop={17}>
            <Text fontSize={15} regular color={COLORS.black5}>
              Thu nhập
            </Text>
            <Text fontSize={15} semiBold color={COLORS.red4}>
              5.5 triệu
            </Text>
            <Text fontSize={15} regular color={COLORS.black5}>
              8 triệu
            </Text>
          </Block>
          <Block
            borderWidth={1}
            borderColor={COLORS.grayBreak}
            marginTop={15}
          />
          <Block rowCenter spaceBetween marginTop={17}>
            <Text fontSize={15} regular color={COLORS.black5}>
              Số sao trung bình
            </Text>
            <Text fontSize={15} semiBold color={COLORS.red4}>
              5
            </Text>
            <Text fontSize={15} regular color={COLORS.black5}>
              4.8
            </Text>
          </Block>
          <Block
            borderWidth={1}
            borderColor={COLORS.grayBreak}
            marginTop={15}
          />
          <Block rowCenter spaceBetween marginTop={17}>
            <Text fontSize={15} regular color={COLORS.black5}>
              Tỉ lệ hoàn thành
            </Text>
            <Text fontSize={15} semiBold color={COLORS.red4}>
              100%
            </Text>
            <Text fontSize={15} regular color={COLORS.black5}>
              80%
            </Text>
          </Block>
        </Block>
      </Block>
      <Block
        width={width - 24}
        marginLeft={12}
        marginTop={17}
        radius={8}
        paddingBottom={13}
        backgroundColor={COLORS.white}>
        <Text
          fontSize={15}
          semiBold
          color={COLORS.black2}
          marginTop={15}
          marginLeft={13}>
          Quyền lợi cộng tác viên
        </Text>
        <Block
          width={width - 50.5}
          marginTop={20}
          marginLeft={12}
          paddingBottom={11}
          row
          spaceBetween>
          {benefit.map(bene => (
            <Pressable
              onPress={() => handleBenefit(bene.title)}
              width={80}
              height={94}
              justifyCenter
              opacity={
                (bronze && bene.title === 'Đồng') ||
                (silver && bene.title === 'Bạc') ||
                (gold && bene.title === 'Vàng') ||
                (diamon && bene.title === 'Kim cương')
                  ? ''
                  : 0.3
              }
              key={bene.title}>
              <Image source={bene.icon} width={68.66} height={66.71} />
              <Text
                marginTop={12.3}
                fontSize={15}
                regular
                color={COLORS.black5}
                lineHeight={18}
                height={17}
                center>
                {bene.title}
              </Text>
            </Pressable>
          ))}
        </Block>
        <Block
          width={width - 48}
          height={5}
          marginLeft={13}
          marginTop={18}
          backgroundColor={COLORS.gray11}
        />
        {bronze && (
          <Block>
            <Text
              fontSize={16}
              bold
              color={COLORS.black5}
              marginLeft={12}
              marginTop={15}>
              Hạng đồng
            </Text>
            <Block marginLeft={12} marginTop={13}>
              {Array.from({length: 4}).map((_, index) => (
                <Block key={index} row alignCenter marginBottom={10}>
                  <Image source={icon.rank_bronze} width={14} height={14} />
                  <Text
                    marginLeft={8.5}
                    fontSize={14}
                    regular
                    color={COLORS.black5}>
                    Lorem Ipsum is simply dummy text of the printing
                  </Text>
                </Block>
              ))}
            </Block>
          </Block>
        )}
        {silver && (
          <Block>
            <Text
              fontSize={16}
              bold
              color={COLORS.black5}
              marginLeft={12}
              marginTop={15}>
              Hạng bạc
            </Text>
            <Block marginLeft={12} marginTop={13}>
              {Array.from({length: 4}).map((_, index) => (
                <Block key={index} row alignCenter marginBottom={10}>
                  <Image source={icon.rank_silver} width={14} height={14} />
                  <Text
                    marginLeft={8.5}
                    fontSize={14}
                    regular
                    color={COLORS.black5}>
                    Lorem Ipsum is simply dummy text of the printing
                  </Text>
                </Block>
              ))}
            </Block>
          </Block>
        )}
        {gold && (
          <Block>
            <Text
              fontSize={16}
              bold
              color={COLORS.black5}
              marginLeft={12}
              marginTop={15}>
              Hạng vàng
            </Text>
            <Block marginLeft={12} marginTop={13}>
              {Array.from({length: 4}).map((_, index) => (
                <Block key={index} row alignCenter marginBottom={10}>
                  <Image source={icon.rank_gold} width={14} height={14} />
                  <Text
                    marginLeft={8.5}
                    fontSize={14}
                    regular
                    color={COLORS.black5}>
                    Lorem Ipsum is simply dummy text of the printing
                  </Text>
                </Block>
              ))}
            </Block>
          </Block>
        )}
        {diamon && (
          <Block>
            <Text
              fontSize={16}
              bold
              color={COLORS.black5}
              marginLeft={12}
              marginTop={15}>
              Hạng kim cương
            </Text>
            <Block marginLeft={12} marginTop={13}>
              {Array.from({length: 4}).map((_, index) => (
                <Block key={index} row alignCenter marginBottom={10}>
                  <Image source={icon.rank_diamon} width={14} height={14} />
                  <Text
                    marginLeft={8.5}
                    fontSize={14}
                    regular
                    color={COLORS.black5}>
                    Lorem Ipsum is simply dummy text of the printing
                  </Text>
                </Block>
              ))}
            </Block>
          </Block>
        )}
      </Block>
    </Block>
  );
}
