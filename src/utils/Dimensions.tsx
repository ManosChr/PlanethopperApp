import { Dimensions, Platform } from 'react-native';

const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

export const FONT = {
  small: Platform.OS === 'android' ? windowHeight * 0.018 : windowHeight * 0.018 * 0.85,
  semismall: Platform.OS === 'android' ? windowHeight * 0.019 : windowHeight * 0.019  * 0.85,
  normal: Platform.OS === 'android' ? windowHeight * 0.02 : windowHeight * 0.02 * 0.85,
  seminormal: Platform.OS === 'android' ? windowHeight * 0.022 : windowHeight * 0.022 * 0.85,
  large: Platform.OS === 'android' ? windowHeight * 0.024 : windowHeight * 0.024 * 0.85,
};
