import React from 'react'
import {View, ScrollView, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {connect} from 'react-redux';


function CardFavorite({item}) {
  return(
    <View>

    </View>
  );
}


function FavoriItem(props) {

  console.log(props.favoritePlace);
  const isFavorite = props.favoritePlace;

  const renderFavorite = isFavorite && isFavorite.map((item, index)=>{
    return (<CardFavorite key={index} item={item}/>);
  })

  return (
    <ScrollView>
      {renderFavorite}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const mapStateToProps = (state) => {
  return {
    favoritePlace:state.favoritePlace
  };
}

export default connect(mapStateToProps)(FavoriItem);