import * as React from 'react';
import {View, StatusBar} from 'react-native';
import COLORS from '../../consts/colors'
import Header from '../../components/Header';
import PlaceItem from '../../components/PlaceItem';


 
function HomeScreen ({navigation}) {

    return (
      <View style={{ flex: 1, backgroundColor: COLORS.white }}  >
        <StatusBar translucent={false} backgroundColor={COLORS.primary} />
        <Header navigation={navigation} title="Accueil" />
        <PlaceItem navigation={navigation} />
      </View>
    );
}

export default HomeScreen;