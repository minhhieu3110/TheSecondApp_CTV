import {Block, HeaderTile, Switch, Text} from '@components';
import {COLORS} from '@theme';
import {useState} from 'react';

export default function Setting() {
  const [notification, setNotification] = useState(false);
  const [position, setPosition] = useState(false);
  const [positionBackground, setPositionBackground] = useState(false);
  const [camera, setCamera] = useState(false);
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <HeaderTile canGoBack title={'Cài đặt'} />
      <Block marginTop={15} marginHorizontal={12} gap={12}>
        <Block backgroundColor={COLORS.white} radius={8} padding={12}>
          <Block rowCenter spaceBetween>
            <Text fontSize={15} regular color={COLORS.black2}>
              Thông báo
            </Text>
            <Switch value={notification} onValueChange={setNotification} />
          </Block>
        </Block>
        <Block backgroundColor={COLORS.white} radius={8} padding={12}>
          <Block rowCenter spaceBetween>
            <Text fontSize={15} regular color={COLORS.black2}>
              Truy cập vị trí
            </Text>
            <Switch value={position} onValueChange={setPosition} />
          </Block>
        </Block>
        <Block backgroundColor={COLORS.white} radius={8} padding={12}>
          <Block rowCenter spaceBetween>
            <Text fontSize={15} regular color={COLORS.black2}>
              Truy cập vị trí nền
            </Text>
            <Switch
              value={positionBackground}
              onValueChange={setPositionBackground}
            />
          </Block>
        </Block>
        <Block backgroundColor={COLORS.white} radius={8} padding={12}>
          <Block rowCenter spaceBetween>
            <Text fontSize={15} regular color={COLORS.black2}>
              Cập nhật máy ảnh
            </Text>
            <Switch value={camera} onValueChange={setCamera} />
          </Block>
        </Block>
      </Block>
    </Block>
  );
}
