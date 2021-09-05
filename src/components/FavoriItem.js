import React from 'react'
import {View, ScrollView, StyleSheet, TouchableOpacity, Text, Image} from 'react-native';
import {connect} from 'react-redux';


function CardFavorite(props) {
	const item = props.item;
	console.log(props);

  return(
    <View style={styles.card}>
      <Image source={item.image} style={styles.img} />
        <Text style={styles.text}>{item.detail}</Text>
    </View>
  );
}


  const renderFavorite = ({isFavorite})=>{ 
    if(isFavorite.length > 0){ 
      isFavorite.map((item, index)=>{
      return <CardFavorite key={index} item={item}/>;
      })
    }else{ 
    return(
        <View style={styles.noData}>
          <Text style={styles.no_text}>No data add to favorite</Text>
        </View>
      );
		}
  }
function FavoriItem(props) {

  const isFavorite = props.favoritePlace;

 

 

  return (
    <ScrollView style={styles.container}>
      {renderFavorite({isFavorite})}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:10
  },
  noData: {
		flex: 1,
		paddingHorizontal: 20,
		marginTop: 50,
		marginLeft: 50
  },
  no_text:{
    fontSize: 18,
    fontStyle:'italic',
    fontWeight:'bold',
    marginLeft: 23
  },
  img:{
    flex: 1,
    width: 60,
    height: 40,
  },
  text:{
    flex:4,
    fontStyle:'italic',
    fontSize:14
  },
  card:{
    flex: 1,
    borderBottomWidth:2,
    borderBottomColor:'#cccc',
		backgroundColor: '#cccc'
  }
});

const mapStateToProps = (state) => {
  return {
    favoritePlace:state.favoritePlace
  };
}

export default connect(mapStateToProps)(FavoriItem);