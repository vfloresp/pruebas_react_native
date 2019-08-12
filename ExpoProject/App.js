import React, { Component } from 'react';
import { FlatList, Image, Button, StyleSheet, Text, View } from 'react-native';



export default class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      data: [
        {
          name:'Harry',
          image:''
        },
        {
          name:'James',
          image:''
        },
        {
          name:'Chuchito',
          image:''
        },
        {
          name:'Jos',
          image:''
        },
        {
          name:'Owen',
          image:''
        }
      ]
    }
  }

  render(){
    return (
      <View style={styles.container}>
        <FlatList 
          data={this.state.data}
          keyExtractor={(item,index) => index.toString() }
          renderItem={({item}) =>(
            <View>
              <Text>{item}</Text>
            </View>
          )}
        /> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});


