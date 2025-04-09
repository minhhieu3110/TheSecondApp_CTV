import {Block, HeaderTile, Pressable, Text} from '@components';
import {width} from '@responsive';
import {COLORS} from '@theme';
import {useState} from 'react';
import Programming from './common/Programming';
import UpComming from './common/UpComming';
import Finished from './common/Finished';

export default function RewardProgram() {
  const title = [
    {id: 1, title: 'Đang diễn ra'},
    {id: 2, title: 'Sắp diễn ra'},
    {id: 3, title: 'Kết thúc'},
  ];
  const [programming, setProgramming] = useState(true);
  const [upcomming, setUpcomming] = useState(false);
  const [finished, setFinished] = useState(false);
  const handle = title => {
    setProgramming(false);
    setUpcomming(false);
    setFinished(false);

    if (title === 'Đang diễn ra') setProgramming(true);
    if (title === 'Sắp diễn ra') setUpcomming(true);
    if (title === 'Kết thúc') setFinished(true);
  };
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <HeaderTile canGoBack title={'Chương trình thưởng'} />
      <Block height={40} backgroundColor={COLORS.white} justifyEnd>
        <Block height={30} marginHorizontal={12} row>
          {title.map(item => (
            <Pressable
              onPress={() => handle(item.title)}
              width={(width - 24) / 3}
              height={30}
              key={item.id}
              spaceBetween>
              <Text
                fontSize={15}
                regular
                color={
                  (programming && item.title == 'Đang diễn ra') ||
                  (upcomming && item.title == 'Sắp diễn ra') ||
                  (finished && item.title == 'Kết thúc')
                    ? COLORS.red4
                    : COLORS.black2
                }
                center>
                {item.title}
              </Text>
              <Block
                height={2}
                backgroundColor={
                  (programming && item.title == 'Đang diễn ra') ||
                  (upcomming && item.title == 'Sắp diễn ra') ||
                  (finished && item.title == 'Kết thúc')
                    ? COLORS.red4
                    : COLORS.white2
                }
              />
            </Pressable>
          ))}
        </Block>
      </Block>
      {programming && <Programming />}
      {upcomming && <UpComming />}
      {finished && <Finished />}
    </Block>
  );
}
