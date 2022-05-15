import React, { memo, useContext } from 'react';
import { View, Text, Pressable } from 'react-native';
import { PlanetType } from '../../screens/home/homeHelper/types';
import FastImage from 'react-native-fast-image';
import styles from './styles';
import { COLOR } from '../../utils/Colors';
import { AppContext } from '../../screens/App';


type Props = {
    planetsList: PlanetType[];
};

type PlanetItemType = {
    planet: PlanetType;
    showSeparator: boolean;
};

const PlanetItem: React.FC<PlanetItemType> = memo(({ planet, showSeparator }) => {
    return (
        <View style={styles.planetItemContainer}>
            <Text style={styles.planetTitle}>{planet?.name ?? ''}</Text>

            {showSeparator ?
                <View style={styles.planetItemSeparator}>
                    <Text style={styles.planetTitle}>{'>'}</Text>
                </View>
                : null
            }
        </View>
    )
})


const TripPlanner: React.FC<Props> = ({
    planetsList,
}) => {
    const { clearSelections } = useContext<any>(AppContext);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>My Trip</Text>

            <View style={styles.planetsListView}>
                {
                    planetsList?.map((planet: PlanetType, index: number) => {
                        const showSeparator: boolean = index !== (planetsList?.length - 1)

                        return (
                            <PlanetItem
                                key={index.toString()}
                                planet={planet}
                                showSeparator={showSeparator}
                            />
                        )
                    })
                }
            </View>

            <Pressable
                style={({ pressed }) => styles.deleteBtn(pressed)}
                onPress={clearSelections}
            >
                <FastImage
                    source={require('../../assets/images/close_icon.png')}
                    resizeMode={FastImage.resizeMode.contain}
                    style={styles.deleteIcon}
                    tintColor={COLOR.red}
                />

                <Text style={styles.deleteTitle}>Clear Selections</Text>
            </Pressable>
        </View>
    )
}

export default memo(TripPlanner);