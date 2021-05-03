
import * as React from 'react';
import { SafeAreaView, StyleSheet, View,FlatList  , StatusBar , Dimensions , ScrollView, Platform ,Text} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons'
import COLORS from '../../consts/colors'
import Place from '../../consts/place';
import ListCategory from '../../components/ListCategory';
import Cards from '../../components/Cards';
import Recommended from '../../components/RecommendeCard';

const {width} = Dimensions.get('screen')

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}  >
      <StatusBar translucent={false} backgroundColor={COLORS.primary} />
      {Platform === 'ios' ? (
        <StatusBar style={{backgroundColor:'red'}} />
      ):null }
    <View style={styles.header}>
      <Icon name="sort" size={28} color={COLORS.white} />
      <Icon name='notifications' size={28} color={COLORS.white} />
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
        <Text style={styles.sectionTitle} >Places</Text>
        <View>
          <FlatList
            contentContainerStyle={{paddingLeft:20}}
            data={Place}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <Cards place={item} navigation={navigation} />}
          />
          <Text style={styles.sectionTitle} >Recommended</Text>
          <FlatList
            snapToInterval={ 20}
            contentContainerStyle={{ paddingLeft: 20, paddingBottom:20 }}
            data={Place}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item})=> <Recommended place={item} navigation={navigation} />}
          />
        </View>
        
       
    </ScrollView>
  </SafeAreaView>
  );
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
    elevation: 2,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    shadowColor:COLORS.grey
  },
  sectionTitle: {
    marginHorizontal: 20,
    marginVertical: 20,
    fontWeight: 'bold',
    fontSize: 20,
  }
});

export default HomeScreen;