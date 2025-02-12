import MapView, { Marker } from 'react-native-maps';
import { StyleSheet} from 'react-native';
import { useEffect, useState } from 'react';
import * as Location from 'expo-location';

export default function Map() {

    const [marker, setMarker] = useState([])
    const [location, setLocation] = useState({
      latitude: 60.0800,
      longitude: 25.4800,
      latitudeDelta: 0.0622,
      longitudeDelta: 0.0421
    })
    
    useEffect(()=> {
        (async() => {
            getUserPosition()
        })()
    }, [])

    const showMarker = (e) => { 
        const coords = e.nativeEvent.coordinate
        setMarker([...marker, coords])
    }

    const getUserPosition = async () => {
        let {status} = await Location.requestForegroundPermissionsAsync()

        try {
            if (status !== 'granted') {
                console.log('Geologation failed')
                return
            }
            const position = await Location.getCurrentPositionAsync({accuracy: Location.Accuracy.High})
            setLocation({...location,"latitude":position.coords.latitude,"longitude": position.coords.longitude})
        } catch (error) {
            console.log(error)
        }
    }

    return (
      <MapView 
        style={styles.map} 
        region={location}
        onLongPress={showMarker}
      >
            {marker.map((marker, index) => (
                <Marker 
                    key={index}
                    title={`Marker`}
                    coordinate={marker}
                />))
        }
        </MapView>

  )
}

const styles = StyleSheet.create({

  map: {
    width: '100%',
    height: '100%',
  }
});
