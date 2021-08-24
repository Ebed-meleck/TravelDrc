import React from 'react';
import { Appbar } from "react-native-paper";
import { StyleSheet , Platform} from 'react-native';
import COLORS from '../consts/colors'



const Header = () => {
  return (
    <>
      {Platform.OS === 'ios' ? (
        <Appbar.Header style={styles.headerStyle} />
     ):null}
    </>
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    
    backgroundColor: COLORS.primary,
    opacity: 0.2,
    flex:1
  }
})

export default Header;