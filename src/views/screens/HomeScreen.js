
import * as React from 'react';
import { SafeAreaView, StyleSheet, View, StatusBar , ScrollView, Text} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons'
import COLORS from '../../consts/colors'
import ListCategory from '../../components/ListCategory';

const HomeScreen = () => {
  return (<SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}  >
    <StatusBar translucent={false} backgroundColor={COLORS.primary} />
    <View style={styles.header}>
      <Icon name="sort" size={28} color={COLORS.white} />
      <Icon  name='notifications' size={28} color={COLORS.white} />
    </View>
    <ScrollView
    showsVerticalScrollIndicator={false} 
    >
      <View style={styles.scroll} >
        <View>
         <Text style={styles.headerTitle}>
          Explorer 
        </Text>
        <Text style={styles.headerTitle}>
          les meilleurs endroits
          </Text>
          <View style={styles.inputContainer}>
            <Icon name='search' size={28} />
            <TextInput placeholder="rechercher l'endroit" style={COLORS.grey} />
          </View>
        </View>
      </View>
      <ListCategory />
    </ScrollView>
  </SafeAreaView>)
};

const styles = StyleSheet.create({
  header: {
    marginTop:0,
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor:COLORS.primary
  },
  scroll: {
    backgroundColor: COLORS.primary,
    height: 120,
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color:COLORS.white
  },
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    height: 60,
    width: '100%',
    borderRadius: 10,
    position: 'absolute',
    top: 90,
    paddingHorizontal: 20,
    alignItems: 'center',

  }
});

export default HomeScreen;