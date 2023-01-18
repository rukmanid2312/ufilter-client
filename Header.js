import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const Header=()=> {
  
  return (
    <View style={styles.header_container}>

        <View style={styles.logo_container}>
            <Text style={styles.logo_txt}>UFilter</Text>
        </View>
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  header_container: {
    backgroundColor: '#000',
    alignItems: 'center',
    height:80,
    padding:11,
    width:"100%"
  },
  logo_container:{
    flex:1,
    justifyContent:'flex-start'
  },
  logo_txt: {
    padding:3,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: 'red',
    color: '#fff',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
export default Header;
