
import * as React from 'react';
import { SafeAreaView, StyleSheet, View, StatusBar , ScrollView, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import COLORS from '../../consts/colors'

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
        <Text style={styles.headerTitle}>
          Explorer maintenant
        </Text>
      </View>
    </ScrollView>
  </SafeAreaView>)
};

const styles = StyleSheet.create({
  header: {
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
  }
});

export default HomeScreen;