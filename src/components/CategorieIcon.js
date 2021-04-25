import * as React from 'react';
import { View  , StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../consts/colors';

const CategoriesIcon = () => {
    
  return (<View style={styles.container}>
   
    <View style={styles.iconContainer}>
      <Icon name='flight' size={28} color={COLORS.primary}  />
    </View>
    
    <View style={styles.iconContainer}>
          <Icon name='beach-access' size={28} color={COLORS.primary} />

    </View>
    <View style={styles.iconContainer}>
          <Icon name='near-me' size={28} color={COLORS.primary} />

    </View>
    <View style={styles.iconContainer}>
          <Icon name="place" size={28} color={COLORS.primary} />

    </View>
  </View>
  );
    
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-between'
  },
  iconContainer: {
    height: 60,
    width: 60,
    backgroundColor: COLORS.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    
  }
})
  
export default CategoriesIcon