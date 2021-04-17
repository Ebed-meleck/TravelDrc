import * as React from 'react';
import { View  , StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../consts/colors'

const CategoriesIcon = () => {
    
  return <View style={styles.container}>
   
       <Icon name='flight' size={28} color={COLORS.primary}  style={styles.iconcontainer} />
    <Icon name='beach-access' size={28} color={COLORS.primary}  />
    <Icon name='near-me' size={28} color={COLORS.primary}  />
    <Icon name="place" size={28} color={COLORS.primary}  />
  
   
    
  
  </View>
    
}
const styles = StyleSheet.create({
  container: {
    width: '80%',
    flex: 1,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-between'
  },
  iconContainer: {
    height: 60,
    width: 60,
    justifyContent: 'space-between',
    backgroundColor: COLORS.secondary,
    alignItems:'center'
}
})
  
export default CategoriesIcon