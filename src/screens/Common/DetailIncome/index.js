import { icon } from "@assets";
import { Block, HeaderTile, Image, Text } from "@components";
import { width } from "@responsive";
import { COLORS } from "@theme";

export default function DetailIncome(){
    return(
        <Block flex backgroundColor={COLORS.gray10}>
            <HeaderTile title={'Lịch sử thu nhập'}canGoBack/>
            <Block marginTop={20} marginHorizontal={12}>
                <Text fontSize={15} semiBold color={COLORS.black2}>Chi tiết thu nhập</Text>
                <Block marginTop={15} backgroundColor={COLORS.darkRed1} paddingBottom={16} radius={8}>
                    <Block marginHorizontal={12} marginTop={15}>
                        <Block rowCenter spaceBetween>
                            <Text fontSize={14} regular color={COLORS.white}>Tổng thanh toán</Text>
                            <Text fontSize={15} regular color={COLORS.white}>2.000.000 đ</Text>
                        </Block>
                        <Block marginTop={15} borderWidth={1} borderColor={COLORS.gray11}/>
                        <Block marginTop={18} rowCenter spaceBetween>
                        <Text fontSize={14} regular color={COLORS.white}>Thu nhập</Text>
                        <Text fontSize={18} semiBold color={COLORS.yellow3}>+200.000 đ</Text>
                        </Block>
                    </Block>
                </Block>
                <Block marginTop={20}>
                    <Text fontSize={15} semiBold color={COLORS.black2}>Chi tiết công việc</Text>
                    <Block marginTop={15} radius={8} backgroundColor={COLORS.white} padding={12} gap={12}>
                        <Block row>
                            <Image source={icon.icon_staff} width={22} height={22}/>
                            <Block marginLeft={8} gap={13} width={width -76}>
                                <Text fontSize={15} medium color={COLORS.black2}>Lâm Minh Hoàng</Text>
                                <Text fontSize={14} regular color={COLORS.red4}>0909 123 456</Text>
                                <Text fontSize={14} regular color={COLORS.black2} numberOfLines={2}>107 đường Cộng Hòa, Phường 12, quận Tân Bình, 
                                Tp.HCM</Text>
                                <Block borderWidth={1}  borderColor={COLORS.gray11} marginTop={2}/>
                            </Block>
                        </Block>
                        <Block row >
                            <Image source={icon.icon_calendar} width={22} height={22}/>
                            <Block marginLeft={8} gap={13} width={width -76}>
                                <Block rowCenter spaceBetween>
                                    <Text fontSize={15} regular color={COLORS.placeholder}>Ngày làm việc</Text>
                                    <Text fontSize={14} regular color={COLORS.black2}>Thứ 7, 01/01/2025</Text>
                                </Block>
                                <Block borderWidth={1}  borderColor={COLORS.gray11} marginTop={2}/>
                            </Block>
                        </Block>
                        <Block row>
                            <Image source={icon.icon_time} width={22} height={22}/>
                            <Block marginLeft={8} gap={13} width={width -76}>
                                <Block rowCenter spaceBetween>
                                    <Text fontSize={15} regular color={COLORS.placeholder}>Thời gian làm việc</Text>
                                    <Text fontSize={14} regular color={COLORS.black2}>4 giờ, 17:30 đến 21:30</Text>
                                </Block>
                                <Block borderWidth={1}  borderColor={COLORS.gray11} marginTop={2}/>
                            </Block>
                        </Block>
                        <Block row>
                            <Image source={icon.icon_detail_work} width={22} height={22}/>
                            <Block marginLeft={8} gap={13} width={width -76}>
                                <Text fontSize={15} regular color={COLORS.placeholder}>Chi tiết công việc</Text>
                                <Text fontSize={15} regular color={COLORS.placeholder}>Chăm người bệnh tại nhà</Text>
                                <Text fontSize={14} regular color={COLORS.black2} numberOfLines={2}>Chi chú: Nam khoẻ có nhiều kinh nghiệm</Text>
                                <Block borderWidth={1}  borderColor={COLORS.gray11} marginTop={2}/>
                            </Block>
                        </Block>
                        <Block row>
                            <Image source={icon.icon_times} width={22} height={22}/>
                            <Block marginLeft={8} row spaceBetween width={width -76}>
                                <Text fontSize={15} regular color={COLORS.placeholder}>Thời gian</Text>
                                <Block gap={14}>
                                    <Text fontSize={14} regular color={COLORS.red4} >Bắt đầu: 17:28</Text>
                                    <Text fontSize={14} regular color={COLORS.red4} >Kết thúc: 21:25</Text>
                                </Block>
                            </Block>
                        </Block>
                    </Block>
                </Block>
            </Block>
        </Block>
    )
}