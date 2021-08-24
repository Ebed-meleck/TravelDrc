import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity , ImageBackground, Dimensions} from 'react-native';
import COLORS from '../consts/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { PureComponent } from 'react';

const { width } = Dimensions.get('screen');

class Recommended extends React.PureComponent {
 
  constructor(props) {
    super(props);
  }

  render() {
    const place = this.props.place;
    const navigation = this.props.navigation;
    return (
      <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('DetailsScreen', place)} >
        <ImageBackground
          style={styles.container}
          source={place.image}
        >
          <Text style={styles.text_Name} >{place.name}</Text>
          <View style={styles.sectionDetails} >
            <View style={{ flexDirection: 'row', marginTop: 10, width: '100%' }}>
              <View style={{ flexDirection: 'row' }} >
                <Icon name='place' size={22} color={COLORS.white} />
                <Text style={{ marginLeft: 3, color: COLORS.white, }} > {place.location} </Text>
              </View>
              <View style={{ flexDirection: 'row', marginLeft: 5 }}>
                <Icon name='star' size={22} color={COLORS.white} />
                <Text style={{ color: COLORS.white, marginLeft: 5 }} > 5.0</Text>
              </View>
            </View>
            <Text style={{ color: COLORS.white, fontSize: 13, marginBottom: 10 }} numberOfLines={6} > {place.detail} </Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  }
  }
//const Recommended = React.memo(RecommendedCompenent);

const styles = StyleSheet.create({
  container: {
    width: width - 40,
    height: 200,
    marginRight: 20,
    borderRadius: 10,
    overflow: 'hidden',
    padding: 10,
  },
   text_Name: {
    fontStyle: 'normal',
    fontWeight: "bold",
    color: COLORS.white,
    marginTop: 10,
    fontSize:22,
  },
  sectionDetails: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems:'flex-end'
   }
});

export default Recommended;