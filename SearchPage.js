import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TextInput,Button,FlatList,Image,Linking,ScrollView,TouchableOpacity} from 'react-native';
import { DateInput } from './DateInput';
import ImagePage from './ImagePage';
import axios from 'axios';
import DateTimePicker from '@react-native-community/datetimepicker';



const SearchPage=()=> {
    const [channelId, setChannelID] = React.useState('');
    const [videoUrl, setVideoUrl] = React.useState('');
    const [year, setYear] = React.useState('');
    const [result,setResult]=React.useState([]);
    const [videoId, setVideoId] = React.useState('');
    const [fromDate, setFromDate] = useState(new Date());
    const [toDate, setToDate] = useState(new Date());
    const [mode, setMode] = useState('date');
   
   
  
    const onFromDateChange = (event, selectedDate) => {
        console.log(selectedDate);
      const currentDate = selectedDate || fromDate;
      setFromDate(currentDate);
    };
    const onToDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || toDate;
        setToDate(currentDate);
      };
    const openUrlHandler=(videoId)=>{
        console.log(videoId);
        
        setVideoId(videoId);
        Linking.openURL(`https://www.youtube.com/watch?v=${videoId}`);
       //www.youtube.com/watch?v=yourVideoId
       //Linking.openURL(`vnd.youtube:${videoId}`);
    }
    const searchHandler=async()=>{
            let response=await axios.get(`http://localhost:3000/search?vrl=${videoUrl}&year=${year}&fromdate=${fromDate}&todate=${toDate}`);
          
            setResult(response.data.videos);
    }
  return (
    <View style={styles.search_container}>


      <View style={styles.form_container}>
        <TextInput
            style={styles.input}
            onChangeText={setVideoUrl}
            value={videoUrl}
            placeholder="Enter Video url"
            
        />
     
        <Text style={styles.label}>Select From Date</Text>
         <DateTimePicker
            testID="dateTimePicker"
            value={fromDate}
            mode={mode}
            is24Hour={true}
            display="default"
            style={styles.datepick}
            onChange={onFromDateChange}
            placeholder="toDate"
          />

        <Text style={styles.label}>Select To Date</Text>
         <DateTimePicker
            testID="dateTimePicker"
            value={toDate}
            mode={mode}
            is24Hour={true}
            display="default"
            style={styles.datepick}
            onChange={onToDateChange}
            placeholder="From Date"
          />
       
      <View>
      <Button style={styles.search_btn}   backgroundColor="#fff" height="100" width="120"  title="Search" onPress={searchHandler} >{"Search"}</Button>
      </View>

      </View>
      {result.length!==0 &&       
      <ScrollView style={styles.scrollView}>
               {
                  result.map((item, index) => {
                  
                    return(
                    <TouchableOpacity onPress={()=>openUrlHandler(item.id.videoId)} key={item.id.videoId}>
                            <View style={styles.item}  >
                    <ImagePage imgUrl={item.snippet.thumbnails.medium.url}/>
                  <Text style={styles.video_title} >{item.snippet.title}</Text>
                </View>
                    </TouchableOpacity>
                    
                  )})
               }
            </ScrollView>
        
       
     
      }
      
    </View>
  );
}

const styles = StyleSheet.create({
    search_container: {
        flex:0,
    width:"100%",
    backgroundColor:"#000",
    justifyContent:'flex-start'
  },
  form_container:{
    flex:0,
    justifyContent:'flex-start'
  },
 input:{
    backgroundColor:"#eee",
    border:2,
    borderRadius:4,
    height:40,
    width:"100%",
    padding:4,
    color:"#000",
    marginBottom:10
 },
 search_btn:{
    backgroundColor:"red",
    color:"#fff",
    padding:11,
    width:80,
    height:40,
    border:4,
    borderColor:"#fff",
    borderRadius:6,
    color: '#1E90FF',
    fontSize: 20,
    borderColor: '#1E90FF',
    borderWidth: 1,
    borderStyle: 'solid'

 },
 search_list_container:{
    backgroundColor:"red",
    marginTop:20,
    width:"100%",
    flex:0
 },
 tinylogo:{
    width:120,
    height:90
 },
 item:{
    display:"flex",
    justifyContent:"flex-start",
    backgroundColor:"#fff",
    width:"100%",
    margin:11,
   padding:11, 
   border:11,
   borderColor:"red"
 },
 video_title:{
    color:"red",
    border:6,
    borderColor:"#fff",
    fontSize:20
 },
 scrollView:{
    maxHeight:600
 },
 datepick:{
    backgroundColor:"#eee",
    border:2,
    borderRadius:4,
 },
 label:{
    color:"#fff",
    fontSize:14,
    marginBottom:4,
    paddingTop:11,
    paddingBottom:11
 }
});
export default SearchPage;
