import {
  Block,
  Button,
  HeaderTile,
  Pressable,
  ScrollView,
  Text,
} from '@components';
import {width} from '@responsive';
import {COLORS} from '@theme';
import {useState} from 'react';
import RadialGradient from 'react-native-radial-gradient';

export default function NotYetTest() {
  const questionAns = [
    {
      id: 1,
      question: 'Câu 1: Cách nhận việc trên app San',
      ans: [
        {
          id: 1,
          ans: 'A. Nhanh tay bấm nhận việc và đi làm ',
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
      <HeaderTile
        title={'Bài 2: Cách nhận việc trên app'}
        uppercase={true}
        canGoBack
      />
      <ScrollView contentContainerStyle={{paddingBottom: 100}}>
        <Block marginTop={12} marginHorizontal={12} gap={12}>
          <Block paddingBottom={93} radius={8} backgroundColor={COLORS.white}>
            <Block marginTop={17} marginLeft={15} marginRight={9}>
              <Text fontSize={15} semiBold color={COLORS.black2}>
                Nội dung
              </Text>
              <Text
                marginTop={11}
                fontSize={15}
                regular
                color={COLORS.black2}
                lineHeight={18}>
                4 bước nhận việc - Bước 1: tại app điền số điện thoại TK CTV đã
                đăng ký vào ô SĐT, chọn ĐĂNG NHẬP, Sau khi đăng nhập thành công
                các mục việc sẽ hiện trên trang chủ, CTV xem và lựa chọn công
                việc phù hợp, chọn chi tiết việc, điều kiện, mô tả ghi chú của
                khách hàng - Bước 3 Đọc kỹ thông tin công việc, thời gian, địa
                điểm, chọn bấm vào ô tôi đã đọc và đồng ý nhận việc BẤM CHỌN
                NHẬN VIỆC - Bước 4: Hệ thống sẽ thông báo bạn đã nhận việc THÀNH
                CÔNG - Gọi điện xác nhận với khách hàng, nếu liên hệ được khách
                hàng các anh chị nhắn tin xác nhận với KH thời gian đến làm việc
              </Text>
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
                        key={ans.id}
                        onPress={() => handleAns(item.id, ans.id)}
                        row>
                        <Block
                          width={27}
                          height={27}
                          radius={27}
                          borderWidth={1}
                          borderColor={COLORS.placeholder}
                          justifyCenter
                          alignCenter
                          overflow={'hidden'}>
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
                          color={isSelected ? COLORS.red4 : COLORS.black2}>
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
      <Button title="Gửi đáp án" />
    </Block>
  );
}
