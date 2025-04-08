import {Block, HeaderTile, Pressable, Text} from '@components';
import {width} from '@responsive';
import {COLORS} from '@theme';
import AllTransaction from './common/AllTransaction';
import Recharge from './common/Recharge';
import WithDraw from './common/Withdraw';
import Income from './common/Income';
import {useState} from 'react';

export default function History() {
  const title = [
    {id: 1, title: 'Tất cả'},
    {id: 2, title: 'Nạp'},
    {id: 3, title: 'Rút'},
    {id: 4, title: 'Thu nhập'},
  ];
  const [allTransaction, setAllTransaction] = useState(true);
  const [recharge, setRecharge] = useState(false);
  const [withdraw, setWithdraw] = useState(false);
  const [income, setIncome] = useState(false);
  const handleHistory = title => {
    setAllTransaction(false);
    setRecharge(false);
    setWithdraw(false);
    setIncome(false);
    if (title === 'Tất cả') setAllTransaction(true);
    if (title === 'Nạp') setRecharge(true);
    if (title === 'Rút') setWithdraw(true);
    if (title === 'Thu nhập') setIncome(true);
  };
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <Block width={width} height={93} backgroundColor={COLORS.white}>
        <HeaderTile canGoBack title={'Lịch sử'} />
        <Block width={width - 24} height={30} marginHorizontal={12} row>
          {title.map(item => (
            <Pressable
              onPress={() => handleHistory(item.title)}
              key={item.id}
              width={(width - 24) / 4}
              height={30}
              alignCenter
              spaceBetween>
              <Text
                fontSize={15}
                regular
                color={
                  (allTransaction && item.title === 'Tất cả') ||
                  (recharge && item.title === 'Nạp') ||
                  (withdraw && item.title === 'Rút') ||
                  (income && item.title === 'Thu nhập')
                    ? COLORS.red4
                    : COLORS.black1
                }>
                {item.title}
              </Text>
              <Block
                height={2}
                width={'100%'}
                backgroundColor={
                  (allTransaction && item.title === 'Tất cả') ||
                  (recharge && item.title === 'Nạp') ||
                  (withdraw && item.title === 'Rút') ||
                  (income && item.title === 'Thu nhập')
                    ? COLORS.red4
                    : ''
                }
              />
            </Pressable>
          ))}
        </Block>
      </Block>
      {allTransaction && <AllTransaction />}
      {recharge && <Recharge />}
      {withdraw && <WithDraw />}
      {income && <Income />}
    </Block>
  );
}
