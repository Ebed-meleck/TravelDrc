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

  const noData = () =>{
    if(isFavorite.length === 0){
      return(
        <View>
          <Text>No data add to favorite </Text>
        </View>
      );
    }
  }

  return (
    <ScrollView>
      {renderFavorite}
      {noData}
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