import * as React from 'react';
import {
  //SafeAreaView,
  StyleSheet,
  View,
  ImageBackground,
  StatusBar,
  Text,
  TouchableOpacity,
} from 'react-native';
import COLORS from '../../consts/colors';

function OnBoardScreen ({ navigation })  {
  return (
    <View style={styles.container}>
      <StatusBar translucent  backgroundColor='rgba(0,0,0,0.2)' />
      <ImageBackground
        style={styles.bg}
        source={require('../../assets/onboar_lac.jpg')}
      ></ImageBackground>
      <View style={styles.details}>
        <Text style={styles.text}>Découvrez</Text>
        <Text style={styles.text}>La RDC avec nous</Text>
        <Text style={styles.textDetail}>lorem ipsum dolor sit amet consectetur adipiscing elit
        lorem ipsum dolor sit amet consectetur adipiscing elit
        </Text>
        <TouchableOpacity activeOpacity={0.8}
          onPress={() => navigation.navigate('start')}
        >
          <View style={styles.btn}>
            <Text style={styles.btn_text} >Get started</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bg: {
    flex: 1,
  },
    details: {
    height: '50%',
    bottom: 0,
    position: 'absolute',
    paddingHorizontal: 40,
  },
  text: {
    color: '#fff',
    fontSize: 35,
    fontWeight: 'bold',
  },
  textDetail: {
    marginTop: 15,
    lineHeight: 25,
    color: '#fff'
  },
  btn: {
    height: 50,
    width: 120,
    backgroundColor: COLORS.white,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:20
  },
   btn_text: {
     fontWeight:'bold'
  }
});

export default OnBoardScreen;
