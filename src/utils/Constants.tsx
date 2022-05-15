import { Platform } from 'react-native';

export const FONT_FAMILY = {
   proximaBold: Platform.OS === 'ios' ? 'ProximaNova-Bold' : 'ProximaNovaBold',
   proximaSemiBold: Platform.OS === 'ios' ? 'ProximaNova-Semibold' : 'ProximaNovaSemibold',
   proximaRegular: Platform.OS === 'ios' ? 'ProximaNova-Regular' : 'ProximaNovaRegular',
   proximaThin: 'Proxima Nova Thin',
};
