import React, { FC, memo } from 'react';
import { View } from 'react-native';
import Spinner from 'react-native-spinkit';
import { COLOR } from '../../utils/Colors';
import styles from './styles';


export type Props = {
    isVisible: boolean;
};

const CustomSpinner: FC<Props> = ({
    isVisible = false
}) => {
    return (
        isVisible ?
            <View style={styles.spinnerContainer}>
                <Spinner
                    style={styles.spinner}
                    isVisible={isVisible}
                    type={'Circle'}
                    color={COLOR.red} />
            </View>
            :
            null
    )
};

export default memo(CustomSpinner);