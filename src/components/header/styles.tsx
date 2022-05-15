import { Dimensions, StyleSheet, Platform } from 'react-native';
import { COLOR } from '../../utils/Colors';
import { FONT_FAMILY } from '../../utils/Constants';
import { FONT } from '../../utils/Dimensions';

const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

type Style = {
    [key: string]: any;
};

export default StyleSheet.create<Style>({
    container: (insetsTop: number) => ({
        height: Platform.OS === 'ios' ? (windowHeight * 0.1 + (insetsTop / 2)) : windowHeight * 0.1,
        width: windowWidth,
        justifyContent: 'center',
        paddingHorizontal: windowWidth * 0.05,
        paddingTop: Platform.OS === 'ios' ? (insetsTop / 2) : 0,
        backgroundColor: COLOR.white,
        zIndex: 1000,
        ...Platform.select({
            ios: {
                shadowColor: COLOR.shadow_gray,
                shadowOffset: { width: 0, height: 3, },
                shadowOpacity: 1,
                shadowRadius: 5,
            },
            android: {
                shadowColor: COLOR.shadow_gray,
                elevation: 3,
            }
        }),
    }),
    headerTitle: {
        color: COLOR.red,
        fontSize: FONT.large,
        fontFamily: FONT_FAMILY.proximaSemiBold,
        textAlign: 'center',
    },
});