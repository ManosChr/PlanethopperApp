import React, { memo, useContext } from 'react';
import { View, Text, Pressable } from 'react-native';
import { PlanetType } from '../../screens/home/homeHelper/types';
import FastImage from 'react-native-fast-image';
import styles from './styles';

import { AppContext } from '../../screens/App';


type Props = {
    item: PlanetType;
};

const PlanetListItem: React.FC<Props> = ({
    item,
}) => {
    const { onPlanetPress, selectedPlanets } = useContext<any>(AppContext);

    const isSelected: boolean = selectedPlanets?.some((planet: PlanetType) => planet?.id === item?.id);

    /**
     * Function which gets a number in string format and returns it with the standard US number format with comma as the thousands separator
    */
    const formatPopulation: (popNum: string) => string = (popNum) => {
        if (popNum === 'unknown') {
            return 'unknown'
        } else if (popNum && !isNaN(Number(popNum))) {
            return Number(popNum)?.toLocaleString('en-US')?.toString()
        } else {
            return '-'
        }
    }

    return (
        <Pressable
            style={({ pressed }) => styles.container(pressed, isSelected)}
            onPress={() => onPlanetPress(item)}
        >
            <FastImage
                source={item?.image ? { uri: item.image } : {}}
                resizeMode={FastImage.resizeMode.cover}
                style={styles.planetImg}
            />
            <View style={styles.planetInfoView}>
                <Text style={styles.planetLabel} numberOfLines={1}>
                    Name:
                    <Text style={styles.planetDetails}>  {item?.name ?? '-'}</Text>
                </Text>
                <Text style={styles.planetLabel} numberOfLines={2}>
                    Climate:
                    <Text style={styles.planetDetails}>  {item?.climate ?? '-'}</Text>
                </Text>
                <Text style={styles.planetLabel} numberOfLines={2}>
                    Terrain:
                    <Text style={styles.planetDetails}>  {item?.terrain ?? '-'}</Text>
                </Text>
                <Text style={styles.planetLabel} numberOfLines={1}>
                    Population:
                    <Text style={styles.planetDetails}>  {formatPopulation(item?.population)}</Text>
                </Text>
            </View>
        </Pressable>
    )
}

export default memo(PlanetListItem);