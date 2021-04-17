import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../consts/colors';
import CategoriesIcon from './CategorieIcon';

const categoriesIcon = [
    <Icon name='flight' size={28} color={COLORS.primary} />,
    <Icon name='beach-access' size={28} color={COLORS.primary} />,
    <Icon name='near-me' size={28} color={COLORS.primary} />,
    <Icon name="place" size={28} color={COLORS.primary} />
  ];

const ListCategory = () => {
  

  return (
   <View style={styles.categoryContainer} >
       
      {categoriesIcon.map((icon,index) => (
        <View key={index} > {icon} </View>))}
      
   </View>
     
      
   
  );
    
}
const styles = StyleSheet.create({
  categoryContainer: {
    marginTop: 60,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent:'space-between'
  },
  iconContainer: {
    height: 60,
    width: 60,
    justifyContent: 'center',
    backgroundColor: COLORS.secondary,
    alignItems: 'center',
    
}
})
export default ListCategory