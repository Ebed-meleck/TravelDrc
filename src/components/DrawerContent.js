import * as React from 'react';
import { DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer';
import {View, StyleSheet} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  TouchableRipple,
  Switch,
  Text
} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialIcons';







const DrawerContent = (props) => {


  return (
    <View style={{flex:1}} >
      <DrawerContentScrollView  {...props} >
        <View style={styles.drawerContent} >
          <View style={styles.app} >
            <View style={{flexDirection:'row', marginTop:20, marginLeft:50}} >
               <Avatar.Image
              source={require('../assets/icon.png')}
              size={70}
            />
            </View>
            <View style={{marginLeft:30}} >
              <Title>Travel DRC</Title>
            </View>
          </View>
          <Drawer.Section  style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => {
                <Icon
                  name='home-outline'
                  color={color}
                  size={size} 
                />
              }}
              label='Acceuil'
              onPress={()=>{ props.navigation.navigate('home') }}
            />

            <DrawerItem
              icon={({ color, size }) => {
                <Icon
                  name='start'
                  color={color}
                  size={size}
                />
              }}
              label='Mes favoris'
              onPress={()=>{ props.navigation.navigate('favoris')}}
            />
            </Drawer.Section>

        </View>
      </DrawerContentScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1
  },
  app: {
    paddingLeft: 40,
    paddingBottom:10,
    borderBottomColor: 'black',
    borderBottomWidth:StyleSheet.hairlineWidth
  },
  drawerSection: {
    marginTop: 15,
  }
});

export default DrawerContent;