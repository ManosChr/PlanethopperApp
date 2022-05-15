import { Dimensions, StyleSheet, Platform, } from 'react-native';
import { COLOR } from '../../utils/Colors';
import { FONT_FAMILY } from '../../utils/Constants';
import { FONT } from '../../utils/Dimensions';

const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

type Style = {
    [key: string]: any;
};

export default StyleSheet.create<Style>({
    container: {
        flex: 1,
        width: windowWidth,
        backgroundColor: COLOR.gray_light_1,
    },
    flatlist: {
        width: '100%',
    },
    flatlistCont: {
        flexGrow: 1,
        alignItems: 'center',
        paddingTop: windowHeight * 0.05,
        paddingBottom: windowHeight * 0.08,
    },
    flatlistSeparator: {
        height: windowHeight * 0.03,
    },
    noDataView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    noDataText: {
        width: '90%',
        color: COLOR.black_1,
        fontSize: FONT.large,
        fontFamily: FONT_FAMILY.proximaSemiBold,
        textAlign: 'center',
    },
});