import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native'
import Header from '../../components/Header';
import FavoriItem from '../../components/FavoriItem';

const FavorisList = (props) => {
  return (
  <View style={{flex:1}}>
    <Header navigation={props.navigation} title="Favoris" />
     <FavoriItem {...props}/>
    </View>
 );
};

export default FavorisList;