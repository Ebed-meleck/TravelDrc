import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import CategoriesIcon from './CategorieIcon';


const ListCategory = () => {
    return (
    <View style={styles.categoryContainer} >
      <CategoriesIcon />
    </View>
  );
};

const styles = StyleSheet.create({
  categoryContainer: {
    marginTop: 60,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
 
});
export default ListCategory;