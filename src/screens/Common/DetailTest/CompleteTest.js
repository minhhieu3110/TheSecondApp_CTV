import {Block, HeaderTile, Text} from '@components';
import {COLORS} from '@theme';

export default function CompleteTest() {
  return (
    <Block flex backgroundColor={COLORS.gray10}>
      <HeaderTile canGoBack title={'Giới thiệu về san'} uppercase={true} />
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
              được xây dựng nhằm cung cấp cho người dùng những trãi nghiệm dịch
              vụ dễ dàng, tiện ích, an toàn và nhanh chóng khi chọn các dịch vụ
              chăm sóc người già, người bệnh, vật lý trị liệu, mát xa tại nhà,
              và dịch vụ theo giờ như dọn dẹp vệ sinh. Với sứ mệnh tạo ra 1 nghề
              nghiệp thực thụ thay đổi quan niệm xã hội là công việc thấp kém,
              người hầu, người giúp việc, mà trở thành 1 nghề như bao nghề khác
              trong xã hội, với thu nhập ổn định, chủ động, và được đào tạo bài
              bản. Giải quyết nhu cầu người dân tại các thành phố, đô thị tìm
              người có kỹ năng, có đạo đức, được đảm bảo nhân thân chăm sóc gia
              đình, người thân, giải quyết vấn đề trăn trở khi vừa phải trọn chữ
              Hiếu và Trách nhiệm với người thân, cha mẹ, ông bà.{' '}
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
      </Block>
    </Block>
  );
}
