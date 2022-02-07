import React from 'react';
import {
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import List from './src/components/List';



const App = () => {



  return (
    <View style={{flex:1, backgroundColor:'#fff'}}>
        <List/>
    </View>
  );
};



export default App;
