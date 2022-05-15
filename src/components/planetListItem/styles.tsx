import { Dimensions, StyleSheet, Platform } from 'react-native';
import { COLOR } from '../../utils/Colors';
import { FONT_FAMILY } from '../../utils/Constants';
import { FONT } from '../../utils/Dimensions';

const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

type Style = {
    [key: string]: any;
};

export default StyleSheet.create<Style>({
    container: (pressed: boolean, isSelected: boolean) => ({
        height: windowHeight * 0.19,
        width: windowWidth * 0.9,
        borderRadius: windowWidth * 0.03,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: windowWidth * 0.04,
        paddingVertical: windowHeight * 0.02,
        backgroundColor: COLOR.white,
        opacity: pressed ? 0.8 : 1,
        borderWidth: 3,
        borderColor: isSelected ? COLOR.red : COLOR.white,
        ...Platform.select({
            ios: {
                shadowColor: COLOR.shadow_gray,
                shadowOffset: { width: 0, height: 3, },
                shadowOpacity: 1,
                shadowRadius: 5,
            },
            android: {
                shadowColor: COLOR.shadow_gray,
                elevation: 2,
            }
        }),
    }),
    planetImg: {
        width: windowWidth * 0.23,
        height: windowWidth * 0.23,
        borderRadius: windowWidth * 0.03,
    },
    planetInfoView: {
        flex: 1,
        marginLeft: windowWidth * 0.04,
    },
    planetLabel: {
        color: COLOR.black_1,
        fontSize: FONT.small,
        fontFamily: FONT_FAMILY.proximaRegular,
    },
    planetDetails: {
        color: COLOR.black_1,
        fontSize: FONT.semismall,
        fontFamily: FONT_FAMILY.proximaSemiBold,
    },
});