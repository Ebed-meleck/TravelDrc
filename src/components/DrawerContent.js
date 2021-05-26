import  React,{useState, useContext} from 'react';
import { DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer';
import {View, StyleSheet} from 'react-native';
import {
  Avatar,
  Title,
  Drawer,
  TouchableRipple,
  Switch,
  Text
} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '@react-navigation/native';
import { AuthContext } from './context';






const DrawerContent = (props) => {

  //const paperTheme = useTheme();
  //const { toggleTheme } = useContext(AuthContext);

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
            <Drawer.Item
              icon='home-outline'
              label='Acceuil'
              onPress={()=>{ props.navigation.navigate('home') }}
            />

            <Drawer.Item
              icon='star-outline'
              label='Mes favoris'
              onPress={()=>{ alert('Dans le prochain jour sa sera disponible')}}
            />
            <Drawer.Item
              icon='bookmark-multiple-outline'
              label='Enregistrement'
              onPress={()=>{alert('Dans le prochain jour sa sera disponible')}}
            />
            <Drawer.Item
              icon='account-check-outline'
              label='Support'
              onPress={()=>{  alert('Dans le prochain jour sa sera disponible') }}
            />
            </Drawer.Section>
          <Drawer.Section title='Preferences' disabled  >
            <TouchableRipple onPress={() => { }}>
              <View style={styles.preferences}>
                <View pointerEvents='none' >
                  <Text>Dark theme</Text>
                </View>
                <Switch  />
              </View>
              
                </TouchableRipple>
              </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection} >
            <Drawer.Item
              icon='application'
              label='Version 1.0.0'
            />
            </Drawer.Section>
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
  },
     bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
  },
  preferences: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
     }
});

export default DrawerContent;