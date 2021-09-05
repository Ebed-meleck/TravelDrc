import * as React from 'react';
import { View } from 'react-native'
//import Header from '../../components/Header';
import FavoriItem from '../../components/FavoriItem';
import HeaderChild from '../../components/HeaderChild';

const FavorisList = (props) => {
  return (
  <View style={{flex:1}}>
    <HeaderChild {...props} navigation={props.navigation} title="Favoris" />
     <FavoriItem {...props}/>
    </View>
 );
};

export default FavorisList;