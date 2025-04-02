import {Block, HeaderTile, Pressable, ScrollView, Text} from '@components';
import {width} from '@responsive';
import router from '@router';
import {COLORS} from '@theme';
import {commonRoot} from 'navigation/navigationRef';

export default function Tests() {
  const tests = [
    {
      id: 1,
      title: 'Bài kiểm tra đầu vào',
      numberQuestion: '11 câu',
      status: 'Chưa làm',
    },
    {
      id: 2,
      title: 'Bài 1: Giới thiệu về san',
      numberQuestion: '11 câu',
      status: 'Hoàn thành',
    },
    {
      id: 3,
      title: 'Bài 2: Cách nhận việc trên APp',
      numberQuestion: '11 câu',
      status: 'Không đạt',
    },
  ];
  const handle = status => {
    status === 'Chưa làm' && commonRoot.navigate(router.NOT_YET_TEST);
    status === 'Hoàn thành' && commonRoot.navigate(router.COMPLETE_TEST);
    status === 'Không đạt' && commonRoot.navigate(router.FAIL_TEST);
  };
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <HeaderTile title={'Bài kiểm tra đầu vào'} canGoBack />
      <ScrollView>
        <Block marginHorizontal={12} marginTop={12} gap={12}>
          {tests.map(item => (
            <Pressable
              onPress={() => handle(item.status)}
              key={item.id}
              backgroundColor={COLORS.white}
              radius={8}
              paddingBottom={15}>
              <Block marginHorizontal={12} marginTop={14} row spaceBetween>
                <Block width={width - 173}>
                  <Text
                    fontSize={15}
                    semiBold
                    color={COLORS.black2}
                    uppercase
                    numberOfLines={1}>
                    {item.title}
                  </Text>
                  <Text
                    fontSize={15}
                    regular
                    color={COLORS.placeholder}
                    marginTop={11}>
                    {item.numberQuestion}
                  </Text>
                </Block>
                <Text
                  fontSize={15}
                  regular
                  color={
                    (item.status === 'Chưa làm' && COLORS.orange4) ||
                    (item.status === 'Hoàn thành' && COLORS.green6) ||
                    (item.status === 'Không đạt' && COLORS.red4)
                  }>
                  {item.status}
                </Text>
              </Block>
            </Pressable>
          ))}
        </Block>
      </ScrollView>
    </Block>
  );
}
