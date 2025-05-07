import actions from '@actions';
import {image} from '@assets';
import {Block, Header, Pressable, Text, TextInput} from '@components';
import {COLORS} from '@theme';
import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
export default function RegisterScreen() {
  const [phone, setPhone] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: actions.ENTRANCE_TEST,
    });
  });
  const sendOTP = () => {
    dispatch({
      type: actions.SEND_OTP,
      body: {phone: phone, type: 'signup'},
    });
  };
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <Header />
      <Block
        marginHorizontal={12}
        marginTop={-42}
        paddingBottom={15}
        radius={15}
        backgroundColor={COLORS.white}>
        <Block marginHorizontal={12}>
          <Block marginTop={18}>
            <Text fontSize={18} semiBold color={COLORS.red4}>
              Xin chào!
            </Text>
            <Text fontSize={15} regular color={COLORS.black2} marginTop={18}>
              Vui lòng nhập số điện thoại để đăng ký
            </Text>
            <TextInput
              placeholder={'Nhập số điện thoại'}
              height={45}
              paddingLeft={14}
              radius={5}
              borderWidth={0.5}
              borderColor={COLORS.gray11}
              fontSize={14}
              regular
              marginTop={23}
              value={phone}
              onChangeText={setPhone}
            />
            <Pressable
              onPress={sendOTP}
              height={48}
              radius={8}
              backgroundColor={COLORS.red4}
              marginTop={202}
              justifyCenter
              alignCenter>
              <Text fontSize={15} regular color={COLORS.white}>
                Tiếp tục
              </Text>
            </Pressable>
          </Block>
        </Block>
      </Block>
      <Block absolute bottom={35}>
        <Text
          marginHorizontal={48}
          fontSize={14}
          color={COLORS.placeholder}
          center>
          Bằng việc nhấn vào nút{' '}
          <Text semiBold color={COLORS.placeholder}>
            Tiếp tục
          </Text>
          , bạn đã đồng ý với <Text color={COLORS.red4}>Quy chế</Text> và{' '}
          <Text color={COLORS.red4}>Điều khoản</Text> của chúng tôi
        </Text>
      </Block>
    </Block>
  );
}
