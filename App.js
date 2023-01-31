// import { StatusBar } from 'expo-status-bar';
import { StyleSheet,StatusBar, Text, View } from 'react-native';
import Main from './src/components/Main';

export default function App() {
  return (
   
    <View style={styles.container}>
       <StatusBar
       hidden={false}
       backgroundColor="black"
       barStyle='light-conten'
       animated={true}

      />
      <Main/>
      <Text>Olá</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#000',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
