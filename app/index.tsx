import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import Button from '@/components/Button'

type Props = {}

const Index = (props: Props) => {
  const [sum,setSum] = useState("hey")
  const buttons = ['ac','%','d','/','7','8','9','*','4','5','6','-','1','2','3','+','0','.','l','=']

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light"/>
      <View style={styles.displayContainer}>
      <Text style={styles.displayText}>{sum}</Text>
      </View>
      <View style={{flex:2}}>

      <FlatList 
      contentContainerStyle={styles.ButtonsContainer}
        scrollEnabled={false}
        numColumns={4}
        data={buttons}
        keyExtractor={item => item}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <Button callback={setSum} text={item} />}
      />
      </View>

    </SafeAreaView>
  )
}

export default Index

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#0D0D0D'
  },displayText:{
    color:'white',
    fontSize:50,
    fontWeight:'bold',
    textAlign:'right',
    alignItems:'center'
  },displayContainer:{
    justifyContent:'center',
    paddingRight:40,
    flex:1

  },ButtonsContainer:{
    justifyContent:'space-between',
    flex:1,
  }

})