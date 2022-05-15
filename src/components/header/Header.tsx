import React, { memo } from 'react';
import { View, Text } from 'react-native';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import styles from './styles';


export type Props = {
    title: string;
    containerStyles?: any;
};

const Header: React.FC<Props> = ({
    title,
    containerStyles,
}) => {
    const insets = useSafeAreaInsets();

    return (
        <View style={{...styles.container(insets.top), ...containerStyles}}>
                
            <Text numberOfLines={2} style={styles.headerTitle}>{title ?? ''}</Text>
        </View>
    )
}

export default memo(Header);