import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,SafeAreaView} from 'react-native';
import Header from './Header';
import SearchPage from './SearchPage';
import ImagePage from './ImagePage';
import { DateInput } from './DateInput';

export default function App() {
  console.log("debiug");
  return (
    <SafeAreaView style={styles.container}>
     
      <Header/>
      <SearchPage/>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display:"flex",
    flex:1,
    backgroundColor: '#000',
    alignItems: 'center',
   
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: '#61dafb',
    color: '#fff',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
