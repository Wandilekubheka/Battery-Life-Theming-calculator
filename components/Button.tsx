import { View, Text,TouchableOpacity, StyleSheet, useWindowDimensions } from 'react-native'
import React from 'react'
import { useBatteryLevel } from 'expo-battery'

type Props = {
    text: any,
    callback: any
}

const Button = ({text,callback}: Props) => {
    const {width} = useWindowDimensions()
    const buttonSize = width/5
    const padding = buttonSize /5 
    const batteryLevel  = useBatteryLevel()
    const buttonColor = batteryLevel >= 50 ? "green" : "red"
  return (
    <TouchableOpacity onPress={() =>{callback(text)}} style={[styles.container,{marginLeft:padding,width:buttonSize,backgroundColor:buttonColor}]}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

export default Button


const styles = StyleSheet.create({
    container:{
        aspectRatio:1,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:999

    },text:{
        fontWeight:"condensedBold",
        fontSize:25,
    }
})