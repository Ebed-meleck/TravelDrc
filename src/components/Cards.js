import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground, Dimensions } from 'react-native';
import COLORS from '../consts/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width } = Dimensions.get('screen');

class Cards extends React.Component {

  constructor(props) {
    super(props);
  }


  shouldComponentUpdate(nextProps) {
    return nextProps.place !== this.props.place;
  }

  render() {
    const place = this.props.place;
    const navigation = this.props.navigation;


    return (
      <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('DetailsScreen', place)}  >
        <ImageBackground style={styles.cardImage}
          source={place.image}
        >
          <Text style={styles.text_Name} > {place.name} </Text>
          <View style={styles.text_Location}>
            <View style={{ flexDirection: 'row' }}>
              <Icon name='place' size={20} color={COLORS.white} />
              <Text style={{ marginLeft: 3, color: COLORS.white }} > {place.location} </Text>
            </View>
            <View style={{ flexDirection: 'row', marginLeft: 3 }}>
              <Icon name='star' size={20} color={COLORS.white} />
              <Text style={{ marginLeft: 3, color: COLORS.white }} > 5.0 </Text>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  }
}

//const Cards = React.memo(CardsComponent);


const styles = StyleSheet.create({

  cardImage: {
    height: 220,
    width: width / 2,
    marginRight: 20,
    padding: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  text_Name: {
    fontStyle: 'normal',
    fontWeight: "bold",
    color: COLORS.white,
    marginTop: 10,
    fontSize:20,
  },
  text_Location: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'flex-end'
  }

});

export default Cards;
