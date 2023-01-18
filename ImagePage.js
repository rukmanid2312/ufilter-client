import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  medlogo:{
    width:320,
    height:180
  },
  logo: {
    width: 66,
    height: 58,
  },
});

const DisplayAnImage = ({imgUrl}) => {
    
  return (
    <View style={styles.container} >
     
      <Image
        style={styles.medlogo}
        source={{
          uri: imgUrl,
        }}
      />
    </View>
  );};

  export default DisplayAnImage;