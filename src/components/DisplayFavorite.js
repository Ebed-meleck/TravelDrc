import React from 'react'
import {View, StyleSheet, Image} from 'react-native';
import EnlargeShink from '../Animation/EnlargeShink';

class DisplayFavorite extends React.Component {

  constructor(props){
    super(props);
  }
 
 _renderIcon = () => {
    const place = props.place;
    const Favorite = props.FavoritePlace;
    let sourceImage = require('../assets/non_ic_favorite_border.png'); 
    let  shouldEnlarge = false;
    if(Favorite.findIndex((item) => item.id === place.id) !== -1 ){
       sourceImage = require('../assets/image_ic_favorite.png');
       shouldEnlarge = true;
    }
    return(
     <EnlargeShink shouldEnlarge={shouldEnlarge}>   
        <Image source={sourceImage} styles={styles.favorite_ic} />
      </EnlargeShink>
    )
  }

  render() { 
    return (
      <View>
        {this._renderIcon}
      </View>
    );
  }

}
const styles = StyleSheet.create({
    favorite_ic:{
      width: 30,
      height: 30
    }
    })

export default DisplayFavorite;