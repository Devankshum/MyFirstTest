import React,{useState} from 'react';
import {
  Button,
  View,
  Text
} from 'react-native';

const App = () => {
  
  const [value, SetValue] = useState({
    counter : 1,
    counter1 : 1
  })

  const {counter,counter1} = value;

  return (
            <View>
              <Text>Hello World</Text>
              <Text>Counter : {counter}</Text>
              <Text>Counter1 : {counter1}</Text>
            </View>            
          )
}

export default App;
