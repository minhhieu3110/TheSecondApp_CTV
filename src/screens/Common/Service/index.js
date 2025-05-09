import {image} from '@assets';
import {
  Block,
  HeaderTile,
  Image,
  Pressable,
  ScrollView,
  SelectInput,
  Text,
  TextInput,
} from '@components';
import {height, statusBarHeight, width} from '@responsive';
import router from '@router';
import {COLORS} from '@theme';
import {bottomRoot} from 'navigation/navigationRef';
import {useState} from 'react';
import {useForm} from 'react-hook-form';
import {ImageBackground} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export default function Service() {
  const {control} = useForm();
  const inset = useSafeAreaInsets();
  const service = [
    {id: 1, title: 'Chăm sóc người bệnh'},
    {
      id: 2,
      title: 'Chăm sóc người già',
    },
    {id: 3, title: 'Giúp việc nhà'},
    {id: 4, title: 'Vật lý trị liệu'},
  ];

  const [serviceChoose, setServiceChoose] = useState([]);
  const handleChoose = id => {
    setServiceChoose(prev => {
      if (prev.includes(id)) {
        return prev.filter(item => item !== id);
      }
      return [...prev, id];
    });
  };
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <HeaderTile canGoBack title={'Dịch vụ'} />
      <Block
        marginTop={17}
        marginHorizontal={12}
        backgroundColor={COLORS.white}
        radius={15}
        paddingBottom={12}>
        <Block marginHorizontal={12} marginTop={17}>
          <Block>
            <Text fontSize={15} semiBold color={COLORS.black2}>
              Thông tin vị trí muốn làm
            </Text>
            <SelectInput
              marginTop={15}
              control={control}
              name={'abc'}
              borderWidth={0.5}
              borderColor={COLORS.gray11}
              placeholder="Tỉnh thành"
            />
            <SelectInput
              marginTop={14.4}
              control={control}
              name={'abc'}
              borderWidth={0.5}
              borderColor={COLORS.gray11}
              placeholder="Quận/Huyện"
            />
          </Block>
          <Text fontSize={15} semiBold color={COLORS.black2} marginTop={30}>
            Dịch vụ
          </Text>
          <Text marginTop={14} fontSize={14} regular color={COLORS.black2}>
            Dịch vụ hiện tại của Trần Thanh Hải {'\n'}- Chăm sóc người bệnh{' '}
            {'\n'}- Giúp việc nhà
          </Text>
          <Block marginTop={15} gap={12}>
            {service.map(item => (
              <Pressable
                onPress={() => handleChoose(item.id)}
                key={item.id}
                borderWidth={0.5}
                borderColor={
                  serviceChoose.includes(item.id) ? COLORS.red4 : COLORS.gray11
                }
                height={38.56}
                paddingLeft={11.3}
                justifyCenter
                backgroundColor={
                  serviceChoose.includes(item.id) && COLORS.pinkWhite2
                }
                radius={5}>
                <Text
                  fontSize={13}
                  regular
                  color={
                    serviceChoose.includes(item.id)
                      ? COLORS.red4
                      : COLORS.black2
                  }>
                  {item.title}
                </Text>
              </Pressable>
            ))}
          </Block>
          <Pressable
            onPress={() => bottomRoot.navigate(router.HOME_SCREEN)}
            marginTop={40}
            height={48}
            radius={8}
            backgroundColor={COLORS.red4}
            justifyCenter
            alignCenter>
            <Text fontSize={15} regular color={COLORS.white}>
              Gửi yêu cầu
            </Text>
          </Pressable>
        </Block>
      </Block>
    </Block>
  );
}
