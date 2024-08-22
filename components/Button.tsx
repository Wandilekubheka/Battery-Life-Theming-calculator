import { View, Text,TouchableOpacity, StyleSheet, useWindowDimensions } from 'react-native'
import React from 'react'

type Props = {
    text: any,
    callback: any
}

const Button = ({text,callback}: Props) => {
    const {width,height} = useWindowDimensions()
    const buttonSize = width/5
    const padding = buttonSize /5 
  return (
    <TouchableOpacity style={[styles.container,{marginLeft:padding,width:buttonSize}]}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

export default Button


const styles = StyleSheet.create({
    container:{
        aspectRatio:1,
        backgroundColor:'green',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:999

    },text:{
        fontWeight:"condensedBold",
        fontSize:25,
    }
})