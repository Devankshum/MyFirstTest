import React,{useState} from 'react';
import {
  Button,
  View,
  Text
} from 'react-native';

const App = () => {
  
  const [value, SetValue] = useState({
    counter : 1
  })

  const {counter} = value;

  return (
            <View>
              <Text>Hello World</Text>
              <Text>Counter : {counter}</Text>
            </View>            
          )
}

export default App;
