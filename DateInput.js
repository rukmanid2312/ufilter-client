import { StyleSheet, Text, View ,TextInput,Button} from 'react-native';
import {useState} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
export const DateInput = () => {
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [text,setText]=useState('Empty');
  
    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShow(false);
      setDate(currentDate);
      let tempDate=new Date(currentDate);
      setText(tempDate.getDate());
    };
  
    const showMode = (currentMode) => {
      setShow(true);
      setMode(currentMode);
    };
  
    const showDatepicker = () => {
      showMode('date');
    };
  
    const showTimepicker = () => {
      showMode('time');
    };
  
    return (
      <View>
 
 
      
        
       
       
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            style={{zIndex:10000000000,backgroundColor:"red"}}
            onChange={onChange}
          />
       
      </View>
    );
  };