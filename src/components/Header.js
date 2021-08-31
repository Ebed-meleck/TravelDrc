import React from 'react';
import { Appbar } from "react-native-paper";
import { StyleSheet , Platform, View, TouchableOpacity} from 'react-native';
import COLORS from '../consts/colors'
import Icon from 'react-native-vector-icons/MaterialIcons';


const Header = ({navigation}) => {
  return (
    <>
      {Platform.OS === 'ios' ? (
        <Appbar.Header style={styles.headerStyle} />
     ):null}
      <View style={styles.header}>
          <TouchableOpacity activeOpacity={0.5}
            onPress={() => navigation.openDrawer()}
          >
            <Icon name="sort" size={28} color={COLORS.white}
            />
          </TouchableOpacity>
          
        </View>
    </>
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: COLORS.primary,
    opacity: 0.2,
    flex:1
  },
  header: {
     marginTop:0,
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor:COLORS.primary
  },
})

export default Header;