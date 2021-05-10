import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  ImageBackground,
  Share,
  Platform,
  TouchableOpacity,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import Header from '../../components/Header';



const SharePlace = ({place}) => {
const _sharePlace = () => {
  Share.share({ title: place.name, message:  `${place.location + ' ' +  'description: ' + place.detail }`});
}

  if (Platform.OS === 'ios') {
      const iosShare = require('../../assets/ic_share.ios.png')
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.share_float}
        onPress={() => { _sharePlace() }}
      >
        <Image
          source={ require('../../assets/ic_share.ios.png')}
          style={styles.share_image}
        />
     </TouchableOpacity>
    )
  } else if(Platform.OS === 'android') {
    const androisShare = require('../../assets/ic_share.android.png');
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.share_float}
        onPress={() => { _sharePlace() }}
      >
        <Image
          source={require('../../assets/ic_share.android.png')}
          style={styles.share_image}
        />
     </TouchableOpacity>
    )
  }
}


const DetailsScreen = ({ navigation, route }) => {
  const place = route.params;

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
        {SharePlace({place})}
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
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => alert('merci de faire une reservation')}
          style={styles.BookNw}>
        <Text style={{fontSize:16, fontWeight:'bold', color:COLORS.primary}} > Reservation </Text>
        </TouchableOpacity>
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
  },
  share_float: {
    position: "absolute",
    width: 60,
    height: 60,
    right: 100,
    top: -30,
    borderRadius: 30,
     elevation: 2,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    shadowColor: COLORS.grey,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
  },
  share_image: {
    width: 30,
    height: 30,
  },
});

export default DetailsScreen;