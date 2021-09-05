import React from 'react';
import {View, StyleSheet, TouchableOpacity, Platform, Text} from 'react-native';
import COLORS from '../consts/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Appbar } from 'react-native-paper';

function HeaderChild(props) {

  const navigation = props.navigation;
  const title = props.title;
  return (
    <View style=
      {{flexDirection:'row',
       backgroundColor: COLORS.primary,
       justifyContent:'flex-start'
       }} >
      {Platform.OS === 'ios' ? (
        <Appbar.Header style={styles.headerChild} />
     ):null}
      <View style={styles.header2}>
          <TouchableOpacity activeOpacity={0.5}
            onPress={() => navigation.goBack()}
          >
            <Icon 
              name='arrow-back-ios'
              size={28} color={COLORS.white}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.text} >{title}</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  headerChild:{
     backgroundColor: COLORS.primary,
    opacity: 0.2,
    flex:1
  },
  header2:{
     marginTop:0,
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor:COLORS.primary
  },
  text:{
    color: COLORS.white,
    marginLeft:80,
    fontSize: 20,
    marginTop:20
  }
});

export default HeaderChild;
