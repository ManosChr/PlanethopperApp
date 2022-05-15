import { Dimensions, StyleSheet } from 'react-native';


const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

type Style = {
    [key: string]: any
};

export default StyleSheet.create<Style>({
    spinnerContainer: {
        flex: 1,
        width: windowWidth,
        height: windowHeight,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
    spinner: {
        width: windowWidth * 0.15,
        height: windowWidth * 0.15,
    },
});
