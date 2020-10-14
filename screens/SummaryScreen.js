import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import db from '../config';


class SummaryScreen extends React.Component{
 constructor() {
    super();
    this.state = {
      present_students: [],
      absent_students: [],
    };
  }

  getTodaysDate(){
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;

    var yyyy = today.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    today = dd + '-' + mm + '-' + yyyy;
    return today;
  }

  componentDidMount = async () => {
    var today = await this.getTodaysDate();

    var students_ref = db.ref('/').on('value',(data)=>{
      var class_a = data.val();
      var present_students = []
      var absent_students = []
      for(var i in class_a){
        if(class_a[i][today] === 'present'){
          present_students.push(class_a[i])
        }
        if(class_a[i][today] === 'absent'){
          absent_students.push(class_a[i])
        }
      }

      present_students.sort(function(a, b) {
        return a.roll_no - b.roll_no;
      });
  
      absent_students.sort(function(a, b) {
        return a.roll_no - b.roll_no;
      });

      this.setState({
        present_students : present_students,
        absent_students : absent_students
      })
    })
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 0.1 }}>
          
        </View>
        <Text style={styles.title}>Students Present</Text>
        <View style={styles.presentContainer}>
          {
            this.state.present_students.map((student, index)=>(
                <Text style={{fontSize:20, fontWeight:'200'}}>{student.name}</Text>
              )
            )
          }
        </View>
        <Text style={styles.title}>Students Absent</Text>

        <View style={styles.absentContainer}>
          {
            this.state.absent_students.map((student, index)=>(
                <Text style={{fontSize:20, fontWeight:'200'}}>{student.name}</Text>
              )
            )
          }
        </View>
        <View style={{flex:0.1, flexDirection:'row', justifyContent:'space-around', top:30}}>
          <Text style = {{fontWeight:'200', fontSize:20}}>Present: {this.state.present_students.length}</Text>
          <Text style = {{fontWeight:'200', fontSize:20}}>Absent: {this.state.absent_students.length}</Text>
        </View>
        <TouchableOpacity
              style={styles.footer}
              onPress={() => {
                this.props.navigation.navigate('HomeScreen');
              }}>
              <Text style = {{color:'white', fontWeight:'200', fontSize:20}}>DONE</Text>
            </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  presentContainer: {
  
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:40,
  },
  absentContainer :{
    
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:40,
  },
  title:{
    fontSize:20, 
    fontWeight:'bold',
    alignSelf:'center', 
    marginTop:40,
  },
  footer: {
    top:40,
    left: 0,
    right: 0,
    bottom: 0,
    height: 60,
    width:150,
    borderRadius:20,
    alignItems: 'center',
    alignSelf:'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
    marginTop:10
  }
});


export default SummaryScreen;