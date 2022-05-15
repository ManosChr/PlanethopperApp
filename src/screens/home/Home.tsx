import React, { FC, useState, useEffect, useCallback, useContext } from 'react';
import { useDimensions } from '@react-native-community/hooks';
import { View, Text, FlatList } from 'react-native';
import Header from '../../components/header/Header';
import CustomSpinner from '../../components/customSpinner/CustomSpinner';
import PlanetListItem from '../../components/planetListItem/PlanetListItem';
import TripPlanner from '../../components/tripPlanner/TripPlanner';
import { PlanetType } from './homeHelper/types';
import styles from './styles';
import { AppContext } from '../App';


const Home: FC = () => {
    const { width, height } = useDimensions().window;
    const [planetsData, setPlanetsData] = useState<PlanetType[]>([]);
    const [fetchingData, setFetchingData] = useState<boolean>(true);
    const [loading, setLoading] = useState<boolean>(false);
    const [planetsDataPage, setPlanetsDataPage] = useState<number>(1);
    const [finalPageReached, setFinalPageReached] = useState<boolean>(false);

    const { selectedPlanets } = useContext<any>(AppContext);

    const imagesArray: string[] = [
        `https://images.ferryhopper.com/locations/Skiathos.jpg`,
        `https://images.ferryhopper.com/locations/Santorini.jpg`,
        `https://images.ferryhopper.com/locations/Naxos.jpg`,
        `https://images.ferryhopper.com/locations/Ios.JPG`,
        `https://images.ferryhopper.com/locations/Santorini.jpg`,
    ]
    

    /**
     * Make getPlanetsData request when component is mounted
    */
    useEffect(() => {
        getPlanetsData(planetsDataPage)
    }, []);

    
    /**
     * Asynchronous request to get Planets data.
    */
    const getPlanetsData: (page: number) => void = useCallback(async (page) => {

        setLoading(true);
        setFetchingData(true);
        try {
            const response = await fetch('https://swapi.dev/api/planets/?page=' + page.toString(), { method: 'GET' });
            const json = await response.json();

            setLoading(false);
            setFetchingData(false);

            if (json?.results && Array.isArray(json?.results)) {
                let tempPlanetsData: PlanetType[] = [...planetsData]
                let tempPlanetId: number = planetsData?.length ?? 0

                for (let planet of json.results) {

                    if (planet) {
                        let tempPlanet: PlanetType = {
                            id: tempPlanetId?.toString() ?? '',
                            image: getRandomImage(),
                            name: planet?.name ?? '',
                            climate: planet?.climate ?? '',
                            terrain: planet?.terrain ?? '',
                            population: planet?.population ?? '',
                        }
    
                        tempPlanetsData.push(tempPlanet);
                        tempPlanetId++;
                    }
                }

                setPlanetsData(tempPlanetsData)
            } else if (json?.detail && json.detail === "Not found") {
                setFinalPageReached(true);
            }
            
        } catch (error) {
            setLoading(false);
            setFetchingData(false);
            console.log('getPlanetsData error: ',error);
        }
    }, [planetsData]);

    /**
     * Memoized function which returns a random Image from the imagesArray
     *  
    */
    const getRandomImage: () => string = useCallback(() => {
        const min = 0;
        const max = 4;
        const randomIndex: number = Math.floor(Math.random() * (max - min + 1) + min);

        return imagesArray[randomIndex];
    }, [imagesArray]);

    
    /**
     * Renders Planet items in the flatlist
    */
    const renderPlanets: (item: any) => JSX.Element = useCallback(({ item, index }) => {
        
        return (
            <PlanetListItem item={item} />
        )
    }, []);


    return (
        <View style={styles.container}>

            <Header
                title={'Planethopper'}
            />
            
            {planetsData?.length > 0 ?
                <FlatList
                    data={planetsData}
                    renderItem={renderPlanets}
                    keyExtractor={(item, index) => index?.toString() ?? Math.random().toString()}
                    ItemSeparatorComponent={() => <View style={styles.flatlistSeparator} />}
                    style={styles.flatlist}
                    contentContainerStyle={styles.flatlistCont}
                    showsVerticalScrollIndicator={true}
                    removeClippedSubviews={true}
                    onEndReached={({ distanceFromEnd }) => {
                      if (!finalPageReached) {
                          getPlanetsData(planetsDataPage+1);
                          setPlanetsDataPage(planetsDataPage+1);
                      }
                    }}
                    getItemLayout={(data, index) => {
                        let itemHeight = height * 0.19;
                        let separatorHeight = height * 0.03;
                        return (
                            { length: itemHeight, offset: (itemHeight + separatorHeight) * index, index }
                        )
                    }}
                />
                : !fetchingData ?
                <View style={styles.noDataView}>
                    <Text style={styles.noDataText}>There are no planet data!</Text>
                </View>
                : null
            }

            {selectedPlanets?.length > 0 ?
                <TripPlanner 
                    planetsList={selectedPlanets}
                />
                : null
            }
            
            <CustomSpinner isVisible={loading} />
        </View>
    )
}

export default Home;