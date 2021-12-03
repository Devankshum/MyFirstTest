import React,{useState} from 'react';
import {
  Button,
  View,
  Text
} from 'react-native';

const App = () => {
  
  const [value, SetValue] = useState({
    counter : 1,
    counter1 : 1,
    counter2 : 1
  })

  const {counter,counter1,counter2} = value;

  return (
            <View>
              <Text>Hello World</Text>
              <Text>Counter : {counter}</Text>
              <Text>Counter1 : {counter1}</Text>
              <Text>Counter2 : {counter2}</Text>
            </View>            
          )
}

export default App;
