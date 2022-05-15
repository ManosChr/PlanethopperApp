import { Dimensions, StyleSheet, Platform } from 'react-native';
import { COLOR } from '../../utils/Colors';
import { FONT_FAMILY } from '../../utils/Constants';
import { FONT } from '../../utils/Dimensions';

const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

type Style = {
    [key: string]: any;
};

export default StyleSheet.create<Style>({
    container: {
        width: windowWidth,
        alignItems: 'center',
        paddingVertical: windowHeight * 0.02,
        backgroundColor: COLOR.white,
        ...Platform.select({
            ios: {
                shadowColor: COLOR.shadow_gray,
                shadowOffset: { width: 0, height: 3, },
                shadowOpacity: 1,
                shadowRadius: 5,
            },
            android: {
                shadowColor: COLOR.shadow_gray,
                elevation: 6,
            }
        }),
    },
    title: {
        width: '90%',
        color: COLOR.black_1,
        fontSize: FONT.seminormal,
        fontFamily: FONT_FAMILY.proximaSemiBold,
    },
    planetsListView: {
        width: '90%',
        flexDirection: 'row',
        marginTop: windowHeight * 0.01,
        flexWrap: 'wrap',
    },
    planetItemSeparator: {
        marginHorizontal: windowWidth * 0.02,
    },
    planetItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    planetTitle: {
        color: COLOR.black_1,
        fontSize: FONT.semismall,
        fontFamily: FONT_FAMILY.proximaRegular,
    },
    deleteBtn: (pressed: boolean) => ({
        flexDirection: 'row',
        alignItems: 'center',
        opacity: pressed ? 0.8 : 1,
        marginTop: windowHeight * 0.02,
        marginBottom: windowHeight * 0.01,
    }),
    deleteIcon: {
        width: windowHeight * 0.015,
        height: windowHeight * 0.015,
        marginRight: windowWidth * 0.03,
    },
    deleteTitle: {
        color: COLOR.red,
        fontSize: FONT.normal,
        fontFamily: FONT_FAMILY.proximaBold,
    },
});