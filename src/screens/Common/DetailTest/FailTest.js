import {
  Block,
  HeaderTile,
  Text,
  Pressable,
  ScrollView,
  Button,
} from '@components';
import {width} from '@responsive';
import {COLORS} from '@theme';
import {useState} from 'react';
import RadialGradient from 'react-native-radial-gradient';

export default function FailTest() {
  const questionAns = [
    {
      id: 1,
      question: 'Câu 1: Cách nhận việc trên app San',
      ans: [
        {
          id: 1,
          ans: 'A. Nhanh tay bấm nhận việc và đi làm ',
          disable: 1,
        },
        {
          id: 2,
          ans: 'B. Bấm xem chi tiết nội dung công việc. Lưu ý các ghi chú của khách hàng. Bấm nhận việc, sau đó gọi xác nhận lại ca làm với khách hàng.',
        },
        {
          id: 3,
          ans: 'C. Bấm nhận việc, sau đó gọi xác nhận lại ca làm với khách hàng ',
        },
      ],
    },
    {
      id: 2,
      question: 'Câu 2: Có bao nhiêu bước nhận việc trên ứng dụng San CTV',
      ans: [
        {
          id: 1,
          ans: 'A. Nhanh tay bấm nhận việc và đi làm ',
          disable: 1,
        },
        {
          id: 2,
          ans: 'B. Bấm xem chi tiết nội dung công việc. Lưu ý các ghi chú của khách hàng. Bấm nhận việc, sau đó gọi xác nhận lại ca làm với khách hàng.',
        },
        {
          id: 3,
          ans: 'C. Bấm nhận việc, sau đó gọi xác nhận lại ca làm với khách hàng ',
        },
      ],
    },
  ];
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const handleAns = (questionId, answerId) => {
    setSelectedAnswers(prev => {
      const currentAnswers = prev[questionId] || [];
      if (currentAnswers.includes(answerId)) {
        return {
          ...prev,
          [questionId]: currentAnswers.filter(id => id !== answerId),
        };
      } else {
        return {
          ...prev,
          [questionId]: [...currentAnswers, answerId],
        };
      }
    });
  };
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <HeaderTile canGoBack title={'Giới thiệu về san'} uppercase={true} />
      <ScrollView contentContainerStyle={{paddingBottom: 100}}>
        <Block marginTop={12} marginHorizontal={12} gap={12}>
          <Block radius={8} backgroundColor={COLORS.white} paddingBottom={136}>
            <Block marginLeft={15} marginTop={17} marginRight={9}>
              <Text fontSize={15} semiBold color={COLORS.black2}>
                Nội dung
              </Text>
              <Text
                fontSize={15}
                regular
                color={COLORS.black2}
                marginTop={6}
                lineHeight={18}>
                San dịch vụ chăm sóc người già tại nhà trên nền tảng công nghệ
                được xây dựng nhằm cung cấp cho người dùng những trãi nghiệm
                dịch vụ dễ dàng, tiện ích, an toàn và nhanh chóng khi chọn các
                dịch vụ chăm sóc người già, người bệnh, vật lý trị liệu, mát xa
                tại nhà, và dịch vụ theo giờ như dọn dẹp vệ sinh. Với sứ mệnh
                tạo ra 1 nghề nghiệp thực thụ thay đổi quan niệm xã hội là công
                việc thấp kém, người hầu, người giúp việc, mà trở thành 1 nghề
                như bao nghề khác trong xã hội, với thu nhập ổn định, chủ động,
                và được đào tạo bài bản. Giải quyết nhu cầu người dân tại các
                thành phố, đô thị tìm người có kỹ năng, có đạo đức, được đảm bảo
                nhân thân chăm sóc gia đình, người thân, giải quyết vấn đề trăn
                trở khi vừa phải trọn chữ Hiếu và Trách nhiệm với người thân,
                cha mẹ, ông bà.{' '}
              </Text>
            </Block>
          </Block>
          <Block radius={8} backgroundColor={COLORS.white} paddingBottom={30}>
            <Block marginLeft={15} marginTop={17} marginRight={9}>
              <Text fontSize={15} semiBold color={COLORS.black2}>
                Câu hỏi: Bạn biết ứng dụng San thông qua:
              </Text>
              <Block marginTop={18}>
                <Text fontSize={15} regular color={COLORS.placeholder}>
                  A. Người giới thiệu
                </Text>
                <Text fontSize={15} regular color={COLORS.placeholder}>
                  B. Quảng cáo trên báo
                </Text>
                <Text fontSize={15} regular color={COLORS.green6}>
                  C. Mạng XH (Facebook, Youtube, ...)
                </Text>
                <Text fontSize={15} regular color={COLORS.placeholder}>
                  D. Tờ rơi quảng cáo
                </Text>
              </Block>
            </Block>
          </Block>
          {questionAns.map(item => (
            <Block
              key={item.id}
              radius={8}
              backgroundColor={COLORS.white}
              paddingBottom={12}>
              <Block marginLeft={15} marginTop={17} marginRight={14}>
                <Text fontSize={15} semiBold color={COLORS.black2}>
                  {item.question}
                </Text>
                <Block marginTop={15} gap={12}>
                  {item.ans.map(ans => {
                    const isSelected = selectedAnswers[item.id]?.includes(
                      ans.id,
                    );
                    return (
                      <Pressable
                        disabled={ans.disable === 1}
                        key={ans.id}
                        onPress={() => handleAns(item.id, ans.id)}
                        row>
                        <Block
                          width={27}
                          height={27}
                          radius={27}
                          borderWidth={1}
                          borderColor={COLORS.placeholder}
                          backgroundColor={
                            ans.disable === 1 && COLORS.placeholder
                          }
                          justifyCenter
                          alignCenter
                          overflow={'hidden'}>
                          {ans.disable === 1 && (
                            <Block
                              width={17}
                              height={17}
                              backgroundColor={COLORS.gray11}
                              radius={50}
                            />
                          )}
                          {isSelected && (
                            <RadialGradient
                              style={{
                                width: 27,
                                height: 27,
                                justifyContent: 'center',
                                alignItems: 'center',
                              }}
                              colors={COLORS.gradient5}>
                              <Block
                                width={17}
                                height={17}
                                backgroundColor={COLORS.white}
                                radius={50}
                              />
                            </RadialGradient>
                          )}
                        </Block>
                        <Text
                          width={width - 90}
                          marginLeft={10}
                          fontSize={15}
                          regular
                          color={
                            ans.disable === 1
                              ? COLORS.placeholder
                              : isSelected
                              ? COLORS.red4
                              : COLORS.black2
                          }>
                          {ans.ans}
                        </Text>
                      </Pressable>
                    );
                  })}
                </Block>
              </Block>
            </Block>
          ))}
        </Block>
      </ScrollView>
      <Button title="Gửi lại" />
    </Block>
  );
}
