import React from 'react';
import { SafeAreaView, StyleSheet, View , Text, StatusBar, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import Header from '../../components/Header';


const DetailsScreen = ({ navigation, route }) => {
  const place = route.params;
  console.log(place)
  return (
    <View style={{flex:1, backgroundColor:COLORS.white}} >
      <StatusBar translucent backgroundColor='rgba(0,0,0,0.2)' />
      <Header />
      <ImageBackground
        style={{ flex: 0.7 }}
        source={place.image}
      >
        <View style={styles.header} >
          <Icon
            name='arrow-back-ios'
            size={28}
            color={COLORS.white}
            onPress={navigation.goBack}
          />
          <Icon
            name='more-vert'
            size={28}
            color={COLORS.white}
          />
        </View>
        <View style={styles.imageDetails} >
          <Text
            style={{
              width: '70%',
              fontSize: 30,
              fontWeight: 'bold',
              color: COLORS.white,
              marginBottom:20
            }}  > {place.name}  </Text>
          <View style={{ flexDirection: 'row' }} >
            <Icon name='star' size={30} color={COLORS.orange} />
            <Text style={{ marginTop:5  ,fontSize:20, color:COLORS.white, fontWeight:'bold'}} >5.0</Text>
          </View>
         
        </View>
      </ImageBackground>
      <View style={styles.detailsContainer} >
        <View style={styles.iconContainer} >
          <Icon name='favorite'  size={30} color={COLORS.red} />
        </View>
        <View style={{ flexDirection: 'row', marginTop: 15 }}>
          <Icon name='place' size={28} color={COLORS.primary} />
          <Text style={{ fontSize:20, fontWeight:'bold', color:COLORS.primary }} >{ place.location }</Text>
        </View>
        <Text style={{marginTop:20, fontSize:20, fontWeight:'bold'}} > À propos du voyage </Text>
        <Text style={{marginTop:20}}>{ place.detail }</Text>
      </View>
      <View style={styles.footer}>
        <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }} >
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: COLORS.white }}>
            $3
          </Text>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: COLORS.white }}>
            /PAR JOUR
          </Text>
        </View>
        <View style={styles.BookNw}>
        <Text style={{fontSize:16, fontWeight:'bold', color:COLORS.primary}} > Reservation </Text>
        </View>
      </View>
  </View>
  )
}

const styles = StyleSheet.create({
  header: {
    marginTop: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal:20
  },
  imageDetails: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    position: 'absolute',
    bottom:30
  },
  detailsContainer: {
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius:20,
    paddingHorizontal: 20,
    backgroundColor: COLORS.white,
    flex: 0.3,
    top:-20
  },
  iconContainer: {
    height: 60,
    width: 60,
    position: 'absolute',
    top: -30,
    backgroundColor: COLORS.white,
    borderRadius: 30,
    right: 30,
    elevation: 2,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    shadowColor: COLORS.grey,
    justifyContent: 'center',
    alignItems:'center'
  },
  footer: {
    flexDirection: 'row',
    backgroundColor: COLORS.primary,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderTopRightRadius: 15,
    borderTopLeftRadius:15
  },
  BookNw: {
    height: 50,
    width: 150,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems:'center',
  }
});

export default DetailsScreen;