import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, Text, View } from 'react-native';
import Map from './screens/Map'
import { MAP_TYPES } from 'react-native-maps';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Map />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
